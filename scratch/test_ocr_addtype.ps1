# test_ocr_addtype.ps1
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
            dynamic fileTask = getFileMethod.Invoke(null, new object[] { absPath });
            dynamic file = Await(fileTask);
            
            dynamic streamTask = file.OpenAsync(0); // 0 = Read
            dynamic stream = Await(streamTask);
            
            Type decoderType = Type.GetType("Windows.Graphics.Imaging.BitmapDecoder, Windows, Version=255.255.255.255, Culture=neutral, PublicKeyToken=null, ContentType=WindowsRuntime");
            if (decoderType == null) return "ERROR: BitmapDecoder type not found";
            
            MethodInfo createAsyncMethod = null;
            foreach (var m in decoderType.GetMethods(BindingFlags.Public | BindingFlags.Static)) {
                if (m.Name == "CreateAsync" && m.GetParameters().Length == 1) {
                    createAsyncMethod = m;
                    break;
                }
            }
            dynamic decoderTask = createAsyncMethod.Invoke(null, new object[] { stream });
            dynamic decoder = Await(decoderTask);
            
            dynamic bitmapTask = decoder.GetSoftwareBitmapAsync();
            dynamic bitmap = Await(bitmapTask);
            
            Type engineType = Type.GetType("Windows.Media.Ocr.OcrEngine, Windows, Version=255.255.255.255, Culture=neutral, PublicKeyToken=null, ContentType=WindowsRuntime");
            if (engineType == null) return "ERROR: OcrEngine type not found";
            
            var tryCreateMethod = engineType.GetMethod("TryCreateFromUserProfileLanguages", new Type[0]);
            dynamic engine = tryCreateMethod.Invoke(null, null);
            if (engine == null) return "ERROR: OcrEngine is null";
            
            dynamic resultTask = engine.RecognizeAsync(bitmap);
            dynamic result = Await(resultTask);
            
            return result.Text;
        } catch (Exception ex) {
            return "ERROR: " + ex.Message + "\n" + ex.StackTrace;
        }
    }
    
    private static object Await(dynamic asyncOp) {
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
"@

Add-Type -TypeDefinition $csharpCode -ReferencedAssemblies @(
    "System.dll",
    "System.Core.dll",
    "Microsoft.CSharp.dll"
)

$imgPath = Resolve-Path "test_page_0.png"
Write-Output "Running OCR via compiled-in-memory C# Helper on $imgPath..."
$res = [OcrHelper]::RunOcr($imgPath)
Write-Output "Result length: $($res.Length)"
Write-Output "Result sample: $($res.Substring(0, [Math]::Min($res.Length, 150)))"
