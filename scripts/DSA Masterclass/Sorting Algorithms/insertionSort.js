const insertionSort = (arr) => {
	// start with second element
	for ( let i = 1; i < arr.length; i++ ){
		let currentVal = arr[i];

		// compare second element with the one prior, swap as necessary
		let j = i - 1;
		while ( j >= 0 && arr[j] > currentVal ){
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = currentVal;
	};

	return arr;
};
console.log(insertionSort([2, 1, 9, 76, 4]))
console.log(insertionSort([33, 2, 11, 54, 23, 5, 8, 6, 5, 1, 0]))


/**
 * Build up a sort gradually, by creating a larger left half,
 * gradually, which is always sorted
 *
 * (keep one side of the array sorted and insert items
 *  one at a time) if numbers are added in a streaming
 *  fashion
 *
 * Worst case, quadratic...unless already partially sorted
 * to begin with
*/
