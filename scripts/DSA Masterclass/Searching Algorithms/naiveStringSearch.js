const naiveStringSearch = function(str, target) {
	let count = 0;

	let start = 0;
	while (start <= (str.length - target.length)) {
		let end = start + target.length;

		if (str[start] === target[0]) {
			if (str.substring(start, end) === target) {
				count++;
				start = end;
			} else {
				start++;
			}
		} else {
			start++;
		}
	}
	return count;
};

console.log(naiveStringSearch('lori loled', 'lol')); // 1