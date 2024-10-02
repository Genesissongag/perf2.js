// Set the correct answer
const correctAnswer = 7;

// Initialize the user's guess
let userGuess;

// Use a while loop to keep asking until the user guesses the correct number
while (true) {
  // Ask the user to guess a number between 1 and 10
  userGuess = parseInt(prompt("Guess a number between 1 and 10: "));

  // Check if the user's guess is correct
  if (userGuess === correctAnswer) {
    console.log("Congratulations! Your guess is correct.");
    break;
  } else if (userGuess < correctAnswer) {
    console.log("Your guess is too low. Try again!");
  } else {
    console.log("Your guess is too high. Try again!");
  }
}
