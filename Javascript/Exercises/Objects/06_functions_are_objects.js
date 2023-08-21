function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function () {
//   console.log("draw");
// };
// `)

// const circle = Circle1(1);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const circle = new Circle(1);

console.log(circle);
