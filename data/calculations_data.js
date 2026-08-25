Object.assign(CALCULATIONS_DATA, {
  alkalinity: [
    { id: "hw8_q20", name: "Homework 8, Q20 (Pf: 3.2, Mf: 6.8)", Pf: 3.2, Mf: 6.8 },
    { id: "hw8_q22", name: "Homework 8, Q22 (Pf: 0.3, Mf: 0.4)", Pf: 0.3, Mf: 0.4 }
  ],
  massbalance: [
    { id: "hw9_q24_25", name: "Homework 9, Q24-25 (Constant Volume: 2900 bbl, 12 to 15 ppg)", caseType: "constant_volume", V: 2900, W1: 12.0, W2: 15.0 },
    { id: "hw9_q26_27", name: "Homework 9, Q26-27 (Weight Up Only: 905 bbl, 11.4 to 12.9 ppg)", caseType: "weight_up_only", V: 905, W1: 11.4, W2: 12.9 },
    { id: "hw9_q28_29", name: "Homework 9, Q28-29 (BARACARB Build: 500 bbl, 13.0 ppg)", caseType: "build_from_scratch_baracarb", V: 500, W2: 13.0 },
    { id: "hw9_q30_32", name: "Homework 9, Q30-32 (Constant Volume: 2200 bbl, 16.5 to 18.0 ppg)", caseType: "constant_volume", V: 2200, W1: 16.5, W2: 18.0 }
  ],
  solids: [
    { id: "hw9_q33_36", name: "Homework 9, Q33-36 (Mud: 13.2 ppg, Water: 79%, Oil: 1%, CEC: 5)", mw: 13.2, water_pct: 79.0, oil_pct: 1.0, cec: 5 },
    { id: "hw9_q37_39", name: "Homework 9, Q37-39 (Mud: 11.0 ppg, Water: 74%, Oil: 7%, CEC: 6)", mw: 11.0, water_pct: 74.0, oil_pct: 7.0, cec: 6 }
  ],
  hole: [
    { id: "hw9_q40_46", name: "Homework 9, Q40-46 (Casing/Liner/DP/DC Wellbore)", pump_liner: 6.5, pump_stroke: 12, pump_eff: 0.96, TD: 22000, pit_vol: 1800, spm_pump1: 58, spm_pump2: 57 }
  ]
,
  contaminants: [
    {
      id: "case1",
      name: "Case 1: High Temperature",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "185", changed: true },
        { name: "Weight (lb/gal)", day1: "14.0", day2: "14.0", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "30 / 10", day2: "45 / 18", changed: true },
        { name: "API Filtrate (ml)", day1: "6.0", day2: "11.1", changed: true },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.5", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "80", day2: "80", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.0 / 1.5", day2: "9.1 / 0.7", changed: true },
        { name: "Pf / Mf", day1: "1.0 / 1.8", day2: "0.7 / 1.1", changed: true },
        { name: "Chlorides (mg/L)", day1: "300", day2: "300", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "100", day2: "100", changed: false }
      ],
      answer: {
        contaminant: "high_temperature",
        treatment: "dilute_base_fluid",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. FL Temp: Increases significantly from 120°F to 185°F.\n2. Weight & Chlorides: Unchanged (no influx).\n3. Solids & MBT: Unchanged (no active solids buildup).\n4. pH & Hardness: Hardness remains constant. pH and Pf/Mf drop slightly due to temperature-induced water dissociation.\n5. Rheology: Viscosity (PV) and Yield Point (YP) increase, and API filtrate increases (6.0 to 11.1 ml) due to thermal flocculation of clays.\n\nRecommended Treatment:\nDilute the system with base fluid to compensate for evaporation and temperature-related viscosity increase."
    },
    {
      id: "case2",
      name: "Case 2: Salt Water Influx",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "14.0", day2: "13.6", changed: true },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "30 / 10", day2: "27 / 18", changed: true },
        { name: "API Filtrate (ml)", day1: "N/A", day2: "N/A", changed: false },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.0", changed: true },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "83", day2: "87", changed: true },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.0 / 1.5", day2: "8.3 / 0.5", changed: true },
        { name: "Pf / Mf", day1: "1.0 / 1.8", day2: "0.2 / 1.3", changed: true },
        { name: "Chlorides (mg/L)", day1: "300", day2: "6000", changed: true },
        { name: "Hardness Ca++ (mg/L)", day1: "100", day2: "150", changed: true }
      ],
      answer: {
        contaminant: "salt_water_influx",
        treatment: "increase_density_stop_influx",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Weight & Retort: Weight drops from 14.0 to 13.6 ppg, retort solids drop (17% to 13%), and water increases (83% to 87%). This indicates water dilution.\n2. Chlorides: Explosive jump from 300 to 6,000 mg/L, indicating the entering water is salty (salt water flow).\n3. MBT: Drops from 2.5 to 2.0 lb/bbl (clay concentration diluted).\n4. pH & Hardness: pH drops to 8.3. Hardness increases slightly due to ion exchange displacing calcium from clays.\n5. Rheology: PV drops (solids dilution) but YP increases (flocculation from high salt concentration screening clay charge double layers).\n\nRecommended Treatment:\n1. Increase mud weight (density) to stop the influx.\n2. Dilute system with fresh water and polymers to restore proper rheology and fluid loss control."
    },
    {
      id: "case3",
      name: "Case 3: Fresh Water Influx",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "14.0", day2: "13.6", changed: true },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "30 / 10", day2: "24 / 7", changed: true },
        { name: "API Filtrate (ml)", day1: "N/A", day2: "N/A", changed: false },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.0", changed: true },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "83", day2: "87", changed: true },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.0 / 1.5", day2: "9.3 / 1.0", changed: true },
        { name: "Pf / Mf", day1: "1.0 / 1.1", day2: "0.8 / 0.9", changed: true },
        { name: "Chlorides (mg/L)", day1: "1200", day2: "600", changed: true },
        { name: "Hardness Ca++ (mg/L)", day1: "100", day2: "80", changed: true }
      ],
      answer: {
        contaminant: "fresh_water_influx",
        treatment: "stop_influx_weight_up",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Weight & Retort: Weight drops from 14.0 to 13.6 ppg, and solids drop from 17% to 13% (water increases from 83% to 87%). This indicates water dilution.\n2. Chlorides: Drop from 1,200 to 600 mg/L (diluted by fresh water).\n3. Hardness & pH: Hardness drops from 100 to 80 mg/L. pH drops from 10.0 to 9.3.\n4. Rheology: Both PV (30 to 24) and YP (10 to 7) drop because there is no flocculation (salts did not increase); it is a pure dilution effect.\n\nRecommended Treatment:\nIncrease mud weight to stop the influx, check surface lines for water leaks, and add bentonite/polymers to restore mud properties."
    },
    {
      id: "case4",
      name: "Case 4: Cement",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "123", changed: false },
        { name: "Weight (lb/gal)", day1: "14.0", day2: "14.1", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "30 / 10", day2: "45 / 18", changed: true },
        { name: "API Filtrate (ml)", day1: "6.0", day2: "28.8", changed: true },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.5", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "80", day2: "80", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.0 / 1.5", day2: "12.1 / 6.7", changed: true },
        { name: "Pf / Mf", day1: "1.0 / 1.8", day2: "4.4 / 4.5", changed: true },
        { name: "Chlorides (mg/L)", day1: "300", day2: "300", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "100", day2: "800", changed: true }
      ],
      answer: {
        contaminant: "cement",
        treatment: "sodium_bicarbonate",
        dosage: 0.5138
      },
      explanation: "Diagnostic Workflow:\n1. pH & Pm: Spikes masively (pH 12.1, Pm 6.7). The Pf/Mf becomes 4.4/4.5 (Pf is close to Mf, showing 2Pf > Mf, which indicates high hydroxide OH- ions).\n2. Hardness: Jumps from 100 to 800 mg/L (calcium source).\n3. Rheology & Fluid Loss: Flocculation causes PV/YP to rise, and API filtrate spikes to 28.8 ml (bentonite is flocculated by calcium and high pH).\n\nChemical Treatment & Calculation:\nTreat with Sodium Bicarbonate (NaHCO3) to precipitate Calcium as CaCO3:\nCa(OH)2 + NaHCO3 -> CaCO3 v + NaOH + H2O\n\nDosage calculation:\n- Calcium increase = 800 - 100 = 700 mg/L.\n- NaHCO3 Factor = 0.000734 lb/bbl per mg/L Ca\n- Dosage = 700 * 0.000734 = 0.5138 lb/bbl."
    },
    {
      id: "case5",
      name: "Case 5: Anhydrite / Gypsum",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "14.0", day2: "14.1", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "30 / 10", day2: "45 / 18", changed: true },
        { name: "API Filtrate (ml)", day1: "6.0", day2: "11.1", changed: true },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.5", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "80", day2: "80", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.0 / 1.5", day2: "8.3 / 0.5", changed: true },
        { name: "Pf / Mf", day1: "1.0 / 1.8", day2: "0.2 / 1.3", changed: true },
        { name: "Chlorides (mg/L)", day1: "300", day2: "300", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "100", day2: "800", changed: true }
      ],
      answer: {
        contaminant: "anhydrite_gypsum",
        treatment: "soda_ash",
        dosage: 0.6475
      },
      explanation: "Diagnostic Workflow:\n1. Hardness: Jumps from 100 to 800 mg/L (calcium source).\n2. pH & Alkalinity: pH drops from 10.0 to 8.3. Pf/Mf drops from 1.0/1.8 to 0.2/1.3 (2Pf < Mf, showing bicarbonate buildup). This is because anhydrite (CaSO4) doesn't release OH- ions; calcium consumes carbonate buffers, driving down pH.\n3. Rheology: Flocculation increases PV/YP and fluid loss.\n\nChemical Treatment & Calculation:\nTreat with Soda Ash (Na2CO3) to precipitate Calcium as CaCO3:\nCa++ + Na2CO3 -> CaCO3 v + 2Na+\n\nDosage calculation (Baroid Handbook p. 327):\n- Calcium increase = 800 - 100 = 700 mg/L.\n- Soda Ash Factor = 0.000925 lb/bbl per mg/L Ca\n- Dosage = 700 * 0.000925 = 0.6475 lb/bbl."
    },
    {
      id: "case6",
      name: "Case 6: Bicarbonates",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "14.0", day2: "14.0", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "30 / 10", day2: "55 / 34", changed: true },
        { name: "API Filtrate (ml)", day1: "6.0", day2: "11.1", changed: true },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.5", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "80", day2: "80", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.0 / 1.5", day2: "8.8 / 3.3", changed: true },
        { name: "Pf / Mf", day1: "1.0 / 1.8", day2: "2.2 / 7.4", changed: true },
        { name: "Chlorides (mg/L)", day1: "300", day2: "300", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "100", day2: "100", changed: false }
      ],
      answer: {
        contaminant: "bicarbonates",
        treatment: "lime",
        dosage: 1.5738
      },
      explanation: "Diagnostic Workflow:\n1. Pf & Mf: Pf increases slightly (1.0 to 2.2) but Mf increases masively (1.8 to 7.4). The ratio 2Pf = 4.4 < Mf = 7.4 indicates high Bicarbonates (HCO3-).\n2. pH & Hardness: pH drops from 10.0 to 8.8. Hardness remains constant at 100 mg/L.\n3. Rheology: Carbonate flocculation spikes YP from 10 to 34 lb/100ft².\n\nChemical Treatment & Calculation:\nTreat with Lime (Ca(OH)2) to convert bicarbonates into carbonates and precipitate them as CaCO3:\nCa(OH)2 + HCO3- -> CaCO3 v + H2O + OH-\n\nDosage calculation:\n- Day 2 Bicarbonate = 1220 * (Mf - 2Pf) = 1220 * (7.4 - 4.4) = 3660 mg/L.\n- Day 1 Bicarbonate = 0 mg/L (2Pf > Mf in Day 1).\n- Bicarbonate increase = 3660 mg/L.\n- Lime Factor = 0.00043 lb/bbl per mg/L HCO3-\n- Dosage = 3660 * 0.00043 = 1.5738 lb/bbl."
    },
    {
      id: "case7",
      name: "Case 7: Carbonates",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "15.0", day2: "15.0", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "33 / 11", day2: "55 / 32", changed: true },
        { name: "API Filtrate (ml)", day1: "8.0", day2: "16.8", changed: true },
        { name: "MBT (lb/bbl)", day1: "20", day2: "20", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "75", day2: "75", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "9.5 / 2.6", day2: "10.8 / 8.7", changed: true },
        { name: "Pf / Mf", day1: "2.2 / 3.1", day2: "8.2 / 16.3", changed: true },
        { name: "Chlorides (mg/L)", day1: "4000", day2: "4000", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "200", day2: "0", changed: true }
      ],
      answer: {
        contaminant: "carbonates",
        treatment: "gypsum_or_lime",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Pf & Mf: Both Pf (8.2) and Mf (16.3) increase significantly. The ratio 2Pf = 16.4 is approximately equal to Mf = 16.3, indicating Carbonates (CO3=) are the primary alkalinity ion.\n2. pH & Hardness: pH rises from 9.5 to 10.8 (due to carbonate hydrolysis). Hardness drops to 0 mg/L because the massive carbonate presence precipitates all free calcium as CaCO3.\n3. Rheology: Flocculation increases YP (11 to 32) and fluid loss.\n\nRecommended Treatment:\nAdd Gypsum (CaSO4) or Lime (Ca(OH)2) to supply Calcium and precipitate CaCO3. Gypsum is preferred when pH is already high (10.8) to prevent further pH buildup."
    },
    {
      id: "case8",
      name: "Case 8: Hydrogen Sulfide Gas (H2S)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "14.0", day2: "13.7", changed: true },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "30 / 10", day2: "45 / 18", changed: true },
        { name: "API Filtrate (ml)", day1: "6.0", day2: "11.1", changed: true },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.5", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "80", day2: "80", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.0 / 1.5", day2: "8.3 / 0.4", changed: true },
        { name: "Pf / Mf", day1: "1.0 / 1.8", day2: "0.1 / 0.2", changed: true },
        { name: "Chlorides (mg/L)", day1: "300", day2: "300", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "100", day2: "0", changed: true }
      ],
      answer: {
        contaminant: "h2s_gas",
        treatment: "h2s_scavenger",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. pH & Alkalinity: Drops drastically (pH from 10.0 to 8.3, Pm from 1.5 to 0.4, Pf/Mf to 0.1/0.2) because acidic H2S gas reacts with and consumes hydroxyl (OH-) buffers.\n2. Hardness: Drops to 0 mg/L as sulfides precipitate calcium/metals as insoluble sulfides.\n3. Rheology: Viscosity (PV/YP) and API fluid loss increase due to clay flocculation under depressed pH.\n\nRecommended Treatment:\nAdd H2S Scavenger (Zinc Carbonate or Zinc Oxide) to precipitate sulfides, and Caustic Soda (NaOH) to raise pH above 10.0 for safety buffer."
    },
    {
      id: "case9",
      name: "Case 9: Salt (NaCl)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "14.0", day2: "14.1", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "30 / 10", day2: "45 / 18", changed: true },
        { name: "API Filtrate (ml)", day1: "6.0", day2: "11.1", changed: true },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.5", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "80", day2: "80", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.0 / 1.5", day2: "9.9 / 1.3", changed: true },
        { name: "Pf / Mf", day1: "1.0 / 1.8", day2: "0.7 / 1.4", changed: true },
        { name: "Chlorides (mg/L)", day1: "300", day2: "11000", changed: true },
        { name: "Hardness Ca++ (mg/L)", day1: "100", day2: "150", changed: true }
      ],
      answer: {
        contaminant: "salt_nacl",
        treatment: "dilute_base_fluid",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Chlorides: Spikes from 300 to 11,000 mg/L (NaCl dissolution).\n2. Weight: Does NOT drop (remains 14.0-14.1 ppg), which distinguishes this from a salt water influx. This indicates drilling through a solid salt evaporite formation.\n3. Rheology & Fluid Loss: High salt concentration compresses clay electrical double layers, causing clay flocculation (PV/YP and API filtrate rise).\n\nRecommended Treatment:\nDilute system with fresh water and add salt-tolerant polymers to restore rheology and filtration control."
    },
    {
      id: "case10",
      name: "Case 10: Active Drilled Solids",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "12.0", day2: "12.4", changed: true },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "20 / 8", day2: "35 / 22", changed: true },
        { name: "API Filtrate (ml)", day1: "N/A", day2: "N/A", changed: false },
        { name: "MBT (lb/bbl)", day1: "15.0", day2: "25.0", changed: true },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "90", day2: "85", changed: true },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "9.5 / 1.2", day2: "9.2 / 0.9", changed: true },
        { name: "Pf / Mf", day1: "0.8 / 1.5", day2: "0.6 / 1.2", changed: true },
        { name: "Chlorides (mg/L)", day1: "1500", day2: "1500", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "120", day2: "140", changed: false }
      ],
      answer: {
        contaminant: "active_drilled_solids",
        treatment: "optimize_solids_control_dilute",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. MBT: Spikes from 15.0 to 25.0 lb/bbl bentonite eq. This is the key diagnostic for active solids (hydratable clays/shales).\n2. Solids & Weight: Weight increases (12.0 to 12.4 ppg), and retort solids increase from 10% to 15%.\n3. Rheology: Viscosity (PV) and Yield Point (YP) increase significantly due to high active clay surface area.\n4. Chemistry: Chlorides, hardness, and pH remain stable.\n\nRecommended Treatment:\nOptimize shakers and centrifuges, dilute mud with base fluid, and add PHPA (encapsulator) to inhibit clay dispersion."
    },
    {
      id: "case11",
      name: "Case 11: Inactive Solids",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "12.0", day2: "12.5", changed: true },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "20 / 8", day2: "32 / 15", changed: true },
        { name: "API Filtrate (ml)", day1: "N/A", day2: "N/A", changed: false },
        { name: "MBT (lb/bbl)", day1: "15.0", day2: "15.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "3.5%", changed: true },
        { name: "Retort Water (%)", day1: "90", day2: "84", changed: true },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "9.5 / 1.2", day2: "9.3 / 1.0", changed: true },
        { name: "Pf / Mf", day1: "0.8 / 1.5", day2: "0.7 / 1.4", changed: true },
        { name: "Chlorides (mg/L)", day1: "1500", day2: "1500", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "120", day2: "160", changed: true }
      ],
      answer: {
        contaminant: "inactive_solids",
        treatment: "optimize_solids_control_dilute",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. MBT: Remains constant at 15.0. This indicates the new solids are NOT active clays.\n2. Sand content: Increases from trace to 3.5%, confirming accumulation of inactive, abrasive solids (quartz, sand, limestone).\n3. Solids & Weight: Weight increases to 12.5 ppg, retort solids increase to 16%.\n4. Rheology: PV rises (mechanical solids friction) but YP remains relatively low compared to the active solids case.\n\nRecommended Treatment:\nOptimize mechanical solids control (desanders, desilters, shakers) and dilute to lower sand content."
    },
    {
      id: "case12",
      name: "Case 12: Cement (Case 2)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "130", day2: "132", changed: false },
        { name: "Weight (lb/gal)", day1: "11.5", day2: "11.6", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "18 / 6", day2: "32 / 20", changed: true },
        { name: "API Filtrate (ml)", day1: "4.5", day2: "15.0", changed: true },
        { name: "MBT (lb/bbl)", day1: "12.0", day2: "12.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "86", day2: "86", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "9.2 / 0.8", day2: "12.2 / 5.5", changed: true },
        { name: "Pf / Mf", day1: "0.5 / 1.2", day2: "4.1 / 4.4", changed: true },
        { name: "Chlorides (mg/L)", day1: "2500", day2: "2500", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "80", day2: "950", changed: true }
      ],
      answer: {
        contaminant: "cement",
        treatment: "sodium_bicarbonate",
        dosage: 0.6386
      },
      explanation: "Diagnostic Workflow:\n1. pH & Pm: Spike massively (pH 12.2, Pm 5.5), and 2Pf = 8.2 > Mf = 4.4 (high OH- ions).\n2. Hardness: Jumps from 80 to 950 mg/L (calcium source).\n3. Rheology & Fluid Loss: Cement flocculation increases YP (6 to 20) and filtrate (4.5 to 15.0 ml).\n\nChemical Treatment & Calculation:\nTreat with Sodium Bicarbonate (NaHCO3) to precipitate Calcium:\nCa(OH)2 + NaHCO3 -> CaCO3 v + NaOH + H2O\n\nDosage calculation:\n- Calcium increase = 950 - 80 = 870 mg/L.\n- NaNaHCO3 Factor = 0.000734 lb/bbl per mg/L Ca\n- Dosage = 870 * 0.000734 = 0.6386 lb/bbl."
    },
    {
      id: "case13",
      name: "Case 13: Salt Water Influx (Case 2)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "140", day2: "142", changed: false },
        { name: "Weight (lb/gal)", day1: "16.0", day2: "15.3", changed: true },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "40 / 15", day2: "58 / 28", changed: true },
        { name: "API Filtrate (ml)", day1: "N/A", day2: "N/A", changed: false },
        { name: "MBT (lb/bbl)", day1: "20.0", day2: "16.0", changed: true },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "70", day2: "77", changed: true },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.5 / 2.0", day2: "9.0 / 0.8", changed: true },
        { name: "Pf / Mf", day1: "1.5 / 2.8", day2: "0.5 / 1.2", changed: true },
        { name: "Chlorides (mg/L)", day1: "15000", day2: "45000", changed: true },
        { name: "Hardness Ca++ (mg/L)", day1: "250", day2: "600", changed: true }
      ],
      answer: {
        contaminant: "salt_water_influx",
        treatment: "increase_density_stop_influx",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Weight & Retort: Mud Weight drops significantly from 16.0 to 15.3 ppg, and retort solids drop from 30% to 23%. This indicates high water influx.\n2. Chlorides: Spikes from 15,000 to 45,000 mg/L (extremely salty formation brine influx).\n3. MBT: Drops from 20.0 to 16.0 lb/bbl (clay dilution).\n4. Rheology: Flocculation causes PV (40 to 58) and YP (15 to 28) to rise.\n\nRecommended Treatment:\n1. Increase density (weight up) to stop the influx.\n2. Dilute and treat with salt-tolerant polymers."
    },
    {
      id: "case14",
      name: "Case 14: Anhydrite / Gypsum (Case 2)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "110", day2: "115", changed: false },
        { name: "Weight (lb/gal)", day1: "10.5", day2: "10.6", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "15 / 5", day2: "25 / 14", changed: true },
        { name: "API Filtrate (ml)", day1: "5.0", day2: "18.0", changed: true },
        { name: "MBT (lb/bbl)", day1: "10.0", day2: "10.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "88", day2: "88", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.2 / 1.8", day2: "8.6 / 0.5", changed: true },
        { name: "Pf / Mf", day1: "1.2 / 2.1", day2: "0.3 / 0.9", changed: true },
        { name: "Chlorides (mg/L)", day1: "800", day2: "800", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "60", day2: "1200", changed: true }
      ],
      answer: {
        contaminant: "anhydrite_gypsum",
        treatment: "soda_ash",
        dosage: 1.0545
      },
      explanation: "Diagnostic Workflow:\n1. Hardness: Jumps from 60 to 1,200 mg/L (calcium source).\n2. pH & Alkalinity: pH drops from 10.2 to 8.6, Pf/Mf drops to 0.3/0.9. Bicarbonates are present (2Pf < Mf).\n3. Rheology & Fluid loss: Clay flocculation increases YP (5 to 14) and API filtrate spikes to 18.0 ml.\n\nChemical Treatment & Calculation:\nTreat with Soda Ash (Na2CO3) to precipitate Calcium:\nCa++ + Na2CO3 -> CaCO3 v + 2Na+\n\nDosage calculation:\n- Calcium increase = 1200 - 60 = 1140 mg/L.\n- Soda Ash Factor = 0.000925 lb/bbl per mg/L Ca\n- Dosage = 1140 * 0.000925 = 1.0545 lb/bbl."
    },
    {
      id: "case15",
      name: "Case 15: Cement (Case 3)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "115", day2: "120", changed: false },
        { name: "Weight (lb/gal)", day1: "12.5", day2: "12.6", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "22 / 8", day2: "36 / 24", changed: true },
        { name: "API Filtrate (ml)", day1: "5.2", day2: "18.5", changed: true },
        { name: "MBT (lb/bbl)", day1: "14.0", day2: "14.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "83", day2: "83", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "9.6 / 0.9", day2: "12.0 / 4.8", changed: true },
        { name: "Pf / Mf", day1: "0.6 / 1.1", day2: "3.5 / 3.8", changed: true },
        { name: "Chlorides (mg/L)", day1: "1800", day2: "1800", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "80", day2: "680", changed: true }
      ],
      answer: {
        contaminant: "cement",
        treatment: "sodium_bicarbonate",
        dosage: 0.4404
      },
      explanation: "Diagnostic Workflow:\n1. pH & Pm: Spikes massively (pH 12.0, Pm 4.8), and $2Pf = 7.0 > Mf = 3.8$ (high hydroxyl OH- ions from cement dissolution).\n2. Hardness: Jumps from 80 to 680 mg/L (massive calcium source).\n3. Rheology & Fluid Loss: High pH and calcium flocculate active clays, spiking PV/YP and increasing filtrate to 18.5 ml.\n\nChemical Treatment & Calculation:\nTreat with Sodium Bicarbonate (NaHCO3) to precipitate Calcium as CaCO3:\nCa(OH)2 + NaHCO3 -> CaCO3 v + NaOH + H2O\n\nDosage calculation:\n- Calcium increase = 680 - 80 = 600 mg/L.\n- NaHCO3 Factor = 0.000734 lb/bbl per mg/L Ca\n- Dosage = 600 * 0.000734 = 0.4404 lb/bbl."
    },
    {
      id: "case16",
      name: "Case 16: Cement (Case 4)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "125", day2: "127", changed: false },
        { name: "Weight (lb/gal)", day1: "10.8", day2: "10.9", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "16 / 5", day2: "28 / 18", changed: true },
        { name: "API Filtrate (ml)", day1: "4.8", day2: "14.2", changed: true },
        { name: "MBT (lb/bbl)", day1: "12.0", day2: "12.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "88", day2: "88", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "9.4 / 0.7", day2: "11.9 / 3.9", changed: true },
        { name: "Pf / Mf", day1: "0.4 / 0.9", day2: "2.8 / 3.0", changed: true },
        { name: "Chlorides (mg/L)", day1: "1200", day2: "1200", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "60", day2: "510", changed: true }
      ],
      answer: {
        contaminant: "cement",
        treatment: "sodium_bicarbonate",
        dosage: 0.3303
      },
      explanation: "Diagnostic Workflow:\n1. pH & Pm: Spikes massively (pH 11.9, Pm 3.9), and $2Pf = 5.6 > Mf = 3.0$ (high hydroxyl OH- ions from cement dissolution).\n2. Hardness: Jumps from 60 to 510 mg/L (calcium source).\n3. Rheology & Fluid Loss: Flocculation increases PV/YP and fluid loss.\n\nChemical Treatment & Calculation:\nTreat with Sodium Bicarbonate (NaHCO3) to precipitate Calcium as CaCO3:\nCa(OH)2 + NaHCO3 -> CaCO3 v + NaOH + H2O\n\nDosage calculation:\n- Calcium increase = 510 - 60 = 450 mg/L.\n- NaNaHCO3 Factor = 0.000734 lb/bbl per mg/L Ca\n- Dosage = 450 * 0.000734 = 0.3303 lb/bbl."
    },
    {
      id: "case17",
      name: "Case 17: Anhydrite / Gypsum (Case 3)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "110", day2: "114", changed: false },
        { name: "Weight (lb/gal)", day1: "11.8", day2: "11.9", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "24 / 9", day2: "35 / 22", changed: true },
        { name: "API Filtrate (ml)", day1: "5.5", day2: "12.5", changed: true },
        { name: "MBT (lb/bbl)", day1: "15.0", day2: "15.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "86", day2: "86", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.1 / 1.6", day2: "8.4 / 0.4", changed: true },
        { name: "Pf / Mf", day1: "1.1 / 2.0", day2: "0.2 / 1.1", changed: true },
        { name: "Chlorides (mg/L)", day1: "1000", day2: "1000", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "80", day2: "480", changed: true }
      ],
      answer: {
        contaminant: "anhydrite_gypsum",
        treatment: "soda_ash",
        dosage: 0.37
      },
      explanation: "Diagnostic Workflow:\n1. Hardness: Jumps from 80 to 480 mg/L (calcium source).\n2. pH & Alkalinity: pH drops from 10.1 to 8.4. Pf/Mf drops to 0.2/1.1 ($2Pf = 0.4 < Mf = 1.1$, bicarbonate buffer forms). Free calcium precipitates carbonates, depleting pH buffers.\n3. Rheology & Fluid loss: Clay flocculation increases YP (9 to 22) and API filtrate.\n\nChemical Treatment & Calculation:\nTreat with Soda Ash (Na2CO3) to precipitate Calcium as CaCO3:\nCa++ + Na2CO3 -> CaCO3 v + 2Na+\n\nDosage calculation:\n- Calcium increase = 480 - 80 = 400 mg/L.\n- Soda Ash Factor = 0.000925 lb/bbl per mg/L Ca\n- Dosage = 400 * 0.000925 = 0.37 lb/bbl."
    },
    {
      id: "case18",
      name: "Case 18: Anhydrite / Gypsum (Case 4)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "122", changed: false },
        { name: "Weight (lb/gal)", day1: "13.5", day2: "13.6", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "28 / 11", day2: "42 / 26", changed: true },
        { name: "API Filtrate (ml)", day1: "6.2", day2: "14.8", changed: true },
        { name: "MBT (lb/bbl)", day1: "18.0", day2: "18.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "80", day2: "80", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "9.8 / 1.3", day2: "8.5 / 0.5", changed: true },
        { name: "Pf / Mf", day1: "0.9 / 1.6", day2: "0.3 / 1.4", changed: true },
        { name: "Chlorides (mg/L)", day1: "200", day2: "200", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "100", day2: "960", changed: true }
      ],
      answer: {
        contaminant: "anhydrite_gypsum",
        treatment: "soda_ash",
        dosage: 0.7955
      },
      explanation: "Diagnostic Workflow:\n1. Hardness: Jumps from 100 to 960 mg/L (calcium source).\n2. pH & Alkalinity: pH and Pm drop. $2Pf = 0.6 < Mf = 1.4$ indicates bicarbonate buildup from carbonate depletion.\n3. Rheology & Fluid loss: Clay flocculation increases viscosity and fluid loss.\n\nChemical Treatment & Calculation:\nTreat with Soda Ash (Na2CO3) to precipitate Calcium:\nCa++ + Na2CO3 -> CaCO3 v + 2Na+\n\nDosage calculation:\n- Calcium increase = 960 - 100 = 860 mg/L.\n- Soda Ash Factor = 0.000925 lb/bbl per mg/L Ca\n- Dosage = 860 * 0.000925 = 0.7955 lb/bbl."
    },
    {
      id: "case19",
      name: "Case 19: Bicarbonates (Case 2)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "110", day2: "114", changed: false },
        { name: "Weight (lb/gal)", day1: "12.0", day2: "12.0", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "20 / 7", day2: "40 / 22", changed: true },
        { name: "API Filtrate (ml)", day1: "5.0", day2: "9.8", changed: true },
        { name: "MBT (lb/bbl)", day1: "12.0", day2: "12.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "86", day2: "86", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.2 / 1.5", day2: "8.9 / 2.5", changed: true },
        { name: "Pf / Mf", day1: "1.0 / 1.6", day2: "1.5 / 5.2", changed: true },
        { name: "Chlorides (mg/L)", day1: "800", day2: "800", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "60", day2: "60", changed: false }
      ],
      answer: {
        contaminant: "bicarbonates",
        treatment: "lime",
        dosage: 1.1541
      },
      explanation: "Diagnostic Workflow:\n1. Pf & Mf: Pf increases slightly (1.0 to 1.5) but Mf spikes significantly (1.6 to 5.2). The ratio $2Pf = 3.0 < Mf = 5.2$ diagnoses Bicarbonate (HCO3-) contamination.\n2. pH & Hardness: pH drops from 10.2 to 8.9. Hardness is stable at 60 mg/L.\n3. Rheology: Carbonate flocculation spikes YP from 7 to 22 lb/100ft².\n\nChemical Treatment & Calculation:\nTreat with Lime (Ca(OH)2) to precipitate carbonates as CaCO3:\nCa(OH)2 + HCO3- -> CaCO3 v + H2O + OH-\n\nDosage calculation:\n- Day 2 Bicarbonate = 1220 * (Mf - 2Pf) = 1220 * (5.2 - 2 * 1.5) = 2684 mg/L.\n- Day 1 Bicarbonate = 0 mg/L (since $2Pf = 2.0 >= Mf = 1.6$).\n- Bicarbonate increase = 2684 mg/L.\n- Lime Factor = 0.00043 lb/bbl per mg/L HCO3-\n- Dosage = 2684 * 0.00043 = 1.1541 lb/bbl."
    },
    {
      id: "case20",
      name: "Case 20: Bicarbonates (Case 3)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "123", changed: false },
        { name: "Weight (lb/gal)", day1: "14.5", day2: "14.5", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "32 / 12", day2: "54 / 35", changed: true },
        { name: "API Filtrate (ml)", day1: "6.0", day2: "11.5", changed: true },
        { name: "MBT (lb/bbl)", day1: "16.0", day2: "16.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "75", day2: "75", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "10.0 / 1.8", day2: "8.7 / 3.8", changed: true },
        { name: "Pf / Mf", day1: "1.2 / 2.0", day2: "2.0 / 8.4", changed: true },
        { name: "Chlorides (mg/L)", day1: "1500", day2: "1500", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "80", day2: "80", changed: false }
      ],
      answer: {
        contaminant: "bicarbonates",
        treatment: "lime",
        dosage: 2.3082
      },
      explanation: "Diagnostic Workflow:\n1. Pf & Mf: Mf spikes significantly (2.0 to 8.4) while Pf rises slightly (1.2 to 2.0). $2Pf = 4.0 < Mf = 8.4$ diagnoses Bicarbonate (HCO3-) contamination.\n2. pH & Hardness: pH drops from 10.0 to 8.7. Hardness is stable at 80 mg/L.\n3. Rheology: Flocculation spikes YP from 12 to 35 lb/100ft².\n\nChemical Treatment & Calculation:\nTreat with Lime (Ca(OH)2) to convert and precipitate carbonates:\nCa(OH)2 + HCO3- -> CaCO3 v + H2O + OH-\n\nDosage calculation:\n- Day 2 Bicarbonate = 1220 * (Mf - 2Pf) = 1220 * (8.4 - 2 * 2.0) = 5368 mg/L.\n- Day 1 Bicarbonate = 0 mg/L (since $2Pf = 2.4 >= Mf = 2.0$).\n- Bicarbonate increase = 5368 mg/L.\n- Lime Factor = 0.00043 lb/bbl per mg/L HCO3-\n- Dosage = 5368 * 0.00043 = 2.3082 lb/bbl."
    },
    {
      id: "case21",
      name: "Case 21: Carbonates (Case 2)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "115", day2: "117", changed: false },
        { name: "Weight (lb/gal)", day1: "13.0", day2: "13.0", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "25 / 10", day2: "45 / 28", changed: true },
        { name: "API Filtrate (ml)", day1: "6.5", day2: "13.2", changed: true },
        { name: "MBT (lb/bbl)", day1: "14.0", day2: "14.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "83", day2: "83", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "9.8 / 2.0", day2: "10.9 / 6.5", changed: true },
        { name: "Pf / Mf", day1: "1.5 / 2.2", day2: "6.0 / 12.1", changed: true },
        { name: "Chlorides (mg/L)", day1: "2000", day2: "2000", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "120", day2: "0", changed: true }
      ],
      answer: {
        contaminant: "carbonates",
        treatment: "gypsum_or_lime",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Pf & Mf: Both Pf (6.0) and Mf (12.1) spike. The ratio $2Pf = 12.0 \approx Mf = 12.1$ indicates Carbonates (CO3=) are the primary alkalinity ion.\n2. pH & Hardness: pH rises to 10.9. Hardness drops to 0 mg/L because the massive carbonate presence precipitates all free calcium as CaCO3.\n3. Rheology: Flocculation increases viscosity and fluid loss.\n\nRecommended Treatment:\nAdd Gypsum (CaSO4) or Lime (Ca(OH)2) to supply Calcium and precipitate CaCO3. Gypsum is preferred when pH is already high (10.9) to prevent further pH buildup."
    },
    {
      id: "case22",
      name: "Case 22: Carbonates (Case 3)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "122", changed: false },
        { name: "Weight (lb/gal)", day1: "12.2", day2: "12.2", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "22 / 8", day2: "38 / 23", changed: true },
        { name: "API Filtrate (ml)", day1: "5.8", day2: "11.2", changed: true },
        { name: "MBT (lb/bbl)", day1: "12.0", day2: "12.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "Retort Water (%)", day1: "83", day2: "83", changed: false },
        { name: "Retort Oil (%)", day1: "0", day2: "0", changed: false },
        { name: "pH / Pm", day1: "9.7 / 1.8", day2: "10.7 / 5.8", changed: true },
        { name: "Pf / Mf", day1: "1.2 / 1.9", day2: "5.2 / 10.5", changed: true },
        { name: "Chlorides (mg/L)", day1: "1500", day2: "1500", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "100", day2: "0", changed: true }
      ],
      answer: {
        contaminant: "carbonates",
        treatment: "gypsum_or_lime",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Pf & Mf: Both Pf and Mf spike, and $2Pf = 10.4 \approx Mf = 10.5$, indicating Carbonates (CO3=) are the primary alkalinity ion.\n2. pH & Hardness: pH rises from 9.7 to 10.7. Hardness drops to 0 mg/L as carbonates precipitate all free calcium.\n3. Rheology: Flocculation increases PV/YP and fluid loss.\n\nRecommended Treatment:\nAdd Gypsum (CaSO4) or Lime to precipitate carbonates. Gypsum is preferred due to high pH (10.7)."
    }
  ],
  contaminants_naf: [
    {
      id: "naf_case1",
      name: "Case 1: Drilled Solids",
      note: "Viscosity and retort solids increase while chemical properties remain stable.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.0", day2: "12.1", changed: true },
        { name: "Funnel Vis (sec)", day1: "65", day2: "72", changed: true },
        { name: "PV (cP)", day1: "32", day2: "42", changed: true },
        { name: "YP (lb/100ft²)", day1: "18", day2: "19", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "7/11", day2: "14/26", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "4.0", day2: "5.4", changed: true },
        { name: "Retort Oil (%)", day1: "54", day2: "53", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "17", changed: true },
        { name: "Retort Solids (%)", day1: "28", day2: "30", changed: true },
        { name: "Lime (ppb)", day1: "2.10", day2: "2.0", changed: true },
        { name: "Chlorides (mg/L)", day1: "31500", day2: "31500", changed: false },
        { name: "Calcium (mg/L)", day1: "22000", day2: "22000", changed: false },
        { name: "Water Phase Salinity (mg/L)", day1: "215000", day2: "215000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "585", day2: "474", changed: true }
      ],
      answer: {
        contaminant: "drilled_solids",
        treatment: "mechanical_separation_dilution",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Solids & Weight: Retort solids increase from 28% to 30%, indicating solids build-up. Density rises from 12.0 to 12.1 ppg.\n2. Rheology: Funnel Viscosity spikes (65 to 72s), PV spikes (32 to 42 cP), and Gels double (7/11 to 14/26) due to the addition of drill solids.\n3. Salinity: Chlorides, Calcium, and WPS remain completely constant, confirming no influx of fresh water or brine, nor solid salt dissolution.\n4. ES Drop: ES drops from 585 to 474 because drill solids absorb emulsifiers from the system.\n\nRecommended Treatment:\nOptimize solid control equipment (mechanical separation) and dilute with fresh base oil (NAP)."
    },
    {
      id: "naf_case2",
      name: "Case 2: Acid Gas (CO2)",
      note: "Weight and electrical stability drop significantly while lime reserve is completely depleted.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.0", day2: "11.8", changed: true },
        { name: "Funnel Vis (sec)", day1: "65", day2: "66", changed: true },
        { name: "PV (cP)", day1: "32", day2: "34", changed: true },
        { name: "YP (lb/100ft²)", day1: "18", day2: "19", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "7/11", day2: "7/11", changed: false },
        { name: "HTHP Filtrate (mL)", day1: "4.0", day2: "7.5", changed: true },
        { name: "Retort Oil (%)", day1: "54", day2: "54", changed: false },
        { name: "Retort Water (%)", day1: "18", day2: "18", changed: false },
        { name: "Retort Solids (%)", day1: "28", day2: "28", changed: false },
        { name: "Lime (ppb)", day1: "3.10", day2: "0.00", changed: true },
        { name: "Chlorides (mg/L)", day1: "31500", day2: "31500", changed: false },
        { name: "Calcium (mg/L)", day1: "22000", day2: "21000", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "21500", day2: "21500", changed: false },
        { name: "Electrical Stability (Volts)", day1: "485", day2: "319", changed: true }
      ],
      answer: {
        contaminant: "acid_gas_co2",
        treatment: "lime",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Lime Reserve: Excess Lime drops from 3.10 ppb to 0.00 ppb. This is the primary indicator of CO2 contamination, which consumes lime to form CaCO3.\n2. Emulsion Destabilization: Without excess lime to maintain soap emulsifiers, the emulsion destabilizes, dropping ES from 485 to 319 and spiking HTHP fluid loss from 4.0 to 7.5 mL.\n3. Density: Density drops from 12.0 to 11.8 ppg due to gas entry (gas-cut mud).\n\nRecommended Treatment:\nAdd lime (Ca(OH)2) to neutralize the CO2, re-establish the alkaline buffer, and stabilize the emulsifiers."
    },
    {
      id: "naf_case3",
      name: "Case 3: Hydrocarbons",
      note: "Density and viscosities decrease while retort oil percentage increases.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.2", day2: "12.1", changed: true },
        { name: "Funnel Vis (sec)", day1: "65", day2: "62", changed: true },
        { name: "PV (cP)", day1: "32", day2: "30", changed: true },
        { name: "YP (lb/100ft²)", day1: "18", day2: "17", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "7/11", day2: "6/10", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "4.0", day2: "6.5", changed: true },
        { name: "Retort Oil (%)", day1: "54", day2: "56", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "17", changed: true },
        { name: "Retort Solids (%)", day1: "28", day2: "27", changed: true },
        { name: "Lime (ppb)", day1: "2.10", day2: "4.8", changed: true },
        { name: "Chlorides (mg/L)", day1: "31500", day2: "31500", changed: false },
        { name: "Calcium (mg/L)", day1: "22000", day2: "22000", changed: false },
        { name: "Water Phase Salinity (mg/L)", day1: "215000", day2: "215000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "485", day2: "502", changed: true }
      ],
      answer: {
        contaminant: "hydrocarbons",
        treatment: "dilution_brine",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Oil Phase Build-up: Retort oil percentage rises from 54% to 56%, while water and solids decrease. This indicates hydrocarbon influx.\n2. Viscosity Drop: PV, YP, Funnel Vis, and Gels all decrease because incoming crude oil/hydrocarbons dilute the mud and act as a thinner.\n3. Density Drop: Density drops from 12.2 to 12.1 ppg (crude is lighter than the mud).\n4. ES & HTHP: ES remains stable or increases (485 to 502) since the oil is oil-miscible, but HTHP increases (4.0 to 6.5 mL) due to the changing chemistry of the oil phase.\n\nRecommended Treatment:\nDilute with brine to restore the original oil-water ratio (OWR) and adjust viscosity using viscosifiers/emulsifiers if necessary."
    },
    {
      id: "naf_case4",
      name: "Case 4: Fresh Water",
      note: "Retort water percentage and viscosities spike while salinity and electrical stability collapse.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.0", day2: "11.6", changed: true },
        { name: "Funnel Vis (sec)", day1: "65", day2: "97", changed: true },
        { name: "PV (cP)", day1: "32", day2: "53", changed: true },
        { name: "YP (lb/100ft²)", day1: "18", day2: "29", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "7/11", day2: "9/19", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "4.0", day2: "6.5", changed: true },
        { name: "Retort Oil (%)", day1: "54", day2: "47", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "28", changed: true },
        { name: "Retort Solids (%)", day1: "28", day2: "25", changed: true },
        { name: "Lime (ppb)", day1: "2.10", day2: "1.8", changed: true },
        { name: "Chlorides (mg/L)", day1: "31500", day2: "13000", changed: true },
        { name: "Calcium (mg/L)", day1: "22000", day2: "9000", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "215000", day2: "101500", changed: true },
        { name: "Electrical Stability (Volts)", day1: "485", day2: "136", changed: true }
      ],
      answer: {
        contaminant: "fresh_water",
        treatment: "dilution_base_fluid",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Water Content Spike: Retort water increases from 18% to 28%, and oil decreases from 54% to 47%. Density drops from 12.0 to 11.6 ppg.\n2. Viscosity Spike: PV spikes from 32 to 53 cP, and Funnel Vis spikes from 65 to 97s. The fresh water entry increases the internal phase volume, creating a highly packed, high-friction emulsion (emulsion thickening).\n3. Salinity Drops: Chlorides drop from 31,500 to 13,000 mg/L, Calcium drops from 22,000 to 9,000 mg/L, and WPS drops from 215,000 to 101,500 ppm due to massive fresh water dilution.\n4. ES Drops: ES drops severely from 485 to 136 due to emulsion dilution and drop in salinity.\n\nRecommended Treatment:\nDilute with base oil (NAP), add emulsifiers/wetting agents to stabilize the additional water, and add CaCl2 to restore design WPS."
    },
    {
      id: "naf_case5",
      name: "Case 5: Salt (Formation)",
      note: "Water phase salinity and chlorides spike while calcium remains stable.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.0", day2: "12.1", changed: true },
        { name: "Funnel Vis (sec)", day1: "65", day2: "66", changed: true },
        { name: "PV (cP)", day1: "32", day2: "34", changed: true },
        { name: "YP (lb/100ft²)", day1: "18", day2: "19", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "7/11", day2: "7/11", changed: false },
        { name: "HTHP Filtrate (mL)", day1: "4.0", day2: "6.5", changed: true },
        { name: "Retort Oil (%)", day1: "54", day2: "53.5", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "17.5", changed: true },
        { name: "Retort Solids (%)", day1: "28", day2: "29", changed: true },
        { name: "Lime (ppb)", day1: "2.10", day2: "2.1", changed: false },
        { name: "Chlorides (mg/L)", day1: "31500", day2: "42000", changed: true },
        { name: "Calcium (mg/L)", day1: "22000", day2: "22000", changed: false },
        { name: "Water Phase Salinity (mg/L)", day1: "215000", day2: "252800", changed: true },
        { name: "Electrical Stability (Volts)", day1: "585", day2: "416", changed: true }
      ],
      answer: {
        contaminant: "salt_formation",
        treatment: "dilution_fresh_water",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Chlorides & WPS Spike: Chlorides increase from 31,500 to 42,000 mg/L, and WPS spikes from 215,000 to 252,800 ppm (near saturation). Calcium remains completely stable at 22,000 mg/L. This confirms NaCl (solid salt formation) is dissolving into the brine phase.\n2. ES & HTHP: ES drops from 585 to 416, and HTHP increases from 4.0 to 6.5 mL, as high concentrations of monovalent sodium ions compete with divalent calcium emulsifiers, destabilizing the emulsion.\n\nRecommended Treatment:\nDilute the water phase with fresh water (or a lower salinity brine) to lower the salt concentration and prevent salt crystals from wetting solids. Add emulsifiers to restore ES."
    },
    {
      id: "naf_case6",
      name: "Case 6: Cement",
      note: "Lime content and calcium spike while water phase salinity remains stable.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.0", day2: "12.1", changed: true },
        { name: "Funnel Vis (sec)", day1: "65", day2: "66", changed: true },
        { name: "PV (cP)", day1: "32", day2: "34", changed: true },
        { name: "YP (lb/100ft²)", day1: "18", day2: "19", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "7/11", day2: "7/11", changed: false },
        { name: "HTHP Filtrate (mL)", day1: "4.0", day2: "6.5", changed: true },
        { name: "Retort Oil (%)", day1: "54", day2: "53.5", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "17.5", changed: true },
        { name: "Retort Solids (%)", day1: "28", day2: "29", changed: true },
        { name: "Lime (ppb)", day1: "2.10", day2: "4.8", changed: true },
        { name: "Chlorides (mg/L)", day1: "31500", day2: "31500", changed: false },
        { name: "Calcium (mg/L)", day1: "22000", day2: "24000", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "215000", day2: "215000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "485", day2: "506", changed: true }
      ],
      answer: {
        contaminant: "cement",
        treatment: "mechanical_separation_dilution",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Lime & Calcium Increase: Measured Excess Lime spikes from 2.10 to 4.8 ppb, and Calcium increases from 22,000 to 24,000 mg/L. Active cement releases calcium hydroxide, which registers as alkalinity (lime) and calcium in our titrations.\n2. Solids and Rheology: Solids increase slightly (28% to 29%), and HTHP increases from 4.0 to 6.5 mL due to fine cement solids.\n3. Salinity: WPS and Chlorides remain stable (215,000 ppm and 31,500 mg/L), ruling out brine/salt water entry.\n\nRecommended Treatment:\nOptimize solid control equipment (mechanical separation) to remove cement solids and dilute the system to reduce alkalinity."
    },
    {
      id: "naf_case7",
      name: "Case 7: Salt Water",
      note: "Water percentage spikes while salinity and electrical stability drop (less severe salinity drop than fresh water).",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.0", day2: "11.6", changed: true },
        { name: "Funnel Vis (sec)", day1: "65", day2: "97", changed: true },
        { name: "PV (cP)", day1: "32", day2: "53", changed: true },
        { name: "YP (lb/100ft²)", day1: "18", day2: "29", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "7/11", day2: "9/19", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "4.0", day2: "6.5", changed: true },
        { name: "Retort Oil (%)", day1: "54", day2: "47", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "28", changed: true },
        { name: "Retort Solids (%)", day1: "28", day2: "25", changed: true },
        { name: "Lime (ppb)", day1: "2.1", day2: "1.8", changed: true },
        { name: "Chlorides (mg/L)", day1: "31500", day2: "23000", changed: true },
        { name: "Calcium (mg/L)", day1: "22000", day2: "12000", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "215000", day2: "167200", changed: true },
        { name: "Electrical Stability (Volts)", day1: "485", day2: "136", changed: true }
      ],
      answer: {
        contaminant: "salt_water",
        treatment: "dilution_base_fluid",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Water Content Spike: Retort water increases from 18% to 28%, and oil decreases from 54% to 47%. Density drops from 12.0 to 11.6 ppg. This indicates massive water entry.\n2. Viscosity Spike: PV spikes from 32 to 53 cP, and Funnel Vis spikes from 65 to 97s, due to internal phase expansion (emulsion thickening).\n3. Salinity Drops (Moderate): Chlorides drop from 31,500 to 23,000 mg/L, Calcium drops from 22,000 to 12,000 mg/L, and WPS drops from 215,000 to 167,200 ppm. The drop is less severe than Case 4 (fresh water to 101,500 ppm) because the incoming formation water contains dissolved salt.\n4. ES Drops: ES drops severely from 485 to 136 due to emulsion dilution and lowered salinity.\n\nRecommended Treatment:\nDilute with base oil (NAP), add emulsifiers to re-stabilize, and add CaCl2 to restore design WPS."
    },
{
      id: "naf_case1_v1",
      name: "Case 1: Drilled Solids (Variation A)",
      note: "Viscosity and retort solids increase while chemical properties remain stable.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "11.5", day2: "11.6", changed: true },
        { name: "Funnel Vis (sec)", day1: "62", day2: "69", changed: true },
        { name: "PV (cP)", day1: "28", day2: "37", changed: true },
        { name: "YP (lb/100ft²)", day1: "15", day2: "16", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "6/10", day2: "12/23", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "3.8", day2: "5.2", changed: true },
        { name: "Retort Oil (%)", day1: "56", day2: "55", changed: true },
        { name: "Retort Water (%)", day1: "19", day2: "18", changed: true },
        { name: "Retort Solids (%)", day1: "25", day2: "27", changed: true },
        { name: "Lime (ppb)", day1: "2.50", day2: "2.40", changed: true },
        { name: "Chlorides (mg/L)", day1: "28000", day2: "28000", changed: false },
        { name: "Calcium (mg/L)", day1: "18000", day2: "18000", changed: false },
        { name: "Water Phase Salinity (mg/L)", day1: "190000", day2: "190000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "620", day2: "502", changed: true }
      ],
      answer: {
        contaminant: "drilled_solids",
        treatment: "mechanical_separation_dilution",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Solids & Weight: Retort solids increase from 25% to 27%, indicating solids build-up. Density rises from 11.5 to 11.6 ppg.\n2. Rheology: Funnel Viscosity spikes (62 to 69s), PV spikes (28 to 37 cP), and Gels double (6/10 to 12/23) due to the addition of drill solids.\n3. Salinity: Chlorides, Calcium, and WPS remain completely constant, confirming no influx of fresh water or brine, nor solid salt dissolution.\n4. ES Drop: ES drops from 620 to 502 because drill solids absorb emulsifiers from the system.\n\nRecommended Treatment:\nOptimize solid control equipment (mechanical separation) and dilute with fresh base oil (NAP)."
    },
    {
      id: "naf_case1_v2",
      name: "Case 1: Drilled Solids (Variation B)",
      note: "Viscosity and retort solids increase while chemical properties remain stable.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "13.0", day2: "13.1", changed: true },
        { name: "Funnel Vis (sec)", day1: "72", day2: "80", changed: true },
        { name: "PV (cP)", day1: "38", day2: "49", changed: true },
        { name: "YP (lb/100ft²)", day1: "22", day2: "23", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "8/14", day2: "16/32", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "3.5", day2: "4.8", changed: true },
        { name: "Retort Oil (%)", day1: "50", day2: "49", changed: true },
        { name: "Retort Water (%)", day1: "16", day2: "15", changed: true },
        { name: "Retort Solids (%)", day1: "34", day2: "36", changed: true },
        { name: "Lime (ppb)", day1: "1.80", day2: "1.70", changed: true },
        { name: "Chlorides (mg/L)", day1: "35000", day2: "35000", changed: false },
        { name: "Calcium (mg/L)", day1: "25000", day2: "25000", changed: false },
        { name: "Water Phase Salinity (mg/L)", day1: "240000", day2: "240000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "550", day2: "440", changed: true }
      ],
      answer: {
        contaminant: "drilled_solids",
        treatment: "mechanical_separation_dilution",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Solids & Weight: Retort solids increase from 34% to 36%, indicating solids build-up. Density rises from 13.0 to 13.1 ppg.\n2. Rheology: Funnel Viscosity spikes (72 to 80s), PV spikes (38 to 49 cP), and Gels double (8/14 to 16/32) due to the addition of drill solids.\n3. Salinity: Chlorides, Calcium, and WPS remain completely constant, confirming no influx of fresh water or brine, nor solid salt dissolution.\n4. ES Drop: ES drops from 550 to 440 because drill solids absorb emulsifiers from the system.\n\nRecommended Treatment:\nOptimize solid control equipment (mechanical separation) and dilute with fresh base oil (NAP)."
    },
    {
      id: "naf_case2_v1",
      name: "Case 2: Acid Gas (CO2) (Variation A)",
      note: "Weight and electrical stability drop significantly while lime reserve is completely depleted.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "11.8", day2: "11.6", changed: true },
        { name: "Funnel Vis (sec)", day1: "58", day2: "59", changed: true },
        { name: "PV (cP)", day1: "26", day2: "28", changed: true },
        { name: "YP (lb/100ft²)", day1: "14", day2: "15", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "5/9", day2: "5/9", changed: false },
        { name: "HTHP Filtrate (mL)", day1: "3.6", day2: "6.8", changed: true },
        { name: "Retort Oil (%)", day1: "58", day2: "58", changed: false },
        { name: "Retort Water (%)", day1: "17", day2: "17", changed: false },
        { name: "Retort Solids (%)", day1: "25", day2: "25", changed: false },
        { name: "Lime (ppb)", day1: "2.80", day2: "0.00", changed: true },
        { name: "Chlorides (mg/L)", day1: "27000", day2: "27000", changed: false },
        { name: "Calcium (mg/L)", day1: "19000", day2: "18000", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "185000", day2: "185000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "590", day2: "375", changed: true }
      ],
      answer: {
        contaminant: "acid_gas_co2",
        treatment: "lime",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Lime Reserve: Excess Lime drops from 2.80 ppb to 0.00 ppb. This is the primary indicator of CO2 contamination, which consumes lime to form CaCO3.\n2. Emulsion Destabilization: Without excess lime to maintain soap emulsifiers, the emulsion destabilizes, dropping ES from 590 to 375 and spiking HTHP fluid loss from 3.6 to 6.8 mL.\n3. Density: Density drops from 11.8 to 11.6 ppg due to gas entry (gas-cut mud).\n\nRecommended Treatment:\nAdd lime (Ca(OH)2) to neutralize the CO2, re-establish the alkaline buffer, and stabilize the emulsifiers."
    },
    {
      id: "naf_case2_v2",
      name: "Case 2: Acid Gas (CO2) (Variation B)",
      note: "Weight and electrical stability drop significantly while lime reserve is completely depleted.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.5", day2: "12.3", changed: true },
        { name: "Funnel Vis (sec)", day1: "70", day2: "71", changed: true },
        { name: "PV (cP)", day1: "40", day2: "42", changed: true },
        { name: "YP (lb/100ft²)", day1: "24", day2: "25", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "9/15", day2: "9/15", changed: false },
        { name: "HTHP Filtrate (mL)", day1: "4.2", day2: "8.2", changed: true },
        { name: "Retort Oil (%)", day1: "48", day2: "48", changed: false },
        { name: "Retort Water (%)", day1: "18", day2: "18", changed: false },
        { name: "Retort Solids (%)", day1: "34", day2: "34", changed: false },
        { name: "Lime (ppb)", day1: "3.50", day2: "0.00", changed: true },
        { name: "Chlorides (mg/L)", day1: "33000", day2: "33000", changed: false },
        { name: "Calcium (mg/L)", day1: "24000", day2: "22500", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "225000", day2: "225000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "520", day2: "328", changed: true }
      ],
      answer: {
        contaminant: "acid_gas_co2",
        treatment: "lime",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Lime Reserve: Excess Lime drops from 3.50 ppb to 0.00 ppb. This is the primary indicator of CO2 contamination, which consumes lime to form CaCO3.\n2. Emulsion Destabilization: Without excess lime to maintain soap emulsifiers, the emulsion destabilizes, dropping ES from 520 to 328 and spiking HTHP fluid loss from 4.2 to 8.2 mL.\n3. Density: Density drops from 12.5 to 12.3 ppg due to gas entry (gas-cut mud).\n\nRecommended Treatment:\nAdd lime (Ca(OH)2) to neutralize the CO2, re-establish the alkaline buffer, and stabilize the emulsifiers."
    },
    {
      id: "naf_case3_v1",
      name: "Case 3: Hydrocarbons (Variation A)",
      note: "Density and viscosities decrease while retort oil percentage increases.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "11.8", day2: "11.7", changed: true },
        { name: "Funnel Vis (sec)", day1: "60", day2: "57", changed: true },
        { name: "PV (cP)", day1: "28", day2: "26", changed: true },
        { name: "YP (lb/100ft²)", day1: "14", day2: "13", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "6/9", day2: "5/8", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "3.8", day2: "6.0", changed: true },
        { name: "Retort Oil (%)", day1: "58", day2: "60", changed: true },
        { name: "Retort Water (%)", day1: "16", day2: "15", changed: true },
        { name: "Retort Solids (%)", day1: "26", day2: "25", changed: true },
        { name: "Lime (ppb)", day1: "2.00", day2: "4.20", changed: true },
        { name: "Chlorides (mg/L)", day1: "28000", day2: "28000", changed: false },
        { name: "Calcium (mg/L)", day1: "20000", day2: "20000", changed: false },
        { name: "Water Phase Salinity (mg/L)", day1: "195000", day2: "195000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "520", day2: "540", changed: true }
      ],
      answer: {
        contaminant: "hydrocarbons",
        treatment: "dilution_brine",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Oil Phase Build-up: Retort oil percentage rises from 58% to 60%, while water and solids decrease. This indicates hydrocarbon influx.\n2. Viscosity Drop: PV, YP, Funnel Vis, and Gels all decrease because incoming crude oil/hydrocarbons dilute the mud and act as a thinner.\n3. Density Drop: Density drops from 11.8 to 11.7 ppg (crude is lighter than the mud).\n4. ES & HTHP: ES remains stable or increases (520 to 540) since the oil is oil-miscible, but HTHP increases (3.8 to 6.0 mL) due to the changing chemistry of the oil phase.\n\nRecommended Treatment:\nDilute with brine to restore the original oil-water ratio (OWR) and adjust viscosity using viscosifiers/emulsifiers if necessary."
    },
    {
      id: "naf_case3_v2",
      name: "Case 3: Hydrocarbons (Variation B)",
      note: "Density and viscosities decrease while retort oil percentage increases.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "13.2", day2: "13.1", changed: true },
        { name: "Funnel Vis (sec)", day1: "75", day2: "72", changed: true },
        { name: "PV (cP)", day1: "42", day2: "40", changed: true },
        { name: "YP (lb/100ft²)", day1: "25", day2: "24", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "8/14", day2: "7/13", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "3.5", day2: "5.8", changed: true },
        { name: "Retort Oil (%)", day1: "46", day2: "48", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "17", changed: true },
        { name: "Retort Solids (%)", day1: "36", day2: "35", changed: true },
        { name: "Lime (ppb)", day1: "2.20", day2: "4.90", changed: true },
        { name: "Chlorides (mg/L)", day1: "34000", day2: "34000", changed: false },
        { name: "Calcium (mg/L)", day1: "26000", day2: "26000", changed: false },
        { name: "Water Phase Salinity (mg/L)", day1: "235000", day2: "235000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "460", day2: "475", changed: true }
      ],
      answer: {
        contaminant: "hydrocarbons",
        treatment: "dilution_brine",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Oil Phase Build-up: Retort oil percentage rises from 46% to 48%, while water and solids decrease. This indicates hydrocarbon influx.\n2. Viscosity Drop: PV, YP, Funnel Vis, and Gels all decrease because incoming crude oil/hydrocarbons dilute the mud and act as a thinner.\n3. Density Drop: Density drops from 13.2 to 13.1 ppg (crude is lighter than the mud).\n4. ES & HTHP: ES remains stable or increases (460 to 475) since the oil is oil-miscible, but HTHP increases (3.5 to 5.8 mL) due to the changing chemistry of the oil phase.\n\nRecommended Treatment:\nDilute with brine to restore the original oil-water ratio (OWR) and adjust viscosity using viscosifiers/emulsifiers if necessary."
    },
    {
      id: "naf_case4_v1",
      name: "Case 4: Fresh Water (Variation A)",
      note: "Retort water percentage and viscosities spike while salinity and electrical stability collapse.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "11.6", day2: "11.2", changed: true },
        { name: "Funnel Vis (sec)", day1: "60", day2: "88", changed: true },
        { name: "PV (cP)", day1: "28", day2: "46", changed: true },
        { name: "YP (lb/100ft²)", day1: "16", day2: "26", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "6/10", day2: "8/17", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "3.8", day2: "6.2", changed: true },
        { name: "Retort Oil (%)", day1: "58", day2: "51", changed: true },
        { name: "Retort Water (%)", day1: "16", day2: "26", changed: true },
        { name: "Retort Solids (%)", day1: "26", day2: "23", changed: true },
        { name: "Lime (ppb)", day1: "2.30", day2: "1.90", changed: true },
        { name: "Chlorides (mg/L)", day1: "28000", day2: "11500", changed: true },
        { name: "Calcium (mg/L)", day1: "19000", day2: "8000", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "195000", day2: "92000", changed: true },
        { name: "Electrical Stability (Volts)", day1: "510", day2: "142", changed: true }
      ],
      answer: {
        contaminant: "fresh_water",
        treatment: "dilution_base_fluid",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Water Content Spike: Retort water increases from 16% to 26%, and oil decreases from 58% to 51%. Density drops from 11.6 to 11.2 ppg.\n2. Viscosity Spike: PV spikes from 28 to 46 cP, and Funnel Vis spikes from 60 to 88s. The fresh water entry increases the internal phase volume, creating a highly packed, high-friction emulsion (emulsion thickening).\n3. Salinity Drops: Chlorides drop from 28,000 to 11,500 mg/L, Calcium drops from 19,000 to 8,000 mg/L, and WPS drops from 195,000 to 92,000 ppm due to massive fresh water dilution.\n4. ES Drops: ES drops severely from 510 to 142 due to emulsion dilution and drop in salinity.\n\nRecommended Treatment:\nDilute with base oil (NAP), add emulsifiers/wetting agents to stabilize the additional water, and add CaCl2 to restore design WPS."
    },
    {
      id: "naf_case4_v2",
      name: "Case 4: Fresh Water (Variation B)",
      note: "Retort water percentage and viscosities spike while salinity and electrical stability collapse.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.5", day2: "12.1", changed: true },
        { name: "Funnel Vis (sec)", day1: "70", day2: "105", changed: true },
        { name: "PV (cP)", day1: "38", day2: "60", changed: true },
        { name: "YP (lb/100ft²)", day1: "22", day2: "35", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "8/13", day2: "11/24", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "3.5", day2: "6.0", changed: true },
        { name: "Retort Oil (%)", day1: "48", day2: "41", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "28", changed: true },
        { name: "Retort Solids (%)", day1: "34", day2: "31", changed: true },
        { name: "Lime (ppb)", day1: "1.90", day2: "1.60", changed: true },
        { name: "Chlorides (mg/L)", day1: "36000", day2: "15000", changed: true },
        { name: "Calcium (mg/L)", day1: "24000", day2: "10000", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "240000", day2: "115000", changed: true },
        { name: "Electrical Stability (Volts)", day1: "460", day2: "128", changed: true }
      ],
      answer: {
        contaminant: "fresh_water",
        treatment: "dilution_base_fluid",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Water Content Spike: Retort water increases from 18% to 28%, and oil decreases from 48% to 41%. Density drops from 12.5 to 12.1 ppg.\n2. Viscosity Spike: PV spikes from 38 to 60 cP, and Funnel Vis spikes from 70 to 105s. The fresh water entry increases the internal phase volume, creating a highly packed, high-friction emulsion (emulsion thickening).\n3. Salinity Drops: Chlorides drop from 36,000 to 15,000 mg/L, Calcium drops from 24,000 to 10,000 mg/L, and WPS drops from 240,000 to 115,000 ppm due to massive fresh water dilution.\n4. ES Drops: ES drops severely from 460 to 128 due to emulsion dilution and drop in salinity.\n\nRecommended Treatment:\nDilute with base oil (NAP), add emulsifiers/wetting agents to stabilize the additional water, and add CaCl2 to restore design WPS."
    },
    {
      id: "naf_case5_v1",
      name: "Case 5: Salt (Formation) (Variation A)",
      note: "Water phase salinity and chlorides spike while calcium remains stable.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "11.5", day2: "11.6", changed: true },
        { name: "Funnel Vis (sec)", day1: "58", day2: "59", changed: true },
        { name: "PV (cP)", day1: "26", day2: "28", changed: true },
        { name: "YP (lb/100ft²)", day1: "14", day2: "15", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "6/9", day2: "6/9", changed: false },
        { name: "HTHP Filtrate (mL)", day1: "3.6", day2: "6.0", changed: true },
        { name: "Retort Oil (%)", day1: "58", day2: "57.5", changed: true },
        { name: "Retort Water (%)", day1: "17", day2: "16.5", changed: true },
        { name: "Retort Solids (%)", day1: "25", day2: "26", changed: true },
        { name: "Lime (ppb)", day1: "2.30", day2: "2.3", changed: false },
        { name: "Chlorides (mg/L)", day1: "28000", day2: "37500", changed: true },
        { name: "Calcium (mg/L)", day1: "18000", day2: "18000", changed: false },
        { name: "Water Phase Salinity (mg/L)", day1: "190000", day2: "228000", changed: true },
        { name: "Electrical Stability (Volts)", day1: "610", day2: "440", changed: true }
      ],
      answer: {
        contaminant: "salt_formation",
        treatment: "dilution_fresh_water",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Chlorides & WPS Spike: Chlorides increase from 28,000 to 37,500 mg/L, and WPS spikes from 190,000 to 228,000 ppm. Calcium remains completely stable at 18,000 mg/L. This confirms NaCl (solid salt formation) is dissolving into the brine phase.\n2. ES & HTHP: ES drops from 610 to 440, and HTHP increases from 3.6 to 6.0 mL, as high concentrations of monovalent sodium ions compete with divalent calcium emulsifiers, destabilizing the emulsion.\n\nRecommended Treatment:\nDilute the water phase with fresh water (or a lower salinity brine) to lower the salt concentration and prevent salt crystals from wetting solids. Add emulsifiers to restore ES."
    },
    {
      id: "naf_case5_v2",
      name: "Case 5: Salt (Formation) (Variation B)",
      note: "Water phase salinity and chlorides spike while calcium remains stable.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.8", day2: "12.9", changed: true },
        { name: "Funnel Vis (sec)", day1: "72", day2: "73", changed: true },
        { name: "PV (cP)", day1: "40", day2: "42", changed: true },
        { name: "YP (lb/100ft²)", day1: "24", day2: "25", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "9/14", day2: "9/14", changed: false },
        { name: "HTHP Filtrate (mL)", day1: "3.8", day2: "6.2", changed: true },
        { name: "Retort Oil (%)", day1: "48", day2: "47.5", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "17.5", changed: true },
        { name: "Retort Solids (%)", day1: "34", day2: "35", changed: true },
        { name: "Lime (ppb)", day1: "1.80", day2: "1.8", changed: false },
        { name: "Chlorides (mg/L)", day1: "35000", day2: "46000", changed: true },
        { name: "Calcium (mg/L)", day1: "26000", day2: "26000", changed: false },
        { name: "Water Phase Salinity (mg/L)", day1: "245000", day2: "285000", changed: true },
        { name: "Electrical Stability (Volts)", day1: "540", day2: "385", changed: true }
      ],
      answer: {
        contaminant: "salt_formation",
        treatment: "dilution_fresh_water",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Chlorides & WPS Spike: Chlorides increase from 35,000 to 46,000 mg/L, and WPS spikes from 245,000 to 285,000 ppm. Calcium remains completely stable at 26,000 mg/L. This confirms NaCl (solid salt formation) is dissolving into the brine phase.\n2. ES & HTHP: ES drops from 540 to 385, and HTHP increases from 3.8 to 6.2 mL, as high concentrations of monovalent sodium ions compete with divalent calcium emulsifiers, destabilizing the emulsion.\n\nRecommended Treatment:\nDilute the water phase with fresh water (or a lower salinity brine) to lower the salt concentration and prevent salt crystals from wetting solids. Add emulsifiers to restore ES."
    },
    {
      id: "naf_case6_v1",
      name: "Case 6: Cement (Variation A)",
      note: "Lime content and calcium spike while water phase salinity remains stable.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "11.5", day2: "11.6", changed: true },
        { name: "Funnel Vis (sec)", day1: "58", day2: "59", changed: true },
        { name: "PV (cP)", day1: "26", day2: "28", changed: true },
        { name: "YP (lb/100ft²)", day1: "14", day2: "15", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "6/9", day2: "6/9", changed: false },
        { name: "HTHP Filtrate (mL)", day1: "3.6", day2: "5.8", changed: true },
        { name: "Retort Oil (%)", day1: "58", day2: "57.5", changed: true },
        { name: "Retort Water (%)", day1: "17", day2: "16.5", changed: true },
        { name: "Retort Solids (%)", day1: "25", day2: "26", changed: true },
        { name: "Lime (ppb)", day1: "2.30", day2: "5.2", changed: true },
        { name: "Chlorides (mg/L)", day1: "28000", day2: "28000", changed: false },
        { name: "Calcium (mg/L)", day1: "18000", day2: "20500", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "190000", day2: "190000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "520", day2: "545", changed: true }
      ],
      answer: {
        contaminant: "cement",
        treatment: "mechanical_separation_dilution",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Lime & Calcium Increase: Measured Excess Lime spikes from 2.30 to 5.2 ppb, and Calcium increases from 18,000 to 20,500 mg/L. Active cement releases calcium hydroxide, which registers as alkalinity (lime) and calcium in our titrations.\n2. Solids and Rheology: Solids increase slightly (25% to 26%), and HTHP increases from 3.6 to 5.8 mL due to fine cement solids.\n3. Salinity: WPS and Chlorides remain stable (190,000 ppm and 28,000 mg/L), ruling out brine/salt water entry.\n\nRecommended Treatment:\nOptimize solid control equipment (mechanical separation) to remove cement solids and dilute the system to reduce alkalinity."
    },
    {
      id: "naf_case6_v2",
      name: "Case 6: Cement (Variation B)",
      note: "Lime content and calcium spike while water phase salinity remains stable.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.8", day2: "12.9", changed: true },
        { name: "Funnel Vis (sec)", day1: "72", day2: "73", changed: true },
        { name: "PV (cP)", day1: "40", day2: "42", changed: true },
        { name: "YP (lb/100ft²)", day1: "24", day2: "25", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "9/14", day2: "9/14", changed: false },
        { name: "HTHP Filtrate (mL)", day1: "3.8", day2: "6.0", changed: true },
        { name: "Retort Oil (%)", day1: "48", day2: "47.5", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "17.5", changed: true },
        { name: "Retort Solids (%)", day1: "34", day2: "35", changed: true },
        { name: "Lime (ppb)", day1: "1.80", day2: "4.5", changed: true },
        { name: "Chlorides (mg/L)", day1: "35000", day2: "35000", changed: false },
        { name: "Calcium (mg/L)", day1: "26000", day2: "28500", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "245000", day2: "245000", changed: false },
        { name: "Electrical Stability (Volts)", day1: "460", day2: "480", changed: true }
      ],
      answer: {
        contaminant: "cement",
        treatment: "mechanical_separation_dilution",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Lime & Calcium Increase: Measured Excess Lime spikes from 1.80 to 4.5 ppb, and Calcium increases from 26,000 to 28,500 mg/L. Active cement releases calcium hydroxide, which registers as alkalinity (lime) and calcium in our titrations.\n2. Solids and Rheology: Solids increase slightly (34% to 35%), and HTHP increases from 3.8 to 6.0 mL due to fine cement solids.\n3. Salinity: WPS and Chlorides remain stable (245,000 ppm and 35,000 mg/L), ruling out brine/salt water entry.\n\nRecommended Treatment:\nOptimize solid control equipment (mechanical separation) to remove cement solids and dilute the system to reduce alkalinity."
    },
    {
      id: "naf_case7_v1",
      name: "Case 7: Salt Water (Variation A)",
      note: "Water percentage spikes while salinity and electrical stability drop (less severe salinity drop than fresh water).",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "11.6", day2: "11.2", changed: true },
        { name: "Funnel Vis (sec)", day1: "60", day2: "88", changed: true },
        { name: "PV (cP)", day1: "28", day2: "46", changed: true },
        { name: "YP (lb/100ft²)", day1: "16", day2: "26", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "6/10", day2: "8/17", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "3.8", day2: "6.2", changed: true },
        { name: "Retort Oil (%)", day1: "58", day2: "51", changed: true },
        { name: "Retort Water (%)", day1: "16", day2: "26", changed: true },
        { name: "Retort Solids (%)", day1: "26", day2: "23", changed: true },
        { name: "Lime (ppb)", day1: "2.3", day2: "1.9", changed: true },
        { name: "Chlorides (mg/L)", day1: "28000", day2: "20500", changed: true },
        { name: "Calcium (mg/L)", day1: "19000", day2: "10500", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "195000", day2: "153000", changed: true },
        { name: "Electrical Stability (Volts)", day1: "510", day2: "142", changed: true }
      ],
      answer: {
        contaminant: "salt_water",
        treatment: "dilution_base_fluid",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Water Content Spike: Retort water increases from 16% to 26%, and oil decreases from 58% to 51%. Density drops from 11.6 to 11.2 ppg. This indicates massive water entry.\n2. Viscosity Spike: PV spikes from 28 to 46 cP, and Funnel Vis spikes from 60 to 88s, due to internal phase expansion (emulsion thickening).\n3. Salinity Drops (Moderate): Chlorides drop from 28,000 to 20,500 mg/L, Calcium drops from 19,000 to 10,500 mg/L, and WPS drops from 195,000 to 153,000 ppm. The drop is less severe than Fresh Water (to 92,000 ppm) because the incoming formation water contains dissolved salt.\n4. ES Drops: ES drops severely from 510 to 142 due to emulsion dilution and lowered salinity.\n\nRecommended Treatment:\nDilute with base oil (NAP), add emulsifiers to re-stabilize, and add CaCl2 to restore design WPS."
    },
    {
      id: "naf_case7_v2",
      name: "Case 7: Salt Water (Variation B)",
      note: "Water percentage spikes while salinity and electrical stability drop (less severe salinity drop than fresh water).",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "128", changed: true },
        { name: "Density (ppg)", day1: "12.5", day2: "12.1", changed: true },
        { name: "Funnel Vis (sec)", day1: "70", day2: "105", changed: true },
        { name: "PV (cP)", day1: "38", day2: "60", changed: true },
        { name: "YP (lb/100ft²)", day1: "22", day2: "35", changed: true },
        { name: "Gels 10s/10m (lb/100ft²)", day1: "8/13", day2: "11/24", changed: true },
        { name: "HTHP Filtrate (mL)", day1: "3.5", day2: "6.0", changed: true },
        { name: "Retort Oil (%)", day1: "48", day2: "41", changed: true },
        { name: "Retort Water (%)", day1: "18", day2: "28", changed: true },
        { name: "Retort Solids (%)", day1: "34", day2: "31", changed: true },
        { name: "Lime (ppb)", day1: "1.9", day2: "1.6", changed: true },
        { name: "Chlorides (mg/L)", day1: "36000", day2: "26000", changed: true },
        { name: "Calcium (mg/L)", day1: "24000", day2: "13200", changed: true },
        { name: "Water Phase Salinity (mg/L)", day1: "240000", day2: "184500", changed: true },
        { name: "Electrical Stability (Volts)", day1: "460", day2: "128", changed: true }
      ],
      answer: {
        contaminant: "salt_water",
        treatment: "dilution_base_fluid",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Water Content Spike: Retort water increases from 18% to 28%, and oil decreases from 48% to 41%. Density drops from 12.5 to 12.1 ppg. This indicates massive water entry.\n2. Viscosity Spike: PV spikes from 38 to 60 cP, and Funnel Vis spikes from 70 to 105s, due to internal phase expansion (emulsion thickening).\n3. Salinity Drops (Moderate): Chlorides drop from 36,000 to 26,000 mg/L, Calcium drops from 24,000 to 13,200 mg/L, and WPS drops from 240,000 to 184,500 ppm. The drop is less severe than Fresh Water (to 115,000 ppm) because the incoming formation water contains dissolved salt.\n4. ES Drops: ES drops severely from 460 to 128 due to emulsion dilution and lowered salinity.\n\nRecommended Treatment:\nDilute with base oil (NAP), add emulsifiers to re-stabilize, and add CaCl2 to restore design WPS."
    }
  ]
};

// ============================================================
// HOMEWORK 18 – Formation Damage & Reservoir Fluids
// ============================================================);
