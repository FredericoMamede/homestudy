// Falsy (false):
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not falsy -> Truthy

// Short-circuiting

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
