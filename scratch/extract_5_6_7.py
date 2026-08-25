import os
from pypdf import PdfReader

study_materials = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials"

def extract_pdf(name):
    pdf_path = os.path.join(study_materials, name + ".pdf")
    txt_path = os.path.join(study_materials, name.lower().replace(" ", "_") + "_raw.txt")
    print(f"Extracting {pdf_path}...")
    reader = PdfReader(pdf_path)
    all_text = []
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        all_text.append(f"--- PAGE {i+1} ---")
        all_text.append(text)
        
    with open(txt_path, "w", encoding="utf-8") as f:
        f.write("\n".join(all_text))
    print(f"Extracted {len(all_text)//2} pages. Saved to {txt_path}. Raw text length: {sum(len(t) for t in all_text)}")

for name in ["Homework 5", "Homework 6", "Homework 7"]:
    extract_pdf(name)
