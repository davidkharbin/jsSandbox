var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2

function getIndexOf(char, str) {
  for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
          return i;
      } else {
        return -1;
      }
  }
}