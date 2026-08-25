QUIZ_DATA.homework_16 = {
    title: "Homework 16: OWR & Salinity Adjustments (Theory)",
    description: "Practice questions about OWR changes, salinity adjustments, and density effects based on the Baroid Core guide.",
    questions: [
      {
        id: "hw16_q1",
        number: "1 of 3",
        type: "single",
        question: "In order to Change the NAP/Water ratio from 70/30 to 85/15, we need to add water.",
        options: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        answer: "false",
        explanation: "To increase the oil fraction from 70% to 85% (and decrease water from 30% to 15%), we must add base oil (NAP), not water. Adding water would decrease the NAP/water ratio (e.g. towards 60/40)."
      },
      {
        id: "hw16_q2",
        number: "2 of 3",
        type: "single",
        question: "When you Change the NAP/Water ratio, Will the fluid density increase?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ],
        answer: "no",
        explanation: "Base oil (SG ≈ 0.84, density ≈ 7 ppg) is significantly lighter than brine (SG 1.0 to 1.25, density ≈ 8.33 to 10.4 ppg). Increasing the NAP/water ratio (replacing heavy brine with lighter base oil) will decrease the overall fluid density rather than increase it."
      },
      {
        id: "hw16_q3",
        number: "3 of 3",
        type: "multiple",
        question: "In order to increase the WPS of an IEF fluid, which value(s) do we need know? (select all applicable options)",
        options: [
          { value: "desired_salt", label: "Desired concentration of salt" },
          { value: "current_owr", label: "Current NAP/Water ratio" },
          { value: "current_wps", label: "Current water phase salinity" },
          { value: "base_fluid_density", label: "Density of the base fluid" }
        ],
        answer: ["desired_salt", "current_wps"],
        explanation: "To calculate the amount of salt needed to adjust salinity, we must know the current salinity and the target salinity (desired concentration). Base fluid density does not affect the calculation."
      }
    ]
  };
