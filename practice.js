function Person(name) {
  this.name = name;
}

Person.prototype = {
  custom: "prototype object",
};

const p1 = new Person("sahil");
// console.log(Person.prototype === p1.__proto__);

// console.log(Object.get);

// console.log(p1.greet());

let o1 = {
  fname: "John",
  lname: "Doe",
  printFullName: function () {
    console.log(this.fname + " " + this.lname);
  },
};

let o2 = Object.create(o1);

let s1 = Symbol();

o2.ownname = "o2";
o2.ownnum = "2";
o2[s1] = "symbol prop";

// console.log(Object.getOwnPropertyDescriptors(o1))
// console.log(
Object.defineProperty(o2, "ownnum", {
  enumerable: false,
});
// );

console.log(Object.getOwnPropertySymbols(o2));
