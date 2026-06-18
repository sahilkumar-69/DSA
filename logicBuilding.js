// function isEven(n) {
//   if ((n & 1) === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(0));

// ------------------------ Print multiplication table ----------------------
//  ---------- Iterative approach -------------------
// function multiplicationTable(n) {
//   for (let index = 1; index <= 10; index++) {
//     console.log(`${n} * ${index} = ${n * index}`);
//   }
// }
// multiplicationTable(4);

//  ---------- Recursive approach -------------------

// function multiplicationTable(n, i = 1) {
//   if (i === 11) return;
//   console.log(`${n} * ${i} = ${n * i}`);
//   i++;
//   multiplicationTable(n, i);
// }

// multiplicationTable(5);

// ------------------------Print sum of natural numbers---------------------
// -----------Iterative approach--------------

// function findSum(n) {
//   let sum = 0;

//   for (n; n > 0; n--) {
//     sum += n;
//   }

//   console.log(sum);
// }

// findSum(10);
