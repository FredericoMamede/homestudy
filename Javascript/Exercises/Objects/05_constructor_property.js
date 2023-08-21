function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

// another.constructor;


new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...

// Every object has a constructor property that references the function that was used to create an object