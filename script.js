var resultKeys = getAllKeysAgain({firstScore: {part1: 12, part2: 14, part3: 10}, secondScore: 34, thirdScore: 28}, 'firstScore');
console.log('should log ["par1", "part2", "part3"]:', resultKeys);


function getAllKeysAgain(obj, key) {
  let keys = Object.keys(obj[key]);
  return keys
// create a keys variable
// assign it to an expression which will generate an array of all of the keys located within obj at key
// return to the keys variable
}