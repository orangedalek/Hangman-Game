// create list of words for game

var words = ["bauhaus", "eyeliner", "darkwave", "cure", "poetry", "fishnets", "black", "bats", "candle"];

// make the computer pick one at random
var word = words[Math.floor(Math.random()*words.length)];
// define variables for scoring info
//how many games has the player won?
var wins = 0;
//How many games has the player lost?
var losses = 0;
//show correct letters guessed in the letters array in the demo panel
var letters = [];
//show how many letters are left to guess
var remainingLetters = (word.length);
//show wrong letters guessed in the wronf guesses panel
var wrongLetters = [];
//for every wrong guess, this goes down by one. when it reaches zero, the game is over
var guessesLeft = 6;
//use split method to split word into single letters and push it to letters array
var splitWord = word.split;
//seperate letters of word and push them into the empty letters array.
function pushLetters(){
	letters.push(splitWord);
}
// make a place for the letters to go
function makeLines(){
	for(var i = 0; i < word.length; i++){
		spaces = [];
		spaces[i]= "_";
		paces.push(splitWord);	
	}
 	var el = document.getElementById("demo");
	el.innerHTML = spaces.join(" ");
}
makeLines();
pushLetters();

var remainingLetters = word.length;
//start game when user guesses the first letter
document.onkeyup = function() {
		var guess = (event.key).toLowerCase();
		//while there are still letters left to guess, keep looping
	while(guessesLeft > 0){
		//compare user guess to letters in word
			for(var j = 0; j < word.length; j ++){
		//if there's a match, show the letter in "letters"^^
				if(word[j]=== guess){
					letters[j] = guess;
					pushLetters(spaces);
					console.log(spaces);
					remainingLetters--;
				}
		//else if letter guessed is not in the word, guesses left goes down by oneand letter is added to wrongLetters.
				else if(word[j] !== guess){
					guessesLeft--;
					console.log(guessesLeft);
					var wrng = document.getElementById("wrong");
					wrng.innerHTML = guess;
				}
		//if all the letters are guessed, alert a win, adds to win counter and computer picks a new word...
				else if(remainingLetters === 0){
					Alert("You win!");
					wins++;
					pushLetters();//should maybe be pushSpaces?? Trying to restart game.
				}
		}
//if guesses left = 0, game alerts a loss, adds to loss counter, and computer picks a new word, guesses return to 6
		//and wrong guesse are cleared
		if(guessesLeft === 0);
		alert("You lose. The word was " + word);
		losses++;
		pushLetters();//should maybe be pushSpaces?? Trying to restart game.
	}
}	







		// if(guess === null){
		// break;
		// }

		// else if(guess.length !== 1){
		// 	alert("Pick a single letter");
		// }
	
	










