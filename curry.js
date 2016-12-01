var add = function(a,b){
	return a+b;
};


//note javascript does not have a curry method
//to fix this we augment a Function.prototype

//bad ex
//Function.method('curry', function(){
//	var args = arguments, that = this;
//	return function(){
//		return that.apply(null, args.concat(arguments));
//	};
//}); //something isn't right 

//good ex
Function.prototype.method = function(name, func){
	//add a method conditionally
	if(!this.prototype[name]){
		this.prototype[name] = func;
		return this;
	}
};

Function.method('curry', function(){
	var slice = Array.prototype.slide,
	args = slice.apply(arguments),
	that = this;;
	return function(){
		return that.apply(null, args.concat(slice.apply(arguments)));
	};
});

var add1 = add.curry(1);
document.writeln(add1(6)); //7