using System;
using System.IO;
using System.Threading;
using System.Reflection;

class Program {
    static void Main(string[] args) {
        if (args.Length < 2) {
            Console.WriteLine("Usage: ocr.exe <image_path> <output_txt_path>");
            return;
        }
        try {
            string imgPath = Path.GetFullPath(args[0]);
            string outPath = Path.GetFullPath(args[1]);
            
            // 1. Get file
            dynamic fileTask = CallStatic("Windows.Storage.StorageFile", "GetFileFromPathAsync", imgPath);
            dynamic file = Await(fileTask);
            
            // 2. Open stream
            dynamic streamTask = file.OpenAsync(0); // 0 = FileAccessMode.Read
            dynamic stream = Await(streamTask);
            
            // 3. Create decoder
            dynamic decoderTask = CallStatic("Windows.Graphics.Imaging.BitmapDecoder", "CreateAsync", stream);
            dynamic decoder = Await(decoderTask);
            
            // 4. Get bitmap
            dynamic bitmapTask = decoder.GetSoftwareBitmapAsync();
            dynamic bitmap = Await(bitmapTask);
            
            // 5. Create engine
            dynamic engine = CallStatic("Windows.Media.Ocr.OcrEngine", "TryCreateFromUserProfileLanguages");
            if (engine == null) {
                File.WriteAllText(outPath, "ERROR: OcrEngine is null");
                return;
            }
            
            // 6. Recognize
            dynamic resultTask = engine.RecognizeAsync(bitmap);
            dynamic result = Await(resultTask);
            
            File.WriteAllText(outPath, result.Text);
            Console.WriteLine("SUCCESS");
        } catch (Exception ex) {
            Console.WriteLine("ERROR: " + ex.Message + "\n" + ex.StackTrace);
        }
    }
    
    static object CallStatic(string typeName, string methodName, params object[] args) {
        // Resolve type from WinRT metadata by assembly name loading
        Type type = Type.GetType(typeName + ", Windows, Version=255.255.255.255, Culture=neutral, PublicKeyToken=null, ContentType=WindowsRuntime");
        if (type == null) {
            type = Type.GetType(typeName);
        }
        if (type == null) {
            throw new Exception("Type not found: " + typeName);
        }
        
        // Find static method (since type is loaded as WinRT runtime type, we must search its static methods)
        MethodInfo method = null;
        foreach (var m in type.GetMethods(BindingFlags.Public | BindingFlags.Static)) {
            if (m.Name == methodName && m.GetParameters().Length == args.Length) {
                method = m;
                break;
            }
        }
        if (method == null) {
            throw new Exception("Static method not found: " + methodName + " on " + typeName);
        }
        return method.Invoke(null, args);
    }
    
    static object Await(dynamic asyncOp) {
        if (asyncOp == null) throw new Exception("Async operation is null");
        while (asyncOp.Status.ToString() == "Started") {
            Thread.Sleep(10);
        }
        if (asyncOp.Status.ToString() == "Error") {
            throw new Exception("WinRT Error: " + asyncOp.ErrorCode.ToString());
        }
        return asyncOp.GetResults();
    }
}
