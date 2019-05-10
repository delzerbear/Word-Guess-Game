// Use key events to listen for the letters that your players will type.
//Display the following on the page:
var directionsText = document.getElementById("directions-text");
//Press any key to get started!
var mysteryWord = document.getElementById("mystery-word");
//Wins: (# of times user guessed the word correctly).
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");

//Array for different "mystery" words!
var toonList = ["Transformers", "GI Joe", "DuckTales", "ThunderCats", "Voltron", "She-Ra", "He-Man"];
//Computer will return index [0-6] of random mystery word from array toonList.
// Setting variable for randomToon
let randomToon =  Math.floor(Math.random()* toonList.length); 

function findRandomWord () {
    return randomToon =  Math.floor(Math.random()* toonList.length);  
}

//Create answer array to fill w/ underscores for blank word
//When randomToon selected, page should display spaced underscores pertaining to number of letters in word
var answerArray = [];
for (var i = 0; i < randomToon.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = randomToon.length;

//If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
//As the user guesses the correct letters, reveal them: m a d o _  _ a.
//Found exmaple of code similar to what I want, but has uses prompts instead of displaying text
while (remainingLetters > 0) {
 alert(answerArray.join(" "));
 var guess = prompt("Guess a letter to start playing, or click Cancel to stop playing.");
 if (guess === null) {
    break;
} else if (guess.length !== 1) {
    alert("Please enter a single letter.");
} else {
    for (var j = 0; j < wordLength; j++) {
    if (word[j] === guess);
    remainingLetters--;
        }
    }
}

//Number of Guesses Remaining: (# of guesses remaining for the user).
//Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).    
    var wins = ["_"];
    var losses = ["_"];
    var letterGuesses = ["_"];
    var guessesLeft = 13


// Display the user and computer guesses, and wins/losses/ties.
    letterGuesses.textContent = "Letters guessed: " + letterGuesses;
    guessesLeft.textContent = 13 - losses;

//After the user wins/loses the game should automatically choose another word and make the user play it.


//Console log to test the javascript
console.log(toonList)
console.log(randomToon)
console.log(guessesLeft)
console.log(letterGuesses)