const bubbleSort = function(arr) {

	let unchanged;
  for(var i = arr.length; i > 0; i--){
    unchanged = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        unchanged = false;
      }
    }
    if(unchanged) break;
  }
  return arr;
};

console.log(bubbleSort([1, 6, 3, 2, 66, 12, 31, 989, 21, 29]))

