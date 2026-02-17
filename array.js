// var removeDuplicates = function (nums, val) {
//   let p1 = 0;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[p1] !== nums[i]) {
//       nums[p1 + 1] = nums[i];
//       //   nums[i] = "_";
//       p1++;
//     }
//   }

//   console.log(p1 + 1);
// };
// let nums = [1, 1, 1, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 7, 7, 7];
// removeDuplicates(nums);

// console.log(nums);
// 6
// [
//   1, 3, 4, 5, 6, 7,
//   4, 4, 4, 4, 5, 5,
//   6, 7, 7, 7
// ]

// -----------------------------------------------------------------------------------

// let nums = [1, 1, 1, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 7, 7, 7];

// var removeElement = function (nums, val) {
//   let p1 = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (val !== nums[i]) {
//       nums[p1] = nums[i];
//       p1++;
//     }
//   }

//   console.log(p1);
// };

// removeElement(nums, 7);
// console.log(nums);

let arr = [9, 3, 2, 8, 1, 0, 4];

arr.sort((a, b) => b - a);

console.log(arr);
