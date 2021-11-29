













// pivot helper
const pivot = (arr, beginIdx = 0, endIdx = arr.length - 1) => {
	const swap = (array, idx1, idx2) => {
		[array[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	}

	let pivotVal = arr[beginIdx];
	let swapIdx = beginIdx;

	for (let i = beginIdx + 1; i < endIdx; i++) {
		if (pivotVal > arr[i]){
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
}

let arr = [4, 8, 2, 1, 5, 7, 6, 3];
pivot(arr)
console.log(arr)



/**
 * Like merge sort, use the fact that arrays of length 0 or 1 are already sorted
 *
 * Selects one element, called the pivot, and finding the index where the pivot should end up in the sorted array
 *
 * Once pivot is positioned appropriately, quickSort can be applied on either side of the pivot
 *
 */