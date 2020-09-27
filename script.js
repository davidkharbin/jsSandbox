// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  let letters = word.split('');
  let letterCount = {};

  // Count the instances of each letter
  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    if (letterCount[currentLetter] === undefined) {
      letterCount[currentLetter] = 1;
    } else {
      letterCount[currentLetter]++; 
    }
  };
  
  // Iterate all the counts and find the highest
  let max = 0;
  for (let letter in letterCount) {
    if (letterCount[letter] > max) {
      max = letterCount[letter];
    }
  };

  
  // Return this word's max repeat count
  return max;
}

function findFirstWordWithMostRepeatedChars(text) {
  let maxRepeatCountOverall = 0;
  let wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  text = text.split(' ');

    for (let i = 0; i < text.length; i++) {
      // For each word...
      let repeatCountForWord = findMaxRepeatCountInWord(text[i]);
      // If that max repeat count is higher than the overall max repeat count, then
      if (repeatCountForWord > maxRepeatCountOverall) {
        // update maxRepeatCountOverall
        // update wordWithMaxRepeatCount
        maxRepeatCountOverall = repeatCountForWord;
        wordWithMaxRepeatCount = text[i];
      }
    }
    
  return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED: Expected ${expected}, but got ${actual}`);
  }
}

// TESTS CASES
let input_1 = 'One two three';
let actual_1 = findFirstWordWithMostRepeatedChars(input_1);
let expected_1 = 'three';
let testName_1 = `Should return 'three'`;
assertEqual(actual_1, expected_1, testName_1);

let input_2 = 'Baseball football hockey';
let actual_2 = findFirstWordWithMostRepeatedChars(input_2);
let expected_2 = 'Baseball';
let testName_2 = `Should return 'Baseball'`;
assertEqual(actual_2, expected_2, testName_2);

let input_3 = 'Colorado Mississippi Alaska Montana';
let actual_3 = findFirstWordWithMostRepeatedChars(input_3);
let expected_3 = 'Mississippi';
let testName_3 = `Should return 'Mississippi'`;
assertEqual(actual_3, expected_3, testName_3);
