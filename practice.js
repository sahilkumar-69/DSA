const arr = [10, 20, 30];

arr.name = "MyArray";

arr[-1] = 100;

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());

// for (const key of arr.keys()) {
// console.log(Object.entries(Object.prototype));
// }
