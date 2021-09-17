const averagePair = function(nums, k){
	if ( nums.length === 0 ) return false;

	for ( let i = 0; i < nums.length; i++ ){
		let j = i + 1;

		while ( j < nums.length || ((i + j) / 2) <= k ){
			if ( ((i + j) / 2) === k ) return true;
			j++;
		}
	}
	return false;
};

averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19,], 8)  // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false