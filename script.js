<<<<<<< HEAD
// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log(`Test Name: [${testName}] PASSED!`);
    } else {
        console.log(`Failed: Expected ${expected} but got ${actual}`);
    }
}

// TESTS CASES

// positive
let actual_1 = square(3);
let expected_1 = 9;
assertEqual(actual_1, expected_1, 'Should square a positive integer.');

// negative
let actual_2 = square(-4);
let expected_2 = 16;
assertEqual(actual_2, expected_2, 'Should square a negative integer.');

// zero
let actual_3 = square(0);
let expected_3 = 0;
assertEqual(actual_3, expected_3, 'Should square zero.');

// decimal
let actual_4 = square(0.5);
let expected_4 = 0.25;
assertEqual(actual_4, expected_4, 'Should square a decimal number.');
=======
>>>>>>> 8d3359e553db04c3945c4e8ded5790fe20c6113d
