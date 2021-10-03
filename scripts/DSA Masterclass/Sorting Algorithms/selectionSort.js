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
