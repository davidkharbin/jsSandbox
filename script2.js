let add = function(a, b) {
  return a + b
}

let multiply = function(a, b) {
  return a * b
}

let randomFunc = function(a, b) {
  console.log(`here are the two arguments ${a} & ${b}`);
}

let calc = function(num1, num2, callback) {
  return callback(num1, num2);
}


console.log(calc(12, 5, randomFunc)); 