//pseudo code template for a functional constructor
/*
var constructor = function(spec, my){
	var that, other private instance variables;
	my = my || {};

	add shared variables and functions to my

	that = a new object;

	add privileged methods to that

	return that;
};

spec object contains all the information that the constructor needs to make an instance
my is a container of secrets shared by the constructors in the inheritance chain
next delcare the private instance variables and private methods
inner functions hava access to spec my that and the priavate variables
next add shared secrets to my objects via

my.member = value

next augment that, adding the privileged methods that make up the object's 
interface

var methodical = function(){
	...
};
that.methodical = methodical;

*/

// Base object constructor function
function base(spec) {
  nn  var that = {}; // Create an empty object
    that.name = spec.name; // Add it a "name" property
    return that; // Return the object
}

// Construct a child object, inheriting from "base"
function child(spec) {
    var that = base(spec); // Create the object through the "base" constructor
    that.sayHello = function() { // Augment that object
        return 'Hello, I\'m ' + that.name;
    };
    return that; // Return it
}

// Usage
var object = child({ name: 'a functional object' });
result.textContent = object.sayHello();