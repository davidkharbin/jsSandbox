// const findLongestSubstring = function(str) {
// 	let longest = 0;
//   let seenLetters = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
// 		if ( (str.length - start) < longest) break;

//     let letter = str[i];
//     if (seenLetters[letter]) {
//       start = Math.max(start, seenLetters[letter]);
//     }

//     longest = Math.max(longest, i - start + 1);

//     seenLetters[letter] = i + 1;
//   }
//   return longest;
// };

// console.log(findLongestSubstring('thecatinthehat'));

function productOfArray(arr) {
	if ( arr.length === 0) return 0;

	return arr[0] + productOfArray(arr.slice(1))
}
console.log(productOfArray([1, 2, -3, 4, 5, 6]))
 // 21