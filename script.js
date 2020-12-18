reduce = function(collection, iterator, accumulator) {
  if (accumulator === undefined) {
    accumulator = collection[0];
  }


  for (var i = 0; i < collection.length; i++) {
    if (iterator(accumulator, collection[i]) === undefined ) {
      continue;
    }
    accumulator = iterator(accumulator, collection[i]);
  }

  return accumulator;

};

  // it('should pass the second item of the array into the iterator first if a memo is not passed in', function() {
    var result = reduce([3, 2, 1], function(memo, item) {
      console.log(item);
      return memo - item;
    });

    // expect(result).to.equal(0);
    console.log(result);
