let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(getElementsAfter(arr, 2));

function getElementsAfter(array, n) {
  let newArray = array.slice(n);
  return newArray;
}
