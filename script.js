var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}


var output = [['name', 'Holly'], ['age', 35], ['role', 'producer']];

console.log(convertObjectToArray(input));

function convertObjectToArray(obj) {

  let outputArray = [];
  let keysArray = Object.keys(obj);
  let valsArray = Object.values(obj);

  for (i = 0; i < keysArray.length; i++){
    outputArray[i] = [keysArray[i], valsArray[i]];
  }

  return outputArray;
  
}