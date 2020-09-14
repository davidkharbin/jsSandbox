var output = sumDigits(-316);
console.log(output); // --> 4

var output = sumDigits(1148);
console.log(output); // --> 14

function sumDigits(num) {
  let sum = 0;
  let isNegative = false;
  if (num < 0) {
      isNegative = true;
  }
  
  if (isNegative) {
    let numArray = Array.from(num);
    for (let i = 1; i < numArray.length; i++) {
      sum += numArray[i];
    }
  } else {
    let numArray = Array.from(num);
    for (let i = 0; i < numArray.length; i++) {
      sum += numArray[i];
    }
    
  }

  
}
