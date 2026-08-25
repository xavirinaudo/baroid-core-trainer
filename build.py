import re
import os
import zipfile

def build():
    workspace = os.path.dirname(os.path.abspath(__file__))
    html_path = os.path.join(workspace, 'index.html')
    css_path = os.path.join(workspace, 'index.css')
    app_path = os.path.join(workspace, 'app.js')
    output_html_path = os.path.join(workspace, 'Baroid_Core_Trainer.html')
    output_zip_path = os.path.join(workspace, 'Baroid_Core_Trainer.zip')
    
    import subprocess
    import datetime
    import json

    print("Reading source files...")
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()
    with open(app_path, 'r', encoding='utf-8') as f:
        app = f.read()

    # Obtener el Git commit hash de forma síncrona
    commit_hash = 'dev'
    try:
        commit_hash = subprocess.check_output(['git', 'rev-parse', '--short', 'HEAD']).decode('utf-8').strip()
    except Exception as e:
        print(f"Warning: No se pudo obtener el commit hash de Git: {e}")
        commit_hash = 'v-' + str(int(datetime.datetime.now().timestamp()))

    build_time = datetime.datetime.now().isoformat()

    # Generar el archivo version.json
    try:
        version_data = {
            "version": commit_hash,
            "releaseDate": build_time,
            "description": "Auto-generated trainer build version"
        }
        with open(os.path.join(workspace, 'version.json'), 'w', encoding='utf-8') as vf:
            json.dump(version_data, vf, indent=2)
        print(f"Generado version.json con versión: {commit_hash}")
    except Exception as e:
        print(f"Warning: No se pudo escribir version.json: {e}")

    # Reemplazar el marcador en el código de app.js
    app = app.replace('{{VERSION_PLACEHOLDER}}', commit_hash)
    
    print("Inlining index.css...")
    # Find link tag for index.css and replace with style block
    link_regex = re.compile(r'<link\s+rel="stylesheet"\s+href="index\.css"\s*\/?>')
    style_block = f"<style>\n{css}\n</style>"
    html, count = link_regex.subn(lambda m: style_block, html)
    if count == 0:
        print("Warning: Could not find <link rel=\"stylesheet\" href=\"index.css\"> in index.html")
        
    print("Inlining data/*.js files...")
    # Find script tags for files under data/ and replace them with their contents dynamically
    data_script_regex = re.compile(r'<script\s+src="data/([^"]+?\.js)"\s*><\/script>')
    
    def replace_data_script(match):
        filename = match.group(1)
        filepath = os.path.join(workspace, 'data', filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as df:
                file_content = df.read()
            return f"<script>\n// Inlined data/{filename}\n{file_content}\n</script>"
        except Exception as e:
            print(f"Error: Could not read {filepath}: {e}")
            return match.group(0)
            
    html, count = data_script_regex.subn(replace_data_script, html)
    print(f"Inlined {count} data script files.")
        
    print("Inlining app.js...")
    # Find script tag for app.js and replace with script block
    script2_regex = re.compile(r'<script\s+src="app\.js"\s*><\/script>')
    script2_block = f"<script>\n{app}\n</script>"
    html, count = script2_regex.subn(lambda m: script2_block, html)
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
