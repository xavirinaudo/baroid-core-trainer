QUIZ_DATA.homework_18 = {
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
// ============================================================;
