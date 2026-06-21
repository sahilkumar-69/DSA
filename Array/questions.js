// Note the function names are same as question name on leetcode

class questionOn2dArray {
  count = 0;

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

  Count_inversions(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const left = this.Count_inversions(arr.slice(0, Math.ceil(arr.length / 2)));
    const right = this.Count_inversions(arr.slice(Math.ceil(arr.length / 2)));

    return this.merge(left, right);
  }

  merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        this.count += left.length - i;
        j++;
      }
    }
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }

    return result;
    // return this.count;
  }
}
const quesInstance = new questionOn2dArray();

// const result = quesInstance.mergeIntervals([
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ]);

// const result = quesInstance.Find_the_repeating_and_missing_numbers([
//   2, 4, 2, 5, 1,
// ]);

const result = quesInstance.Count_inversions([4, 3, 2, 1, 5]);

console.log(quesInstance.count);
