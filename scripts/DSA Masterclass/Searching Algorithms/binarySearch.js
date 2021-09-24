const binarySearch = function(arr, target){
  let left = 0;
	let right = arr.length - 1;

	while ( target > arr[left] && target < arr[right] ){
		let val = Math.floor(( right + left ) / 2);

		if ( arr[val] === target ){
			return val;
		} else if ( arr[val] < target ){
			left = val + 1;
		} else {
			right = val - 1;
		}
	}

	if ( arr[left]  === target ) return left;
	if ( arr[right] === target ) return right;
	return -1;
};


console.log('1', binarySearch([1, 2, 3, 4, 5], 2))  // 1
console.log('2', binarySearch([1, 2, 3, 4, 5], 3))  // 2
console.log('3', binarySearch([1, 2, 3, 4, 5], 5))	 // 4
console.log('4', binarySearch([1, 2, 3, 4, 5], 6))  // -1
console.log('5', binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10))  //  2
console.log('6', binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95))  //  16
console.log('7', binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100))  //  -1


/**
 * binary search must be sorted
 * Big-O (1) = best case (log(n)) = worst/usual case, still very very good
 *
 *
 * use divide and conquer...
 *
 * search for 15...
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 16, 17, 18, 19, 22, 25]
 *  L                          M                               R
 *                           too small
 * [-, -, -, -, -, -, -, -, -, -, 12, 15, 16, 17, 18, 19, 20, 21]
 *                                L           M               R
 *                                           too large
 * [-----------------------------12, 15, 16, -, -, -, -, -, -, -]
 *                               L   M   R
 *                                   |
 *                              found 15!
 */