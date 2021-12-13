// pivot helper
const pivot = (arr, start = 0, end = arr.length - 1) => {
	const swap = (array, idx1, idx2) => {
		[array[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	}

	let pivotVal = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivotVal > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);
	return swapIdx;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIndex - 1);
		// right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
};

let arr = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(quickSort(arr))



/**
 * Like merge sort, use the fact that arrays of length 0 or 1 are already sorted
 *
 * Selects one element, called the pivot, and finding the index where the pivot should end up in the sorted array
 *
 * Once pivot is positioned appropriately, quickSort can be applied on either side of the pivot
 *
 */