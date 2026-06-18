// Note the function names are same as question name on leetcode

class questionOn2dArray {
  mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
      let next = intervals[i];

      if (current[1] >= next[0]) {
        current[1] = Math.max(current[1], next[1]);
      } else {
        result.push(current);
        current = next;
      }
    }

    result.push(current);

    return result;
  }

  Find_the_repeating_and_missing_numbers(nums) {
    let indexedArray = Array(nums.length + 1).fill(0);

    for (let num of nums) {
      indexedArray[num]++;
    }

    let result = Array(2);

    for (let index = 1; index < indexedArray.length; index++) {
      if (indexedArray[index] == 2) {
        result[0] = index;
      } else if (indexedArray[index] == 0) {
        result[1] = index;
      }
    }

    return result;
  }
}

const quesInstance = new questionOn2dArray();

// const result = quesInstance.mergeIntervals([
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ]);

const result = quesInstance.Find_the_repeating_and_missing_numbers([
  2, 4, 2, 5, 1,
]);

console.log(result);
