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

  Count_Reverse_Pairs(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] > 2 * nums[j]) {
          this.count++;
        }
      }
    }
    return count;
  }

  Longest_Subarray_with_Sum_K(arr, k, approach) {
    switch (approach) {
      case "brute_force":
        // Implementation for brute force approach
        let longestSubarray = 0;
        for (let i = 0; i < arr.length; i++) {
          let localSum = arr[i];
          for (let j = i + 1; j <= arr.length; j++) {
            localSum += arr[j];

            if (localSum == k) {
              longestSubarray = Math.max(j - i + 1, longestSubarray);
            }
          }
        }
        return longestSubarray;
        break;
      case "hash_map":
        // Implementation for hash map approach
        let map = new Map();
        let longest = 0;
        let sum = 0;

        for (let num = 0; num < arr.length; num++) {
          sum += arr[num];

          if (sum == k) longest = num + 1;

          const need = sum - k;

          if (map.get(need)) longest = Math.max(map.get(need) + 1, longest);
          map.set(sum, num);
        }

        return longest;
        break;
      default:
        throw new Error("Invalid approach");
    }
  }

  Number_of_Subarrays_with_xor_K(arr, k, approach) {
    switch (approach) {
      case "brute_force":
        // Implementation for brute force approach
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
          let localSum = arr[i];
          for (let j = i + 1; j <= arr.length; j++) {
            localSum ^= arr[j];

            if (localSum == k) {
              counter++;
            }
          }
        }
        return counter;
        break;
      case "hash_map":
        // Implementation for hash map approach
        let map = new Map();
        map.set(0, 1);
        let count = 0;
        let xor = 0;

        for (let num = 0; num < arr.length; num++) {
          xor ^= arr[num];

          const need = xor ^ k;

          if (map.get(need)) count += map.get(need);

          map.set(xor, (map.get(xor) || 0) + 1);
        }

        return count;
        break;
      default:
        throw new Error("Invalid approach");
    }
  }

  // find pair with sum = target in sorted and rotated array;
  pairSum2(arr, target) {
    let bp = null;
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        bp = i;
        break;
      }
    }

    let lp = bp || 0;
    let rp = bp ? bp - 1 : n - 1;

    while (lp !== rp) {
      let sum = arr[lp] + arr[rp];
      console.log(arr[lp], arr[rp]);
      if (sum === target) return true;
      else if (sum < target) lp = (lp + 1) % n;
      else rp = (rp + n - 1) % n;
    }

    return false;
  }
}
const quesInstance = new questionOn2dArray();

const result = quesInstance.pairSum2(
  [5, 6, 7, 8, 9],

  21,
);

console.log(result);
