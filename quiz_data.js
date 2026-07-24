const QUIZ_DATA = {
  homework_8: {
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
  },
  homework_9: {
    title: "Homework 9: Clay Chemistry & Polymers (Theory)",
    description: "Theoretical questions on clays, polymers, and product selections based on Baroid Core Participant Guide.",
    questions: [
      {
        id: "hw9_q1",
        number: "1 of 46",
        type: "multiple",
        question: "Which of the following are characteristics of montmorillonite clay?",
        options: [
          { value: "freshwater", label: "Commonly used in fresh water systems" },
          { value: "viscosity", label: "Used for viscosity" },
          { value: "saltwater_gel", label: "Form gel structures in salt water" },
          { value: "shear_thinning", label: "Produces Shear thinning fluid properties" }
        ],
        answer: ["freshwater", "viscosity", "shear_thinning"],
        explanation: "Sodium montmorillonite (bentonite) hydrats best in fresh water to provide viscosity and shear-thinning behavior. Salt water inhibits hydration and gel structures unless special additives or pre-hydration are used."
      },
      {
        id: "hw9_q2",
        number: "2 of 46",
        type: "multiple",
        question: "What are the benefits to using a sodium-based montmorillonite Clay over a calcium-based montmorillonite Clay in your drilling fluid system?",
        options: [
          { value: "high_hydration", label: "High hydration potential" },
          { value: "layer_separation", label: "Encourages layer separation" },
          { value: "low_hydration", label: "Low hydration potential" },
          { value: "inhibit_hydration", label: "Inhibits hydration potential" }
        ],
        answer: ["high_hydration", "layer_separation"],
        explanation: "Sodium ions between the clay platelets allow more water absorption, creating a high hydration potential and prompting clay platelets to separate (disperse) into individual units."
      },
      {
        id: "hw9_q3",
        number: "3 of 46",
        type: "multiple",
        question: "Select the factors that affect polymer performance:",
        options: [
          { value: "bio_attack", label: "Biological attack" },
          { value: "electrolytes", label: "Electrolytes in solution" },
          { value: "color", label: "Polymer color" },
          { value: "mw", label: "Polymer molecular weight" },
          { value: "turbidity", label: "Turbidity of solution" },
          { value: "charge", label: "Polymer charge" },
          { value: "ph", label: "pH of water" }
        ],
        answer: ["bio_attack", "electrolytes", "mw", "charge", "ph"],
        explanation: "Polymer performance depends on molecular weight, polymer charge, water pH, temperature, electrolytes (salts shield polymer charges, causing chains to coil), and biological attack by bacteria. Color and turbidity do not affect performance."
      },
      {
        id: "hw9_q4",
        number: "4 of 46",
        type: "single",
        question: "Natural organic polymers",
        options: [
          { value: "natural", label: "are proteins, carbohydrates and untreated cellulose that can be obtained from nature." },
          { value: "modified", label: "are usually natural polymers that have been chemically altered to improve specific properties." },
          { value: "synthetic", label: "are built from inorganic compounds including petrochemicals." }
        ],
        answer: "natural",
        explanation: "Natural organic polymers are starch, guar gum, and untreated cellulose obtained directly from plants/nature."
      },
      {
        id: "hw9_q5",
        number: "5 of 46",
        type: "single",
        question: "Modified organic polymers",
        options: [
          { value: "natural", label: "are proteins, carbohydrates and untreated cellulose that can be obtained from nature." },
          { value: "modified", label: "are usually natural polymers that have been chemically altered to improve specific properties." },
          { value: "synthetic", label: "are built from inorganic compounds including petrochemicals." }
        ],
        answer: "modified",
        explanation: "Modified polymers (semi-synthetics) are natural polymers chemically altered in labs (e.g., carboxymethyl cellulose [CMC] or polyanionic cellulose [PAC])."
      },
      {
        id: "hw9_q6",
        number: "6 of 46",
        type: "single",
        question: "Synthetic polymers",
        options: [
          { value: "natural", label: "are proteins, carbohydrates and untreated cellulose that can be obtained from nature." },
          { value: "modified", label: "are usually natural polymers that have been chemically altered to improve specific properties." },
          { value: "synthetic", label: "are built from inorganic compounds including petrochemicals." }
        ],
        answer: "synthetic",
        explanation: "Synthetic polymers are 100% man-made from petrochemical compounds, such as polyacrilamide (PHPA) or polyacrylate."
      },
      {
        id: "hw9_q7",
        number: "7 of 46",
        type: "multiple",
        question: "What are some of the uses of the polymers added to drilling fluids?",
        options: [
          { value: "decrease_vis", label: "Decrease viscosity" },
          { value: "destabilize", label: "Destabilize formations" },
          { value: "increase_vis", label: "Increase viscosity" },
          { value: "decrease_filtrate", label: "Decrease the amount of filtrate" }
        ],
        answer: ["increase_vis", "decrease_vis"],
        explanation: "Polymers can act as viscosifiers (high MW) or thinners/deflocculants (low MW) to decrease viscosity."
      },
      {
        id: "hw9_q8",
        number: "8 of 46",
        type: "single",
        question: "Which pH range gives excellent Clay hydration?",
        options: [
          { value: "acid", label: "2-4" },
          { value: "neutral", label: "6.5 - 8.5" },
          { value: "optimum", label: "9.5 - 10.5" },
          { value: "extreme", label: "12.5 - 14" }
        ],
        answer: "optimum",
        explanation: "The optimal pH range for bentonite clay hydration and dispersion is 9.5 to 10.5."
      },
      {
        id: "hw9_q9",
        number: "9 of 46",
        type: "single",
        question: "Adding thinners to a flocculated drilling fluid result in the clays becoming?",
        options: [
          { value: "deflocculated", label: "Deflocculated" },
          { value: "hydrated", label: "Hydrated" },
          { value: "flocculated", label: "Flocculated" },
          { value: "aggregated", label: "Aggregated" }
        ],
        answer: "deflocculated",
        explanation: "Thinners adsorb on edge surfaces, neutralizing positive charges and breaking the face-to-edge structure (flocculated) into a deflocculated state."
      },
      {
        id: "hw9_q10",
        number: "10 of 46",
        type: "single",
        question: "The Clay state of edge-to-edge or edge-to-face association of Clay particles is called?",
        options: [
          { value: "aggregated", label: "Aggregated" },
          { value: "semidispersed", label: "Semi-dispersed" },
          { value: "hydrated", label: "Hydrated" },
          { value: "dispersed", label: "Dispersed" },
          { value: "flocculated", label: "Flocculated" },
          { value: "deflocculated", label: "Deflocculated" }
        ],
        answer: "flocculated",
        explanation: "Edge-to-edge and edge-to-face attraction of clay platelets forms a gelled, 'house of cards' structure called flocculation."
      },
      {
        id: "hw9_q11",
        number: "11 of 46",
        type: "single",
        question: "What Clay state is present after the break up of the Clay platelets, which results in a greater number of particles in the fluid, with an increase in surface area, and a rise of the plastic viscosity?",
        options: [
          { value: "dispersed", label: "Dispersed" },
          { value: "flocculated", label: "Flocculated" },
          { value: "deflocculated", label: "Deflocculated" },
          { value: "aggregated", label: "Aggregated" }
        ],
        answer: "dispersed",
        explanation: "Dispersion separates clay plates, generating a high number of particles and surface area, which increases internal friction (Plastic Viscosity, PV)."
      },
      {
        id: "hw9_q12",
        number: "12 of 46",
        type: "single",
        question: "When clays enter in contact water and the layers of the individual Clay particles swell, the condition is called?",
        options: [
          { value: "flocculation", label: "Flocculation" },
          { value: "deflocculation", label: "Deflocculation" },
          { value: "hydration", label: "Hydration" },
          { value: "dispersion", label: "Dispersion" }
        ],
        answer: "hydration",
        explanation: "Hydration is the adsorption/absorption of water molecules between clay platelets, causing swelling."
      },
      {
        id: "hw9_q13",
        number: "13 of 46",
        type: "single",
        question: "The face-to-face stacking of layers in the Clay particles, (like in the sacks) is called?",
        options: [
          { value: "dispersed", label: "Dispersed" },
          { value: "hydrated", label: "Hydrated" },
          { value: "deflocculated", label: "Deflocculated" },
          { value: "aggregated", label: "Aggregated" },
          { value: "flocculated", label: "Flocculated" }
        ],
        answer: "aggregated",
        explanation: "Face-to-face stacking of clay sheets forms thicker packets, reducing particle counts and is called aggregation."
      },
      {
        id: "hw9_q14",
        number: "14 of 46",
        type: "single",
        question: "The OH- or hydroxide ion or hydroxyl ion needs to be present for which of the following products to work?",
        options: [
          { value: "flocculants", label: "Flocculants" },
          { value: "surfactants", label: "Surfactants" },
          { value: "thinners", label: "Most Thinners (Lignosulfonates)" }
        ],
        answer: "thinners",
        explanation: "Lignosulfonates require an alkaline environment (presence of OH- ions, typically pH > 9.5) to become negatively charged and adsorb onto clay edges."
      },
      {
        id: "hw9_q15",
        number: "15 of 46",
        type: "multiple",
        question: "High molecular weight polymers are used as?",
        options: [
          { value: "deflocculants", label: "Deflocculants" },
          { value: "viscosifiers", label: "Viscosifiers" },
          { value: "flocculants", label: "Floculants" },
          { value: "filtration", label: "Filtration Control" },
          { value: "stabilizers", label: "Shale Stabilizers" }
        ],
        answer: ["viscosifiers", "flocculants", "stabilizers"],
        explanation: "High molecular weight polymers are primarily used as Viscosifiers, Flocculants, and Shale Stabilizers."
      },
      {
        id: "hw9_q15_b",
        number: "15b of 46",
        type: "single",
        question: "Medium molecular weight polymers are used as?",
        options: [
          { value: "deflocculants", label: "Deflocculants" },
          { value: "viscosifiers", label: "Viscosifiers" },
          { value: "flocculants", label: "Floculants" },
          { value: "filtration", label: "Filtration Control" },
          { value: "stabilizers", label: "Shale Stabilizers" }
        ],
        answer: "filtration",
        explanation: "Medium molecular weight polymers are primarily used for filtration control (water loss reduction) in WBF."
      },
      {
        id: "hw9_q16",
        number: "16 of 46",
        type: "multiple",
        question: "Low molecular weight polymers are used as?",
        options: [
          { value: "thinners", label: "Thinners" },
          { value: "stabilizers", label: "Shale Stabilizers" },
          { value: "deflocculants", label: "Deflocculants" },
          { value: "flocculants", label: "Flocculants" }
        ],
        answer: ["thinners", "deflocculants"],
        explanation: "Short polymer chains (low MW) neutralize clay charges, dispersing them as thinners or deflocculants."
      },
      {
        id: "hw9_q17",
        number: "17 of 46",
        type: "multiple",
        question: "Select the reasons clays are added to drilling fluids?",
        options: [
          { value: "best_vis", label: "It is the best viscosifier in the market" },
          { value: "fluid_loss", label: "To provide some fluid loss control" },
          { value: "cheapest_vis", label: "It is the cheapest viscosifier" },
          { value: "density", label: "To provide density to drilling fluid" },
          { value: "viscosity", label: "To provide viscosity" }
        ],
        answer: ["fluid_loss", "cheapest_vis", "viscosity"],
        explanation: "Bentonita is added because it is cheap, increases viscosity, and helps form an impermeable cake to control fluid loss."
      },
      {
        id: "hw9_q18",
        number: "18 of 46",
        type: "multiple",
        question: "Select the properties that can be affected by addition of clays to drilling fluids:",
        options: [
          { value: "pct_solids", label: "% solids" },
          { value: "alkalinity", label: "Alkalinity" },
          { value: "owr", label: "Oil water ratio" },
          { value: "density", label: "Density" },
          { value: "rheology", label: "Rheology" },
          { value: "fluid_loss", label: "Fluid Loss" },
          { value: "hardness", label: "Total hardness" }
        ],
        answer: ["pct_solids", "density", "rheology", "fluid_loss"],
        explanation: "Adding solid clay particles increases solids content, density, reology (viscosity/yield point), and decreases filtration loss."
      },
      {
        id: "hw9_q19",
        number: "19 of 46",
        type: "multiple",
        question: "When building a WBF, select which products you would use to increase the density of the system:",
        options: [
          { value: "baracarb", label: "BARACARB" },
          { value: "baraweight", label: "BARAWEIGHT" },
          { value: "barimand", label: "BARMAND PLUS" },
          { value: "baroid", label: "BAROID" },
          { value: "baranex", label: "BARANEX" },
          { value: "baradefoam", label: "BARADEFOAM" }
        ],
        answer: ["baracarb", "baroid"],
        explanation: "BAROID (barite, SG 4.2) and BARACARB (CaCO3, SG 2.7) are the main weighting agents used in water-based muds."
      },
      {
        id: "hw9_q20",
        number: "20 of 46",
        type: "multiple",
        question: "When building a WBF, select which products you would use to increase the viscosity of the system:",
        options: [
          { value: "baravis", label: "BARAVIS" },
          { value: "pac_l", label: "PAC-L" },
          { value: "dextrid", label: "DEXTRID" },
          { value: "quik_thin", label: "QUIK-THIN" },
          { value: "therma_thin", label: "THERMA-THIN" },
          { value: "barazan", label: "BARAZAN D PLUS" }
        ],
        answer: ["baravis", "barazan"],
        explanation: "BARAVIS (bentonite) and BARAZAN D PLUS (xanthan gum) are primary viscosifiers."
      },
      {
        id: "hw9_q21",
        number: "21 of 46",
        type: "multiple",
        question: "When building and treating WBF, select which products could be used to increase the pH:",
        options: [
          { value: "naoh", label: "NaOH" },
          { value: "kcl", label: "KCl" },
          { value: "koh", label: "KOH" },
          { value: "cacl2", label: "CaCl2" },
          { value: "nacl", label: "NaCl" }
        ],
        answer: ["naoh", "koh"],
        explanation: "Sodium hydroxide (NaOH) and Potassium hydroxide (KOH) increase the OH- concentration, raising pH."
      },
      {
        id: "hw9_q22",
        number: "22 of 46",
        type: "multiple",
        question: "When treating a WBF, select which products you would use to decrease the fluid loss of the system:",
        options: [
          { value: "ez_filter", label: "EZ-FILTER" },
          { value: "carbonox", label: "CARBONOX" },
          { value: "impermud", label: "IMPERMUD" },
          { value: "dextrid", label: "DEXTRID" },
          { value: "pac_r", label: "PAC-R" },
          { value: "filter_chek", label: "FILTER-CHEK" }
        ],
        answer: ["carbonox", "dextrid", "pac_r", "filter_chek"],
        explanation: "In this exam question, only CARBONOX, DEXTRID, PAC-R, and FILTER-CHEK are marked as the 4 correct answers."
      },
      {
        id: "hw9_q23",
        number: "23 of 46",
        type: "multiple",
        question: "When treating a WBF, select which products you would use to decrease the viscosity of the system:",
        options: [
          { value: "aquagel", label: "AQUAGEL GOLD SEAL" },
          { value: "baro_thin", label: "BARO-THIN" },
          { value: "therma_thin", label: "THERMA-THIN" },
          { value: "quik_thin", label: "QUIK-THIN" }
        ],
        answer: ["therma_thin", "quik_thin"],
        explanation: "In this exam question, only THERMA-THIN and QUIK-THIN are marked as the 2 correct answers."
      }
    ]
  },
  business_processes: {
    title: "Baroid Business Processes",
    description: "Practice questions about Baroid's 5 Mainstays, Value Proposition, Technical Process, Black Book, Hard Stops, and focus areas.",
    questions: [
      {
        id: "bp_q1",
        number: "1 of 15",
        type: "multiple",
        question: "Which of the following are the 5 Mainstays (pillars) of Baroid? (select all applicable answers)",
        options: [
          { value: "acq", label: "Business Acquisition" },
          { value: "tech", label: "Technical Process" },
          { value: "black", label: "Black Book Process" },
          { value: "rational", label: "System Rationalization" },
          { value: "people", label: "People Process" },
          { value: "supply", label: "Supply Chain Execution" },
          { value: "finance", label: "Financial Performance" },
          { value: "logistics", label: "Logistics Optimization" }
        ],
        answer: ["acq", "tech", "black", "rational", "people"],
        explanation: "The 5 Mainstays of Baroid are: Business Acquisition, Technical Process, Black Book, System Rationalization, and People Process."
      },
      {
        id: "bp_q2",
        number: "2 of 15",
        type: "single",
        question: "What is the official Value Proposition of Baroid?",
        options: [
          { value: "correct", label: "Engineered fluid solutions customized to maximize wellbore value" },
          { value: "wrong1", label: "Engineered fluid systems customized to maximize wellbore value" },
          { value: "wrong2", label: "Engineered fluid solutions designed to maximize wellbore productivity" },
          { value: "wrong3", label: "Customized fluid solutions engineered to optimize reservoir value" }
        ],
        answer: "correct",
        explanation: "The exact wording is: 'Engineered fluid solutions customized to maximize wellbore value'. Learn it word-for-word."
      },
      {
        id: "bp_q3",
        number: "3 of 15",
        type: "multiple",
        question: "Select the steps that form part of the Baroid Technical Process: (select all applicable answers)",
        options: [
          { value: "identify", label: "Identify the Challenge" },
          { value: "solution", label: "Solution Creation" },
          { value: "cfw", label: "Critical First Well" },
          { value: "problem", label: "Problem Resolution" },
          { value: "value", label: "Present the Value" },
          { value: "program", label: "Operations Program" },
          { value: "execution", label: "Operations Execution" },
          { value: "capture", label: "Knowledge Capture" }
        ],
        answer: ["identify", "solution", "cfw", "problem", "value"],
        explanation: "The 5 steps of the Baroid Technical Process are: Identify the Challenge, Solution Creation, Critical First Well, Problem Resolution, and Present the Value."
      },
      {
        id: "bp_q4",
        number: "4 of 15",
        type: "multiple",
        question: "Select the steps that form part of the Baroid Black Book Process: (select all applicable answers)",
        options: [
          { value: "identify", label: "Identify the Challenge" },
          { value: "solution", label: "Solution Creation" },
          { value: "cfw", label: "Critical First Well" },
          { value: "problem", label: "Problem Resolution" },
          { value: "value", label: "Present the Value" },
          { value: "program", label: "Operations Program" },
          { value: "execution", label: "Operations Execution" },
          { value: "capture", label: "Knowledge Capture" }
        ],
        answer: ["program", "execution", "capture"],
        explanation: "The 3 steps of the Baroid Black Book Process are: Operations Program, Operations Execution, and Knowledge Capture."
      },
      {
        id: "bp_q5",
        number: "5 of 15",
        type: "single",
        question: "If an operational problem is not resolved locally, after how many hours must the local Technical Leader (TL) escalate it to the Region (RTM)?",
        options: [
          { value: "12", label: "After 12 hours" },
          { value: "24", label: "After 24 hours (1 day)" },
          { value: "48", label: "After 48 hours (2 days)" },
          { value: "72", label: "After 72 hours (3 days)" }
        ],
        answer: "24",
        explanation: "Escalation rules: local TL must escalate to the RTM if unresolved within the first 24 hours."
      },
      {
        id: "bp_q6",
        number: "6 of 15",
        type: "single",
        question: "If an operational problem remains unresolved in the Region after being escalated, within what timeframe must the RTM escalate it to Global level by opening a TIAT?",
        options: [
          { value: "24", label: "After 24 hours" },
          { value: "48", label: "After 48 hours (2 days)" },
          { value: "72", label: "After 72 hours (3 days)" },
          { value: "96", label: "After 96 hours (4 days)" }
        ],
        answer: "48",
        explanation: "If a problem continues without a solution for 48 hours at the Regional level, the RTM must escalate it Globally by opening a TIAT."
      },
      {
        id: "bp_q7",
        number: "7 of 15",
        type: "single",
        question: "Within how many days is the Technical Professional (TP) responsible for submitting the completed End of Well Report (RECAP) to the customer?",
        options: [
          { value: "wrong1", label: "7 days for onshore wells, 14 days for offshore wells" },
          { value: "correct", label: "14 days for onshore wells, 28 days for offshore wells" },
          { value: "wrong2", label: "10 days for onshore wells, 20 days for offshore wells" },
          { value: "wrong3", label: "30 days for onshore and offshore wells" }
        ],
        answer: "correct",
        explanation: "The TP has 14 days for onshore wells and 28 days for offshore wells to submit the completed RECAP after well finalization."
      },
      {
        id: "bp_q8",
        number: "8 of 15",
        type: "multiple",
        question: "What are the criteria/requirements for a well to be classified as a Critical First Well (CFW)? (select all applicable answers)",
        options: [
          { value: "new_tech", label: "First use of New Technology in area" },
          { value: "new_cust", label: "New Customer (start-up)" },
          { value: "new_country", label: "New Country (start-up)" },
          { value: "new_psl", label: "New sub-PSL (start-up)" },
          { value: "capex", label: "CAPEX >$2MM" },
          { value: "wrong_capex", label: "CAPEX >$1MM" },
          { value: "wrong_rig", label: "First well drilled under a new rig contract" },
          { value: "wrong_hpht", label: "Any HPHT well configuration" }
        ],
        answer: ["new_tech", "new_cust", "new_country", "new_psl", "capex"],
        explanation: "CFW criteria: First use of New Tech in area, New Customer, New Country, New sub-PSL, or CAPEX >$2MM."
      },
      {
        id: "bp_q9",
        number: "9 of 15",
        type: "multiple",
        question: "Which of the following are the 4 Control Points of Baroid? (select all applicable answers)",
        options: [
          { value: "dos", label: "Approved Design of Service" },
          { value: "demand", label: "Verified Demand Plan" },
          { value: "supply", label: "Confirmed Supply Execution" },
          { value: "recap", label: "Completed Job Reporting" },
          { value: "wrong_ops", label: "Verified Operations Execution" },
          { value: "wrong_approval", label: "Customer Approval Verification" }
        ],
        answer: ["dos", "demand", "supply", "recap"],
        explanation: "The 4 Control Points are: Approved Design of Service, Verified Demand Plan, Confirmed Supply Execution, and Completed Job Reporting (RECAP)."
      },
      {
        id: "bp_q10",
        number: "10 of 15",
        type: "multiple",
        question: "What are the 3 non-negotiable Hard Stops of Baroid? (select all applicable answers)",
        options: [
          { value: "peer", label: "DoS Peer Review approved" },
          { value: "brief", label: "Pre-job briefing conducted" },
          { value: "recap", label: "RECAP completed" },
          { value: "wrong_demand", label: "Demand Plan verified" },
          { value: "wrong_client", label: "Client sign-off obtained" }
        ],
        answer: ["peer", "brief", "recap"],
        explanation: "The 3 Hard Stops are: DoS Peer Review approved, Pre-job briefing conducted, and RECAP completed."
      },
      {
        id: "bp_q11",
        number: "11 of 15",
        type: "single",
        question: "What is the primary factor that differentiates Baroid from other competitors?",
        options: [
          { value: "collab", label: "Collaboration with the customer to deliver customized solutions" },
          { value: "price", label: "Lower product pricing and standard commodity availability" },
          { value: "tools", label: "Proprietary logging tools and mechanical stabilizers" }
        ],
        answer: "collab",
        explanation: "Baroid differentiates itself through close collaboration with the customer and engineered, customized solutions."
      },
      {
        id: "bp_q12",
        number: "12 of 15",
        type: "multiple",
        question: "Which of the following are Baroid's Critical Focus Areas? (select all applicable answers)",
        options: [
          { value: "barrier", label: "Well barrier" },
          { value: "hydrocarbons", label: "Hydrocarbons on surface" },
          { value: "pressure", label: "Pressure Control" },
          { value: "radiation", label: "Radiation and explosives" },
          { value: "wrong_solids", label: "Solids density control" },
          { value: "wrong_rpm", label: "Drill string rotational speed limits" },
          { value: "wrong_proximity", label: "Wellbore proximity" }
        ],
        answer: ["barrier", "hydrocarbons", "pressure", "radiation"],
        explanation: "The Critical Focus Areas are: Well barrier, Hydrocarbons on surface, Pressure Control, and Radiation and explosives."
      },
      {
        id: "bp_q13",
        number: "13 of 15",
        type: "matching",
        keepKeysOrder: true,
        question: "Match the steps of the Business Acquisition Process (Steps 1 to 5):",
        options: [
          "Identify",
          "Pursuit",
          "Tender",
          "Negotiate",
          "Execute",
          "Prospect",
          "Propose",
          "Deliver",
          "Close"
        ],
        pairs: {
          "Step 1": "Identify",
          "Step 2": "Pursuit",
          "Step 3": "Tender",
          "Step 4": "Negotiate",
          "Step 5": "Execute"
        },
        explanation: "The Business Acquisition Process steps are: Identify, Pursuit, Tender, Negotiate, and Execute."
      },
      {
        id: "bp_q14",
        number: "14 of 15",
        type: "matching",
        question: "Match each stage of the Problem Resolution process with its corresponding Level and Timeframe:",
        pairs: {
          "Reactive": "Country (24 hours / 1 day)",
          "Responsive": "Regional (48 hours / 2 days)",
          "Proactive": "Global (72 hours / 3 days)",
          "Engineered Solution": "Global (168 hours / target 7 days)"
        },
        explanation: "Problem Resolution stages: 1) Reactive (Country level, 24 hours), 2) Responsive (Regional level, 48 hours), 3) Proactive (Global level, 72 hours), and 4) Engineered Solution (Global level, 168 hours / 7 days target)."
      },
      {
        id: "bp_q15",
        number: "15 of 15",
        type: "multiple",
        question: "Which of the following are the 3 core phases/characteristics of the Baroid People Process? (select all applicable answers)",
        options: [
          { value: "hire", label: "Hire" },
          { value: "develop", label: "Develop" },
          { value: "retain", label: "Retain" },
          { value: "fire", label: "Fire" },
          { value: "train", label: "Train" },
          { value: "recruit", label: "Recruit" },
          { value: "promote", label: "Promote" }
        ],
        answer: ["hire", "develop", "retain"],
        explanation: "The Baroid People Process is built around three pillars: Hire, Develop, and Retain."
      }
    ]
  },
  homework_11: {
    title: "Homework 11: Fluid Contaminants (Theory)",
    description: "Identify WBF contaminants, classify solids, and calculate treatment chemical dosages based on mud checks.",
    questions: [
      {
        id: "hw11_q1",
        number: "1 of 22",
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
        number: "2 of 22",
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
        number: "3 of 22",
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
        number: "4 of 22",
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
        number: "5 of 22",
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
        number: "6 of 22",
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
        number: "7 of 22",
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
        number: "8 of 22",
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
        number: "9 of 22",
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
        number: "10 of 22",
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
        number: "11 of 22",
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
        number: "12 of 22",
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
        number: "13 of 22",
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
        number: "14 of 22",
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
        number: "15 of 22",
        type: "single",
        question: "What is the chemical formula for Gypsum?",
        options: [
          { value: "ca2so4", label: "Ca2SO4" },
          { value: "caso4_2h2o", label: "CaSO4.2H2O" },
          { value: "caso3", label: "CaSO3" },
          { value: "caso4", label: "CaSO4 (Anhydrite)" }
        ],
        answer: "caso4_2h2o",
        explanation: "Gypsum is Calcium Sulfate dihydrate, represented by the formula CaSO4.2H2O."
      },
      {
        id: "hw11_q16",
        number: "16 of 22",
        type: "single",
        question: "What is the primary function of Gypsum in drilling fluids?",
        options: [
          { value: "carbonates", label: "Treat out carbonates" },
          { value: "cement", label: "Treat out cement" },
          { value: "viscosifier", label: "Viscosifier" },
          { value: "calcium", label: "Calcium source" }
        ],
        answer: "calcium",
        explanation: "Gypsum is used as a calcium source to inhibit swelling shales or to convert freshwater mud to a gyp mud system."
      },
      {
        id: "hw11_q17",
        number: "17 of 22",
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
      },
      {
        id: "hw11_q18",
        number: "18 of 22",
        type: "calculation_alkalinity",
        inputs: {
          Pf: 1.5,
          Mf: 3.7
        },
        answer: {
          OH: 0,
          CO3: 1800,
          HCO3: 854
        },
        explanation: "2Pf = 3.0 < Mf = 3.7. OH- = 0. CO3(2-) = 1200 * Pf = 1200 * 1.5 = 1800 mg/L. HCO3- = 1220 * (Mf - 2Pf) = 1220 * 0.7 = 854 mg/L."
      },
      {
        id: "hw11_q19",
        number: "19 of 22",
        type: "calculation_alkalinity",
        inputs: {
          Pf: 3.2,
          Mf: 3.2
        },
        answer: {
          OH: 1088,
          CO3: 0,
          HCO3: 0
        },
        explanation: "Pf = Mf = 3.2. OH- = 340 * Pf = 340 * 3.2 = 1088 mg/L. CO3(2-) = 0. HCO3- = 0."
      },
      {
        id: "hw11_q20",
        number: "20 of 22",
        type: "calculation_alkalinity",
        inputs: {
          Pf: 5.4,
          Mf: 7.1
        },
        answer: {
          OH: 1258,
          CO3: 2040,
          HCO3: 0
        },
        explanation: "2Pf = 10.8 > Mf = 7.1. OH- = 340 * (2Pf - Mf) = 340 * 3.7 = 1258 mg/L. CO3(2-) = 1200 * (Mf - Pf) = 1200 * 1.7 = 2040 mg/L. HCO3- = 0."
      },
      {
        id: "hw11_q21",
        number: "21 of 22",
        type: "calculation_alkalinity",
        inputs: {
          Pf: 2.8,
          Mf: 5.6
        },
        answer: {
          OH: 0,
          CO3: 3360,
          HCO3: 0
        },
        explanation: "2Pf = 5.6 = Mf. OH- = 0. CO3(2-) = 1200 * Pf = 1200 * 2.8 = 3360 mg/L. HCO3- = 0."
      },
      {
        id: "hw11_q22",
        number: "22 of 22",
        type: "calculation_alkalinity",
        inputs: {
          Pf: 0.0,
          Mf: 2.5
        },
        answer: {
          OH: 0,
          CO3: 0,
          HCO3: 3050
        },
        explanation: "Pf = 0. OH- = 0. CO3(2-) = 0. HCO3- = 1220 * Mf = 1220 * 2.5 = 3050 mg/L."
      }
    ]
  },
  homework_12: {
    title: "Homework 12: Drilling Hydraulics (Theory)",
    description: "Practice questions about flow regimes, shear rates, rheological models (Bingham, Power Law, Herschel-Bulkley), and bit energy distribution based on the Baroid Core guide.",
    questions: [
      {
        id: "hw12_q1",
        number: "1 of 15",
        type: "single",
        question: "The study of fluid flow is called:",
        options: [
          { value: "plastic_viscosity", label: "Plastic Viscosity" },
          { value: "gel_strength", label: "Gel strength" },
          { value: "rheology", label: "Rheology" },
          { value: "yield_point", label: "Yield Point" }
        ],
        answer: "rheology",
        explanation: "Rheology is the study of the deformation and flow of matter, especially fluid flow in pipes and annuli."
      },
      {
        id: "hw12_q2",
        number: "2 of 15",
        type: "single",
        question: "The fluid pumped through the bit nozzles while drilling is in transitional flow:",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "The fluid exiting the bit nozzles is subjected to extremely high shear rates (100,000 to 500,000 rpm equivalent), causing it to be in highly turbulent flow, not transitional flow."
      },
      {
        id: "hw12_q3",
        number: "3 of 15",
        type: "multiple",
        question: "What are the three basic types of flow regimes? (select all applicable answers)",
        options: [
          { value: "capillary", label: "Capillary flow" },
          { value: "transitional", label: "Transitional flow" },
          { value: "laminar", label: "Laminar flow" },
          { value: "turbulent", label: "Turbulent flow" },
          { value: "stagnant", label: "Stagnant flow" }
        ],
        answer: ["transitional", "laminar", "turbulent"],
        explanation: "Drilling hydraulics identifies three basic flow regimes: laminar flow (orderly layers), turbulent flow (chaotic eddies), and transitional flow (the shift between them)."
      },
      {
        id: "hw12_q4",
        number: "4 of 15",
        type: "single",
        question: "When the fluid moves in laminar flow, the motion is parallel to the walls of the channel and layers do not cross each other.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "In laminar flow, fluid layers slip past each other in an orderly fashion parallel to the channel walls without crossing or mixing."
      },
      {
        id: "hw12_q5",
        number: "5 of 15",
        type: "single",
        question: "In the pits, the fluid moves about 6 to 300 rpm.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "According to the Baroid Core guide, the shear rate (expressed as approximate RPM) in the pits is very low: 0 to 6 rpm. It is in the annulus where the fluid moves at about 6 to 300 rpm."
      },
      {
        id: "hw12_q6",
        number: "6 of 15",
        type: "single",
        question: "Viscosity can be understood as the relationship between a shear stress and a shear rate.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "Viscosity is the internal resistance of a fluid to flow, defined mathematically as the ratio of shear stress to shear rate."
      },
      {
        id: "hw12_q7",
        number: "7 of 15",
        type: "single",
        question: "The main difference between a Newtonian and a non-Newtonian fluid, is that Newtonian fluids always exhibit a proportional relationship between shear stress and shear rate, and non-Newtonian fluids also exhibit a non-proportional behavior.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "Newtonian fluids have a constant viscosity, meaning shear stress is directly proportional to shear rate. Non-Newtonian fluids exhibit variable viscosity and a non-proportional shear stress/shear rate relationship."
      },
      {
        id: "hw12_q8",
        number: "8 of 15",
        type: "single",
        question: "Non-Newtonian fluids react in different ways under shear. For shear thinning fluids (also known as pseudoplastic) viscosity is time dependent.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "For shear thinning (pseudoplastic) fluids, viscosity depends only on the *shear rate* (velocity gradient), not on time. Viscosity that decreases over time under constant shear is called *thixotropic*."
      },
      {
        id: "hw12_q9",
        number: "9 of 15",
        type: "single",
        question: "When the three most widely used rheological models are compared, which one provides the most accurate estimations of pressure/ECD?",
        options: [
          { value: "bingham", label: "Bingham model" },
          { value: "power_law", label: "Power Law model" },
          { value: "herschel_bulkley", label: "Herschel-Bulkley model" }
        ],
        answer: "herschel_bulkley",
        explanation: "The Herschel-Bulkley (Modified Power Law) model is the most accurate as it accounts for both the fluid's yield stress and its shear-thinning index, fitting actual mud flow behavior closest."
      },
      {
        id: "hw12_q10",
        number: "10 of 15",
        type: "single",
        question: "The Bingham plastic rheological model usually over predicts the pressures of the system.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "Because the Bingham plastic model assumes a constant plastic viscosity (PV) at all shear rates after yielding, it tends to overpredict pressure losses and ECD in the annulus (where shear rates are low)."
      },
      {
        id: "hw12_q11",
        number: "11 of 15",
        type: "single",
        question: "The Power law rheological model usually over predicts the pressures of the system.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "The Power Law model does not incorporate a yield stress (YP), which causes it to underpredict pressure losses, especially at low flow rates or low shear rates."
      },
      {
        id: "hw12_q12",
        number: "12 of 15",
        type: "multiple",
        question: "From the following list, select all the different parameters that have an effect on the distribution of hydraulic energy on a drilling system: (select all applicable answers)",
        options: [
          { value: "fluid_loss", label: "Rate of fluid loss of the drilling fluid" },
          { value: "wellbore", label: "Wellbore geometry" },
          { value: "mineralogy", label: "Mineralogy of the rock" },
          { value: "temp", label: "Bottom hole temperature" },
          { value: "hardness", label: "Hardness of the rock" },
          { value: "rig_pumps", label: "Rig pumps" },
          { value: "bit_select", label: "Bit selection and design" },
          { value: "eccentricity", label: "Eccentricity of the pipe" },
          { value: "rheology", label: "Rheological properties of the drilling fluid" }
        ],
        answer: ["wellbore", "rig_pumps", "bit_select", "eccentricity", "rheology"],
        explanation: "Hydraulic energy distribution is determined by the system's dimensions (wellbore geometry, pipe eccentricity), the energy source (rig pumps), the nozzle configurations (bit selection), and the fluid's friction characteristics (rheological properties)."
      },
      {
        id: "hw12_q13",
        number: "13 of 15",
        type: "single",
        question: "Eccentricity is a dimensionless term that refers to the position of a pipe inside another pipe. In the oil field it usually refers to the position of the drillpipe in an annulus.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "Eccentricity defines how off-center the drillpipe is within the casing or borehole. It has a significant impact on velocity profiles and annular pressure drops."
      },
      {
        id: "hw12_q14",
        number: "14 of 15",
        type: "single",
        question: "Fill in the blank: The ________ is the average velocity of a drilling fluid passing through a bit's jet nozzles.",
        options: [
          { value: "jet_velocity", label: "Fluid Jet Velocity" },
          { value: "impact_force", label: "Jet Impact Force" },
          { value: "pressure_loss", label: "Bit Pressure Loss" },
          { value: "horsepower", label: "Bit Hydraulic Horsepower" }
        ],
        answer: "jet_velocity",
        explanation: "Fluid Jet Velocity refers to the average velocity at which the drilling fluid is ejected from the nozzles at the bit."
      },
      {
        id: "hw12_q15",
        number: "15 of 15",
        type: "single",
        question: "Fill in the blank: The ________ represents the bit hydraulic energy, which is the energy needed to counteract frictional energy (loss) at the bit.",
        options: [
          { value: "jet_velocity", label: "Fluid Jet Velocity" },
          { value: "impact_force", label: "Jet Impact Force" },
          { value: "pressure_loss", label: "Bit Pressure Loss" },
          { value: "horsepower", label: "Bit Hydraulic Horsepower" }
        ],
        answer: "horsepower",
        explanation: "Bit Hydraulic Horsepower (BHHP) is the hydraulic power delivered at the bit nozzles, describing the energy rate used to counteract frictional loss and clean the bottom of the wellbore."
      }
    ]
  }
};

