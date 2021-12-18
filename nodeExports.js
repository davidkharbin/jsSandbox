let greeting = 'hello world';
let myNumber = '345-3456';

let answer = function(){
	console.log(greeting);
};

let dial = function(number){
	console.log('calling ' + number);
};

module.exports = {greeting, myNumber, answer, dial}