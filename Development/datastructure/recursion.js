/**/
const sum = (array, initial = 0) => {
  if (array.length === 0) {
    return initial;
  }
  return sum(array.slice(1), initial + array[0]);
};
const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];
let x = numbers.flat(3);
console.log(sum(x));
