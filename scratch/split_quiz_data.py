import os
import re

def main():
    workspace = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    quiz_data_path = os.path.join(workspace, 'quiz_data.js')
    data_dir = os.path.join(workspace, 'data')
    os.makedirs(data_dir, exist_ok=True)

    print(f"Reading monolithic quiz_data.js from {quiz_data_path}...")
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the main QUIZ_DATA declaration block
    quiz_data_start = content.find("const QUIZ_DATA = {")
    calc_data_start = content.find("const CALCULATIONS_DATA = {")

    if quiz_data_start == -1 or calc_data_start == -1:
        print("Error: Could not find QUIZ_DATA or CALCULATIONS_DATA blocks!")
        return

    # Slice the inner part of QUIZ_DATA
    quiz_data_block = content[quiz_data_start:calc_data_start].strip()
    
    keys = [
        "homework_8", "homework_9", "business_processes", "homework_11",
        "homework_12", "homework_13", "homework_14", "homework_15",
        "homework_16", "homework_17", "homework_19", "homework_20"
    ]

    extracted_quizzes = {}
    
    # Let's find start indices for all keys using regex
    key_indices = []
    for key in keys:
        # Match "key: {" with optional whitespace or preceding comma
        match = re.search(r'\b' + key + r'\s*:\s*\{', quiz_data_block)
        if match:
            # We want the start index of the object (the '{')
            brace_idx = quiz_data_block.find('{', match.start())
            key_indices.append((key, match.start(), brace_idx))
        else:
            print(f"Warning: Could not find key {key} in QUIZ_DATA block")

    # Sort indices just to be safe
    key_indices.sort(key=lambda x: x[1])

    for i, (key, start_idx, brace_idx) in enumerate(key_indices):
        content_start = brace_idx # starts at '{'
        
        if i < len(key_indices) - 1:
            end_idx = key_indices[i+1][1]
        else:
            # Last key: homework_20. Find the closing brace of the main QUIZ_DATA dict.
            end_idx = quiz_data_block.rfind("};")
            if end_idx == -1:
                end_idx = len(quiz_data_block)

        raw_obj = quiz_data_block[content_start:end_idx].strip()
        # Clean up trailing comma if present
        if raw_obj.endswith(","):
            raw_obj = raw_obj[:-1].strip()

        extracted_quizzes[key] = raw_obj

    # Write data/init.js
    init_path = os.path.join(data_dir, 'init.js')
    print(f"Writing {init_path}...")
    with open(init_path, 'w', encoding='utf-8') as f:
        f.write("// Initialize Global Databases\nconst QUIZ_DATA = {};\nconst CALCULATIONS_DATA = {};\n")

    # Write each extracted quiz to its own file
    for key, val in extracted_quizzes.items():
        file_path = os.path.join(data_dir, f"{key}.js")
        print(f"Writing {file_path}...")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(f"QUIZ_DATA.{key} = {val};\n")

    # Extract CALCULATIONS_DATA
    h18_start = content.find("const homework_18 = {")
    if h18_start == -1:
        print("Error: Could not find homework_18 block!")
        return

    calc_data_block = content[calc_data_start:h18_start].strip()
    if calc_data_block.startswith("const CALCULATIONS_DATA ="):
        calc_data_block = calc_data_block[len("const CALCULATIONS_DATA ="):].strip()
    if calc_data_block.endswith(";"):
        calc_data_block = calc_data_block[:-1].strip()

    calc_path = os.path.join(data_dir, 'calculations_data.js')
    print(f"Writing {calc_path}...")
    with open(calc_path, 'w', encoding='utf-8') as f:
        f.write(f"Object.assign(CALCULATIONS_DATA, {calc_data_block});\n")

    # Extract bottom variables
    bottom_content = content[h18_start:]

    def extract_var(var_name, next_var_name=None):
        pattern = f"const {var_name} = {{"
        start_idx = bottom_content.find(pattern)
        if start_idx == -1:
            print(f"Warning: Could not find variable {var_name}")
            return None
        
        content_start = start_idx + len(pattern) - 1 # starts at {
        if next_var_name:
            next_pattern = f"const {next_var_name} = {{"
            end_idx = bottom_content.find(next_pattern, content_start)
            if end_idx == -1:
                end_idx = len(bottom_content)
        else:
            end_idx = len(bottom_content)

        raw = bottom_content[content_start:end_idx].strip()
        
        assign_pattern = f"QUIZ_DATA.{var_name} = {var_name};"
        assign_idx = raw.find(assign_pattern)
        if assign_idx != -1:
            raw = raw[:assign_idx].strip()
            
        raw = re.sub(r'//\s*=+\s*\n//\s*VIDEO QUIZ.*', '', raw, flags=re.DOTALL)
        if raw.endswith(";"):
            raw = raw[:-1].strip()
        return raw

    hw18_val = extract_var("homework_18", "homework_21")
    hw21_val = extract_var("homework_21", "homework_22")
    hw22_val = extract_var("homework_22", "video_completions")
    
    if hw18_val:
        with open(os.path.join(data_dir, 'homework_18.js'), 'w', encoding='utf-8') as f:
            f.write(f"QUIZ_DATA.homework_18 = {hw18_val};\n")
    if hw21_val:
        with open(os.path.join(data_dir, 'homework_21.js'), 'w', encoding='utf-8') as f:
            f.write(f"QUIZ_DATA.homework_21 = {hw21_val};\n")
    if hw22_val:
        with open(os.path.join(data_dir, 'homework_22.js'), 'w', encoding='utf-8') as f:
            f.write(f"QUIZ_DATA.homework_22 = {hw22_val};\n")

    # Extract video quizzes
    v_comp = extract_var("video_completions", "video_formation_damage")
    v_form = extract_var("video_formation_damage", "video_hole_cleaning")
    v_hole = extract_var("video_hole_cleaning", "video_pills_displacement")
    v_pills = extract_var("video_pills_displacement")

    video_path = os.path.join(data_dir, 'video_quizzes.js')
    print(f"Writing {video_path}...")
    with open(video_path, 'w', encoding='utf-8') as f:
        f.write(f"QUIZ_DATA.video_completions = {v_comp};\n\n")
        f.write(f"QUIZ_DATA.video_formation_damage = {v_form};\n\n")
        f.write(f"QUIZ_DATA.video_hole_cleaning = {v_hole};\n\n")
        f.write(f"QUIZ_DATA.video_pills_displacement = {v_pills};\n")

    print("Splitting completed successfully!")

if __name__ == '__main__':
    main()
