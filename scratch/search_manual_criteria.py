import os
import sys
from pypdf import PdfReader

# Reconfigure stdout to use UTF-8
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"
handbook_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\BAROID - Handbook.pdf"

def search_text(pdf_path, text_to_find):
    print(f"Searching for '{text_to_find}' in {os.path.basename(pdf_path)}...")
    reader = PdfReader(pdf_path)
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        if text_to_find.lower() in text.lower():
            idx = text.lower().find(text_to_find.lower())
            start = max(0, idx - 100)
            end = min(len(text), idx + len(text_to_find) + 150)
            print(f"Page {i+1}: ... {text[start:end].replace(chr(10), ' ')} ...")

search_text(guide_path, "typically classified")
search_text(guide_path, "particles are typically")
search_text(guide_path, "solid particles")

