const fib = function(n){
	if ( n <= 2 ) return 1;

	return fib(n - 2) + fib(n - 1);
};


console.log(fib(6))