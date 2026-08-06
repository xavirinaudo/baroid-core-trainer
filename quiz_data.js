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
    },
    {
      "id": "hw19_q31",
      "number": "30 of 30",
      "type": "single",
      "question": "The __________ is used to measure the density of a drilling fluid with high viscosity",
      "options": [
        { "value": "viscometer", "label": "Viscometer" },
        { "value": "hydrometer", "label": "Hydrometer" },
        { "value": "turbidimeter", "label": "Turbidimeter" },
        { "value": "mud_balance", "label": "Mud balance" }
      ],
      "answer": "mud_balance",
      "explanation": "The mud balance (also called a mud scale or drilling fluid balance) is the standard tool used to measure the density (weight) of a drilling fluid, regardless of its viscosity.\n\n• The mud balance works by filling a fixed-volume cup with the fluid sample and balancing it on a knife-edge pivot. It measures mass per unit volume (e.g., lb/gal, lb/ft³, SG, or ppg).\n• It is specifically designed for drilling fluids, which can range from thin water-based muds to very high-viscosity, weighted NAF systems.\n\nWhy not the others?\n• Viscometer (e.g., Fann VG meter): Measures rheological properties — viscosity (PV, YP, gel strengths) — NOT density.\n• Hydrometer: Measures density/specific gravity of low-viscosity Newtonian fluids (like brines or water). It is not practical for high-viscosity or non-Newtonian drilling fluids because the float cannot settle properly.\n• Turbidimeter: Measures turbidity (cloudiness/particle suspension) of a liquid in NTU units — NOT density.\n\nThe mud balance is the only tool in this list appropriate for measuring density of high-viscosity drilling fluids (Participant Guide, API RP 13B – Drilling Fluid Testing)."
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

// ============================================================
// HOMEWORK 18 – Formation Damage & Reservoir Fluids
// ============================================================
const homework_18 = {
  title: "Homework 18: Formation Damage & Reservoir Fluids",
  description: "Review formation damage mechanisms, reservoir characteristics, drill-in fluids, and completion brines based on Baroid Core Participant Guide.",
  questions: [
    {
      id: "hw18_q1", number: "1 of 38", type: "single",
      question: "Select the correct definition of formation damage:",
      options: [
        { value: "increases_porosity", label: "Any process that increases the natural porosity of a formation/rock" },
        { value: "reduces_permeability", label: "Any process that reduces the natural permeability of a formation/rock" },
        { value: "maintains_permeability", label: "Any process that maintains the natural permeability of a formation/rock" },
        { value: "changes_structure", label: "Any process that changes the natural structure of a formation/rock" }
      ],
      answer: "reduces_permeability",
      explanation: "Formation Damage is defined as any process that reduces the natural permeability of a formation (Participant Guide, Page 244)."
    },
    {
      id: "hw18_q2", number: "2 of 38", type: "single",
      question: "Formation damage can be caused by two types of mechanisms, they are:",
      options: [
        { value: "physical_chemical", label: "physical and chemical" },
        { value: "pressure_temperature", label: "pressure and temperature" },
        { value: "acidic_basic", label: "acidic and basic" },
        { value: "organic_inorganic", label: "organic and inorganic" }
      ],
      answer: "physical_chemical",
      explanation: "Formation damage may be caused by physical and/or chemical events that restrict the flow of hydrocarbons (Participant Guide, Page 244)."
    },
    {
      id: "hw18_q3", number: "3 of 38", type: "single",
      question: "The ________ is the rock that contains the hydrocarbons.",
      options: [
        { value: "reservoir", label: "reservoir" },
        { value: "aquifer", label: "aquifer" },
        { value: "seal", label: "seal" },
        { value: "source_rock", label: "source rock" }
      ],
      answer: "reservoir",
      explanation: "The reservoir is the rock that contains the hydrocarbons (Participant Guide, Page 244)."
    },
    {
      id: "hw18_q4", number: "4 of 38", type: "single",
      question: "Formation fluids are specially engineered fluids that are used to drill through the payzone.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "Formation fluids are the fluids naturally present in the formation (oil, water, gas). Specially engineered fluids used to drill through the payzone are called drill-in fluids or reservoir drilling fluids (Participant Guide, Page 244, 251)."
    },
    {
      id: "hw18_q5", number: "5 of 38", type: "single",
      question: "The occurrence of formation damage will lower the production rate of a reservoir.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "Reducing permeability (formation damage) directly restricts fluid flow, thereby lowering the production rate (Participant Guide, Page 244-245)."
    },
    {
      id: "hw18_q6", number: "6 of 38", type: "single",
      question: "________ is the volume of the rock which can be filled by formation fluids.",
      options: [
        { value: "porosity", label: "Porosity" },
        { value: "permeability", label: "Permeability" },
        { value: "viscosity", label: "Viscosity" },
        { value: "saturation", label: "Saturation" }
      ],
      answer: "porosity",
      explanation: "Porosity is defined as the space within the reservoir not filled with rock, representing the volume that can be filled by formation fluids (Participant Guide, Page 244)."
    },
    {
      id: "hw18_q7", number: "7 of 38", type: "single",
      question: "The larger the porosity of a formation, the more resistant it will be to formation damage.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. A formation with higher porosity has much more storage space and, generally, wider pore throats. This makes it more resistant to damage by plugging because the porous system has greater physical capacity and tolerance to accommodate fine particles before they restrict or choke the free flow of hydrocarbons.\n\nIn contrast, formations with low porosity ('Little empty space') can be damaged easily. Because there is very little space and extremely narrow pore throats, even a minimal invasion of fine solids, polymers, or dispersed clays is enough to restrict or completely block the flow channels. There is no physical margin of tolerance.\n\n(Participant Guide, Page 244)"
    },
    {
      id: "hw18_q8", number: "8 of 38", type: "multiple",
      question: "Select the main causes of limited production rate",
      options: [
        { value: "formation_damage", label: "Formation damage" },
        { value: "low_salinity", label: "Low formation salinity" },
        { value: "low_permeability", label: "Low formation permeability" },
        { value: "high_oil_viscosity", label: "High oil viscosity" },
        { value: "low_pressure", label: "Low formation pressure" },
        { value: "high_api_gravity", label: "High oil API gravity" },
        { value: "low_temperature", label: "Low formation temperature" }
      ],
      answer: ["formation_damage", "low_permeability", "high_oil_viscosity", "low_pressure"],
      explanation: "The main factors causing limited production rates are low reservoir pressure, low reservoir permeability, high oil viscosity, and formation damage (Participant Guide, Page 245).\n\nWhy does High API gravity NOT limit production?\nHigh API gravity (light/sweet crude): Oil with high API values (e.g., above 30° or 40° API) is very light, has low viscosity, and flows with extreme ease through the rock pores toward the wellbore. Therefore, high API gravity is a favorable condition that helps maximize production, not limit it.\nLow API gravity (heavy crude): Oil with low API values is dense, viscous, and thick (heavy oil). This is directly associated with High oil viscosity, which IS one of the causes that restricts and limits production."
    },
    {
      id: "hw18_q9", number: "9 of 38", type: "single",
      question: "Radial flow of the produced fluids (into the wellbore) creates an ________ of the flow velocity near the wellbore.",
      options: [
        { value: "increase", label: "increase" },
        { value: "decrease", label: "decrease" },
        { value: "stabilization", label: "stabilization" },
        { value: "equalization", label: "equalization" }
      ],
      answer: "increase",
      explanation: "As produced fluids approach the wellbore in a radial flow pattern, the cross-sectional flow area narrows, which increases flow velocity near the wellbore (Participant Guide, Page 245)."
    },
    {
      id: "hw18_q10", number: "10 of 38", type: "multiple",
      question: "Select from the following options, all the relevant formation damage mechanisms",
      options: [
        { value: "clay_inhibition", label: "Clay inhibition" },
        { value: "emulsion_blockage", label: "Emulsion blockage" },
        { value: "polymer_adhesion", label: "Polymer adhesion" },
        { value: "fluid_density", label: "Fluid density" },
        { value: "psd", label: "Particle size distribution (PSD)" },
        { value: "clay_migration_dispersion", label: "Clay migration and dispersion" },
        { value: "particle_plugging", label: "Particle plugging" },
        { value: "clay_swelling", label: "Clay swelling" },
        { value: "fluid_incompatibility", label: "Fluid incompatibility" }
      ],
      answer: ["emulsion_blockage", "polymer_adhesion", "clay_migration_dispersion", "particle_plugging", "clay_swelling", "fluid_incompatibility"],
      explanation: "The recognized formation damage mechanisms while drilling include: clay swelling, clay and mineral dispersion and migration, particle plugging, polymer adhesion and fragments, fluid incompatibility, and emulsion blockage (Participant Guide, Page 245)."
    },
    {
      id: "hw18_q11", number: "11 of 38", type: "multiple",
      question: "From the following list, select all the different particles than can cause damage inside the reservoir:",
      options: [
        { value: "polymers_insoluble", label: "Polymers not soluble in acid" },
        { value: "barite", label: "Barite" },
        { value: "calcium_carbonate", label: "Calcium carbonate" },
        { value: "perforation_debris", label: "Perforation debris" },
        { value: "polymers_soluble", label: "Polymers soluble in acid" },
        { value: "all_of_the_above", label: "All of the above" }
      ],
      answer: ["polymers_insoluble", "barite", "perforation_debris"],
      explanation: "The particles that can cause permanent, non-removable damage inside the reservoir are: Polymers not soluble in acid (cannot be cleaned up with acid), Barite (insoluble in acid, remains lodged in pores), and Perforation debris (metal fragments, cement, cannot be dissolved).\n\nCalcium carbonate is acid-soluble and can be removed with an HCl treatment, making it formation-friendly when properly sized. Polymers soluble in acid can also be cleaned up with acid treatment. Therefore, only the non-removable/non-soluble particles represent truly damaging materials (Participant Guide, Page 247)."
    },
    {
      id: "hw18_q12", number: "12 of 38", type: "matching",
      question: "Regarding clays, list the clays discussed in Class and what is the behavior expected for each one of them and how to prevent it",
      pairs: {
        "Smectite": "Takes water and swell, prevent with potassium",
        "Kaolinite": "Prone to dispersion when potassium is present, avoid using >3% V/V of potassium",
        "Illite": "Prone to migration and dispersion, avoid dispersants and stabilize with potassium"
      },
      explanation: "Smectite takes on water and swells (stabilized with potassium). Kaolinite is subject to dispersion and migration and is sensitive to potassium ions (avoid using >3%). Illite is sensitive to dispersive environments (avoid dispersants) and stabilizes with potassium (Participant Guide, Page 245-246)."
    },
    {
      id: "hw18_q13", number: "13 of 38", type: "single",
      question: "The way polymers are mixed in the fluid system is not important since they cannot generate any formation damage because they are very small.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "Mixing is critical. Adding polymers too fast can cause clumps (fisheyes) that plug the pore throats, creating non-removable blockages (Participant Guide, Page 248)."
    },
    {
      id: "hw18_q14", number: "14 of 38", type: "single",
      question: "The filtrate from drilling fluids needs to be compatible with the water from the formation, to avoid the formation of precipitates.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "Fluid filtrate chemistry must be compatible with formation water to avoid precipitation of minerals (like carbonates or sulfates) that plug pore space (Participant Guide, Page 248)."
    },
    {
      id: "hw18_q15", number: "15 of 38", type: "single",
      question: "The excessive use of emulsifiers ________ into formation damage",
      options: [
        { value: "emulsions_damage", label: "can lead to the formation of crude-brine emulsions that ultimately will translate" },
        { value: "prevent_damage", label: "will prevent the formation of oil-in-water emulsions that translate" },
        { value: "stabilize_damage", label: "helps stabilize the formation to prevent clay swelling which translates" },
        { value: "none_damage", label: "None of the above" }
      ],
      answer: "emulsions_damage",
      explanation: "Excessive emulsifiers promote viscous water-in-oil (crude-brine) emulsions inside the reservoir rock, leading to emulsion blockage and formation damage (Participant Guide, Page 248)."
    },
    {
      id: "hw18_q16", number: "16 of 38", type: "single",
      question: "One of the ways to protect the reservoir from damage is the buildup of a thick filter cake that can increase the invasion around the wellbore",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "To protect the reservoir, we require a thin, impermeable filter cake to minimize fluid invasion. A thick filter cake increases invasion, differential sticking risk, and reservoir damage (Participant Guide, Page 247, 254)."
    },
    {
      id: "hw18_q17", number: "17 of 38", type: "single",
      question: "Which is probably more damaging to a payzone?",
      options: [
        { value: "dirty_mud", label: "A dirty mud with 20% solids" },
        { value: "dirty_brine", label: "A dirty brine with 10% solids" }
      ],
      answer: "dirty_brine",
      explanation: "Dirty brines are more damaging than dirty mud. Mud builds up a filter cake at the wellbore face, limiting depth of invasion. Since brines cannot build a filter cake, suspended solids travel deep into the reservoir to plug pore throats (Participant Guide, Page 247)."
    },
    {
      id: "hw18_q19", number: "19 of 38", type: "multiple",
      question: "Which of the following fluids can be used in reservoir while drilling and completing (select all applicable answers)?",
      options: [
        { value: "workover_fluids", label: "Workover fluids" },
        { value: "completion_brines", label: "Completion brines" },
        { value: "reservoir_drilling_fluids", label: "Reservoir drilling fluids" },
        { value: "payzone_hydrocarbons", label: "Payzone hydrocarbons" },
        { value: "unfiltered_seawater", label: "Unfiltered sea water" },
        { value: "payzone_water", label: "Payzone water" }
      ],
      answer: ["workover_fluids", "completion_brines", "reservoir_drilling_fluids"],
      explanation: "Drill-in fluids, completion fluids/brines, and workover fluids are specially engineered reservoir fluids designed to minimize formation damage (Participant Guide, Page 250)."
    },
    {
      id: "hw18_q20", number: "20 of 38", type: "multiple",
      question: "Which products might you want to use in reservoir fluids, for as long as they're compatible with the payzone?",
      options: [
        { value: "bactericides", label: "Bactericides" },
        { value: "clays", label: "Clays" },
        { value: "pipe_dopes", label: "Pipe dopes" },
        { value: "lubricants", label: "Lubricants" },
        { value: "sticky_polymers", label: "Sticky polymers (PAC)" },
        { value: "viscosifiers", label: "Viscosifiers" }
      ],
      answer: ["bactericides", "lubricants", "viscosifiers"],
      explanation: "Clays and PAC are avoided to prevent plugging. Pipe dope is a contaminant. Bactericides, lubricants, and viscosifiers are acceptable if compatible and tested (Participant Guide, Page 248, 250, 288)."
    },
    {
      id: "hw18_q21", number: "21 of 38", type: "single",
      question: "Completion fluids are always Clear brines with no viscosity",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "Completion fluids are often viscosified (e.g. using HEC or Xanthan) to carry materials, run tools, or control fluid losses (Participant Guide, Page 250, 261)."
    },
    {
      id: "hw18_q22", number: "22 of 38", type: "single",
      question: "The goal of a displacement is to remove all the products/by products of the drilling process before production",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "Displacement is designed to clean the wellbore by removing drilling mud, residues, and cuttings before completion and production (Participant Guide, Page 250)."
    },
    {
      id: "hw18_q23", number: "23 of 38", type: "multiple",
      question: "Reservoir fluids are specifically designed to:",
      options: [
        { value: "minimize_formation_damage", label: "Minimize formation damage" },
        { value: "increase_ph", label: "Increase the pH of the formation" },
        { value: "maintain_well_producibility", label: "Maintain well producibility" },
        { value: "all_of_the_above", label: "All of the above" }
      ],
      answer: ["minimize_formation_damage", "maintain_well_producibility"],
      explanation: "Reservoir fluids are engineered to minimize formation damage and preserve well producibility. Increasing formation pH is not a design objective (Participant Guide, Page 250)."
    },
    {
      id: "hw18_q24", number: "24 of 38", type: "single",
      question: "Completions and workovers require clean fluids for maximum effectiveness, and that is the goal of the filtration services",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "Filtration services aim to reduce suspended solids and contaminants in completion and workover fluids to prevent formation damage and optimize production (Participant Guide, Page 288)."
    },
    {
      id: "hw18_q25", number: "25 of 38", type: "single",
      question: "A filtration unit can help to recover clean potable water (free of solids and chemicals) from completion and workover fluids",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "A filtration unit removes suspended particulates down to a specific size but does not remove soluble salts, polymers, or chemicals from the brine to produce potable water (Participant Guide, Page 288)."
    },
    {
      id: "hw18_q26", number: "26 of 38", type: "multiple",
      question: "Which of the following are characteristics of a reservoir drill-in fluid?",
      options: [
        { value: "transports_cuttings", label: "Efficiently transports cuttings to the surface" },
        { value: "minimizes_damage", label: "Minimizes potential formation damage" },
        { value: "maintains_overbalance", label: "Maintains hydrostatic overbalance to control the well" },
        { value: "minimizes_rop", label: "Minimizes ROP and increases costs" },
        { value: "same_as_top_hole", label: "Same characteristics as any top hole drilling fluid" }
      ],
      answer: ["transports_cuttings", "minimizes_damage", "maintains_overbalance"],
      explanation: "A reservoir drill-in fluid must carry cuttings and maintain well control like any drilling fluid, but is specialized to minimize potential formation damage (Participant Guide, Page 251)."
    },
    {
      id: "hw18_q27", number: "27 of 38", type: "single",
      question: "When using a Dril-N fluid system, we know we have preserved the reservoir's producibility if the near wellbore rock flows the same after the well is completed as it did prior to the drilling/completion",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "Preserved producibility means the near-wellbore rock flows the same after drilling/completion as it did before (Participant Guide, Page 250)."
    },
    {
      id: "hw18_q28", number: "28 of 38", type: "multiple",
      question: "What are characteristics of a poorly-designed reservoir fluid?",
      options: [
        { value: "controls_pressures", label: "Controls bottom hole pressures" },
        { value: "optimizes_carrying_capacity", label: "Optimizes cuttings carrying capacity" },
        { value: "allows_foreign_material", label: "Allows large quantities of foreign material to pass into the payzone" },
        { value: "not_tested", label: "Is not tested and potential damage prior use is unknown" },
        { value: "maximizes_rop_high_filtrate", label: "Maximizes ROP by employing high filtrate losses" }
      ],
      answer: ["allows_foreign_material", "not_tested", "maximizes_rop_high_filtrate"],
      explanation: "Poorly designed reservoir fluids permit solid/fluid invasion into the payzone, lack testing, or employ high filtrate losses, risking severe formation damage (Participant Guide, Page 251)."
    },
    {
      id: "hw18_q29", number: "29 of 38", type: "single",
      question: "Does a fracked completion normally require a specially engineered drill-in fluid?",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ],
      answer: "no",
      explanation: "Fracked completions bypass the near-wellbore zone. Therefore, low-permeability reservoirs (like shales) do not require a specialized drill-in fluid (Participant Guide, Page 251)."
    },
    {
      id: "hw18_q30", number: "30 of 38", type: "single",
      question: "Does an open hole completion normally require a specially-engineered drill-in fluid?",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ],
      answer: "yes",
      explanation: "Open hole completions keep the hole open without casing or perforation to bypass damage, thus requiring a drill-in fluid to protect permeability (Participant Guide, Page 251)."
    },
    {
      id: "hw18_q31", number: "31 of 38", type: "multiple",
      question: "Which of the following are potentially damaging to the payzone?",
      options: [
        { value: "unfiltered_seawater", label: "Unfiltered Seawater" },
        { value: "filtered_brine", label: "Filtered brine" },
        { value: "drill_solids", label: "Drill solids" },
        { value: "mud_filtrate", label: "Mud filtrate" },
        { value: "mud_products", label: "Mud products" }
      ],
      answer: ["unfiltered_seawater", "drill_solids", "mud_filtrate", "mud_products"],
      explanation: "Mud products, drill solids, mud filtrate, and unfiltered seawater are foreign to the reservoir and are all potentially damaging (Participant Guide, Page 254)."
    },
    {
      id: "hw18_q32", number: "32 of 38", type: "single",
      question: "We prefer to use ground marble for drill-in fluid bridging because",
      options: [
        { value: "less_costly", label: "It is less costly than ground limestone" },
        { value: "clean_white", label: "It looks clean and white" },
        { value: "harder_than_limestone", label: "It is harder than limestone" },
        { value: "all_of_the_above", label: "All of the above" }
      ],
      answer: "harder_than_limestone",
      explanation: "Ground marble (BARACARB) consists of harder crystals than limestone, meaning it resists degradation and grinding in the wellbore, keeping the designed sizes longer (Participant Guide, Page 254)."
    },
    {
      id: "hw18_q33", number: "33 of 38", type: "single",
      question: "Kozeny's Equation estimates a reservoir's pore throat diameter in microns when the rock permeability is known.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. According to the theory, Kozeny's equation only requires the reservoir permeability value (K) to estimate the pore throat diameter in microns. The calculation depends on the value of K alone, allowing engineers to estimate pore throat size without needing a porosity measurement (Participant Guide, Page 255)."
    },
    {
      id: "hw18_q34", number: "34 of 38", type: "single",
      question: "On a particle size distribution, what is the meaning of the D50 value of a bridging material analysis?",
      options: [
        { value: "larger_than_d90", label: "50% of the particles are larger than the D90 value" },
        { value: "smaller_than_d50", label: "50% of the particles are smaller than the D50 value" },
        { value: "pure_marble", label: "50% of the particles are pure marble" },
        { value: "none_of_the_above", label: "None of the above" }
      ],
      answer: "smaller_than_d50",
      explanation: "The D50 value represents the median particle size on a PSD (Particle Size Distribution) curve, meaning exactly 50% of the particles are smaller than this value (Participant Guide, Page 255).\n\nKey PSD percentile values:\n• D10: 10% of particles have sizes smaller than this diameter (very fine end of the distribution).\n• D50: 50% of particles have sizes smaller than this diameter (the median — half are smaller, half are larger).\n• D90: 90% of particles have sizes smaller than this diameter. In other words, in a given powder, particles smaller than D90 represent 90% of the total particle count (coarse end of the distribution)."
    },
    {
      id: "hw18_q35", number: "35 of 38", type: "single",
      question: "What concentration of bridging material has been found to be most effective for drill-in fluids?",
      options: [
        { value: "20_percent_vol", label: "20% by volume" },
        { value: "between_20_30_lbbbl", label: "Between 20 and 30 lb/bbl" },
        { value: "between_30_45_lbbbl", label: "Between 30 and 45 lb/bbl" },
        { value: "between_35_50_lbbbl", label: "Between 35 and 50 lb/bbl" }
      ],
      answer: "between_30_45_lbbbl",
      explanation: "Successful bridging requires an optimum concentration; too little causes high spurt loss, too much causes high ECDs. The most effective concentration is between 30 and 45 lb/bbl (Participant Guide, Page 255)."
    },
    {
      id: "hw18_q36", number: "36 of 38", type: "single",
      question: "Which return permeability value would be considered to be good by most operators?",
      options: [
        { value: "85", label: "85%" },
        { value: "90", label: "90%" },
        { value: "80", label: "80%" },
        { value: "95", label: "95%" }
      ],
      answer: "90",
      explanation: "Most operators accept return permeability values of 90% or greater as indicating a fluid that is fit for the reservoir (Participant Guide, Page 259)."
    },
    {
      id: "hw18_q37", number: "37 of 38", type: "single",
      question: "High Performance Invert Emulsion Fluids can make excellent drill-in fluids, given that the appropriate solids content is achieved",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "HPIEF can serve as excellent drill-in fluids when properly processed to remove drilled solids and adjusted with sized bridging material (Participant Guide, Page 254)."
    },
    {
      id: "hw18_q38", number: "38 of 45", type: "single",
      question: "Any type of LCM can be used if there are losses in the payzone",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "Conventional LCM can permanently seal flow channels and cause severe damage. Reservoir loss circulation treatments must be degradable or acid-soluble (Participant Guide, Page 261)."
    },
    {
      id: "hw18_q39", number: "39 of 45", type: "single",
      question: "According to current industry theories for reservoir bridging, what is the minimum bridging particle size required to effectively seal a pore throat and prevent deep invasion?",
      options: [
        { value: "equal_max", label: "Equal to the maximum pore throat size" },
        { value: "one_third", label: "One-third (1/3) of the maximum pore throat size" },
        { value: "twice_avg", label: "Twice the average pore throat size" },
        { value: "half_min", label: "Half (1/2) of the minimum pore throat size" }
      ],
      answer: "one_third",
      explanation: "According to the Abrams' rule (1/3 rule) for reservoir bridging, the ideal median particle size (D50) of the bridging material should be equal to or slightly greater than one-third (1/3) of the median pore throat diameter (D50 pore throat). This ensures that the bridging particles are large enough to form a stable bridge at the pore throat entrance without invading deep into the reservoir matrix.\n\nBridging at the pore throat face is critical because it creates a thin, low-permeability filtercake at the surface of the reservoir rather than allowing particles to migrate deep and permanently plug pore channels (Participant Guide, Page 255-256; Abrams' Bridging Theory)."
    },
    {
      id: "hw18_q40", number: "40 of 45", type: "single",
      question: "True or False: To minimize permanent damage to the payzone, the concentration of reactive solids (clays) in the reservoir drilling fluid should be strictly kept below 3 lb/bbl.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. The Baroid Participant Guide specifies that reactive solids (formation clays) in a reservoir drilling fluid must be kept below 3 lb/bbl. If reactive solids exceed this limit:\n\n• They become incorporated into the filter cake structure.\n• The filter cake becomes increasingly impermeable and mechanically tough.\n• The filter cake becomes extremely difficult or impossible to remove chemically with breaker systems prior to production.\n\nThis is why Low-Gravity Solids (LGS) control is critical when drilling through the payzone with a drill-in fluid. Centrifuges and dilution are key tools to maintain reactive solids below the 3 lb/bbl threshold (Participant Guide, Formation Damage / Drill-in Fluids section)."
    },
    {
      id: "hw18_q41", number: "41 of 45", type: "single",
      question: "Which of the following operational risks is NOT a direct consequence of high filtrate volumes (fluid loss) into the reservoir?",
      options: [
        { value: "clay_swelling", label: "Swelling of water-sensitive clays like smectites" },
        { value: "dehydration", label: "Dehydration of drilling fluid during trips (stuck pipe)" },
        { value: "thin_hard_cake", label: "Creation of a thin, hard, and impermeable filter cake" },
        { value: "torque_drag", label: "Torque and drag increases due to a tight hole" }
      ],
      answer: "thin_hard_cake",
      explanation: "A thin, hard, and impermeable filter cake is NOT a consequence of high fluid loss — it is the opposite.\n\n• HIGH fluid loss produces a THICK and SOFT filter cake. The high filtrate volumes carry large amounts of solids into the cake rapidly, creating a bulky, poorly consolidated structure. This thick soft cake is associated with differential sticking, tight hole, and poor wellbore stability.\n\n• LOW fluid loss (well-controlled) produces a THIN, HARD, and IMPERMEABLE filter cake — which is the DESIRED outcome of proper drill-in fluid design.\n\nThe other options ARE direct consequences of high filtrate volumes:\n• Clay swelling: Excess water filtrate entering the reservoir triggers smectite swelling.\n• Dehydration / stuck pipe: During trips, the thick, soft cake shrinks and grips the drillstring.\n• Torque and drag: Thick cake reduces the annular clearance, increasing friction (Participant Guide, Page 254)."
    },
    {
      id: "hw18_q42", number: "42 of 45", type: "single",
      question: "When circulating a drill-in fluid, why is an API 270 shaker screen generally NOT recommended on the shakers?",
      options: [
        { value: "coarse_solids", label: "It allows too many coarse drill solids to return to the well" },
        { value: "discard_bridging", label: "It would discard approximately half of the desirable bridging material" },
        { value: "chemical_inhibition", label: "It causes the mud to lose chemical inhibition" },
        { value: "water_oil_ratio", label: "It increases the water-to-oil ratio of the fluid" }
      ],
      answer: "discard_bridging",
      explanation: "An API 270 screen (approximately 53 micron opening) is too fine for drill-in fluid applications. The bridging agents used in drill-in fluids — such as BARACARB (calcium carbonate) — are sized according to Abrams' 1/3 rule to match the reservoir pore throats.\n\nA 270 mesh screen would capture and discard a significant portion (approximately half) of the designed bridging particles along with the drill solids. This would continuously remove the critical bridging material from the system, destroying the particle size distribution and leaving the reservoir unprotected against deep filtrate invasion.\n\nRecommended screen sizes for drill-in fluid applications are API 120 to 170 (approximately 88–105 micron openings), which retain the bridging material while still removing coarser drill cuttings (Participant Guide, Drill-in Fluids / Solids Control section)."
    },
    {
      id: "hw18_q43", number: "43 of 45", type: "single",
      question: "Which Baroid reservoir drilling fluid system utilizes saturated NaCl brine with sized salt as its bridging agent, making the filter cake soluble in water?",
      options: [
        { value: "baradril_n", label: "BARADRIL-N" },
        { value: "soludril_n", label: "SOLUDRIL-N" },
        { value: "clay_free", label: "Clay-Free WBM" },
        { value: "diphasix", label: "DIPHASIX" }
      ],
      answer: "soludril_n",
      explanation: "SOLUDRIL-N is the Baroid drill-in fluid system that uses saturated NaCl (sodium chloride) brine as the base fluid and sized salt crystals as the bridging agent.\n\nKey advantage: Because both the base fluid and the bridging agent are salt-based, the filter cake formed is inherently water-soluble. When the well is put on production and contacted with produced formation water or injected fresh water, the salt cake simply dissolves, eliminating the need for chemical breakers or acid treatments.\n\nContrast with other systems:\n• BARADRIL-N: Uses calcium carbonate (CaCO₃) as the bridging agent. The filter cake requires acid (HCl) or BaraNFlow™ enzymatic/chemical breakers to dissolve.\n• DIPHASIX: A non-aqueous (oil-based) drill-in fluid system.\n\nSOLUDRIL-N is particularly suited for formations that are highly water-sensitive or where acid treatments are not preferred (Participant Guide, Reservoir Drilling Fluids section)."
    },
    {
      id: "hw18_q44", number: "44 of 45", type: "single",
      question: "True or False: BaraNFlow™ technology is a delayed-reaction chemical breaker system designed to dissolve both polymers and calcium carbonate filter cakes uniformly across the payzone.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. BaraNFlow™ is Baroid's proprietary delayed-action filter cake breaker technology. It works through a thermally-activated mechanism:\n\n• The BaraNFlow treatment is placed across the payzone (pumped into the reservoir section).\n• Heat from the formation activates the system over time, generating organic acid in-situ.\n• The generated acid simultaneously dissolves the calcium carbonate bridging material AND degrades the polymer network of the filter cake.\n• Because the reaction is slow and distributed, the breaker acts uniformly across the entire payzone — avoiding the problem of near-wellbore over-break and far-wellbore incomplete break that occurs with conventional acid treatments.\n\nThis uniform, controlled dissolution maximizes the return permeability across the full reservoir section before production begins (Participant Guide, Unit 32 – Breaker Systems, Page 281)."
    },
    {
      id: "hw18_q45", number: "45 of 46", type: "single",
      question: "What is the name of the laboratory testing protocol used to evaluate reservoir damage by exposing a real core sample to drill-in fluids and measuring the percentage of original flow capacity restored?",
      options: [
        { value: "return_perm", label: "Return Permeability Test" },
        { value: "mud_check", label: "Standard Mud Check (API RP 13B)" },
        { value: "capillary_pressure", label: "Capillary Pressure Test (MICP)" },
        { value: "core_flood_tracer", label: "Tracer Core Flood Test" }
      ],
      answer: "return_perm",
      explanation: "The Return Permeability Test (also called the Regain Permeability Test) is the industry-standard laboratory protocol for quantifying formation damage caused by drill-in fluids.\n\nTest procedure:\n1. Measure the initial permeability (Ki) of a real reservoir core plug using a neutral brine.\n2. Flow the drill-in fluid through the core under simulated downhole conditions (temperature, overbalance pressure) to form a filter cake.\n3. Attempt to clean up the damage by flowing back with breaker fluid, brine, or crude oil.\n4. Measure the final (returned) permeability (Kf).\n5. Calculate Return Permeability % = (Kf / Ki) × 100.\n\nResults interpretation:\n• >80-90% return: Excellent — minimal formation damage.\n• ~70% return: Acceptable — moderate damage.\n• <50% return: Poor — significant damage, reassess fluid design.\n• ~7% return or 'Reservoir Destroyed': Catastrophic damage — fluid is incompatible with the formation.\n\nContrast with incorrect options:\n• API RP 13B mud check: Measures drilling fluid properties (rheology, filtration), not formation damage.\n• MICP (Mercury Injection Capillary Pressure): Characterizes pore throat size distribution, not fluid damage.\n• Tracer Core Flood: Used for EOR studies and fluid displacement efficiency, not drill-in fluid damage evaluation (Participant Guide, Page 256-257)."
    },
    {
      id: "hw18_q46", number: "46 of 46", type: "single",
      question: "On a particle size distribution, what is the meaning of the D90 value of a bridging material analysis?",
      options: [
        { value: "90_larger", label: "90% of the particles are larger than the D90 value" },
        { value: "90_smaller", label: "90% of the particles are smaller than the D90 value" },
        { value: "90_equal", label: "90% of the particles are equal in size to the D90 value" },
        { value: "90_weight", label: "The D90 value represents the 90th percentile of particle weight" }
      ],
      answer: "90_smaller",
      explanation: "The D90 value on a Particle Size Distribution (PSD) curve means that 90% of the particles in the sample have a diameter SMALLER than (or equal to) the D90 value. Only 10% of the particles are coarser (larger) than D90.\n\nKey PSD percentile values — full summary:\n• D10: 10% of particles have sizes smaller than this diameter. This represents the fine end of the distribution — most particles are larger than D10.\n• D50: 50% of particles have sizes smaller than this diameter. This is the median particle size — half the particles are smaller, half are larger. D50 is the most important value for bridging design (Abrams' 1/3 Rule).\n• D90: 90% of particles have sizes smaller than this diameter. This represents the coarse end of the distribution — only 10% of particles exceed D90.\n\nPractical application for bridging design:\n• D50 targets the median pore throat to initiate bridging.\n• D90 controls the coarsest particles — ensures no oversized particles are present that could cause screen damage or flow restriction at surface.\n• D10 ensures sufficient fine particles are present to seal the filter cake after bridging is established.\n\nThis three-point (D10/D50/D90) characterization gives a complete picture of the bridging agent's particle size distribution and its suitability for a given reservoir (Participant Guide, Page 255)."
    }
  ]
};

