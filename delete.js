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
	'first-name': 'John',
	'last-name': 'Howard',
	'nickname': 'Curly'
};

var another_stooge = Object.create(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

document.writeln(another_stooge.nickname); //'moe'


//remove nickname from another_stooge, revealing
//the nickname of te prototype

delete another_stooge.nickname;
document.writeln(another_stooge.nickname); //'Curly'