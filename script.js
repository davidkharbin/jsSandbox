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