// ============================================================
// HOMEWORK 21 – Hole Cleaning & Sweeps
// ============================================================
const homework_21 = {
  title: "Homework 21: Hole Cleaning",
  description: "Review hole cleaning concepts, signs of inadequate cleaning, factors influencing cleaning efficiency, cuttings transport by hole angle, and modeling tools.",
  questions: [
    {
      id: "hw21_q1", number: "1 of 27", type: "single",
      question: "Hole cleaning can be defined as the ability of the drilling fluid to transport drilled cuttings / cavings to surface or to keep them suspended during a static state",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "According to the Baroid Core Participant Guide (Unit 35 - Hole Cleaning, page 295), hole cleaning is defined as the ability of the drilling fluid to transport drilled cuttings to the surface or to keep them suspended during a static state."
    },
    {
      id: "hw21_q2", number: "2 of 27", type: "multiple",
      question: "What are some of the good practices that can aid in hole cleaning?",
      options: [
        { value: "increase_circulation", label: "Increase circulation" },
        { value: "avoid_tripping", label: "Avoid tripping" },
        { value: "high_rop", label: "High ROP" },
        { value: "control_fluid_parameters", label: "Control fluid parameters" },
        { value: "optimize_separation_equipment", label: "Optimize mechanical separation equipment" }
      ],
      answer: ["increase_circulation", "control_fluid_parameters", "optimize_separation_equipment"],
      explanation: "According to the Baroid Core Participant Guide (page 295), good drilling practices that aid in hole cleaning include increasing circulation, controlling fluid parameters, and optimizing mechanical separation equipment. High ROP increases cutting beds and reduces hole cleaning efficiency, and avoiding tripping is not a hole cleaning practice."
    },
    {
      id: "hw21_q3", number: "3 of 27", type: "single",
      question: "An evidence of good hole cleaning is a buildup in solids inside the annular space, that leads to a stuck pipe situation",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "A buildup of solids in the annular space leading to stuck pipe is evidence of inadequate hole cleaning, not good hole cleaning."
    },
    {
      id: "hw21_q4", number: "4 of 27", type: "multiple",
      question: "Select some of the signs of inadequate hole cleaning",
      options: [
        { value: "torque", label: "Widely-fluctuating rotating torque" },
        { value: "sliding", label: "Issues maintaining angle when sliding" },
        { value: "stuck_pipe", label: "Stuck pipe" },
        { value: "ecd_increase", label: "Quick increase of ECD when pipe rotation is initiated" },
        { value: "tight_hole", label: "Tight hole and /or pack-offs" },
        { value: "decreased_drag", label: "Decreased drag after connections" },
        { value: "all_above", label: "All of the above" }
      ],
      answer: ["torque", "sliding", "stuck_pipe", "ecd_increase", "tight_hole"],
      explanation: "Signs of inadequate hole cleaning listed on page 295 of the Baroid Core Participant Guide include widely-fluctuating rotating torque, tight hole and/or pack-offs, increased drag after connections (not decreased drag), rapid increase of ECD when pipe rotation is initiated, problems maintaining angle when sliding, and stuck pipe."
    },
    {
      id: "hw21_q5", number: "5 of 27", type: "single",
      question: "Inadequate hole cleaning can affect the drilling process, especially when building directional wells. The development of cutting beds can deviate the angle of the well while sliding",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "In directional wells, cuttings beds form on the low side of the hole. When sliding (drilling with a motor without drill pipe rotation), the bottom hole assembly can ride on top of these beds, causing deviation of the wellbore angle and difficulty maintaining the target direction."
    },
    {
      id: "hw21_q6", number: "6 of 27", type: "multiple",
      question: "Indicate all the factors that can affect hole cleaning efficiency:",
      options: [
        { value: "flow_rate", label: "Flow rate" },
        { value: "drill_pipe_rotation", label: "Drill pipe rotation" },
        { value: "rop", label: "Drilling rate (ROP)" },
        { value: "eccentricity", label: "Drill pipe eccentricity" },
        { value: "temperature", label: "Flow line temperature" },
        { value: "fluid_density", label: "Drilling fluid density" },
        { value: "well_angle", label: "Angle of well" },
        { value: "rheology", label: "Drilling fluid rheological properties" },
        { value: "salinity", label: "Formation salinity" },
        { value: "cuttings_density_size_shape", label: "Density, size & shape of cuttings" },
        { value: "alkalinity", label: "Formation alkalinity" },
        { value: "bhp", label: "Bottom hole pressures" }
      ],
      answer: ["flow_rate", "drill_pipe_rotation", "rop", "eccentricity", "fluid_density", "well_angle", "rheology", "cuttings_density_size_shape"],
      explanation: "Hole cleaning efficiency is influenced by: wellbore angle of deviation, flow rate, drilling fluid density and rheological properties, density, size and shape of cuttings, drilling rate (ROP), drill pipe rotation, and drill pipe eccentricity (Baroid Core Participant Guide, page 296). Flow line temperature, formation salinity, bottom hole pressure, and formation alkalinity are not listed as factors."
    },
    {
      id: "hw21_q7", number: "7 of 27", type: "single",
      question: "As the angle of deviation of the wells increases, so does the difficulty in transporting the cuttings",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "As the angle of deviation increases, gravity acts perpendicular to the wellbore axis rather than parallel to it, causing cuttings to settle to the low side of the hole and form cuttings beds, thereby increasing transport difficulty (page 296)."
    },
    {
      id: "hw21_q8", number: "8 of 27", type: "single",
      question: "In general, vertical wells are the hardest to clean due the effect of slip velocity",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "Vertical wells are generally the easiest to clean because slip velocity acts in the opposite direction of fluid flow, which is easily overcome by maintaining adequate annular velocity. In contrast, deviated wells (inclined between 45° and 60°) are the hardest to clean because gravity causes cuttings to settle sideways to form cuttings beds."
    },
    {
      id: "hw21_q9", number: "9 of 27", type: "single",
      question: "The formation of a cuttings bed is more pronounced when the angle of inclination of the well is greater than 30 degrees",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "According to page 296 of the Baroid Core Participant Guide, the formation of a cuttings bed on the low side of the hole becomes more pronounced when the angle of inclination of the well is greater than 30°."
    },
    {
      id: "hw21_q10", number: "10 of 27", type: "single",
      question: "For angles between 40º - 60º, a turbulent or transition flow and a low rheology fluid is the most effective combination for minimizing the formation of cuttings beds, removing cuttings beds, and cleaning high angle wells",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "For inclination angles between 40° and 60°, a turbulent or transition flow regime combined with a low-rheology fluid is the most effective combination to erode, minimize, and remove cuttings beds (page 296)."
    },
    {
      id: "hw21_q11", number: "11 of 27", type: "single",
      question: "Cuttings and cuttings beds will be removed more effectively under laminar flow",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "Laminar flow is less effective at removing cuttings beds because the fluid tends to flow over the top of the bed in the wider gap. Turbulent flow is preferable because it provides the necessary kinetic energy and mechanical erosion to lift and suspend the bed cuttings (page 296)."
    },
    {
      id: "hw21_q12", number: "12 of 27", type: "single",
      question: "It has been demonstrated that in angles between 60º - 90º, high viscosity pills do not increase the hole cleaning efficiency, and can actually reduce the flow rates below the drill pipe, where bed cuttings accumulate",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "At high angles (60° to 90°), high-viscosity pills are ineffective. Because the drill pipe lies on the bottom of the well (eccentricity), high-viscosity fluids will take the path of least resistance above the pipe, reducing flow velocity beneath the pipe where cuttings beds accumulate (page 296)."
    },
    {
      id: "hw21_q13", number: "13 of 27", type: "multiple",
      question: "Flow rate can impact hole cleaning efficiency; however it needs to be controlled to avoid issues, such as? (select all that apply)",
      options: [
        { value: "exceed_capacity", label: "Exceed capacity of the pumps" },
        { value: "stuck_pipe", label: "Lead to stuck pipe" },
        { value: "hole_washout", label: "Generate hole washout" },
        { value: "maximize_transport", label: "Maximize transportation of cuttings" },
        { value: "high_ecd", label: "High ECD" }
      ],
      answer: ["exceed_capacity", "hole_washout", "high_ecd"],
      explanation: "Flow rate must be controlled to prevent exceeding rig pump capacities, generating hole washouts due to mechanical erosion of the wellbore, and causing excessively high equivalent circulating density (ECD) which could exceed the formation fracture gradient."
    },
    {
      id: "hw21_q14", number: "14 of 27", type: "single",
      question: "An increase in fluid density",
      options: [
        { value: "will_cause_buoyancy", label: "Will cause an increase in the buoyancy, thus improving the hole cleaning characteristics at any inclination." },
        { value: "will_not_cause_buoyancy", label: "Will not cause an increase in the buoyancy, thus improving the hole cleaning characteristics at any inclination." }
      ],
      answer: "will_cause_buoyancy",
      explanation: "An increase in drilling fluid density increases the buoyant force acting on cuttings, thereby reducing their relative weight downhole and improving hole cleaning and transportation characteristics at any inclination (page 298)."
    },
    {
      id: "hw21_q15", number: "15 of 27", type: "single",
      question: "The rheology of the drilling fluid should be carefully adjusted to maximize the transport capacity, minimize friction losses and minimize the impact on downhole pressures",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "According to page 297 of the Baroid Core Participant Guide, the rheology of the drilling fluid must be carefully balanced and adjusted to maximize transport capacity, minimize friction losses, and minimize impact on equivalent circulating density (ECD)."
    },
    {
      id: "hw21_q16", number: "16 of 27", type: "single",
      question: "The density, size and shape of the cuttings do not affect hole cleaning efficiency",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "Cuttings characteristics like density, size, and shape do affect transport efficiency. Heavier, larger, and rounder cuttings have higher settling velocities and are more difficult to transport out of the hole (page 298)."
    },
    {
      id: "hw21_q17", number: "17 of 27", type: "single",
      question: "Which of the following is harder to remove from the well?",
      options: [
        { value: "lighter_medium_squared", label: "Lighter, medium, squared cutting" },
        { value: "heavy_longer_rounder", label: "Heavy, longer, rounder cutting" },
        { value: "lighter_smaller_sharp", label: "Lighter, smaller, Sharp cutting" },
        { value: "heavy_longer_squared", label: "Heavy, longer, squared cutting" }
      ],
      answer: "heavy_longer_rounder",
      explanation: "Heavier, longer, and rounder cuttings have higher slip velocities (settle faster) and present a smaller surface area relative to their weight compared to flat/sharp cuttings, making them the most difficult to lift and remove from the wellbore (page 298)."
    },
    {
      id: "hw21_q18", number: "18 of 27", type: "single",
      question: "An increase in the rate of penetration will result in a greater concentration of cuttings in the annulus, which will improve the hole cleaning efficiency",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "An increase in ROP generates more cuttings per unit time, resulting in a higher concentration of cuttings in the annulus. This reduces hole cleaning efficiency, increases ECD, and increases cuttings bed heights (page 298)."
    },
    {
      id: "hw21_q19", number: "19 of 27", type: "single",
      question: "Drill pipe rotation can have a pronounced effect upon cuttings transport by mechanically agitating a cuttings bed",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "Pipe rotation mechanically stirs up cuttings beds that settle on the bottom of deviated wells, lifting them into the high-velocity fluid flow stream above the pipe (page 299)."
    },
    {
      id: "hw21_q20", number: "20 of 27", type: "single",
      question: "When drilling a directional well, for hole cleaning purposes it's recommended to try to rotate the drill string as much as possible",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "Drill pipe rotation is one of the most effective ways to mechanically disturb cuttings beds and keep them suspended in the flow stream. Thus, rotating as much as possible and minimizing sliding is key for hole cleaning (pages 299, 301)."
    },
    {
      id: "hw21_q21", number: "21 of 27", type: "single",
      question: "The principal negative effect of drill pipe eccentricity in high-angle drilling is to sharply reduce fluid flow under the drill pipe where the annular gap is narrow",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "In highly deviated wells, the drill pipe rests near the bottom of the hole (high eccentricity). This restricts flow in the narrow gap below the pipe, causing fluid velocity to drop significantly in the exact area where cuttings accumulate (page 299)."
    },
    {
      id: "hw21_q22", number: "22 of 27", type: "single",
      question: "Experience has shown that a maximum average percentage of cuttings of ___________ (for the entire well) should remain in the annulus, to avoid drilling issues",
      options: [
        { value: "3_percent", label: "3%" },
        { value: "5_percent", label: "5%" },
        { value: "10_percent", label: "10%" },
        { value: "1_percent", label: "1%" }
      ],
      answer: "3_percent",
      explanation: "Experience shows that keeping the total cuttings concentration to a maximum average of 3% by volume for the entire wellbore annulus helps avoid drilling issues such as stuck pipe and packs-offs (page 300)."
    },
    {
      id: "hw21_q23", number: "23 of 27", type: "single",
      question: "For each interval (diameter section) of the wellbore, a maximum of ___________ may be handled without compromising the cleaning of the hole",
      options: [
        { value: "3_percent", label: "3%" },
        { value: "5_percent", label: "5%" },
        { value: "10_percent", label: "10%" },
        { value: "15_percent", label: "15%" }
      ],
      answer: "10_percent",
      explanation: "While the well average should not exceed 3% cuttings by volume, any single diameter interval can handle up to 10% cuttings concentration without compromising hole cleaning, as long as the overall wellbore average is low (page 300)."
    },
    {
      id: "hw21_q24", number: "24 of 27", type: "single",
      question: "Field studies indicate that the rotating the pipe while drilling improves the hole cleaning efficiency by approximately 5%.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "Field studies show that rotating the drill pipe while drilling improves hole cleaning efficiency by approximately 25%, not 5% (pages 299, 301)."
    },
    {
      id: "hw21_q25", number: "25 of 27", type: "single",
      question: "For hole cleaning purposes, short trip while pumping are not recommended because they increase the time to drill the well and could disturb the cuttings beds in the wellbore",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "Short trips while pumping are actually recommended because pumping while tripping/reaming helps stir up and remove cuttings beds mechanically (page 301)."
    },
    {
      id: "hw21_q26", number: "26 of 27", type: "single",
      question: "Sweeps are a primary tool to provide effective hole cleaning",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "Sweeps are secondary tools, not primary tools. Effective hole cleaning is achieved through optimized continuous hydraulics, drill string rotation, and proper mud properties (page 302)."
    },
    {
      id: "hw21_q27", number: "27 of 27", type: "single",
      question: "It is recommended to pump only 2ppg over high density sweeps in deviated wells to avoid exceeding the fracture gradient of the wellbore?",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "There is no set rule that high-density sweeps should be limited to 2 ppg over the active mud density. Instead, the density of a high-density sweep must be decided using the well's specific fracture gradient and modeled in DFG to ensure the fracture pressure is not exceeded (BAROID - Handbook, page 129)."
    }
  ]
};

