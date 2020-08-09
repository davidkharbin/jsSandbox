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



var result1 = createSentence(['I', 'am', 'worth', 'it']);
console.log('should log "I am worth it.":', result1);

var result2 = createSentence(['My', 'problems', 'matter']);
console.log('should log "My problems matter.":', result2);





function createSentence(words) {
  
  var sentence = "";

  for (var i = 0; i < words.length; i++) {
    // hint: does this line need to happen every iteration?    
    if(i < words.length - 1){
      sentence += words[i] + ' ';
    }
    

  if (i === words.length - 1){
    sentence += words[i] +'.';
  }
        
  }
    return sentence;
}


  
