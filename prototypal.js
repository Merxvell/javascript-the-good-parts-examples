//make an object literal to make a useful object
var myMammal = {
	name: 'Herb the mammal',
	get_name : function(){
		return this.name;
	},
	says : function(){
		return this.saying || '';
	}
};

//customize new instances via differential inheritence 
var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow'
myCat.purr = function(n){
	var i, s = '';
	for(i = 0; i < n; i++){
		if(s){
			s+= '-';
		}
		s += 'r';
	}
	return s;
};

myCat.get_name = function(){
	return this.says() + ' ' + this.name + ' ' + this.says();
}

//data structure is inheriting from another data structure
var block = function(){
	//remember the current scope. Make a new scope
	//includes everything form the current one.

	var oldScope = scope;
	scope = Object.create(scope);

	//advance past the left curly brace

	advance('{');

	//parse using the new scope

	parse(scope);

	//advance past the right curly brae and discard the new scope
	//restoring the old one

	advance('}');
	scope = oldScope;
};