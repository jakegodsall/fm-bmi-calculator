const form = document.forms[0] as HTMLFormElement;

// Radio buttons
const radioButtons = document.querySelectorAll<HTMLInputElement>(
  'input[name="measurement"]'
);

const selectedRadio = Array.from(radioButtons).find(
  (rb) => rb.checked
) as HTMLInputElement;

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", (event: Event) => {
    const target = event.target as HTMLInputElement;

    const formInputsContainer = document.getElementById(
      "bmiForm__inputs"
    ) as HTMLElement;

    if (target.id === "imperial") {
      formInputsContainer.classList.add("imperial");
    } else if (target.id === "metric") {
      formInputsContainer.classList.remove("imperial");
    }
  });
});

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

    if (selectedRadio.id === "metric") {
      height = parseFloat(heightCmInput.value);
      weight = parseFloat(weightKgInput.value);

      console.log("height in cm: " + height);
      console.log("weight in kg: " + weight);
    } else {
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

// function printBMI(): number {
//   let height: number;
//   let weight: number;

//   if (selectedRadio.id === "metric") {
//     height = parseFloat(heightCmInput.value);
//     weight = parseFloat(weightKgInput.value);
//   } else {
//     height = getInches(
//       parseFloat(heightFeetInput.value) * 12,
//       parseFloat(heightInchesInput.value)
//     );
//     weight = getPounds(
//       parseFloat(weightStoneInput.value) * 14,
//       parseFloat(weightLbsInput.value)
//     );
//   }

//   let bmi: number = 0;

//   if (!isNaN(height) && !isNaN(weight)) {
//     bmi = calculateBmi(height, weight);
//   }

//   console.log("height: " + height);
//   console.log("weight: " + weight);

//   return bmi;
// }

heightCmInput.addEventListener("change", bmiCalculator.printBMI);
weightKgInput.addEventListener("change", bmiCalculator.printBMI);
heightFeetInput.addEventListener("change", bmiCalculator.printBMI);
heightInchesInput.addEventListener("change", bmiCalculator.printBMI);
weightStoneInput.addEventListener("change", bmiCalculator.printBMI);
weightLbsInput.addEventListener("change", bmiCalculator.printBMI);
