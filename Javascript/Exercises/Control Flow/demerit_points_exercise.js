// Speed Limit = 70(km/h)
// Bellow or equal to 70 -> 'Ok'
// every 5(km/h) above the limit -> 1 point
// Math.floor(1.3) -- returns the greatest integer less than or equal to its numeric argument
// 12 points -> License suspended
// checkspeed();
// function checkSpeed(speed){}

checkSpeed(77);

function checkSpeed(speed) {
  if (speed <= 74) console.log("Ok");
  else {
    speed -= 70;
    speed /= 5;
    let rest = Math.floor(speed);
    if (rest >= 12) console.log("License suspended");
    console.log("points " + rest);
  }
}

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log("Ok");
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12) console.log("Licence suspended");
//   else console.log("Points", points);
// }
