//Create myObject. It has a value and an increment
//method. The increment method takes an optional
//parameter. If the argument is not a number, then 1
//is used as the default

var myObject = {
	value: 0,
	increment: function(inc){
		//get value and store it. if it's a number add newvalue + old otherwise increment old +1
		this.value += typeof inc === 'number' ? inc: 1; 
	}
};
myObject.increment(2);
document.writeln(myObject.value); //3


myObject.increment(5);
document.writeln(myObject.value); //1

myObject.increment();
document.writeln(myObject.value); //1


