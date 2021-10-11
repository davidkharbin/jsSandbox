const selectionSort = function(arr) {

	for ( let i = 0; i < arr.length; i++ ){
		let min = i;

		for ( let j = i + 1; j < arr.length; j++ ){
			if (arr[j] < arr[min]){
				min = j;
			}
		}
		let cache = arr[i];
		arr[i] = arr[min];
		arr[min] = cache;
	}

	return arr;
};
console.log(selectionSort([15, 44, 32, 39, 24, 10, 4, 47, 3, 29, 34, 29, 43, 32, 45, 1]))

// [1, 3, 4, 10, 15, 24, 29, 32, 32, 34, 39, 43, 44, 45, 47]


// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) swap(arr, i, lowest);
//   }

//   return arr;
// }


// https://stackoverflow.com/questions/872310/javascript-swap-array-elements
// Edit hijacking top answer 10 years later with a lot of ES6 adoption under our belts:

// Given the array arr = [1,2,3,4], you can swap values in one line now like so:

// [arr[0], arr[1]] = [arr[1], arr[0]];
