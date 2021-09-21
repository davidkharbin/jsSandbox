const flatten = function(arr){
	let results = [];

	for ( let i = 0; i < arr.length; i++ ){
		if (Array.isArray(arr[i])){
			results = results.concat(flatten(arr[i]));
		} else {
			results.push(arr[i]);
		}
	}

	return results;
};

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))// [1, 2, 3]
