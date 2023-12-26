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
        console.log(event.target);
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

function getPounds(stone: number, pounds: number): number {
    return stone * 14 + pounds;
}

function getInches(feet: number, inches: number): number {
    return feet * 12 + inches;
}

function calculateBmi(weight: number, height: number): number {
    return weight / (height * height);
}

function printBMI(): number {
    let height: number;
    let weight: number;

    if (selectedRadio.id === "metric") {
        height = parseFloat(heightCmInput.value);
        weight = parseFloat(weightKgInput.value);
    } else {
        height = getInches(
            parseFloat(heightFeetInput.value) * 12,
            parseFloat(heightInchesInput.value)
        );
        weight = getPounds(
            parseFloat(weightStoneInput.value) * 14,
            parseFloat(weightLbsInput.value)
        );
    }

    let bmi: number = 0;

    if (!isNaN(height) && !isNaN(weight)) {
        bmi = calculateBmi(height, weight);
    }

    console.log("height: " + height);
    console.log("weight: " + weight);

    return bmi;
}

heightCmInput.addEventListener("change", printBMI);
weightKgInput.addEventListener("change", printBMI);
heightFeetInput.addEventListener("change", printBMI);
heightInchesInput.addEventListener("change", printBMI);
weightStoneInput.addEventListener("change", printBMI);
weightLbsInput.addEventListener("change", printBMI);
