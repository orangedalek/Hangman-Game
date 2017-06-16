// create list of words for game

var words = ["bauhaus", "eyeliner", "darkwave", "cure", "poetry", "fishnets", "black", "bats", "candle"];

// make the computer pick one at random

var word = words[Math.floor(Math.random()*words.length)];

// define variables for scoring info

var wins = 0;
var losses = 0;
var wrongLetters = 0;
var guessesLeft = 6;




// make a place for the letters to go


var letters = [];

function makeLines(){
	for(var i = 0; i < word.length; i++){
		letters[i]= "_";	
	}
 	var el = document.getElementById("demo");
	el.innerHTML = letters.join(" ");
}
makeLines();
//use split method to split word into single letters and push it to letters array


var splitWord = word.split;

function pushLetters(){
	letters.push(splitWord);
}







	var remainingLetters = word.length;

	document.onkeyup = function() {
		var guess = (event.key).toLowerCase();
		//while there are still letters left to guess, keep looping
	while(guessesLeft > 0){
		//compare user guess to letters in word
			for(var j = 0; j < word.length; j ++){
		//if there's a match, show the letter in "letters"^^
				if(word[j]=== guess){
					letters[j] =guess;
					pushLetters(letters);
					console.log(letters);
					letters[j].innerHTML = guess;			 //push into answers, try to console.log it
				}

		

	}

		



		//if not, guesses left goes down by oneand letter is added to wrongGuesses

		//if guesses left = 0, game alerts a loss, adds to loss counter, and computer picks a new word, guesses return to 6
		//and wrong guesse are cleared

		//if all the letters are guessed, alert a win, adds to win counter and computer picks a new word...




		// if(guess === null){
		// break;
		// }

		// else if(guess.length !== 1){
		// 	alert("Pick a single letter");
		// }
		// else if(
		// 	for(var j = 0; j < word.length; j ++){
		// 		if(word[j]=== guess){
		// 			letters[j] =guess; //push into answers, try to console.log it
		// 			guessesLeft--; 
				
		// else if{
		// 	for()
		// }
		// }
	}

}








