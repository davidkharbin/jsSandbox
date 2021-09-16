const maxSubarraySum = function(nums, k){
  if ( nums.length < k ) return null;

  let max = 0;
  for ( let i = 0; i < k; i++ ){
    max += nums[i];
  }

  let currentMax = max;
  for ( let i = k; i < nums.length; i++ ){
    currentMax += nums[i] - nums[i - k];
    if ( currentMax > max ) max = currentMax;
  }
  return max;
};
