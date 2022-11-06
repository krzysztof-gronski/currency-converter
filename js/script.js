const input1 = document.querySelector(".js-input1");
const input2 = document.querySelector(".js-input2");
const select1 = document.querySelector(".js-select1");
const select2 = document.querySelector(".js-select2");

let input1OldValue = 0;
let input2OldValue = 0;
let currentInput;
let updateInput;
let currentInputNr = 0;

let EURUSD = 0.9881;
let EURGBP = 0.8600;
let EURPLN = 4.7039;
let USDEUR = 1.0120;
let USDGBP = 0.8706;
let USDPLN = 4.7615;
let GBPEUR = 1.1627;
let GBPUSD = 1.1486;
let GBPPLN = 5.4697;
let PLNEUR = 0.2125;
let PLNUSD = 0.2100;
let PLNGBP = 0.1828;


input1.addEventListener("input", () => {
    currentInput = document.querySelector(".js-input1");
    currentInputNr = 1;
    updateInput = document.querySelector(".js-input2");
    validate();
    calculate();

});

input2.addEventListener("input", () => {
    currentInput = document.querySelector(".js-input2");
    currentInputNr = 2;
    updateInput = document.querySelector(".js-input1");
    validate();
    calculate();

});

select1.addEventListener("input", () => {
    currentInput = document.querySelector(".js-input1");
    currentInputNr = 1;
    updateInput = document.querySelector(".js-input2");
    validate();
    calculate();

});

select2.addEventListener("input", () => {
    currentInput = document.querySelector(".js-input2");
    currentInputNr = 2;
    updateInput = document.querySelector(".js-input1");
    validate();
    calculate();

});

function validate() {
    let inputOldValue;
    if (currentInputNr === 1) {
        inputOldValue = input1OldValue;
    }
    else {
        inputOldValue = input2OldValue;
    }

    let value = parseFloat(currentInput.value);
    if ((currentInput.value === "") && (inputOldValue !== 0)) {
        currentInput.value = 0;

    }
    if (currentInput.value < 0) {
        currentInput.value = 0;
    }
    if (currentInput.value > 0) {

        if ((currentInput.value.includes(".")) && (currentInput.value.indexOf(".") < currentInput.value.length - 3)) {
            currentInput.value = inputOldValue;
        }
    }
    if (currentInputNr === 1) {
        input1OldValue = parseFloat(currentInput.value);
    }
    else {
        input2OldValue = parseFloat(currentInput.value);
    }
}

function calculate() {

    switch (select1.value) {
        case "EUR":

            switch (select2.value) {
                case "EUR":
                    updateInput.value = (currentInput.value * 1).toFixed(2);
                    break;
                case "USD":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * EURUSD).toFixed(2) }
                    else { updateInput.value = (currentInput.value * USDEUR).toFixed(2) }
                    break;
                case "GBP":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * EURGBP).toFixed(2) }
                    else { updateInput.value = (currentInput.value * GBPEUR).toFixed(2) }
                    break;
                case "PLN":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * EURPLN).toFixed(2) }
                    else { updateInput.value = (currentInput.value * PLNEUR).toFixed(2) }
                    break;
                default:
            }
            break;
        case "USD":
            switch (select2.value) {
                case "EUR":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * USDEUR).toFixed(2) }
                    else { updateInput.value = (currentInput.value * EURUSD).toFixed(2) }
                    break;
                case "USD":
                    updateInput.value = (currentInput.value * 1).toFixed(2);
                    break;
                case "GBP":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * USDGBP).toFixed(2) }
                    else { updateInput.value = (currentInput.value * GBPUSD).toFixed(2) }
                    break;
                case "PLN":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * USDPLN).toFixed(2) }
                    else { updateInput.value = (currentInput.value * PLNUSD).toFixed(2) }
                    break;
                default:
            }
            break;
        case "GBP":
            switch (select2.value) {
                case "EUR":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * GBPEUR).toFixed(2) }
                    else { updateInput.value = (currentInput.value * EURGBP).toFixed(2) }
                    break;
                case "USD":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * GBPUSD).toFixed(2) }
                    else { updateInput.value = (currentInput.value * USDGBP).toFixed(2) }
                    break;
                case "GBP":
                    updateInput.value = (currentInput.value * 1).toFixed(2);
                    break;
                case "PLN":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * GBPPLN).toFixed(2) }
                    else { updateInput.value = (currentInput.value * PLNGBP).toFixed(2) }
                    break;
                default:
            }
            break;
        case "PLN":
            switch (select2.value) {
                case "EUR":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * PLNEUR).toFixed(2) }
                    else { updateInput.value = (currentInput.value * EURPLN).toFixed(2) }
                    break;
                case "USD":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * PLNUSD).toFixed(2) }
                    else { updateInput.value = (currentInput.value * USDPLN).toFixed(2) }
                    break;
                case "GBP":
                    if (currentInputNr === 1) { updateInput.value = (currentInput.value * PLNGBP).toFixed(2) }
                    else { updateInput.value = (currentInput.value * GBPPLN).toFixed(2) }
                    break;
                case "PLN":
                    updateInput.value = (currentInput.value * 1).toFixed(2);
                    break;
                default:
            }
            break;
        default:

    }

}





