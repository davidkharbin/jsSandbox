function countAllCharacters(string) {
  if(string === '') {
      return {};
  }
  
  let characterObj = {};
  let characterArray = string.split('');

  for(let i = 0; i < characterArray.length; i++) {
    let currentChar = characterArray[i];

    if(characterObj[currentChar] === undefined) {
      characterObj[currentChar] = 1;
    } else {
      characterObj[currentChar]++;
    }
  }
  return characterObj;
}


var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2); 

