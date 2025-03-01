import {default as mathQ} from "./math_module_Q.js"

// START

// get all the necessary elements in html 
const displayContainer = document.querySelector('#display > div');
const listOfNumberButtons = document.querySelectorAll('.number');
const listOfOperatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#op-equal');
const clearButton = document.querySelector('#op-clear');
const deleteButton = document.querySelector('#op-delete');

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
        digits = mathQ.displayClickedNumber(event.target, digits, displayContainer);
    });

});

// convert the node list of operator buttons to an array
const arrayOfOperatorButtons = Array.from(listOfOperatorButtons);
// in each array element put an event listener
arrayOfOperatorButtons.forEach((operator) => {
    
    // each array element is a button element in html
    operator.addEventListener('click', (event) => {
        [result, operation] = mathQ.setOperation(event.target, displayContainer, result, operation, digits);
        console.log(`Result: ${result}`);
        console.log(`Operation${operation}`);
        digits = '';
    });

});

equalButton.addEventListener('click', () => {
    result = mathQ.evaluate(operation, currentDigit, displayContainer, result);
});

// clear function resets all the variables and the display
clearButton.addEventListener('click', () => {
    displayContainer.textContent = '';
    digits = '';
    currentDigit = 0;
    result = 0;
});

deleteButton.addEventListener('click', () => {
    digits = mathQ.deleteChar(digits, displayContainer);
});