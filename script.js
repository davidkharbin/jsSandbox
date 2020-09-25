// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  // uses sum function
  // returns the average of an array of numbers
  let average = sum(numbers) / numbers.length;
  return average;
}

function sum(numbers) {
  // returns the sum of an array of numbers
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  return sum;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEquals(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log(`Failed: Expected ${expected} but got ${actual} [${testName}]`);
    }
}


// TESTS CASES
let array_1 = [1, 2, 3, 4, 5];
let expected_1 = 3;
let actual_1 = average(array_1);
let testName_1 = 'should equal 3';
assertEquals(actual_1, expected_1, testName_1);



var output = sumDigits(-316);
console.log(output); // --> 4

var output = sumDigits(1148);
console.log(output); // --> 14

function sumDigits(num) {
  let sum = 0;
  let isNegative = false;
  if (num < 0) {
      isNegative = true;
  }
  
  if (isNegative) {
    let numArray = Array.from(num);
    for (let i = 1; i < numArray.length; i++) {
      sum += numArray[i];
    }
  } else {
    let numArray = Array.from(num);
    for (let i = 0; i < numArray.length; i++) {
      sum += numArray[i];
    }
    
  }

  
}
