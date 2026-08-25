QUIZ_DATA.homework_22 = {
  title: "Homework 22: Pore Pressures & Wellbore Instability",
  description: "Review pore pressure regimes, causes of wellbore instability, stuck pipe mechanisms, spacer design, hole cleaning flow regimes, and hydraulics concepts.",
  questions: [
    {
      id: "hw22_q1", number: "1 of 18", type: "single",
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
      id: "hw22_q2", number: "2 of 18", type: "single",
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
      id: "hw22_q3", number: "3 of 18", type: "multiple",
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
      id: "hw22_q4", number: "4 of 18", type: "single",
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
      id: "hw22_q5", number: "5 of 18", type: "single",
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
      id: "hw22_q6", number: "6 of 18", type: "single",
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
      id: "hw22_q7", number: "7 of 18", type: "single",
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
      id: "hw22_q8", number: "8 of 18", type: "single",
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
      id: "hw22_q9", number: "9 of 18", type: "single",
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
      id: "hw22_q10", number: "10 of 18", type: "single",
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
      id: "hw22_q12", number: "11 of 18", type: "single",
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
      id: "hw22_q13", number: "12 of 18", type: "single",
      question: "The fluid pumped through the bit nozzles while drilling is in transitional flow:",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "false",
      explanation: "The fluid pumped through bit nozzles is in turbulent flow, not transitional. Bit jet nozzles operate at shear rates of 100,000 to 500,000 RPM equivalent. Transitional flow is typical in drill pipe and collars while circulating. Turbulent flow occurs at high shear rates (Participant Guide, page 197 – Shear Rates in the Mud System)."
    },
    {
      id: "hw22_q14", number: "13 of 18", type: "single",
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
      id: "hw22_q15", number: "14 of 18", type: "single",
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
      id: "hw22_q17", number: "15 of 18", type: "single",
      question: "At the same flow rate, a fully concentric drill pipe has a higher pressure drop than does an eccentric pipe in the same hole section",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "True. At the same flow rate, a fully concentric drillpipe exhibits a higher frictional pressure drop than an eccentric drillpipe in the same hole section. In an eccentric annulus, fluid preferentially flows through the wider annular clearance (the path of least resistance), resulting in a lower overall frictional pressure loss compared to a concentric configuration where the flow area is uniform and experiences higher average shear rates and velocity."
    },
    {
      id: "hw22_q18", number: "16 of 18", type: "single",
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
      id: "hw22_q19", number: "17 of 18", type: "single",
      question: "Surpassing the formation fracture pressure can lead to wellbore instability and loss circulation events",
      options: [
        { value: "true", label: "True" },
        { value: "false", label: "False" }
      ],
      answer: "true",
      explanation: "When the bottomhole pressure (BHP or ECD) exceeds the formation fracture gradient, the formation fractures, creating pathways for the drilling fluid to escape into the formation. This results in lost circulation and can induce borehole breakout or wellbore instability (Participant Guide, Pore Pressure & Fracture Gradient section)."
    },
    {
      id: "hw22_q20", number: "18 of 18", type: "single",
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
