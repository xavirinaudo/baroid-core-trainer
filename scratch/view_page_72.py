import os
from pypdf import PdfReader

guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"
reader = PdfReader(guide_path)
page = reader.pages[71] # Page 72 (0-indexed 71)
print(page.extract_text())
