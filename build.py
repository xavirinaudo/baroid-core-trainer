import re
import os
import zipfile

def build():
    workspace = os.path.dirname(os.path.abspath(__file__))
    html_path = os.path.join(workspace, 'index.html')
    css_path = os.path.join(workspace, 'index.css')
    quiz_data_path = os.path.join(workspace, 'quiz_data.js')
    app_path = os.path.join(workspace, 'app.js')
    output_html_path = os.path.join(workspace, 'Baroid_Core_Trainer.html')
    output_zip_path = os.path.join(workspace, 'Baroid_Core_Trainer.zip')
    
    print("Reading source files...")
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        quiz_data = f.read()
    with open(app_path, 'r', encoding='utf-8') as f:
        app = f.read()
        
    print("Inlining index.css...")
    # Find link tag for index.css and replace with style block
    link_regex = re.compile(r'<link\s+rel="stylesheet"\s+href="index\.css"\s*\/?>')
    style_block = f"<style>\n{css}\n</style>"
    html, count = link_regex.subn(style_block, html)
    if count == 0:
        print("Warning: Could not find <link rel=\"stylesheet\" href=\"index.css\"> in index.html")
        
    print("Inlining quiz_data.js...")
    # Find script tag for quiz_data.js and replace with script block
    script1_regex = re.compile(r'<script\s+src="quiz_data\.js"\s*><\/script>')
    script1_block = f"<script>\n{quiz_data}\n</script>"
    html, count = script1_regex.subn(script1_block, html)
    if count == 0:
        print("Warning: Could not find <script src=\"quiz_data.js\"></script> in index.html")
        
    print("Inlining app.js...")
    # Find script tag for app.js and replace with script block
    script2_regex = re.compile(r'<script\s+src="app\.js"\s*><\/script>')
    script2_block = f"<script>\n{app}\n</script>"
    html, count = script2_regex.subn(script2_block, html)
    if count == 0:
        print("Warning: Could not find <script src=\"app.js\"></script> in index.html")
        
    print(f"Writing standalone compiled HTML to {output_html_path}...")
    with open(output_html_path, 'w', encoding='utf-8') as f:
        f.write(html)
        
    print(f"Creating zip file {output_zip_path}...")
    with zipfile.ZipFile(output_zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        zipf.write(output_html_path, os.path.basename(output_html_path))
        
    print("Build completed successfully!")

if __name__ == '__main__':
    build()
