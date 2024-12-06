function displayClickedNumber(numberButton) {
    
    // foe debugging purposes
    console.log("here" , numberButton);

    // accumulation of multiple clicked numbers
    digits += numberButton.textContent;

    // display the clicked number
    displayContainer.textContent = digits;

}

function setOperation(operatorButton) {
    // get the display and set as value of result if none use digits;
    result = +displayContainer.textContent || +digits;

    // set the operation variable based on what button was clicked
    operation = operatorButton.textContent;

    // reset the display to blank for another input
    displayContainer.textContent = '';

    // reset the digit 
    digits = '';
}

function addition() {
    result += currentDigit;
}

function subtraction() {
    result -= currentDigit;
}
function multiplication() {
    result *= currentDigit;
}

function division() {
    result /= currentDigit;
}

function evaluate() {
    // get the number at the display and convert to number
    currentDigit = +displayContainer.textContent;

    switch (operation) {
        case '+':
            addition();
            break;
        case '-':
            subtraction();
            break;
        case '*':
            multiplication();
            break;
        case '/':
            division();
            break;
        default:
            break;
    }
    displayContainer.textContent = result;
}

// START

// get all the necessary elements in html 
const displayContainer = document.querySelector('#display > div');
const listOfNumberButtons = document.querySelectorAll('.number');
const listOfOperatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#op-equal');
const clearButton = document.querySelector('#op-clear');

// global variables 
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

// clear function resets all the variables and the display
clearButton.addEventListener('click', () => {
    displayContainer.textContent = '';
    digits = '';
    currentDigit = 0;
    result = 0;
});