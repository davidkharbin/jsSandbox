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

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	let midPoint = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, midPoint));
	let right = mergeSort(arr.slice(midPoint));
	return sortHelper(left, right);
};

console.log(mergeSort([2, 6, 1, 3, 6, 3, 10, 24, 76, 73]));



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
 * =========BIG - O=============
 * log(n) (2 of what power gives us n?)  32 = 2^5
 * space complexity = O(n)...more than other sorts
 * no edgecase of being partially sorted initially, like other sorts
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