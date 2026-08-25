# debug_fallback.ps1
Add-Type -AssemblyName System.Runtime.WindowsRuntime
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]

$imgPath = Resolve-Path "test_page_0.png"
$task1 = [Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath)

# Get StorageFile
$asTask1 = [System.WindowsRuntimeSystemExtensions].GetMethods() | 
    Where-Object { $_.Name -eq 'AsTask' -and $_.GetGenericArguments().Count -eq 1 -and $_.GetParameters().Count -eq 1 }
$method1 = $asTask1[0].MakeGenericMethod([Windows.Storage.StorageFile])
$t1 = $method1.Invoke($null, [object[]]@($task1))
$t1.Wait()
$file = $t1.Result

$task2 = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)

# Let's inspect $task2
Write-Output "Task2 type: $($task2.GetType().FullName)"
Write-Output "Task2 interfaces:"
foreach ($iface in $task2.GetType().GetInterfaces()) {
    Write-Output "  $($iface.FullName)"
}

# Now let's try invoking the generic AsTask on task2 with UInt64 progress
$asTask2 = [System.WindowsRuntimeSystemExtensions].GetMethods() | 
    Where-Object { $_.Name -eq 'AsTask' -and $_.GetGenericArguments().Count -eq 2 -and $_.GetParameters().Count -eq 1 }
Write-Output "AsTask2 method overload: $($asTask2[0].ToString())"

try {
    $method2 = $asTask2[0].MakeGenericMethod([Windows.Storage.Streams.IRandomAccessStream], [System.UInt64])
    Write-Output "Generic method created: $($method2.ToString())"
    
    $t2 = $method2.Invoke($null, [object[]]@($task2))
    Write-Output "Invoke succeeded! Task type: $($t2.GetType().FullName)"
} catch {
    Write-Output "Invoke failed: $_"
    Write-Output "Inner exception: $($_.Exception.InnerException)"
}
