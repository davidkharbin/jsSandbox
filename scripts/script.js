
console.log(decipherThis('72olle 103doo 100ya'));
console.log(decipherThis('82yade 115te 103o'));
; // 'Hello good day'
; // 'Ready set go'


function decipherThis(str) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = decoded(word);
  }
  return words.join(' ');


  function decoded(word) {
    var firstLetter = '';
    var secondLetter;
    var lastLetter;
    var decodedWord;
    var i = 0;
    // Get the character code of the first letter
    while (!isNaN(Number(word[i]))) {
      firstLetter += word[i];
      i++;
    }
    word = word.substring(i, word.length).split('');

    firstLetter = String.fromCharCode(firstLetter);
    secondLetter = word[word.length - 1];
    lastLetter = word[0];
    word[0] = secondLetter;
    word[word.length - 1] = lastLetter;
    decodedWord = firstLetter + word.join('');
    return  decodedWord;
  };
};