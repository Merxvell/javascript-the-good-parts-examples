//Augment myObject with a double method


var myObject = {
	value: 0,
	increment: function(inc){
		//get value and store it. if it's a number add newvalue + old otherwise increment old +1
		this.value += typeof inc === 'number' ? inc: 1; 
	}
};

var add = function(a,b){
	return a+b;
};

myObject.double = function(){
	var that = this; //Workaround

	var helper = function(){
		that.value = add(that.value, that.value);
	};

	helper(); //invoke helper as a function
};

//invoke double as a method
myObject.increment(3);
myObject.double();
document.writeln(myObject.value); //6