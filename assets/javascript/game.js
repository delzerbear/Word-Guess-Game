// Use key events to listen for the letters that your players will type.
//Display the following on the page:
var directionsText = Document.getElementById("directions-text");
//Press any key to get started!
var mysteryWord = Document.getElementById("mystery-word");
//Wins: (# of times user guessed the word correctly).
var winsText = Document.getElementById("wins-text");
var lossesText = Document.getElementById("losses-text");
var guessesLeft = Document.getElementById("guesses-left");

//Array for different "mystery" words!
var toonList = ["Transformers", "GI Joe", "DuckTales", "ThunderCats", "Voltron", "She-Ra", "He-Man"];
//Computer will return index [0-6] of random mystery word from array toonList.
// Setting variable for randomToon
let randomToon =  Math.floor(Math.random()* toonList.length); 

function findRandomWord () {
    return randomToon =  Math.floor(Math.random()* toonList.length);  
}

object.onkeyup = function(){
//user guesses a letter 
};

//Create answer array to fill w/ underscores for blank word
  //When randomToon selected, page should display spaced underscores pertaining to number of letters in word
  let hiddenChar = '_';  // character to display for the hidden letters display

  var answerArray = [];
for (var i = 0; i < randomToon.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = randomToon.length;

//If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
//As the user guesses the correct letters, reveal them: m a d o _  _ a.
//Found exmaple of code similar to what I want, but has uses prompts instead of displaying text}

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