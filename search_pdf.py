import fitz
import sys

def search_pdf(pdf_path, query):
    doc = fitz.open(pdf_path)
    for i in range(len(doc)):
        page = doc[i]
        text = page.get_text()
        if query.lower() in text.lower():
            print(f"Match found on page {i + 1}")
            # print a snippet around the match
            idx = text.lower().find(query.lower())
            start = max(0, idx - 150)
            end = min(len(text), idx + 250)
            print("..." + text[start:end].replace('\n', ' ') + "...")
            print("-" * 40)

if __name__ == "__main__":
    search_pdf("study_materials/bibliografía/Baroid Core Participant Guide Version.pdf", sys.argv[1])
