// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];
  
  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]))
  }

  console.log(newArray);
  
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n**3;
  });
}
  
// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual,expected, testName) {
  let sameValues = true;
  
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]){
        sameValues = false;
        break;
    }
  }
 
  let sameLength = (actual.length === expected.length);
  
  if (sameValues && sameLength) {
      console.log('passed');    
  } else {
      console.log(`Failed ${testName}`);
  }
}
  
// TESTS CASES
function addOne(val) {
  return val + 1;
}

let mapInput = [1, 2, 3, 4, 5];
let actualMap = map(mapInput, addOne);
let expectedMap = [2, 3, 4, 5, 6];
assertArraysEqual(actualMap, expectedMap, 'should correctly map elements of an array');

let cubeInput = [1, 2, 3, 4, 5];
let actualCube = cubeAll(cubeInput);
let exptectedCube = [1, 8, 27, 64, 125];
assertArraysEqual(actualCube, exptectedCube, 'should correctly cube each element of an array');