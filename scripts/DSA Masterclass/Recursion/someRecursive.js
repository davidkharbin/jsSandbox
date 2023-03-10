const isOdd = val => val % 2 !== 0;

const someRecursive = function(nums, callback){
	if ( nums.length === 0 ) return false;
	if ( callback(nums[0]) ) return true;

	return false || someRecursive(nums.slice(1), callback);
};


console.log(someRecursive([1, 2, 3, 4], isOdd));  // true
console.log(someRecursive([4, 6, 8, 9], isOdd));  // true
console.log(someRecursive([4, 6, 8], isOdd));  // false
console.log(someRecursive([4, 6, 8], val => val > 10));  // false