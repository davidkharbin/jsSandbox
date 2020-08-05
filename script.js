var object = {
  key1: [0, 3, 4],
  key2: 'Tovio'
};
console.log('accessing the inner array:', object['key1']);

console.log('value is an array:', Array.isArray(object['key1']));
console.log('value is an array:', Array.isArray(object['key2']));;


