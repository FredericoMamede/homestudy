// function that takes an array and return the number of truthy elements
// Falsy:
// undefined
// null
// ''
// false
// 0
// NaN

const array = [0, 1, 2, 3, false, null, 'hello', '', 10];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array)
  if (value)
  count++;
  return count;
}

