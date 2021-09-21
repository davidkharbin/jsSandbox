const isPalindrome = function(str){
	let firstLetter = str[0];
	let lastLetter = str[str.length - 1];

	if ( str.length === 1 ) return true;
	if ( firstLetter !== lastLetter ) return false;

	return isPalindrome(str.slice(1, str.length - 1));
};

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar'))  // false
console.log(isPalindrome('tacocat'))  // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
