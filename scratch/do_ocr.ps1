[void][Windows.Security.Cryptography.CryptographicBuffer, Windows.Security.Cryptography, ContentType=WindowsRuntime]
[void][Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
[void][Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime]
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]

$imgPath = (Resolve-Path $args[0]).Path
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

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if ($null -ne $engine) {
    $task5 = $engine.RecognizeAsync($bitmap)
    while (-not $task5.IsCompleted) { [System.Threading.Thread]::Sleep(10) }
    $result = $task5.GetResults()
    Write-Output $result.Text
}
