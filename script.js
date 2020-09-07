// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  let firstName = obj['firstName'];
  let lastName = obj['lastName'];
  let fullName = `${firstName} ${lastName}`;
  if (firstName && lastName) {
    obj['fullName'] = fullName;
  }
  
  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if (actual === expected) {
    console.log('passed');  
  } else {
    console.log(`Failed: [${testName}] expected ${expected} but got ${actual}`);
  }
}

// TESTS CASES
let testObject = {
  firstName: 'David',
  lastName: 'Harbin'
};



let actual = addFullNameProp(testObject);
let expected = {
  firstName: 'David',
  lastName: 'Harbin',
  fullName: 'David Harbin'
};
assertObjectsEqual(actual, expected, 'Should combine first and last name and assign to the fullName key');