var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);

var result3 = measureRequiredFruit({bananas: 2, strawberries: 12});
console.log('should log "We do not have enough of both fruits":', result3);

var result4 = measureRequiredFruit({bananas: 5, strawberries: 8});
console.log('should log "We do not have enough of both fruits":', result4);

var result5 = measureRequiredFruit({bananas: 3, strawberries: 9});
console.log('should log "We do not have enough of both fruits":', result5);



function measureRequiredFruit(fruitTotals) {
  let totalBananas = fruitTotals['bananas'];
  let totalStrawberries = fruitTotals['strawberries'];
  
  if(totalBananas > 3 && totalStrawberries > 10) {
      return `We have enough fruit, with ${totalBananas} bananas, and ${totalStrawberries} strawberries`
  } else {
      return 'We do not have enough of both fruits'
  }
// if there are more than 3 bananas and more than 10 strawberries
  // return 'We have enough fruit, with {totalBananas} bananas, and {totalStrawberries} strawberries'
// otherwise
  // return 'We do not have enough of both fruits'
}