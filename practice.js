let o1 = {
  fname: "John",
  lname: "Doe",
  printFullName: function () {
    console.log(this.fname + " " + this.lname);
  },
};

let o2 = Object.create(o1);

o2.__proto__.fname = "sahil";
// o2.lname = "kumar";

console.log(o2.__proto__);
console.log(o1);
Array(3).fill()