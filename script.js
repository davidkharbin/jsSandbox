// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  let palindromesArray = [];  
  
  // split sentence into words
  let wordArray = sentence.split(' ');
  // iterate words and collect the palindromes
  for (let i = 0; i < wordArray.length; i++) {
      let currentWord = wordArray[i];
      if (isPalindrome(currentWord)) {
          palindromesArray.push(currentWord);
      }
      // sort the list of palindromes by word length
      
  }
  
  
  // return the largest item in the sorted list
  let longestPalindrome = palindromesArray[0];
  for (let j = 0; j < palindromesArray.length; j++) {
      if (palindromesArray[j].length >= longestPalindrome.length) {
          longestPalindrome = palindromesArray[j];
      }
  }
  return longestPalindrome;
}

function reverseString(string) {
  let reversedString = string.split("").reverse().join("");
  return reversedString;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  if (reverseString(word).toLowerCase() === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
