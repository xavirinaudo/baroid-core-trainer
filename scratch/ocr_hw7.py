import os
import subprocess
import fitz  # PyMuPDF

study_materials = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials"
pdf_path = os.path.join(study_materials, "Homework 7.pdf")
output_txt_path = os.path.join(study_materials, "homework_7_raw.txt")

def ocr_image_powershell(img_path):
    abs_path = os.path.abspath(img_path)
    temp_txt_path = os.path.abspath("temp_ocr_out.txt")
    
    if os.path.exists(temp_txt_path):
        os.remove(temp_txt_path)
        
    ps_script = f"""
    Add-Type -AssemblyName System.Runtime.WindowsRuntime
    [void][Windows.Security.Cryptography.CryptographicBuffer, Windows.Security.Cryptography, ContentType=WindowsRuntime]
    [void][Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
    [void][Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime]
    [void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]

    function Await($asyncOperation, $type) {{
        $asTask = [System.WindowsRuntimeSystemExtensions].GetMethods() | 
            Where-Object {{ $_.Name -eq 'AsTask' -and $_.GetGenericArguments().Count -eq 1 -and $_.GetParameters().Count -eq 1 }}
        $genericAsTask = $asTask[0].MakeGenericMethod($type)
        $myParams = [object[]]@($asyncOperation)
        $task = $genericAsTask.Invoke($null, $myParams)
        $task.Wait()
        return $task.Result
    }}

    $file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync("{abs_path}")) ([Windows.Storage.StorageFile])
    $stream = Await ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
    $decoder = Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
    $bitmap = Await ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
    
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    if ($null -eq $engine) {{
        "ERROR_ENGINE_NULL" | Out-File -FilePath "{temp_txt_path}" -Encoding utf8
    }} else {{
        $result = Await ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])
        $result.Text | Out-File -FilePath "{temp_txt_path}" -Encoding utf8
    }}
    """
    
    # Run powershell command
    result = subprocess.run(
        ["powershell", "-ExecutionPolicy", "Bypass", "-Command", ps_script],
        capture_output=True
    )
    
    if not os.path.exists(temp_txt_path):
        print(f"Error: temp output not found. stderr: {result.stderr.decode('cp1252', errors='replace')}")
        return ""
        
    with open(temp_txt_path, "r", encoding="utf-8-sig") as f:
        text = f.read()
        
    if os.path.exists(temp_txt_path):
        os.remove(temp_txt_path)
        
    return text.strip()

def process_pdf():
    doc = fitz.open(pdf_path)
    print(f"OCR Processing {pdf_path} with {len(doc)} pages...")
    all_text = []
    
    for i, page in enumerate(doc):
        # Render page to image at 150 DPI
        pix = page.get_pixmap(dpi=150)
        img_path = f"temp_page_{i}.png"
        pix.save(img_path)
        
        try:
            print(f"Running OCR on page {i+1}...")
            text = ocr_image_powershell(img_path)
            print(f"  Page {i+1}/{len(doc)} completed. Length: {len(text)}")
            all_text.append(f"--- PAGE {i+1} ---")
            all_text.append(text)
        except Exception as e:
            print(f"  Error on Page {i+1}: {e}")
        finally:
            if os.path.exists(img_path):
                os.remove(img_path)
                
    with open(output_txt_path, "w", encoding="utf-8") as f:
        f.write("\n".join(all_text))
    print(f"Saved OCR text to {output_txt_path}")

if __name__ == "__main__":
    process_pdf()
