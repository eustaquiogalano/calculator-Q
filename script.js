function displayClickedNumber(numberButton) {
    
    // foe debugging purposes
    console.log("here" , numberButton);

    // accumulation of multiple clicked numbers
    digits += numberButton.textContent;

    // display the clicked number
    displayContainer.textContent = digits;

}

function setOperation(operatorButton) {
    result = +digits;
    operation = operatorButton.textContent;
    displayContainer.textContent = '';
    digits = '';
}

function evaluate() {
    digits = displayContainer.textContent;
    currentDigit = +digits;
    switch (operation) {
        case '+':
            result += currentDigit;
            displayContainer.textContent = result;
            break;
    
        default:
            break;
    }
}

// START

// get all the necessary elements in html 
const displayContainer = document.querySelector('#display > div');
const listOfNumberButtons = document.querySelectorAll('.number');
const listOfOperatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#op-equal');
const clearButton = document.querySelector('#op-clear');

let digits = ''; 
let result = 0;
let currentDigit = 0;
let operation = ''

// convert the node list of number buttons to an array
const arrayOfNumberButtons = Array.from(listOfNumberButtons);
// in each array element put an event listener
arrayOfNumberButtons.forEach((number) => {

    // each item is a button element in html
    number.addEventListener('click', (event) => {   
        displayClickedNumber(event.target);
    });

});

// convert the node list of operator buttons to an array
const arrayOfOperatorButtons = Array.from(listOfOperatorButtons);
// in each array element put an event listener
arrayOfOperatorButtons.forEach((operator) => {
    
    // each array element is a button element in html
    operator.addEventListener('click', (event) => {
        setOperation(event.target);
    });
});

equalButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', () => {
    displayContainer.textContent = '';
    digits = '';
    currentDigit = 0;
    result = 0;
});