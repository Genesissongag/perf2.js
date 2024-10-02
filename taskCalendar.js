// Prompt the user to enter a day of the week
const day = prompt("Enter a day of the week:Monday");

// Use a switch statement to map each day to a specific task to ensure the input is case-insensitive.
switch (day.toLowerCase()) {
  case "monday":
    console.log("Your task for Monday is: Finish assignments.");
    break;
  case "tuesday":
    console.log("Your task for Tuesday is: Attend a class.");
    break;
  case "wednesday":
    console.log("Your task for Wednesday is: washing clothes.");
    break;
  case "thursday":
    console.log("Your task for Thursday is: FReview notes.");
    break;
  case "friday":
    console.log("Your task for Friday is: Summary reviewer.");
    break;
  case "saturday":
    console.log("Your task for Saturday is: Take a break.");
    break;
  case "sunday":
    console.log("Your task for Sunday is: Working day.");
    break;
  default:
    console.log("Finish assignments.");
}
