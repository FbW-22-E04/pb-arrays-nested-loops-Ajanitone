// # Programming Basics: Nested Loops (Using Arrays)

// **Use NESTED LOOPS in each of your solutions**

// Q1. Construct the following pattern.
// ```
// *
// * *
// * * *
// * * * *

for (let i = 0; i < 4; i++) {
  let string = "*";
  for (let j = 1; j <= i; j++) {
    string += "*";
  }
  console.log("Q01:The pattern is", string);
}

console.log(
  "---------------------------------------------------------------------"
);
// Q2. Given the following array:
// ```
// const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// ```
// Create the following output:
// ```
// row 0
//  1
//  2
//  1
//  24
// row 1
//  8
//  11
//  9
//  4
// row 2
//  ...
// (and so on)

const ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (let i in ARR) {
  console.log(`Row ${[i]}`);
  for (let j of ARR[i]) {
    console.log(`${[j]}`);
  }
}
console.log(
  "---------------------------------------------------------------------"
);
// Q3. Output the following:
// ```
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// ```
let arrayQ3a = [];
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    arrayQ3a.push(i);
  }
}

console.log("Q3a:", arrayQ3a);

console.log(
  "---------------------------------------------------------------------"
);
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let arrayQ3b = [];
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j < 5; j++) {
    arrayQ3b.push(j);
  }
}

console.log("Q3:", arrayQ3b);
// **BONUS CHALLENGE**
// Write a solution for Q3 using nested loops which are all nested within a single outer loop.

let array1 = [];
let array2 = [];

for (let i = 1; i <= 4; i++) {
  if (i > 0) {
    for (let y = 1; y <= 3; y++) {
      array1.push(i);
    }
    if (i < 4) {
      for (let j = 0; j < 5; j++) {
        array2.push(j);
      }
    }
  }
}

console.log("Bonus", array1.join(" "), array2.join(" "));
