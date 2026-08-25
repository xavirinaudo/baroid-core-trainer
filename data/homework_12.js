QUIZ_DATA.homework_12 = {
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
  };
