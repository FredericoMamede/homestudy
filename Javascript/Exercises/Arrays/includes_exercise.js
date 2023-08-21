//  Write a function named includes, that works like the includes method
// With the array and searchElement parameters
//  If the searchElement is in the arry, return false
// else return false

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, -1));

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}
