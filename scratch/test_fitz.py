import os
import fitz

study_materials = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials"
pdf_path = os.path.join(study_materials, "Homework 7.pdf")

doc = fitz.open(pdf_path)
print("Pages:", len(doc))
page = doc[0]
pix = page.get_pixmap(dpi=150)
print("Pixmap width:", pix.width, "height:", pix.height)
pix.save("test_page_0.png")
print("Saved test_page_0.png. Size:", os.path.getsize("test_page_0.png"))
