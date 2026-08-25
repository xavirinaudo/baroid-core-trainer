import json
import re

text = open('study_materials/homework_5_raw.txt', encoding='utf-8').read()

questions = []
# split on "\n<number> of 38"
splits = re.split(r'\n(\d+) of 38(.*)', text)

for i in range(1, len(splits), 3):
    q_num = int(splits[i])
    q_title = splits[i+1].strip()
    q_body = splits[i+2].strip()
    
    match = re.search(r'\n(\d+)\s+out of\s+(\d+)', q_body)
    if not match:
        continue
    
    score = int(match.group(1))
    body_text = q_body[:match.start()].strip()
    
    # Options are lines in body_text, ignoring page breaks
    lines = [l.strip() for l in body_text.split('\n') if l.strip() and not l.startswith('--- PAGE')]
    
    questions.append({
        'id': f'hw5_q{q_num}',
        'number': q_num,
        'question': q_title,
        'options_lines': lines,
        'score': score
    })

with open('study_materials/hw5_parsed.json', 'w') as f:
    json.dump(questions, f, indent=2)

print(f'Parsed {len(questions)} questions.')
