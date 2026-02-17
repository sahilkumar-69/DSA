// -----------------------------------------------------------------------

// count the digits of a number
// let number = 987655678;
// function countDigits(number) {

//   number = Math.abs(number);
//   if (number == 0) return 1;

//   number = String(number).replace(".","")

//   let count = 0;
//   while (number > 0) {
//     number = Math.floor(number / 10);
//     count++;
//   }

//   return count;
// }

// console.log(countDigits(number));

// console.log(Math.floor(Math.log10(12345)) + 1)

// function countDigits(n) {
//   // Initialize a variable 'cnt' to
//   // store the count of digits.
//   let cnt = Math.floor(Math.log10(n) + 1);

//   // The expression Math.floor(Math.log10(n) + 1)
//   // calculates the number of digits in 'n'
//   // and rounds it down to the nearest whole number.

//   // Adding 1 to the result accounts
//   // for the case when 'n' is a power of 10,
//   // ensuring that the count is correct.

//   // Return the count of digits in 'n'.
//   return cnt;
// }

// let N = 329.823;
// console.log("N: " + N);
// let digits = countDigits(N);
// console.log("Number of Digits in N: " + digits);
// -----------------------------------------------------------------------
// check if number is pallindrom or not

// let num = 909.909;

// function findPallindrom(n) {
//   const number = n;
//   let reverse = "";
//   while (n > 0) {
//     reverse += n % 10;
//     n = Math.floor(n / 10);
//   }
//   // reverse = Number(reverse);
//   return reverse == number;
// }

// console.log(findPallindrom(num));

// -----------------------------------------------------------------------

 
console.log(2**31);
