const bubbleSort = function(arr){

  let wasChanged = false;

  for ( let i = 0; i < arr.length - 1; i++ ){
    let firstElement = arr[i];
    let nextElement = arr[i+1];

    if ( firstElement > nextElement ){
      arr[i] = nextElement;
      arr[i+1] = firstElement;
      wasChanged = true;
    }

    if ( wasChanged ) {
      return  bubbleSort(arr);
    }
  }

  return arr;
};