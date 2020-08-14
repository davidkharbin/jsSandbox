var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

function countCharacter(str, char) {
  let count = 0;
  for (i = 0; i < str.length; i++){
      if (str[i] === char){
          count++;
      }
  }
  return count
}