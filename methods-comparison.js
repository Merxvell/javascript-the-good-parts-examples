//Function by takes a memeber name string and returns
//a comparison function that can be used to sort an
//array of objects that contain that memeber

/*var by = function(name){
	return function(o, p){
		var a,b;
		if(typeof o === 'object' && typeof p === 'object' && o && p){
			a = o[name];
			b = p[name];
			if(a === b){
				return 0;
			}
			if(typeof a === typeof b){
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
		}else{
			throw{

			};
		}
	};
};*/

var s = [
{first: 'Joe', last: 'Besser'},
{first: 'Moe', last: 'Howard'},
{first: 'Joe', last: 'DeRita'},
{first: 'Shemp', last: 'Howard'},
{first: 'Larry', last: 'Fine'},
{first: 'Curly', last: 'Howard'},
];

//s.sort(by('first'));

//the sort method is not stable so
//s.sort(by('first')).sort(by('last'));

//when o and p are equal

var by = function(name, minor){
	return function(o,p){
		var a,b;
		if(o && p && typeof o === 'object' && typeof p === 'object'){
			a = o[name];
			b = p[name];
			if(a === b){
				return typeof minor === 'function' ? minor(o,p) : o;
			}
			return typeof a < typeof b ? -1 : 1;
		}
	};
};
s.sort(by('last', by('first')));