// let x = 10;
// let y = x;

// x = 20;

// console.log(x, y); // x= 20, y = 10

// let x = {value: 10};
// let y = x;

// x.value = 20;

// console.log(x, y);

// Primitives are copied by their value
// Objects are copied by their reference

let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number);

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
