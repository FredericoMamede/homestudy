// Object-oriented Programming (OOP)

// let radius = 1;
// let x = 1;
// let y = 1;

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

// function draw() {}
// function move() {}

circle.draw(); // draw Method of the circle object
