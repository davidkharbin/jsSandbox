// function removeChar(str){
  
//   let newStr = [];

//   for (let i = 1; i < str.length - 1; i++) {
//     newStr[i - 1] = str[i];
//   }

//   newStr = newStr.join('');
//   console.log(newStr);
//   console.log(typeof newStr);
// };

// removeChar('eloquent');

function removeChar(str) {
  return str = str.slice(1, -1);
}


console.log(removeChar("helloHello"));