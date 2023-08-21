// Hour
// If the hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// if (condition) {
//   statement;
// } else if (anotherCondition) {
//   statement;
// } else if (yetAnotherCondition) {
//   statement;
// } else {
//   statement;
// }

let hour = 15;

if (hour >= 6 && hour < 12) console.log("Good Morning!");
else if (hour >= 12 && hour < 18) console.log("Good Afternoon!");
else console.log("Good evening!");
