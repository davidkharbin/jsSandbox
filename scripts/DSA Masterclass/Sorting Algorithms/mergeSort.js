const mergeSort = (arr) => {

};

const sortHelper = (leftArray, rightArray) => {
	let results = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
		if (leftArray[leftIndex] < rightArray[rightIndex]) {
			results.push(leftArray[leftIndex]);
			leftIndex++;
		} else {
			results.push(rightArray[rightIndex]);
			rightIndex++;
		}
	}


	const remainingLeftArray = [...leftArray.slice(leftIndex)];
	const remainingRightArray = [...rightArray.slice(rightIndex)];

	if (leftIndex < rightIndex) {
		results = [...results, ...remainingLeftArray];
	} else {
		results = [...results, ...remainingRightArray];
	}

	return results;
};

console.log(sortHelper([1, 3, 5, 7, 9], [2, 4, 5, 6, 8, 10]));
console.log(sortHelper([1, 10, 50], [2, 14, 99, 100]));



/**
 *
 * ==========NOTES==========
 * Combination of merging and sorting
 *
 * Takes advantage of the fact that: Arrays of 0 or 1 element are already sorted
 *
 * Decomposes an array into smaller arrays of 0 or 1 elements, then building up
 * a newly sorted array.
 *
 *First implement a helper function for merging two sorted arrays
 * It should create a new array which is sorted, consisting of all input elements
 * It should not modify it's parameters
 *
 *
 *
 *==========PSEUDOCODE==========
 * 		// create empty array, look at smallest values in each input array
 * 		// while there are still values we haven't seen
 * 				// if the value in the first array  is smaller than the value in the second array,
 * 				    // push the value in the first array into results and go to next val in first array
 *    		// if val in first array is larger than the value in the second array,
 *    		    // push the value in the second array into the results array and go to next in second array
 *
 * 		// when one array is empty, push remaining values from the other array
 */