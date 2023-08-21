// const numbers = [1, 2, 3];
const numbers = [1, -1, 2, 3];

// every()- checks to see if every element matches the given criteria
const allPositive = numbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

// some()- checks to see if we have at least 1 element that matches the given criteria
const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
