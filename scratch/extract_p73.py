import os
from pypdf import PdfReader

guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"
reader = PdfReader(guide_path)
page = reader.pages[72] # Page 73

with open("scratch/p73.txt", "w", encoding="utf-8") as f:
    f.write(page.extract_text())
print("Saved page 73 text.")