// ============================================================
// HOMEWORK 22 – Pore Pressures & Wellbore Instability
// ============================================================
const homework_22 = {
  title: "Homework 22: Pore Pressures & Wellbore Instability",
  description: "Review pore pressure regimes, causes of wellbore instability, stuck pipe mechanisms, spacer design, hole cleaning flow regimes, and hydraulics concepts.",
  questions: [
    {
      id: "hw22_q1", number: "1 of 20", type: "single",
      question: "Which of the following best describes abnormal (sur-normal) pore pressure?",
      options: [
        { value: "greater_than_normal", label: "Pore pressure greater than the defined normal" },
        { value: "less_than_normal", label: "Pore pressure less than the defined normal" },
        { value: "equal_to_normal", label: "Pore pressure equal to the defined normal" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "greater_than_normal",
      explanation: "Abnormal (sur-normal) pore pressure refers to pore pressure that is greater than the defined normal (hydrostatic) gradient for the given depth. Normal pore pressure corresponds to a full column of formation water (~0.465 psi/ft). Anything above this is abnormal (Participant Guide, Pore Pressure section)."
    },
    {
      id: "hw22_q2", number: "2 of 20", type: "single",
      question: "Which of the following best describes sub-normal pore pressure?",
      options: [
        { value: "less_than_normal", label: "Pore pressure less than the defined normal" },
        { value: "equal_to_normal", label: "Pore pressure equal to the defined normal" },
        { value: "greater_than_normal", label: "Pore pressure greater than the defined normal" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "less_than_normal",
      explanation: "Sub-normal pore pressure refers to pore pressure that is less than the defined normal (hydrostatic) gradient for the given depth. This can occur in depleted reservoirs or in areas with artesian effects (Participant Guide, Pore Pressure section)."
    },
    {
      id: "hw22_q3", number: "3 of 20", type: "multiple",
      question: "Which of the following can cause abnormal (sur-normal) pore pressure?",
      options: [
        { value: "tectonic_movement", label: "Tectonic movement" },
        { value: "rapid_deposition", label: "Rapid deposition" },
        { value: "reservoir_length", label: "Reservoir length" },
        { value: "clay_diagenesis", label: "Clay diagenesis" },
        { value: "reservoir_structure", label: "Reservoir structure" },
        { value: "clay_mineralogy", label: "Clay mineralogy" },
        { value: "slow_deposition", label: "Slow deposition" }
      ],
      answer: ["tectonic_movement", "rapid_deposition", "clay_diagenesis", "reservoir_structure"],
      explanation: "Abnormal pore pressure can be caused by: tectonic movement, rapid deposition, clay diagenesis, and reservoir structure (Participant Guide, Pore Pressure section)."
    },
    {
      id: "hw22_q4", number: "4 of 20", type: "single",
      question: "Which of the following can lead to wellbore instability?",
      options: [
        { value: "drill_string", label: "Drill string" },
        { value: "drilling_fluids", label: "Drilling fluids" },
        { value: "drilling_operations", label: "Drilling operations" },
        { value: "formation_properties", label: "Formation properties" },
        { value: "all_of_the_above", label: "All of the above" },
        { value: "none_of_the_above", label: "None of the above" }
      ],
      answer: "all_of_the_above",
      explanation: "Wellbore instability can be caused by all four factors: formation properties (natural fractures, reactive shales), drilling fluid (chemistry, density), drilling operations (ECD, tripping speed), and the drill string itself (vibrations, whirl) (Participant Guide, Wellbore Instability section)."
    },
    {
      id: "hw22_q5", number: "5 of 20", type: "single",
      question: "How can frequent tripping lead to well bore instability?",
      options: [
        { value: "surge_swab", label: "Surge and swab pressures" },
        { value: "not_enough_circulating", label: "Not enough circulating time" },
        { value: "not_cleaning_hole", label: "Not cleaning the hole" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "surge_swab",
      explanation: "Frequent tripping generates surge pressures (pipe running in) and swab pressures (pipe pulling out). Swab can reduce the wellbore pressure below pore pressure causing an influx, while surge can exceed the fracture gradient causing losses—both leading to wellbore instability (Participant Guide, Wellbore Instability section)."
    },
    {
      id: "hw22_q6", number: "6 of 20", type: "single",
      question: "What is the most common formation type that causes wellbore instability?",
      options: [
        { value: "shale", label: "Shale" },
        { value: "sandstone", label: "Sandstone" },
        { value: "limestone", label: "Limestone" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "shale",
      explanation: "Shale is the most common formation type causing wellbore instability. Shales are water-sensitive clays that can swell when exposed to water-based mud, leading to borehole enlargement, tight hole, and cavings (Participant Guide, Wellbore Instability / Shale section)."
    },
    {
      id: "hw22_q7", number: "7 of 20", type: "single",
      question: "Which of the following can cause a key seat?",
      options: [
        { value: "thick_sticky_wall_cake", label: "Thick sticky wall cake" },
        { value: "under_gauge_bit", label: "Under-gauge bit" },
        { value: "water_sensitive_shale", label: "Water sensitive shale" },
        { value: "crooked_hole_dogleg", label: "Crooked hole with short dog-legs" }
      ],
      answer: "crooked_hole_dogleg",
      explanation: "Mecanismo de Formación:\n¿Cómo ocurre? Se presenta con frecuencia en pozos desviados, torcidos o con cambios bruscos de ángulo (severidad de pata de perro o dogleg severity). La rotación normal y la tensión de la sarta de perforación hacen que la tubería ejerza una fuerte presión lateral y fricción contra la pared de la formación, especialmente si esta es relativamente blanda.\n\nEl canal: Con el paso del tiempo y a lo largo de varias carreras de perforación (bit runs), la sarta cava físicamente un canal o ranura estrecha que tiene un diámetro muy similar al de la tubería de perforación (drillpipe) o de las conexiones (tool joints).\n\nEl atascamiento: Al momento de sacar la tubería del pozo (maniobra de salida o tripping out), la tubería de perforación y las juntas de conexión delgadas pasan sin problema a través de este canal angosto. Sin embargo, cuando los componentes de mayor diámetro de la sarta —como los portamechas (drill collars) o la barrena— llegan a esa sección, se acuñan y quedan mecánicamente atrapados al no poder pasar por la ranura."
    },
    {
      id: "hw22_q8", number: "8 of 20", type: "single",
      question: "Which of the following can cause differentially stuck pipe?",
      options: [
        { value: "thick_sticky_wall_cake", label: "Thick sticky wall cake across a sand" },
        { value: "under_gauge_bit", label: "Under-gauge bit" },
        { value: "water_sensitive_shale", label: "Water sensitive shale" },
        { value: "crooked_hole_dogleg", label: "Crooked hole with short dog-legs" }
      ],
      answer: "thick_sticky_wall_cake",
      explanation: "Differential sticking occurs when the hydrostatic pressure of the mud column significantly exceeds the formation pore pressure across a permeable zone, and a thick, sticky filter cake allows the drill string to become embedded and held fast (Participant Guide, Wellbore Instability section)."
    },
    {
      id: "hw22_q9", number: "9 of 20", type: "single",
      question: "Which of the following can lead to an under gauge hole?",
      options: [
        { value: "thick_sticky_wall_cake", label: "Thick sticky wall cake" },
        { value: "crooked_hole_dogleg", label: "Crooked hole with short dog-legs" },
        { value: "water_sensitive_shale", label: "Water sensitive shale" },
        { value: "under_gauge_bit", label: "Under-gauge bit" }
      ],
      answer: "under_gauge_bit",
      explanation: "An under-gauge bit drills a borehole with a diameter smaller than nominal gauge, leading directly to an under-gauge hole section."
    },
    {
      id: "hw22_q10", number: "10 of 20", type: "single",
      question: "What is the minimal amount of annular footage a spacer should cover in a vertical well?",
      options: [
        { value: "500ft", label: "500ft" },
        { value: "250ft", label: "250ft" },
        { value: "300ft", label: "300ft" },
        { value: "400ft", label: "400ft" }
      ],
      answer: "500ft",
      explanation: "Spacers should cover a minimum of 500 ft of annular length in a vertical well to provide adequate separation and cleaning between the two incompatible fluids and ensure effective contact time with the wellbore surfaces (Participant Guide, Displacements section)."
    },
    {
      id: "hw22_q11", number: "11 of 20", type: "single",
      question: "When displacing a water based fluid with a Non Aqueous fluid. Which fluid should be used as a base for the spacer?",
      options: [
        { value: "fresh_water", label: "Fresh Water" },
        { value: "base_oil", label: "Base oil" },
        { value: "non_aqueous_fluid", label: "Non Aqueous fluid" },
        { value: "water_based_fluid", label: "Water based fluid" }
      ],
      answer: "base_oil",
      explanation: "When displacing a water-based fluid with a Non-Aqueous Fluid (NAF), the spacer base should be base oil. The first pill in a NAF displacement train is base fluid, to begin the wettability transition and ensure compatibility with the incoming OBM/SBM (Participant Guide, page 268 – Displacement train for NAF)."
    },
    {
      id: "hw22_q12", number: "12 of 20", type: "single",
      question: "When displacing the wellbore the weight of the spacer should be?",
      options: [
        { value: "equal_new_fluid", label: "Equal to the new fluid" },
        { value: "less_new_fluid", label: "Less than the new fluid" },
        { value: "greater_new_fluid", label: "Greater than the new fluid" },
        { value: "average_two_fluids", label: "An average of the two fluids" }
      ],
      answer: "average_two_fluids",
      explanation: "The spacer density must fall between the density of the mud being displaced and the new fluid. The spacer weight should be an average of the two fluids (old mud and new completion fluid) to maintain stable hydrostatics and prevent mixing by density inversion (Baroid Fluids Handbook, Cementing – Spacers section; density margin of 1 to 1.5 lb/gal each way)."
    },
    {
      id: "hw22_q13", number: "13 of 20", type: "single",
      question: "The fluid pumped through the bit nozzles while drilling is in transitional flow:",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "The fluid pumped through bit nozzles is in turbulent flow, not transitional. Bit jet nozzles operate at shear rates of 100,000 to 500,000 RPM equivalent. Transitional flow is typical in drill pipe and collars while circulating. Turbulent flow occurs at high shear rates (Participant Guide, page 197 – Shear Rates in the Mud System)."
    },
    {
      id: "hw22_q14", number: "14 of 20", type: "single",
      question: "Which of the following problems can be caused by poor hole cleaning?",
      options: [
        { value: "formation_damage", label: "Formation damage" },
        { value: "tight_hole", label: "Tight hole" },
        { value: "stuck_pipe", label: "Stuck pipe" },
        { value: "all_of_the_above", label: "All of the above" }
      ],
      answer: "all_of_the_above",
      explanation: "Poor hole cleaning leads to cuttings bed accumulation which can cause: tight hole (restricts pipe movement), stuck pipe (cuttings pack around string), and formation damage (cuttings forced back into the reservoir during surges) (Participant Guide, Hole Cleaning section)."
    },
    {
      id: "hw22_q15", number: "15 of 20", type: "single",
      question: "In a high angle wellbore which of the following sweeps could be used to indicate effectiveness of hole cleaning?",
      options: [
        { value: "lcm_sweep", label: "LCM sweep" },
        { value: "high_viscosity", label: "High viscosity" },
        { value: "weighted", label: "Weighted" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "weighted",
      explanation: "In high-angle wellbores, weighted (high-density) sweeps are recommended to clean cuttings beds. The Participant Guide (page 302) states: 'Use high-density sweeps to clean high-angled sections, high-viscosity sweeps for vertical sections.' The return of cuttings when a weighted sweep surfaces indicates effectiveness."
    },
    {
      id: "hw22_q17", number: "16 of 19", type: "single",
      question: "At the same flow rate, a fully concentric drill pipe has a higher pressure drop than does an eccentric pipe in the same hole section",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "True. Al mismo caudal, una tubería de perforación totalmente concéntrica presenta una mayor caída de presión que una tubería excéntrica en la misma sección del pozo, debido a que en la configuración concéntrica el espacio anular es menor en comparación con la zona de mayor espacio de la tubería excéntrica, resultando en una mayor velocidad del fluido y mayor fricción."
    },
    {
      id: "hw22_q18", number: "17 of 19", type: "single",
      question: "The frictional pressure which causes the wellbore pressure to be lower when the BHA and drill string are withdrawnfrom the hole is called",
      options: [
        { value: "swab", label: "Swab" },
        { value: "surge", label: "Surge" },
        { value: "slip", label: "Slip" },
        { value: "avalanche", label: "Avalanche" }
      ],
      answer: "swab",
      explanation: "Swab is the frictional pressure that causes the wellbore pressure to be lower when the BHA and drill string are withdrawn (pulled out) from the hole. This pressure reduction can cause an underbalanced condition and kick. Surge is the opposite effect when running pipe into the hole (Handbook, page 15 – Swab definition)."
    },
    {
      id: "hw22_q19", number: "18 of 19", type: "single",
      question: "Surpassing the formation fracture pressure can lead to wellbore instability and loss circulation events",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "When the bottomhole pressure (BHP or ECD) exceeds the formation fracture gradient, the formation fractures, creating pathways for the drilling fluid to escape into the formation. This results in lost circulation and can induce borehole breakout or wellbore instability (Participant Guide, Pore Pressure & Fracture Gradient section)."
    },
    {
      id: "hw22_q20", number: "19 of 19", type: "single",
      question: "The chemistry of the drilling fluid is important, because it can cause wellbore instability",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "The chemistry of the drilling fluid directly affects wellbore stability. For example, using a water-based mud with insufficient inhibition in a shale section can cause clay swelling, borehole enlargement, and wellbore instability. Fluid chemistry (pH, salt concentration, inhibition additives) must be matched to the formation (Participant Guide, Wellbore Instability section)."
    }
  ]
};

// Register new homeworks into QUIZ_DATA
QUIZ_DATA.homework_18 = homework_18;
QUIZ_DATA.homework_21 = homework_21;
QUIZ_DATA.homework_22 = homework_22;

// ============================================================
// VIDEO QUIZ: Completion Fluids (Video Questions)
// ============================================================
const video_completions = {
  title: "Video Quiz: Completion Fluids",
  description: "Practice questions from the Completion Fluids video. Topics include fluid categories, hydrate formation, overbalance margins, polymer selection, brine quality tools, and PPE.",
  questions: [
    {
      id: "vcf_q1", number: "1 of 8", type: "multiple",
      question: "What are the two categories of Completion Fluids? (Select all that apply)",
      options: [
        { value: "base", label: "Base" },
        { value: "non_aqueous", label: "Non-aqueous Solution" },
        { value: "aqueous", label: "Aqueous Solution" },
        { value: "acidic", label: "Acidic" }
      ],
      answer: ["non_aqueous", "aqueous"],
      explanation: "Completion fluids are classified into two broad categories based on their continuous phase:\n\n• Aqueous Solutions: Water-based fluids (brines) such as NaCl, KCl, CaCl2, CaBr2, and ZnBr2. These are the most common completion fluids.\n• Non-Aqueous Solutions: Oil-based or synthetic-based fluids used when water sensitivity of the formation is a concern.\n\nBrines are the primary completion fluid type and are selected by density, compatibility, and formation requirements (Participant Guide, Unit 30 – Completion Fluids, Page 261)."
    },
    {
      id: "vcf_q2", number: "2 of 8", type: "multiple",
      question: "What are the four elements needed to form Hydrates? (Select all that apply)",
      options: [
        { value: "sea_salt", label: "Sea Salt" },
        { value: "cold_temperature", label: "Cold Temperature" },
        { value: "water", label: "Water" },
        { value: "hydrocarbons", label: "Hydrocarbons" },
        { value: "high_pressure", label: "High Pressure" },
        { value: "low_pressure", label: "Low Pressure" }
      ],
      answer: ["cold_temperature", "water", "hydrocarbons", "high_pressure"],
      explanation: "Gas hydrates (clathrates) are ice-like solids that form when four specific conditions are met simultaneously:\n\n1. Water – A source of water molecules is required as the host structure.\n2. Hydrocarbons (gas) – Light hydrocarbon gases (methane, ethane, propane) act as the guest molecules.\n3. High Pressure – Elevated pressures favor hydrate stability by compressing gas into the water lattice.\n4. Cold Temperature – Low temperatures thermodynamically favor hydrate formation.\n\nSea Salt actually INHIBITS hydrate formation (thermodynamic inhibitor effect). Low Pressure destabilizes hydrates.\n\nHydrate formation is a critical concern during well completions, especially in deepwater environments where cold temperatures and high pressures are naturally present (Participant Guide, Completion Fluids section; Baroid Fluids Handbook – Hydrate Inhibition)."
    },
    {
      id: "vcf_q3", number: "3 of 8", type: "single",
      question: "Completion Fluids are used to ____________ the production of a WELL.",
      options: [
        { value: "increase", label: "Increase" },
        { value: "viscosify", label: "Viscosify" },
        { value: "frac", label: "Frac" },
        { value: "decrease", label: "Decrease" }
      ],
      answer: "increase",
      explanation: "The primary purpose of completion fluids is to maximize and increase well production. They achieve this by:\n\n• Minimizing formation damage to preserve or restore reservoir permeability.\n• Providing wellbore pressure control during completion operations (perforating, gravel packing, running screens).\n• Enabling clean, undamaged pathways for hydrocarbons to flow from the reservoir to the wellbore.\n\nA well-designed completion fluid program directly translates to higher production rates and better long-term well performance (Participant Guide, Unit 30 – Completion Fluids, Page 261)."
    },
    {
      id: "vcf_q4", number: "4 of 8", type: "single",
      question: "Completion Fluids mitigate skin damage in low permeability rock.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Skin damage refers to a reduction in near-wellbore permeability caused by invasion of foreign solids or fluids during drilling and completion operations. Completion fluids are specifically engineered to mitigate (reduce) skin damage by:\n\n• Using clean, filtered brines that do not introduce external solids.\n• Matching brine chemistry to formation water to avoid precipitation.\n• Controlling filtrate invasion with appropriate fluid properties.\n\nIn low-permeability rock, every unit of permeability is critical. Even minor skin damage can disproportionately reduce production, making the use of properly designed completion fluids essential (Participant Guide, Unit 30 – Completion Fluids, Page 261)."
    },
    {
      id: "vcf_q5", number: "5 of 8", type: "single",
      question: "Which polymer used in Completion Fluids gives the best suspension?",
      options: [
        { value: "hec", label: "HEC" },
        { value: "xc", label: "XC" }
      ],
      answer: "xc",
      explanation: "XC Polymer (Xanthan Gum) provides superior suspension compared to HEC (Hydroxyethyl Cellulose) due to its unique rheological profile:\n\n• XC Polymer exhibits strong shear-thinning behavior and forms a strong three-dimensional gel structure at rest (high static gel strength). This means it can suspend solids (e.g., gravel, weighting agents) effectively during static conditions.\n• HEC is a non-ionic cellulose polymer that provides viscosity but has much weaker gel strength, making it less effective for particle suspension.\n\nXC is preferred when suspension of solids is the primary requirement. HEC is often chosen when cleaner, more filterable fluids are needed (e.g., in sensitive carbonate formations where HEC can be removed with acid) (Participant Guide, Unit 30 – Completion Fluids, Page 261-262)."
    },
    {
      id: "vcf_q6", number: "6 of 8", type: "single",
      question: "What is the typical safe margin for overbalance during a completion?",
      options: [
        { value: "300_700", label: "300-700 psi" },
        { value: "200_600", label: "200-600 psi" },
        { value: "400_800", label: "400-800 psi" },
        { value: "500_900", label: "500-900 psi" }
      ],
      answer: "200_600",
      explanation: "The typical safe overbalance margin during a completion is 200–600 psi above formation pore pressure.\n\nThis range balances two competing risks:\n• Too low overbalance (<200 psi): Risk of underbalance, allowing formation fluids to flow uncontrolled into the wellbore (kick/blowout hazard).\n• Too high overbalance (>600 psi): Excessive fluid invasion into the formation, causing formation damage, filtrate invasion, and reduced productivity.\n\nMaintaining the fluid column within this 200–600 psi window provides well control safety while minimizing the driving force for fluid loss and formation damage during completion operations (Participant Guide, Completion Fluids section; Baroid Fluids Handbook)."
    },
    {
      id: "vcf_q7", number: "7 of 8", type: "multiple",
      question: "What two tools provide a picture of how clean the brine is? (Select all that apply)",
      options: [
        { value: "filter_unit", label: "Filter Unit" },
        { value: "pump_truck", label: "Pump Truck" },
        { value: "centrifuge", label: "Centrifuge" },
        { value: "ntu_meter", label: "NTU Meter" }
      ],
      answer: ["centrifuge", "ntu_meter"],
      explanation: "Two tools are used to assess brine cleanliness:\n\n• Centrifuge: Spins the brine sample at high RPM to separate and quantify suspended solids by volume. Results are expressed as volume percent solids. This gives a direct measure of the total solid particle load in the brine.\n• NTU Meter (Nephelometric Turbidity Unit): Measures light scattering caused by suspended particles in the fluid. The higher the NTU reading, the cloudier and more contaminated the brine. NTU meters detect very fine particles that may not be visible to the naked eye.\n\nThe Filter Unit and Pump Truck are operational equipment used to clean brine, not measurement tools (Participant Guide, Unit 34 – Filtration Services, Page 288)."
    },
    {
      id: "vcf_q8", number: "8 of 8", type: "multiple",
      question: "List four forms of PPE needed when working with brine. (Select all that apply)",
      options: [
        { value: "face_mask", label: "Face Mask" },
        { value: "safety_glasses", label: "Safety Glasses" },
        { value: "latex_gloves", label: "Latex Gloves" },
        { value: "plastic_shield", label: "Plastic Shield" },
        { value: "safety_enclosure", label: "Safety Enclosure" },
        { value: "steel_toe_boots", label: "Steel-toe rubber Boots" }
      ],
      answer: ["safety_glasses", "latex_gloves", "plastic_shield", "steel_toe_boots"],
      explanation: "When handling brines (especially high-density brines containing CaBr2 or ZnBr2, which can be corrosive and hazardous), the following PPE is required:\n\n• Safety Glasses: Protect eyes from brine splashes, which can cause serious irritation or chemical burns.\n• Latex Gloves: Protect skin from prolonged contact with concentrated brine salts, which can cause dryness, irritation, or chemical burns.\n• Plastic Shield (Face Shield): Provides full-face protection from splashes during brine mixing, transfer, or sampling operations.\n• Steel-toe rubber Boots: Protect feet from heavy containers and from brine spills on the floor, which can be slippery and corrosive.\n\nA standard Face Mask (respiratory protection) is not typically required for brine handling under normal ventilated conditions. A Safety Enclosure is not standard PPE for brine work (Participant Guide, Completion Fluids / HSE section)."
    }
  ]
};

QUIZ_DATA.video_completions = video_completions;

// ============================================================
// VIDEO QUIZ: Formation Damage (Video Questions)
// ============================================================
const video_formation_damage = {
  title: "Video Quiz: Formation Damage",
  description: "Practice questions from the Formation Damage video. Topics include causes of low production, damage mechanisms, clay behavior, scaling, skin calculation, and wettability.",
  questions: [
    {
      id: "vfd_q1", number: "1 of 10", type: "multiple",
      question: "Identify some of the causes of low hydrocarbon production rates. (Select the three that apply)",
      options: [
        { value: "high_oil_viscosity", label: "High oil viscosity" },
        { value: "formation_damage", label: "Formation damage" },
        { value: "casing_design", label: "Casing design" },
        { value: "low_overbalance", label: "Low overbalance" },
        { value: "low_permeability", label: "Low reservoir permeability" }
      ],
      answer: ["high_oil_viscosity", "formation_damage", "low_permeability"],
      explanation: "The three primary causes of low hydrocarbon production rates are:\n\n• High oil viscosity: Heavy, viscous oil has high resistance to flow through pore channels, directly reducing production rate (Darcy's Law — flow rate is inversely proportional to viscosity).\n• Formation damage: Any process that reduces the natural permeability of the reservoir restricts hydrocarbon flow.\n• Low reservoir permeability: Low-permeability formations (tight sands, shales) inherently restrict fluid flow.\n\nCasing design is a mechanical/completion engineering decision that does not directly cause low production rates. Low overbalance during drilling is actually desirable to minimize invasion — it does not cause low production rates (Participant Guide, Page 244-245)."
    },
    {
      id: "vfd_q2", number: "2 of 10", type: "single",
      question: "Reducing a reservoir's permeability can lead to formation damage.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Formation damage is defined precisely as any process that reduces the natural permeability of a formation. Permeability is the reservoir's ability to transmit fluids. When any physical or chemical mechanism reduces this property — whether through particle plugging, clay swelling, emulsion blockage, or scale deposition — the result is formation damage and impaired hydrocarbon recovery (Participant Guide, Page 244)."
    },
    {
      id: "vfd_q3", number: "3 of 10", type: "multiple",
      question: "Identify the causes of formation damage. (Select all that apply)",
      options: [
        { value: "clay_swelling", label: "Clay swelling" },
        { value: "bit_selection", label: "Bit selection" },
        { value: "fluid_incompatibility", label: "Fluid incompatibility" },
        { value: "emulsion_blockage", label: "Emulsion blockage" },
        { value: "all_of_the_above", label: "All of the above" }
      ],
      answer: ["clay_swelling", "fluid_incompatibility", "emulsion_blockage"],
      explanation: "The recognized causes of formation damage include:\n\n• Clay swelling: Water-sensitive clays (especially Smectite) absorb water from the drilling or completion fluid, swell into the pore throats, and block hydrocarbon flow.\n• Fluid incompatibility: Mixing of incompatible fluids (e.g., filtrate with formation water) creates chemical precipitates (scales) that plug pores.\n• Emulsion blockage: Excessive emulsifiers can promote crude-brine emulsions inside the reservoir, drastically increasing apparent viscosity and blocking pore channels.\n\nBit selection is a mechanical drilling parameter that affects ROP and wellbore trajectory but does not directly cause formation damage. 'All of the above' is incorrect because Bit selection is included (Participant Guide, Page 245)."
    },
    {
      id: "vfd_q4", number: "4 of 10", type: "single",
      question: "As long as particles in the reservoir fluid are smaller than the pore throats, no damage will occur.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "FALSE. Even particles smaller than the pore throats can cause significant formation damage through several mechanisms:\n\n• Bridging: Multiple fine particles can accumulate simultaneously at a pore throat opening, forming a stable bridge that restricts flow even though each individual particle is smaller than the throat.\n• Particle migration: Once inside the porous medium, fine particles (fines) can migrate deep into the formation and accumulate in constrictions far from the wellbore.\n• Log-jamming: A cascade of fine particles can progressively restrict a pore throat over time.\n\nThis is why a properly designed Particle Size Distribution (PSD) for bridging agents must place particles at or slightly larger than the pore throat diameter — not just 'smaller than' (Participant Guide, Page 247)."
    },
    {
      id: "vfd_q5", number: "5 of 10", type: "single",
      question: "Formation damage from reservoir fluids is the only cause of a high skin.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "FALSE. Skin (S) is a dimensionless number that quantifies the total near-wellbore pressure drop beyond what would be expected from an undamaged reservoir. Formation damage is one cause, but high skin values can result from multiple sources:\n\n• Mechanical skin: Partial penetration of the reservoir, incomplete perforations, or deviated wellbore effects.\n• Turbulence / non-Darcy flow: At very high production rates, inertial effects near the wellbore add a rate-dependent pseudo-skin (especially in gas wells).\n• Drilling damage: Solids and filtrate invasion during drilling.\n• Completion damage: Cement filtrate invasion, scale deposition, or fines migration during production.\n\nA negative skin value actually indicates stimulation (e.g., after a hydraulic fracture or acid job), further demonstrating that skin is not solely caused by formation damage from reservoir fluids (Participant Guide, Formation Damage section)."
    },
    {
      id: "vfd_q6", number: "6 of 10", type: "single",
      question: "Smectite usually breaks free of the sand grains and migrates into the reservoir, causing formation damage.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "FALSE. This statement describes the behavior of Kaolinite and Illite, not Smectite.\n\n• Smectite (Montmorillonite): When exposed to fresh water or low-salinity fluid, Smectite absorbs water molecules between its clay platelets and SWELLS (expands in place). It typically remains bonded to the sand grain surfaces and causes damage by reducing pore throat diameter through swelling — it does not migrate.\n• Kaolinite: Exists as booklets loosely attached to grain surfaces. It is easily dislodged by fluid flow turbulence and migrates into pore throats.\n• Illite: Exists as fine filaments/fibers that can detach and migrate, bridging pore throats and causing severe permeability reduction.\n\nTherefore, migration is the primary damage mechanism of Kaolinite and Illite, while swelling is the primary damage mechanism of Smectite (Participant Guide, Page 245-246)."
    },
    {
      id: "vfd_q7", number: "7 of 10", type: "single",
      question: "What is another common term for chemical precipitation in the reservoir?",
      options: [
        { value: "carbonizing", label: "Carbonizing" },
        { value: "tct", label: "TCT" },
        { value: "scaling", label: "Scaling" },
        { value: "rusting", label: "Rusting" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "scaling",
      explanation: "Scaling is the industry term for chemical precipitation inside the reservoir or wellbore. Scale forms when incompatible fluids mix and soluble ions exceed their solubility limits, precipitating as solid mineral deposits.\n\nCommon scales include:\n• Calcium carbonate (CaCO₃): Precipitates when pH rises or CO₂ partial pressure drops.\n• Calcium sulfate / Gypsum (CaSO₄): Forms when calcium-rich and sulfate-rich fluids mix.\n• Barium sulfate (BaSO₄): One of the hardest scales to remove, forms from barium/sulfate mixing.\n• Iron sulfide / hydroxide: Forms from iron-rich brines at elevated pH.\n\nScaling is a major cause of formation damage and wellbore impairment in production operations (Participant Guide, Page 248)."
    },
    {
      id: "vfd_q8", number: "8 of 10", type: "single",
      question: "How can soluble iron be removed from brine?",
      options: [
        { value: "sodium_chloride", label: "Add sodium chloride" },
        { value: "calcium_carbonate", label: "Add calcium carbonate" },
        { value: "citric_acid", label: "Add citric acid" },
        { value: "raise_ph", label: "Raise pH above 9.5" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "raise_ph",
      explanation: "Raising the pH of the brine above 9.5 causes soluble iron (Fe²⁺, ferrous iron) to oxidize and precipitate out of solution as iron hydroxide [Fe(OH)₃], which can then be filtered out:\n\nFe²⁺ → Fe³⁺ (oxidation) → Fe(OH)₃ ↓ (precipitation at pH > 9.5)\n\nThis is the standard procedure for iron removal from completion brines:\n1. Raise pH above 9.5 (using NaOH or KOH).\n2. Allow iron to precipitate as Fe(OH)₃.\n3. Filter through the filtration unit to remove the precipitate.\n\nNote: Citric acid is used as an iron-sequestering agent in acid stimulation jobs (to prevent iron sludge during acidizing), but is not the correct answer for removing soluble iron from clear brine. Adding NaCl or CaCO₃ does not precipitate iron (Participant Guide, Completion Fluids / Filtration section)."
    },
    {
      id: "vfd_q9", number: "9 of 10", type: "single",
      question: "Most reservoir rocks are naturally oil-wet.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "FALSE. Most reservoir rocks are naturally water-wet (strongly water-wet). This is because:\n\n• Reservoir rocks (sandstones, carbonates) were originally deposited in aqueous environments. The mineral surfaces are initially in contact with formation water and have a high affinity for water.\n• Water-wet rocks have a water film coating the grain surfaces, with oil occupying the center of the pore space. This configuration is more favorable for oil production (water can displace oil efficiently during waterflooding).\n\nOil-wet reservoirs are less common and typically result from asphaltene or resin deposition from the crude oil onto the grain surfaces over geological time. Wettability alteration from oil-wet to water-wet conditions is an important EOR (Enhanced Oil Recovery) consideration.\n\nMaintaining or restoring water-wet conditions is a key objective of completion fluid design (Participant Guide, Formation Damage section)."
    },
    {
      id: "vfd_q10", number: "10 of 10", type: "multiple",
      question: "Skin is calculated using: (Select all that apply)",
      options: [
        { value: "perm_altered", label: "Permeability of the altered zone" },
        { value: "perm_unaltered", label: "Permeability of the unaltered zone" },
        { value: "radius_wellbore", label: "Radius of the wellbore" },
        { value: "radius_altered", label: "Radius of the altered zone" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: ["perm_altered", "perm_unaltered", "radius_wellbore", "radius_altered"],
      explanation: "Skin (S) is calculated using the Hawkins formula:\n\nS = (k/ks − 1) × ln(rs/rw)\n\nWhere:\n• k = Permeability of the unaltered (undamaged) reservoir zone\n• ks = Permeability of the altered (damaged) zone\n• rs = Radius of the altered zone (depth of damage from wellbore center)\n• rw = Radius of the wellbore\n\nPhysical interpretation:\n• If ks < k (damage): S > 0 (positive skin — damage, restricted production)\n• If ks = k (no damage): S = 0 (no skin)\n• If ks > k (stimulation, e.g., acid job): S < 0 (negative skin — enhanced production)\n\nAll four variables are required to quantify skin. A larger skin value indicates more severe near-wellbore damage and greater production impairment (Participant Guide, Formation Damage section)."
    },
    {
      id: "vfd_q11", number: "11 of 19", type: "single",
      question: "Skin is a description of a membrane which forms over the wellbore.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "FALSE. Skin is NOT a physical membrane or material layer. Skin (S) is a dimensionless mathematical number used in reservoir engineering to quantify the total additional pressure drop near the wellbore beyond what would be expected from an undamaged formation.\n\n• Positive skin (S > 0): Indicates damage — there is more resistance to flow than expected. Could be caused by formation damage, partial penetration, or turbulence.\n• Zero skin (S = 0): Ideal — no damage or stimulation.\n• Negative skin (S < 0): Indicates stimulation — hydraulic fracturing or acid jobs create enhanced flow paths beyond the natural formation.\n\nThe term 'skin' is borrowed from the analogy of a skin over the wellbore restricting flow, but it is purely a mathematical/engineering concept, not a physical deposit or membrane (Participant Guide, Formation Damage section; Hawkins' Formula)."
    },
    {
      id: "vfd_q12", number: "12 of 19", type: "single",
      question: "Which filtering equipment would be the most practical for a deepwater well?",
      options: [
        { value: "dual_filter_pods", label: "Dual filter pods" },
        { value: "small_de_press", label: "Small DE press" },
        { value: "high_flow_de", label: "High-flow DE press" },
        { value: "high_flow_de_polish", label: "High-flow DE press with polishing filter pods" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "high_flow_de_polish",
      explanation: "For deepwater completion operations, the recommended filtration equipment is a High-flow DE (Diatomaceous Earth) press combined with polishing filter pods. This combination is the most practical because:\n\n• High-flow DE press: Handles the large volume flow rates required during deepwater displacement operations efficiently. DE filtration removes the bulk of suspended solids down to 2-5 microns.\n• Polishing filter pods: Provide a final polishing stage to capture any remaining fine particles that pass through the DE press, ensuring the brine reaches the required NTU cleanliness specification (typically < 5-10 NTU for sensitive reservoirs).\n\nWhy not the others?\n• Dual filter pods alone: Insufficient flow rate capacity for deepwater volumes; would clog rapidly under high solid loading.\n• Small DE press: Adequate flow rate but lacks polishing capability for the strictest cleanliness requirements.\n• High-flow DE press alone: Good flow rate but may not achieve the finest NTU specification without a polishing stage.\n\nSpace constraints on deepwater vessels also make the compact combination system preferable (Participant Guide, Unit 34 – Filtration Services, Page 288)."
    },
    {
      id: "vfd_q13", number: "13 of 19", type: "multiple",
      question: "Which areas should be very clean prior to exposing to clean brine? (Select all that apply)",
      options: [
        { value: "suction_pit", label: "Suction pit" },
        { value: "return_pit", label: "Return pit" },
        { value: "flowline", label: "Flowline" },
        { value: "transport_vessel", label: "Transport vessel" },
        { value: "waste_pit", label: "Waste pit" },
        { value: "flare_pit", label: "Flare pit" },
        { value: "all_above", label: "All of the above" }
      ],
      answer: ["suction_pit", "return_pit", "flowline", "transport_vessel"],
      explanation: "Before introducing clean completion brine into the system, all surfaces and containers that will come into direct contact with the brine must be thoroughly cleaned and inspected:\n\n• Suction pit: Where the clean brine is stored and drawn from. Any contamination here directly contaminates the entire brine volume.\n• Return pit: Receives the fluid returning from the wellbore during displacement. Must be clean to avoid re-contaminating the return brine samples used for quality verification.\n• Flowline: The pipe carrying brine to and from the wellbore. Residual drilling fluid, rust, scale, or solids in the flowline will contaminate the brine.\n• Transport vessel (e.g., brine tank/ship): Must be thoroughly cleaned and certified before loading clean brine. Any contamination from previous cargoes (crude oil, mud) will compromise brine quality.\n\nWaste pit and Flare pit are segregated disposal systems that do not come into contact with the clean brine circuit and therefore do not require cleaning for brine quality purposes (Participant Guide, Unit 34 – Filtration Services / Displacement Operations)."
    },
    {
      id: "vfd_q14", number: "14 of 19", type: "multiple",
      question: "When we design a non-damaging reservoir fluid, identify the steps we should take. (Select all that apply)",
      options: [
        { value: "sensitivity_testing", label: "Sensitivity testing" },
        { value: "return_perm_testing", label: "Return perm testing" },
        { value: "insensitivity_testing", label: "Insensitivity testing" },
        { value: "filtration_cut_point", label: "Filtration cut point" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: ["sensitivity_testing", "return_perm_testing"],
      explanation: "When designing a non-damaging reservoir fluid, two key laboratory steps are performed:\n\n1. Sensitivity Testing: Exposes the formation core/rock samples to candidate fluids under simulated downhole conditions. Determines how the formation reacts to different fluid chemistries (clay swelling, mineral dissolution, fines migration). Identifies which fluid types are compatible with the specific reservoir mineralogy.\n\n2. Return Permeability Testing: Measures the percentage of original permeability (Ki) recovered (Kf) after the core has been exposed to the drill-in or completion fluid and subsequently cleaned up with breaker systems. This directly quantifies the formation damage caused by the fluid design. Formula: Return Perm % = (Kf/Ki) \u00d7 100.\n\nWhy the other options are incorrect:\n\u2022 Insensitivity testing: Not a recognized industry test or procedure. There is no standardized protocol with this name.\n\u2022 Filtration cut point: This is a filtration design parameter (the micron rating used to specify filter equipment), not a laboratory design step for evaluating fluid damage potential. It is determined based on sensitivity and return perm results, not as a standalone design step.\n(Participant Guide, Formation Damage / Laboratory Testing section)."
    },
    {
      id: "vfd_q15", number: "15 of 19", type: "single",
      question: "The estimated annual cost to the oil industry due to formation damage is one hundred billion dollars.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Industry estimates consistently place the annual cost of formation damage to the global oil and gas industry in the range of one hundred billion dollars (US$100 billion) per year. This enormous figure includes:\n\n• Lost production revenue from wells producing below their potential.\n• Workover and stimulation costs (acid jobs, hydraulic fracturing) to restore damaged permeability.\n• Well abandonment costs when damage is irreversible.\n• Delayed production startup due to filter cake cleanup problems.\n\nThis figure underscores why proper drill-in fluid design, reservoir-compatible completion fluids, and filter cake removal are critical economic priorities — not just technical concerns (Participant Guide, Formation Damage Overview section)."
    },
    {
      id: "vfd_q16", number: "16 of 19", type: "single",
      question: "Low permeability wells are more prone to damage than are high permeability wells.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Low permeability formations are disproportionately more sensitive to formation damage for the following reasons:\n\n• Proportional impact: In a low permeability formation (e.g., 1 mD), even a modest reduction (e.g., to 0.5 mD) represents a 50% loss in productivity. In a high permeability formation (e.g., 1000 mD), the same absolute reduction is negligible.\n• Narrower pore throats: Low permeability rocks have smaller pore throat diameters. Fewer solid particles are needed to bridge and plug them completely.\n• Less tolerance for fines: The smaller pore throats in tight formations are easily blocked by even sub-micron fines that would pass harmlessly through a high permeability formation.\n• Skin effect amplification: The Hawkins equation shows that for low permeability formations, the skin effect (pressure drop penalty) per unit of damage is much higher.\n\nThis is why tight gas, tight oil, and HPHT reservoirs require extreme care in drill-in fluid design and execution (Participant Guide, Page 244)."
    },
    {
      id: "vfd_q17", number: "17 of 19", type: "single",
      question: "Formation damage is always caused by chemical incompatibilities between the reservoir fluid and the formation minerals or fluids.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "FALSE. Formation damage is NOT always caused by chemical incompatibilities. It has multiple root causes spanning physical, chemical, mechanical, and biological categories:\n\n• Physical damage: Fines migration (clay particles dislodged by flow velocity), particle plugging (solids bridging pore throats), and relative permeability changes (water blocking).\n• Chemical damage: Fluid incompatibility (scale precipitation when incompatible fluids mix), clay swelling (smectite + fresh water), and wettability alteration.\n• Mechanical damage: Perforation tunnel collapse, compaction near the wellbore, and cement filtrate invasion.\n• Biological damage: Bacterial plugging from introduced microorganisms that grow and form biofilms in the pore network.\n• Thermal damage: Asphaltene and paraffin deposition as temperature changes during production alter fluid stability.\n\nTherefore, while chemical incompatibility is a major cause, formation damage encompasses a broad range of physical and mechanical mechanisms as well (Participant Guide, Page 245)."
    },
    {
      id: "vfd_q18", number: "18 of 19", type: "single",
      question: "Reducing the porosity of a reservoir usually also reduces the permeability.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Porosity and permeability are generally positively correlated in most reservoir rocks. When porosity decreases:\n\n• Fewer and smaller pore spaces are available for fluid storage and flow.\n• The pore throats (connections between pores) also tend to become narrower, reducing the rock's ability to transmit fluids.\n• The Kozeny-Carman equation mathematically links permeability to the square of porosity divided by specific surface area, demonstrating the direct relationship.\n\nPractical examples:\n• A clean sandstone with 30% porosity will generally have much higher permeability than the same rock compacted to 10% porosity.\n• Cementation and compaction (which reduce porosity) also reduce permeability.\n\nImportant caveat: The relationship is not perfect — fractures can create high permeability in low-porosity rock (fracture permeability), and some high-porosity rocks (like chalk) can have low permeability due to poorly connected pores. But as a general rule, reducing porosity reduces permeability (Participant Guide, Formation Damage / Reservoir Characterization section)."
    },
    {
      id: "vfd_q19", number: "19 of 19", type: "single",
      question: "If a particle is small enough it is not likely to cause formation damage.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Particle size relative to pore throat diameter is the critical factor in determining whether a particle causes formation damage:\n\n• Particles much smaller than the pore throat diameter (typically less than 1/7 of the pore throat diameter) will pass freely through the pore network without bridging or plugging. They flow through with the reservoir fluid and exit the system.\n• Particles in the critical range (approximately 1/3 to 1/7 of the pore throat diameter) are the most dangerous — they are neither small enough to pass through nor large enough to bridge immediately at the surface. They migrate deep into the formation before eventually bridging, causing deep, irreversible damage.\n• Particles larger than the pore throat diameter bridge immediately at the face, forming a protective external filter cake.\n\nThis is the scientific basis for the 1/3 Rule in bridging agent design: by sizing bridging particles to be approximately 1/3 of the median pore throat diameter, they bridge at the formation face rather than invading deep (Participant Guide, Page 247; Abrams' Bridging Theory)."
    }
  ]
};

QUIZ_DATA.video_formation_damage = video_formation_damage;

// ============================================================
// VIDEO QUIZ: Hole Cleaning (Video Questions)
// ============================================================
const video_hole_cleaning = {
  title: "Video Quiz: Hole Cleaning",
  description: "Practice questions from the Hole Cleaning video. Topics include primary vs secondary methods, indicators of poor hole cleaning, drilling fluid properties, sweeps, annular velocity, and slip velocity.",
  questions: [
    {
      id: "vhc_q1", number: "1 of 10", type: "single",
      question: "A primary method for preventing stuck pipe is effective hole cleaning by using an adequate flow rate.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Primary hole cleaning methods are PROACTIVE — they are designed to prevent problems from ever developing. The most critical primary method is maintaining an adequate flow rate, which generates sufficient annular velocity (AV) to carry cuttings to surface continuously during drilling.\n\nOther primary methods include:\n• Optimizing drilling fluid rheology (yield point, viscosity) for the specific hole angle.\n• Maintaining drill string rotation (RPM) to agitate cuttings off the low side.\n• Controlling ROP (rate of penetration) to avoid generating more cuttings than the annulus can transport.\n\nWhen primary methods are properly applied, reactive secondary methods (sweeps, pills) should rarely be needed. Stuck pipe is one of the most expensive NPT (Non-Productive Time) events in drilling, so proactive hole cleaning is the preferred approach (Participant Guide, Hole Cleaning section)."
    },
    {
      id: "vhc_q2", number: "2 of 10", type: "single",
      question: "Secondary methods for effective hole cleaning are reactive in nature, and include sweeps and pills.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Secondary hole cleaning methods are REACTIVE — they are used in response to signs that primary methods have not adequately cleaned the wellbore. Examples include:\n\n• High viscosity sweeps: Viscous pills pumped to physically carry accumulated cuttings to surface. Effective in vertical and near-vertical wells.\n• High density (weighted) sweeps: Dense pills pumped in high angle and horizontal wells. The higher density stirs up the cuttings bed and helps 'float' the cuttings out of the wellbore.\n• Mechanical sweeps: Wiper trips or short trips designed to agitate cuttings beds before drilling deeper.\n\nImportant note from Baroid: Viscous sweeps are NOT recommended in horizontal wells because viscous fluids do not efficiently penetrate cuttings beds — they flow over the bed rather than disturbing it. High density sweeps are preferred in horizontal applications (Participant Guide, Hole Cleaning / Sweeps section)."
    },
    {
      id: "vhc_q3", number: "3 of 10", type: "single",
      question: "Secondary methods for effective hole cleaning should be used when the primary methods do not provide adequate hole cleaning.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. The correct hierarchy for hole cleaning is:\n\n1. PRIMARY methods first (flow rate, RPM, fluid rheology, ROP control): These are optimized before drilling begins and maintained throughout the well. They are the preferred approach because they are proactive and continuous.\n\n2. SECONDARY methods second (sweeps, pills, wiper trips): Applied when real-time monitoring indicates that primary methods are insufficient — for example, when elevated torque, drag, or ECD signals indicate cuttings accumulation.\n\nRelying on secondary methods as a substitute for poor primary hole cleaning is not best practice, as sweeps and pills only address accumulated cuttings rather than preventing their buildup. A well-planned primary hole cleaning strategy minimizes the need for reactive interventions (Participant Guide, Hole Cleaning section)."
    },
    {
      id: "vhc_q4", number: "4 of 10", type: "single",
      question: "The following are indications of inadequate hole cleaning: stuck pipe, packing off, and increasing drag after connections.",
      options: [
        { value: "all_above", label: "All of the above" },
        { value: "stuck_pipe_only", label: "Stuck pipe only" },
        { value: "drag_only", label: "Increasing drag only" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "all_above",
      explanation: "All three are classic indicators of inadequate hole cleaning:\n\n• Stuck pipe: Cuttings accumulating around the drill string form a cuttings bed or a cuttings avalanche (a pack-off) that traps the drill string. This is the most severe and costly consequence of poor hole cleaning.\n\n• Packing off: A sudden surge of cuttings that were not transported continuously reaches a point in the annulus and bridges across it, preventing fluid circulation. This can cause a well control event if the annulus becomes completely plugged.\n\n• Increasing drag after connections: During a connection (pump-off), annular velocity drops to zero and cuttings settle. When circulation resumes, the accumulated cuttings cause increased drag on the drill string when pick-up. This is often the first early warning sign of hole cleaning problems and should trigger immediate action (Participant Guide, Hole Cleaning / Indicators section)."
    },
    {
      id: "vhc_q5", number: "5 of 10", type: "single",
      question: "Good hole cleaning is indicated by:",
      options: [
        { value: "drilling_problems", label: "Drilling problems" },
        { value: "all_cuttings", label: "All cuttings and cavings are efficiently transported to surface" },
        { value: "excess_fragments", label: "Excess rock fragments are left in the wellbore" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "all_cuttings",
      explanation: "Good hole cleaning is defined as the efficient transport of ALL drilled cuttings and any cavings from the wellbore to surface. The criteria for adequate hole cleaning include:\n\n• Consistent, representative cuttings returns at the shakers — the volume and size of cuttings at surface should match the calculated volume based on ROP and bit size.\n• Stable torque and drag — no sudden spikes or increasing trends that indicate cuttings accumulation.\n• Stable ECD (Equivalent Circulating Density) — no rising ECD that suggests cuttings loading the annulus.\n• Clean wellbore confirmed during wiper trips — the bit picks up and lays down without resistance.\n\nWhen all of the above conditions are met, the wellbore is considered clean and safe to drill ahead or run casing (Participant Guide, Hole Cleaning section)."
    },
    {
      id: "vhc_q6", number: "6 of 10", type: "single",
      question: "In vertical and near-vertical wells, increasing the yield point of the drilling fluid will usually increase hole cleaning effectiveness.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. In vertical and near-vertical wells (inclination < ~30°), cuttings fall directly downward due to gravity and must be suspended and transported upward by the drilling fluid. In this geometry:\n\n• Higher yield point (YP): Improves the fluid's ability to suspend cuttings when circulation is stopped (e.g., during connections) and increases the carrying capacity of the fluid while circulating. A higher YP means the fluid can hold cuttings in suspension rather than letting them fall back.\n• Gel strengths: Also critical in vertical wells — sufficient gel strength prevents cuttings from settling during static periods.\n\nContrast with horizontal wells: In horizontal wells (inclination > ~60°), cuttings do not fall to bottom — they fall to the low side of the annulus, forming a cuttings bed. Here, HIGH viscosity actually reduces hole cleaning because viscous fluids flow OVER the cuttings bed rather than penetrating and disturbing it. Baroid therefore recommends LOWER yield point and higher flow rate (annular velocity) for horizontal hole cleaning (Participant Guide, Hole Cleaning / Drilling Fluid Properties section)."
    },
    {
      id: "vhc_q7", number: "7 of 10", type: "single",
      question: "In which situation would you use a high density (weighted) sweep rather than a high viscosity sweep to improve hole cleaning?",
      options: [
        { value: "vertical_well", label: "In a vertical well with a clean gauge hole" },
        { value: "high_angle", label: "In a high angle or horizontal wellbore with a cuttings bed on the low side" },
        { value: "shallow_well", label: "In a shallow well with low annular pressure" },
        { value: "water_based", label: "When switching from oil-based to water-based mud" }
      ],
      answer: "high_angle",
      explanation: "High density (weighted) sweeps are specifically designed for HIGH ANGLE and HORIZONTAL wellbores where cuttings accumulate as beds on the low side of the annulus.\n\nHow a weighted sweep works:\n• The dense pill (higher density than the base fluid) drops to the low side of the wellbore under gravity.\n• This dense fluid STIRS UP the cuttings bed through its higher hydrostatic pressure and turbulent contact.\n• The disturbed cuttings are re-suspended into the annular flow and carried to surface — they are effectively 'floated' out by the combination of the sweep's density and the returning flow.\n\nWhy NOT a high viscosity sweep in horizontal wells:\nBaroid's research has shown that viscous pills flow OVER the top of cuttings beds in horizontal wells rather than penetrating them. The viscous fluid takes the path of least resistance (the open annulus above the bed) and never contacts or disturbs the cuttings bed.\n\nHigh viscosity sweeps remain effective in VERTICAL wells where cuttings are suspended in the fluid column rather than settled in a bed (Participant Guide, Hole Cleaning / Sweeps section)."
    },
    {
      id: "vhc_q8", number: "8 of 10", type: "single",
      question: "Baroid's software can predict hole cleaning problems days before they occur.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Baroid has developed advanced hole cleaning modeling and simulation software (part of the VIRTUAL HYDRAULICS™ / CLEAN-SENSE™ platform and associated tools) that integrates real-time drilling data with predictive algorithms to identify hole cleaning risks before they become operational problems.\n\nThe software uses inputs such as:\n• Drill string geometry and trajectory (inclination, azimuth profile).\n• Drilling fluid rheological properties (PV, YP, gel strengths).\n• Flow rate, ROP, RPM, and WOB.\n• Calculated annular velocity profiles at different points in the wellbore.\n\nBy modeling the cuttings transport ratio (CTR) and cuttings concentration throughout the annulus, the software can identify sections where cuttings are accumulating and alert the drilling team to take corrective action BEFORE stuck pipe or packing off occurs — potentially days ahead of when the problem would manifest (Participant Guide, Hole Cleaning / Software Tools section)."
    },
    {
      id: "vhc_q9", number: "9 of 10", type: "single",
      question: "Annular velocity is only a minor contributor to overall hole cleaning effectiveness.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "FALSE. Annular velocity (AV) is one of the MOST IMPORTANT — arguably the single most critical — factor in hole cleaning effectiveness, particularly in horizontal and high-angle wells.\n\nAnnular velocity is determined by:\nAV = Flow Rate / Annular Area = Q / (D_hole² - D_pipe²) × constant\n\nWhy AV is critical:\n• In horizontal wells, it is the primary mechanism for eroding and transporting cuttings beds. A minimum AV threshold must be exceeded to initiate bed erosion.\n• In all well geometries, insufficient AV means cuttings travel velocity (AV - slip velocity) is too low to keep cuttings moving upward.\n• Increasing flow rate (and therefore AV) is often the first and most effective corrective action when hole cleaning indicators deteriorate.\n\nOther important factors include drill string rotation (RPM), fluid rheology, and ROP — but annular velocity is fundamental to all hole cleaning calculations and is never a 'minor' contributor (Participant Guide, Hole Cleaning section)."
    },
    {
      id: "vhc_q10", number: "10 of 14", type: "single",
      question: "What is the term used to describe the rate at which a rock fragment falls (settles) through the drilling fluid while the fluid is carrying it upward toward surface?",
      options: [
        { value: "annular_vel", label: "Annular velocity" },
        { value: "slip_vel", label: "Slip velocity" },
        { value: "transport_ratio", label: "Cuttings transport ratio" },
        { value: "net_rise_vel", label: "Net rise velocity" }
      ],
      answer: "slip_vel",
      explanation: "The term is SLIP VELOCITY. It describes the rate at which a rock fragment (cutting) falls or settles through the drilling fluid due to gravity, while the fluid itself is moving upward.\n\nThe three key velocity concepts in cuttings transport:\n\n• Annular Velocity (AV): The upward velocity of the drilling fluid in the annulus. Determined by flow rate and annular geometry.\n\n• Slip Velocity (Vs): The downward settling rate of the cutting through the fluid. Depends on:\n  - Cutting size and shape (larger, rounder cuttings slip faster)\n  - Cutting density vs. fluid density (greater density difference = higher slip)\n  - Fluid viscosity (higher viscosity = lower slip velocity)\n\n• Net Rise Velocity (or Cuttings Velocity): The actual upward velocity of the cutting = AV − Vs\n  - If AV > Vs: The cutting moves upward (good hole cleaning)\n  - If AV = Vs: The cutting stays stationary in the annulus (no cleaning)\n  - If AV < Vs: The cutting falls downward (cuttings accumulate)\n\nThis is why increasing flow rate (AV) and increasing fluid viscosity (reducing Vs) both improve hole cleaning — both actions increase the net rise velocity of cuttings (Participant Guide, Hole Cleaning / Slip Velocity section)."
    },
    {
      id: "vhc_q11", number: "11 of 14", type: "single",
      question: "In which hole angle range is cuttings transport generally considered the most challenging?",
      options: [
        { value: "near_vertical", label: "0° – 15° (near-vertical)" },
        { value: "intermediate", label: "30° – 60° (intermediate angle)" },
        { value: "near_horizontal", label: "75° – 90° (near-horizontal)" },
        { value: "no_effect", label: "The angle has no effect on hole cleaning" }
      ],
      answer: "intermediate",
      explanation: "The intermediate angle range of 30° – 60° is generally considered the most challenging for cuttings transport. Here is why each range behaves differently:\n\n• 0° – 15° (Near-vertical): Cuttings fall directly downward under gravity. The fluid's yield point and gel strength keep them suspended while circulating. Relatively predictable and manageable with standard rheology.\n\n• 30° – 60° (Intermediate — MOST DIFFICULT): Cuttings neither fall straight to bottom nor form a stable flat bed like in horizontal wells. Instead, they tend to roll and slide downhill along the low side of the wellbore. This creates 'cuttings avalanches' — sudden slides of accumulated cuttings that can cause packing off, erratic torque, and drag spikes. The gravitational component is strong but oblique, making transport unpredictable.\n\n• 75° – 90° (Near-horizontal): Cuttings settle on the low side and form a cuttings bed. The bed behavior is more predictable and can be managed with high flow rates (AV), drill string rotation (RPM), and weighted sweeps. While challenging, the problem is well-understood and the solutions are established.\n\nThis is why trajectory planning and anti-collision software pay special attention to the dogleg sections passing through intermediate angles (Participant Guide, Hole Cleaning / Hole Angle Effects section)."
    },
    {
      id: "vhc_q12", number: "12 of 14", type: "single",
      question: "How does drill string rotation (RPM) improve hole cleaning in horizontal wells?",
      options: [
        { value: "fluid_density", label: "It increases the density of the drilling fluid" },
        { value: "turbulence_lift", label: "It creates turbulence and agitation that helps lift cuttings off the low side of the annulus" },
        { value: "yield_point", label: "It reduces the yield point of the fluid" },
        { value: "no_effect", label: "It has no effect in horizontal wells" }
      ],
      answer: "turbulence_lift",
      explanation: "Drill string rotation (RPM) is one of the most effective PRIMARY hole cleaning tools in horizontal and high-angle wells. It works through two main mechanisms:\n\n1. Turbulence generation: The rotating drill pipe creates turbulent flow patterns in the annulus — even when the bulk annular flow is laminar. This turbulence disturbs and erodes the cuttings bed on the low side of the annulus, re-suspending cuttings into the fluid flow.\n\n2. Mechanical agitation and eccentric effect: The drill string rotates eccentrically within the wellbore (it cannot be perfectly centered in a large horizontal hole). This eccentric rotation physically contacts and sweeps the cuttings bed periodically, providing a mechanical lifting action on the settled cuttings.\n\n3. Taylor vortices: At moderate RPM, the rotation generates Taylor vortices in the annular fluid — helical flow patterns that create periodic high-velocity zones near the low side of the wellbore, further eroding the cuttings bed.\n\nPractical guidance: In horizontal drilling, maintaining minimum recommended RPM (often 60–120 RPM depending on hole size and fluid) is critical, especially when ROP is high or flow rate is limited by ECD constraints (Participant Guide, Hole Cleaning / Drill String Rotation section)."
    },
    {
      id: "vhc_q13", number: "13 of 14", type: "single",
      question: "In horizontal wells, increasing flow rate is generally more effective for improving hole cleaning than increasing fluid viscosity.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. In horizontal and high-angle wells, flow rate (annular velocity) is the primary driver of hole cleaning effectiveness — significantly more so than fluid viscosity.\n\nWhy high flow rate works in horizontal wells:\n• Higher annular velocity creates turbulent flow regimes near the cuttings bed.\n• The increased velocity gradient at the bed interface generates shear stress that erodes and re-suspends the settled cuttings.\n• Even in laminar flow, higher AV increases the transport capacity of the fluid above the bed.\n\nWhy high viscosity does NOT work well in horizontal wells:\n• Viscous fluids are pseudoplastic (shear-thinning). They flow more easily through the open annulus above the cuttings bed rather than penetrating and disturbing the bed itself.\n• High viscosity also increases annular pressure losses (ECD), which may force a reduction in flow rate — counterproductive to hole cleaning.\n• Baroid's research, and the broader industry consensus, specifically advises against high viscosity sweeps in horizontal wells for this reason.\n\nThe recommended approach in horizontal wells: Maximize flow rate within ECD limits, maintain RPM, and use weighted sweeps when reactive intervention is needed (Participant Guide, Hole Cleaning / Drilling Fluid Properties section)."
    },
    {
      id: "vhc_q14", number: "14 of 22", type: "single",
      question: "Which type of sweep is recommended for a vertical well showing signs of cuttings accumulation?",
      options: [
        { value: "weighted_sweep", label: "High density (weighted) sweep" },
        { value: "viscous_sweep", label: "High viscosity sweep" },
        { value: "spacer_pill", label: "Spacer pill" },
        { value: "no_sweep", label: "No sweeps are needed in vertical wells" }
      ],
      answer: "viscous_sweep",
      explanation: "HIGH VISCOSITY sweeps are the correct choice for vertical wells showing signs of cuttings accumulation.\n\nWhy viscous sweeps work in vertical wells:\n• In a vertical well, cuttings are distributed throughout the fluid column — they are suspended in the drilling fluid, not settled into a bed on the low side.\n• A high viscosity slug (higher YP and gel strength than the base mud) increases the suspension capacity and carrying capacity of the fluid, lifting and transporting cuttings that have started to slip back downward.\n• The higher apparent viscosity also reduces the slip velocity (Vs) of the cuttings, increasing their net rise velocity.\n\nWhy weighted (high density) sweeps are NOT ideal for vertical wells:\n• A dense pill in a vertical well is heavier, not more viscous. The additional weight does not help suspend or carry cuttings — in fact, the denser fluid may cause cuttings to re-settle faster relative to the heavier base fluid once the sweep passes.\n• Weighted sweeps are designed for horizontal wells where their density causes them to drop to the low side and stir up the cuttings bed — a mechanism that simply doesn't apply in vertical geometry.\n\nSweep strategy summary:\n• Vertical wells → High viscosity sweeps\n• Horizontal / high-angle wells → High density (weighted) sweeps\n(Participant Guide, Hole Cleaning / Sweeps section)."
    },
    {
      id: "vhc_q15", number: "15 of 22", type: "single",
      question: "In a high angle wellbore, the annular velocity of the fluid is:",
      options: [
        { value: "slower_below", label: "Slower below the drill pipe" },
        { value: "slower_above", label: "Slower above the drill pipe" },
        { value: "same_vertical", label: "The same as in a vertical wellbore" },
        { value: "none_above", label: "None of the above" }
      ],
      answer: "slower_below",
      explanation: "In a high angle or horizontal wellbore, the drill string sags and rests on the LOW SIDE of the wellbore due to gravity. This creates two very different annular zones:\n\n• BELOW the drill pipe (low side): The gap between the drill pipe and the wellbore wall is extremely narrow — or even zero where the pipe makes contact. Fluid velocity here is very low or essentially zero. This is the 'dead zone' where cuttings settle and accumulate into a cuttings bed.\n\n• ABOVE the drill pipe (high side): The annular space is larger and open. The bulk of the fluid flows through this zone at higher velocity, bypassing the cuttings bed below.\n\nThis flow asymmetry is one of the primary reasons horizontal hole cleaning is so challenging:\n• The fluid 'short-circuits' over the cuttings bed on the high side rather than sweeping through the bed.\n• Cuttings on the low side experience very little fluid shear force to mobilize them.\n• This is why drill string rotation (RPM) is so critical — it physically disturbs the bed and creates turbulence in the low-side dead zone that the axial fluid flow cannot reach (Participant Guide, Hole Cleaning / High Angle Wells section)."
    },
    {
      id: "vhc_q16", number: "16 of 21", type: "multiple",
      question: "Which of the following practices help optimize hole cleaning efficiency? (Select all that apply)",
      options: [
        { value: "higher_pump", label: "Higher pump rate" },
        { value: "higher_rpm", label: "Higher drill string rotation (RPM)" },
        { value: "lower_rop", label: "Lower Rate of Penetration (ROP)" },
        { value: "circulate_time", label: "Increasing circulating time to clean wellbore" },
        { value: "backreaming", label: "Performing backreaming (considering potential filter cake damage)" },
        { value: "sliding_time", label: "Increasing sliding time" },
        { value: "fluid_sweeps", label: "Pumping fluid sweeps" },
        { value: "decrease_av", label: "Decreasing annular velocity" },
        { value: "high_rop_low_flow", label: "Higher ROP with low flow rate" }
      ],
      answer: ["higher_pump", "higher_rpm", "lower_rop", "circulate_time", "backreaming", "fluid_sweeps"],
      explanation: "Six practices that optimize hole cleaning efficiency:\n\n✅ Higher pump rate: Increases annular velocity (AV), the primary driver of cuttings transport, especially in horizontal wells.\n\n✅ Higher drill string rotation (RPM): Creates turbulence and mechanical agitation that erodes cuttings beds in high-angle wells.\n\n✅ Lower ROP: Reduces the rate at which new cuttings are generated. Slower drilling gives the annulus time to transport existing cuttings before adding more. The cuttings concentration in the annulus stays manageable.\n\n✅ Increasing circulating time: Allows more time for cuttings already generated to be transported to surface. Especially important before connections and before tripping out.\n\n✅ Backreaming: Rotating and reciprocating the drill string while pulling out of hole disturbs cuttings beds and helps transport them upward. Caveat: may damage filter cake in reservoir sections.\n\n✅ Pumping fluid sweeps: Weighted or viscous pills (appropriate to the hole angle) mobilize accumulated cuttings beds.\n\n❌ Increasing sliding time: Sliding means drilling without rotation (motor drilling). No rotation = no turbulence = cuttings beds form rapidly in high-angle wells. More sliding = worse hole cleaning.\n\n❌ Decreasing annular velocity: Lower AV means less carrying capacity. Always detrimental to hole cleaning.\n\n❌ Higher ROP with low flow rate: The worst combination — generating cuttings faster than the system can transport them guarantees cuttings accumulation and potential stuck pipe (Participant Guide, Hole Cleaning section)."
    },
    {
      id: "vhc_q17", number: "17 of 21", type: "multiple",
      question: "As cuttings beds develop in high angle wells: (Select all that apply)",
      options: [
        { value: "stuck_pipe_risk", label: "The risk of stuck pipe increases" },
        { value: "pipe_rotation", label: "Increasing pipe rotation can help" },
        { value: "bit_wear", label: "The bit will wear out faster" },
        { value: "high_visc_sweep", label: "High viscosity sweeps should be pumped" },
        { value: "higher_rop", label: "Increasing the ROP would help" }
      ],
      answer: ["stuck_pipe_risk", "pipe_rotation"],
      explanation: "As cuttings beds develop in high angle wells:\n\n✅ The risk of stuck pipe increases: A growing cuttings bed progressively narrows the annular clearance. Eventually the drill string becomes embedded in the bed (differential sticking) or the bed avalanches around the drill string during a connection or trip, trapping it. This is the most common cause of stuck pipe in horizontal wells.\n\n✅ Increasing pipe rotation can help: As discussed, RPM creates turbulence and mechanical agitation that erodes the bed and re-suspends cuttings. It is one of the most effective tools to address a developing cuttings bed without requiring a pill or wiper trip.\n\n❌ The bit will wear out faster: Cuttings beds do not significantly accelerate bit wear. Bit wear is primarily related to formation abrasiveness and WOB/RPM parameters — not cuttings bed accumulation.\n\n❌ High viscosity sweeps should be pumped: In HIGH ANGLE wells, weighted (high density) sweeps are recommended — NOT high viscosity sweeps. Viscous pills bypass the cuttings bed on the high side without disturbing it. This is a common mistake.\n\n❌ Increasing the ROP would help: Higher ROP generates more cuttings per unit time, which is the opposite of what is needed. Reducing ROP to allow transport catch-up is the correct response to a developing cuttings bed (Participant Guide, Hole Cleaning / High Angle Wells section)."
    },
    {
      id: "vhc_q18", number: "18 of 21", type: "single",
      question: "Large bit cutters produce smaller cuttings, simplifying hole cleaning.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "FALSE. The relationship between bit cutter size and cutting size is the OPPOSITE of what this statement claims.\n\n• Large bit cutters (PDC cutters with large blade count or larger cutter diameter): Produce LARGER cuttings per revolution. Each cutter removes a bigger chip of rock with each rotation, generating coarser, flatter cuttings.\n\n• Smaller bit cutters (more cutters, finer blades): Produce finer, smaller cuttings per revolution, similar to a finer grinding action.\n\nWhy larger cuttings are MORE challenging for hole cleaning:\n• Higher slip velocity: Larger, heavier cuttings settle faster through the fluid (higher Vs), requiring higher AV to transport them.\n• Shaker management: Oversized cuttings can overwhelm shale shaker screens.\n• Bed formation: Larger cuttings tend to pack more densely in high-angle cuttings beds.\n\nThe bit selection and cutting size must be considered as part of the overall hole cleaning design — the fluid system, flow rate, and sweep program need to be matched to the cuttings size the bit will produce (Participant Guide, Hole Cleaning section)."
    },
    {
      id: "vhc_q19", number: "19 of 21", type: "multiple",
      question: "Before tripping out of a highly deviated well: (Select all that apply)",
      options: [
        { value: "circulate_bottoms_up", label: "Circulate bottoms up at least twice" },
        { value: "turn_off_shakers", label: "Turn off the shale shakers" },
        { value: "count_inventory", label: "Count your inventory" },
        { value: "clean_wellbore", label: "Make certain the shakers indicate a clean wellbore" }
      ],
      answer: ["circulate_bottoms_up", "clean_wellbore"],
      explanation: "Before tripping out of a highly deviated well, two critical hole cleaning verification steps must be completed:\n\n✅ Circulate bottoms up at least twice: One bottoms-up cycle ensures that all cuttings currently in the annulus have theoretically reached surface. However, in highly deviated wells, cuttings beds may not be mobilized in a single circulation — the recommendation of at least TWO full bottoms-up circulations accounts for the progressive mobilization and transport of settled cuttings beds that require multiple passes to clean up.\n\n✅ Make certain the shakers indicate a clean wellbore: The shale shakers are the real-time monitor for cuttings returns. A clean wellbore is confirmed when the volume and size of cuttings returning to the shakers drops to near-zero. Do NOT begin tripping until the shakers confirm clean returns — tripping through a cuttings-loaded annulus is a primary cause of swabbing and stuck pipe.\n\n❌ Turn off the shale shakers: This would eliminate the only real-time indicator of cuttings returns. Shakers must remain running during all hole cleaning operations before a trip.\n\n❌ Count your inventory: While inventory counts (pipe tally) are important for other operational reasons, they are not a hole cleaning verification step and do not confirm whether the wellbore is clean enough to trip safely (Participant Guide, Hole Cleaning / Pre-Trip Procedures section)."
    },
    {
      id: "vhc_q20", number: "20 of 21", type: "single",
      question: "Inadequate pump rate means that the mud's annular velocity is too low to transport the cuttings efficiently.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Annular velocity (AV) is directly proportional to pump rate (flow rate):\n\nAV = Q / (0.000971 × (D_h² − D_p²))\n\nWhere Q = flow rate (gal/min), D_h = hole diameter (in), D_p = drill pipe OD (in).\n\nWhen the pump rate is inadequate:\n• AV falls below the minimum threshold required to erode the cuttings bed (in horizontal wells) or keep cuttings suspended (in vertical wells).\n• The net rise velocity (AV − Vs) becomes insufficient to transport cuttings upward faster than they settle.\n• Cuttings accumulate in the annulus, forming beds in high-angle sections or settling back to bottom in vertical sections.\n\nMinimum AV guidelines vary by well geometry:\n• Vertical wells: Typically 100–150 ft/min minimum AV.\n• Horizontal wells: Typically 150–200+ ft/min, with some recommendations up to 250 ft/min for effective bed erosion.\n\nIf ECD constraints limit pump rate in a horizontal well, other compensating measures (higher RPM, weighted sweeps, reduced ROP) become even more critical (Participant Guide, Hole Cleaning section)."
    },
    {
      id: "vhc_q21", number: "21 of 21", type: "single",
      question: "Comparing the actual PWD annular pressure with the DFG annular pressure prediction can help the mud engineer to identify changes in the wellbore.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. Comparing Pressure While Drilling (PWD) measurements against the Drilling Fluid Gradient (DFG) model prediction is a powerful diagnostic tool for wellbore condition monitoring.\n\nThe DFG model predicts the expected annular pressure based on:\n• Fluid density and rheology.\n• Flow rate and wellbore geometry.\n• Calculated ECD at various depths.\n\nWhen the actual PWD reading DIVERGES from the DFG prediction, it signals a wellbore change:\n\n• PWD > DFG prediction (higher than expected pressure):\n  - Increasing cuttings loading in the annulus (poor hole cleaning).\n  - Cuttings bed avalanche or pack-off developing.\n  - Wellbore breathing or ballooning.\n\n• PWD < DFG prediction (lower than expected pressure):\n  - Losses to the formation (partial or full losses).\n  - Wellbore connection or fracture opening.\n\nThis comparison allows the mud engineer and drilling engineer to detect hole cleaning problems, losses, and instability events BEFORE they become critical — enabling proactive intervention such as adjusting pump rate, increasing RPM, or circulating sweeps. It is part of the integrated VIRTUAL HYDRAULICS™ monitoring approach used by Baroid (Participant Guide, Hole Cleaning / Monitoring section)."
    }
  ]
};

QUIZ_DATA.video_hole_cleaning = video_hole_cleaning;

// ============================================================
// VIDEO QUIZ: Pills and Displacement (Video Questions)
// ============================================================
const video_pills_displacement = {
  title: "Video Quiz: Pills and Displacement",
  description: "Practice questions from the Pills and Displacement video. Topics include recommended displacement practices, cleaning sweep pills, pill definitions, dry jobs, displacement objectives, and pre-displacement modeling.",
  questions: [
    {
      id: "vpd_q1", number: "1 of 6", type: "multiple",
      question: "Recommended practices for a successful displacement include: (Select all that apply)",
      options: [
        { value: "ready", label: "Everyone and everything is ready" },
        { value: "never_stop", label: "Never stop pumping during the displacement" },
        { value: "rotate_recip", label: "Rotate and reciprocate the string" },
        { value: "av_150", label: "Maintain annular velocities over 150 ft/min" }
      ],
      answer: ["ready", "never_stop", "rotate_recip", "av_150"],
      explanation: "All four practices are critical for a successful fluid displacement:\n\n✅ Everyone and everything is ready: Before pumping begins, all personnel must be briefed, all equipment (pumps, tanks, lines) must be lined up and tested, and all contingency plans must be in place. Stopping a displacement mid-way is one of the worst outcomes — it creates mixing zones and contamination of both fluids.\n\n✅ Never stop pumping during the displacement: Stopping pumps allows the contact zone between the two fluids to stagnate and intermix, creating a contaminated interface zone. Pressure differentials can also cause u-tubing, which reverses flow and further contaminates both fluids. Continuous pumping maintains a sharp displacement front.\n\n✅ Rotate and reciprocate the string: Drill string movement (rotation and axial reciprocation) breaks up gelled mud, reduces the thickness of the mud film on the wellbore wall, and ensures the displacing fluid contacts the entire circumference of the annulus — not just the high side in deviated wells.\n\n✅ Maintain annular velocities over 150 ft/min: AV > 150 ft/min helps create turbulent flow conditions in the annulus, which are significantly more efficient at displacing viscous mud and removing wall cake than laminar flow. Turbulent flow creates lateral mixing that erodes mud channels (Participant Guide, Displacement section)."
    },
    {
      id: "vpd_q2", number: "2 of 6", type: "single",
      question: "The success of a cleaning sweep pill can be indicated by monitoring the sweep when it returns across the shakers.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. The shale shakers provide a real-time visual and physical monitoring point for what is returning from the wellbore. When a cleaning sweep pill is pumped:\n\n• As the pill travels down the drill string and back up the annulus, it picks up accumulated cuttings, cavings, and mud solids.\n• When the sweep returns across the shakers, the volume and nature of the solids it carries tells you how effective the sweep was:\n  - Heavy returns of cuttings = the sweep was needed and was effective at mobilizing accumulated debris.\n  - Clean returns = the sweep returned relatively clean, suggesting the wellbore may already be in good condition, or the sweep did not effectively contact the cuttings beds.\n\n• Multiple consecutive sweeps may be pumped until the shakers show consistently clean returns, confirming a clean wellbore.\n\nThis monitoring method is simple, immediate, and does not require downhole instrumentation — the shakers function as the primary filter and observation point for all material returning from the wellbore (Participant Guide, Pills section / Displacement Monitoring)."
    },
    {
      id: "vpd_q3", number: "3 of 6", type: "single",
      question: "A 'pill' is a relatively small volume of fluid used for a specific purpose during drilling operations.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "TRUE. In drilling operations, a 'pill' is defined as a discrete, relatively small volume of specially formulated fluid that is pumped into the wellbore to accomplish a specific task. Pills are distinct from the base drilling fluid circulating system.\n\nCommon types of pills and their purposes:\n\n• Viscous (high viscosity) sweeps: Carry accumulated cuttings to surface in vertical wells.\n• Weighted (high density) sweeps: Disturb cuttings beds in horizontal/high-angle wells.\n• Lost circulation material (LCM) pills: Seal fractures or vugs causing fluid losses.\n• Spotting/lubricating pills (\"dry jobs\"): Free differentially stuck pipe by reducing the pressure differential across the stuck point.\n• Acid pills: Dissolve carbonate scale or damage near the wellbore.\n• Cement plugs: Isolate specific zones.\n• Spacer pills: Separate two incompatible fluids during a displacement to prevent chemical contamination of either fluid.\n\nThe key characteristics of a pill are:\n1. Small, defined volume (not the full system volume).\n2. Specific formulation different from the base mud.\n3. Targeted application for a specific wellbore problem (Participant Guide, Pills and Displacement section)."
    },
    {
      id: "vpd_q4", number: "4 of 6", type: "single",
      question: "A 'dry job' is used to control _____________.",
      options: [
        { value: "lost_circ", label: "Lost circulation" },
        { value: "stuck_pipe", label: "Stuck pipe" },
        { value: "pipe_conn", label: "Pipe on connections" },
        { value: "poor_hole", label: "Poor hole cleaning" }
      ],
      answer: "stuck_pipe",
      explanation: "A 'dry job' (also known as a spotting pill job) is specifically used to free DIFFERENTIALLY STUCK PIPE.\n\nDifferential sticking occurs when:\n• The drill string becomes embedded in the mud filter cake on the wellbore wall opposite a permeable formation.\n• The high differential pressure between the wellbore fluid column and the pore pressure pushes the drill string against the cake, creating a suction/pressure force that holds it in place.\n• The stuck section has no annular flow — hence 'dry' — it is isolated from circulation.\n\nHow a 'dry job' works:\n• A spotting fluid (typically a highly lubricated oil-based pill, or a specialized product like Baroid's SPOTASEAL) is pumped and 'spotted' (positioned) across the stuck point.\n• The pill soaks into the filter cake, reducing the differential pressure sticking force by:\n  1. Lowering the coefficient of friction between the drill string and filter cake.\n  2. Reducing the contact area between the pipe and the cake.\n  3. Potentially breaking down the cake structure.\n• After soaking time (typically 1–4+ hours), attempts are made to free the pipe with controlled pulling force and rotation.\n\nWhy not the other options:\n• Lost circulation: Controlled with LCM pills, cement plugs, or loss control materials — not a dry job.\n• Pipe on connections: Managed through string weight and slips, not pills.\n• Poor hole cleaning: Addressed with viscous or weighted sweeps (Participant Guide, Pills section / Stuck Pipe)."
    },
    {
      id: "vpd_q5", number: "5 of 6", type: "multiple",
      question: "The two primary objectives of a displacement are:",
      options: [
        { value: "reduce_npt", label: "To reduce NPT" },
        { value: "replace_fluid", label: "To replace one fluid in the wellbore with another" },
        { value: "clean_wellbore", label: "To clean out the wellbore" },
        { value: "maintain_props", label: "To maintain the properties of both fluids" }
      ],
      answer: ["replace_fluid", "maintain_props"],
      explanation: "The two primary objectives of a well fluid displacement are:\n\n✅ To replace one fluid in the wellbore with another: This is the fundamental purpose of any displacement operation. Examples include:\n• Displacing drilling mud with completion brine before running completion equipment.\n• Displacing water-based mud with oil-based mud (or vice versa) when changing fluid systems.\n• Displacing brine with cement during casing cementing.\n• Displacing kill fluid with production fluid during well startup.\n\n✅ To maintain the properties of both fluids: A poorly executed displacement allows the two fluids to mix, contaminating both:\n• The old fluid may contaminate the new fluid, altering its density, pH, or chemical properties.\n• The new fluid may react with the old fluid chemically (e.g., calcium brine reacting with bicarbonate-containing mud to form scale).\n• A well-designed displacement with properly designed spacers keeps the two fluid systems separated, maintaining the integrity of both.\n\nWhy not the others:\n• Reducing NPT: A consequence of good planning, but not an objective of the displacement itself.\n• Cleaning out the wellbore: May occur as a secondary benefit of some displacements, but the primary objectives are fluid replacement and property maintenance (Participant Guide, Displacement section)."
    },
    {
      id: "vpd_q6", number: "6 of 6", type: "single",
      question: "One of the most important things to insure a successful displacement is to model the displacement in CFG software after the displacement begins.",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "FALSE. The CFG (Computational Fluid Geometry / displacement modeling) software must be used BEFORE the displacement begins — not after.\n\nWhy pre-displacement modeling is critical:\n\n• Optimize spacer design: The model predicts whether the chosen spacer volume, density, and rheology will create a clean interface between the two fluids or allow channeling and mixing.\n• Predict flow regime: Determines whether the displacement will be turbulent (preferred for efficiency) or laminar at the planned pump rates. If laminar flow is unavoidable, the model helps design the fluid hierarchy (density steps, viscosity ratios) to promote stable displacement.\n• Identify risk zones: Flags sections of the wellbore where the planned annular velocities fall below minimum thresholds, indicating where channeling or incomplete displacement may occur.\n• Verify pump schedule: Confirms the sequence of spacer pills, pump rates, and volumes needed to achieve a clean displacement.\n\nModeling AFTER the displacement has begun means:\n• The optimization opportunity has already been missed.\n• Any problems identified cannot be corrected without stopping or altering the displacement mid-way — which violates the recommendation to never stop pumping.\n• The damage (fluid contamination, mixed zones) may already be done.\n\nProper workflow: Model → Optimize → Execute → Monitor (Participant Guide, Displacement section / CFG Modeling)."
    }
  ]
};

QUIZ_DATA.video_pills_displacement = video_pills_displacement;
