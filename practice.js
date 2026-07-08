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

const value = function named(name, age) {
  console.log("hello", , arguments);
};

value("Alice", 30);

// named();
