# test_ocr_raw_com.ps1
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]

$imgPath = Resolve-Path "test_page_0.png"
$task1 = [Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath)

Write-Output "Task1 initial status: $($task1.Status)"
while ($task1.Status.ToString() -eq "Started") { [System.Threading.Thread]::Sleep(10) }
Write-Output "Task1 final status: $($task1.Status)"
$file = $task1.GetResults()
Write-Output "Got file: $($file.Name)"

$task2 = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
Write-Output "Task2 initial status: $($task2.Status)"
while ($task2.Status.ToString() -eq "Started") { [System.Threading.Thread]::Sleep(10) }
Write-Output "Task2 final status: $($task2.Status)"
$stream = $task2.GetResults()
Write-Output "Got stream: $($stream.GetType().FullName)"

$task3 = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
while ($task3.Status.ToString() -eq "Started") { [System.Threading.Thread]::Sleep(10) }
$decoder = $task3.GetResults()
Write-Output "Got decoder: $($decoder.GetType().FullName)"

$task4 = $decoder.GetSoftwareBitmapAsync()
while ($task4.Status.ToString() -eq "Started") { [System.Threading.Thread]::Sleep(10) }
$bitmap = $task4.GetResults()
Write-Output "Got bitmap: Width $($bitmap.PixelWidth), Height $($bitmap.PixelHeight)"

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
$task5 = $engine.RecognizeAsync($bitmap)
while ($task5.Status.ToString() -eq "Started") { [System.Threading.Thread]::Sleep(10) }
$result = $task5.GetResults()
Write-Output "OCR Result length: $($result.Text.Length)"
Write-Output "OCR Result: $($result.Text)"
