const input = document.getElementById("input1");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function updateDisplay() {
    input.value = firstNumber + operator + secondNumber;
}


function appendNumber(num) {
    if (operator === "") {
        firstNumber += num;
    } else {
        secondNumber += num;
    }
    updateDisplay();
}


function setOperator(op) {
    if (firstNumber !== "") {
        operator = op;
    }
    updateDisplay();
}

// Equals function
function calculate() {
    let result;
    try {
        switch (operator) {
            case "+":
                result = Number(firstNumber) + Number(secondNumber);
                break;
            case "-":
                result = Number(firstNumber) - Number(secondNumber);
                break;
            case "*":
                result = Number(firstNumber) * Number(secondNumber);
                break;
            case "/":
                result = Number(firstNumber) / Number(secondNumber);
                break;
            default:
                result = "Error";
        }
        input.value = result;
        
        firstNumber = result.toString();
        operator = "";
        secondNumber = "";
    } catch {
        input.value = "Error";
    }
}


function clearAll() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    input.value = "";
}


document.getElementById("one").addEventListener("click", () => appendNumber("1"));
document.getElementById("two").addEventListener("click", () => appendNumber("2"));
document.getElementById("three").addEventListener("click", () => appendNumber("3"));
document.getElementById("four").addEventListener("click", () => appendNumber("4"));
document.getElementById("five").addEventListener("click", () => appendNumber("5"));
document.getElementById("six").addEventListener("click", () => appendNumber("6"));
document.getElementById("seven").addEventListener("click", () => appendNumber("7"));
document.getElementById("eight").addEventListener("click", () => appendNumber("8"));
document.getElementById("nine").addEventListener("click", () => appendNumber("9"));
document.getElementById("zero").addEventListener("click", () => appendNumber("0"));

document.getElementById("add").addEventListener("click", () => setOperator("+"));
document.getElementById("subtract").addEventListener("click", () => setOperator("-"));
document.getElementById("multiply").addEventListener("click", () => setOperator("*"));
document.getElementById("divide").addEventListener("click", () => setOperator("/"));

document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", clearAll);
