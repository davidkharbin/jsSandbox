// let telephone = require('./nodeExports.js');

// console.log(telephone.myNumber);
// telephone.answer();
// telephone.dial('123-4567');
let _ = require('./lib/underscore.js')
let schools = ['hr', 'ms', 'ta'];

_.each(schools, function(school) {
	console.log(school + ' rules!');
});