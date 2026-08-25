import os
from pypdf import PdfReader
import sys

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"
reader = PdfReader(guide_path)

# Search pages 70 to 120 (0-indexed 69 to 119)
for idx in range(69, 120):
    if idx >= len(reader.pages):
        break
    page = reader.pages[idx]
    text = page.extract_text() or ""
    text_lower = text.lower()
    if "classif" in text_lower or "criteria" in text_lower or "solid" in text_lower:
        print(f"Page {idx+1}:")
        for line in text.split("\n"):
            if "classif" in line.lower() or "criteria" in line.lower() or "gravity" in line.lower() or "size" in line.lower() or "react" in line.lower():
                print(f"  {line.strip()}")
