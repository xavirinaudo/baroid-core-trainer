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
        answer: ["electrolytes", "mw", "charge", "ph"],
        explanation: "Polymer performance depends on molecular weight, polymer charge, water pH, temperature, and electrolytes in solution (salts shield polymer charges, causing chains to coil). Biological attack degrade polymers over time but is not considered a primary performance factor here. Color and turbidity do not affect performance."
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
  },
  homework_13: {
    title: "Homework 13: Non-Aqueous Fluids (NAF)",
    description: "Practice questions about Non-Aqueous Fluids (NAF) and Invert Emulsion Fluids (IEF) based on the Baroid Core guide, covering base fluids, emulsion chemistry, retort calculations, and waste management.",
    questions: [
      {
        id: "hw13_q1",
        number: "1 of 34",
        type: "multiple",
        question: "Select the advantages of Non-aqueous fluids over water based fluids:",
        options: [
          { value: "better_tolerance_to_contaminants", label: "Better tolerance to contaminants" },
          { value: "excellent_lubricity", label: "Excellent lubricity" },
          { value: "better_hole_gauge", label: "Better hole gauge" },
          { value: "superior_temperature_stability", label: "Superior temperature stability" },
          { value: "better_hole_instability", label: "Better hole instability" },
          { value: "environmentally_friendly", label: "Environmentally friendly" },
          { value: "promotes_corrosion", label: "Promotes corrosion" }
        ],
        answer: [
          "better_tolerance_to_contaminants",
          "excellent_lubricity",
          "superior_temperature_stability"
        ],
        explanation: "According to the Baroid Core Participant Guide Page 208, the considerable advantages of NAF over WBF are: Better hole stability (resulting in better hole gauge), more tolerant to contaminants, superior temperature stability, excellent lubricity, and provides corrosion resistance."
      },
      {
        id: "hw13_q2",
        number: "2 of 34",
        type: "single",
        question: "What is the major difference between High Performance NAF's and Conventional NAF's?",
        options: [
          { value: "extreme_temp_stability", label: "Extreme temperature stability" },
          { value: "no_diesel_in_base", label: "No diesel in the base fluid" },
          { value: "no_commercial_clays_lignites", label: "No commercial clays or lignites added to the system" },
          { value: "less_water_content", label: "Less water content in the fluid" }
        ],
        answer: "no_commercial_clays_lignites",
        explanation: "As stated on Page 210 of the Participant Guide, High Performance NAF systems (HPIEF) are clay-free. They are free of organophilic clays and organophilic lignites, utilizing polymer technology instead."
      },
      {
        id: "hw13_q3",
        number: "3 of 34",
        type: "multiple",
        question: "The most common types of base fluids of Non Aqueous fluids are:",
        options: [
          { value: "diesel_oil", label: "Diesel Oil" },
          { value: "filtered_brines", label: "Filtered brines" },
          { value: "non_petroleum_oil", label: "Non Petroleum oil" },
          { value: "mineral_oil", label: "Mineral Oil" }
        ],
        answer: [
          "diesel_oil",
          "non_petroleum_oil",
          "mineral_oil"
        ],
        explanation: "Participant Guide Page 27 lists the three types of base fluids for Non-Aqueous Fluids: (a) Diesel, (b) Mineral Oil, and (c) Non-petroleum oil (synthetics, such as esters or isomerized olefins)."
      },
      {
        id: "hw13_q4",
        number: "4 of 34",
        type: "multiple",
        question: "Which of the following contributes to the discontinuous phase of an NAF (select all applicable answers)?",
        options: [
          { value: "organophilic_lignites", label: "Organophilic lignites" },
          { value: "drilled_solids", label: "Drilled solids" },
          { value: "oil", label: "Oil" },
          { value: "water", label: "Water" },
          { value: "commercial_clays", label: "Commercial clays" }
        ],
        answer: [
          "organophilic_lignites",
          "drilled_solids",
          "water",
          "commercial_clays"
        ],
        explanation: "As described on Page 211, the discontinuous (internal) phase of an NAF is composed of water/brine and suspended solids (weight materials, commercial clays, organophilic lignites, and drilled solids). Oil forms the continuous (external) phase."
      },
      {
        id: "hw13_q5",
        number: "5 of 34",
        type: "single",
        question: "Isomerized Olefin base fluids outperform oil, ester, and ester blend base fluids in extreme temperatures.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "As explained on Page 208, synthetic base fluids like Isomerized Olefins (IO) provide superior temperature stability compared to ester-based fluids, which tend to hydrolyze at elevated temperatures."
      },
      {
        id: "hw13_q6",
        number: "6 of 34",
        type: "matching",
        question: "Select the correct fluid categories for each type:",
        pairs: {
          "Conventional": "NAF",
          "High performance": "IEF"
        },
        options: ["NAF", "IEF", "WBF"],
        keepKeysOrder: true,
        explanation: "The Baroid Family of Non-Aqueous Fluids comprises conventional Non-Aqueous Fluids (NAF) and high-performance Invert Emulsion Fluids (IEF)."
      },
      {
        id: "hw13_q7",
        number: "7 of 34",
        type: "single",
        question: "Emulsifiers are used in NAF's for which of the following purposes?",
        options: [
          { value: "limit_sand", label: "Limiting sand content" },
          { value: "maintain_emulsion", label: "Creating and maintaining a water in oil emulsion" },
          { value: "lower_asg", label: "Lowering your ASG" }
        ],
        answer: "maintain_emulsion",
        explanation: "According to Page 213, emulsifiers reduce the interfacial tension between the oil and water phases, allowing water to remain emulsified as tiny droplets inside the continuous oil phase."
      },
      {
        id: "hw13_q8",
        number: "8 of 34",
        type: "single",
        question: "A product is considered organophillic when it has been treated with amines to make them oil-dispersible.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "Page 214 states that organophilic clays are reacted with certain fatty amines to make them oil-dispersible, allowing them to swell and disperse in the continuous oil phase."
      },
      {
        id: "hw13_q9",
        number: "9 of 34",
        type: "single",
        question: "The whole fluid chloride and whole fluid calcium content are maintained to directly affect which NAF property?",
        options: [
          { value: "wps", label: "Water phase salinity" },
          { value: "owr", label: "Oil to water ratio" },
          { value: "solids", label: "Solids content" }
        ],
        answer: "wps",
        explanation: "As documented on Page 212, whole fluid chloride and whole fluid calcium concentrations are monitored and adjusted to directly control the Water Phase Salinity (WPS), which prevents shale swelling by matching shale activity."
      },
      {
        id: "hw13_q10",
        number: "10 of 34",
        type: "single",
        question: "If the content by volume of water increases, the viscosity of the fluid decreases causing the fluid to be thinner.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "Increasing the internal water phase volume increases the density of water droplets, resulting in higher droplet-to-droplet friction and increasing emulsion viscosity (making it thicker)."
      },
      {
        id: "hw13_q11",
        number: "11 of 34",
        type: "single",
        question: "Emulsifiers target the interfacial tension between:",
        options: [
          { value: "two_immiscible_fluids", label: "Two immiscible fluids" },
          { value: "solids_and_solids", label: "Solids and Other solids" },
          { value: "wellbore_and_fluid", label: "The wellbore and the drilling fluid" },
          { value: "solids_and_fluids", label: "Solids and fluids" }
        ],
        answer: "two_immiscible_fluids",
        explanation: "Page 213 explains that emulsifiers act as surface-active agents that lower the interfacial tension between the two immiscible liquids (oil and water) to prevent phase separation."
      },
      {
        id: "hw13_q12",
        number: "12 of 34",
        type: "single",
        question: "The \"salt\" in an NAF is contained in which of the following?",
        options: [
          { value: "continuous_phase", label: "The continuous phase" },
          { value: "oil_phase", label: "The oil phase" },
          { value: "solids_phase", label: "The solids phase" },
          { value: "water_phase", label: "The water phase" }
        ],
        answer: "water_phase",
        explanation: "The salt (typically Calcium Chloride) is dissolved in the emulsified water droplets (the dispersed water phase) to form a high-salinity brine phase."
      },
      {
        id: "hw13_q13",
        number: "13 of 34",
        type: "single",
        question: "Wetting Agents target the interfacial tension between solids and liquid.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "Wetting agents are surfactants that reduce the interfacial tension between solids and liquids, ensuring weighting agents and drilled solids remain oil-wet."
      },
      {
        id: "hw13_q14",
        number: "14 of 34",
        type: "multiple",
        question: "According to the API guidelines, rheological test on an NAF are performed at which temperatures? (select all applicable answers)",
        options: [
          { value: "room_temp", label: "Room temperature" },
          { value: "49f", label: "49 F" },
          { value: "bht", label: "Bottom hole temperature" },
          { value: "120f", label: "120 F" },
          { value: "150f", label: "150F" },
          { value: "66f", label: "66 F" }
        ],
        answer: [
          "120f",
          "150f"
        ],
        explanation: "According to API RP 13B-2 guidelines, rheological properties of non-aqueous fluids are tested at 120°F (49°C) and 150°F (66°C) to simulate downhole temperatures."
      },
      {
        id: "hw13_q15",
        number: "15 of 34",
        type: "single",
        question: "Invert Emulsion means:",
        options: [
          { value: "water_in_oil", label: "Water emulsified into a non-aqueous based fluid" },
          { value: "oil_in_water", label: "Oil emulsified in water" },
          { value: "solids_in_water", label: "Solids emulsified in water" }
        ],
        answer: "water_in_oil",
        explanation: "An invert emulsion refers to a system where the continuous phase is a non-aqueous base fluid (oil) and the discontinuous phase is emulsified water (brine)."
      },
      {
        id: "hw13_q16",
        number: "16 of 34",
        type: "single",
        question: "Organophillic clays and lignites are not used in clay-free fluids because they can negatively impact drilling performance and reservoir producibility.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "Page 210 notes that eliminating commercial clays and lignites (clays/lignites free) avoids formation damage to the reservoir, optimizing reservoir productivity and preventing excessive ECD."
      },
      {
        id: "hw13_q17",
        number: "17 of 34",
        type: "single",
        question: "When working with Non-Aqueous fluids, one of the main concerns is the environmental impact of the systems. Environmental responsibility and sustainability is becoming a critical factor in drilling practices.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "Managing oil contamination on drill cuttings and fluid spills is a major environmental concern associated with NAF operations, making sustainability a critical design factor."
      },
      {
        id: "hw13_q18",
        number: "18 of 34",
        type: "single",
        question: "When dealing with NAF and environmental challenges, there are several aspects to consider:",
        options: [
          { value: "perf_regs_cost_risk", label: "Fluid performance, regulations, cost management and risk mitigation" },
          { value: "perf_regs_cost_waste", label: "Fluid performance, regulations, cost management and waste volume" },
          { value: "perf_regs_waste_risk", label: "Fluid performance, regulations, waste management and risk mitigation" }
        ],
        answer: "perf_regs_waste_risk",
        explanation: "Page 211 states that NAF environmental challenges require balancing fluid performance, discharge regulations, waste management practices, and environmental risk mitigation."
      },
      {
        id: "hw13_q19",
        number: "19 of 34",
        type: "single",
        question: "Select the strategy that fits the definition: 'maximizing drilling efficiency while minimizing environmental liability for the customer'",
        options: [
          { value: "solids_control", label: "Solids Control" },
          { value: "drilling_waste_management", label: "Drilling Waste Management" },
          { value: "fluid_conditioning", label: "Fluid Conditioning" }
        ],
        answer: "drilling_waste_management",
        explanation: "Drilling Waste Management is the strategy of maximizing drilling efficiency while minimizing environmental liability for the customer through solids control, cuttings treatment, and disposal."
      },
      {
        id: "hw13_q20",
        number: "20 of 34",
        type: "calculation",
        question: "Given the following results from a retort analysis, calculate the NAF/Water ratio: Retort Oil = 6.4ml, Retort Water = 1.6ml",
        inputs: {
          "Retort Oil": "6.4 ml",
          "Retort Water": "1.6 ml"
        },
        answer: {
          "nap_ratio": 80,
          "water_ratio": 20
        },
        explanation: "Total liquid = 6.4 mL + 1.6 mL = 8.0 mL.\nOil % = (6.4 / 8.0) * 100 = 80%\nWater % = (1.6 / 8.0) * 100 = 20%\nTherefore, the Non-Aqueous Phase (NAP) to Water ratio is 80 / 20."
      },
      {
        id: "hw13_q21",
        number: "21 of 34",
        type: "single",
        question: "The content of Low gravity solids is not a concern in non aqueous fluids.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "Low gravity solids (LGS) must be strictly controlled in NAFs because their accumulation increases plastic viscosity (PV) and gel strengths, causing high circulation pressures and potential mud loss."
      },
      {
        id: "hw13_q22",
        number: "22 of 34",
        type: "single",
        question: "One of the best advantages of the BaraPure® system is that it has a lower environmental impact that Other NAF because it does not contain added salts.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "BaraPure uses a salt-free water phase, which eliminates chloride toxicity and significantly reduces the environmental impact and disposal costs compared to NAFs containing calcium chloride salts."
      },
      {
        id: "hw13_q23",
        number: "23 of 34",
        type: "single",
        question: "All High performance fluids are stable up to 450F.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "Different high-performance NAF systems have different temperature ratings. BaraECD is stable to 300°F (149°C), ENCORE to 350°F (177°C), and only specialized systems are designed for higher temperature ranges."
      },
      {
        id: "hw13_q24",
        number: "24 of 34",
        type: "single",
        question: "The Non-Aqueous fluid system that contains an enhanced suspension package and has superior rheological properties is called:",
        options: [
          { value: "barapure", label: "BaraPure®" },
          { value: "baraecd", label: "BaraECD®" },
          { value: "encore", label: "ENCORE®" },
          { value: "baranext", label: "BaraNext" }
        ],
        answer: "baraecd",
        explanation: "BaraECD is a high-performance system designed with an enhanced polymer suspension package to provide superior rheological control, low ECD, and excellent hole cleaning."
      },
      {
        id: "hw13_q25",
        number: "25 of 34",
        type: "single",
        question: "In non-aqueous systems a low alkalinity is desired, to avoid corrosion.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "A high alkalinity is required in NAFs (typically maintained via lime) to neutralize acid gases (CO2/H2S) that might enter the fluid. If not neutralized, these gases would break the emulsion and cause severe corrosion."
      },
      {
        id: "hw13_q26",
        number: "26 of 34",
        type: "single",
        question: "Non-Aqueous fluids are usually built in the rigsite without mayor logistical concerns.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "Preparing NAFs requires high-shear mixing equipment to properly emulsify the water phase into oil. They are almost always built at a dedicated Liquid Mud Plant (LMP) and shipped to the rig site, requiring substantial logistical planning."
      },
      {
        id: "hw13_q27",
        number: "27 of 34",
        type: "single",
        question: "What do conventional non-aqueous fluids (NAF) contain in their formulation?",
        options: [
          { value: "organophilic_clays_lignites", label: "Organophilic clays and lignites" },
          { value: "water_soluble_polymers", label: "Water-soluble polymers and starches" },
          { value: "synthetic_polymers_only", label: "Synthetic polymers and silica" },
          { value: "glycols_and_salts", label: "Glycols and inorganic salts" }
        ],
        answer: "organophilic_clays_lignites",
        explanation: "According to the Baroid Family guide, Conventional Non-Aqueous Fluid Systems contain organophilic clays and lignites in their formulation."
      },
      {
        id: "hw13_q28",
        number: "28 of 34",
        type: "single",
        question: "High-Performance Invert Emulsion Fluids (HPIEF) do NOT contain which of the following in their formulation?",
        options: [
          { value: "organophilic_clays_lignites", label: "Organophilic clay and organophilic lignite" },
          { value: "base_fluids", label: "Non-aqueous base fluids" },
          { value: "emulsifiers", label: "Emulsifiers and wetting agents" },
          { value: "weighting_materials", label: "Barite and weighting materials" }
        ],
        answer: "organophilic_clays_lignites",
        explanation: "High-Performance Invert Emulsion Fluids (HPIEF) are clay-free systems, meaning they are formulated to be free of organophilic clay and organophilic lignite, utilizing polymer technology instead."
      },
      {
        id: "hw13_q29",
        number: "29 of 34",
        type: "multiple",
        question: "According to the Baroid Oil-Based Fluid Systems classification, which trade names correspond to Conventional systems?",
        options: [
          { value: "enviromul", label: "ENVIROMUL®" },
          { value: "invermul", label: "INVERMUL®" },
          { value: "xp07", label: "XP-07®" },
          { value: "baraxcel", label: "BaraXcel™" },
          { value: "baraecd", label: "BaraECD®" }
        ],
        answer: [
          "enviromul",
          "invermul",
          "xp07"
        ],
        explanation: "Based on the Baroid Oil-Based Fluid Systems chart, Conventional systems include ENVIROMUL®, INVERMUL®, and XP-07®."
      },
      {
        id: "hw13_q30",
        number: "30 of 34",
        type: "multiple",
        question: "According to the Baroid Oil-Based Fluid Systems classification, which trade names correspond to High Performance systems?",
        options: [
          { value: "enviromul", label: "ENVIROMUL®" },
          { value: "invermul", label: "INVERMUL®" },
          { value: "xp07", label: "XP-07®" },
          { value: "baraxcel", label: "BaraXcel™" },
          { value: "baraecd", label: "BaraECD®" }
        ],
        answer: [
          "baraxcel",
          "baraecd"
        ],
        explanation: "Based on the Baroid Oil-Based Fluid Systems chart, High Performance systems include BaraXcel™ and BaraECD®."
      },
      {
        id: "hw13_q31",
        number: "31 of 34",
        type: "matching",
        question: "Match the High-Performance fluid level with the type of barite used in its formulation:",
        pairs: {
          "Level 1": "Barite API",
          "Level 2": "Fine Barite",
          "Level 3": "Micronized barite"
        },
        options: ["Barite API", "Fine Barite", "Micronized barite"],
        keepKeysOrder: true,
        explanation: "High-Performance drilling fluids are categorized into levels based on the type/size of barite utilized: Level 1 uses standard API Barite, Level 2 utilizes Fine Barite, and Level 3 is formulated with Micronized Barite."
      },
      {
        id: "hw13_q32",
        number: "32 of 34",
        type: "multiple",
        question: "What are the environmental considerations when dealing with Non-Aqueous Fluids (NAF)?",
        options: [
          { value: "fluid_performance", label: "Fluid performance" },
          { value: "regulations", label: "Regulations" },
          { value: "risk_mitigation", label: "Risk mitigation" },
          { value: "waste_management_expenses", label: "Waste Management and Expenses" },
          { value: "fluid_formulation_viscosity", label: "Fluid formulation chemistry and polymer viscosity" },
          { value: "rig_capacity_procedures", label: "Operator preferences and standard rig procedures" },
          { value: "borehole_stabilization", label: "Borehole stabilization and mechanical cleaning" }
        ],
        answer: [
          "fluid_performance",
          "regulations",
          "risk_mitigation",
          "waste_management_expenses"
        ],
        explanation: "According to the Baroid guide, the key aspects to balance when addressing environmental challenges with NAFs are: fluid performance, discharge regulations, waste management and expenses, and environmental risk mitigation."
      },
      {
        id: "hw13_q33",
        number: "33 of 34",
        type: "matching",
        question: "Match each surfactant component term with its correct definition:",
        pairs: {
          "Hydrophilic": "Having an affinity for water (water-loving)",
          "Hydrophobic": "Lacking affinity for water (water-fearing / oil-loving)"
        },
        options: [
          "Having an affinity for water (water-loving)",
          "Lacking affinity for water (water-fearing / oil-loving)",
          "Dissolving completely in both water and oil without phase separation",
          "Attracting metal surfaces to promote rust and corrosion"
        ],
        keepKeysOrder: true,
        explanation: "Surfactants (emulsifiers and wetting agents) contain a hydrophilic (water-loving) polar head group and a hydrophobic (water-fearing / lipophilic) non-polar tail group to stabilize the oil-water interface."
      },
      {
        id: "hw13_q34",
        number: "34 of 34",
        type: "single",
        question: "Select the correct definition of a wetting agent:",
        options: [
          { value: "correct_def", label: "A wetting agent is substance added to a liquid to lower its surface tension and thus increase its ability to spread across or penetrate into a solid." },
          { value: "flocculant_def", label: "A wetting agent is a polymer added to a fluid to encapsulate and flocculate colloidal clays, preventing hydration and dispersion." },
          { value: "salt_def", label: "A wetting agent is an inorganic salt added to the continuous phase of an emulsion to match the water phase activity of the shales." }
        ],
        answer: "correct_def",
        explanation: "According to the definition, a wetting agent is a substance added to a liquid to lower its surface tension, thereby increasing its ability to spread across or penetrate into a solid (making the solid oil-wet in NAF systems)."
      }
    ]
  },homework_14: {
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
  },homework_15: {
    title: "Homework 15: NAF Formulations & Product Functions",
    description: "Practice questions about NAF mixing sequences, product functions (INVERMUL, GELTONE II, etc.), alkalinity additions, salinity, and calculations step order.",
    questions: [
      {
        id: "hw15_q1",
        number: "1 of 20",
        type: "matching",
        question: "Organize in the right order the steps to perform the calculation of materials required to build a Non Aqueous Fluid",
        pairs: {
          "1st Step": "Calculate volume and ratio mass of all additives",
          "2nd Step": "Calculate density of the fluid phase",
          "3rd Step": "Calculate the volume and quantity of the weighting agent",
          "4th Step": "Calculate the volume of base fluid",
          "5th Step": "Calculate the volume of water and pounds/sacks of salt"
        },
        keepKeysOrder: true,
        explanation: "The correct sequence for NAF engineering calculations is: (1) Additives volume/mass ratio, (2) Fluid phase density, (3) Weighting agent quantity, (4) Base fluid volume, and (5) Water and salt volumes."
      },
      {
        id: "hw15_q2",
        number: "2 of 20",
        type: "single",
        question: "What is the function of BARABLOK™ in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "filtration_control",
        explanation: "BARABLOK™ is a synthetic resin-based additive used for high-temperature, high-pressure (HTHP) filtration control in non-aqueous fluids."
      },
      {
        id: "hw15_q3",
        number: "3 of 20",
        type: "single",
        question: "What is the function of GELTONE® II in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "viscosifier",
        explanation: "GELTONE® II is an organophilic clay used primarily to provide viscosity and suspension in non-aqueous fluids."
      },
      {
        id: "hw15_q4",
        number: "4 of 20",
        type: "single",
        question: "What is the function of RM-63™ in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "rheology_modifier",
        explanation: "RM-63™ is a synthetic polymer-based rheology modifier used to provide low-shear-rate viscosity and suspension profile without excessively increasing plastic viscosity."
      },
      {
        id: "hw15_q5",
        number: "5 of 20",
        type: "single",
        question: "What is the function of INVERMUL® in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "emulsifier",
        explanation: "INVERMUL® is the primary emulsifier in invert emulsion systems, responsible for establishing a stable oil-external emulsion."
      },
      {
        id: "hw15_q6",
        number: "6 of 20",
        type: "single",
        question: "What is the function of DURATONE® HT in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "filtration_control",
        explanation: "DURATONE® HT is a specially treated organophilic lignite used for filtration control and thermal stability in non-aqueous fluids."
      },
      {
        id: "hw15_q7",
        number: "7 of 20",
        type: "single",
        question: "What is the function of EZ MUL® NT in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "emulsifier",
        explanation: "EZ MUL® NT serves as the secondary emulsifier and oil-wetting agent in invert emulsion fluids, helping stabilize the emulsion and ensuring drilling solids remain oil-wet."
      },
      {
        id: "hw15_q8",
        number: "8 of 20",
        type: "single",
        question: "What is the function of SUSPENTONE™ in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "suspension_agent",
        explanation: "SUSPENTONE™ is an organophilic clay suspension agent formulated to prevent barite sag and improve sag resistance without building excessive gels."
      },
      {
        id: "hw15_q9",
        number: "9 of 20",
        type: "single",
        question: "What is the function of DRILTREAT® in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "wetting_agent",
        explanation: "DRILTREAT® is a lecithin-based oil-wetting agent used to wet weighting agents and drilled solids, preventing them from becoming water-wet."
      },
      {
        id: "hw15_q10",
        number: "10 of 20",
        type: "single",
        question: "What is the function of OMC® 42™ in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "thinner",
        explanation: "OMC® 42™ is an oil mud conditioner designed as a thinner to reduce high viscosity and gel strengths in non-aqueous fluids."
      },
      {
        id: "hw15_q11",
        number: "11 of 20",
        type: "single",
        question: "What is the function of RHEMOD™ L in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "viscosifier",
        explanation: "RHEMOD™ L is a liquid viscosifier that provides viscosity and gel strength adjustments for low-shear-rate viscosity improvements."
      },
      {
        id: "hw15_q12",
        number: "12 of 20",
        type: "multiple",
        question: "Why is lime added into Non Aqueous fluids?",
        options: [
          { value: "activate_emulsifiers", label: "To activate some emulsifiers" },
          { value: "decrease_alkalinity", label: "To decrease the alkalinity" },
          { value: "increase_calcium", label: "To increase the content of calcium" },
          { value: "increase_salinity", label: "To increase the salinity" },
          { value: "increase_alkalinity", label: "To increase the alkalinity" },
          { value: "activate_viscosifiers", label: "To activate some viscosifiers" }
        ],
        answer: ["activate_emulsifiers", "increase_alkalinity"],
        explanation: "Lime (Calcium Hydroxide) is added to provide alkalinity and to react with organic acid emulsifiers (such as INVERMUL) to form active calcium soaps (the emulsification surfactants)."
      },
      {
        id: "hw15_q13",
        number: "13 of 20",
        type: "multiple",
        question: "Why is calcium chloride added into Non Aqueous fluids?",
        options: [
          { value: "increase_alkalinity", label: "To increase the alkalinity" },
          { value: "increase_salinity", label: "To increase the salinity" },
          { value: "activate_thinners", label: "Activate some thinners" },
          { value: "control_osmotic", label: "Control osmotic exchange with the formation" },
          { value: "lower_fluid_loss", label: "Lower the fluid loss into the formation" }
        ],
        answer: ["increase_salinity", "control_osmotic"],
        explanation: "Calcium Chloride (CaCl2) is dissolved in the brine phase to increase salinity and lower the water chemical activity, enabling osmotic control to prevent shales from hydrating or swelling."
      },
      {
        id: "hw15_q14",
        number: "14 of 20",
        type: "single",
        question: "Which of the following options are true about the properties of premium diesel",
        options: [
          { value: "sg_0_80", label: "SG= 0.80; density = 6.7ppg" },
          { value: "sg_0_84", label: "SG= 0.84; density = 7ppg" },
          { value: "sg_0_86", label: "SG= 0.86; density = 7.18ppg" },
          { value: "sg_0_82", label: "SG= 0.82; density = 6.84ppg" }
        ],
        answer: "sg_0_84",
        explanation: "Standard premium diesel used in drilling formulations has a Specific Gravity (SG) of 0.84 and a density of approximately 7.0 lb/gal (7.0 ppg)."
      },
      {
        id: "hw15_q15",
        number: "15 of 20",
        type: "single",
        question: "Which of the following products is recommended to be added into NAF, when extra barite is added to a NAF?",
        options: [
          { value: "omc_42", label: "OMC® 42™" },
          { value: "lime", label: "Lime" },
          { value: "driltreat", label: "DRILTREAT®" },
          { value: "barablok", label: "BARABLOK™" },
          { value: "all_of_above", label: "All of the above" },
          { value: "none_of_above", label: "None of the above" }
        ],
        answer: "driltreat",
        explanation: "When adding barite to increase density, DRILTREAT® (a wetting agent) is added to ensure that the new barite surfaces are oil-wet and do not absorb water, preventing water-wetting issues."
      },
      {
        id: "hw15_q16",
        number: "16 of 20",
        type: "matching",
        question: "List in chronological order how the products/materials should be mixed to build a NAF",
        pairs: {
          "1st": "Base Fluid",
          "2nd": "Emulsifiers",
          "3rd": "Alkalinity source",
          "4th": "Brine",
          "5th": "Viscosifiers",
          "6th": "Filtration control agents",
          "7th": "Wetting agent",
          "8th": "Weighting agents"
        },
        keepKeysOrder: true,
        explanation: "The proper NAF mixing sequence is: (1) Base Fluid, (2) Emulsifiers, (3) Alkalinity source (Lime), (4) Brine, (5) Viscosifiers (organophilic clays), (6) Filtration control agents (organophilic lignite), (7) Wetting agent, and (8) Weighting agents (Barite)."
      },
      {
        id: "hw15_q17",
        number: "17 of 20",
        type: "multiple",
        question: "Select all the parameters that are needed to calculate the materials required to build a NAF",
        options: [
          { value: "mixing_time", label: "Mixing time of the fluid" },
          { value: "volume_fluid", label: "Volume of the fluid" },
          { value: "water_salinity", label: "Water phase salinity" },
          { value: "flowline_temp", label: "Flow line temperature" },
          { value: "nap_water_ratio", label: "NAP/Water ratio" },
          { value: "all_of_above", label: "All of the above" }
        ],
        answer: ["volume_fluid", "water_salinity", "nap_water_ratio"],
        explanation: "To calculate NAF formulation volumes, the three fundamental parameters required are the total fluid volume, the target Non-Aqueous Phase to Water ratio (OWR), and the brine water phase salinity (WPS)."
      },
      {
        id: "hw15_q18",
        number: "18 of 20",
        type: "single",
        question: "What is the function of TAU-MOD® in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "viscosifier",
        explanation: "TAU-MOD® is a synthetic polymer viscosifier designed to provide high-shear-rate viscosity and excellent suspension characteristics in clay-free invert emulsion fluids."
      },
      {
        id: "hw15_q19",
        number: "19 of 20",
        type: "single",
        question: "What is the function of BaraVis® in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "rheology_modifier",
        explanation: "BaraVis® is a synthetic polymer rheology modifier used to optimize low-shear-rate viscosity, improve hole cleaning, and stabilize fluid rheology across a wide range of temperatures."
      },
      {
        id: "hw15_q20",
        number: "20 of 20",
        type: "single",
        question: "What is the function of ADAPTA® in a NAF?",
        options: [
          { value: "viscosifier", label: "Viscosifier" },
          { value: "weighting_agent", label: "Weighting agent" },
          { value: "rheology_modifier", label: "Rheology modifier" },
          { value: "emulsifier", label: "Emulsifier" },
          { value: "wetting_agent", label: "Wetting agent" },
          { value: "thinner", label: "Thinner" },
          { value: "suspension_agent", label: "Suspension agent" },
          { value: "filtration_control", label: "Filtration control agent" },
          { value: "alkalinity", label: "Alkalinity source" }
        ],
        answer: "filtration_control",
        explanation: "ADAPTA® is a copolymer filtration control agent designed for high-temperature, high-pressure (HTHP) filtration control in non-aqueous fluids."
      }
    ]
  },homework_16: {
    title: "Homework 16: OWR & Salinity Adjustments (Theory)",
    description: "Practice questions about OWR changes, salinity adjustments, and density effects based on the Baroid Core guide.",
    questions: [
      {
        id: "hw16_q1",
        number: "1 of 3",
        type: "single",
        question: "In order to Change the NAP/Water ratio from 70/30 to 85/15, we need to add water.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "To increase the oil fraction from 70% to 85% (and decrease water from 30% to 15%), we must add base oil (NAP), not water. Adding water would decrease the NAP/water ratio (e.g. towards 60/40)."
      },
      {
        id: "hw16_q2",
        number: "2 of 3",
        type: "single",
        question: "When you Change the NAP/Water ratio, Will the fluid density increase?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ],
        answer: "no",
        explanation: "Base oil (SG ≈ 0.84, density ≈ 7 ppg) is significantly lighter than brine (SG 1.0 to 1.25, density ≈ 8.33 to 10.4 ppg). Increasing the NAP/water ratio (replacing heavy brine with lighter base oil) will decrease the overall fluid density rather than increase it."
      },
      {
        id: "hw16_q3",
        number: "3 of 3",
        type: "multiple",
        question: "In order to increase the WPS of an IEF fluid, which value(s) do we need know? (select all applicable options)",
        options: [
          { value: "desired_salt", label: "Desired concentration of salt" },
          { value: "current_owr", label: "Current NAP/Water ratio" },
          { value: "current_wps", label: "Current water phase salinity" },
          { value: "base_fluid_density", label: "Density of the base fluid" }
        ],
        answer: ["desired_salt", "current_wps"],
        explanation: "To calculate the amount of salt needed to adjust salinity, we must know the current salinity and the target salinity (desired concentration). Base fluid density does not affect the calculation."
      }
    ]
  },  homework_17: {
    title: "Homework 17: NAF Contaminants (Theory)",
    description: "Practice questions about Non-Aqueous Fluid (NAF) contaminants and their treatments based on the Baroid Core guide.",
    questions: [
      {
        id: "hw17_q1",
        number: "1 of 10",
        type: "multiple",
        question: "What are the most common contaminants that may cause negative impact in the IEF systems?",
        options: [
          { value: "drill_solids", label: "Drill solids" },
          { value: "cement", label: "Cement" },
          { value: "water_flows", label: "Water flows" },
          { value: "anhydrite", label: "Anhydrite" },
          { value: "carbonates", label: "Carbonates" }
        ],
        answer: ["drill_solids", "water_flows"],
        explanation: "According to the Baroid Core guide, the most common contaminants that cause a negative impact in IEF (Invert Emulsion Fluid) systems are drilled solids (drill solids) and water flows (water/brine influxes)."
      },
      {
        id: "hw17_q2",
        number: "2 of 10",
        type: "single",
        question: "Drilled solids are basically inert in NAF systems and they are tolerated to a certain limit.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "Drilled solids act basically as inert low gravity solids in NAF systems and are tolerated up to a certain limit before dilution and mechanical removal are required."
      },
      {
        id: "hw17_q3",
        number: "3 of 10",
        type: "single",
        question: "What is the difference between a contamination with fresh water and salt water on IEF system?",
        options: [
          { value: "fresh_drop_more", label: "During a contamination with fresh water, the water phase salinity will drop more than with salt water" },
          { value: "fresh_stay_same", label: "During a contamination with fresh water, the water phase salinity will stay the same and with salt water it will increase" },
          { value: "fresh_drop_less", label: "During a contamination with fresh water, the water phase salinity will drop less than with salt water" },
          { value: "none", label: "None of the above" }
        ],
        answer: "fresh_drop_more",
        explanation: "Incoming fresh water will significantly dilute the salinity of the emulsified brine phase (dropping the WPS more drastically), whereas salt water/brine influxes contain salt themselves, causing a less pronounced drop in WPS depending on the salinity of the incoming water."
      },
      {
        id: "hw17_q4",
        number: "4 of 10",
        type: "multiple",
        question: "What are the recommended treatments if we have contamination with drilled solids on IEF systems?",
        options: [
          { value: "add_lime", label: "Add alkalinity source (lime)" },
          { value: "dilute_fresh_water", label: "Dilute with fresh water" },
          { value: "optimize_solids_control", label: "Optimize solid control equipment" },
          { value: "increase_wps", label: "Increase the WPS" },
          { value: "dilute_nap", label: "Dilute with NAP" }
        ],
        answer: ["optimize_solids_control", "dilute_nap"],
        explanation: "To treat drilled solids contamination in an IEF system, the recommended actions are to optimize solid control equipment performance (mechanical separation) and dilute the system with fresh base oil (Non-Aqueous Phase - NAP)."
      },
      {
        id: "hw17_q5",
        number: "5 of 10",
        type: "multiple",
        question: "How can we identify a contamination with acid gases on an IEF systems?",
        options: [
          { value: "increase_density", label: "Increase of density" },
          { value: "increase_alkalinity", label: "Increase in alkalinity" },
          { value: "drop_filtrate_loss", label: "Drop on filtrate loss" },
          { value: "drop_density", label: "Drop in density" },
          { value: "increase_filtrate_loss", label: "Increase of filtrate loss" },
          { value: "drop_alkalinity", label: "Drop in alkalinity" }
        ],
        answer: ["drop_density", "increase_filtrate_loss", "drop_alkalinity"],
        explanation: "Acid gas (like CO2 or H2S) contamination in an IEF system is diagnosed by a drop in density (due to gas cut), a drop in alkalinity (as the gases consume excess lime), and an increase of filtrate loss (as the emulsion becomes unstable)."
      },
      {
        id: "hw17_q6",
        number: "6 of 10",
        type: "multiple",
        question: "Saturation with salt of an IEF system can cause:",
        options: [
          { value: "breakup_emulsion", label: "Breakup of the emulsion" },
          { value: "water_wetting", label: "Water wetting of solids" },
          { value: "drop_density", label: "Drop of density" },
          { value: "increase_density", label: "Increase of density" },
          { value: "increase_es", label: "Increase of the electrical stability" }
        ],
        answer: ["breakup_emulsion", "water_wetting"],
        explanation: "Excess salt saturation or salt precipitation in an IEF system can cause water wetting of solids (as salt crystals pull water out of emulsion) and eventually lead to the breakup of the invert emulsion."
      },
      {
        id: "hw17_q7",
        number: "7 of 10",
        type: "single",
        question: "Monovalent cation based materials like caustic soda, potassium hydroxide, soda ash or soda bicarbonate should never be added to an NAF system, because it could break the invert emulsion.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "Monovalent cations (Na+, K+) interfere with the divalent calcium-soap emulsifiers (which depend on Ca++). Adding them to an IEF system will destabilize and break the invert emulsion."
      },
      {
        id: "hw17_q8",
        number: "8 of 10",
        type: "single",
        question: "In the case of a contamination event, lime can be used for:",
        options: [
          { value: "lower_wps", label: "Lower the WPS" },
          { value: "combat_acid_gases", label: "Combat acid gases" },
          { value: "increase_rheology", label: "Increase the rheology" },
          { value: "lower_filtration", label: "Lower the filtration control" }
        ],
        answer: "combat_acid_gases",
        explanation: "Lime (Ca(OH)2) provides the calcium alkalinity reserve necessary to neutralize (combat) acid gases like CO2 or H2S, converting them into inert solids (CaCO3 or CaS)."
      },
      {
        id: "hw17_q9",
        number: "9 of 10",
        type: "single",
        question: "In the IEF systems, materials like anhydrite, cement, sodium chloride and potassium chloride should act like any other low gravity solid if the fluid specifications are properly designed.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "If the fluid is properly formulated with sufficient oil-wetting capability, alkalinity (excess lime), and water-in-oil emulsion strength, external materials like anhydrite, cement, or salts will act as inert low-gravity solids without breaking the system."
      },
      {
        id: "hw17_q10",
        number: "10 of 10",
        type: "single",
        question: "If there's a contamination while drilling a salt layer, what would be the main chemical that could help to treat the system?",
        options: [
          { value: "fresh_water", label: "Fresh water" },
          { value: "saturated_brine", label: "Saturated brine" },
          { value: "barite", label: "Barite" },
          { value: "alkalinity_source", label: "Alkalinity source" }
        ],
        answer: "fresh_water",
        explanation: "If there is salt contamination from drilling a salt layer, the salinity (WPS) and chloride concentration in the water phase will spike too high. Adding fresh water dilutes the system, helping to lower the WPS and chlorides back to target specifications."
      }
    ]
  },
  homework_19: {
  "title": "Homework 19: Wellbore Displacements & Brines",
  "description": "Practice questions on completion fluids, brines classifications, displacement planning, objectives, spacer train design, completion tools, and success metrics based on the Baroid Core guide.",
  "questions": [
    {
      "id": "hw19_q1",
      "number": "1 of 30",
      "type": "single",
      "question": "Reservoir fluids can be defined as Fluids we expose to the reservoir, that help prepare, repair, cleanout and completethe wellbore",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "true",
      "explanation": "According to the Baroid Core Participant Guide, Unit 30 (page 250), Reservoir Fluids are defined as: 'Fluids we expose to the reservoir, that help prepare, repair, cleanout and complete the wellbore.'"
    },
    {
      "id": "hw19_q2",
      "number": "2 of 30",
      "type": "single",
      "question": "The goal of completion fluids is to allow a controlled production of the well, maximizing both the flow ofhydrocarbons and safety",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "true",
      "explanation": "According to the Baroid Core Participant Guide, Unit 31 (page 276, Overview), completing the well allows for a controlled production of the well, maximizing both the flow of hydrocarbons and safety."
    },
    {
      "id": "hw19_q3",
      "number": "3 of 30",
      "type": "single",
      "question": "Completions fluids need to provide overbalance to control pressures from the wellbore, and transport solids into thereservoir",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "false",
      "explanation": "While completion fluids must maintain overbalance pressure to control the well, they are designed to be solids-free to minimize formation damage. They act as carrier fluids to transport debris out of the wellbore, rather than transporting solids into the reservoir (page 277)."
    },
    {
      "id": "hw19_q4",
      "number": "4 of 30",
      "type": "single",
      "question": "The displacement from drilling fluid to completion fluid is done by using a series of specially designed spacers",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "true",
      "explanation": "The displacement from drilling fluid to completion fluid is achieved using a displacement train consisting of a series of specially designed pills and spacers pumped in a clearly defined sequence to physically and chemically clean the wellbore (pages 276, 268)."
    },
    {
      "id": "hw19_q5",
      "number": "5 of 30",
      "type": "single",
      "question": "During the completion process, the lower completion assembly is run into the well to the payzone",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "true",
      "explanation": "According to the Baroid Core Participant Guide, Unit 31 (page 276, Overview), after the wellbore is cleaned, the lower completion assembly (screens, liners, packer, etc.) is run into the payzone on the bottom of the tubing."
    },
    {
      "id": "hw19_q6",
      "number": "6 of 30",
      "type": "single",
      "question": "Hydrocarbons will flow to surface during a cased and perforated production within the last casing cemented in thewellbore",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "true",
      "explanation": "In cased and perforated completions, the final casing/liner string is run and cemented in place. Perforations are shot through it to establish flow, meaning production occurs within this last cemented casing string (page 251)."
    },
    {
      "id": "hw19_q7",
      "number": "7 of 30",
      "type": "single",
      "question": "The __________ anchors the tubing, and seals the space between the tubing and the casing",
      "options": [
        {
          "value": "packer",
          "label": "packer"
        },
        {
          "value": "slips",
          "label": "slips"
        },
        {
          "value": "liner",
          "label": "liner"
        },
        {
          "value": "tubing_hanger",
          "label": "tubing hanger"
        }
      ],
      "answer": "packer",
      "explanation": "According to the Baroid Core Participant Guide, Unit 31 (page 277), the tubing is anchored to the wellbore by the packer, which is a device that anchors the pipe and seals the space (annulus) between the tubing and the casing."
    },
    {
      "id": "hw19_q8",
      "number": "8 of 30",
      "type": "multiple",
      "question": "Select the types of completions mentioned in class",
      "options": [
        {
          "value": "sand_control_screen",
          "label": "Sand control screen"
        },
        {
          "value": "uncemented_liner",
          "label": "Uncemented liner"
        },
        {
          "value": "cased_and_perforated",
          "label": "Cased and perforated"
        },
        {
          "value": "gravel_pack",
          "label": "Gravel pack"
        },
        {
          "value": "floating_collar",
          "label": "Floating collar"
        },
        {
          "value": "bareleg_completion",
          "label": "Bareleg completion"
        }
      ],
      "answer": [
        "sand_control_screen",
        "uncemented_liner",
        "cased_and_perforated",
        "gravel_pack"
      ],
      "explanation": "The main completion styles used for wells are uncemented liners, sand control screens, cased and perforated completions, and gravel packs. Floating collars are casing cementing accessories rather than completion types (pages 251, 276)."
    },
    {
      "id": "hw19_q9",
      "number": "9 of 30",
      "type": "single",
      "question": "Cased and perforated is the most common type of completion for oil wells",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "true",
      "explanation": "Cased and perforated completions are the most widely used completion type worldwide for oil and gas wells (page 251)."
    },
    {
      "id": "hw19_q10",
      "number": "10 of 30",
      "type": "matching",
      "question": "Brines can be classified based on their source. Provide examples of each type of them",
      "pairs": {
        "Naturally occurring": "NaCl, NaBr",
        "By-product of commercial processes": "CaCl2",
        "Made from natural minerals": "CsCOOH"
      },
      "explanation": "Brines are classified by their origin/source: naturally occurring (NaCl, NaBr), by-products of commercial processes (CaCl2), or created from natural minerals (CsCOOH) (page 279)."
    },
    {
      "id": "hw19_q11",
      "number": "11 of 30",
      "type": "single",
      "question": "In general, monovalent salts are usually mixed from sacks",
      "options": [
        {
          "value": "yes",
          "label": "Yes"
        },
        {
          "value": "no",
          "label": "No"
        }
      ],
      "answer": "yes",
      "explanation": "According to the Baroid Core Participant Guide, Unit 31 (page 279, 'Brine mixing'), monovalent brines are typically mixed from sacks."
    },
    {
      "id": "hw19_q12",
      "number": "12 of 30",
      "type": "single",
      "question": "In general, divalent salts are usually mixed from sacks",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "false",
      "explanation": "Divalent brines are typically supplied as liquids and diluted from near-saturated single-salt spike fluids rather than mixed from sacks (page 279)."
    },
    {
      "id": "hw19_q13",
      "number": "13 of 30",
      "type": "single",
      "question": "The __________ is used to measure the density of clear brine with no viscosity",
      "options": [
        {
          "value": "hydrometer",
          "label": "hydrometer"
        },
        {
          "value": "mud_balance",
          "label": "mud balance"
        },
        {
          "value": "turbidimeter",
          "label": "turbidimeter"
        },
        {
          "value": "viscometer",
          "label": "viscometer"
        }
      ],
      "answer": "hydrometer",
      "explanation": "Clear brine density (specifically for fluids with no viscosity) is measured using a hydrometer, which is a weighted bulb with a graduated stem that sinks to a depth determined by the fluid's density and temperature (page 280)."
    },
    {
      "id": "hw19_q14",
      "number": "14 of 30",
      "type": "single",
      "question": "The Turbidimeter (NTU) provides a value that can be used as reference to establish how cline a brine is",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "true",
      "explanation": "An NTU (Nephelometric Turbidity Unit) measurement provides a relative value of the brine's solids content that can be used to determine the cleanliness of the brine (page 280). Note: 'cline' is kept from the original question text typo."
    },
    {
      "id": "hw19_q15",
      "number": "15 of 30",
      "type": "single",
      "question": "The higher the NTU reading from the turbidity meter, the cleaner the brine will be",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "false",
      "explanation": "A higher NTU reading indicates a higher total number of suspended particles in the fluid, meaning the brine is less clean, not cleaner (page 280)."
    },
    {
      "id": "hw19_q16",
      "number": "16 of 30",
      "type": "single",
      "question": "The results from a NTU meter can be used to calculate the concentration of solids in suspension in the brine.",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "false",
      "explanation": "A nephelometric turbidity measurement does not indicate the size or specific concentration of solids in suspension; it only provides a relative cleanliness reference (page 280)."
    },
    {
      "id": "hw19_q17",
      "number": "17 of 30",
      "type": "single",
      "question": "All brines are the same and can be handled using the basic PPE",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "false",
      "explanation": "Brines are not all the same; they can cause serious safety hazards (eye damage, skin burns, toxicity) and require specific PPE such as chemical slicker suits, nitrile gloves, and face shields as per their safety data sheets (page 280)."
    },
    {
      "id": "hw19_q18",
      "number": "18 of 30",
      "type": "single",
      "question": "The \u201cProcess of removing from the wellbore one fluid (usually a drilling fluid), and replacing it with another (usually a clean completion fluid)\" is called:",
      "options": [
        {
          "value": "completion",
          "label": "Completion"
        },
        {
          "value": "displacement",
          "label": "Displacement"
        },
        {
          "value": "dewatering",
          "label": "Dewatering"
        },
        {
          "value": "stimulation",
          "label": "Stimulation"
        }
      ],
      "answer": "displacement",
      "explanation": "Wellbore displacement is defined as the process of removing one fluid (such as a drilling fluid) from the wellbore and replacing it with another (such as a clean completion fluid) (page 276, 262)."
    },
    {
      "id": "hw19_q19",
      "number": "19 of 30",
      "type": "multiple",
      "question": "Select all the applicable drilling fluid displacement objectives:",
      "options": [
        {
          "value": "oil_wet_surfaces",
          "label": "Oil wet all well surfaces"
        },
        {
          "value": "establish_clean_env",
          "label": "Establish a clean, non damaging environment for completion"
        },
        {
          "value": "water_wet_surfaces",
          "label": "Water wet all well surfaces"
        },
        {
          "value": "maximize_drilling_fluid_recovery",
          "label": "Maximizing the recovery of drilling fluid;"
        },
        {
          "value": "maximize_fluid_waste",
          "label": "Maximize the production of fluid waste"
        },
        {
          "value": "minimize_fluid_recovered",
          "label": "Minimize the volume of fluid recovered"
        }
      ],
      "answer": [
        "establish_clean_env",
        "water_wet_surfaces",
        "maximize_drilling_fluid_recovery"
      ],
      "explanation": "The objectives of drilling fluid displacement include maximizing drilling fluid recovery, establishing a clean, non-damaging environment for the completion, water-wetting all well surfaces, minimizing rig time, and minimizing fluid waste (page 262)."
    },
    {
      "id": "hw19_q20",
      "number": "20 of 30",
      "type": "multiple",
      "question": "What are the five main requirements to plan a successful completion job?",
      "options": [
        {
          "value": "lab_data",
          "label": "Lab data"
        },
        {
          "value": "hydraulic_data",
          "label": "Hydraulic data"
        },
        {
          "value": "well_data",
          "label": "Well data"
        },
        {
          "value": "financial_data",
          "label": "Financial data"
        },
        {
          "value": "installation_data",
          "label": "Installation data"
        },
        {
          "value": "logistic_data",
          "label": "Logistic data"
        },
        {
          "value": "fluid_data",
          "label": "Fluid data"
        }
      ],
      "answer": [
        "lab_data",
        "hydraulic_data",
        "well_data",
        "installation_data",
        "fluid_data"
      ],
      "explanation": "According to the Baroid Fluids Handbook (page 158), planning an effective displacement operation requires gathering initial data across five main areas: Fluid Data, Well Data, Installation Data, Lab Data, and Hydraulics Simulation (or hydraulic data)."
    },
    {
      "id": "hw19_q21",
      "number": "21 of 30",
      "type": "single",
      "question": "What are the two types of displacement available?",
      "options": [
        {
          "value": "bypassed_indirect",
          "label": "Bypassed and indirect"
        },
        {
          "value": "direct_indirect",
          "label": "Direct and indirect"
        },
        {
          "value": "tandem_indirect",
          "label": "Tandem and indirect"
        },
        {
          "value": "direct_tandem",
          "label": "Direct and tandem"
        },
        {
          "value": "direct_bypassed",
          "label": "Direct and bypassed"
        }
      ],
      "answer": "direct_indirect",
      "explanation": "The two types of displacements available to clean the wellbore are direct displacement (displacing directly to completion fluid) and indirect displacement (displacing to an intermediate fluid like seawater/freshwater first) (page 264)."
    },
    {
      "id": "hw19_q22",
      "number": "22 of 30",
      "type": "single",
      "question": "In order to maximize the success of a displacement, completion tools are used",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "true",
      "explanation": "Completion cleanout tools are run to mechanically clean the casing inner diameter and remove debris, helping to ensure a successful displacement (page 264)."
    },
    {
      "id": "hw19_q23",
      "number": "23 of 30",
      "type": "multiple",
      "question": "What are the main applications for completion tools?",
      "options": [
        {
          "value": "spudding_well",
          "label": "Spudding the well"
        },
        {
          "value": "displacing_well",
          "label": "Displacing of the well"
        },
        {
          "value": "post_perforation_runs",
          "label": "Post perforation runs"
        },
        {
          "value": "fishing_applications",
          "label": "Fishing applications"
        },
        {
          "value": "all_of_above",
          "label": "All of the above"
        },
        {
          "value": "none_of_above",
          "label": "None of the above"
        }
      ],
      "answer": [
        "displacing_well",
        "post_perforation_runs",
        "fishing_applications"
      ],
      "explanation": "Completion tools are run for cleanouts and displacements (establishing bottom and displacing to brine in one run), fishing applications (debris removal), and post-perforation runs (packer plug retrieval) (page 264, 265)."
    },
    {
      "id": "hw19_q24",
      "number": "24 of 30",
      "type": "multiple",
      "question": "Select from the following list, the main four categories of completion tools using during the displacement forcompletion",
      "options": [
        {
          "value": "other_specialty_tools",
          "label": "Other specialty tools"
        },
        {
          "value": "casing_milling_bypass",
          "label": "Casing milling and bypass tools"
        },
        {
          "value": "casing_riser_cleaning",
          "label": "Casing and riser cleaning tools"
        },
        {
          "value": "hole_openers_reamers",
          "label": "Hole openers and reamers"
        },
        {
          "value": "jetting_bypass_tools",
          "label": "Jetting and bypass tools"
        },
        {
          "value": "perforating_bypass_tools",
          "label": "Perforating and bypass tools"
        },
        {
          "value": "debris_extraction",
          "label": "Debris extraction tools"
        }
      ],
      "answer": [
        "other_specialty_tools",
        "casing_riser_cleaning",
        "jetting_bypass_tools",
        "debris_extraction"
      ],
      "explanation": "The four primary categories of completion tools are casing & riser cleaning tools, debris extraction tools, jetting and bypass tools, and other specialty tools (page 265, 266)."
    },
    {
      "id": "hw19_q25",
      "number": "25 of 30",
      "type": "single",
      "question": "The __________ consists of a series of pills and spacers that are pumped in a clearly defined sequence, and under-controlled flowrate",
      "options": [
        {
          "value": "displacement_train",
          "label": "displacement train"
        },
        {
          "value": "completion_fluid",
          "label": "completion fluid"
        },
        {
          "value": "spacer_fluid",
          "label": "spacer fluid"
        },
        {
          "value": "packer_fluid",
          "label": "packer fluid"
        }
      ],
      "answer": "displacement_train",
      "explanation": "The displacement train is a customized series of pills and spacers pumped in a clearly defined sequence and flow rate to displace drilling fluid and clean the wellbore (page 268)."
    },
    {
      "id": "hw19_q26",
      "number": "26 of 30",
      "type": "single",
      "question": "The use of a base fluid pill is a requirement exclusive for the displacement of:",
      "options": [
        {
          "value": "high_density_brines",
          "label": "High density brines"
        },
        {
          "value": "high_performance_wbf",
          "label": "High performance water based fluids"
        },
        {
          "value": "conventional_wbf",
          "label": "Conventional water based fluids"
        },
        {
          "value": "non_aqueous_fluids",
          "label": "Non Aqueous fluids"
        }
      ],
      "answer": "non_aqueous_fluids",
      "explanation": "For Non-Aqueous Fluids (NAF/OBM), the displacement train typically starts with a base fluid pill to dilute and wash the mud, whereas this is not a requirement for water-based fluids (page 268)."
    },
    {
      "id": "hw19_q27",
      "number": "27 of 30",
      "type": "single",
      "question": "Push pill characteristics are:",
      "options": [
        {
          "value": "low_density_low_vis",
          "label": "Low density, low viscosity"
        },
        {
          "value": "high_density_low_vis",
          "label": "High density, low viscosity"
        },
        {
          "value": "high_density_high_vis",
          "label": "High density, high viscosity"
        },
        {
          "value": "low_density_high_vis",
          "label": "Low density, high viscosity"
        }
      ],
      "answer": "high_density_high_vis",
      "explanation": "A push pill is a weighted (high density), viscosified (high viscosity) pill used to maximize mechanical action and minimize interface mixing with the mud (page 268)."
    },
    {
      "id": "hw19_q28",
      "number": "28 of 30",
      "type": "single",
      "question": "Wash pill characteristics are:",
      "options": [
        {
          "value": "high_density_low_vis",
          "label": "High density, low viscosity"
        },
        {
          "value": "low_density_low_vis",
          "label": "Low density, low viscosity"
        },
        {
          "value": "low_density_high_vis",
          "label": "Low density, high viscosity"
        },
        {
          "value": "high_density_high_vis",
          "label": "High density, high viscosity"
        }
      ],
      "answer": "low_density_low_vis",
      "explanation": "A wash pill is a low density, low viscosity solution containing well cleaners designed to wash surfaces under turbulent flow conditions (page 268)."
    },
    {
      "id": "hw19_q29",
      "number": "29 of 30",
      "type": "multiple",
      "question": "Select all the displacement success metrics",
      "options": [
        {
          "value": "time",
          "label": "Time"
        },
        {
          "value": "number_of_samples",
          "label": "Number of samples"
        },
        {
          "value": "cost",
          "label": "Cost"
        },
        {
          "value": "torque",
          "label": "Torque"
        },
        {
          "value": "final_volumes",
          "label": "Final volumes"
        },
        {
          "value": "cleanliness",
          "label": "Cleanliness"
        },
        {
          "value": "hse",
          "label": "HSE"
        }
      ],
      "answer": [
        "time",
        "cost",
        "cleanliness",
        "hse"
      ],
      "explanation": "A successful displacement is measured against four key metrics: cleanliness, time, costs, and HSE (health, safety, and environment) (page 274)."
    },
    {
      "id": "hw19_q30",
      "number": "30 of 30",
      "type": "single",
      "question": "Current well cleaners are using surfactants that are more compatible with environmental regulations and have a lowerimpact than solvent cleaners",
      "options": [
        {
          "value": "true",
          "label": "True"
        },
        {
          "value": "false",
          "label": "False"
        }
      ],
      "answer": "true",
      "explanation": "Environmental regulations have led to the wide adoption of non-ionic surfactants (such as the BARAKLEAN family) which offer low toxicity and high environmental compatibility compared to traditional pure solvent cleaners (page 271)."
    }
  ]
},
  homework_20: {
    title: "Homework 20: Completion Fluids, Breaker Systems & Packer Fluids",
    description: "Practice questions on completion fluid functions, traditional acid breakers, BaraNFlow™ delayed action breaker systems, packer fluid characteristics, and N-SOLATE® insulating packer fluids.",
    questions: [
      {
        id: "hw20_q1",
        number: "1 of 16",
        type: "single",
        question: "Breaker systems aid in the removal of filtercake and potential causes of formation damage to the reservoir, in order to improve productivity or injectivity of treated wells.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "According to the Baroid Core Participant Guide, Unit 32 – Breaker systems (page 281, Overview): \"In the oilfield breaker systems are specialized tools that aid in the removal of filtercake and potential causes of formation damage to the reservoir, in order to improve productivity or injectivity of treated wells.\""
      },
      {
        id: "hw20_q2",
        number: "2 of 16",
        type: "matching",
        question: "Fill the list, explaining the capabilities of the different breaker systems used in the oil industry",
        pairs: {
          "Acids": "Can remove both polymers and calcium carbonate",
          "Chelating Agents": "Can remove only calcium carbonate",
          "Enzymes": "Can remove only polymers"
        },
        explanation: "According to the Baroid Core Participant Guide, Unit 32 – Breaker systems (page 281, 'Breaker System applications'), breaker systems have specific target materials they can remove from the filtercake: Enzymes can remove only polymers, Chelating Agents can remove only calcium carbonate, and Acids can remove both polymers and calcium carbonate."
      },
      {
        id: "hw20_q3",
        number: "3 of 16",
        type: "single",
        question: "Acids can be placed in the reservoir to remove the damage caused by drilling and completion fluids",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "According to the Baroid Core Participant Guide, Unit 32 (page 281, 'Traditional Acid Breakers'): \"Acids can be placed in the reservoir to remove the damage caused by drilling and completion fluids\"."
      },
      {
        id: "hw20_q4",
        number: "4 of 16",
        type: "single",
        question: "The most commonly used acid in the oil industry as cake breaker is:",
        options: [
          { value: "boric_acid", label: "Boric acid" },
          { value: "acetic_acid", label: "Acetic acid" },
          { value: "lactic_acid", label: "Lactic acid" },
          { value: "hydrochloric_acid", label: "Hydrochloric acid" },
          { value: "formic_acid", label: "Formic acid" }
        ],
        answer: "hydrochloric_acid",
        explanation: "According to the Baroid Core Participant Guide, Unit 32 (page 281, 'Traditional Acid Breakers'): \"Hydrochloric acid (HCl) is the most commonly used acid\" as a cake breaker."
      },
      {
        id: "hw20_q5",
        number: "5 of 16",
        type: "single",
        question: "Select some of the disadvantages of using traditional acid breakers",
        options: [
          { value: "uneven_distribution_in_the_wellbore", label: "Uneven distribution in the wellbore" },
          { value: "risky_operation_from_hse_perspective", label: "Risky operation from HSE perspective" },
          { value: "requires_special_equipment", label: "Requires special equipment" },
          { value: "potential_wormholing", label: "Potential wormholing" },
          { value: "all_of_the_above", label: "All of the above" }
        ],
        answer: "all_of_the_above",
        explanation: "According to the Baroid Core Participant Guide, Unit 32 (page 282, 'Traditional acid breakers challenges'), traditional acid breakers like HCl present several challenges, including HSE risks from exposing corrosive acids, uncontrolled/localized reactions leading to uneven distribution and incomplete cake removal, the requirement for specialized equipment (trucks, tanks, pumps), and an increased risk of wormholing. Therefore, all the listed choices are disadvantages."
      },
      {
        id: "hw20_q6",
        number: "6 of 16",
        type: "single",
        question: "Traditional acid breakers can ensure the complete removal of the filtercake",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "According to the Baroid Core Participant Guide, Unit 32 (page 282, 'Traditional acid breakers challenges'), traditional acid breakers like HCl provide an uncontrolled and localized reaction, which results in incomplete filter cake removal. Therefore, they cannot ensure complete removal."
      },
      {
        id: "hw20_q7",
        number: "7 of 16",
        type: "single",
        question: "The BaraNFlowTM breakers Offer a delayed reaction, providing uniform distribution, reducing HSE risks, and preventing the threat of corrosion and formation damage",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "According to the Baroid Core Participant Guide, Unit 32 (page 282, 'Delayed Action Filter Cake Breaker - BaraNFlow™'): \"The BaraNFlow™ breakers offer a delayed reaction, providing uniform distribution, reducing HSE risks, and preventing the threat of corrosion and formation damage.\""
      },
      {
        id: "hw20_q8",
        number: "8 of 16",
        type: "single",
        question: "The BaraNFlowTM breaker can only be used with water based fluid filtercakes",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "According to the Baroid Core Participant Guide, Unit 32 (page 282), BaraNFlow™ breakers have a wide range of applications, including both oil and water-based filter cakes. Thus, they are not restricted to water-based fluids."
      },
      {
        id: "hw20_q9",
        number: "9 of 16",
        type: "single",
        question: "From the HSE perspective, one of the advantages of the BaraNFlowTM system is that it does not require special handling equipment on surface",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "According to the Baroid Core Participant Guide, Unit 32 (page 282, 'BaraNFlow™ key features'), under surface system benefits, the system has a neutral pH at surface and does not require specialized handling or equipment, nor does it require special trucks/pumps."
      },
      {
        id: "hw20_q10",
        number: "10 of 16",
        type: "single",
        question: "The BaraNFlowTM reaction time is always the same, which limits it's range of application",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "According to the Baroid Core Participant Guide, Unit 32 (pages 282-283), BaraNFlow™ features an \"in-situ time-customized reaction\" where laboratory testing is conducted under specific field conditions to customize the required delay time, meaning the reaction time is not always the same."
      },
      {
        id: "hw20_q11",
        number: "11 of 16",
        type: "single",
        question: "Fill in the blank: __________ are fluids that are deposited in the annular section between the outer casing and production pipe (tubing) of a well above a packer.",
        options: [
          { value: "packer_fluids", label: "Packer fluids" },
          { value: "completion_fluids", label: "Completion fluids" },
          { value: "drilling_fluids", label: "Drilling fluids" },
          { value: "breaker_fluids", label: "Breaker fluids" }
        ],
        answer: "packer_fluids",
        explanation: "According to the Baroid Core Participant Guide, Unit 33 – Packer Fluids (page 285, Overview): \"Packer fluids are fluids deposited in the annular section between the outer casing and production pipe (tubing) of a well above a packer.\""
      },
      {
        id: "hw20_q12",
        number: "12 of 16",
        type: "single",
        question: "One of the functions of packer fluids is to minimize the hydrostatic pressure necessary to control the well in case of a packer failure or leaks",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "According to the Baroid Core Participant Guide, Unit 33 (page 285, Overview), one of the three main objectives of a packer fluid is to \"provide\" (rather than minimize) the hydrostatic head necessary to control the well in case of a packer failure or leaks."
      },
      {
        id: "hw20_q13",
        number: "13 of 16",
        type: "multiple",
        question: "List the mam packer fluid characteristics:",
        options: [
          { value: "must_not_cause_corrosion", label: "Must not cause corrosion" },
          { value: "must_not_damage_the_producing_formation", label: "Must not damage the producing formation" },
          { value: "must_promote_differential_pressures", label: "Must promote differential pressures" },
          { value: "must_remain_pumpable", label: "Must remain pumpable" },
          { value: "must_deteriorate_packer_elastomers", label: "Must deteriorate packer elastomers" },
          { value: "must_degrade_with_time_or_temperature", label: "Must degrade with time or temperature" },
          { value: "must_be_chemically_and_mechanically_stable", label: "Must be chemically and mechanically stable" }
        ],
        answer: [
          "must_not_cause_corrosion",
          "must_not_damage_the_producing_formation",
          "must_remain_pumpable",
          "must_be_chemically_and_mechanically_stable"
        ],
        explanation: "According to the Baroid Core Participant Guide, Unit 33 (page 285, 'Characteristics of Packer Fluids'), packer fluid characteristics state that they must not cause corrosion, must not damage the producing formation, must remain pumpable, and must be chemically and mechanically stable (additionally, they must NOT degrade with time or temperature, and must NOT deteriorate packer elastomers)."
      },
      {
        id: "hw20_q14",
        number: "14 of 16",
        type: "single",
        question: "Drilling fluids are desirable as packer fluids",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "According to the Baroid Core Participant Guide, Unit 33 (page 285), drilling fluids are not desirable as packer fluids because their organic additives degrade over time or temperature (generating CO2 and H2S) and solids (like barite) can settle out, leading to stuck packers and tubing."
      },
      {
        id: "hw20_q15",
        number: "15 of 16",
        type: "single",
        question: "Given the right conditions, a completion fluid can be used as a packer fluid",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "true",
        explanation: "According to the Baroid Handbook (pages 136, 151) and the Participant Guide (page 286), clear completion fluids (brines or oils) are excellent for use as packer fluids because they are solids-free, minimizing the risk of settling, and can be specially treated to function as stable packer fluids under the right conditions."
      },
      {
        id: "hw20_q16",
        number: "16 of 16",
        type: "single",
        question: "The __________ packer system are unique high performance insulating packer fluids designed to reduce undesired heat flow by controlling both conduction and convection.",
        options: [
          { value: "n_solate", label: "N-SOLATE" },
          { value: "baranflow", label: "BaraNFlow" },
          { value: "baraclear", label: "BaraClear" },
          { value: "baracarb", label: "BARACARB" }
        ],
        answer: "n_solate",
        explanation: "According to the Baroid Core Participant Guide, Unit 33 (page 287, 'N-SOLATE® Packer Systems'): \"N-SOLATE® systems are unique high performance insulating packer fluids designed to reduce undesired heat flow by controlling both conduction and convection.\""
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
