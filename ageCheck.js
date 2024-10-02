// Prompt the user to enter their age
const age = parseInt(prompt("Enter your age: "));

// Use an if-else structure to determine the user's age group
if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}
