const numbers = [1, -1, 2, 3];

// let sum = 0;
// for(let n of numbers)
// sum += n;

// Reducing all the numbers in an array to a single one
// 2 arguments - first accumulator
// second is the value on which the accumulator will start (in this case 0)
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c => 3 => a = 5

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
