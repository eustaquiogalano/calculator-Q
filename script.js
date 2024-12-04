function displayClickedNumber(element) {
    
    // foe debugging purposes
    console.log("here" , element);

    // accumulation of multiple clicked numbers
    digits += element.textContent;

    // display the clicked number
    displayContainer.textContent = digits;

}

// START

// get all the necessary elements in html 
const displayContainer = document.querySelector('#display > div');
const listOfNumberButtons = document.querySelectorAll('.number');

// convert the node list of number buttons to an array
const arrayOfNumberButtons = Array.from(listOfNumberButtons);

let digits = ''; 

// in each array element put an event listener
arrayOfNumberButtons.forEach((item) => {

    // each item is a button element in html
    item.addEventListener('click', (event) => {   
        displayClickedNumber(event.target);
    });

});
