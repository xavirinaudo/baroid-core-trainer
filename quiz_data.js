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
        number: "1 of 30",
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
        number: "2 of 30",
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
        number: "3 of 30",
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
        number: "4 of 30",
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
        number: "5 of 30",
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
        number: "6 of 30",
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
        number: "7 of 30",
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
        number: "8 of 30",
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
        number: "9 of 30",
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
        number: "10 of 30",
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
        number: "11 of 30",
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
        number: "12 of 30",
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
        number: "13 of 30",
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
        number: "14 of 30",
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
        number: "15 of 30",
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
        number: "16 of 30",
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
        number: "17 of 30",
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
        number: "18 of 30",
        type: "multiple",
        question: "Given a mud check where pH drops from 10.0 to 8.3, Pm drops from 1.5 to 0.4, Pf/Mf drops from 1.0/1.8 to 0.1/0.2, chlorides remain at 300, hardness drops to 17, and rheology/gels increase with H2S gas present:\nWhat is the contamination and its primary treatment? (select all applicable answers)",
        options: [
          { value: "h2s_scavenger", label: "Contamination: Hydrogen sulfide (H2S) gas | Treatment: H2S Scavenger" },
          { value: "temp_dilution", label: "Contamination: High Temperature | Treatment: Dilution" },
          { value: "salt_dilution", label: "Contamination: Salt | Treatment: Dilution" },
          { value: "anh_soda", label: "Contamination: Anhydrite | Treatment: Soda ash" }
        ],
        answer: ["h2s_scavenger"],
        explanation: "H2S gas reacts with water and mud components, causing pH/alkalinity/hardness to drop and gels to rise. The primary treatment is adding an H2S scavenger (zinc carbonate or zinc oxide)."
      },
      {
        id: "hw11_q19",
        number: "19 of 30",
        type: "multiple",
        question: "Given a mud check where flow line temperature increases from 120 to 185, weight remains 14.0, rheology/gels increase, API filtrate increases, pH drops from 10.0 to 9.1, and Pf/Mf drops from 1.0/1.8 to 0.7/1.1:\nWhat is the contamination and its primary treatment? (select all applicable answers)",
        options: [
          { value: "temp_dilution", label: "Contamination: High temperature | Treatment: Dilution" },
          { value: "salt_dilution", label: "Contamination: Salt | Treatment: Dilution" },
          { value: "anh_soda", label: "Contamination: Anhydrite | Treatment: Soda ash" },
          { value: "cement_bicarb", label: "Contamination: Cement | Treatment: Sodium bicarbonate" }
        ],
        answer: ["temp_dilution"],
        explanation: "High flow line temperature causes thermal flocculation of clays, resulting in increased rheology and fluid loss. Treatment is dilution with base fluid to compensate evaporation."
      },
      {
        id: "hw11_q20",
        number: "20 of 30",
        type: "multiple",
        question: "Given a mud check where chlorides jump from 300 to 11000 mg/L, hardness increases to 150, pH drops from 10.0 to 9.9, Pm drops from 1.5 to 1.3, Pf/Mf drops from 1.0/1.8 to 0.7/1.4, and rheology/gels/filtrate increase:\nWhat is the contamination and its primary treatment? (select all applicable answers)",
        options: [
          { value: "salt_dilution", label: "Contamination: Salt (NaCl) | Treatment: Dilution with base fluid" },
          { value: "temp_dilution", label: "Contamination: High temperature | Treatment: Dilution" },
          { value: "anh_soda", label: "Contamination: Anhydrite | Treatment: Soda ash" },
          { value: "fresh_weight", label: "Contamination: Fresh water | Treatment: Weight up" }
        ],
        answer: ["salt_dilution"],
        explanation: "A massive increase in chlorides and filtrate loss accompanied by flocculation indicates salt contamination. The recommended treatment is dilution with fresh water and polymers."
      },
      {
        id: "hw11_q21",
        number: "21 of 30",
        type: "multiple",
        question: "Given a mud check where hardness increases from 100 to 800 mg/L, pH drops from 10.0 to 8.3, Pm/Pf drop, and rheology/gels/filtrate increase:\nWhat is the contamination and its primary treatment? (select all applicable answers)",
        options: [
          { value: "anh_soda", label: "Contamination: Anhydrite (CaSO4) | Treatment: Soda ash" },
          { value: "cement_bicarb", label: "Contamination: Cement | Treatment: Sodium bicarbonate" },
          { value: "salt_dilution", label: "Contamination: Salt | Treatment: Dilution" },
          { value: "temp_dilution", label: "Contamination: High temperature | Treatment: Dilution" }
        ],
        answer: ["anh_soda"],
        explanation: "Anhydrite yields calcium and sulfate ions, raising hardness to 800 mg/L, dropping pH to 8.3, and causing flocculation. Soda ash (Na2CO3) precipitates calcium as CaCO3."
      },
      {
        id: "hw11_q22",
        number: "22 of 30",
        type: "multiple",
        question: "Given a mud check where mud weight drops from 14.0 to 13.6, MBT drops from 17 to 13, chlorides increase to 6000 mg/L, pH drops to 8.3, and filtrate increases:\nWhat is the contamination and its primary treatment? (select all applicable answers)",
        options: [
          { value: "saltwater_treatment", label: "Contamination: Salt water influx | Treatment: Dilute system with water or swap to a salt saturated system" },
          { value: "freshwater_weight", label: "Contamination: Fresh water influx | Treatment: Stop the influx weighting up" },
          { value: "anh_soda", label: "Contamination: Anhydrite | Treatment: Soda ash" },
          { value: "cement_bicarb", label: "Contamination: Cement | Treatment: Sodium bicarbonate" }
        ],
        answer: ["saltwater_treatment"],
        explanation: "Drop in mud weight, drop in MBT (dilution of clay), increase in chlorides to 6000, and drop in pH indicates a salt water flow. The treatment is increasing density to stop the flow and diluting."
      },
      {
        id: "hw11_q23",
        number: "23 of 30",
        type: "calculation_direct",
        inputs: {
          "Day 1 Pf / Mf": "1.0 / 1.8",
          "Day 2 Pf / Mf": "2.2 / 7.4",
          "Day 2 pH / Hardness": "8.3 / 200 mg/L",
          "Lime Factor": "0.00043 (Lime)"
        },
        answer: {
          contaminant: "Bicarbonates",
          chemical: "Lime",
          concentration: 1.5738
        },
        explanation: "Pf/Mf Day 2 has 2Pf = 4.4 < Mf = 7.4. Carbonate = 1200 * Pf = 2640 mg/L, Bicarbonate = 1220 * (Mf - 2Pf) = 1220 * 3 = 3660 mg/L. Original bicarbonate was 0 (2Pf = 2.0 > Mf = 1.8). Bicarbonate contaminated = 3660 mg/L. Treat with Lime (factor 0.00043): Lime = 3660 * 0.00043 = 1.5738 lb/bbl."
      },
      {
        id: "hw11_q24",
        number: "24 of 30",
        type: "calculation_direct",
        inputs: {
          "Day 1 pH / Hardness": "10.0 / 100 mg/L",
          "Day 2 pH / Hardness": "12.1 / 800 mg/L",
          "Day 2 Pf / Mf": "4.4 / 4.5",
          "Soda Bicarb Factor": "0.000734"
        },
        answer: {
          contaminant: "Cement",
          chemical: "Sodium bicarbonate",
          concentration: 0.5138
        },
        explanation: "High pH (12.1), Pm (6.7), and hardness (800) indicates cement contamination. The calcium to be treated is 800 - 100 = 700 mg/L. Treat with Sodium bicarbonate (NaHCO3) with conversion factor 0.000734: Conc = 700 * 0.000734 = 0.5138 lb/bbl."
      },
      {
        id: "hw11_q25",
        number: "25 of 30",
        type: "multiple",
        question: "Given a mud check where mud weight drops from 14.0 to 13.6, viscosity/gels drop, chlorides drop from 1200 to 600, hardness drops from 100 to 80, and pH drops from 10.0 to 9.3:\nWhat is the contamination and the first action/chemical that should be added to control it? (select all applicable answers)",
        options: [
          { value: "fresh_weight", label: "Contamination: Fresh water influx | Action: Stop the influx weighting up" },
          { value: "salt_dilution", label: "Contamination: Salt water influx | Action: Dilution" },
          { value: "cement_bicarb", label: "Contamination: Cement | Action: Add sodium bicarbonate" }
        ],
        answer: ["fresh_weight"],
        explanation: "Drops in weight, rheology, chlorides, hardness, and pH indicates fresh water dilution (leaks or water flow). The first step is to increase density (weight up) to stop the influx."
      },
      {
        id: "hw11_q26",
        number: "26 of 30",
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
        id: "hw11_q27",
        number: "27 of 30",
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
        id: "hw11_q28",
        number: "28 of 30",
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
        id: "hw11_q29",
        number: "29 of 30",
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
        id: "hw11_q30",
        number: "30 of 30",
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
};
