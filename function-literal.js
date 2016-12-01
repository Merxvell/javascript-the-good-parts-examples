//create a variable called add and store a function
//in it that adds two numbers

var add = function(a,b){
	return a+b;
};

//the function object created by a funciton literal contains
//a link to that outer context. THIS IS CALLED CLOSURE

//when a function is NOT the property of an object,
//then it's invoked as a function

var sum = add(3,4); //sum is 7