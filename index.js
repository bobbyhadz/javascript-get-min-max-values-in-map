// EXAMPLE 1 - Get the Min/Max Values in a Map in JavaScript

const map1 = new Map([
  ['num1', 3],
  ['num2', 5],
  ['num3', 8],
]);

const min = Math.min(...map1.values());
console.log(min); // 👉️ 3

const max = Math.max(...map1.values());
console.log(max); // 👉️ 8

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Min/Max Values in a Map using `reduce()`

// const map1 = new Map([
//   ['num1', 3],
//   ['num2', 5],
//   ['num3', 8],
// ]);

// const max = [...map1.entries()].reduce(
//   (accumulator, element) => {
//     return element[1] > accumulator[1] ? element : accumulator;
//   },
// );

// console.log(max); // 👉️ [ 'num3', 8 ]

// const min = [...map1.entries()].reduce(
//   (accumulator, element) => {
//     return element[1] < accumulator[1] ? element : accumulator;
//   },
// );

// console.log(min); // 👉️ [ 'num1', 3 ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Min/Max Values in a Set in JavaScript

// const set1 = new Set([3, 5, 8]);

// const min = Math.min(...set1);
// console.log(min); // 👉️ 3

// const max = Math.max(...set1);
// console.log(max); // 👉️ 8

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// function setMinMax(set) {
//   const min = Math.min(...set);

//   const max = Math.max(...set);

//   return {min, max};
// }

// const set1 = new Set([3, 5, 8]);

// const result = setMinMax(set1);

// console.log(result); // 👉️ { min: 3, max: 8 }

// console.log(result.min); // 👉️ 3
// console.log(result.max); // 👉️ 8
