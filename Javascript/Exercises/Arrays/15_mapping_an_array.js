const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((n) => n >= 0);

// const items = filtered.map((n) => "<li>" + n + "</li>"); // mapping to strings

// const html = '<ul>' +  items.join('') + ' ';

// console.log(html);

// const items = filtered.map((n) => {
//   // const obj = { value: n};
//   // return obj;

//   return { value: n };
// });

// const items = filtered.map((n) => ({ value: n }));

const items = numbers
.filter((n) => n >= 0)
.map((n) => ({ value: n }))
.filter(obj => obj.value > 1)
.map(obj => obj.value); // chaining

console.log(items);
