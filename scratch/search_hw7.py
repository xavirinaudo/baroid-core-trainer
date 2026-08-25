# -*- coding: utf-8 -*-
import os, json, glob
from pypdf import PdfReader

study_dir = r'c:\Users\xavir\Documents\GitHub\baroid-core-trainer\study_materials'
manual_path = glob.glob(study_dir + '/*/*Participant Guide*.pdf')[0]

reader = PdfReader(manual_path)
pages = [p.extract_text() for p in reader.pages]

def search(query):
    query = query.lower()
    res = []
    for i, p in enumerate(pages):
        if p and query in p.lower():
            res.append(i+1)
    return res

print('DE-1000 replaceable:', search('wear parts'))
print('bowl diameter of a DE-7200:', search('18.5 inch'))
print('centrifuge performance:', search('centrifuge performance'))
print('BaraH2O:', search('barah2o'))
print('vertical dryer ROC:', search('roc'))
