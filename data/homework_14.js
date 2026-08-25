QUIZ_DATA.homework_14 = {
    title: "Homework 14: Water Phase Salinity & Solids (Theory)",
    description: "Practice questions about Water Phase Salinity (WPS) salts, excess lime reserve, retort solids definitions, and calcium sources based on the Baroid Core guide.",
    questions: [
      {
        id: "hw14_q1",
        number: "1 of 6",
        type: "multiple",
        question: "What are the types of salts that can be found in the water phase salinity of the fluid?",
        options: [
          { value: "cacl2", label: "CaCl2" },
          { value: "naoh", label: "NaOH" },
          { value: "nacl", label: "NaCl" },
          { value: "caco3", label: "CaCO3" },
          { value: "pbcl2", label: "PbCl2" },
          { value: "agcl", label: "AgCl" }
        ],
        answer: ["cacl2", "nacl"],
        explanation: "The water phase salinity of non-aqueous fluids is typically formulated with Calcium Chloride (CaCl2) or Sodium Chloride (NaCl) to adjust the water phase activity and prevent shale hydration."
      },
      {
        id: "hw14_q2",
        number: "2 of 6",
        type: "single",
        question: "What is Excess Lime?",
        options: [
          { value: "water_hydrate", label: "Slight excess of water added to hydrate quicklime" },
          { value: "total_alkalinity", label: "Total alkalinity of the whole drilling fluids" },
          { value: "bicarbonate_convert", label: "Extra lime added into drilling fluid to convert bicarbonates to carbonates" },
          { value: "exceed_formulation", label: "Lime concentration in whole drilling fluids exceeding formulation concentration" }
        ],
        answer: "total_alkalinity",
        explanation: "Excess lime represents the active concentration of Calcium Hydroxide suspended in the continuous phase of the fluid. It is determined from the alkalinity of the whole drilling fluid (titrated using standard acid and phenolphthalein indicator)."
      },
      {
        id: "hw14_q3",
        number: "3 of 6",
        type: "multiple",
        question: "Select all the importance of Water Phase Salinity (WPS):",
        options: [
          { value: "water_exchange", label: "Balance the exchange of water to/from the formation" },
          { value: "formation_instability", label: "Avoid formation instability" },
          { value: "identify_contaminants", label: "Identify contaminants" },
          { value: "hydrostatic_pressure", label: "To provide hydrostatic pressure for wellbore control" },
          { value: "salt_exchange", label: "Balance the exchange of salt to/from the formation" },
          { value: "active_solids", label: "To help determine the amount of active solids in drilling fluid" },
          { value: "undissolved_salts", label: "Identify the presence of undissolved salts" }
        ],
        answer: ["water_exchange", "formation_instability", "identify_contaminants", "undissolved_salts"],
        explanation: "Water Phase Salinity (WPS) is critical to: (1) prevent water transfer to or from shale (preventing swelling/collapse), (2) detect freshwater or saltwater influx contaminants, and (3) verify if undissolved salts are precipitating in the mud."
      },
      {
        id: "hw14_q4",
        number: "4 of 6",
        type: "matching",
        question: "Select the correct definition for the terms below:",
        pairs: {
          "Corrected solids": "Solids without the dissolved solids",
          "Retort solids": "All solids (including the dissolved solids left behind after heating)"
        },
        options: [
          "Solids without the dissolved solids",
          "All solids (including the dissolved solids left behind after heating)",
          "Dissolved salts only",
          "Low gravity suspended solids only"
        ],
        keepKeysOrder: true,
        explanation: "Retort solids include all solid particles left behind after heating the sample (suspended insoluble solids + dissolved salts from the brine phase). Corrected solids represent the insoluble solids volume only, calculated by subtracting the dissolved salt volume from the retort solids."
      },
      {
        id: "hw14_q5",
        number: "5 of 6",
        type: "multiple",
        question: "The calcium content of drilling fluid can come from:",
        options: [
          { value: "nacl", label: "NaCl" },
          { value: "gypsum", label: "Drilled up Gypsum or anhydrite" },
          { value: "lime", label: "Lime" },
          { value: "cacl2", label: "CaCl2" },
          { value: "water", label: "Water" }
        ],
        answer: ["gypsum", "lime", "cacl2"],
        explanation: "Calcium ions in non-aqueous fluids are introduced deliberately via CaCl2 (salinity control) and lime (alkalinity). They can also enter as contaminants from drilling calcium-rich formations like Gypsum or Anhydrite."
      },
      {
        id: "hw14_q6",
        number: "6 of 6",
        type: "single",
        question: "Select the correct definition of Water Phase Salinity (WPS):",
        options: [
          { value: "correct_def", label: "It is a measure of the osmotic dehydration/hydration potential of water in a mud or shale." },
          { value: "solids_def", label: "It is the ratio of low gravity solids to high gravity solids suspended in the continuous non-aqueous phase." },
          { value: "clay_def", label: "It is the concentration of active organophilic clay required to maintain water-in-oil emulsion stability." }
        ],
        answer: "correct_def",
        explanation: "Water Phase Salinity (WPS) measures the salinity of the emulsified water droplets in an invert emulsion fluid. It determines the water activity of the fluid, acting as a control for the osmotic hydration or dehydration of formation shales."
      }
    ]
  };
