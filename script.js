var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2



function getNthElementOfProperty(obj, key, n) {
  if ((obj[key] === undefined) || (obj[key].length === 0 || n > obj[key].length) || (!Array.isArray(obj[key]))){
    return undefined
  }

  return obj[key][1]
}
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2


function getAverageOfElementsAtProperty(obj, key) {
    
  if ((obj.key === undefined) || (obj.key.length === 0) || (!Array.isArray(obj.key))){
      return 0
  }
  
  let sum = 0;
  
  for (let i = 0; i < obj[key].length; i++){
      sum += obj[key][i];
  }
  
  return sum / obj[key].length;
}

