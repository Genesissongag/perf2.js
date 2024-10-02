// Prompt to enter their score, and store the input in the score variable.
const score = parseInt(prompt("Enter your score: "));

// Use else if statements to assign grades based on the score
if (score >= 90) {
  console.log("Your grade is: Excellent.");
} else if (score >= 80 && score < 89) {
  console.log("Your grade is: Good.");
} else if (score >= 70 && score < 79) {
  console.log("Your grade is: Fair.");
} else {
  console.log("Your grade is: Needs Improvement.");
}
