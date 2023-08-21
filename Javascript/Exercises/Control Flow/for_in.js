const person = {
  name: "Frederico",
  age: "26",
};

// will be set to the property
for (let key in person) console.log(key, person[key]);

const colors = ["red", "green", "blue"];
// will be set to an index of the array
for (let index in colors) console.log(index);

// will get the element of an index
for (let index in colors) console.log(index, colors[index]);

