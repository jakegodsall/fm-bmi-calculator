// BMI Form Element
const form = document.forms[0] as HTMLFormElement;
// Radio buttons
const radioButtons = document.querySelectorAll<HTMLInputElement>(
  'input[name="measurement"]'
);

// Metric fields
const heightCmInput = document.getElementById("height-cm") as HTMLInputElement;
const weightKgInput = document.getElementById("weight-kg") as HTMLInputElement;

// Imperial fields
const heightFeetInput = document.getElementById(
  "height-ft"
) as HTMLInputElement;
const heightInchesInput = document.getElementById(
  "height-in"
) as HTMLInputElement;
const weightStoneInput = document.getElementById(
  "weight-st"
) as HTMLInputElement;
const weightLbsInput = document.getElementById(
  "weight-lbs"
) as HTMLInputElement;

let selectedRadioButton = document.getElementById(
  "metric-radio"
) as HTMLInputElement;

// Add functionality to radio buttons
radioButtons.forEach((radioButton) => {
  // Add event listener to radio button
  radioButton.addEventListener("change", (event: Event) => {
    const target = event.target as HTMLInputElement;

    // Add/remove class for switching form units inputs
    const formInputsContainer = document.getElementById(
      "bmiForm__inputs"
    ) as HTMLElement;

    if (target.id === "imperial-radio") {
      // Show imperial section
      formInputsContainer.classList.add("imperial");

      // Change the selected radio button
      selectedRadioButton = document.getElementById(
        "imperial-radio"
      ) as HTMLInputElement;

      // Empty the metric values (use setTimeout to make removal after transition in UI)
      setTimeout(() => {
        heightCmInput.value = "";
        weightKgInput.value = "";
      }, 1000);
    } else if (target.id === "metric-radio") {
      // Show the metric section
      formInputsContainer.classList.remove("imperial");

      // Change the selected radio button
      selectedRadioButton = document.getElementById(
        "metric-radio"
      ) as HTMLInputElement;

      // Empty the imperial values (use setTimeout to make removal after transition in UI)
      setTimeout(() => {
        heightFeetInput.value = "";
        heightInchesInput.value = "";
        weightStoneInput.value = "";
        weightLbsInput.value = "";
      }, 1000);
    }
  });
});

class BMICalculator {
  getPoundsFromStoneAndPounds(stone: number, pounds: number): number {
    return stone * 14 + pounds;
  }

  getInchesFromFeetAndInches(feet: number, inches: number): number {
    return feet * 12 + inches;
  }

  calculateBmi(weight: number, height: number, metric: boolean = true): number {
    const calc = weight / height ** 2;
    if (metric) {
      return calc;
    } else {
      return 703 * calc;
    }
  }

  printBMI(): number {
    let height = 0;
    let weight = 0;
    let bmi = 0;

    if (selectedRadioButton.id === "metric-radio") {
      // Input values
      const heightCm = parseFloat(heightCmInput.value);
      const weightKg = parseFloat(weightKgInput.value);

      height = heightCm / 100;
      weight = weightKg;
      bmi = this.calculateBmi(weight, height, true);
    } else if (selectedRadioButton.id === "imperial-radio") {
      // Input values
      const heightFeet = parseFloat(heightFeetInput.value);
      const heightInches = parseFloat(heightInchesInput.value);
      const weightStone = parseFloat(weightStoneInput.value);
      const weightLbs = parseFloat(weightLbsInput.value);

      height = this.getInchesFromFeetAndInches(heightFeet, heightInches);
      weight = this.getPoundsFromStoneAndPounds(weightStone, weightLbs);
      bmi = this.calculateBmi(weight, height);
    }

    const BMIValueElement = document.getElementById(
      "BMIValue"
    ) as HTMLParagraphElement;

    if (!isNaN(bmi)) {
      BMIValueElement.innerHTML = `${bmi}`;
    } else {
      BMIValueElement.innerHTML = "";
    }

    return bmi;
  }
}

const bmiCalculator = new BMICalculator();

heightCmInput.addEventListener(
  "change",
  bmiCalculator.printBMI.bind(bmiCalculator)
);
weightKgInput.addEventListener(
  "change",
  bmiCalculator.printBMI.bind(bmiCalculator)
);
heightFeetInput.addEventListener(
  "change",
  bmiCalculator.printBMI.bind(bmiCalculator)
);
heightInchesInput.addEventListener(
  "change",
  bmiCalculator.printBMI.bind(bmiCalculator)
);
weightStoneInput.addEventListener(
  "change",
  bmiCalculator.printBMI.bind(bmiCalculator)
);
weightLbsInput.addEventListener(
  "change",
  bmiCalculator.printBMI.bind(bmiCalculator)
);
