// Binary search
// arr must be in sorted order

function binarySearch(arr, target) {
  if (arr.length == 1 && arr[0] !== target) return -1;

  let left = 0;
  let right = arr.length - 1;
  let middle = null;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) return middle;
    else if (arr[middle] < target) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
}

let arr = [1, 2, 4, 5, 6, 9];

console.log(binarySearch(arr, 1));
