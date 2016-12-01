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

typeof flight.number;//'nubmer'
typeof flight.status;//'string'
typeof flight.arrival;//'object'
typeof flight.manifest; //'undefined'

//any property on the prototype change can produce a value
typeof flight.toString; //'function'
typeof flight.constructor; //'function'

//alternatively to check properties of an object use hasOwnProperty
flight.hasOwnProperty('number'); //true
flight.hasOwnProperty('function'); //false