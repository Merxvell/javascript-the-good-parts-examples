Function.prototype.method = function(name, func){
	//add a method conditionally
	if(!this.prototype[name]){
		this.prototype[name] = func;
		return this;
	}
};

//by augmenting Function.prototype with a method method
//we no longer have to type the name of the prototype property

//extract an integer type of a number by doing the following
Number.method('integer', function(){
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

document.writeln((-10/3).integer()); // -3

//method to remove spaces from the end of the string
String.method('trim', function(){
	return this.replace(/^\s+\s+$/g, '');
});

document.writeln('"' + "	neat	".trim() + '"');

