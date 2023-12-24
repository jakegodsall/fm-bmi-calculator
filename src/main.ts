const form = document.forms[0] as HTMLFormElement;

// Radio buttons
const radioButtons = document.querySelectorAll<HTMLInputElement>(
    'input[name="measurement"]'
);

const selectedRadio = Array.from(radioButtons).find((rb) => rb.checked);

radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", (event: Event) => {
        console.log(event.target);
    });
});

// Metric fields
const heightCm = document.getElementById("height-cm") as HTMLInputElement;
const weightKg = document.getElementById("weight-kg") as HTMLInputElement;

// Imperial fields
const heightFeet = document.getElementById("height-ft") as HTMLInputElement;
const heightInches = document.getElementById("height-in") as HTMLInputElement;
const weightStone = document.getElementById("weight-st") as HTMLInputElement;
const weightLbs = document.getElementById("weight-lbs") as HTMLInputElement;
