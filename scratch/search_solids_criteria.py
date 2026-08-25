import os
from pypdf import PdfReader
import sys

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"
reader = PdfReader(guide_path)

for i, page in enumerate(reader.pages):
    text = page.extract_text() or ""
    text_lower = text.lower()
    # Check if specific terms are present on the same page
    if "specific gravity" in text_lower and "reactiveness" in text_lower:
        print(f"Match Page {i+1} (specific gravity & reactiveness)")
    elif "reactivity" in text_lower and "specific gravity" in text_lower and "size" in text_lower:
        print(f"Match Page {i+1} (reactivity & specific gravity & size)")
