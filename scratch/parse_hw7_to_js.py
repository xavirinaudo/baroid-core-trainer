import re, json

with open(r'c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials\homework_7_raw.txt', 'r', encoding='utf-8') as f:
    text = f.read()

questions = []
# split by "Question \d+ of 48"
parts = re.split(r'Question\s+(\d+)\s+[oO]f\s*48', text)
for i in range(1, len(parts), 2):
    q_num = parts[i]
    q_text = parts[i+1].strip()
    
    # Heuristics to find question text and options
    # Usually ends with "out of X"
    out_of_match = re.search(r'(\d+)\s*out\s*of\s*(\d+)', q_text, re.IGNORECASE)
    if out_of_match:
        content = q_text[:out_of_match.start()].strip()
    else:
        content = q_text

    # Skip diagram questions (Q1, Q3, Q10, Q12, Q23)
    if any(k in content.lower() for k in ["diagram below", "label the major components"]):
        continue
        
    lines = [l.strip() for l in content.split('\n') if l.strip()]
    if not lines: continue
    
    q_prompt = lines[0]
    options = lines[1:]
    
    # filter out known junk like "o", "a", "v" checkboxes from OCR
    clean_options = []
    for opt in options:
        opt = re.sub(r'^[oOav]\s+', '', opt)
        if opt: clean_options.append(opt)
        
    q_obj = {
        "id": f"hw7_q{q_num}",
        "number": int(q_num),
        "type": "multiple" if len(clean_options) > 2 else "single",
        "question": q_prompt,
        "options": [{"label": o, "value": o.lower().replace(' ', '_')} for o in clean_options],
        "answer": [o.lower().replace(' ', '_') for o in clean_options] if len(clean_options) > 2 else (clean_options[0].lower().replace(' ', '_') if clean_options else ""),
        "explanation": f"Refer to the Centrifuges and Cuttings Dryers sections in the Participant Guide (approx. pages 130-156) for details on {q_prompt[:30]}..."
    }
    # Fix for calculation questions (Q42-Q47)
    if "calculate" in q_prompt.lower() or "formula" in q_prompt.lower() or "cost savings" in q_prompt.lower() or "dilution volume" in q_prompt.lower():
        q_obj["type"] = "calculation"
        
    questions.append(q_obj)

js_content = "Object.assign(QUIZ_DATA, {\n  homework_7: {\n    title: \"Homework 7: Centrifuges & Cuttings Dryers\",\n    description: \"Assessment on centrifuges, vertical cuttings dryers, and dilution economics.\",\n    questions: " + json.dumps(questions, indent=6) + "\n  }\n});\n"

with open(r'c:\Users\xavir\Documents\GitHub\baroid-core-trainer\data\homework_7.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Generated homework_7.js with {len(questions)} questions")
