# test_ocr_fixed2.ps1
Add-Type -AssemblyName System.Runtime.WindowsRuntime
[void][Windows.Security.Cryptography.CryptographicBuffer, Windows.Security.Cryptography, ContentType=WindowsRuntime]
[void][Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
[void][Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime]
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]

$imgPath = Resolve-Path "test_page_0.png"
Write-Output "Image Path: $imgPath"

$task1 = [Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath)
$t1 = [System.WindowsRuntimeSystemExtensions]::AsTask($task1)
$t1.Wait()
$file = $t1.Result

$task2 = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
$t2 = [System.WindowsRuntimeSystemExtensions]::AsTask($task2)
$t2.Wait()
$stream = $t2.Result

$task3 = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
$t3 = [System.WindowsRuntimeSystemExtensions]::AsTask($task3)
$t3.Wait()
$decoder = $t3.Result

$task4 = $decoder.GetSoftwareBitmapAsync()
$t4 = [System.WindowsRuntimeSystemExtensions]::AsTask($task4)
$t4.Wait()
$bitmap = $t4.Result

Write-Output "Bitmap loaded successfully. Width: $($bitmap.PixelWidth), Height: $($bitmap.PixelHeight)"

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if ($null -eq $engine) {
    Write-Output "OcrEngine is NULL!"
} else {
    Write-Output "OcrEngine created successfully. Language: $($engine.RecognizerLanguage.LanguageTag)"
    $task5 = $engine.RecognizeAsync($bitmap)
    $t5 = [System.WindowsRuntimeSystemExtensions]::AsTask($task5)
    $t5.Wait()
    $result = $t5.Result
    Write-Output "OCR Result Text length: $($result.Text.Length)"
    Write-Output "OCR Result Text: $($result.Text)"
}
