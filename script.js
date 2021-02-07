var _each = function(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  }
  // else {
  //   var obj = collection;
  //   for (var key in obj) {
  //     callback(obj[key], key, obj);
  //   }
  // }
};
var passed = [];
_each([1, 2, 3, 4, 45, 54, 44, 33, 21, 12, 12, 66], function(f, index, a) {
  if (f % 2 === 0) {
    passed.push(f);
  }
});

console.log(passed);