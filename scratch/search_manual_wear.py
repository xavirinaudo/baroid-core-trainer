import os
from pypdf import PdfReader
import sys

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"
reader = PdfReader(guide_path)

def search_text(keyword):
    print(f"Searching for '{keyword}':")
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        if keyword.lower() in text.lower():
            idx = text.lower().find(keyword.lower())
            start = max(0, idx - 100)
            end = min(len(text), idx + len(keyword) + 150)
            print(f"Page {i+1}: ... {text[start:end].replace(chr(10), ' ')} ...")

search_text("replaceable")
search_text("wear parts")
