Object.assign(QUIZ_DATA, {
  homework_6: {
    title: "Homework 6: Solids Control Equipment",
    description: "Assessment covering shale shakers, screens, pumps, and their applications.",
    questions: [
      {
        id: "hw6_q1",
        number: 2,
        type: "single",
        question: "Which piece of solids control equipment is capable of removing 60-80% of the total generated drilled solids from the drilling fluid if operated efficiently?",
        options: [
          { label: "Flo-Divider", value: "Flo-Divider" },
          { label: "Mud Cleaner", value: "Mud Cleaner" },
          { label: "Shale Shaker", value: "Shale Shaker" },
          { label: "Vertical Dryer", value: "Vertical Dryer" },
          { label: "Centrifuge", value: "Centrifuge" }
        ],
        answer: "Shale Shaker",
        explanation: "The shale shaker is the primary solids control equipment and, when operated efficiently, can remove 60-80% of total generated drilled solids."
      },
      {
        id: "hw6_q2",
        number: 3,
        type: "single",
        question: "What is the most important aspect of a shale shaker in regards to the size of solids removed?",
        options: [
          { label: "Screen selection", value: "Screen selection" },
          { label: "Basket angle", value: "Basket angle" },
          { label: "Motor motion", value: "Motor motion" },
          { label: "G-force", value: "G-force" },
          { label: "RPM of motor", value: "RPM of motor" }
        ],
        answer: "Screen selection",
        explanation: "Screen selection dictates the size of the openings and therefore directly determines the size of solids removed from the mud."
      },
      {
        id: "hw6_q3",
        number: 4,
        type: "multiple",
        question: "Select the three main types of motion shale shakers utilize:",
        options: [
          { label: "Oscillating", value: "Oscillating" },
          { label: "Linear", value: "Linear" },
          { label: "Circular", value: "Circular" },
          { label: "Rhombic", value: "Rhombic" },
          { label: "Oval", value: "Oval" },
          { label: "Elliptical", value: "Elliptical" }
        ],
        answer: ["Linear", "Circular", "Elliptical"],
        explanation: "The three primary motions utilized by shale shakers are linear, circular, and elliptical."
      },
      {
        id: "hw6_q4",
        number: 5,
        type: "single",
        question: "What shaker motion is the best choice for finer screening and increased basket angles?",
        options: [
          { label: "Elliptical", value: "Elliptical" },
          { label: "Centrifugal", value: "Centrifugal" },
          { label: "Oscillating", value: "Oscillating" },
          { label: "Circular", value: "Circular" },
          { label: "Linear", value: "Linear" },
          { label: "Rhombic", value: "Rhombic" }
        ],
        answer: "Elliptical",
        explanation: "Elliptical motion provides better conveyance out of the fluid pool, allowing for finer screens to be run and compensating for increased basket angles."
      },
      {
        id: "hw6_q5",
        number: 6,
        type: "single",
        question: "What is the name of the API standard established in 2004 to allow individuals to easily compare screens?",
        options: [
          { label: "API-RP-13C", value: "API-RP-13C" },
          { label: "API-RP-13B-1", value: "API-RP-13B-1" },
          { label: "API-RP-13B-2", value: "API-RP-13B-2" },
          { label: "API-RP-13A", value: "API-RP-13A" }
        ],
        answer: "API-RP-13C",
        explanation: "API-RP-13C is the recommended practice for shale shaker screen classification, established to allow consistent comparison across manufacturers."
      },
      {
        id: "hw6_q6",
        number: 7,
        type: "multiple",
        question: "The established API standard for screen classification was created to standardize the following:",
        options: [
          { label: "Tension", value: "Tension" },
          { label: "Non-blanked area", value: "Non-blanked area" },
          { label: "Labeling", value: "Labeling" },
          { label: "Conveyance rate", value: "Conveyance rate" },
          { label: "Aspect ratio", value: "Aspect ratio" },
          { label: "Separation size", value: "Separation size" },
          { label: "Wire durability", value: "Wire durability" },
          { label: "Conductance", value: "Conductance" }
        ],
        answer: ["Non-blanked area", "Labeling", "Separation size", "Conductance"],
        explanation: "API-RP-13C standardizes the calculation and reporting of separation size (D100), conductance, non-blanked area, and labeling."
      },
      {
        id: "hw6_q7",
        number: 8,
        type: "single",
        question: "Screen _____ is defined as “The movement of drilling fluid and classified solid particles through the shaker screens.”",
        options: [
          { label: "Conductance", value: "Conductance" },
          { label: "Conveyance", value: "Conveyance" }
        ],
        answer: "Conductance",
        explanation: "Conductance refers to the ease with which fluid and fine solids pass through the screen cloth."
      },
      {
        id: "hw6_q8",
        number: 9,
        type: "single",
        question: "Screen _____ is defined as “The movement of unclassified solid particles off the shaker screens”",
        options: [
          { label: "Conductance", value: "Conductance" },
          { label: "Conveyance", value: "Conveyance" }
        ],
        answer: "Conveyance",
        explanation: "Conveyance is the transportation of drill solids and material off the end of the shaker."
      },
      {
        id: "hw6_q9",
        number: 10,
        type: "multiple",
        question: "Shaker performance can GENERALLY be defined by the following parameters:",
        options: [
          { label: "G-force", value: "G-force" },
          { label: "Dryness of solids discharge", value: "Dryness of solids discharge" },
          { label: "Solids removal", value: "Solids removal" },
          { label: "Processing Capacity", value: "Processing Capacity" },
          { label: "Basket weight", value: "Basket weight" },
          { label: "Number of screen panels", value: "Number of screen panels" }
        ],
        answer: ["Dryness of solids discharge", "Solids removal", "Processing Capacity"],
        explanation: "Effective shaker performance balances processing capacity (fluid throughput), solids removal efficiency, and dryness of the discharged solids."
      },
      {
        id: "hw6_q10",
        number: 11,
        type: "single",
        question: "What does screen mesh mean?",
        options: [
          { label: "Material of the screens construction", value: "Material of the screens construction" },
          { label: "Number of openings per linear inch for square mesh screens", value: "Number of openings per linear inch for square mesh screens" },
          { label: "Dimensions of the area the screens cover inside the Shaker", value: "Dimensions of the area the screens cover inside the Shaker" },
          { label: "Thickness in 1/32nd of inches", value: "Thickness in 1/32nd of inches" }
        ],
        answer: "Number of openings per linear inch for square mesh screens",
        explanation: "Mesh count refers to the number of openings per linear inch, traditionally used before API standards for square meshes."
      },
      {
        id: "hw6_q11",
        number: 12,
        type: "single",
        question: "What is the cut point potential of shaker screens that have satisfied the present API classification standards?",
        options: [
          { label: "D50", value: "D50" },
          { label: "D16", value: "D16" },
          { label: "D100", value: "D100" },
          { label: "D84", value: "D84" }
        ],
        answer: "D100",
        explanation: "API-RP-13C reports the D100 separation potential, meaning 100% of particles larger than this size will be retained by the screen."
      },
      {
        id: "hw6_q12",
        number: 13,
        type: "single",
        question: "What unit of measurement is displayed on the API label of the screen to indicate screen conductance?",
        options: [
          { label: "Nanodarcy", value: "Nanodarcy" },
          { label: "Millidarcy (mD)", value: "Millidarcy (mD)" },
          { label: "Darcy (kD/mm)", value: "Darcy (kD/mm)" },
          { label: "None of the above", value: "None of the above" }
        ],
        answer: "Darcy (kD/mm)",
        explanation: "Conductance is measured and displayed in kiloDarcies per millimeter (kD/mm)."
      },
      {
        id: "hw6_q13",
        number: 15,
        type: "multiple",
        question: "Provide the most significant benefits of using “corrugated” screens over “conventional” screens:",
        options: [
          { label: "Reduced particle blinding", value: "Reduced particle blinding" },
          { label: "Ability to screen finer earlier", value: "Ability to screen finer earlier" },
          { label: "Increased screen conductance", value: "Increased screen conductance" },
          { label: "Reduced screen cost per unit", value: "Reduced screen cost per unit" },
          { label: "Increased screen durability", value: "Increased screen durability" },
          { label: "Increased non-blanked screening area", value: "Increased non-blanked screening area" }
        ],
        answer: ["Ability to screen finer earlier", "Increased screen conductance", "Increased non-blanked screening area"],
        explanation: "Corrugated (3D) screens have a larger non-blanked surface area within the same footprint, increasing fluid conductance and allowing finer screens to be used earlier in the drilling process."
      },
      {
        id: "hw6_q14",
        number: 16,
        type: "single",
        question: "When using a four screen shaker, what is the “fluid end point” rule of thumb during drilling operations?",
        options: [
          { label: "¼ of the screens covered", value: "¼ of the screens covered" },
          { label: "As close to end of last screen as possible", value: "As close to end of last screen as possible" },
          { label: "¾ of the screens covered", value: "¾ of the screens covered" },
          { label: "50% of the screens covered", value: "50% of the screens covered" },
          { label: "80% of the screens covered", value: "80% of the screens covered" },
          { label: "None of the above", value: "None of the above" }
        ],
        answer: "¾ of the screens covered",
        explanation: "A standard rule of thumb is keeping the fluid end point around 3/4 (or 75%) of the way down the shaker bed to allow enough dry area for solids dewatering."
      },
      {
        id: "hw6_q15",
        number: 17,
        type: "multiple",
        question: "What are the two types of screens typically used in oil and gas drilling operations in reference to “tension”?",
        options: [
          { label: "Field-tensioned screen", value: "Field-tensioned screen" },
          { label: "Flexible frame screens", value: "Flexible frame screens" },
          { label: "Pre-tensioned (rigid frame) screens", value: "Pre-tensioned (rigid frame) screens" },
          { label: "Corrugated triangular-tensioned screens", value: "Corrugated triangular-tensioned screens" }
        ],
        answer: ["Field-tensioned screen", "Pre-tensioned (rigid frame) screens"],
        explanation: "Screens are generally classified by tension method as either field-tensioned (hook strip) or pre-tensioned on rigid frames."
      },
      {
        id: "hw6_q16",
        number: 18,
        type: "multiple",
        question: "What are the two types of screens typically used in oil and gas drilling operations in reference to “dimension”?",
        options: [
          { label: "Field-tensioned screens", value: "Field-tensioned screens" },
          { label: "Corrugated (pyramid/3D) screens", value: "Corrugated (pyramid/3D) screens" },
          { label: "Conventional (flat/2D) screens", value: "Conventional (flat/2D) screens" },
          { label: "Advanced (trapezoid/3D) screens", value: "Advanced (trapezoid/3D) screens" }
        ],
        answer: ["Corrugated (pyramid/3D) screens", "Conventional (flat/2D) screens"],
        explanation: "By dimension, screens are categorized as either conventional flat (2D) or corrugated (3D/pyramid) screens."
      },
      {
        id: "hw6_q17",
        number: 22,
        type: "single",
        question: "Non-blanked area of a screen refers to which of the following:",
        options: [
          { label: "The total area of the shaker basket", value: "The total area of the shaker basket" },
          { label: "The total area in which fluid covers the screen (fluid end-point)", value: "The total area in which fluid covers the screen (fluid end-point)" },
          { label: "The total area of the panel (length x width)", value: "The total area of the panel (length x width)" },
          { label: "The total area that fluid can pass through", value: "The total area that fluid can pass through" },
          { label: "The number of openings per square linear inch", value: "The number of openings per square linear inch" }
        ],
        answer: "The total area that fluid can pass through",
        explanation: "The non-blanked area refers exclusively to the net open area where fluid can actually flow, ignoring bonding materials or structural supports."
      },
      {
        id: "hw6_q18",
        number: 24,
        type: "single",
        question: "One negative consequence of the solids conveyance rate being too fast, is less dewatering/drying time causing increased surface fluid loss and excessive waste",
        options: [
          { label: "True", value: "True" },
          { label: "False", value: "False" }
        ],
        answer: "True",
        explanation: "If conveyance is too fast, the solids don't spend enough time on the screen to effectively dry, resulting in high drilling fluid losses (wet cuttings)."
      },
      {
        id: "hw6_q19",
        number: 25,
        type: "multiple",
        question: "Which of the following are NOT a suggested operating guideline for shaker screens?",
        options: [
          { label: "Run finest mesh possible while covering 3/4 of the screen area.", value: "Run finest mesh possible while covering 3/4 of the screen area." },
          { label: "Use finer screens towards the back of the shaker and coarser for the drying panel", value: "Use finer screens towards the back of the shaker and coarser for the drying panel" },
          { label: "Open header box bypass valve when sending hole cleaning sweeps to avoid losing mud", value: "Open header box bypass valve when sending hole cleaning sweeps to avoid losing mud" },
          { label: "Run Screen frame as level as possible to reduce screen wear.", value: "Run Screen frame as level as possible to reduce screen wear." },
          { label: "Ensure screens are properly mounted on a clean screen frame.", value: "Ensure screens are properly mounted on a clean screen frame." }
        ],
        answer: ["Use finer screens towards the back of the shaker and coarser for the drying panel", "Open header box bypass valve when sending hole cleaning sweeps to avoid losing mud"],
        explanation: "Screens should generally be of the same mesh across the deck to avoid bypassing fines, and opening the bypass valve defeats the purpose of the shaker, dumping solids directly into the active system."
      },
      {
        id: "hw6_q20",
        number: 28,
        type: "multiple",
        question: "What are the common types of couplings used on pumps in the oilfield industry?",
        options: [
          { label: "Flexible rubber", value: "Flexible rubber" },
          { label: "Dodge", value: "Dodge" },
          { label: "Love joy", value: "Love joy" },
          { label: "Chain", value: "Chain" },
          { label: "Flexible glass", value: "Flexible glass" }
        ],
        answer: ["Dodge", "Love joy"],
        explanation: "Dodge and Lovejoy are standard flexible mechanical couplings commonly found on mud pump assemblies."
      },
      {
        id: "hw6_q21",
        number: 29,
        type: "single",
        question: "Which type of pump will degrade solids the fastest?",
        options: [
          { label: "Progressive Cavity", value: "Progressive Cavity" },
          { label: "Centrifugal", value: "Centrifugal" },
          { label: "Rotary lobe", value: "Rotary lobe" },
          { label: "Diaphragm", value: "Diaphragm" },
          { label: "Triplex pump", value: "Triplex pump" }
        ],
        answer: "Centrifugal",
        explanation: "Centrifugal pumps use a high-speed impeller which imparts significant shear and mechanical impact, degrading solids into finer particles very rapidly."
      },
      {
        id: "hw6_q22",
        number: 30,
        type: "single",
        question: "What type of pump should NOT be used to feed centrifuges?",
        options: [
          { label: "Centrifugal", value: "Centrifugal" },
          { label: "Progressive cavity", value: "Progressive cavity" },
          { label: "Lobe", value: "Lobe" }
        ],
        answer: "Centrifugal",
        explanation: "Centrifugal pumps degrade solids and offer non-proportional flow, which can decrease centrifuge efficiency, making positive displacement pumps like PC or Lobe pumps the preferred choice."
      },
      {
        id: "hw6_q23",
        number: 31,
        type: "multiple",
        question: "Choose the two (2) pump characteristics associated with centrifugal pumps?",
        options: [
          { label: "Proportional Flow", value: "Proportional Flow" },
          { label: "Cavitation Prone", value: "Cavitation Prone" },
          { label: "Reversible", value: "Reversible" },
          { label: "Solid Degrading", value: "Solid Degrading" },
          { label: "Gentle “conveying” action", value: "Gentle “conveying” action" }
        ],
        answer: ["Cavitation Prone", "Solid Degrading"],
        explanation: "Centrifugal pumps are dynamic pumps that rely on high velocity, making them prone to cavitation if suction head is inadequate, and highly solid degrading."
      },
      {
        id: "hw6_q24",
        number: 33,
        type: "single",
        question: "A Progressive Cavity (PC) pump utilizes what components working in tandem to transfer drilling mud?",
        options: [
          { label: "Impeller / Volute", value: "Impeller / Volute" },
          { label: "Rotor / Stator", value: "Rotor / Stator" },
          { label: "Gears / Lobes", value: "Gears / Lobes" },
          { label: "Cylinder / Piston Rod", value: "Cylinder / Piston Rod" }
        ],
        answer: "Rotor / Stator",
        explanation: "PC pumps rely on a helical steel rotor turning inside a stationary elastomeric stator to form sealed cavities that convey the fluid."
      },
      {
        id: "hw6_q25",
        number: 34,
        type: "single",
        question: "Which factor causes the most wear in PC pumps?",
        options: [
          { label: "Pressure", value: "Pressure" },
          { label: "Speed", value: "Speed" },
          { label: "Temperature", value: "Temperature" },
          { label: "Chemicals", value: "Chemicals" },
          { label: "All of the above", value: "All of the above" }
        ],
        answer: "All of the above",
        explanation: "The elastomer stator is highly susceptible to wear and failure from excessive pressure, high RPM, heat, and chemical incompatibility."
      },
      {
        id: "hw6_q26",
        number: 35,
        type: "single",
        question: "Why is the anti-spin bolt on centrifugal pump impellers important?",
        options: [
          { label: "Makes the pump last longer", value: "Makes the pump last longer" },
          { label: "Makes the pump more efficient", value: "Makes the pump more efficient" },
          { label: "Saves you from breaking the Volute/Casing/Snail/Impeller", value: "Saves you from breaking the Volute/Casing/Snail/Impeller" },
          { label: "It has no particular purpose", value: "It has no particular purpose" }
        ],
        answer: "Saves you from breaking the Volute/Casing/Snail/Impeller",
        explanation: "If the pump rotates backwards due to motor wiring or fluid backflow, the impeller can unthread from the shaft, crashing into the volute. The anti-spin bolt locks it in place."
      },
      {
        id: "hw6_q27",
        number: 36,
        type: "single",
        question: "Do the rotating lobes touch each other, in a rotary lobe pump?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        answer: "No",
        explanation: "In a rotary lobe pump, timing gears prevent the lobes from making physical contact with each other, minimizing internal wear."
      },
      {
        id: "hw6_q28",
        number: 37,
        type: "single",
        question: "Should you ever run a pump dry?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        answer: "No",
        explanation: "Running any mud pump dry leads to rapid heat buildup and catastrophic failure of mechanical seals (centrifugal) or stators (PC pumps)."
      },
      {
        id: "hw6_q29",
        number: 38,
        type: "single",
        question: "What is the most common pump found on drilling rigs surface pit systems?",
        options: [
          { label: "Rotary Lobe", value: "Rotary Lobe" },
          { label: "Progressive Cavity", value: "Progressive Cavity" },
          { label: "Diaphragm", value: "Diaphragm" },
          { label: "Centrifugal", value: "Centrifugal" },
          { label: "None of the above", value: "None of the above" }
        ],
        answer: "Centrifugal",
        explanation: "Centrifugal pumps are cheap, high volume, and easy to maintain, making them the standard choice for mixing and transferring mud on surface pit systems."
      },
      {
        id: "hw6_q30",
        number: 39,
        type: "multiple",
        question: "Choose the most critical characteristics of a positive displacement pump in regards to its use feeding a decanting centrifuge:",
        options: [
          { label: "Proportional flow rate to speed (RPM)", value: "Proportional flow rate to speed (RPM)" },
          { label: "High shearing velocity", value: "High shearing velocity" },
          { label: "Solid degrading", value: "Solid degrading" },
          { label: "Variable speed", value: "Variable speed" },
          { label: "Gentle conveyance", value: "Gentle conveyance" }
        ],
        answer: ["Proportional flow rate to speed (RPM)", "Variable speed", "Gentle conveyance"],
        explanation: "A positive displacement pump gently conveys fluid to preserve solid size (no degradation) and allows precise, variable control over the feed rate, maximizing centrifuge separation efficiency."
      },
      {
        id: "hw6_q31",
        number: 40,
        type: "single",
        question: "To ensure hydrocyclones are operating properly and efficiently they require:",
        options: [
          { label: "75 psi at the feed inlet of the hydrocyclone", value: "75 psi at the feed inlet of the hydrocyclone" },
          { label: "75 feet of head at the discharge (outlet) of the centrifugal pump", value: "75 feet of head at the discharge (outlet) of the centrifugal pump" },
          { label: "75 feet of head at the feed inlet of the hydrocyclone", value: "75 feet of head at the feed inlet of the hydrocyclone" },
          { label: "75 psi at the inlet of the centrifugal pump", value: "75 psi at the inlet of the centrifugal pump" }
        ],
        answer: "75 feet of head at the feed inlet of the hydrocyclone",
        explanation: "Hydrocyclones require approximately 75 feet of hydraulic head at the inlet manifold to generate sufficient centrifugal force for separation."
      }
    ]
  }
});