const CALCULATIONS_DATA = {
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
        { name: "Retort (Solids/Water %)", day1: "17 / 83", day2: "13 / 87", changed: true },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.0", changed: true },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
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
        { name: "Retort (Solids/Water %)", day1: "17 / 83", day2: "13 / 87", changed: true },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.0", changed: true },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
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
      note: "Field Note: Rotten egg odor detected at the shakers.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "14.0", day2: "13.7", changed: true },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "30 / 10", day2: "45 / 18", changed: true },
        { name: "API Filtrate (ml)", day1: "6.0", day2: "11.1", changed: true },
        { name: "MBT (lb/bbl)", day1: "2.5", day2: "2.5", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
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
      explanation: "Diagnostic Workflow:\n1. Field note: Rotten egg odor is a classic indicator of H2S gas.\n2. pH & Alkalinity: Drops drastically (pH from 10.0 to 8.3, Pf/Mf to 0.1/0.2) because acidic H2S gas reacts with and consumes hydroxyl (OH-) buffers.\n3. Hardness: Drops to 0 mg/L as sulfides precipitate calcium/metals as insoluble sulfides.\n\nRecommended Treatment:\nAdd H2S Scavenger (Zinc Carbonate or Zinc Oxide) to precipitate sulfides, and Caustic Soda (NaOH) to raise pH above 10.0 for safety buffer."
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
        { name: "Retort (Solids/Water %)", day1: "10 / 90", day2: "15 / 85", changed: true },
        { name: "MBT (lb/bbl)", day1: "15.0", day2: "25.0", changed: true },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
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
        { name: "Retort (Solids/Water %)", day1: "10 / 90", day2: "16 / 84", changed: true },
        { name: "MBT (lb/bbl)", day1: "15.0", day2: "15.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "3.5%", changed: true },
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
      name: "Case 12: Bacterial Contamination",
      note: "Field Note: Foul odor reported at the shakers.",
      properties: [
        { name: "FL Temp (°F)", day1: "120", day2: "125", changed: false },
        { name: "Weight (lb/gal)", day1: "15.0", day2: "15.0", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "33 / 8", day2: "47 / 17", changed: true },
        { name: "API Filtrate (ml)", day1: "6.0", day2: "16.8", changed: true },
        { name: "MBT (lb/bbl)", day1: "4.0", day2: "4.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
        { name: "pH / Pm", day1: "10.5 / 1.6", day2: "8.5 / 0.8", changed: true },
        { name: "Pf / Mf", day1: "1.2 / 3.1", day2: "0.2 / 0.4", changed: true },
        { name: "Chlorides (mg/L)", day1: "4000", day2: "4000", changed: false },
        { name: "Hardness Ca++ (mg/L)", day1: "200", day2: "150", changed: true }
      ],
      answer: {
        contaminant: "bacterial_contamination",
        treatment: "add_biocide",
        dosage: 0
      },
      explanation: "Diagnostic Workflow:\n1. Field note: Foul odor indicates bacterial fermentation of organic polymers.\n2. API Filtrate: Spikes from 6.0 to 16.8 ml because bacteria degrade starch, CMC, and other fluid loss polymers.\n3. pH & Alkalinity: Drop sharply (pH from 10.5 to 8.5) due to acidic byproducts. Clays flocculate at lower pH, causing YP to rise.\n\nRecommended Treatment:\nAdd biocide to kill bacteria, add caustic to restore alkaline pH, and replenish fluid loss polymers."
    },
    {
      id: "case13",
      name: "Case 13: Cement (Case 2)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "130", day2: "132", changed: false },
        { name: "Weight (lb/gal)", day1: "11.5", day2: "11.6", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "18 / 6", day2: "32 / 20", changed: true },
        { name: "API Filtrate (ml)", day1: "4.5", day2: "15.0", changed: true },
        { name: "MBT (lb/bbl)", day1: "12.0", day2: "12.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
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
      id: "case14",
      name: "Case 14: Salt Water Influx (Case 2)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "140", day2: "142", changed: false },
        { name: "Weight (lb/gal)", day1: "16.0", day2: "15.3", changed: true },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "40 / 15", day2: "58 / 28", changed: true },
        { name: "Retort (Solids/Water %)", day1: "30 / 70", day2: "23 / 77", changed: true },
        { name: "MBT (lb/bbl)", day1: "20.0", day2: "16.0", changed: true },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
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
      id: "case15",
      name: "Case 15: Anhydrite / Gypsum (Case 2)",
      note: "",
      properties: [
        { name: "FL Temp (°F)", day1: "110", day2: "115", changed: false },
        { name: "Weight (lb/gal)", day1: "10.5", day2: "10.6", changed: false },
        { name: "PV (cP) / YP (lb/100ft²)", day1: "15 / 5", day2: "25 / 14", changed: true },
        { name: "API Filtrate (ml)", day1: "5.0", day2: "18.0", changed: true },
        { name: "MBT (lb/bbl)", day1: "10.0", day2: "10.0", changed: false },
        { name: "Sand Content (%)", day1: "Tr", day2: "Tr", changed: false },
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
    }
  ]
};
