function averagePair(nums, k){
  for (let i = 0; i < nums.length - 1; i++){
      let j = i + 1;
      while (j < nums.length || ((i + j) / 2) <= k){
          if ( ((i + j) / 2) === k){
              return true;
          }
          j++;
      }
  }

  return false;
}