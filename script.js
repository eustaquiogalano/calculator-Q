function displayClickedNumber(element) {
    
    // foe debugging purposes
    console.log("here" , element);

    // for multiple digits
    digits += element.textContent;

    // display the clicked number
    displayContainer.textContent = digits;

}

// START

// get all the necessary elements in html 
const displayContainer = document.querySelector('#display > div');
const listOfNumberButtons = document.querySelectorAll('.number');
let digits = ''; 

// convert the node list of number buttons to an array
const arrayOfNumberButtons = Array.from(listOfNumberButtons);

// in each array element put an event listener
// each item is a button element in html
arrayOfNumberButtons.forEach((item) => {
    item.addEventListener('click', (event) => {   
        displayClickedNumber(event.target);
    });
});
