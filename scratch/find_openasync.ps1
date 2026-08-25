# find_openasync.ps1
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]
$methods = [Windows.Storage.StorageFile].GetMethods() | Where-Object { $_.Name -eq 'OpenAsync' }
foreach ($m in $methods) {
    Write-Output $m.ToString()
}
