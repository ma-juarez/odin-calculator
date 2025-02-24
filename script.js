// Basic Computing Functions
function add(number1, number2) {
    return parseFloat(number1) + parseFloat(number2);
}

function substract(number1, number2) {
    return parseFloat(number1) - parseFloat(number2);
}

function multiply(number1, number2) {
    return parseFloat(number1) * parseFloat(number2);
}

function divide(number1, number2) {
    return parseFloat(number1) / parseFloat(number2);
}

// Operator function to run the calculations
function operate(number1, number2, operator) {
    if (operator == "+") {
        return add(number1, number2)
    } else if (operator == "-") {
        return substract(number1, number2)
    } else if (operator == "*") {
        return multiply(number1, number2)
    } else if (operator == "/") {
        return divide(number1, number2)
    }
}

// Variable initialization
let number1 = "";
let number2 = "";
let operator = "";
let text_display = "";

// Calculator button detection
const buttons = document.querySelectorAll("button");
const text = document.querySelector(".result-text");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.className == "number" && operator == "") {
            text_display = text_display + button.id;
            number1 = number1 + button.id;

            text.textContent = `${text_display}`
        } else if (button.className == "number" && operator != "") {
            text_display = text_display + button.id;
            number2 = number2 + button.id;

            text.textContent = `${text_display}`
        } else if (button.className == "operator" && operator == "") {
            if (number1 != "") {
                text_display = text_display + button.id;
                operator = button.id;

                text.textContent = `${text_display}`
            }
        } else if (button.className == "operator" && number1 != "" && number2 != "" && operator != "") {
            result = operate(number1, number2, operator);
            operator = button.id
            number1 = result
            number2 = ""
            text_display = `${result}` + button.id;
            text.textContent = `${text_display}`
        } else if (button.className == "equal" && number1 != "" && number2 != "" && operator != "") {
            result = operate(number1, number2, operator);
            text.textContent = `${result}`
            number1 = result
            number2 = ""
            operator = ""
        }
    })
})

// Restart functionality
const restart = document.querySelector(".restart");

restart.addEventListener ("click", () => {
    text_display = "";
    number1 = "";
    number2 = "";
    operator = "";

    text.textContent = `0`;
})