const bubbleSort = function(arr) {

	// let wasChanged = false;

	// for (let i = 0; i < arr.length - 1; i++) {
	// 	let currentValue = arr[i];
	// 	let nextValue = arr[i + 1];
	// 	console.log('iteration')
	// 	if (currentValue > nextValue) {
	// 		arr[i] = nextValue;
	// 		arr[i + 1] = currentValue;
	// 		wasChanged = true;
	// 	}

	// }

	// if (wasChanged) {
	// 	bubbleSort(arr)
	// }
	// return arr;

	let noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([1, 6, 3, 2, 66, 12, 31, 989, 21, 29]))

