

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


  
