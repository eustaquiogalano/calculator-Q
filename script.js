const buttonsContainer = document.querySelector('#buttons-container');
const displayContainer = document.querySelector('#display > div');


buttonsContainer.addEventListener('click', (event) => {
    const clickedButton = event.target;

    console.log(clickedButton.innerText);

    displayContainer.textContent = clickedButton.textContent
    
    
});