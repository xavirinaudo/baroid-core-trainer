import os
from pypdf import PdfReader

guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"

def search_keywords(pdf_path, keyword):
    print(f"Searching for '{keyword}'...")
    reader = PdfReader(pdf_path)
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        if keyword.lower() in text.lower():
            idx = text.lower().find(keyword.lower())
            start = max(0, idx - 150)
            end = min(len(text), idx + len(keyword) + 150)
            print(f"Page {i+1}: ... {text[start:end].replace('\n', ' ')} ...")

search_keywords(guide_path, "particles are typically")
search_keywords(guide_path, "four criteria")
search_keywords(guide_path, "barite should consist")
