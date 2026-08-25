# test_ocr_fixed8.ps1
Add-Type -AssemblyName System.Runtime.WindowsRuntime
[void][Windows.Security.Cryptography.CryptographicBuffer, Windows.Security.Cryptography, ContentType=WindowsRuntime]
[void][Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
[void][Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime]
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]

function Await($asyncOperation, $type) {
    # Try as IAsyncOperation (1 generic parameter)
    try {
        $asTask1 = [System.WindowsRuntimeSystemExtensions].GetMethods() | 
            Where-Object { $_.Name -eq 'AsTask' -and $_.GetGenericArguments().Count -eq 1 -and $_.GetParameters().Count -eq 1 }
        $method1 = $asTask1[0].MakeGenericMethod($type)
        $task = $method1.Invoke($null, [object[]]@($asyncOperation))
        $task.Wait()
        return $task.Result
    } catch {
        # Fallback to IAsyncOperationWithProgress (2 generic parameters)
        $progressTypes = @([System.UInt64], [System.Int64], [System.UInt32], [System.Int32], [System.Double])
        foreach ($pType in $progressTypes) {
            try {
                $asTask2 = [System.WindowsRuntimeSystemExtensions].GetMethods() | 
                    Where-Object { $_.Name -eq 'AsTask' -and $_.GetGenericArguments().Count -eq 2 -and $_.GetParameters().Count -eq 1 }
                $method2 = $asTask2[0].MakeGenericMethod($type, $pType)
                $task = $method2.Invoke($null, [object[]]@($asyncOperation))
                $task.Wait()
                return $task.Result
            } catch {
                # Try next progress type
            }
        }
        throw "Could not await async operation: $_"
    }
}

$imgPath = Resolve-Path "test_page_0.png"
Write-Output "Image Path: $imgPath"

$task1 = [Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath)
$file = Await $task1 ([Windows.Storage.StorageFile])

$task2 = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
$stream = Await $task2 ([Windows.Storage.Streams.IRandomAccessStreamWithContentType])

$task3 = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
$decoder = Await $task3 ([Windows.Graphics.Imaging.BitmapDecoder])

$task4 = $decoder.GetSoftwareBitmapAsync()
$bitmap = Await $task4 ([Windows.Graphics.Imaging.SoftwareBitmap])

Write-Output "Bitmap loaded successfully. Width: $($bitmap.PixelWidth), Height: $($bitmap.PixelHeight)"

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if ($null -eq $engine) {
    Write-Output "OcrEngine is NULL!"
} else {
    Write-Output "OcrEngine created successfully. Language: $($engine.RecognizerLanguage.LanguageTag)"
    $task5 = $engine.RecognizeAsync($bitmap)
    $result = Await $task5 ([Windows.Media.Ocr.OcrResult])
    Write-Output "OCR Result Text length: $($result.Text.Length)"
    Write-Output "OCR Result Text: $($result.Text)"
}
