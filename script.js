let corretNumber = Math.floor(Math.random() * 100) + 1; //Number between 1 and 100
corretNumber = 87;
let numberOfGuesses = 0; //A variable to track the number of guesses

document.getElementById("input-form").addEventListener("submit", function(e)  {
    e.preventDefault();

    document.getElementById("input-form").classList.toggle("active")

    const guessInput = document.getElementById("number-input");

    const guess = Number(guessInput.value); //get the input value
    
    const result = document.getElementById("message");
    
    const guessList = document.getElementById("guess-list");
    
    numberOfGuesses++;  //Increase the number guesses by 1. 
    
    //if statment - input validate
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        result.textContent = "Try to input number between 1 and 100";
    }
     else if (guess > corretNumber) {
        result.textContent = "To High";    
    } else if (guess < corretNumber) {
        result.textContent = "To Low";    
    } else {
        result.textContent = `Your guess is correct! Guess count = ${numberOfGuesses}`;    
    }
    //create a new list for the guess
    const listItem = document.createElement("li");

    listItem.textContent = `Your guess: ${guess} - Number of guess: ${numberOfGuesses}`;

    guessList.appendChild(listItem);
    
    //clear input value
    guessInput.value = "";
})