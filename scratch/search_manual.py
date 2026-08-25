import os
from pypdf import PdfReader

guide_path = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\bibliografía\Baroid Core Participant Guide Version.pdf"

def search_keywords(pdf_path, keyword, num_pages=None):
    print(f"Searching for '{keyword}' in {pdf_path}...")
    reader = PdfReader(pdf_path)
    total_pages = len(reader.pages)
    matches = []
    
    pages_to_search = range(total_pages) if num_pages is None else range(min(num_pages, total_pages))
    
    for i in pages_to_search:
        page = reader.pages[i]
        text = page.extract_text() or ""
        if keyword.lower() in text.lower():
            idx = text.lower().find(keyword.lower())
            start = max(0, idx - 150)
            end = min(len(text), idx + len(keyword) + 150)
            matches.append((i + 1, text[start:end].replace('\n', ' ')))
            
    return matches

results = search_keywords(guide_path, "Waste Management Hierarchy")
print(f"Found {len(results)} matches:")
for page_num, snippet in results[:10]:
    print(f"Page {page_num}: ... {snippet} ...")
