/* -------------- max subrarray sum using brute force approach --------------
              time complexity = O(n^3)
              */
let array = [2, 3, -45, 6, 7, -99];

let maxSum = -Infinity;

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     let sum = 0;
//     for (let k = i; k <= j; k++) {
//       sum += array[k];
//     }
//     maxSum = Math.max(maxSum, sum);
//   }
// }

// console.log(maxSum);

/* ----------------- max subrarray sum using prefix sum array approach --------------
time complexity = O(n^2)
space complexity = O(n)
*/

// let prefixSum = Array(array.length);

// prefixSum[0] = array[0];

// for (let i = 1; i < array.length; i++) {
//   prefixSum[i] = prefixSum[i - 1] + array[i];
// }

// for (let i = 0; i < array.length; i++) {
//   for (let k = i; k < array.length; k++) {
//     maxSum = Math.max(
//       maxSum,
//       i === 0 ? prefixSum[i] : prefixSum[k] - prefixSum[i - 1],
//     );
//   }
// }

// console.log(maxSum);

/* ----------------- max subrarray sum using kadane's algorithm approach --------------
time complexity = O(n)
space complexity = O(1)
*/

// let currMax = 0;

// for (let i of array) {
//   currMax = Math.max(currMax + i, 0);
//   maxSum = Math.max(currMax, maxSum);
// }

// console.log(maxSum);
