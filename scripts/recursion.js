// // The two approaches:
// var recursiveFunction = function() {
//   return recursiveFunction();
// };

// var recursiveFunction = function() {
//   var someOutputVariable = [];

//   var innerFunction = function() {
//   // Do something, and add something to the closure variable
//   someOutputVariable.push('whatever');
//   };
//   innerFunction();

//   return someOutputVariable;
// }
// ===========================================
        // Anthony P lecture
// ===========================================


// var flatten = function(input) {
//   // Declare a result array
//   var result = [];

//   // If the input is not an array
//   if (!Array.isArray(input)) {
//     //Base Case
//     return input;
//   }

//   // Iterate through the input array
//   input.forEach(function(item) {
//     // Invoke the recursive function (and probably STEP 5 accumulate the result)
//     result = result.concat(flatten(item));
//   });

//   return result;
// };


// var flatten = function(input) {
//   var result = [];

//   var innerFunction = function(array) {
//     if (!Array.isArray(array)) {
//       result.push(array);
//       return;
//     }

//     array.forEach(function(item) {
//       innerFunction(item);
//     });

//   };

//   innerFunction(input);

//   return result;
// };


// console.log(flatten([1, 2, [3, [[4]]], 5]));


// ===========================================
//      Recursion Prompts
// ===========================================

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
// var factorial = function(n) {

//   if (n === 1) {
//     console.log('done');
//   } else {
//     n *= (factorial(n - 1));
//   }

// };

// console.log(factorial(5));

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
// var sum = function(array) {
//   // if (array.length === 0) {
//   //   return;
//   // }

//   if (array.length === 1) {
//     return array[0];
//   }

//   return array[0] + sum(array.slice(1));
// };



// console.log(sum([1, 2, 3, 4, 5, 6]));

function flatten(input) {
  var result = [];

  if (!Array.isArray(input)) {
    return input;
  }

  input.forEach(function(item) {
    result = result.concat(flatten(item));
  });

  return result;
};


console.log(flatten([1, 2, [3, [[4]]], 5, 6]));