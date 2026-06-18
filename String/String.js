// function isAnagram(s, t) {
//   const hm1 = new Map();
//   const hm2 = new Map();
//   [
//     { string: s, hm: hm1 },
//     { string: t, hm: hm2 },
//   ].map((e) => {
//     for (let i in e.string) {
//       const isPresent = e.hm.get(e.string[i]);
//       if (isPresent) {
//         e.hm.set(e.string[i], isPresent + 1);
//       } else {
//         e.hm.set(e.string[i], 1);
//       }
//     }
//   });

//   for (let [key, value] of hm1) {
//     if (!hm2.has(key) || hm2.get(key) !== value) {
//       //   console.log(false);
//       return false;
//     }
//   }

//   //   console.log(true);
//   return true;
// }

// const result = isAnagram("anagram", "nagaram");

// console.log(result);

// function name() {}

// const person = {
//   [name]: "person",
// };

// console.log(name);

// function name(string, ...value) {
//   console.log(string);
//   console.log(value);
// }

// name`hello wo${"test"}rld ${"test2"} `;

// function grpoupAnagrams(strs) {
//   const hm = new Map();
//   for (let i of strs) {
//     const sorted = i.split("").sort().join("");
//     if (hm.has(sorted)) {
//       hm.get(sorted).push(i);
//     } else {
//       hm.set(sorted, [i]);
//     }
//   }
//   console.log([...hm.entries()]);
//   console.log(hm.values());
//   return Array.from(hm.values());
// }

// const result = grpoupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

// console.log(result);

// const arr = [1, 2, 3, 4, 4, 5];

// console.log(arr.sort((a, b) => a + b));

// const arr = Array(5)

//   .fill()
//   .map(() => []);

// const arr2 = new Array(5).fill().map(() => []);

// console.log(arr, arr2);

// const hm = new Map();

// hm.set("a", 1);
// hm.set("b", 2);
// hm.set("c", 3);

// console.log(hm.entries());

// for (const u of hm) {
//   console.log(u);
// }

// function topKFrequent(nums, k) {
//   const count = new Map();

//   for (let i of nums) {
//     count.set(i, (count.get(i) || 0) + 1);
//   }

//   const bucket = Array(nums.length + 1)
//     .fill()
//     .map(() => []);

//   for (let [key, value] of count) {
//     bucket[value].push(key);
//   }

//   const result = [];

//   for (let i = bucket.length - 1; i >= 0; i--) {
//     for (let j of bucket[i]) {
//       result.push(j);
//       if (result.length == k) {
//         return result;
//       }
//     }
//   }
// }

// const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);

// console.log(result);

// const arr = [1, 2, 3, 4, 5, 5];

// const set = new Set(arr);

// console.log(set);

// let product = arr.reduce((acc, val) => acc * val, 1);

// function encode(arr) {
//   return arr.reduce((acc, curr) => {
//     return acc + curr.length + "#" + curr;
//   }, "");
// }

// // const result = encode(arr);

// console.log(product, 3 / -1, -1 / 0 , 0 / -4);

// const str = "hello world? hello HELLO ";
// let me = str.match(/hello/);
// // console.log(typeof me, me);

// let text = "G2ive 100%!";
// const pattern = /\d /g;

// let result = text.match(pattern);
// console.log(result);

// console.log('z'.charCodeAt(0))
// console.log('a'.charCodeAt(0))

// const set = new Set();

// set.add([1, 2]);
// set.add([1, 2]);
// if (condition) {
// }
// console.log(set);

// function threesum(nums) {
//   const result = new Set();
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] == 0) {
//           let arr = [nums[i], nums[j], nums[k]];
//           let triStr = arr.sort((a, b) => a - b).toString();

//           result.add(triStr);
//         }
//       }
//     }
//   }

//   return [...result]
//     .map((e) => e.split(","))
//     .map((e) => e.map((i) => parseInt(i)));
// }

// const result = threesum([-1, 0, 1, 2, -1, -4]);

// console.log(result);

// function sum({ a: A }, b) {
//   return A + b;
// }

// const result = sum({ a: 1 }, 2);

// console.log(result);
// const str = [-1, 0, 1, 2, -1, -4].join(",");
// console.log(str);
// console.log(str.split(","));

// const set = new Set();

// function LSWR(s) {
//   const set = new Set();
//   let left = 0;
//   let maxLength = 0;

//   for (let right = 0; right < s.length; right++) {
//     while (set.has(s[right])) {
//       set.delete(s[left]);
//       left++;
//     }

//     set.add(s[right]);

//     maxLength = Math.max(maxLength, set.size);
//   }
//   return maxLength;
// }

// console.log(LSWR('ababab'))

// console.log([1, 2, 4].find((i) => i > 12));

// let o = { a: 1 };

// let input_data;

// process.stdin.on("data", (dt) => {
//   input_data = dt;
// });

// process.stdin.on("end", () => {
//   //   input_data = dt;
//   console.log(input_data);
// });

let array = [2, 3, -45, 6, 7, -99];

let result = "";

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     result += `(${array[i]}, ${array[j]})`;
//   }
//   result += "\n";
// }

let max = -Infinity;
for (let i = 0; i < array.length; i++) {
  // result += `[${array[i]}] `;
  // max = Math.max(max, array[i]);

  for (let j = i + 1; j < array.length; j++) {
    // result += `[`;
    let sum = 0;
    for (let k = i; k <= j; k++) {
      // result += `${array[k]}${k != j ? "," : ""}`;
      sum += array[k];
    }
    max = Math.max(max, sum);
    // sum = 0;
    // result += `] `;
  }
  // result += "\n";
}

// console.log(max);

const Directions = "WNEENESENNN";

class string {
  shortestPath(string) {
    let x = 0;
    let y = 0;
    for (const char of string) {
      switch (char) {
        case "W":
          x++;
          break;
        case "N":
          y++;
          break;
        case "S":
          y--;
          break;
        case "E":
          x--;
          break;
      }
    }

    console.log(Math.sqrt(x ** 2 + y ** 2));
    return Math.sqrt(x ** 2 + y ** 2);
  }
}

// const stringInstance = new string();
// stringInstance.shortestPath(Directions);

console.log(22&1)