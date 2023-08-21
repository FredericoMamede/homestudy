// show all the the odd and even number until the limit

showNumbers(10);

// function showNumbers(limit) {
//   // if (limit % 2 === 0) console.log(limit, 'even')
//   // else console.log(limit, 'odd')
//   for (let i = 0; i <= limit; i++) {
//     if (i === 0) {
//       console.log(i + " is even");
//     } else if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }
// }

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
