class BackRec {
  permutations(nums) {
    // we are using extra space in this approach
    let result = [];
    // -----------approach 1 -----------------
    // let permutation = [];
    // let used = Array(nums.length).fill(false);

    // function findPermutation(index) {
    //   if (permutation.length === nums.length) {
    //     result.push([...permutation]);
    //     return;
    //   }

    //   for (let i = 0; i < nums.length; i++) {
    //     if (used[i]) continue;

    //     used[i] = true;
    //     permutation.push(nums[i]);
    //     findPermutation(i + 1);
    //     permutation.pop();
    //     used[i] = false;
    //   }
    // }

    // -----------approach 2 -----------------
    function findPermutation(index) {
      if (index === nums.length) {
        result.push([...nums]);
        return;
      }

      for (let i = index; i < nums.length; i++) {
        [nums[i], nums[index]] = [nums[index], nums[i]];
        findPermutation(index + 1);
        [nums[index], nums[i]] = [nums[i], nums[index]];
      }
    }

    findPermutation(0);
    return result;
  }
}

let Instance = new BackRec();
console.log(Instance.permutations([1, 2, 3]));
