// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour
// this => referece to the object that is executing this piece of code

//  Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  // return this;
}

// new => creates an empty javascript object (const x = {};) this will point to the empty object
const circle = new Circle(1);
