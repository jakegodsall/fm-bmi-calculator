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

      // Empty the metric values
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

      // Empty the imperial values
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

  calculateBmi(weight: number, height: number): number {
    return weight / (height * height);
  }

  printBMI(): number {
    let height: number;
    let weight: number;

    if (selectedRadioButton.id === "metric-radio") {
      height = parseFloat(heightCmInput.value);
      weight = parseFloat(weightKgInput.value);

      console.log("height in cm: " + height);
      console.log("weight in kg: " + weight);
    } else if (selectedRadioButton.id === "imperial-radio") {
      height = this.getInchesFromFeetAndInches(
        parseFloat(heightFeetInput.value),
        parseFloat(heightInchesInput.value)
      );
      console.log("height:" + height);
    }

    return 1;
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
