

var test = _.every([2, 4, 5, 6], function(num) {
  return num % 2 === 0;
});

console.log(test);