//make a factorial function with a tail
//recursion. it is tail recursive because
//it returns the result of CALLING ITSELF

//jaavascript does NOT currently optimize this form

var factorial = function factorial(i, a) {
	// body...
	a = a || 1;
	if(i < 2){
		return a;
	}
	return factorial(i - 1, a * i);
};

document.writeln(factorial(4)); //24