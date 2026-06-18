const stats = [4, 2, 0, 3, 2, 5];

/* ----------------- Trapping Rain Water using Brute force approach --------------
time complexity = O(n^2)
space complexity = O(1)
*/

// function trappingWater(stats) {
//   let sum = 0;
//   for (let i = 0; i < stats.length; i++) {
//     let leftMax = 0;
//     let rightMax = 0;

//     for (let k = 0; k <= i; k++) {
//       leftMax = Math.max(leftMax, stats[k]);
//     }

//     for (let k = i; k < stats.length; k++) {
//       rightMax = Math.max(rightMax, stats[k]);
//     }

//     sum += Math.min(leftMax, rightMax) - stats[i];
//   }

//   //   return sum;
//   console.log(sum);
// }

// trappingWater(stats);

/* ----------------- Trapping Rain Water using Auxiliary Arrays approach --------------
time complexity = O(n)
space complexity = O(n)
*/

// function trappingWater(stats) {
//   let sum = 0;
//   const length = stats.length;

//   let leftMax = Array(length);
//   let rightMax = Array(length);

//   leftMax[0] = stats[0];

//   for (let k = 1; k < length; k++) {
//     leftMax[k] = Math.max(stats[k], leftMax[k - 1]);
//   }

//   rightMax[length - 1] = stats[length - 1];

//   for (let k = length - 2; k >= 0; k--) {
//     rightMax[k] = Math.max(rightMax[k + 1], stats[k]);
//   }

//   for (let i = 0; i < length; i++) {
//     sum += Math.min(leftMax[i], rightMax[i]) - stats[i];
//   }

//   //   return sum;
//   console.log(sum);
// }

// trappingWater(stats);

/* ----------------- Trapping Rain Water using Two Pointer approach --------------
time complexity = O(n)
space complexity = O(1)
*/

// function trappingWater(stats) {
//   let sum = 0;

//   let leftMax = 0;
//   let rightMax = 0;

//   let left = 0;
//   let right = stats.length - 1;

//   while (left < right) {
//     if (stats[left] < stats[right]) {
//       // shift the short wall side
//       if (leftMax < stats[left]) {
//         // if current wall is higher then previous leftmax, update leftMax
//         leftMax = stats[left];
//       } else {
//         sum += leftMax - stats[left];
//       }

//       left++;
//     } else {
//       if (rightMax < stats[right]) {
//         //if current wall is higher then previous rightmax, update rightMax
//         rightMax = stats[right];
//       } else {
//         sum += rightMax - stats[right];
//       }

//       right++;
//     }
//   }

//   //   return sum;
//   console.log(sum);
// }

// trappingWater(stats);
