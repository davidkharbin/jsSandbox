var output = findShortestWordAmongMixedElements([4, 'two', 2, 'up', 'three']);
console.log(output); // --> 'two'


function findShortestWordAmongMixedElements(arr) {
  let stringArray = [];
  
  for (let i = 0; i < arr.length; i++){
      if (typeof arr[i] === 'string'){
          stringArray.push(arr[i]);
      }
  }

  if (stringArray.length === 0 || arr.length === 0){
    return ''
  }

  let shortest = stringArray[0];
  for (let j = 0; j < stringArray.length; j++){
    if (stringArray[j].length < shortest.length)
    shortest = stringArray[j];
  }

  

  return shortest
}