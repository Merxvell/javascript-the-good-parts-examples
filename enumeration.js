var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};

var stooge = {
	"first-name": "John",
	"last-name": "Howard"
};

var another_stooge = Object.create(stooge);

//when making changes to an object the prototype is not touched
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';


//no guarantee order of name

var name;
for(name in another_stooge){
	if(typeof another_stooge[name] !== 'function'){
		document.writeln(name+ ': ' + another_stooge[name]);
	}
};

//guarantee names appear in an order

var i;
var properties = [
'first-name',
'middle-name',
'last-name',
'profession'
];

for(i = 0; i < properties.length; i += 1){
	document.writeln(properties[i] + ': ' +
		another_stooge[properties[i]]);
}