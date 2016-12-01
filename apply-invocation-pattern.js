//Make an array of 2 numbers and add them
var add = function(a,b){
	return a+b;
};

var Quo = function(string){
	this.status = string;
};

//Give all instances of Quo a public method
//called get_status
Quo.prototype.get_status = function(){
	return this.status;
};

//Make an instance of Quo


var array = [5,6];
var sum = add.apply(null, array); //sum is 11

//make an object with a status member

var statusObject = {
	status: 'A-OK'
};

//statusObject does not inherit from Quo.prototype,
//but we can invoke the get_status method on
//statusObject even though statusObject oes not have
//a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
document.writeln(status);
//status is 'A-OK'