/* Quiz challenge - 5 components
1. Ask five questions (prompt w/ var)
2. Keep track of correct responses (var)
3. Provide final message with the players score (alert)
4. Rank the player (document.write)
  a. If all five correct, gold star
  b. If 3 or 4 correct, silver star
  c. If 1 or 2 correct, bronze star
  d. If 0 correct, no star given.
 */

// Creating correct guess variables
var correctGuess1 = 0;
var correctGuess2 = 0;
var correctGuess3 = 0;
var correctGuess4 = 0;
var correctGuess5 = 0;

// Asking questions and storing responses
var guessQuestion1 = prompt('How many words are in this sentence?');
  if (parseInt(guessQuestion1) === 7) {
    correctGuess1 = 1;
  }
var guessQuestion2 = prompt('How many letters in the word "Poop"?');
  if (parseInt(guessQuestion2) === 4) {
    correctGuess2 = 1;
  }
var guessQuestion3 = prompt('How many legs does a spider have?');
  if (parseInt(guessQuestion3) === 8) {
    correctGuess3 = 1;
  }
var guessQuestion4 = prompt('How many toes does a healthy baby have?');
  if (parseInt(guessQuestion4) === 10) {
    correctGuess4 = 1;
  }
var guessQuestion5 = prompt('How many questions are in this quiz?');
  if (parseInt(guessQuestion5) === 5) {
    correctGuess5 = 1;
  }

// Creating score
var totalScore = correctGuess1 + correctGuess2 + correctGuess3 + correctGuess4 + correctGuess5;
alert("Thanks for playing, click to see your score!");

// Creating conditional message for score
if (totalScore === 5) {
  document.write("<h2>You got " + totalScore + " correct, you win the gold star!</h2>");
} else if (totalScore === 3 || totalScore === 4) {
  document.write("<h2>You got " + totalScore + " correct, you win the silver star!</h2>");
} else if (totalScore === 1 || totalScore === 2) {
  document.write("<h2>You got " + totalScore + " correct, you win the bronze star!</h2>");
} else {
  document.write("<h2>You got " + totalScore + " correct, you suck!</h2>");
}