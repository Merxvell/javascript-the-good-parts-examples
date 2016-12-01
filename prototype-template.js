if(typeof Object.create !== 'function'){
	Object.create - function(o){
	var F = function(){};
	F.prototy = o;
	return new F();
	};
}
var another_stooge = Object.create(stooge);

//when making changes to an object the prototype is not touched
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

//if desired property exists nowhere in the prototype chain, the result is the undefined value
//THIS IS CALLED DELEGATION

//if we add a new property to a prototype, that property will be visible in all of the objects 
//that are based on that prototype
stooge.profession = 'actor';
another_stooge.profession; //'actor'