// function* num() {
//   console.log("first");

//   yield 121;

//   console.log("second");

//   yield 2;

//   console.log("third");
//   yield 22;
// }

// let iterator = num();

// console.log(iterator.next());
// console.log(iterator.return("dasf"));

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

let ar = [1, 2, 3, [4, 5, 6], 7, 8, 9];

let obj = {
  _name: "sahil",
  get name() {
    return this._name;
  },

  set name(name) {
    this._name = name;
  },
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
};

// console.log(obj.hasOwnProperty("a"));
console.log(obj._name);
// Object.preventExtensions(obj);
// Object.freeze(obj);

// how to unseal an object

// obj.d = 34;
// console.log(Object.getOwnPropertyDescriptor(obj, "a"));
