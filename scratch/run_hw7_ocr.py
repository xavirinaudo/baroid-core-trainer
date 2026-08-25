import os, subprocess, fitz
study_materials = r'c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials'
pdf_path = os.path.join(study_materials, 'Homework 7.pdf')
output_txt_path = os.path.join(study_materials, 'homework_7_raw.txt')
doc = fitz.open(pdf_path)
all_text = []
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=150)
    img_path = f'temp_page_{i}.png'
    pix.save(img_path)
    try:
        res = subprocess.run(['powershell', '-File', r'scratch\do_ocr.ps1', img_path], capture_output=True)
        all_text.append(f'--- PAGE {i+1} ---')
        all_text.append(res.stdout.decode('utf-8', errors='replace').strip())
    finally:
        if os.path.exists(img_path): os.remove(img_path)
with open(output_txt_path, 'w', encoding='utf-8') as f:
    f.write(chr(10).join(all_text))
