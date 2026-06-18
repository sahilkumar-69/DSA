// counting sort algo | O(n + range)
// good for short range of numbers;
function countingSort(nums) {
  let largest = -Infinity;

  for (let num of nums) {
    largest = Math.max(num, largest);
  }
  let count = new Array(largest + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    while (count[i] > 0) {
      nums[j] = i;
      count[i]--;
      j++;
    }
  }

  console.log(nums);
}

let nums = [3, 2, 3, 5, 6, 0, 0];

countingSort(nums);
