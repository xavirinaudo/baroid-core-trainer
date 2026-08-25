# test_csharp_ocr.ps1
$csharpCode = @"
using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Storage;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;

public class OcrHelper {
    public static string RunOcr(string imgPath) {
        try {
            var file = StorageFile.GetFileFromPathAsync(imgPath).AsTask().GetAwaiter().GetResult();
            var stream = file.OpenAsync(FileAccessMode.Read).AsTask().GetAwaiter().GetResult();
            var decoder = BitmapDecoder.CreateAsync(stream).AsTask().GetAwaiter().GetResult();
            var bitmap = decoder.GetSoftwareBitmapAsync().AsTask().GetAwaiter().GetResult();
            var engine = OcrEngine.TryCreateFromUserProfileLanguages();
            if (engine == null) return "ERROR: OcrEngine is null";
            var result = engine.RecognizeAsync(bitmap).AsTask().GetAwaiter().GetResult();
            return result.Text;
        } catch (Exception ex) {
            return "ERROR: " + ex.Message + "\n" + ex.StackTrace;
        }
    }
}
"@

Add-Type -TypeDefinition $csharpCode -ReferencedAssemblies @(
    "System.Runtime.WindowsRuntime",
    "C:\Windows\System32\WinMetadata\Windows.Foundation.winmd",
    "C:\Windows\System32\WinMetadata\Windows.Storage.winmd",
    "C:\Windows\System32\WinMetadata\Windows.Graphics.winmd",
    "C:\Windows\System32\WinMetadata\Windows.Media.winmd"
)

$imgPath = Resolve-Path "test_page_0.png"
Write-Output "Running OCR via C# Helper on $imgPath..."
$res = [OcrHelper]::RunOcr($imgPath)
Write-Output "Result: $res"
