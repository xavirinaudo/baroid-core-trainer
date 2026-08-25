var QUIZ_DATA = typeof QUIZ_DATA !== 'undefined' ? QUIZ_DATA : {};
Object.assign(QUIZ_DATA, {
  homework_7: {
    title: "Homework 7: Centrifuges & Cuttings Dryers",
    description: "Assessment covering decanting centrifuges operating variables, dewatering physics, vertical cuttings dryers parameters, and dilution economics calculations.",
    questions: [
      {
            "id": "hw7_q1",
            "number": 1,
            "type": "multiple",
            "question": "The replaceable wear parts of a Dual Voltage DE-1000 FHD are (select all that apply):",
            "options": [
                  {
                        "label": "Feed accelerator",
                        "value": "feed_accelerator"
                  },
                  {
                        "label": "Pillow blocks",
                        "value": "pillow_blocks_error"
                  },
                  {
                        "label": "Feed nozzle liners",
                        "value": "feed_nozzle_liners"
                  },
                  {
                        "label": "Solids discharge wear inserts",
                        "value": "solids_discharge_inserts"
                  },
                  {
                        "label": "Feed tube",
                        "value": "feed_tube"
                  }
            ],
            "answer": [
                  "feed_accelerator",
                  "feed_nozzle_liners",
                  "solids_discharge_inserts",
                  "feed_tube"
            ],
            "explanation": "Replaceable wear parts in direct contact with mud slurry include the feed accelerator, feed nozzle liners, solids discharge wear inserts, and the feed tube. (See Page 145)"
      },
      {
            "id": "hw7_q2",
            "number": 2,
            "type": "single",
            "question": "The feed pump on a Dual Voltage DE-1000 FHD must be connected to the Electrical control panel to function automatically.",
            "options": [
                  {
                        "label": "True",
                        "value": "true"
                  },
                  {
                        "label": "False",
                        "value": "false"
                  }
            ],
            "answer": "true",
            "explanation": "The feed pump starter circuit must be wired to the main centrifuge control panel so the automated PLC can shut down or cycle the pump based on conveyor torque/pressure. (See Page 145)"
      },
      {
            "id": "hw7_q3",
            "number": 3,
            "type": "single",
            "question": "During feed pump cycling on a Dual Voltage DE-1000 FHD, the conveyor pressure stops the feed pump at what pressure, and restarts it at what pressure?",
            "options": [
                  {
                        "label": "Stops at 1500 psi, restarts at 700 psi",
                        "value": "stop_1500_start_700"
                  },
                  {
                        "label": "Stops at 1600 psi, restarts at 1100 psi",
                        "value": "stop_1600_start_1100"
                  },
                  {
                        "label": "Stops at 2100 psi, restarts at 1500 psi",
                        "value": "stop_2100_start_1500"
                  },
                  {
                        "label": "Stops at 1200 psi, restarts at 600 psi",
                        "value": "stop_1200_start_600"
                  }
            ],
            "answer": "stop_1500_start_700",
            "explanation": "In feed pump cycling mode, the PLC cuts power to the feed pump when conveyor pressure reaches 1500 psi to prevent plugging, and restarts it once conveyor pressure bleeds down to 700 psi. (See Page 146)"
      },
      {
            "id": "hw7_q4",
            "number": 4,
            "type": "single",
            "question": "The boost system on a Dual Voltage DE-1000 FHD increases conveyor speed when conveyor pressure reaches _____ psi, and the centrifuge shuts down when conveyor pressure reaches _____ psi.",
            "options": [
                  {
                        "label": "1500 psi / 2100 psi",
                        "value": "opt_1"
                  },
                  {
                        "label": "1600 psi / 2100 psi",
                        "value": "opt_2"
                  },
                  {
                        "label": "1600 psi / 2500 psi",
                        "value": "opt_3"
                  },
                  {
                        "label": "1800 psi / 2200 psi",
                        "value": "opt_4"
                  }
            ],
            "answer": "opt_2",
            "explanation": "The mechanical hydraulic boost system engages to speed up the conveyor at 1600 psi to clear the bowl, and initiates a safety shutdown if pressure climbs to 2100 psi. (See Page 146)"
      },
      {
            "id": "hw7_q5",
            "number": 5,
            "type": "single",
            "question": "All the effluent ports on a centrifuge set must be set in the same position.",
            "options": [
                  {
                        "label": "True",
                        "value": "true"
                  },
                  {
                        "label": "False",
                        "value": "false"
                  }
            ],
            "answer": "true",
            "explanation": "To maintain mechanical balance and ensure equal fluid depth (pond depth) around the circumference of the bowl, all effluent ports/weirs must be adjusted identically. (See Centrifuge Operating Manual)"
      },
      {
            "id": "hw7_q6",
            "number": 6,
            "type": "multiple",
            "question": "What covers and guards have safety proximity sensors on a Dual Voltage DE-1000 FHD? (Select all that apply)",
            "options": [
                  {
                        "label": "Case cover",
                        "value": "case_cover"
                  },
                  {
                        "label": "Feed pump starter box case",
                        "value": "starter_box_error"
                  },
                  {
                        "label": "Rotodiff cover",
                        "value": "rotodiff_cover"
                  },
                  {
                        "label": "Belt guard",
                        "value": "belt_guard"
                  },
                  {
                        "label": "Electrical control panel case",
                        "value": "panel_case_error"
                  }
            ],
            "answer": [
                  "case_cover",
                  "rotodiff_cover",
                  "belt_guard"
            ],
            "explanation": "Proximity switches are installed on the case cover, rotodiff cover, and belt guard to automatically shut down the motors if these guards are opened during operation. (See Safety Guidelines)"
      },
      {
            "id": "hw7_q7",
            "number": 7,
            "type": "single",
            "question": "What is the bowl diameter of a DE-7200 centrifuge?",
            "options": [
                  {
                        "label": "14 inch",
                        "value": "14_in"
                  },
                  {
                        "label": "17 inch",
                        "value": "17_in"
                  },
                  {
                        "label": "18.5 inch",
                        "value": "18_5_in"
                  },
                  {
                        "label": "20 inch",
                        "value": "20_in"
                  },
                  {
                        "label": "21.5 inch",
                        "value": "21_5_in"
                  }
            ],
            "answer": "21_5_in",
            "explanation": "The high-capacity DE-7200 decanting centrifuge has a bowl diameter of 21.5 inches. (See Page 147)"
      },
      {
            "id": "hw7_q8",
            "number": 8,
            "type": "single",
            "question": "What are the causes of automatic safety shutdown on the DE-7200 centrifuge?",
            "options": [
                  {
                        "label": "Excessive Vibration",
                        "value": "vibration"
                  },
                  {
                        "label": "Main Bearing Temperatures",
                        "value": "bearing_temp"
                  },
                  {
                        "label": "Excessive Bowl Speed",
                        "value": "bowl_speed"
                  },
                  {
                        "label": "Conveyor Clutch Trip",
                        "value": "clutch_trip"
                  },
                  {
                        "label": "All of the above",
                        "value": "all_above"
                  }
            ],
            "answer": "all_above",
            "explanation": "The DE-7200 control panel monitors vibration levels, main bearing temperatures, bowl/conveyor speeds, and clutch trips to trigger safety shutdowns. (See Page 147)"
      },
      {
            "id": "hw7_q9",
            "number": 9,
            "type": "single",
            "question": "Centrifuge performance is defined by which of the following variables?",
            "options": [
                  {
                        "label": "Processing capacity and dryness of solids discarded",
                        "value": "opt_1"
                  },
                  {
                        "label": "Density reduction, size and quantity of solids removed",
                        "value": "opt_2"
                  },
                  {
                        "label": "All of the above",
                        "value": "all_above"
                  }
            ],
            "answer": "all_above",
            "explanation": "Centrifuge performance is defined by its fluid processing capacity, the moisture content of discarded solids, the mud density reduction, and the total quantity and size cut of solids removed. (See Page 108)"
      },
      {
            "id": "hw7_q10",
            "number": 10,
            "type": "single",
            "question": "The performance factors of a centrifuge with regards to the feed are:",
            "options": [
                  {
                        "label": "Quantity and size distribution of total solids",
                        "value": "opt_1"
                  },
                  {
                        "label": "Properties of individual solids, feed rate, and drilling fluid properties",
                        "value": "opt_2"
                  },
                  {
                        "label": "All of the above",
                        "value": "all_above"
                  }
            ],
            "answer": "all_above",
            "explanation": "The characteristics of the feed slurry\u2014specifically the solids loading, particle size distribution, fluid viscosity/density, and flow feed rate\u2014dictate separation performance. (See Page 108)"
      },
      {
            "id": "hw7_q11",
            "number": 11,
            "type": "single",
            "question": "The performance factors of a centrifuge with regards to the centrifuge itself are:",
            "options": [
                  {
                        "label": "Bowl geometry, centrifugal forces, retention time in the pond, dewatering time on the beach, and torque",
                        "value": "correct_factors"
                  },
                  {
                        "label": "Bowl motor size, conveyor motor size, feed tube length, and type of feed pump",
                        "value": "motors_error"
                  },
                  {
                        "label": "Feet of head from pump, pressure at feed tube, type of conveyor",
                        "value": "pump_error"
                  },
                  {
                        "label": "Height of the centrifuge stand and length of hose from the feed pump",
                        "value": "stand_error"
                  }
            ],
            "answer": "correct_factors",
            "explanation": "Internal design and operational settings\u2014specifically the G-force (speed), pond depth (retention time), beach angle/length (dewatering), and conveyor torque\u2014define mechanical separation efficiency. (See Page 108)"
      },
      {
            "id": "hw7_q12",
            "number": 12,
            "type": "single",
            "question": "Adjusting the centrifuge bowl speed will primarily alter which operational parameter?",
            "options": [
                  {
                        "label": "G-force and particle settling velocity",
                        "value": "g_force"
                  },
                  {
                        "label": "Retention time and dewatering time",
                        "value": "retention"
                  },
                  {
                        "label": "Particle settling velocity via mud viscosity changes",
                        "value": "viscosity"
                  },
                  {
                        "label": "Dewatering time and conveyor torque",
                        "value": "torque"
                  }
            ],
            "answer": "g_force",
            "explanation": "Bowl speed (RPM) directly dictates the centrifugal G-force exerted on the fluid, which directly accelerates particle settling velocity. (See Page 108)"
      },
      {
            "id": "hw7_q13",
            "number": 13,
            "type": "single",
            "question": "Adjusting the centrifuge pond depth will primarily alter which operational parameters?",
            "options": [
                  {
                        "label": "G-force and particle settling velocity",
                        "value": "g_force"
                  },
                  {
                        "label": "Retention time and dewatering time",
                        "value": "retention_dewatering"
                  },
                  {
                        "label": "Particle settling velocity via mud viscosity changes",
                        "value": "viscosity"
                  },
                  {
                        "label": "Dewatering time and conveyor torque",
                        "value": "torque"
                  }
            ],
            "answer": "retention_dewatering",
            "explanation": "Pond depth (weir setting) controls the liquid volume inside the bowl. Raising the pond increases liquid retention time but decreases the dry beach area (less dewatering time). (See Page 108)"
      },
      {
            "id": "hw7_q14",
            "number": 14,
            "type": "single",
            "question": "Adjusting the centrifuge feed dilution will primarily alter which operational parameter?",
            "options": [
                  {
                        "label": "G-force and particle settling velocity",
                        "value": "g_force"
                  },
                  {
                        "label": "Retention time and dewatering time",
                        "value": "retention"
                  },
                  {
                        "label": "Particle settling velocity (by reducing fluid viscosity)",
                        "value": "settling_vel"
                  },
                  {
                        "label": "Dewatering time and conveyor torque",
                        "value": "torque"
                  }
            ],
            "answer": "settling_vel",
            "explanation": "Diluting the feed mud with water or base oil lowers the plastic viscosity, which directly increases the particle settling velocity according to Stokes' Law. (See Page 108)"
      },
      {
            "id": "hw7_q15",
            "number": 15,
            "type": "single",
            "question": "Adjusting the centrifuge conveyor differential speed will primarily alter which operational parameters?",
            "options": [
                  {
                        "label": "G-force and particle settling velocity",
                        "value": "g_force"
                  },
                  {
                        "label": "Retention time and active processing %",
                        "value": "retention"
                  },
                  {
                        "label": "Particle settling velocity via mud viscosity changes",
                        "value": "viscosity"
                  },
                  {
                        "label": "Dewatering time on the beach and conveyor torque",
                        "value": "dewatering_torque"
                  }
            ],
            "answer": "dewatering_torque",
            "explanation": "Conveyor speed relative to the bowl (differential) determines how fast solids are pushed up the beach, affecting solids dewatering time and mechanical torque. (See Page 108)"
      },
      {
            "id": "hw7_q16",
            "number": 16,
            "type": "single",
            "question": "Adjusting the centrifuge feed rate will primarily alter which operational parameters?",
            "options": [
                  {
                        "label": "G-force and particle settling velocity",
                        "value": "g_force"
                  },
                  {
                        "label": "Retention time and active processing capacity %",
                        "value": "retention_capacity"
                  },
                  {
                        "label": "Particle settling velocity via mud viscosity changes",
                        "value": "viscosity"
                  },
                  {
                        "label": "Dewatering time and conveyor torque",
                        "value": "torque"
                  }
            ],
            "answer": "retention_capacity",
            "explanation": "Increasing the feed rate (GPM) reduces the fluid retention time inside the bowl, potentially leading to a coarser cut point because particles have less time to settle. (See Page 108)"
      },
      {
            "id": "hw7_q17",
            "number": 17,
            "type": "single",
            "question": "When working with a centrifuge, if the fluid density increases, the settling velocity increases and the cut point is coarser.",
            "options": [
                  {
                        "label": "True",
                        "value": "true"
                  },
                  {
                        "label": "False",
                        "value": "false"
                  }
            ],
            "answer": "false",
            "explanation": "According to Stokes' Law, settling velocity is proportional to the density difference between the particle and the fluid (dp - df). If fluid density increases, the difference decreases, settling velocity decreases, and the cut point is coarser. (See Page 78)"
      },
      {
            "id": "hw7_q18",
            "number": 18,
            "type": "single",
            "question": "What is the G-force of a centrifuge with a 14-inch bowl operating at 2000 RPM? (Round to 2 decimal places)",
            "options": [
                  {
                        "label": "500.00 G's",
                        "value": "500"
                  },
                  {
                        "label": "795.30 G's",
                        "value": "795.30"
                  },
                  {
                        "label": "912.45 G's",
                        "value": "912.45"
                  },
                  {
                        "label": "1200.00 G's",
                        "value": "1200"
                  }
            ],
            "answer": "795.30",
            "explanation": "Using the formula: G-force = (Bowl Diameter * RPM^2) / 70414. Thus: (14 * 2000^2) / 70414 = 56,000,000 / 70414 = 795.30 G's. (See Centrifuge G-force calculations)"
      },
      {
            "id": "hw7_q19",
            "number": 19,
            "type": "single",
            "question": "Based on the previous result (795.30 G's), calculate at what speed (RPM) must a 21.5-inch bowl centrifuge operate to achieve the same G-force. (Round to 2 decimal places)",
            "options": [
                  {
                        "label": "1250.50 RPM",
                        "value": "1250.5"
                  },
                  {
                        "label": "1450.25 RPM",
                        "value": "1450.25"
                  },
                  {
                        "label": "1613.90 RPM",
                        "value": "1613.90"
                  },
                  {
                        "label": "1800.00 RPM",
                        "value": "1800"
                  }
            ],
            "answer": "1613.90",
            "explanation": "Rearranging the formula: RPM = sqrt((G-force * 70414) / Diameter). Thus: sqrt((795.30 * 70414) / 21.5) = sqrt(56,000,254.2 / 21.5) = sqrt(2,604,663) = 1613.90 RPM. (See Centrifuge G-force calculations)"
      },
      {
            "id": "hw7_q20",
            "number": 20,
            "type": "multiple",
            "question": "The three primary applications for centrifuges utilized by BSS during drilling operations are: (Select 3 options)",
            "options": [
                  {
                        "label": "Max solids removal from un-weighted mud",
                        "value": "max_solids_unweighted"
                  },
                  {
                        "label": "Control rheology of weighted mud (barite recovery)",
                        "value": "rheology_weighted"
                  },
                  {
                        "label": "Chemically enhanced centrifugation (dewatering)",
                        "value": "chemically_enhanced"
                  },
                  {
                        "label": "Weight up the active drilling fluid",
                        "value": "weight_up_error"
                  },
                  {
                        "label": "Secondary drying of cuttings",
                        "value": "dryer_error"
                  },
                  {
                        "label": "Separate barite from drilled solids downhole",
                        "value": "downhole_error"
                  }
            ],
            "answer": [
                  "max_solids_unweighted",
                  "rheology_weighted",
                  "chemically_enhanced"
            ],
            "explanation": "Centrifuges are run on un-weighted mud at high speeds for maximum solids removal, on weighted mud at low speeds to recover barite (HGS), or with coagulants/flocculants for dewatering. (See Page 130)"
      },
      {
            "id": "hw7_q21",
            "number": 21,
            "type": "single",
            "question": "To achieve a finer cut point and a dryer solids discharge when operating a centrifuge on un-weighted mud, what changes should be made to the following settings?",
            "options": [
                  {
                        "label": "Increase bowl speed, decrease conveyor speed, decrease pond depth, decrease feed rate",
                        "value": "correct_adjust"
                  },
                  {
                        "label": "Decrease bowl speed, increase conveyor speed, increase pond depth, increase feed rate",
                        "value": "wrong_1"
                  },
                  {
                        "label": "Increase bowl speed, increase conveyor speed, increase pond depth, decrease feed rate",
                        "value": "wrong_2"
                  },
                  {
                        "label": "Decrease bowl speed, decrease conveyor speed, decrease pond depth, increase feed rate",
                        "value": "wrong_3"
                  }
            ],
            "answer": "correct_adjust",
            "explanation": "Higher bowl speed increases G-force (finer solids settle), lower conveyor speed increases dewatering time on the beach, lower pond depth drys solids by extending beach length, and lower feed rate increases fluid retention time. (See Centrifuge Optimization tables)"
      },
      {
            "id": "hw7_q22",
            "number": 22,
            "type": "single",
            "question": "When using a centrifuge, if the desired effect is to remove finer solids, the bowl RPM should be increased and the pond depth should increase as well.",
            "options": [
                  {
                        "label": "True",
                        "value": "true"
                  },
                  {
                        "label": "False",
                        "value": "false"
                  }
            ],
            "answer": "true",
            "explanation": "Increasing bowl RPM increases G-force, and increasing pond depth (raising weirs) increases fluid pool volume, maximizing fluid retention time so finer solids have time to settle out. (See Centrifuge adjustments)"
      },
      {
            "id": "hw7_q23",
            "number": 23,
            "type": "multiple",
            "question": "In two-stage centrifuging on weighted mud for rheology control, select all statements below that best describe the reasons for the specified bowl and conveyor settings on the first centrifuge (CF #1):",
            "options": [
                  {
                        "label": "High conveyor speed is utilized to ensure discharge (reclaimed barite slurry) remains wet and flows easily",
                        "value": "high_conveyor_wet"
                  },
                  {
                        "label": "Low Conveyor speed is utilized to produce dry solids returned to the active system",
                        "value": "low_conveyor_error"
                  },
                  {
                        "label": "Low bowl speed is utilized to minimize settling and removal of low-gravity solids (LGS) which should pass to the second centrifuge",
                        "value": "low_bowl_lgs"
                  },
                  {
                        "label": "High bowl speed is utilized to remove all solids to be returned to the active system",
                        "value": "high_bowl_error"
                  }
            ],
            "answer": [
                  "high_conveyor_wet",
                  "low_bowl_lgs"
            ],
            "explanation": "CF #1 runs at low speed (~800 Gs) to settle heavy barite (HGS) while letting LGS pass with the effluent. High conveyor speed ensures the recovered barite stays wet/fluid so it can mix back into the active mud system. (See Page 130)"
      },
      {
            "id": "hw7_q24",
            "number": 24,
            "type": "single",
            "question": "In two-stage centrifuging for barite recovery (CF #1), what are the negative consequences of running a pond depth that is too high or too low?",
            "options": [
                  {
                        "label": "Too high pond depth increases LGS settling (returning LGS to active system); too low pond depth drys the HGS discharge too much, causing it to plug returning chutes",
                        "value": "pond_issues"
                  },
                  {
                        "label": "Too high pond depth drys the discharge; too low pond depth causes LGS to return to the active system",
                        "value": "wrong_1"
                  },
                  {
                        "label": "Pond depth settings do not impact solids recovery in weighted mud systems",
                        "value": "wrong_2"
                  }
            ],
            "answer": "pond_issues",
            "explanation": "A high pond increases retention time, causing unwanted LGS to settle out and return to the mud. A low pond increases dewatering time, making the recovered barite too dry to mix and causing chute plugging. (See Page 130)"
      },
      {
            "id": "hw7_q25",
            "number": 25,
            "type": "multiple",
            "question": "Provide two reasons why a \u201cbig bowl\u201d centrifuge (like the DE-7200) would be the most appropriate choice to improve the removal of fine LGS: (Select 2 options)",
            "options": [
                  {
                        "label": "Increased retention time",
                        "value": "increased_retention"
                  },
                  {
                        "label": "Lower volume of fines generated",
                        "value": "fines_error"
                  },
                  {
                        "label": "Increased dewatering time on the beach",
                        "value": "dewatering_error"
                  },
                  {
                        "label": "Increased G-force potential",
                        "value": "increased_g_force"
                  },
                  {
                        "label": "None of the above",
                        "value": "none"
                  }
            ],
            "answer": [
                  "increased_retention",
                  "increased_g_force"
            ],
            "explanation": "A larger bowl diameter increases the internal volume (maximizing retention time) and has a higher mechanical G-force potential due to its larger radius, maximizing separation. (See Page 130)"
      },
      {
            "id": "hw7_q26",
            "number": 26,
            "type": "multiple",
            "question": "List the three different types of centrifuges offered by BSS in regards to drive type: (Select 3 options)",
            "options": [
                  {
                        "label": "Full Hydraulic Drive (FHD)",
                        "value": "fhd"
                  },
                  {
                        "label": "Gear Box Drive (GBD)",
                        "value": "gbd"
                  },
                  {
                        "label": "Fully automated Drive (FAD)",
                        "value": "fad_error"
                  },
                  {
                        "label": "Variable Frequency Drive (VFD)",
                        "value": "vfd"
                  },
                  {
                        "label": "Hybrid box drive",
                        "value": "hybrid_error"
                  }
            ],
            "answer": [
                  "fhd",
                  "gbd",
                  "vfd"
            ],
            "explanation": "BSS offers centrifuges classified by their drive mechanics: GBD (constant differential speed), FHD (hydraulic backdrive adjusting to load), and VFD (fully electric variable frequency speed control). (See Page 130)"
      },
      {
            "id": "hw7_q27",
            "number": 27,
            "type": "single",
            "question": "The Dewatering process achieved with BaraH2O is often referred to as:",
            "options": [
                  {
                        "label": "Chemically enhanced waste reduction",
                        "value": "waste_red"
                  },
                  {
                        "label": "Dissolved Air flotation",
                        "value": "daf"
                  },
                  {
                        "label": "Liquid clarification",
                        "value": "clarification"
                  },
                  {
                        "label": "Chemically enhanced solid removal",
                        "value": "chem_enhanced_solids"
                  }
            ],
            "answer": "chem_enhanced_solids",
            "explanation": "BaraH2O dewatering uses chemical polymers to flocculate ultra-fine solids, which is officially termed Chemically Enhanced Solid Removal. (See Dewatering manual)"
      },
      {
            "id": "hw7_q28",
            "number": 28,
            "type": "single",
            "question": "When dewatering mud, what chemicals are used to neutralize the negative charge of the fine suspended particles, allowing them to form mini aggregates?",
            "options": [
                  {
                        "label": "Flocculants",
                        "value": "flocculants"
                  },
                  {
                        "label": "Coagulants",
                        "value": "coagulants"
                  },
                  {
                        "label": "Thinners",
                        "value": "thinners"
                  },
                  {
                        "label": "Surfactants",
                        "value": "surfactants"
                  }
            ],
            "answer": "coagulants",
            "explanation": "Coagulants are highly charged, low molecular weight salts or polymers that neutralize particle surface charges, allowing van der Waals forces to aggregate them. (See Page 78)"
      },
      {
            "id": "hw7_q29",
            "number": 29,
            "type": "single",
            "question": "When dewatering mud, what chemicals are used to envelope the aggregated solids to form larger solid clusters called flocs?",
            "options": [
                  {
                        "label": "Flocculants",
                        "value": "flocculants"
                  },
                  {
                        "label": "Coagulants",
                        "value": "coagulants"
                  },
                  {
                        "label": "Thinners",
                        "value": "thinners"
                  },
                  {
                        "label": "Surfactants",
                        "value": "surfactants"
                  }
            ],
            "answer": "flocculants",
            "explanation": "Flocculants are high molecular weight, long-chain polymer structures that bridge together coagulated particles into massive, easily removable flocs. (See Page 78)"
      },
      {
            "id": "hw7_q30",
            "number": 30,
            "type": "single",
            "question": "Once the mud has been chemically treated in the Enviro-Floc unit, it is pumped to what device for mechanical removal of the flocculated solids?",
            "options": [
                  {
                        "label": "Shale Shaker",
                        "value": "shaker"
                  },
                  {
                        "label": "Hydrocyclone",
                        "value": "hydrocyclone"
                  },
                  {
                        "label": "Decanting Centrifuge",
                        "value": "centrifuge"
                  },
                  {
                        "label": "Vertical Dryer",
                        "value": "dryer"
                  }
            ],
            "answer": "centrifuge",
            "explanation": "The chemically treated slurry with suspended flocs is fed to a decanting centrifuge which mechanically extracts the water-free flocs. (See Enviro-Floc system)"
      },
      {
            "id": "hw7_q31",
            "number": 31,
            "type": "multiple",
            "question": "Select the types of cuttings drying technologies most commonly utilized by BSS: (Select 2 options)",
            "options": [
                  {
                        "label": "Vertical Cuttings Dryer",
                        "value": "vcd"
                  },
                  {
                        "label": "Secondary Drying Shaker",
                        "value": "drying_shaker"
                  },
                  {
                        "label": "Horizontal Cuttings Dryer",
                        "value": "hcd_error"
                  },
                  {
                        "label": "Rotary Vacuum Dryer",
                        "value": "vacuum_error"
                  },
                  {
                        "label": "Thermal Phase Separator",
                        "value": "thermal_error"
                  },
                  {
                        "label": "High Velocity Oil Retainer",
                        "value": "retainer_error"
                  }
            ],
            "answer": [
                  "vcd",
                  "drying_shaker"
            ],
            "explanation": "BSS uses high-speed Vertical Cuttings Dryers (VCD) and high-G drying shakers (Secondary Shakers) to reclaim fluid from wet cuttings discharge. (See Page 150)"
      },
      {
            "id": "hw7_q32",
            "number": 32,
            "type": "multiple",
            "question": "Choose the correct method(s) of solid / fluid separation utilized by a Vertical Cuttings Dryer: (Select 2 options)",
            "options": [
                  {
                        "label": "Evaporation",
                        "value": "evap_error"
                  },
                  {
                        "label": "Centrifugal Force",
                        "value": "centrifugal_force"
                  },
                  {
                        "label": "Vacuum reduction",
                        "value": "vacuum_error"
                  },
                  {
                        "label": "Filtration (wedged wire screen)",
                        "value": "filtration_screen"
                  },
                  {
                        "label": "Gravitational settling",
                        "value": "gravity_error"
                  }
            ],
            "answer": [
                  "centrifugal_force",
                  "filtration_screen"
            ],
            "explanation": "VCDs separate oil/water from cuttings by applying high centrifugal force (accelerating solids) through a wedged wire screen (filtering out liquid). (See Page 150)"
      },
      {
            "id": "hw7_q33",
            "number": 33,
            "type": "multiple",
            "question": "What models of Vertical cuttings Dryers does BSS offer? (Select 2 options)",
            "options": [
                  {
                        "label": "V-71",
                        "value": "v_71"
                  },
                  {
                        "label": "V-77",
                        "value": "v_77_error"
                  },
                  {
                        "label": "V-133",
                        "value": "v_133"
                  },
                  {
                        "label": "V-311",
                        "value": "v_311_error"
                  }
            ],
            "answer": [
                  "v_71",
                  "v_133"
            ],
            "explanation": "Baroid Surface Solutions offers the V-71 (smaller capacity) and V-133 (high-capacity) vertical cuttings dryers. (See Page 150)"
      },
      {
            "id": "hw7_q34",
            "number": 34,
            "type": "single",
            "question": "What is the typical range of G-force exerted by a vertical cuttings dryer (VCD)?",
            "options": [
                  {
                        "label": "200 G's",
                        "value": "200"
                  },
                  {
                        "label": "300-500 G's",
                        "value": "300_500"
                  },
                  {
                        "label": "500-700 G's",
                        "value": "500_700"
                  },
                  {
                        "label": "1200+ G's",
                        "value": "1200"
                  }
            ],
            "answer": "300_500",
            "explanation": "Standard VCD rotating assemblies (screens/flights) run at speeds generating between 300 and 500 G-forces. (See Page 150)"
      },
      {
            "id": "hw7_q35",
            "number": 35,
            "type": "multiple",
            "question": "Which pieces of equipment, besides the vertical dryer itself and its control panel, are needed to complete vertical dryer operations on a rig? (Select 5 options)",
            "options": [
                  {
                        "label": "Hydrocyclone",
                        "value": "hydrocyclone_error"
                  },
                  {
                        "label": "Drying Shaker",
                        "value": "drying_shaker_error"
                  },
                  {
                        "label": "Recovery Tank",
                        "value": "recovery_tank"
                  },
                  {
                        "label": "Centrifuge",
                        "value": "centrifuge"
                  },
                  {
                        "label": "Pump (centrifuge feed)",
                        "value": "pump"
                  },
                  {
                        "label": "Discharge System (augurs/flumes)",
                        "value": "discharge_system"
                  },
                  {
                        "label": "Dewatering Unit",
                        "value": "dewatering_error"
                  },
                  {
                        "label": "Delivery System (conveyors/vacuum)",
                        "value": "delivery_system"
                  }
            ],
            "answer": [
                  "recovery_tank",
                  "centrifuge",
                  "pump",
                  "discharge_system",
                  "delivery_system"
            ],
            "explanation": "A complete VCD loop requires a delivery system (to load cuttings), a recovery tank (for liquid), a feed pump, a centrifuge (to clean recovered liquid), and a discharge system. (See Page 151)"
      },
      {
            "id": "hw7_q36",
            "number": 36,
            "type": "multiple",
            "question": "What are the two main components of the vertical dryer's rotating assembly?",
            "options": [
                  {
                        "label": "Rotating slotted drum",
                        "value": "slotted_drum_error"
                  },
                  {
                        "label": "Rotating wedged wire basket",
                        "value": "wire_basket"
                  },
                  {
                        "label": "Rotating scroll with vertical flights",
                        "value": "vertical_flights"
                  },
                  {
                        "label": "Rotating scroll with horizontal flights",
                        "value": "horizontal_flights_error"
                  }
            ],
            "answer": [
                  "wire_basket",
                  "vertical_flights"
            ],
            "explanation": "The rotating assembly consists of a wedged wire screen basket and a flighted scroll turning at slightly different speeds (differential) to convey cuttings downward. (See Page 150)"
      },
      {
            "id": "hw7_q37",
            "number": 37,
            "type": "single",
            "question": "Is the vertical cuttings dryer considered to be a \u201cstand alone\u201d solids control device?",
            "options": [
                  {
                        "label": "Yes",
                        "value": "yes_error"
                  },
                  {
                        "label": "No, it requires a centrifuge to treat the recovered liquid phase",
                        "value": "no_requires_centrifuge"
                  }
            ],
            "answer": "no_requires_centrifuge",
            "explanation": "The dryer is not stand-alone. Fines pass through the screen with the liquid. A centrifuge must clean the collection tank liquid before returning it to the mud system, or fines will build up. (See Page 151)"
      },
      {
            "id": "hw7_q38",
            "number": 38,
            "type": "multiple",
            "question": "Which statements are NOT true about vertical cuttings dryer operations? (Select all that apply)",
            "options": [
                  {
                        "label": "The vertical dryer is considered a standalone solids control device",
                        "value": "not_standalone"
                  },
                  {
                        "label": "Fluid recovered in the collection tank requires no further processing",
                        "value": "no_processing_needed"
                  },
                  {
                        "label": "It reduces haul-off and disposal costs",
                        "value": "reduces_costs_error"
                  },
                  {
                        "label": "It involves dangerous high-speed elements of operation",
                        "value": "dangerous_error"
                  },
                  {
                        "label": "It meets EPA requirements for ROC discharge limits in certain areas",
                        "value": "meets_epa_error"
                  },
                  {
                        "label": "It requires very little operator attention and maintenance",
                        "value": "low_maintenance"
                  }
            ],
            "answer": [
                  "not_standalone",
                  "no_processing_needed",
                  "low_maintenance"
            ],
            "explanation": "Vertical dryers require a centrifuge (not standalone), require constant supervision/cleaning (high maintenance), and fluid must be centrifuge-treated. (See VCD operating guidelines)"
      },
      {
            "id": "hw7_q39",
            "number": 39,
            "type": "single",
            "question": "What is the typical ROC (retention on cuttings) percentage achieved at the discharge of a vertical cuttings dryer?",
            "options": [
                  {
                        "label": "< 2%",
                        "value": "less_2"
                  },
                  {
                        "label": "< 3%",
                        "value": "less_3"
                  },
                  {
                        "label": "< 5%",
                        "value": "less_5"
                  },
                  {
                        "label": "None of the above",
                        "value": "none"
                  }
            ],
            "answer": "less_5",
            "explanation": "VCDs typically dry oil-base cuttings down to less than 5% oil on cuttings (ROC), satisfying standard environmental discharge or recycling limits. (See VCD specifications)"
      },
      {
            "id": "hw7_q40",
            "number": 40,
            "type": "single",
            "question": "What is the optimum flight-to-screen clearance for a vertical cuttings dryer?",
            "options": [
                  {
                        "label": "0.010 inches",
                        "value": "opt_1"
                  },
                  {
                        "label": "0.020 inches",
                        "value": "opt_2"
                  },
                  {
                        "label": "0.050 inches",
                        "value": "opt_3"
                  },
                  {
                        "label": "0.500 inches",
                        "value": "opt_4"
                  }
            ],
            "answer": "opt_2",
            "explanation": "Maintaining flight-to-screen clearance at 0.020 inches is critical. If too large, a cake build-up blinds the screen; if too tight, it will scrape and damage the screen. (See Dryer maintenance)"
      },
      {
            "id": "hw7_q41",
            "number": 41,
            "type": "calculation",
            "question": "How much new volume (dilution) in barrels is required to maintain 6% drill solids for 3500' of 13 7/8\" hole with 80% solids removal efficiency? (Assume gauge hole, round to 2 decimal places)",
            "inputs": {
                  "Hole Diameter": "13 7/8 in",
                  "Interval Length": "3500 ft",
                  "Initial/Max Solids Limit": "6%",
                  "Solids Removal Efficiency": "80%"
            },
            "answer": {
                  "dilution_bbl": 2050.92
            },
            "explanation": "Step 1: TDS generated = (13.875^2 / 1029.4) * 3500 * (1 - 0.80) = 192.51 * 3500 * 0.20 = 130.55 bbl of solids remaining. Step 2: Total Mud Volume = 130.55 / 0.06 = 2175.83 bbl. Step 3: Dilution volume = 2175.83 - 130.55 = 2050.92 bbl. (See Dilution formulas)"
      },
      {
            "id": "hw7_q42",
            "number": 42,
            "type": "calculation",
            "question": "How much new volume (dilution) in barrels is required to maintain 6% drill solids for 3500' of 13 7/8\" hole with 92% solids removal efficiency? (Assume gauge hole, round to 2 decimal places)",
            "inputs": {
                  "Hole Diameter": "13 7/8 in",
                  "Interval Length": "3500 ft",
                  "Initial/Max Solids Limit": "6%",
                  "Solids Removal Efficiency": "92%"
            },
            "answer": {
                  "dilution_bbl": 820.31
            },
            "explanation": "TDS remaining = (13.875^2 / 1029.4) * 3500 * (1 - 0.92) = 192.51 * 3500 * 0.08 = 52.22 bbl of solids remaining. Total Mud Volume = 52.22 / 0.06 = 870.33 bbl. Dilution required = 870.33 - 52.22 = 820.31 bbl. (See Dilution formulas)"
      },
      {
            "id": "hw7_q43",
            "number": 43,
            "type": "calculation",
            "question": "If each barrel of drilling fluid saved costs $150/barrel, what is the cost savings in US$ for Question 41 vs. Question 42? (Type whole number without commas or dollar signs)",
            "inputs": {
                  "Cost per Barrel Saved": "$150",
                  "Saved Volume": "1230.61 bbl"
            },
            "answer": {
                  "savings_usd": 184592
            },
            "explanation": "Volume Saved = 2050.92 - 820.31 = 1230.61 bbl. Cost Savings = 1230.61 bbl * $150/bbl = $184,591.50, which rounds to the whole number 184592. (See Dilution economics)"
      },
      {
            "id": "hw7_q44",
            "number": 44,
            "type": "calculation",
            "question": "Given 75% solids removal efficiency with 8% drill solids limit for 1500' of 12 1/4\" hole. Calculate the required dilution volume in barrels. (Assume gauge hole, round to 2 decimal places)",
            "inputs": {
                  "Hole Diameter": "12 1/4 in",
                  "Interval Length": "1500 ft",
                  "Initial/Max Solids Limit": "8%",
                  "Solids Removal Efficiency": "75%"
            },
            "answer": {
                  "dilution_bbl": 628.71
            },
            "explanation": "TDS generated = (12.25^2 / 1029.4) * 1500 * (1 - 0.75) = 145.78 * 1500 * 0.25 = 54.67 bbl of solids remaining. Total Mud Volume = 54.67 / 0.08 = 683.38 bbl. Dilution required = 683.38 - 54.67 = 628.71 bbl. (See Dilution formulas)"
      },
      {
            "id": "hw7_q45",
            "number": 45,
            "type": "calculation",
            "question": "Given 90% solids removal efficiency with 8% drill solids limit for 1500' of 12 1/4\" hole. Calculate the required dilution volume in barrels. (Assume gauge hole, round to 2 decimal places)",
            "inputs": {
                  "Hole Diameter": "12 1/4 in",
                  "Interval Length": "1500 ft",
                  "Initial/Max Solids Limit": "8%",
                  "Solids Removal Efficiency": "90%"
            },
            "answer": {
                  "dilution_bbl": 251.51
            },
            "explanation": "TDS remaining = (12.25^2 / 1029.4) * 1500 * (1 - 0.90) = 145.78 * 1500 * 0.10 = 21.87 bbl of solids remaining. Total Mud Volume = 21.87 / 0.08 = 273.38 bbl. Dilution required = 273.38 - 21.87 = 251.51 bbl. (See Dilution formulas)"
      },
      {
            "id": "hw7_q46",
            "number": 46,
            "type": "calculation",
            "question": "If each barrel of drilling fluid saved costs $180/barrel, what is the cost savings in US$ for Question 44 vs. Question 45? (Type whole number without commas or dollar signs)",
            "inputs": {
                  "Cost per Barrel Saved": "$180",
                  "Saved Volume": "377.20 bbl"
            },
            "answer": {
                  "savings_usd": 67896
            },
            "explanation": "Volume Saved = 628.71 - 251.51 = 377.20 bbl. Cost Savings = 377.20 bbl * $180/bbl = $67,896. (See Dilution economics)"
      }
]
  }
});
