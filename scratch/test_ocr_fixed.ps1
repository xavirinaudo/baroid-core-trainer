# test_ocr_fixed.ps1
[void][Windows.Security.Cryptography.CryptographicBuffer, Windows.Security.Cryptography, ContentType=WindowsRuntime]
[void][Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
[void][Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime]
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]

$imgPath = Resolve-Path "test_page_0.png"
Write-Output "Image Path: $imgPath"

$task1 = [Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath)
while (-not $task1.IsCompleted) { [System.Threading.Thread]::Sleep(10) }
$file = $task1.GetResults()

$task2 = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
while (-not $task2.IsCompleted) { [System.Threading.Thread]::Sleep(10) }
$stream = $task2.GetResults()

$task3 = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
while (-not $task3.IsCompleted) { [System.Threading.Thread]::Sleep(10) }
$decoder = $task3.GetResults()

$task4 = $decoder.GetSoftwareBitmapAsync()
while (-not $task4.IsCompleted) { [System.Threading.Thread]::Sleep(10) }
$bitmap = $task4.GetResults()

Write-Output "Bitmap loaded successfully. Width: $($bitmap.PixelWidth), Height: $($bitmap.PixelHeight)"

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if ($null -eq $engine) {
    Write-Output "OcrEngine is NULL!"
} else {
    Write-Output "OcrEngine created successfully. Language: $($engine.RecognizerLanguage.LanguageTag)"
    $task5 = $engine.RecognizeAsync($bitmap)
    while (-not $task5.IsCompleted) { [System.Threading.Thread]::Sleep(10) }
    $result = $task5.GetResults()
    Write-Output "OCR Result Text length: $($result.Text.Length)"
    Write-Output "OCR Result Text: $($result.Text)"
}
