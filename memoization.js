//THIS METHOD IS INEFFICENT. IT'S CALLED 453 TIMES. 11 from us 442 from computing values
/*var fibonacci = function(n){
	return n < 2 ? n : (fibonacci(n-1) + fibonacci(n - 2)); 
};

for (var i = 0; i <= 10; i++){
	document.writeln('// ' + i + ': ' + fibonacci(i));
}*/


//this variant uses memoization to make it more efficient.
//only called 29 times. 11 by us 18 by memoization
/*var fibonacci2 = function(){
	var memo = [0,1];
	var fib2 = function(n){
		var result = memo[n];
		if(typeof result !== 'number'){
			result = fib2(n-1) + fib2(n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib2;
}();

for (var i = 0; i <= 10; i++){
	document.writeln('// ' + i + ': ' + fibonacci2(i));
}*/

var memoizer = function(memo, fundamental){
	var shell = function(n){
		var result = memo[n];
		if(typeof result !== 'number'){
			result = fundamental(shell, n);
			memo[n] = result;
		}

		return result;
	};

	return shell;
};

var fibonacci2 = memoizer([0,1], function (shell, n){
	return shell(n-1) + shell(n-2);
});

for (var i = 0; i <= 10; i++){
	document.writeln('// ' + i + ': ' + fibonacci2(i));
}

var factorial = memoizer([1,1], function(shell, n){
	return n * shell(n-1);
});

for(var i = 1; i <= 4; i ++){
	document.writeln('// ' + i + ': ' + factorial(i));
}