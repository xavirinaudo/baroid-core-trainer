QUIZ_DATA.homework_17 = {
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
  };
