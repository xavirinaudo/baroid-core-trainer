QUIZ_DATA.homework_11 = {
    title: "Homework 11: Fluid Contaminants (Theory)",
    description: "Identify WBF contaminants, classify solids, and calculate treatment chemical dosages based on mud checks.",
    questions: [
      {
        id: "hw11_q1",
        number: "1 of 17",
        type: "single",
        question: "A contaminant is defined as:",
        options: [
          { value: "additives", label: "Any fluid additives that alters the physical and chemical properties of a drilling fluid" },
          { value: "influx", label: "Any influx of different materials that changes the formulation of a drilling fluid" },
          { value: "undesirable", label: "Any undesirable component that causes a detrimental effect when incorporated in a drilling fluid" },
          { value: "desirable", label: "Any desirable component that causes a beneficial effect when incorporated in a drilling fluid" }
        ],
        answer: "undesirable",
        explanation: "A contaminant is defined as any undesirable component that causes a detrimental effect when incorporated in a drilling fluid."
      },
      {
        id: "hw11_q2",
        number: "2 of 17",
        type: "single",
        question: "The primary indication of contamination is a change in:",
        options: [
          { value: "cost", label: "Drilling fluid cost" },
          { value: "ops", label: "Drilling operations" },
          { value: "properties", label: "Drilling fluid properties" },
          { value: "all", label: "All of the above" }
        ],
        answer: "properties",
        explanation: "The primary indication of contamination is an unexpected change in drilling fluid properties."
      },
      {
        id: "hw11_q3",
        number: "3 of 17",
        type: "multiple",
        question: "Which of the following are the most common contaminants encountered in drilling fluid systems while drilling? (select all applicable answers)",
        options: [
          { value: "hydrocarbons", label: "Hydrocarbons" },
          { value: "bacteria", label: "Bacteria" },
          { value: "solids", label: "Drilled solids" },
          { value: "additives", label: "Fluid additives" },
          { value: "gases", label: "Inert gases" },
          { value: "salts", label: "Evaporite salts" },
          { value: "metals", label: "Heavy metals" },
          { value: "water", label: "Water flows" },
          { value: "acid_gases", label: "Acid gases" }
        ],
        answer: ["hydrocarbons", "solids", "salts", "water", "acid_gases"],
        explanation: "The 5 most common contaminants encountered while drilling are Drilled Solids, Evaporite Salts, Water Flows, Acid Gases, and Hydrocarbons."
      },
      {
        id: "hw11_q4",
        number: "4 of 17",
        type: "single",
        question: "The severity of the problems experienced in the drilling fluids due to contaminants depends on:",
        options: [
          { value: "type", label: "Type of contaminant" },
          { value: "quantity", label: "Quantity of contaminants" },
          { value: "composition", label: "Type and composition of the drilling fluid" },
          { value: "all", label: "All of the above" }
        ],
        answer: "all",
        explanation: "Severity depends on the type and quantity of the contaminant, as well as the type and composition of the drilling fluid in use."
      },
      {
        id: "hw11_q5",
        number: "5 of 17",
        type: "matching",
        question: "Match the type of drilled solids with their correct classifications:",
        pairs: {
          "Active solids (clays and shales)": "Will react with the continuous phase or chemicals",
          "Inactive solids (sand and CaCO3)": "Will be inert and will not generate any chemical reaction"
        },
        explanation: "Drilled solids are divided into active solids (clays/shales which react chemically) and inactive solids (sand/CaCO3 which are inert)."
      },
      {
        id: "hw11_q6",
        number: "6 of 17",
        type: "multiple",
        question: "What are the most common Acid Gases that are encountered while drilling? (select all applicable answers)",
        options: [
          { value: "co2", label: "Carbon dioxide (CO2)" },
          { value: "h2", label: "Hydrogen (H2)" },
          { value: "h2s", label: "Hydrogen sulfide (H2S)" },
          { value: "o2", label: "Oxygen (O2)" }
        ],
        answer: ["co2", "h2s"],
        explanation: "Carbon dioxide (CO2) and Hydrogen sulfide (H2S) are weak acid gases often found as components of natural gas."
      },
      {
        id: "hw11_q7",
        number: "7 of 17",
        type: "single",
        question: "Pilot testing can be defined as:",
        options: [
          { value: "field", label: "A test carried out in the environment in which a product or fluid system is to be used" },
          { value: "lab", label: "A preliminary assessment on a small volume of fluid under controlled conditions in the lab" },
          { value: "circ", label: "An early assessment of the product's effect on the circulating volume in the field" },
          { value: "equip", label: "A test that is done in the lab where the appropriate equipment and certified expertise are available" }
        ],
        answer: "lab",
        explanation: "A pilot test is a preliminary assessment performed on a small volume of fluid under controlled lab conditions to evaluate chemical additions."
      },
      {
        id: "hw11_q8",
        number: "8 of 17",
        type: "single",
        question: "What is the chemical formula for Bicarbonate of Soda?",
        options: [
          { value: "na2hco3", label: "Na2HCO3" },
          { value: "nahco3", label: "NaHCO3" },
          { value: "nahco2", label: "NaHCO2" },
          { value: "na2hco2", label: "Na2HCO2" }
        ],
        answer: "nahco3",
        explanation: "Bicarbonate of soda (Sodium Bicarbonate) has the formula NaHCO3."
      },
      {
        id: "hw11_q9",
        number: "9 of 17",
        type: "single",
        question: "What is the primary function of Bicarbonate of Soda in drilling fluids?",
        options: [
          { value: "cement", label: "Treat out cement" },
          { value: "co2", label: "Treat out CO2" },
          { value: "suspension", label: "Suspension agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "cement",
        explanation: "Bicarbonate of soda (NaHCO3) is used to treat out cement contamination by precipitating calcium as calcium carbonate."
      },
      {
        id: "hw11_q10",
        number: "10 of 17",
        type: "single",
        question: "What is the chemical formula for Lime?",
        options: [
          { value: "caoh", label: "CaOH" },
          { value: "ca2oh", label: "Ca2OH" },
          { value: "caoh2", label: "Ca(OH)2" },
          { value: "caso4", label: "CaSO4" }
        ],
        answer: "caoh2",
        explanation: "Lime (Calcium Hydroxide) has the chemical formula Ca(OH)2."
      },
      {
        id: "hw11_q11",
        number: "11 of 17",
        type: "single",
        question: "What is the chemical formula for Soda Ash?",
        options: [
          { value: "na2co2", label: "Na2CO2" },
          { value: "naco3", label: "NaCO3" },
          { value: "na2co3", label: "Na2CO3" },
          { value: "naco2", label: "NaCO2" }
        ],
        answer: "na2co3",
        explanation: "Soda ash (Sodium Carbonate) has the chemical formula Na2CO3."
      },
      {
        id: "hw11_q12",
        number: "12 of 17",
        type: "single",
        question: "What is the primary function of Soda Ash in drilling fluids?",
        options: [
          { value: "calcium", label: "Treat out calcium (Hardness)" },
          { value: "sodium", label: "Treat out sodium" },
          { value: "co2", label: "Treat out CO2" },
          { value: "weight", label: "Weighting agent" }
        ],
        answer: "calcium",
        explanation: "Soda Ash (Na2CO3) is used to treat out calcium contamination (such as from anhydrite/gypsum) by precipitating calcium as CaCO3."
      },
      {
        id: "hw11_q13",
        number: "13 of 17",
        type: "single",
        question: "What is the chemical formula for Caustic Soda?",
        options: [
          { value: "naoh", label: "NaOH" },
          { value: "na2oh", label: "Na2(OH)" },
          { value: "koh", label: "KOH" }
        ],
        answer: "naoh",
        explanation: "Caustic soda (Sodium Hydroxide) has the chemical formula NaOH."
      },
      {
        id: "hw11_q14",
        number: "14 of 17",
        type: "single",
        question: "What is the primary function of Caustic Soda in drilling fluids?",
        options: [
          { value: "filtrate", label: "Filtration control" },
          { value: "thinner", label: "Thinner" },
          { value: "alkalinity", label: "Alkalinity source" },
          { value: "shale", label: "Shale stabilizer" }
        ],
        answer: "alkalinity",
        explanation: "Caustic Soda (NaOH) is a highly soluble strong base used as an alkalinity source to increase pH."
      },
      {
        id: "hw11_q15",
        number: "15 of 17",
        type: "single",
        question: "What is the chemical formula for Gypsum?",
        options: [
          { value: "ca2so4", label: "Ca2SO4" },
          { value: "caso4_2h2o", label: "CaSO4.2H2O" },
          { value: "caso3", label: "CaSO3" },
          { value: "caso4", label: "CaSO4" }
        ],
        answer: "caso4_2h2o",
        explanation: "Gypsum is Calcium Sulfate dihydrate, represented by the formula CaSO4.2H2O."
      },
      {
        id: "hw11_q16",
        number: "16 of 17",
        type: "single",
        question: "What is the primary function of Gypsum in drilling fluids?",
        options: [
          { value: "carbonates", label: "Treat out carbonates" },
          { value: "cement", label: "Treat out cement" },
          { value: "viscosifier", label: "Viscosifier" },
          { value: "calcium", label: "Calcium source" }
        ],
        answer: "carbonates",
        explanation: "Gypsum (CaSO4) is used to treat out carbonate (CO32-) contamination by supplying calcium to precipitate calcium carbonate (CaCO3)."
      },
      {
        id: "hw11_q17",
        number: "17 of 17",
        type: "matching",
        question: "Match the Pf/Mf alkalinity relationship with the ions present:",
        pairs: {
          "When 2Pf > Mf": "Hydroxides and Carbonates",
          "When 2Pf < Mf": "Carbonates and Bicarbonates",
          "When Pf = 0": "Bicarbonates only",
          "When 2Pf = Mf": "Carbonates only",
          "When Pf = Mf": "Hydroxides only"
        },
        explanation: "Standard API 13B-1 alkalinity rules map titration ratios to specific water soluble ions."
      }
    ]
  };
