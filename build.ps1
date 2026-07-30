# Powershell Build Script for Baroid Core Trainer
$ErrorActionPreference = "Stop"

Write-Output "Reading source files..."
$html = [System.IO.File]::ReadAllText("index.html")
$css = [System.IO.File]::ReadAllText("index.css")
$quiz = [System.IO.File]::ReadAllText("quiz_data.js")
$app = [System.IO.File]::ReadAllText("app.js")

# Obtener el Git commit hash de forma síncrona
$commitHash = "dev"
try {
    $commitHash = (git rev-parse --short HEAD).Trim()
} catch {
    $commitHash = "v-" + [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
}
$buildTime = [DateTime]::UtcNow.ToString("o")

# Escribir version.json
try {
    $versionData = @{
        version = $commitHash
        releaseDate = $buildTime
        description = "Auto-generated trainer build version"
    }
    $versionData | ConvertTo-Json | Out-File -FilePath "version.json" -Encoding utf8
    Write-Output "Generado version.json con versión: $commitHash"
} catch {
    Write-Warning "No se pudo generar version.json: $_"
}

# Reemplazar el marcador en el código de app.js
$app = $app.Replace('{{VERSION_PLACEHOLDER}}', $commitHash)

Write-Output "Inlining styles and scripts..."
# Replace CSS link
$html = $html -replace '(?i)<link\s+rel="stylesheet"\s+href="index\.css"\s*/?>', "<style>`n$css`n</style>"

# Replace quiz_data.js script link
$html = $html -replace '(?i)<script\s+src="quiz_data\.js"\s*></script>', "<script>`n$quiz`n</script>"

# Replace app.js script link
$html = $html -replace '(?i)<script\s+src="app\.js"\s*></script>', "<script>`n$app`n</script>"

Write-Output "Writing compiled standalone HTML to Baroid_Core_Trainer.html..."
[System.IO.File]::WriteAllText("Baroid_Core_Trainer.html", $html)

Write-Output "Creating zip archive Baroid_Core_Trainer.zip..."
if (Test-Path "Baroid_Core_Trainer.zip") {
    Remove-Item "Baroid_Core_Trainer.zip"
}
Compress-Archive -Path "Baroid_Core_Trainer.html" -DestinationPath "Baroid_Core_Trainer.zip" -Force

Write-Output "Build completed successfully!"
