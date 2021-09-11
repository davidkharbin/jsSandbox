let testArr = [1, 3, 0, 3, 3, 44, 5, 1, 2, 3, 5, 6, 7, 7, 7, 8];
let sortedArr = [-2, -1, -1, -1, 0, 1, 2, 3, 3, 3, 4, 9]; //8 ?

const uniqueCount = function(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(arr)
  return i+1;
};

console.log(uniqueCount(sortedArr))
