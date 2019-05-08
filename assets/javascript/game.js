// Use key events to listen for the letters that your players will type.
//Display the following on the page:
displayText
//Press any key to get started!
//Wins: (# of times user guessed the word correctly).

//Inserted array for all letter choices possible??
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Array for different "mystery" words!
var toonList = ["Transformers", "GI Joe", "DuckTales", "ThunderCats", "Voltron", "She-Ra", "He-Man"];
    

//If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
//As the user guesses the correct letters, reveal them: m a d o _  _ a.

//Computer will select random mystery word from array toonList.
function findRandomWord () {
var randomToon =  Math.floor(Math.random()* toonList.length);  
toonList [randomToon]
}


//Number of Guesses Remaining: (# of guesses remaining for the user).
//Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).    
    var wins = 0;
    var guessesleft = 13;
    var letterguesses = 0;
    var filler = ["_"];
//After the user wins/loses the game should automatically choose another word and make the user play it.

//Console log to test the javascript
console.log(alphabet)
console.log(toonList)
console.log(randomToon)
