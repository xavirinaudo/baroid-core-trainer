# build_homework_5.py
import json

questions = [
    {
        "id": "hw5_q1",
        "number": 1,
        "type": "multiple",
        "question": "Increasing solids content in a drilling fluid can result in several negative issues. From the following list, select the most critical effects of improper solids control:",
        "options": [
            {"label": "Increased fluid loss due high ECDs", "value": "increased_fluid_loss"},
            {"label": "Stuck pipe due differential sticking", "value": "stuck_pipe_due_diff"},
            {"label": "Increase of ROP and lowering of rig time", "value": "increase_rop_error"},
            {"label": "Poor cement jobs due thick filtercake", "value": "poor_cement_jobs"},
            {"label": "Increased lubrication", "value": "increased_lubrication_error"},
            {"label": "Increase of rig time by lowering ROP", "value": "increase_rig_time"},
            {"label": "Increased fluid waste volumes", "value": "increased_waste_volumes"},
            {"label": "Good cement jobs due thinner filtercake", "value": "good_cement_jobs_error"}
        ],
        "answer": [
            "increased_fluid_loss",
            "stuck_pipe_due_diff",
            "poor_cement_jobs",
            "increase_rig_time",
            "increased_waste_volumes"
        ],
        "explanation": "High solids content increases equivalent circulating density (ECD) and filter cake thickness, leading to increased fluid loss, stuck pipe risks, poor cement displacement, lower rate of penetration (ROP), and higher overall waste volume. (See Page 71)"
    },
    {
        "id": "hw5_q2",
        "number": 2,
        "type": "multiple",
        "question": "Which statements below reflect the role of solids control equipment?",
        "options": [
            {"label": "Solids Control equipment typically provides discharged solids that are under the permitted ROC% limit to allow discharging them overboard", "value": "roc_limit_error"},
            {"label": "Solids control operations address the first step of the waste management hierarchy by reducing the amount of generated waste", "value": "reduce_waste_step"},
            {"label": "Solids control equipment treats and segregates all waste bi-products from the discharged waste streams", "value": "treat_all_error"},
            {"label": "Solids Control operations should only be used with expensive fluid systems", "value": "expensive_systems_error"},
            {"label": "Solid control equipment is purposed to optimizes the drilling fluid performance and maximize drilling efficiencies", "value": "optimize_performance"}
        ],
        "answer": [
            "reduce_waste_step",
            "optimize_performance"
        ],
        "explanation": "Solids control is a proactive approach that minimizes waste at the source (the 'Reduce' step in the hierarchy) and optimizes fluid performance to maximize drilling efficiency. (See Page 73)"
    },
    {
        "id": "hw5_q3",
        "number": 3,
        "type": "single",
        "question": "What purpose would solids control equipment serve when encountering formations at depths that provide a narrow margin of error allowed between the pore pressure and fracture gradient?",
        "options": [
            {"label": "Increase penetration rates (ROP’s)", "value": "rop"},
            {"label": "Provide better cementing jobs", "value": "cementing"},
            {"label": "Lower probability of differential sticking", "value": "sticking"},
            {"label": "Provide Lower Equivalent Circulating Densities (ECD’s)", "value": "lower_ecd"},
            {"label": "Reduced torque and drag", "value": "torque_drag"}
        ],
        "answer": "lower_ecd",
        "explanation": "Removing low-gravity solids keeps the mud weight (MW) and plastic viscosity (PV) low, minimizing the Equivalent Circulating Density (ECD) to prevent fracturing narrow-margin formations. (See Page 73)"
    },
    {
        "id": "hw5_q4",
        "number": 4,
        "type": "single",
        "question": "What purpose would solids control equipment serve if an operator emphasized the importance to reach all section target depths (TD) on or ahead of schedule?",
        "options": [
            {"label": "Increase penetration rates (ROP’s)", "value": "increase_rop"},
            {"label": "Provide better cementing jobs", "value": "cementing"},
            {"label": "Lower probability of differential sticking", "value": "sticking"},
            {"label": "Provide Lower Equivalent Circulating Densities (ECD’s)", "value": "lower_ecd"},
            {"label": "Reduced torque and drag", "value": "torque_drag"}
        ],
        "answer": "increase_rop",
        "explanation": "Minimizing solids reduces mechanical friction at the bit, leading to higher rates of penetration (ROP) and faster drilling times. (See Page 73)"
    },
    {
        "id": "hw5_q5",
        "number": 5,
        "type": "single",
        "question": "What is considered the most effective and economically viable option to remove solids from the drilling fluid?",
        "options": [
            {"label": "Dump & dilute", "value": "dump_dilute"},
            {"label": "Chemical Treatment", "value": "chemical"},
            {"label": "Mechanical separation", "value": "mechanical"},
            {"label": "Gravitational Settling", "value": "gravity"},
            {"label": "Dilution", "value": "dilution"}
        ],
        "answer": "mechanical",
        "explanation": "Mechanical separation using shale shakers, hydrocyclones, and centrifuges is the most efficient and cost-effective method to remove drill solids without discarding mud. (See Page 73)"
    },
    {
        "id": "hw5_q6",
        "number": 6,
        "type": "multiple",
        "question": "What are the two most important reasons for adding weighting material and maintaining sufficient mud density?",
        "options": [
            {"label": "Provide wellbore stability", "value": "wellbore_stability"},
            {"label": "Transport Cuttings to Surface", "value": "transport_cuttings"},
            {"label": "Suspend and release cuttings", "value": "suspend_cuttings"},
            {"label": "Protect against corrosion", "value": "corrosion"},
            {"label": "Provide hydraulic power to downhole tools", "value": "hydraulic_power"},
            {"label": "Control subsurface pressures", "value": "control_pressures"}
        ],
        "answer": [
            "wellbore_stability",
            "control_pressures"
        ],
        "explanation": "Weighting materials (primarily Barite) are added to increase mud density to provide hydrostatic pressure to control subsurface pressures and prevent wellbore collapse. (See Page 87)"
    },
    {
        "id": "hw5_q7",
        "number": 7,
        "type": "multiple",
        "question": "Barite should consist of which of the following physical characteristics? (Select all that apply)",
        "options": [
            {"label": "Micron size of particles is predominantly <74 microns", "value": "size_less_74"},
            {"label": "Non-abrasive", "value": "non_abrasive"},
            {"label": "Chemically reactive", "value": "reactive_error"},
            {"label": "High specific gravity", "value": "high_sg"},
            {"label": "Chemically inert", "value": "chemically_inert"},
            {"label": "Low specific gravity", "value": "low_sg_error"},
            {"label": "Micron size of particles is predominantly >74 microns", "value": "size_greater_74_error"}
        ],
        "answer": [
            "size_less_74",
            "non_abrasive",
            "high_sg",
            "chemically_inert"
        ],
        "explanation": "API barite must have a high specific gravity (4.1-4.2), be chemically inert (so it doesn't react with other additives), non-abrasive (to minimize tool wear), and predominantly under 74 microns. (See Page 87)"
    },
    {
        "id": "hw5_q8",
        "number": 8,
        "type": "multiple",
        "question": "What are the two most important purposes of maintaining sufficient rheological properties?",
        "options": [
            {"label": "Suspend and release cuttings", "value": "suspend_release"},
            {"label": "Transport cuttings to surface", "value": "transport"},
            {"label": "Lubricate the bit", "value": "lubricate"},
            {"label": "Provide wellbore stability", "value": "wellbore_stability"},
            {"label": "Provide hydraulic power to downhole tools", "value": "hydraulic_power"}
        ],
        "answer": [
            "suspend_release",
            "transport"
        ],
        "explanation": "Maintaining correct rheological properties (yield point, plastic viscosity, gel strengths) ensures the fluid can transport cuttings to the surface during circulation and suspend them when static. (See Page 30)"
    },
    {
        "id": "hw5_q9",
        "number": 9,
        "type": "multiple",
        "question": "What are the four criteria by which solid particles are typically classified in drilling fluids? (Select 4 options)",
        "options": [
            {"label": "Solid Particle color", "value": "color"},
            {"label": "Solid Particle Specific Gravity (SG)", "value": "sg"},
            {"label": "Solid Particle mineralogy", "value": "mineralogy"},
            {"label": "Solid Particle Reactivity", "value": "reactivity"},
            {"label": "Solid Particle shape", "value": "shape"},
            {"label": "Solid Particle strength", "value": "strength"},
            {"label": "Solid Particle Source", "value": "source"},
            {"label": "Solid Particle Size", "value": "size"}
        ],
        "answer": [
            "sg",
            "reactivity",
            "source",
            "size"
        ],
        "explanation": "According to the Baroid solids classification system, solid particles are classified by their Specific Gravity, Reactivity (reactive vs inert), Source (commercial vs drilled), and Particle Size. (See Figure 60, Page 86)"
    },
    {
        "id": "hw5_q10",
        "number": 10,
        "type": "single",
        "question": "Solid particle degradation will result in smaller solid particle size causing an increase in the:",
        "options": [
            {"label": "Solid particle distribution", "value": "distribution"},
            {"label": "Solid particles density", "value": "density"},
            {"label": "Solid particles reactiveness", "value": "reactiveness"},
            {"label": "Solid particles abrasiveness", "value": "abrasiveness"},
            {"label": "Solid particles surface area", "value": "surface_area"}
        ],
        "answer": "surface_area",
        "explanation": "Mechanical degradation breaks down drill solids into smaller particles (fines and colloids), which exponentially increases the total solids surface area in contact with the fluid. (See Page 89)"
    },
    {
        "id": "hw5_q11",
        "number": 11,
        "type": "single",
        "question": "What characteristic of some shale formations causes hydration of the clay particles resulting in solid particle swelling?",
        "options": [
            {"label": "Particle size", "value": "size"},
            {"label": "Particle density", "value": "density"},
            {"label": "Particle shape", "value": "shape"},
            {"label": "Particle surface area", "value": "surface_area"},
            {"label": "Particle degradation", "value": "degradation"},
            {"label": "Particle reactiveness", "value": "reactiveness"}
        ],
        "answer": "reactiveness",
        "explanation": "Reactivity refers to the clay's potential to absorb water and swell. High-reactivity clays (like smectite/bentonite) swell rapidly when exposed to uninhibited water-based muds. (See Page 91)"
    },
    {
        "id": "hw5_q12",
        "number": 12,
        "type": "multiple",
        "question": "The two solid characteristics that pose the most difficult challenges to the fluid's rheological properties and overall fluid performance are:",
        "options": [
            {"label": "Solid Reactiveness", "value": "reactiveness"},
            {"label": "Solid abrasiveness", "value": "abrasiveness"},
            {"label": "Solid density", "value": "density"},
            {"label": "Solid specific gravity", "value": "sg"},
            {"label": "Solid size", "value": "size"}
        ],
        "answer": [
            "reactiveness",
            "size"
        ],
        "answer": ["reactiveness", "size"],
        "explanation": "Particle size (specifically colloidal fines) and clay reactiveness (hydration/dispersion) are the two factors that most severely impact plastic viscosity and gel strengths. (See Page 89)"
    },
    {
        "id": "hw5_q13",
        "number": 13,
        "type": "single",
        "question": "Which type of clay formation exhibits the highest potential for swelling?",
        "options": [
            {"label": "Kaolinites", "value": "kaolinites"},
            {"label": "Smectites", "value": "smectites"},
            {"label": "Chlorites", "value": "chlorites"},
            {"label": "Illites", "value": "illites"},
            {"label": "All of the above", "value": "all"}
        ],
        "answer": "smectites",
        "explanation": "Smectite clays (such as sodium montmorillonite) have a high cation exchange capacity and easily hydrate between silicate sheets, causing severe swelling. (See Page 88)"
    },
    {
        "id": "hw5_q14",
        "number": 14,
        "type": "multiple",
        "question": "Why do clay particles that are “inert” still pose adverse challenges to the drilling fluid properties? (Select all that apply)",
        "options": [
            {"label": "The clay particles are so fine (small) making removal difficult for conventional solids control equipment", "value": "fine_removal_diff"},
            {"label": "They consist of mostly abrasive solid particles causing further erosion of equipment.", "value": "abrasive_error"},
            {"label": "They consist of mostly large solid particles resulting in increased solid surface area and less free liquid available to the mud", "value": "large_surface_error"},
            {"label": "They consist of mostly colloidal solid particles causing increased solid surface areas and less free liquid providing undesired viscosity of mud", "value": "colloidal_viscosity"}
        ],
        "answer": [
            "fine_removal_diff",
            "colloidal_viscosity"
        ],
        "explanation": "Even if inert, fine and colloidal particles cannot be easily screened out by shakers and remain suspended. Their high surface area binds free water, increasing plastic viscosity. (See Page 89)"
    },
    {
        "id": "hw5_q15",
        "number": 15,
        "type": "single",
        "question": "Higher than normal sand content present in drilling muds can result in:",
        "options": [
            {"label": "Excessive hydration of clays", "value": "hydration_error"},
            {"label": "Excessive dilution as sand is difficult to mechanically remove", "value": "dilution_error"},
            {"label": "Excessive equipment repair and pump maintenance costs", "value": "equipment_wear"},
            {"label": "Increased amount of colloidal solid particles", "value": "colloidal_error"}
        ],
        "answer": "equipment_wear",
        "explanation": "Sand (particles >74 microns) is highly abrasive and will rapidly erode pump liners, drill string components, and surface equipment if not removed. (See Page 15)"
    },
    {
        "id": "hw5_q16",
        "number": 16,
        "type": "multiple",
        "question": "The use of dilution only to reduce solids % provides what implications?",
        "options": [
            {"label": "Does not lower the solids % in the mud", "value": "does_not_lower"},
            {"label": "Excessive mud and waste volumes", "value": "excessive_volumes"},
            {"label": "Increasingly excessive mud maintenance costs", "value": "excessive_costs"},
            {"label": "Fluid incompatibility with drilled solids", "value": "incompatibility"}
        ],
        "answer": [
            "excessive_volumes",
            "excessive_costs"
        ],
        "explanation": "Dilution alone creates massive volumes of excess mud that must be treated or discarded, exponentially increasing chemical and disposal costs. (See Page 73)"
    },
    {
        "id": "hw5_q17",
        "number": 17,
        "type": "single",
        "question": "Use of gravitational settling only to lower solids content provides what operational implications?",
        "options": [
            {"label": "Operational footprint constraints", "value": "footprint"},
            {"label": "Only the ability to settle out and remove large solid particles", "value": "large_only"},
            {"label": "Operational time constraints", "value": "time"},
            {"label": "All of the above", "value": "all_above"}
        ],
        "answer": "all_above",
        "explanation": "Gravitational settling requires extremely large pit volumes (footprint), takes too long (time constraints), and only works for coarse particles, leaving fines suspended. (See Page 78)"
    },
    {
        "id": "hw5_q18",
        "number": 18,
        "type": "multiple",
        "question": "What aspects significantly affect the settling velocity of a drilled solid? (Select all that apply)",
        "options": [
            {"label": "Solid particles specific gravity", "value": "sg"},
            {"label": "Solid particles shape", "value": "shape"},
            {"label": "Solid particles micron size", "value": "size"},
            {"label": "Solid particles color", "value": "color_error"},
            {"label": "Fluid density", "value": "fluid_density"},
            {"label": "Fluid Viscosity", "value": "fluid_viscosity"},
            {"label": "Fluid loss into the formation", "value": "fluid_loss_error"},
            {"label": "Amount of G-force applied", "value": "g_force"}
        ],
        "answer": [
            "sg",
            "shape",
            "size",
            "fluid_density",
            "fluid_viscosity",
            "g_force"
        ],
        "explanation": "According to Stokes' Law, settling velocity is determined by the particle density (SG), size, shape, fluid density, fluid viscosity, and the gravitational/centrifugal forces (G-force) applied. (See Page 78)"
    },
    {
        "id": "hw5_q19",
        "number": 19,
        "type": "single",
        "question": "Chemical additions of thinners / dispersants to repair and overcome undesired increased rheological properties is referred to as:",
        "options": [
            {"label": "Coagulation", "value": "coagulation"},
            {"label": "De-flocculation", "value": "de_flocculation"},
            {"label": "Inhibition", "value": "inhibition"},
            {"label": "Encapsulation", "value": "encapsulation"},
            {"label": "Flocculation", "value": "flocculation"}
        ],
        "answer": "de_flocculation",
        "explanation": "De-flocculation uses chemical thinners to break up clay particle aggregates, reducing mud viscosity and gel strengths. (See Page 78)"
    },
    {
        "id": "hw5_q20",
        "number": 20,
        "type": "single",
        "question": "Which chemical treatment process involves the additions of high molecular weight polymers to coat and preserve the drilled solids in order to prevent issues related to reactive solids?",
        "options": [
            {"label": "Coagulation", "value": "coagulation"},
            {"label": "De-flocculation", "value": "de_flocculation"},
            {"label": "Inhibition", "value": "inhibition"},
            {"label": "Encapsulation", "value": "encapsulation"},
            {"label": "Flocculation", "value": "flocculation"}
        ],
        "answer": "encapsulation",
        "explanation": "Encapsulation uses long-chain polymers to wrap around cuttings, preventing water contact, swelling, and subsequent dispersion. (See Page 78)"
    },
    {
        "id": "hw5_q21",
        "number": 21,
        "type": "single",
        "question": "When dewatering, the chemical additions used to neutralize the negative charge of the fine suspended solid particles to allow them to form mini aggregates are referred to as:",
        "options": [
            {"label": "Coagulants", "value": "coagulants"},
            {"label": "Flocculants", "value": "flocculants"},
            {"label": "Thinners", "value": "thinners"},
            {"label": "Surfactants", "value": "surfactants"}
        ],
        "answer": "coagulants",
        "explanation": "Coagulants neutralize the negative surface charges on clay particles, removing repulsive forces and allowing electrostatic attraction to aggregate them. (See Page 78)"
    },
    {
        "id": "hw5_q22",
        "number": 22,
        "type": "single",
        "question": "When dewatering, the long chain polymer additions used to envelope and bind the aggregated solids together to form larger solid clusters (flocs) are referred to as:",
        "options": [
            {"label": "Coagulants", "value": "coagulants"},
            {"label": "Flocculants", "value": "flocculants"},
            {"label": "Thinners", "value": "thinners"},
            {"label": "Surfactants", "value": "surfactants"}
        ],
        "answer": "flocculants",
        "explanation": "Flocculants are high molecular weight polymers that act as bridges to gather aggregated particles into large visible clusters called flocs. (See Page 78)"
    },
    {
        "id": "hw5_q23",
        "number": 23,
        "type": "single",
        "question": "When drilling reactive formations, prevention is generally accomplished by utilizing fluid systems formulated to incorporate the chemistry needed to prevent excessive dispersion & hydration of solid particles. This is an example of:",
        "options": [
            {"label": "Emulsification", "value": "emulsification"},
            {"label": "Inhibition", "value": "inhibition"},
            {"label": "Coagulation", "value": "coagulation"},
            {"label": "De-flocculation", "value": "de_flocculation"},
            {"label": "Flocculation", "value": "flocculation"}
        ],
        "answer": "inhibition",
        "explanation": "Inhibition is the chemical prevention of clay swelling and dispersion, typically achieved using salts (like KCl) or specialized polymers. (See Page 78)"
    },
    {
        "id": "hw5_q24",
        "number": 24,
        "type": "multiple",
        "question": "What are the four categories that Baroid's BSS uses to classify their offered equipment and services? (Select 4 options)",
        "options": [
            {"label": "Filtration (wellbore cleanup) Equipment & Services", "value": "filtration"},
            {"label": "Solids Control & Fluid Treatment Equipment & Services", "value": "solids_control"},
            {"label": "Waste Disposal & Transportation Equipment & Services", "value": "disposal_error"},
            {"label": "Waste Handling & Transportation Equipment & Services", "value": "waste_handling"},
            {"label": "Waste Treatment & Disposal Equipment & Services", "value": "waste_treatment"},
            {"label": "Waste Treatment & Transportation Equipment & Services", "value": "transport_error"},
            {"label": "Spacers & Fluid Mixing equipment", "value": "mixing_error"},
            {"label": "Solids Solutions & Fluid Treatment Equipment & Services", "value": "solutions_error"}
        ],
        "answer": [
            "filtration",
            "solids_control",
            "waste_handling",
            "waste_treatment"
        ],
        "explanation": "Baroid Surface Solutions (BSS) classifies its services into: Solids Control & Fluid Treatment, Waste Handling & Transportation, Waste Treatment & Disposal, and Filtration (wellbore cleanup). (See Baroid BSS Service Line definitions)"
    },
    {
        "id": "hw5_q25",
        "number": 25,
        "type": "single",
        "question": "What section of the surface mud pit system are the solids control devices located?",
        "options": [
            {"label": "Return section", "value": "return"},
            {"label": "Suction section", "value": "suction"},
            {"label": "Additions section", "value": "additions"},
            {"label": "Testing section", "value": "testing"},
            {"label": "Reserves section", "value": "reserves"}
        ],
        "answer": "return",
        "explanation": "Solids control devices are located in the return section of the mud pits to remove drill solids immediately as mud returns from the wellbore, before it reaches the additions or suction sections. (See Mud Tank Layout)"
    },
    {
        "id": "hw5_q26",
        "number": 26,
        "type": "single",
        "question": "A _____ is a device often installed on the flow line to ensure equal distribution of the circulated drilling fluid and transported solids over the shakers:",
        "options": [
            {"label": "Flow divider", "value": "flow_divider"},
            {"label": "Centrifuge feed header", "value": "header"},
            {"label": "Flow distributor", "value": "distributor"},
            {"label": "Gumbo box", "value": "gumbo_box"}
        ],
        "answer": "flow_divider",
        "explanation": "Flow dividers split the flow line return stream equally among all operating shakers to prevent overloading any single shaker screen. (See Shaker installation)"
    },
    {
        "id": "hw5_q27",
        "number": 27,
        "type": "single",
        "question": "A _____ is a preliminary screening mechanism utilized when drilling adolescent unconsolidated shales causing excessive solid hydration that would obstruct the shaker performance:",
        "options": [
            {"label": "Flow divider", "value": "flow_divider"},
            {"label": "Gumbo removal device", "value": "gumbo_device"},
            {"label": "Coarse screen", "value": "coarse"},
            {"label": "Mud bucket", "value": "bucket"}
        ],
        "answer": "gumbo_device",
        "explanation": "Gumbo removal devices (like gumbo shakers or scalping screens) catch large sticky clay masses (gumbo) before they reach the primary shale shakers, preventing screen blinding. (See Page 75)"
    },
    {
        "id": "hw5_q28",
        "number": 28,
        "type": "single",
        "question": "What is the typical sequenced arrangement of conventional solids control equipment for a weighted system?",
        "options": [
            {"label": "Shale shaker, desilter, desander, & centrifuge", "value": "seq_1"},
            {"label": "Shale shaker, centrifuge, desander", "value": "seq_2"},
            {"label": "Shale shaker, Mud Cleaner, Low Speed Centrifuge, High Speed Centrifuge", "value": "seq_3"},
            {"label": "Shale Shaker, desander, desilter & centrifuge", "value": "seq_4"},
            {"label": "Shale shaker, centrifuge, desander & desilter", "value": "seq_5"}
        ],
        "answer": "seq_3",
        "explanation": "In a weighted mud system, the sequence is: Shale shaker -> Mud Cleaner -> Low Speed Centrifuge -> High Speed Centrifuge. Hydrocyclones are bypass-routed to the Mud Cleaner to recover barite. (See Page 83)"
    },
    {
        "id": "hw5_q29",
        "number": 29,
        "type": "single",
        "question": "What is the typical sequenced arrangement of conventional solids control equipment for an un-weighted system?",
        "options": [
            {"label": "Shale shaker, desilter, desander, & centrifuge", "value": "seq_1"},
            {"label": "Shale shaker, centrifuge, desander", "value": "seq_2"},
            {"label": "Shale shaker, Mud Cleaner, Low Speed Centrifuge, High Speed Centrifuge", "value": "seq_3"},
            {"label": "Shale Shaker, desander, desilter & centrifuge", "value": "seq_4"},
            {"label": "Shale shaker, centrifuge, desander & desilter", "value": "seq_5"}
        ],
        "answer": "seq_4",
        "explanation": "In an un-weighted mud system, mud flows from the Shale Shaker -> Desander -> Desilter -> Decanting Centrifuge in sequence, removing progressively smaller particles. (See Page 81)"
    },
    {
        "id": "hw5_q30",
        "number": 30,
        "type": "single",
        "question": "What is the angled settling pit located directly below the underbelly of the primary shakers?",
        "options": [
            {"label": "Trip tank", "value": "trip_tank"},
            {"label": "Slugging pit", "value": "slug_pit"},
            {"label": "Sand trap", "value": "sand_trap"},
            {"label": "Return pit", "value": "return_pit"},
            {"label": "Coarse tank", "value": "coarse_tank"}
        ],
        "answer": "sand_trap",
        "explanation": "The sand trap is the compartment directly under the shakers. It is angled to settle out coarse solids that pass through broken screens, and is kept un-agitated. (See Sand Trap definition)"
    },
    {
        "id": "hw5_q31",
        "number": 31,
        "type": "single",
        "question": "Which piece of Baroid Surface Solutions equipment is the first line of defense in solids control?",
        "options": [
            {"label": "Shale shaker", "value": "shaker"},
            {"label": "Centrifuge", "value": "centrifuge"},
            {"label": "Dryer", "value": "dryer"},
            {"label": "Flow divider", "value": "flow_divider"}
        ],
        "answer": "shaker",
        "explanation": "The shale shaker is the first line of defense, separating the bulk of coarse drilled solids (down to ~74 microns) by mechanical screening before they degrade. (See Page 73)"
    },
    {
        "id": "hw5_q32",
        "number": 32,
        "type": "multiple",
        "question": "What conventional solids control equipment removes solids based on the principle of accelerated sedimentation? (Select all that apply)",
        "options": [
            {"label": "Hydrocyclones (desander and desilter)", "value": "hydrocyclones"},
            {"label": "Shale shakers", "value": "shakers"},
            {"label": "Cutting dryers", "value": "dryers"},
            {"label": "Decanting centrifuge", "value": "centrifuge"}
        ],
        "answer": [
            "hydrocyclones",
            "centrifuge"
        ],
        "explanation": "Decanting centrifuges and hydrocyclones use centrifugal acceleration to force solids to settle out much faster than they would under normal gravity. (See Page 80)"
    },
    {
        "id": "hw5_q33",
        "number": 33,
        "type": "single",
        "question": "What separation method is used when using a Shale Shaker?",
        "options": [
            {"label": "Gravity", "value": "gravity"},
            {"label": "Filtering", "value": "filtering"},
            {"label": "Accelerated sedimentation", "value": "sedimentation"},
            {"label": "Centrifugal force", "value": "centrifugal"},
            {"label": "Desorption", "value": "desorption"}
        ],
        "answer": "filtering",
        "explanation": "Shale shakers separate solids by mechanical filtering (or screening) over wire mesh cloths. (See Page 80)"
    },
    {
        "id": "hw5_q34",
        "number": 34,
        "type": "multiple",
        "question": "A “stand alone” Hydrocyclone configuration is better known as a: (Select all that apply)",
        "options": [
            {"label": "Desander", "value": "desander"},
            {"label": "Centrifuge", "value": "centrifuge"},
            {"label": "Degasser", "value": "degasser"},
            {"label": "Desilter", "value": "desilter"},
            {"label": "All of the above", "value": "all"}
        ],
        "answer": [
            "desander",
            "desilter"
        ],
        "explanation": "Stand-alone hydrocyclones are classified by cone size as either desanders (typically 10-12 inch cones) or desilters (typically 4 inch cones). (See Page 81)"
    },
    {
        "id": "hw5_q35",
        "number": 35,
        "type": "multiple",
        "question": "A mud cleaner combines what TWO methods to remove solids from the drilling mud?",
        "options": [
            {"label": "Filtering", "value": "filtering"},
            {"label": "Gravitational settling", "value": "gravity"},
            {"label": "Accelerated Sedimentation", "value": "sedimentation"},
            {"label": "Accelerated Degradation", "value": "degradation"}
        ],
        "answer": [
            "filtering",
            "sedimentation"
        ],
        "explanation": "A mud cleaner consists of hydrocyclones (which separate solids via accelerated sedimentation) discharging their underflow onto a fine shale shaker screen (which separates via filtering). (See Mud Cleaner definition)"
    },
    {
        "id": "hw5_q36",
        "number": 36,
        "type": "single",
        "question": "What piece of conventional solids control equipment is purposed to remove fine to ultra-fine solids less than 20 microns?",
        "options": [
            {"label": "Shale Shaker", "value": "shaker"},
            {"label": "Desander", "value": "desander"},
            {"label": "Flow divider", "value": "flow_divider"},
            {"label": "Centrifuge", "value": "centrifuge"}
        ],
        "answer": "centrifuge",
        "explanation": "Decanting centrifuges operate at high rotational speeds to exert thousands of Gs of centrifugal force, capable of separating fine to ultra-fine particles (down to 2-5 microns). (See Page 80)"
    },
    {
        "id": "hw5_q37",
        "number": 37,
        "type": "single",
        "question": "A mud cleaner typically is used in place of stand-alone hydrocyclones on what type of mud systems?",
        "options": [
            {"label": "Un-weighted systems", "value": "unweighted"},
            {"label": "Completions Brine", "value": "brine"},
            {"label": "Weighted systems", "value": "weighted"},
            {"label": "Water based systems", "value": "wbm"},
            {"label": "Non Aqueous fluid systems", "value": "naf"}
        ],
        "answer": "weighted",
        "explanation": "In weighted systems, stand-alone hydrocyclones would discard valuable weighting material (barite) in their underflow. A mud cleaner screens this underflow to reclaim barite while discarding larger low-gravity solids. (See Mud Cleaner page)"
    },
    {
        "id": "hw5_q38",
        "number": 38,
        "type": "multiple",
        "question": "List the primary applications for centrifuges utilized by BSS: (Select 3 options)",
        "options": [
            {"label": "Max solids removal", "value": "max_solids"},
            {"label": "Particle size reduction", "value": "degradation"},
            {"label": "Rheology control (barite recovery)", "value": "barite_recovery"},
            {"label": "Chemically enhanced centrifugation (dewatering)", "value": "dewatering"},
            {"label": "Rheology increase", "value": "rheology_inc"},
            {"label": "None of the above", "value": "none"}
        ],
        "answer": [
            "max_solids",
            "barite_recovery",
            "dewatering"
        ],
        "explanation": "BSS utilizes centrifuges for three key applications: High-speed solids removal on un-weighted muds, low-speed barite recovery for rheology control on weighted muds, and chemically-enhanced dewatering. (See Page 80)"
    }
]

# Write to file
content = f"""var QUIZ_DATA = typeof QUIZ_DATA !== 'undefined' ? QUIZ_DATA : {{}};
Object.assign(QUIZ_DATA, {{
  homework_5: {{
    title: "Homework 5: Solids Control and Waste Management",
    description: "Assessment covering solids control classifications, settling velocity principles, and separation equipment sequence.",
    questions: {json.dumps(questions, indent=6)}
  }}
}});
"""

with open("data/homework_5.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Wrote data/homework_5.js successfully!")
