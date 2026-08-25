# test_ocr_addtype3.ps1
$csharpCode = @"
using System;
using System.IO;
using System.Threading;
using System.Reflection;

public class OcrHelper {
    public static string RunOcr(string imgPath) {
        try {
            string absPath = Path.GetFullPath(imgPath);
            
            Type fileType = Type.GetType("Windows.Storage.StorageFile, Windows, Version=255.255.255.255, Culture=neutral, PublicKeyToken=null, ContentType=WindowsRuntime");
            if (fileType == null) return "ERROR: StorageFile type not found";
            
            var getFileMethod = fileType.GetMethod("GetFileFromPathAsync", new Type[] { typeof(string) });
            object fileTask = getFileMethod.Invoke(null, new object[] { absPath });
            object file = Await(fileTask);
            
            object streamTask = file.GetType().InvokeMember("OpenAsync", BindingFlags.InvokeMethod, null, file, new object[] { 0 }); // Read
            object stream = Await(streamTask);
            
            Type decoderType = Type.GetType("Windows.Graphics.Imaging.BitmapDecoder, Windows, Version=255.255.255.255, Culture=neutral, PublicKeyToken=null, ContentType=WindowsRuntime");
            if (decoderType == null) return "ERROR: BitmapDecoder type not found";
            
            MethodInfo createAsyncMethod = null;
            foreach (var m in decoderType.GetMethods(BindingFlags.Public | BindingFlags.Static)) {
                if (m.Name == "CreateAsync" && m.GetParameters().Length == 1) {
                    createAsyncMethod = m;
                    break;
                }
            }
            object decoderTask = createAsyncMethod.Invoke(null, new object[] { stream });
            object decoder = Await(decoderTask);
            
            object bitmapTask = decoder.GetType().InvokeMember("GetSoftwareBitmapAsync", BindingFlags.InvokeMethod, null, decoder, null);
            object bitmap = Await(bitmapTask);
            
            Type engineType = Type.GetType("Windows.Media.Ocr.OcrEngine, Windows, Version=255.255.255.255, Culture=neutral, PublicKeyToken=null, ContentType=WindowsRuntime");
            if (engineType == null) return "ERROR: OcrEngine type not found";
            
            var tryCreateMethod = engineType.GetMethod("TryCreateFromUserProfileLanguages", new Type[0]);
            object engine = tryCreateMethod.Invoke(null, null);
            if (engine == null) return "ERROR: OcrEngine is null";
            
            object resultTask = engine.GetType().InvokeMember("RecognizeAsync", BindingFlags.InvokeMethod, null, engine, new object[] { bitmap });
            object result = Await(resultTask);
            
            string text = (string)result.GetType().InvokeMember("get_Text", BindingFlags.GetProperty, null, result, null);
            return text;
        } catch (Exception ex) {
            return "ERROR: " + ex.Message + "\n" + ex.StackTrace;
        }
    }
    
    private static object Await(object asyncOp) {
        if (asyncOp == null) throw new Exception("Async operation is null");
        
        while (true) {
            object statusObj = asyncOp.GetType().InvokeMember("get_Status", BindingFlags.InvokeMethod, null, asyncOp, null);
            string status = statusObj.ToString();
            if (status == "Started") {
                Thread.Sleep(10);
            } else if (status == "Error") {
                object errCode = asyncOp.GetType().InvokeMember("get_ErrorCode", BindingFlags.InvokeMethod, null, asyncOp, null);
                throw new Exception("WinRT Error: " + errCode.ToString());
            } else {
                break;
            }
        }
        
        return asyncOp.GetType().InvokeMember("GetResults", BindingFlags.InvokeMethod, null, asyncOp, null);
    }
}
"@

Add-Type -TypeDefinition $csharpCode -ReferencedAssemblies @(
    "System.dll",
    "System.Core.dll",
    "Microsoft.CSharp.dll"
)

$imgPath = Resolve-Path "test_page_0.png"
Write-Output "Running OCR via compiled-in-memory C# Helper (pure reflection) on $imgPath..."
$res = [OcrHelper]::RunOcr($imgPath)
Write-Output "Result length: $($res.Length)"
Write-Output "Result sample: $($res.Substring(0, [Math]::Min($res.Length, 150)))"
