var QUIZ_DATA = typeof QUIZ_DATA !== 'undefined' ? QUIZ_DATA : {};
Object.assign(QUIZ_DATA, {
  homework_5: {
    title: "Homework 5: Solids Control and Waste Management",
    description: "Assessment covering solids control equipment, waste management hierarchy, and properties of solids.",
    questions: [
      {
        id: "hw5_q1",
        number: 1,
        type: "multiple",
        question: "Using the following diagram, complete the Waste Management Hierarchy",
        options: [
          { label: "Reuse", value: "reuse" },
          { label: "Disposal of Waste", value: "disposal_of_waste" },
          { label: "Separation of waste", value: "separation_of_waste" },
          { label: "Recycle", value: "recycle" },
          { label: "Recover", value: "recover" },
          { label: "Reduce", value: "reduce" },
        ],
        answer: ["reduce", "reuse", "recycle", "recover", "separation_of_waste", "disposal_of_waste"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 25)"
      },
      {
        id: "hw5_q2",
        number: 2,
        type: "multiple",
        question: "Increasing solids content in a drilling fluid can result in several negative issues.",
        options: [
          { label: "Increased fluid loss due high ECDs", value: "increased_fluid_loss" },
          { label: "Stuck pipe due differential sticking", value: "stuck_pipe_due_diffe" },
          { label: "Increase of ROP and lowering of rig time", value: "increase_of_rop_and_" },
          { label: "Poor cement jobs due thick filtercake", value: "poor_cement_jobs_due" },
          { label: "Increased lubrication", value: "increased_lubricatio" },
          { label: "Increase of rig time by lowering ROP", value: "increase_of_rig_time" },
          { label: "Increased fluid waste volumes", value: "increased_fluid_wast" },
          { label: "Good cement jobs due thinner filtercake", value: "good_cement_jobs_due" },
        ],
        answer: ["increased_fluid_loss", "stuck_pipe_due_diffe", "poor_cement_jobs_due", "increase_of_rop_and_", "increased_fluid_loss"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 7)"
      },
      {
        id: "hw5_q3",
        number: 3,
        type: "multiple",
        question: "Which statements below reflect the role of solids control equipment?",
        options: [
          { label: "Solids Control equipment typically provides discharged solids that are under the permitted ROC% limit to allowdischarging them overboard", value: "solids_control_equip" },
          { label: "Solids control operations address the first step of the waste management hierarchy by reducing the amount ofgenerated waste", value: "solids_control_opera" },
          { label: "Solids control equipment treats and segregates all waste bi-products from the discharged waste streams", value: "solids_control_equip" },
          { label: "Solids Control operations should only be used with expensive fluid systems", value: "solids_control_opera" },
          { label: "Solid control equipment is purposed to optimizes the drilling fluid performance and maximize drilling efficiencies", value: "solid_control_equipm" },
        ],
        answer: ["solids_control_equip", "solid_control_equipm"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Baroid Manual)"
      },
      {
        id: "hw5_q4",
        number: 4,
        type: "single",
        question: "What purpose would solids control equipment serve when encountering formations at depths that provide a narrowmargin of error allowed between the pore pressure and fracture gradient",
        options: [
          { label: "Increase penetration rates (ROP’s)", value: "increase_penetration" },
          { label: "Provide better cementing jobs", value: "provide_better_cemen" },
          { label: "Lower probability of differential sticking", value: "lower_probability_of" },
          { label: "Provide Lower Equivalent Circulating Densities (ECD’s)", value: "provide_lower_equiva" },
          { label: "Reduced torque and drag", value: "reduced_torque_and_d" },
        ],
        answer: "provide_lower_equiva",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 43)"
      },
      {
        id: "hw5_q5",
        number: 5,
        type: "single",
        question: "What purpose would solids control equipment serve if an operator emphasized the importance to reach all sectiontarget depths (TD) on or ahead of schedule:",
        options: [
          { label: "Increase penetration rates (ROP’s)", value: "increase_penetration" },
          { label: "Provide better cementing jobs", value: "provide_better_cemen" },
          { label: "Lower probability of differential sticking", value: "lower_probability_of" },
          { label: "Provide Lower Equivalent Circulating Densities (ECD’s)", value: "provide_lower_equiva" },
          { label: "Reduced torque and drag", value: "reduced_torque_and_d" },
        ],
        answer: "increase_penetration",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 43)"
      },
      {
        id: "hw5_q6",
        number: 6,
        type: "single",
        question: "What is considered the most effective and economically viable option to remove solids from the drilling fluid?",
        options: [
          { label: "Dump & dilute", value: "dump___dilute" },
          { label: "Chemical Treatment", value: "chemical_treatment" },
          { label: "Mechanical separation", value: "mechanical_separatio" },
          { label: "Gravitational Settling", value: "gravitational_settli" },
          { label: "Dilution", value: "dilution" },
        ],
        answer: "mechanical_separatio",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 43)"
      },
      {
        id: "hw5_q7",
        number: 7,
        type: "multiple",
        question: "What are the two most important reasons for adding weighting material and maintaining sufficient mud density?",
        options: [
          { label: "Provide wellbore stability", value: "provide_wellbore_sta" },
          { label: "Transport Cuttings to Surface", value: "transport_cuttings_t" },
          { label: "Suspend and release cuttings", value: "suspend_and_release_" },
          { label: "Protect against corrosion", value: "protect_against_corr" },
          { label: "Provide hydraulic power to downhole tools", value: "provide_hydraulic_po" },
          { label: "Control subsurface pressures", value: "control_subsurface_p" },
        ],
        answer: ["provide_wellbore_sta", "control_subsurface_p"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 43)"
      },
      {
        id: "hw5_q8",
        number: 8,
        type: "multiple",
        question: "Barite should consist of the following physical characteristics?",
        options: [
          { label: "Micron size of particles is predominantly <74 microns", value: "micron_size_of_parti" },
          { label: "Non-abrasive", value: "non_abrasive" },
          { label: "Chemically reactive", value: "chemically_reactive" },
          { label: "High specific gravity", value: "high_specific_gravit" },
          { label: "Chemically inert", value: "chemically_inert" },
          { label: "Low specific gravity", value: "low_specific_gravity" },
          { label: "Micron size of particles is predominantly >74 microns", value: "micron_size_of_parti" },
        ],
        answer: ["micron_size_of_parti", "non_abrasive", "chemically_reactive", "high_specific_gravit"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 36)"
      },
      {
        id: "hw5_q9",
        number: 9,
        type: "multiple",
        question: "What are the two most important purposes of maintaining sufficient rheological properties?",
        options: [
          { label: "Suspend and release cuttings", value: "suspend_and_release_" },
          { label: "Transport cuttings to surface", value: "transport_cuttings_t" },
          { label: "Lubricate the bit", value: "lubricate_the_bit" },
          { label: "Provide wellbore stability", value: "provide_wellbore_sta" },
          { label: "Provide hydraulic power to downhole tools", value: "provide_hydraulic_po" },
        ],
        answer: ["suspend_and_release_", "transport_cuttings_t"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 43)"
      },
      {
        id: "hw5_q10",
        number: 10,
        type: "multiple",
        question: "What are the four criteria which solid particles are typically classified?",
        options: [
          { label: "Solid Particle color", value: "solid_particle_color" },
          { label: "Solid Particle Specific Gravity (SG)", value: "solid_particle_speci" },
          { label: "Solid Particle mineralogy", value: "solid_particle_miner" },
          { label: "Solid Particle Reactivity", value: "solid_particle_react" },
          { label: "Solid Particle shape", value: "solid_particle_shape" },
          { label: "Solid Particle strength", value: "solid_particle_stren" },
          { label: "Solid Particle Source", value: "solid_particle_sourc" },
          { label: "Solid Particle Size", value: "solid_particle_size" },
        ],
        answer: ["solid_particle_color", "solid_particle_color", "solid_particle_color", "solid_particle_color"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 43)"
      },
      {
        id: "hw5_q11",
        number: 11,
        type: "single",
        question: "Solid particle degradation will result in smaller solid particle size causing an increase in the:",
        options: [
          { label: "Solid particle distribution", value: "solid_particle_distr" },
          { label: "Solid particles density", value: "solid_particles_dens" },
          { label: "Solid particles reactiveness", value: "solid_particles_reac" },
          { label: "Solid particles abrasiveness", value: "solid_particles_abra" },
          { label: "Solid particles surface area", value: "solid_particles_surf" },
        ],
        answer: "solid_particle_distr",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 26)"
      },
      {
        id: "hw5_q12",
        number: 12,
        type: "single",
        question: "What characteristic of some shale formations causes hydration of the clay particles resulting in solid particle swelling?",
        options: [
          { label: "Particle size", value: "particle_size" },
          { label: "Particle density", value: "particle_density" },
          { label: "Particle shape", value: "particle_shape" },
          { label: "Particle surface area", value: "particle_surface_are" },
          { label: "Particle degradation", value: "particle_degradation" },
          { label: "Particle reactiveness", value: "particle_reactivenes" },
        ],
        answer: "particle_reactivenes",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 103)"
      },
      {
        id: "hw5_q13",
        number: 13,
        type: "multiple",
        question: "The two solid characteristics that pose the most difficult challenges to the fluids rheological properties and overallfluid performance are:",
        options: [
          { label: "Solid Reactiveness", value: "solid_reactiveness" },
          { label: "Solid abrasiveness", value: "solid_abrasiveness" },
          { label: "Solid density", value: "solid_density" },
          { label: "Solid specific gravity", value: "solid_specific_gravi" },
          { label: "Solid size", value: "solid_size" },
        ],
        answer: ["solid_reactiveness", "solid_size"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 5)"
      },
      {
        id: "hw5_q14",
        number: 14,
        type: "single",
        question: "",
        options: [
          { label: "Which type of clay formation exhibits the highest potential for swelling?", value: "which_type_of_clay_f" },
          { label: "Kaolinites", value: "kaolinites" },
          { label: "Smectites", value: "smectites" },
          { label: "Chlorites", value: "chlorites" },
          { label: "Illites", value: "illites" },
        ],
        answer: "smectites",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 4)"
      },
      {
        id: "hw5_q15",
        number: 15,
        type: "multiple",
        question: "Why do clay particles that are “inert” still pose adverse challenges to the drilling fluid properties? (select all that apply)",
        options: [
          { label: "The clay particles are so fine (small) making removal difficult for conventional solids control equipment", value: "the_clay_particles_a" },
          { label: "They consist of mostly abrasive solid particles causing further erosion of equipment.", value: "they_consist_of_most" },
          { label: "They consist of mostly large solid particles resulting in increased solid surface area and less free liquid available tothe mud", value: "they_consist_of_most" },
          { label: "They consist of mostly colloidal solid particles causing increased solid surface areas and less free liquid providingundesired viscosity of mud", value: "they_consist_of_most" },
        ],
        answer: ["the_clay_particles_a", "they_consist_of_most"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 5)"
      },
      {
        id: "hw5_q16",
        number: 16,
        type: "single",
        question: "Higher than normal sand content present in drilling muds can result in:",
        options: [
          { label: "Excessive hydration of clays", value: "excessive_hydration_" },
          { label: "Excessive dilution as sand is difficult to mechanically remove", value: "excessive_dilution_a" },
          { label: "Excessive equipment repair and pump maintenance costs", value: "excessive_equipment_" },
          { label: "Increased amount of colloidal solid particles", value: "increased_amount_of_" },
        ],
        answer: "excessive_hydration_",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 94)"
      },
      {
        id: "hw5_q17",
        number: 17,
        type: "multiple",
        question: "The use of dilution only to reduce solids % provides what implications?",
        options: [
          { label: "Does not lower the solids % in the mud", value: "does_not_lower_the_s" },
          { label: "Excessive mud and waste volumes", value: "excessive_mud_and_wa" },
          { label: "Increasingly excessive mud maintenance costs", value: "increasingly_excessi" },
          { label: "Fluid incompatibility with drilled solids", value: "fluid_incompatibilit" },
        ],
        answer: ["excessive_mud_and_wa", "increasingly_excessi"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 5)"
      },
      {
        id: "hw5_q18",
        number: 18,
        type: "single",
        question: "Use of gravitational settling only to lower solids content provides what operational implications?",
        options: [
          { label: "Operational footprint constraints", value: "operational_footprin" },
          { label: "Only the ability to settle out and remove large solid particles", value: "only_the_ability_to_" },
          { label: "Operational time constraints", value: "operational_time_con" },
        ],
        answer: "operational_footprin",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 5)"
      },
      {
        id: "hw5_q19",
        number: 19,
        type: "multiple",
        question: "What following aspects significantly affect the settling velocity of a drilled solid? (Select all that apply)",
        options: [
          { label: "Solid particles specific gravity", value: "solid_particles_spec" },
          { label: "Solid particles shape", value: "solid_particles_shap" },
          { label: "Solid particles micron size", value: "solid_particles_micr" },
          { label: "Solid particles color", value: "solid_particles_colo" },
          { label: "Fluid density", value: "fluid_density" },
          { label: "Fluid Viscosity", value: "fluid_viscosity" },
          { label: "Fluid loss into the formation", value: "fluid_loss_into_the_" },
          { label: "Amount of G-force applied", value: "amount_of_g_force_ap" },
        ],
        answer: ["solid_particles_spec", "solid_particles_spec", "solid_particles_spec", "fluid_density", "fluid_viscosity"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 60)"
      },
      {
        id: "hw5_q20",
        number: 20,
        type: "single",
        question: "Chemical additions of thinners / dispersants to repair and overcome undesired increased rheological properties isreferred to as:",
        options: [
          { label: "Coagulation", value: "coagulation" },
          { label: "De-flocculation", value: "de_flocculation" },
          { label: "Inhibition", value: "inhibition" },
          { label: "Encapsulation", value: "encapsulation" },
          { label: "Flocculation", value: "flocculation" },
        ],
        answer: "de_flocculation",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 6)"
      },
      {
        id: "hw5_q21",
        number: 21,
        type: "single",
        question: "",
        options: [
          { label: "involves the additions of high molecular weight polymers to coat and preserve the drilled solids in order", value: "involves_the_additio" },
          { label: "to prevent issues related to reactive solids", value: "to_prevent_issues_re" },
        ],
        answer: "involves_the_additio",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 4)"
      },
      {
        id: "hw5_q22",
        number: 22,
        type: "multiple",
        question: "A chemical treatment used to enhance the solids removal efficiencies, also known as dewatering typically consists of:",
        options: [
          { label: "coagulants", value: "coagulants" },
          { label: "flocculants", value: "flocculants" },
        ],
        answer: ["coagulants", "flocculants"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 5)"
      },
      {
        id: "hw5_q23",
        number: 23,
        type: "single",
        question: "When drilling reactive formations prevention is generally accomplished by utilizing fluid systems that are formulatedto incorporate the chemistry needed to prevent excessive dispersion & hydration of solid particles.This is an example of:",
        options: [
          { label: "Emulsification", value: "emulsification" },
          { label: "Inhibition", value: "inhibition" },
          { label: "Coagulation", value: "coagulation" },
          { label: "De-flocculation", value: "de_flocculation" },
          { label: "Flocculation", value: "flocculation" },
        ],
        answer: "inhibition",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 23)"
      },
      {
        id: "hw5_q24",
        number: 24,
        type: "multiple",
        question: "What are the categories that Baroid's BSS uses to classify their offered equipment and services?",
        options: [
          { label: "Filtration (wellbore cleanup) Equipment & Services", value: "filtration__wellbore" },
          { label: "Solids Control & Fluid Treatment Equipment & Services", value: "solids_control___flu" },
          { label: "Waste Disposal & Transportation Equipment & Services", value: "waste_disposal___tra" },
          { label: "Waste Handling & Transportation Equipment & Services", value: "waste_handling___tra" },
          { label: "Waste Treatment & Disposal Equipment & Services", value: "waste_treatment___di" },
          { label: "Waste Treatment & Transportation Equipment & Services", value: "waste_treatment___tr" },
          { label: "Spacers & Fluid Mixing equipment", value: "spacers___fluid_mixi" },
          { label: "Solids Solutions & Fluid Treatment Equipment & Services", value: "solids_solutions___f" },
        ],
        answer: ["filtration__wellbore", "solids_control___flu", "waste_treatment___di", "waste_handling___tra"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 43)"
      },
      {
        id: "hw5_q25",
        number: 25,
        type: "single",
        question: "What section of the surface mud pit system are the solids control devices located?",
        options: [
          { label: "Return section", value: "return_section" },
          { label: "Suction section", value: "suction_section" },
          { label: "Additions section", value: "additions_section" },
          { label: "Testing section", value: "testing_section" },
          { label: "Reserves section", value: "reserves_section" },
        ],
        answer: "return_section",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 22)"
      },
      {
        id: "hw5_q26",
        number: 26,
        type: "single",
        question: "A is a device often installed on the flow line to ensure equal distribution of the circulated drilling fluid",
        options: [
          { label: "and transported solids over the shakers", value: "and_transported_soli" },
        ],
        answer: "and_transported_soli",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 5)"
      },
      {
        id: "hw5_q27",
        number: 27,
        type: "single",
        question: "A is a preliminary screening mechanism utilized when drilling adolescent unconsolidated shale’s",
        options: [
          { label: "causing excessive solid hydration that would obstruct the shaker performance", value: "causing_excessive_so" },
        ],
        answer: "causing_excessive_so",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 5)"
      },
      {
        id: "hw5_q28",
        number: 28,
        type: "single",
        question: "What is the typical sequenced arrangement of conventional solids control equipment for a weighted system?",
        options: [
          { label: "Shake shaker, desilter, desander, & centrifuge", value: "shake_shaker__desilt" },
          { label: "Shale shaker, centrifuge, desander", value: "shale_shaker__centri" },
          { label: "Shale shaker, Mud Cleaner, Low Speed Centrifuge, High Speed Centrifuge", value: "shale_shaker__mud_cl" },
          { label: "Shale Shaker, desander, desilter & centrifuge", value: "shale_shaker__desand" },
          { label: "Shale shaker, centrifuge, desander & desilter", value: "shale_shaker__centri" },
        ],
        answer: "shale_shaker__centri",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 43)"
      },
      {
        id: "hw5_q29",
        number: 29,
        type: "single",
        question: "",
        options: [
          { label: "What is the typical sequenced arrangement of conventional solids control equipment for an un-weighted system?", value: "what_is_the_typical_" },
          { label: "Shake shaker, desilter, desander, & centrifuge", value: "shake_shaker__desilt" },
          { label: "Shale shaker, centrifuge, desander", value: "shale_shaker__centri" },
          { label: "Shale shaker, Mud Cleaner, Low Speed Centrifuge, High Speed Centrifuge", value: "shale_shaker__mud_cl" },
          { label: "Shale Shaker, desander, desilter & centrifuge", value: "shale_shaker__desand" },
          { label: "Shale shaker, centrifuge, desander & desilter", value: "shale_shaker__centri" },
        ],
        answer: "shale_shaker__centri",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 4)"
      },
      {
        id: "hw5_q30",
        number: 30,
        type: "single",
        question: "What is the angled settling pit located directly below the underbelly of the primary shakers?",
        options: [
          { label: "Trip tank", value: "trip_tank" },
          { label: "Slugging pit", value: "slugging_pit" },
          { label: "Sand trap", value: "sand_trap" },
          { label: "Return pit", value: "return_pit" },
          { label: "Coarse tank", value: "coarse_tank" },
        ],
        answer: "sand_trap",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 43)"
      },
      {
        id: "hw5_q31",
        number: 31,
        type: "single",
        question: "Which piece of Baroid Surface Solutions equipment is the first line of defense in solids control?",
        options: [
          { label: "Shale shaker", value: "shale_shaker" },
          { label: "Centrifuge", value: "centrifuge" },
          { label: "Dryer", value: "dryer" },
          { label: "Flow divider", value: "flow_divider" },
        ],
        answer: "shale_shaker",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 28)"
      },
      {
        id: "hw5_q32",
        number: 32,
        type: "multiple",
        question: "What conventional solids control equipment removes solids based on the principle of accelerated sedimentation?",
        options: [
          { label: "Hydrocyclones (desander and desilter)", value: "hydrocyclones__desan" },
          { label: "Shale shakers", value: "shale_shakers" },
          { label: "Cutting dryers", value: "cutting_dryers" },
          { label: "Decanting centrifuge", value: "decanting_centrifuge" },
        ],
        answer: ["hydrocyclones__desan", "decanting_centrifuge"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 213)"
      },
      {
        id: "hw5_q33",
        number: 33,
        type: "single",
        question: "What separation method is used when using a Shale Shaker?",
        options: [
          { label: "Gravity", value: "gravity" },
          { label: "Filtering", value: "filtering" },
          { label: "Accelerated sedimentation", value: "accelerated_sediment" },
          { label: "Centrifugal force", value: "centrifugal_force" },
          { label: "Desorption", value: "desorption" },
        ],
        answer: "filtering",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 67)"
      },
      {
        id: "hw5_q34",
        number: 34,
        type: "multiple",
        question: "A “stand alone” Hydrocyclone is better known as:",
        options: [
          { label: "Desander", value: "desander" },
          { label: "Centrifuge", value: "centrifuge" },
          { label: "Degasser", value: "degasser" },
          { label: "Desilter", value: "desilter" },
        ],
        answer: ["desander", "desilter"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Baroid Manual)"
      },
      {
        id: "hw5_q35",
        number: 35,
        type: "multiple",
        question: "A mud cleaner combines what TWO methods to remove solids from the drilling mud?",
        options: [
          { label: "Filtering", value: "filtering" },
          { label: "Gravitational settling", value: "gravitational_settli" },
          { label: "Accelerated Sedimentation", value: "accelerated_sediment" },
          { label: "Accelerated Degradation", value: "accelerated_degradat" },
        ],
        answer: ["filtering", "accelerated_sediment"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 5)"
      },
      {
        id: "hw5_q36",
        number: 36,
        type: "single",
        question: "What piece of conventional solids control equipment is purposed to remove fine to ultra-fine solids less than 20microns?",
        options: [
          { label: "Shale Shaker", value: "shale_shaker" },
          { label: "Desander", value: "desander" },
          { label: "Flow divider", value: "flow_divider" },
          { label: "Centrifuge", value: "centrifuge" },
        ],
        answer: "centrifuge",
        explanation: "Correct answers are based on the Baroid Core manual. (See Baroid Manual)"
      },
      {
        id: "hw5_q37",
        number: 37,
        type: "single",
        question: "A mud cleaner typically is used in place of stand-alone hydrocyclones on what type of mud systems?",
        options: [
          { label: "Un-weighted systems", value: "un_weighted_systems" },
          { label: "Completions Brine", value: "completions_brine" },
          { label: "Weighted systems", value: "weighted_systems" },
          { label: "Water based systems", value: "water_based_systems" },
          { label: "Non Aqueous fluid systems", value: "non_aqueous_fluid_sy" },
        ],
        answer: "un_weighted_systems",
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 5)"
      },
      {
        id: "hw5_q38",
        number: 38,
        type: "multiple",
        question: "List the primary applications for centrifuges utilized by BSS",
        options: [
          { label: "Max solids removal", value: "max_solids_removal" },
          { label: "Particle size reduction", value: "particle_size_reduct" },
          { label: "Rheology control (barite recovery)", value: "rheology_control__ba" },
          { label: "Chemically enhanced centrifugation (dewatering)", value: "chemically_enhanced_" },
          { label: "Rheology increase", value: "rheology_increase" },
        ],
        answer: ["max_solids_removal", "rheology_control__ba", "chemically_enhanced_"],
        explanation: "Correct answers are based on the Baroid Core manual. (See Page 36)"
      },
    ]
  }
});

if (typeof module !== 'undefined') {
  module.exports = QUIZ_DATA;
}
