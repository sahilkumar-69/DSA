const arr = [9, -3, 3, -1, 6, -5];

let longestSubarray = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j <= arr.length; j++) {
    let localResult = [];
    let localSum = 0;
    let p = i;
    while (p < j) {
      localResult.push(arr[p]);
      localSum += arr[p];
      p++;
    }
    if (localSum == 0) {
      console.log(localResult);
      longestSubarray = Math.max(localResult.length, longestSubarray);
    }
  }
}

console.log(longestSubarray);
