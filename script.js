var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);

function isAnObject(input) {
    
    isObject = tyepof input === "object";
    isNotAnArray = (!Array.isArray(object));
    
    return isObjectAndNotAnArray = (isObject && isNotAnArray);
    
  // create an isObject variable
  // assign it to whether the input is an object type
  // create an isNotAnArray variable
  // assign it to whether the input is not an array
  // create an isObjectAndNotAnArray variable
  // assign it to a combination of isObject AND isNotAnArray
  // return the isObjectAndNotAnArray variable
};