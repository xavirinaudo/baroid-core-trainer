QUIZ_DATA.video_completions = {
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

QUIZ_DATA.video_formation_damage = {
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

QUIZ_DATA.video_hole_cleaning = {
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

QUIZ_DATA.video_pills_displacement = {
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
