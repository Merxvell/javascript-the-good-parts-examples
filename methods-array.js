Array.prototype.reduce =function (f,value){
	var i;
	for(i=0; i<this.length; i+= 1){
		value = f(this[i], value);
	}
	return value;
};

//create an array
var data = [4,8,15,16,23,42];

//define two simple functions one will add two
//numbers the other will multyiply two numbers

var add = function(a,b){
	return a+b;
};

var mult = function(a,b){
	return a*b;
};

//invoke the data's reduce method, passing in the
//add function.

var sum = data.reduce(add,0); //sum is 108

//invoke the redce method again, this time passing
//in the multiply function

var product = data.reduce(mult, 1);
//prodct is 741880


//give the data array a total function
data.total = function(){
	return this.reduce(add, 0);
};

total = data.total(); //total is 108

