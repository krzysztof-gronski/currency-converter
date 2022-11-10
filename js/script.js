{

    const input1 = document.querySelector(".js-input1");
    const input2 = document.querySelector(".js-input2");
    const select1 = document.querySelector(".js-select1");
    const select2 = document.querySelector(".js-select2");

    let input1OldValue = 0;
    let input2OldValue = 0;

    input1.addEventListener("input", () => {
        let updateInput = document.querySelector(".js-input2");
        validate(1, ".js-input1");
        updateInput.value = calculate(select1.value, select2.value, 1, ".js-input1");

    });

    input2.addEventListener("input", () => {
        let updateInput = document.querySelector(".js-input1");
        validate(2, ".js-input2");
        updateInput.value = calculate(select1.value, select2.value, 2, ".js-input2");

    });

    select1.addEventListener("input", () => {
        let updateInput = document.querySelector(".js-input2");
        validate(1, ".js-input1");
        updateInput.value = calculate(select1.value, select2.value, 1, ".js-input1");

    });

    select2.addEventListener("input", () => {
        let updateInput = document.querySelector(".js-input1");
        validate(2, ".js-input2");
        updateInput.value = calculate(select1.value, select2.value, 2, ".js-input2");

    });

    function validate(currentInputNr, currentInputSelector) {
        let currentInput = document.querySelector(currentInputSelector);
        let inputOldValue;
        if (currentInputNr === 1) {
            inputOldValue = input1OldValue;
        }
        else {
            inputOldValue = input2OldValue;
        }
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

    function calculate(fromValue, toValue, currentInputNr, currentInputSelector) {

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

        let currentInput = document.querySelector(currentInputSelector);

        switch (fromValue) {
            case "EUR":

                switch (toValue) {
                    case "EUR":
                        return (currentInput.value * 1).toFixed(2);
                    case "USD":
                        if (currentInputNr === 1) { return (currentInput.value * EURUSD).toFixed(2) }
                        else { return (currentInput.value * USDEUR).toFixed(2) }

                    case "GBP":
                        if (currentInputNr === 1) { return (currentInput.value * EURGBP).toFixed(2) }
                        else { return (currentInput.value * GBPEUR).toFixed(2) }

                    case "PLN":
                        if (currentInputNr === 1) { return (currentInput.value * EURPLN).toFixed(2) }
                        else { return (currentInput.value * PLNEUR).toFixed(2) }

                    default:
                }
                break;
            case "USD":
                switch (toValue) {
                    case "EUR":
                        if (currentInputNr === 1) { return (currentInput.value * USDEUR).toFixed(2) }
                        else { return (currentInput.value * EURUSD).toFixed(2) }

                    case "USD":
                        return (currentInput.value * 1).toFixed(2);

                    case "GBP":
                        if (currentInputNr === 1) { return (currentInput.value * USDGBP).toFixed(2) }
                        else { return (currentInput.value * GBPUSD).toFixed(2) }

                    case "PLN":
                        if (currentInputNr === 1) { return (currentInput.value * USDPLN).toFixed(2) }
                        else { return (currentInput.value * PLNUSD).toFixed(2) }

                    default:
                }
                break;
            case "GBP":
                switch (toValue) {
                    case "EUR":
                        if (currentInputNr === 1) { return (currentInput.value * GBPEUR).toFixed(2) }
                        else { return (currentInput.value * EURGBP).toFixed(2) }

                    case "USD":
                        if (currentInputNr === 1) { return (currentInput.value * GBPUSD).toFixed(2) }
                        else { return (currentInput.value * USDGBP).toFixed(2) }

                    case "GBP":
                        return (currentInput.value * 1).toFixed(2);

                    case "PLN":
                        if (currentInputNr === 1) { return (currentInput.value * GBPPLN).toFixed(2) }
                        else { return (currentInput.value * PLNGBP).toFixed(2) }

                    default:
                }
                break;
            case "PLN":
                switch (toValue) {
                    case "EUR":
                        if (currentInputNr === 1) { return (currentInput.value * PLNEUR).toFixed(2) }
                        else { return (currentInput.value * EURPLN).toFixed(2) }

                    case "USD":
                        if (currentInputNr === 1) { return (currentInput.value * PLNUSD).toFixed(2) }
                        else { return (currentInput.value * USDPLN).toFixed(2) }

                    case "GBP":
                        if (currentInputNr === 1) { return (currentInput.value * PLNGBP).toFixed(2) }
                        else { return (currentInput.value * GBPPLN).toFixed(2) }

                    case "PLN":
                        return (currentInput.value * 1).toFixed(2);

                    default:
                }
                break;
            default:

        }

    }


}





