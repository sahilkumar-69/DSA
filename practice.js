let obj = {};

Object.defineProperty(obj, "name", {
  value: "AS",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getPrototypeOf(obj));
