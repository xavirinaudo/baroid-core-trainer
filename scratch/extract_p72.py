import os
from pypdf import PdfReader
import sys

# Configure stdout to write to file as utf-8
guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"
reader = PdfReader(guide_path)
page = reader.pages[71] # Page 72

with open("scratch/p72.txt", "w", encoding="utf-8") as f:
    f.write(page.extract_text())
print("Saved page 72 text.")
