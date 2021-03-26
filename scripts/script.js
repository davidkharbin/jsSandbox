decodeMorse = function(morseCode){
  var codedWords = morseCode.trim().split('   ');// trim the leading and trailing spaces
  var words = [];

  codedWords.forEach( codedWord => words.push(getWord(codedWord)) );

  return words.join(' ');
}

getWord = function(codedWord) {
  var codedLetters = codedWord.split(' ');
  var decodedWord = '';

  codedLetters.forEach( letter => decodedWord += MORSE_CODE[ letter ] );

  return decodedWord;
}