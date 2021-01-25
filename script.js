var arr = [1, 1, 1, 1];



function minMax(arr) {
	var max = arr[0];
	var min = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return [min, max];
}

console.log(minMax(arr));