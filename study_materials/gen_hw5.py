import json
import re

try:
    questions = json.load(open('study_materials/hw5_parsed.json', encoding='utf-8'))
except Exception as e:
    print(f"Error reading JSON: {e}")
    exit(1)

js_out = """const QUIZ_DATA = typeof QUIZ_DATA !== 'undefined' ? QUIZ_DATA : {};
Object.assign(QUIZ_DATA, {
  homework_5: {
    title: "Homework 5: Solids Control and Waste Management",
    description: "Assessment covering solids control equipment, waste management hierarchy, and properties of solids.",
    questions: [
"""

for q in questions:
    options_js = ""
    for o in q['options_lines']:
        val = re.sub(r'[^a-zA-Z0-9]', '_', o).lower()
        val = val[:20] if len(val) > 20 else val
        o_clean = o.replace('"', '\\"')
        options_js += f'          {{ label: "{o_clean}", value: "{val}" }},\n'
    
    q_clean = q['question'].replace('"', '\\"').replace('\n', ' ')
    
    if q['score'] == 1:
        ans = '""'
        qtype = "single"
    else:
        ans = "[]"
        qtype = "multiple"

    js_out += f"""      {{
        id: "{q['id']}",
        number: {q['number']},
        type: "{qtype}",
        question: "{q_clean}",
        options: [
{options_js}        ],
        answer: {ans},
        explanation: "Refer to Baroid Core Participant Guide, Solids Control and Waste Management chapters."
      }},
"""

js_out += """    ]
  }
});

if (typeof module !== 'undefined') {
  module.exports = QUIZ_DATA;
}
"""

with open('data/homework_5.js', 'w', encoding='utf-8') as f:
    f.write(js_out)
print('Generated data/homework_5.js')
