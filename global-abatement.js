var MYAPP = {};

MYAPP.stooge = {
	'first-name': 'Joe',
	'last-name': 'Howard'
};

MYAPP.flight = {
	airline: 'Oceanic',
	number: 815,
	departure: {
		IATA: 'SYD',
		time: '2004-09-22 14:15',
		city: 'Sydney'
	},
	arrival: {
		IATA: 'Lax',
		time: '2004-09-23 10:42',
		city: 'Los Angeles'
	}
};

document.writeln(MYAPP.flight.airline);