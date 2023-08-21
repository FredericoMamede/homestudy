// Write a function called arrayFromRange
// It should take 2 parameters (min, max)
// When we run the function we should get an array with the numbers form min to max

const numbers = arrayFromRange(-15, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  const arrMinToMax = [];
  for (let i = min; i <= max; i++) {
    arrMinToMax.push(i);
  }
  return arrMinToMax;
}
