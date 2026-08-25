import os, subprocess, fitz

study_materials = r'c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials'
pdf_path = os.path.join(study_materials, 'Homework 7.pdf')
output_txt_path = os.path.join(study_materials, 'homework_7_raw.txt')

def ocr_image_powershell(img_path):
    abs_path = os.path.abspath(img_path)
    ps_script = f'''
    [void][Windows.Security.Cryptography.CryptographicBuffer, Windows.Security.Cryptography, ContentType=WindowsRuntime]
    [void][Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
    [void][Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime]
    [void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]
    
    \ = [Windows.Storage.StorageFile]::GetFileFromPathAsync("{abs_path}")
    while (-not \.IsCompleted) {{ [System.Threading.Thread]::Sleep(10) }}
    \ = \.GetResults()
    
    \ = \.OpenAsync([Windows.Storage.FileAccessMode]::Read)
    while (-not \.IsCompleted) {{ [System.Threading.Thread]::Sleep(10) }}
    \ = \.GetResults()
    
    \ = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync(\)
    while (-not \.IsCompleted) {{ [System.Threading.Thread]::Sleep(10) }}
    \ = \.GetResults()
    
    \ = \.GetSoftwareBitmapAsync()
    while (-not \.IsCompleted) {{ [System.Threading.Thread]::Sleep(10) }}
    \ = \.GetResults()
    
    \ = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    if (\ -ne \) {{
        \ = \.RecognizeAsync(\)
        while (-not \.IsCompleted) {{ [System.Threading.Thread]::Sleep(10) }}
        \ = \.GetResults()
        Write-Output \.Text
    }}
    '''
    result = subprocess.run(["powershell", "-Command", ps_script], capture_output=True)
    return result.stdout.decode('utf-8', errors='replace').strip()

doc = fitz.open(pdf_path)
print(f'OCR Processing {pdf_path} with {len(doc)} pages...')
all_text = []
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=150)
    img_path = f'temp_page_{i}.png'
    pix.save(img_path)
    try:
        text = ocr_image_powershell(img_path)
        all_text.append(f'--- PAGE {i+1} ---')
        all_text.append(text)
    finally:
        if os.path.exists(img_path): os.remove(img_path)
with open(output_txt_path, 'w', encoding='utf-8') as f:
    f.write(chr(10).join(all_text))
print('Done!')
