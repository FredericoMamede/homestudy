// create function that will show all the properties inside of string

const movie = {
  title: "a",
  releaseYear: 2023,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
