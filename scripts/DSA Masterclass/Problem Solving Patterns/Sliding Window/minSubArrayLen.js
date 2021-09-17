/**
 * I:  [positive integers], positive integer
 * O: integer
 *
 * return the minimal length of a contiguous subarray of which the sum is >= the integer passed in.length
 *
 * return zero if none found
*/


const minSubArrayLen = function(nums, target) {

	let start = 0;
	let end = 0;
	let sum = 0;
	let min = Infinity;

	while (start < nums.length) {
		if (nums[end] >= target) return 1;

		if (sum < target && end < nums.length) {
			sum += nums[end];
			end++;
		}
			else if (sum >= target) {
			min = Math.min(min, end - start);
			sum -= nums[start];
			start++
		  }

		  else { break;}
	}

	return min === Infinity ? 0 : min;
};

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))                      // 2 - [4, 3] is smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))                         // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))     	  // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))         // 5
// console.log(minSubArrayLen([4,  3,  3,  8,  1,  2,  3], 11))            // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))         // 0
