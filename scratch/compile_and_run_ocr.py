import os
import subprocess

csc_path = r"C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe"
ocr_cs = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\scratch\ocr.cs"
ocr_exe = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\scratch\ocr.exe"

ref_options = [
    "/r:System.dll",
    "/r:System.Core.dll",
    "/r:Microsoft.CSharp.dll"
]

compile_cmd = [csc_path, "/t:exe", f"/out:{ocr_exe}"] + ref_options + [ocr_cs]

print("Compiling dynamic ocr.cs...")
res = subprocess.run(compile_cmd, capture_output=True, text=True, encoding="cp1252", errors="replace")
print("Compiler exit code:", res.returncode)
print("Compiler stdout:", res.stdout)
print("Compiler stderr:", res.stderr)

if res.returncode == 0:
    print("Compilation successful! Testing on test_page_0.png...")
    test_out = r"c:\Users\xavir\Documents\GitHub\baroid-core-trainer\scratch\test_ocr_out.txt"
    if os.path.exists(test_out):
        os.remove(test_out)
        
    run_res = subprocess.run([ocr_exe, "test_page_0.png", test_out], capture_output=True, text=True, encoding="cp1252", errors="replace")
    print("Run stdout:", run_res.stdout)
    if os.path.exists(test_out):
        with open(test_out, "r", encoding="utf-8") as f:
            text = f.read()
        print("OCR Result length:", len(text))
        print("First 200 chars:", text[:200])
    else:
        print("Error: output file not created.")
else:
    print("Compilation failed.")
