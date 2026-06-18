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

let arr = [2, 1, 3, 2];

// arr.sort((a, b) => b - a);

// console.log(arr);

// function nextPermutation(nums) {
//   let index = -1;

//   for (let i = nums.length - 2; i >= 0; i--) {
//     if (nums[i] < nums[i + 1]) {
//       index = i;
//       break;
//     }
//   }

//   if (index == -1) return nums.sort((a, b) => a - b);

//   for (let i = nums.length - 1; i > index; i--) {
//     if (nums[i] > nums[index]) {
//       [nums[index], nums[i]] = [nums[i], nums[index]];
//       break;
//     }
//   }

//   for (let i = index + 1; i < nums.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[min] > nums[j]) min = j;
//     }
//     [nums[min], nums[i]] = [nums[i], nums[min]];
//   }

//   return nums;
// }

// console.log(nextPermutation(arr));

// const obj = {
//   name: "sahil",
//   printName() {
//     console.log(this.name);
//   },
// };

// obj.printName();
// const print = obj.printName;

// console.log(print === obj.printName);

// print();


