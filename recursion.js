class recursion {
  printNumberInInc(num) {
    if (num == 1) {
      console.log(1);
      return;
    }

    console.log(num);
    this.printNumberInInc(num - 1);
  }

  printNumberInDec(num) {
    if (num == 1) {
      console.log(1);
      return;
    }

    this.printNumberInDec(num - 1);
    console.log(num);
  }

  factorial(num) {
    if (num == 1 || num == 0) return 1;

    return num * this.factorial(num - 1);
  }

  sumOfNums(num) {
    if (num == 1 || num == 0) return 1;

    return num + this.sumOfNums(num - 1);
  }

  fibonacci(n) {
    if (n == 0 || n == 1) {
      return n;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  isArraySorted(arr, index = 0) {
    if (index == arr.length - 1) return true;
    if (arr[index] > arr[index + 1]) return false;
    return this.isArraySorted(arr, index + 1);
  }

  indexOfFirstOccurrence(arr, key, index) {
    if (index == arr.length) return -1;
    if (arr[index] == key) return index;

    return this.indexOfFirstOccurrence(arr, key, index + 1);
  }

  indexOfLastOccurrence(arr, key, index) {
    if (index == arr.length) return -1;

    const isFound = this.indexOfLastOccurrence(arr, key, index + 1);

    if (isFound == -1 && arr[index] == key) return index;

    return isFound;
  }

  powerOfX(num, power) {
    if (power == 1) return num;
    if (power == 0) return 1;

    return num * this.powerOfX(num, power - 1);
  }

  tillingProblem(n) {
    if (n == 0 || n == 1) return 1;

    return this.tillingProblem(n - 1) + this.tillingProblem(n - 2);
  }

  friendsPairing(n) {
    if (n == 1 || n == 2) return n;

    return this.friendsPairing(n - 1) + (n - 1) * this.friendsPairing(n - 2);
  }

  subsetSum(arr, sum, index, subset) {
    if (index == arr.length) {
      subset.add(sum);
      return;
    }

    this.subsetSum(arr, sum + arr[index], index + 1, subset);
    this.subsetSum(arr, sum, index + 1, subset);
  }

  palindromePartitioning2(str) {
    let n = str.length;

    let cuts = Array(n);

    for (let index = 0; index < cuts.length; index++) {
      cuts[index] = index;
    }

    for (let center = 0; center < cuts.length; center++) {
      // expand odd length palindrome
      expand(center, center);

      // expand even length palindrome
      expand(center, center + 1);
    }

    return cuts[n - 1];

    function expand(left, right) {
      while (left >= 0 && right < n && str[left] === str[right]) {
        if (left === 0) cuts[right] = 0;
        else cuts[right] = Math.min(cuts[right], cuts[left - 1] + 1);
        left--;
        right++;
      }
    }
  }
}

const recursionInstance = new recursion();
// let subset = new Set();
// recursionInstance.subsetSum([1, 2, 5], 0, 0, subset);
// console.log(recursionInstance.palindromePartitioning2("abdbdbduiub"));

// console.log([...subset].sort((a, b) => a - b));
