QUIZ_DATA.homework_8 = {
    title: "Homework 8: Alkalinity, pH & Hardness (Theory)",
    description: "Review pH concepts, filtrate alkalinity, cation/anion charges, and water testing reagents based on Baroid Core Participant Guide.",
    questions: [
      {
        id: "hw8_q1",
        number: "1 of 31",
        type: "single",
        question: "The measurement of the relative acidity or alkalinity of a substance is?",
        options: [
          { value: "pH", label: "pH" },
          { value: "Alkalinity", label: "Alkalinity" },
          { value: "Pm", label: "Pm" },
          { value: "Pf", label: "Pf" }
        ],
        answer: "pH",
        explanation: "pH measures the hydrogen ion concentration, indicating the relative acidity or alkalinity of a substance."
      },
      {
        id: "hw8_q2",
        number: "2 of 31",
        type: "single",
        question: "The measure of the concentration of water soluble ions that neutralize acid is?",
        options: [
          { value: "Alkalinity", label: "Alkalinity" },
          { value: "pH", label: "pH" },
          { value: "Pm", label: "Pm" },
          { value: "Pf", label: "Pf" }
        ],
        answer: "Alkalinity",
        explanation: "Alkalinity is the capacity of water to neutralize acids, contributed by hydroxide (OH-), carbonate (CO32-), and bicarbonate (HCO3-) ions."
      },
      {
        id: "hw8_q3",
        number: "3 of 31",
        type: "single",
        question: "The alkalinity of a drilling fluid measured to a pH of 8.3 is?",
        options: [
          { value: "Pm", label: "Pm" },
          { value: "Pf", label: "Pf" },
          { value: "Mf", label: "Mf" },
          { value: "pH", label: "pH" }
        ],
        answer: "Pm",
        explanation: "Pm is the alkalinity of the whole mud (drilling fluid) titrated with standard acid to the phenolphthalein endpoint (pH 8.3)."
      },
      {
        id: "hw8_q4",
        number: "4 of 31",
        type: "single",
        question: "The alkalinity of a drilling fluid filtrate measured down to a pH of 8.3 is?",
        options: [
          { value: "Pm", label: "Pm" },
          { value: "Alkalinity", label: "Alkalinity" },
          { value: "Pf", label: "Pf" },
          { value: "pH", label: "pH" },
          { value: "Mf", label: "Mf" }
        ],
        answer: "Pf",
        explanation: "Pf is the alkalinity of the filtrate titrated with standard acid to the phenolphthalein endpoint (pH 8.3)."
      },
      {
        id: "hw8_q5",
        number: "5 of 31",
        type: "multiple",
        question: "Which of the following reagents would you use to determine the alkalinity of a water based fluid (Pm)? (select all applicable answers)",
        options: [
          { value: "sulfuric_acid", label: "N/50 Sulfuric Acid" },
          { value: "phenolphthalein", label: "Phenolphthalein indicator" },
          { value: "methyl_orange", label: "Methyl orange indicator" },
          { value: "silver_nitrate", label: "Silver nitrate" }
        ],
        answer: ["sulfuric_acid", "phenolphthalein"],
        explanation: "Testing Pm (whole mud alkalinity) uses Phenolphthalein as the indicator to observe the pH 8.3 color change, titrated with N/50 (0.02N) Sulfuric Acid."
      },
      {
        id: "hw8_q6",
        number: "6 of 31",
        type: "single",
        question: "The concentration of salt in the water phase; it is normally reported as mg/l chloride is?",
        options: [
          { value: "Salinity", label: "Salinity" },
          { value: "Alkalinity", label: "Alkalinity" },
          { value: "Total hardness", label: "Total hardness" },
          { value: "pH", label: "pH" }
        ],
        answer: "Salinity",
        explanation: "Salinity determines the concentration of salt in the continuous water phase, typically expressed as mg/L of chloride ions."
      },
      {
        id: "hw8_q7",
        number: "7 of 31",
        type: "multiple",
        question: "Which of the following variables can lower the pH of a drilling fluid? (select all applicable answers)",
        options: [
          { value: "water", label: "Water" },
          { value: "acid_gas", label: "Acid gas" },
          { value: "pressure", label: "Formation pressure" },
          { value: "temperature", label: "High temperature" }
        ],
        answer: ["water", "acid_gas", "temperature"],
        explanation: "As per the homework guide, adding water (neutral pH) to high pH mud dilutes the base, influxes of acid gases react with hydroxyl ions to lower pH, and high temperature also increases water dissociation, which lowers pH."
      },
      {
        id: "hw8_q8",
        number: "8 of 31",
        type: "single",
        question: "Which of the following reagents would you use to determine the alkalinity of the drilling fluid filtrate Pf/Mf?",
        options: [
          { value: "alk_reagents", label: "Phenolphthalein, methyl orange/methyl purple and N/50 sulfuric acid" },
          { value: "cl_reagents", label: "Potassium chromate and silver nitrate" },
          { value: "ca_reagents", label: "Total hardness titrating solution (EDTA) and Calver II powder" }
        ],
        answer: "alk_reagents",
        explanation: "Pf/Mf filtrate alkalinity tests require Phenolphthalein (for Pf, pH 8.3) and Methyl Orange or Methyl Purple (for Mf, pH 4.3) titrated using standard N/50 sulfuric acid."
      },
      {
        id: "hw8_q9",
        number: "9 of 31",
        type: "matching",
        question: "Match the chemicals for each of the following chemical formulas:",
        pairs: {
          "H2SO4": "Sulfuric acid",
          "BaSO4": "Barite (Barium Sulfate)",
          "CaSO4.2H2O": "Gypsum",
          "CO2": "Carbon dioxide",
          "Na2CO3": "Soda ash (Sodium carbonate)",
          "NaCl": "Sodium chloride",
          "H2S": "Hydrogen sulfide",
          "NaHCO3": "Bicarbonate of soda (Sodium bicarbonate)",
          "NaOH": "Caustic soda (Sodium hydroxide)",
          "Ca(OH)2": "Lime (Calcium hydroxide)",
          "CaSO4": "Anhydrite (Calcium Sulfate)"
        },
        explanation: "Chemical names and common drilling names mapped correctly to their chemical formula symbols."
      },
      {
        id: "hw8_q10",
        number: "10 of 31",
        type: "single",
        question: "The symbol and charge for Calcium cation are:",
        options: [
          { value: "correct", label: "Ca and +2" },
          { value: "incorrect1", label: "Ca and +1" },
          { value: "incorrect2", label: "Ca and -2" },
          { value: "incorrect3", label: "Mg and +2" }
        ],
        answer: "correct",
        explanation: "Calcium is represented by the symbol Ca and carries a positive charge of +2 (divalent cation)."
      },
      {
        id: "hw8_q11",
        number: "11 of 31",
        type: "single",
        question: "The symbol and charge for Magnesium cation are:",
        options: [
          { value: "correct", label: "Mg and +2" },
          { value: "incorrect1", label: "Mg and +1" },
          { value: "incorrect2", label: "Ca and +2" },
          { value: "incorrect3", label: "Mg and -2" }
        ],
        answer: "correct",
        explanation: "Magnesium is represented by the symbol Mg and carries a positive charge of +2 (divalent cation)."
      },
      {
        id: "hw8_q12",
        number: "12 of 31",
        type: "single",
        question: "The symbol and charge for Potassium cation are:",
        options: [
          { value: "correct", label: "K and +1" },
          { value: "incorrect1", label: "K and +2" },
          { value: "incorrect2", label: "P and +1" },
          { value: "incorrect3", label: "Na and +1" }
        ],
        answer: "correct",
        explanation: "Potassium is represented by the symbol K and carries a positive charge of +1 (monovalent cation)."
      },
      {
        id: "hw8_q13",
        number: "13 of 31",
        type: "single",
        question: "The symbol and charge for Sodium cation are:",
        options: [
          { value: "correct", label: "Na and +1" },
          { value: "incorrect1", label: "Na and +2" },
          { value: "incorrect2", label: "S and +1" },
          { value: "incorrect3", label: "K and +1" }
        ],
        answer: "correct",
        explanation: "Sodium is represented by the symbol Na and carries a positive charge of +1 (monovalent cation)."
      },
      {
        id: "hw8_q14",
        number: "14 of 31",
        type: "matching",
        question: "Match the symbols with their anions:",
        pairs: {
          "O": "Oxygen (or Oxide)",
          "SO4": "Sulfate",
          "CO3": "Carbonate",
          "Cl": "Chloride",
          "Br": "Bromide",
          "OH": "Hydroxide",
          "HCO3": "Bicarbonate"
        },
        explanation: "Common drilling fluid anions matched to their chemical symbols."
      },
      {
        id: "hw8_q15",
        number: "15 of 31",
        type: "multiple",
        question: "Which of the following reagents would you use to determine the chlorides content of water based fluid (Cl)? (select all applicable answers)",
        options: [
          { value: "potassium_chromate", label: "Potassium chromate" },
          { value: "silver_nitrate", label: "Silver nitrate" },
          { value: "phenolphthalein", label: "Phenolphthalein" },
          { value: "sulfuric_acid", label: "N/50 Sulfuric Acid" }
        ],
        answer: ["potassium_chromate", "silver_nitrate"],
        explanation: "Chloride test involves titrating the sample with standard silver nitrate solution, using potassium chromate as the endpoint indicator."
      },
      {
        id: "hw8_q16",
        number: "16 of 31",
        type: "multiple",
        question: "Which of the following reagents would you use to determine the calcium hardness content of water based fluid (Ca+2)? (select all applicable answers)",
        options: [
          { value: "edta", label: "Total hardness titrating solution (EDTA)" },
          { value: "calver", label: "Calver II powder" },
          { value: "buffer", label: "Calcium buffer solution" },
          { value: "chromate", label: "Potassium chromate" }
        ],
        answer: ["edta", "calver", "buffer"],
        explanation: "Calcium hardness titration uses standard EDTA solution as the chelating agent, Calver II powder as the calcium indicator, and a calcium buffer solution to adjust the pH."
      },
      {
        id: "hw8_q17",
        number: "17 of 31",
        type: "single",
        question: "Mf shows the concentration of which alkalinity contributing ions?",
        options: [
          { value: "bicarbonate", label: "Bicarbonate only" },
          { value: "carbonate", label: "Carbonate only" },
          { value: "carbonate_bicarbonate", label: "Carbonate and bicarbonate" },
          { value: "hydroxide_bicarbonate", label: "Hydroxide and bicarbonate" }
        ],
        answer: "bicarbonate",
        explanation: "According to the Baroid Core Participant Guide, while Pf measures the concentration of OH and CO3, Mf measures concentration of HCO3 (Bicarbonate)."
      }
    ]
  };
