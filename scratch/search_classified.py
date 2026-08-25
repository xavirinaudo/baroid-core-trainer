import os
from pypdf import PdfReader
import sys

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"
reader = PdfReader(guide_path)

keywords = ["specific gravity", "micron", "reactivity", "source"]

for i, page in enumerate(reader.pages):
    text = page.extract_text() or ""
    text_lower = text.lower()
    matches = [k for k in keywords if k in text_lower]
    if len(matches) >= 3:
        print(f"Match Page {i+1} containing {matches}:")
        for line in text.split("\n"):
            if any(k in line.lower() for k in keywords):
                print(f"  {line.strip()}")
