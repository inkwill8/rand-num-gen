// Find the input on the good ol' DOM
const input = document.querySelector('input');

// Find button on DOM
const pressMe = document.querySelector('button');

// Add event listener to the button
pressMe.addEventListener('click', onClick);

// Define the function
function onClick () {
    let random = Math.round((Math.random() * 100) + 1);
    input.value = random;
}

