import asyncio
import os
import sys
from pypdf import PdfReader
import fitz  # PyMuPDF

# We import winsdk modules for OCR
from winsdk.windows.storage import StorageFile, FileAccessMode
from winsdk.windows.graphics.imaging import BitmapDecoder
from winsdk.windows.media.ocr import OcrEngine

async def ocr_image(image_path):
    abs_path = os.path.abspath(image_path)
    file = await StorageFile.get_file_from_path_async(abs_path)
    stream = await file.open_async(FileAccessMode.READ)
    decoder = await BitmapDecoder.create_async(stream)
    software_bitmap = await decoder.get_software_bitmap_async()
    
    engine = OcrEngine.try_create_from_user_profile_languages()
    if not engine:
        raise Exception("Could not create OCR Engine")
        
    result = await engine.recognize_async(software_bitmap)
    return "\n".join(line.text for line in result.lines)

async def process_pdf_ocr(pdf_path, output_txt_path):
    doc = fitz.open(pdf_path)
    print(f"OCR Processing {pdf_path} with {len(doc)} pages...")
    
    all_text = []
    for i, page in enumerate(doc):
        # Render page to image at 150 DPI
        pix = page.get_pixmap(dpi=150)
        img_path = f"temp_page_{i}.png"
        pix.save(img_path)
        
        try:
            text = await ocr_image(img_path)
            print(f"  Page {i+1}/{len(doc)} OCR completed.")
            all_text.append(f"--- PAGE {i+1} ---")
            all_text.append(text)
        except Exception as e:
            print(f"  Error on Page {i+1}: {e}")
        finally:
            if os.path.exists(img_path):
                os.remove(img_path)
                
    with open(output_txt_path, "w", encoding="utf-8") as f:
        f.write("\n".join(all_text))
    print(f"Saved OCR text to {output_txt_path}")

def process_pdf_direct(pdf_path, output_txt_path):
    print(f"Direct text extracting {pdf_path}...")
    reader = PdfReader(pdf_path)
    all_text = []
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        all_text.append(f"--- PAGE {i+1} ---")
        all_text.append(text)
        
    with open(output_txt_path, "w", encoding="utf-8") as f:
        f.write("\n".join(all_text))
    print(f"Saved direct text to {output_txt_path}")

async def main():
    study_materials = r"c:\Users\H316347\OneDrive - Halliburton\Documents\GitHub\baroid-core-trainer\study_materials"
    
    # 18: Scanned -> OCR
    await process_pdf_ocr(
        os.path.join(study_materials, "homework 18.pdf"),
        os.path.join(study_materials, "homework_18_ocr.txt")
    )
    
    # 19: Readable -> Direct
    process_pdf_direct(
        os.path.join(study_materials, "Homework 19.pdf"),
        os.path.join(study_materials, "homework_19_ocr.txt")
    )
    
    # 20: Scanned -> OCR
    await process_pdf_ocr(
        os.path.join(study_materials, "homework 20.pdf"),
        os.path.join(study_materials, "homework_20_ocr.txt")
    )
    
    # 21: Scanned -> OCR
    await process_pdf_ocr(
        os.path.join(study_materials, "homework 21.pdf"),
        os.path.join(study_materials, "homework_21_ocr.txt")
    )
    
    # 22: Readable -> Direct
    process_pdf_direct(
        os.path.join(study_materials, "homework 22.pdf"),
        os.path.join(study_materials, "homework_22_ocr.txt")
    )

if __name__ == "__main__":
    asyncio.run(main())
