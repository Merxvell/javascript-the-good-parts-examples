//updateing an already existing property
var empty_object={};

var stooge = {
	'first-name': 'John',
	'last-name': 'Howard'
};

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
		time: "2004-09-23 10:42"
		city: "Los Angeles"
	}
};

stooge['first-name'] = 'Jerome';

//if object does not already have that peoprty name the object is augmented
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
	model: 'Boeing 777'
};
flight.status = 'overdue';