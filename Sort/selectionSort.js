/*
 Selection sort technique
 time complexity O(n^2)
*/
function selectionSort(arr) {
  let temp = null;
  for (let counter = 0; counter < arr.length - 1; counter++) {
    let min = counter;
    for (let i = counter + 1; i < arr.length; i++) {
      if (arr[i] < arr[min]) min = i;
    }
    temp = arr[counter];
    arr[counter] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(selectionSort([3, 2, 5, 1, 8, 7]));