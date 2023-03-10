const capitalizeFirstTwoArgs = function(words, caps){
	caps = caps || [];
	if ( words.length === 0 ) return;

	caps.push(`${words[0][0].toUpperCase()}${words[0].slice(1)}`);
	capitalizeFirstTwoArgs(words.slice(1), caps);
	return caps;
};

const capitalizeFirst = function(words){
	if ( words.length === 0 ) return [];
	let caps = [];

	caps.push(`${words[0][0].toUpperCase()}${words[0].slice(1)}`);
	return caps.concat(capitalizeFirst(words.slice(1)));
};

console.log(capitalizeFirstTwoArgs(['car', 'taco', 'banana'])); // ['Car', 'Taco', 'Banana']
console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car', 'Taco', 'Banana']