import sys

libraries = ["pypdf", "pdfplumber", "fitz", "PyPDF2"]
available = []

for lib in libraries:
    try:
        __import__(lib)
        available.append(lib)
    except ImportError:
        pass

print("Available PDF libraries:", available)
