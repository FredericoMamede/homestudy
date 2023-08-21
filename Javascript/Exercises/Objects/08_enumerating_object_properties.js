const circle = {
  radius: 1,

  draw() {
    console.log("draw");
  },
};

for (let key of Object.keys(circle)) console.log(key);
for (let entry of Object.entries(circle)) console.log(entry);

if ("radius" in circle) console.log("yes");

// Object.keys()

// function Object() {}
// const x = {value: 1};
// const x = new Object()
