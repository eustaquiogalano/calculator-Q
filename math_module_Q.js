export default (function () {
    
    function displayClickedNumber(numberButton, digits, displayContainer) {

        // accumulation of multiple clicked numbers
        digits += numberButton.textContent;
        
        console.log(digits);
        
        // display the clicked number
        displayContainer.textContent = digits;

        return digits;
    }

    function setOperation(operatorButton, displayContainer, result, operation, digits) {
        // get the display and set as value of result, if none use digits;
        result = +displayContainer.textContent || +digits;
        console.log(result);
        
        // set the operation variable based on what button was clicked
        operation = operatorButton.textContent;
        console.log(operation);
        
        // reset the display to blank for another input
        displayContainer.textContent = '';

        // reset the digit 
        return [result, operation];
    }

    function addition(result, currentDigit) {
        return result += currentDigit;
    }

    function subtraction(result, currentDigit) {
        return result -= currentDigit;
    }
    function multiplication(result, currentDigit) {
        return result *= currentDigit;
    }

    function division(result, currentDigit) {
        return result /= currentDigit;
    }

    function evaluate(operation, currentDigit, displayContainer, result) {
        // get the number at the display and convert to number
        currentDigit = +displayContainer.textContent;

        switch (operation) {
            case '+':
                result = addition(result, currentDigit);
                break;
            case '-':
                result = subtraction(result, currentDigit);
                break;
            case '*':
                result = multiplication(result, currentDigit);
                break;
            case '/':
                result = division(result, currentDigit);
                break;
            default:
                break;
        }
        displayContainer.textContent = result;
        return result;
    }

    // for "DEL" button
    function deleteChar(digits, displayContainer) {
        let separated = digits.split('');  // split the string into array
        separated.splice(-1, 1);  // delete the last character
        digits = separated.join('');  // join to become string again
        displayContainer.textContent = digits;  // display the output 
        console.log(digits); // for debugging purpose
    }

    return {
        displayClickedNumber,
        setOperation,
        addition,
        subtraction,
        multiplication,
        division,
        evaluate,
        deleteChar
    };
})();

