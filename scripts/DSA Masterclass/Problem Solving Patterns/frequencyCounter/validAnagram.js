const validAnagram = function(str1, str2){
	if ( str1.length !== str2.length ) return false;

	let counter = {};

	for ( let letter of str1 ){
		counter[letter] ? counter[letter] += 1 : counter[letter] = 1;
	}

	for ( let letter of str2 ){
		if ( !(counter[letter]) ){
			return false;
		}
		counter[letter]--;
	}

	return true;
};

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
validAnagram('awesome', 'awesom') // false