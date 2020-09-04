// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
    var doesEveryElementMatch = true;
  
    for (var i = 0; i < array.length; i++) {
      
      if (doesEveryElementMatch === false) {
          return doesEveryElementMatch;
      }
      doesEveryElementMatch = callbackFunction(array[i]);
    }
  
    return doesEveryElementMatch;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertEqual(actual, expected, testName) {
      if (actual === expected) {
          console.log('passed');
      } else {
          console.log(`FAILED [${testName}]: Expected ${expected} but got ${actual}`);
      }
  }
  
  // TESTS CASES
  function lessThan10(val) {
      return val < 10;
  }

  let arrayTrue = [1, 3, 9, 2, 7];
  let actualTrue = every(arrayTrue, lessThan10);
  assertEqual(actualTrue, true, 'should return true when all values are true');

  let arrayFalse = [1, 1, 9, 2, 17];
  let actualFalse = every(arrayFalse, lessThan10);
  assertEqual(actualFalse, false, 'should return false if any array value is false');