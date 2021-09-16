const maxSubarraySum = function(nums, k) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let max = nums.slice(0, k).reduce(reducer);
  let tempMax = max;
  let j = k;

  for ( let i = 0; j < nums.length; i++ ){
    tempMax -= nums[i];
    tempMax += nums[j];

    if (tempMax > max){max = tempMax}
    j++;
  }
  console.log(max)
  return max;
};

maxSubarraySum([100, 200, 300, 400], 2); //700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); //39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); //5