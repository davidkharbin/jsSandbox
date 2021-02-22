// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
  var string = string.toLowerCase();
  var pangram = true;
  var asciis = [];

  // get array of ascii codes
  for (var i = 0; i < string.length; i++) {
    var asciiCode = string.charCodeAt(i);
    asciis.push(asciiCode);
  }

  // see if the ascii code (97 - 122)
  // exist in the array of ascii codes
  for (var j = 97; j <= 122; j++) {
    if (!asciis.includes(j)) {
      pangram = false;
      break;
    }
  }
  return pangram;
};

console.log(isPangram('The QUICK something a SOMETHING SOMETHING!!.'));

console.log(isPangram('the quick brown fox jumps over the lazy dog'));