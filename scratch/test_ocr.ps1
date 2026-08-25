# test_ocr.ps1
[void][Windows.Security.Cryptography.CryptographicBuffer, Windows.Security.Cryptography, ContentType=WindowsRuntime]
[void][Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
[void][Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime]
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]

$imgPath = Resolve-Path "test_page_0.png"
Write-Output "Image Path: $imgPath"

$file = [Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath).GetAwaiter().GetResult()
$stream = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read).GetAwaiter().GetResult()
$decoder = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream).GetAwaiter().GetResult()
$bitmap = $decoder.GetSoftwareBitmapAsync().GetAwaiter().GetResult()

Write-Output "Bitmap loaded successfully. Width: $($bitmap.PixelWidth), Height: $($bitmap.PixelHeight)"

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if ($null -eq $engine) {
    Write-Output "OcrEngine is NULL! No language engine found."
} else {
    Write-Output "OcrEngine created successfully. Language: $($engine.RecognizerLanguage.LanguageTag)"
    $result = $engine.RecognizeAsync($bitmap).GetAwaiter().GetResult()
    Write-Output "OCR Result Text length: $($result.Text.Length)"
    Write-Output "OCR Result Text: $($result.Text)"
}
