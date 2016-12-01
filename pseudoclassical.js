//HIDE UGLINESS BY USING THE method METHOD and defining an inherits method
Function.prototype.method = function(name, func){
	//add a method conditionally
	if(!this.prototype[name]){
		this.prototype[name] = func;
		return this;
	}
};

Function.method('inherits', function(Parent){
	this.prototype = new Parent();
	return this;
});


Function.method('new', function(){

	//Create a new objec that inherits from 
	//the constructor's prototype

	var that = Object.create(this.prototype);

	//Invoke the constructor, binding -this- to
	//the new object

	var other = this.apply(that, arguments);

	//if its return value isn't an object,
	//substitute the new object.

	return (typeof other === 'object' & other) || that;

});

//we can define a constructor and augment is prototype


var Mammal = function(name){
	this.name = name;
};

Mammal.prototype.get_name = function(){
	return this.name;
};

Mammal.prototype.says = function(){
	return this.saying || '';
};

//make an instance

var myMammal = new Mammal('Herb the mammal');
var name = myMammal.get_name(); //'Herb the mamal'

//make antoerh pseudoclass that inherits from Mammal by defining
//its constructor function and replacing it's prototype w/ instance
//of mammal

var Cat = function(name){
	this.name = name;
	this.saying = 'meow';
};

//replace Cat.prototype w/ a new instance of Mammal

Cat.prototype = new Mammal();

//Augment the new prototype with
//purr and get_name methods

Cat.prototype.purr = function(n){
	var i, s ='';
	for(i = 0; i < n; i += 1){
		if(s){
			s += '-';
		}
		s += 'r';
	}
	return s;
};

Cat.prototype.get_name = function(){
	return this.says() + ' ' + this.name +
		' ' + this.says();
};

var myCat = new Cat('Henrietta');
var says = myCat.says(); //'meow'
var purr = myCat.purr(5); //'r-r-r-r-r'
var name = myCat.get_name(); //'meow henrietta meow'

//out inherits and method methods return this, allowing us to program
//in a cascade style

var Cat = function(name){
	this.name = name;
	this.saying = 'meow';
}.
	inherits(Mammal).
	method('purr', function(n){
		var i, s='';
		for(i = 0; i < n; i++){
			if(s){
				s += '-';
			}
			s+= 'r';
		}
		return s;
	}).
	method('get_name', function(){
		return this.says() + ' ' + this.name +
			' ' + this.says();
	});
console.log(myCat);
console.log(says);
console.log(purr);
console.log(name);