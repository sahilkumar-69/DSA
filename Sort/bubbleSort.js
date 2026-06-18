/*
 bubble sort technique
 time complexity O(n^2)
*/

let arr = [3, 2, 4, 6, 4];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwepped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log("outside");
      if (arr[j] > arr[j + 1]) {
        console.log("inside");
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwepped = true;
      }
    }

    if (!isSwepped) break;
  }
}

bubbleSort(arr);

console.log(arr);
