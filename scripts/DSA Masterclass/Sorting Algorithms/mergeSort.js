const mergeSort = (arr) => {

};

const sortHelper = (arrL, arrR) => {
	let results = [];

	let i = 0;
	let j = 0;

	while (i < arrL.length && j < arrR.length) {
		if (arrL[i] < arrR[j]) {
			results.push(arrL[i]);
			i++;
		} else {
			results.push(arrR[j]);
			j++;
		}
	}

	if (i < j) {
		results.push(...arrL.slice(i));
	} else {
		results.push(...arrR.slice(j));
	}

	return results;
};

console.log(sortHelper([3, 4, 5, 8,], [1, 2, 6, 7]))









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