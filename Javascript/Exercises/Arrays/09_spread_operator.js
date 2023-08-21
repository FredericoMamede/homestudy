const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = [...first,  ...second]; // exactly like [1, 2, 3, 4, 5, 6]
const combined = [...first, "a", ...second, "b"];

// const copy = combined.slice();

const copy = [...combined];
