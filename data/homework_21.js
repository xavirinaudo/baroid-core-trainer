QUIZ_DATA.homework_21 = {
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
      answer: ["exceed_capacity", "stuck_pipe", "hole_washout", "high_ecd"],
      explanation: "Flow rate must be controlled to prevent exceeding rig pump capacities, leading to stuck pipe, generating hole washouts due to mechanical erosion of the wellbore, and causing excessively high equivalent circulating density (ECD) which could exceed the formation fracture gradient."
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
// ============================================================;
