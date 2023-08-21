// let role;
let role = "guest";

// switch (variable) {
//   caseSatetment:
// console.log()
// }

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderater":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

if (role === "guest") console.log("Guest");
if (role === "moderator") console.log("Moderator");
else console.log("Unknown User");
