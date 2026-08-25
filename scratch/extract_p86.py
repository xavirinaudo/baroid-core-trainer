import os
from pypdf import PdfReader

guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"
reader = PdfReader(guide_path)
page = reader.pages[85] # Page 86 (0-indexed 85)

with open("scratch/p86.txt", "w", encoding="utf-8") as f:
    f.write(page.extract_text())
print("Saved page 86 text.")
