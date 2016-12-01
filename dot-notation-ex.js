var empty_object={};

var stooge = {
	"first-name": "John",
	"last-name": "Howard"
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
//RETRIVAL ASPECT
stooge["first-name"] //joe
flight.departure.IATA //SYD

//these will return undefined since the object property doesn't exist
stooge["middle-name"] //undefined
flight.status //undefined
stooge["FIRST-NAME"] //undefined

// can add values to undefined by useing  || operator
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

//trying to recieve undefiend values will throw a TypeError exception. can be avoided with &&
flight.equipment //undefined
flight.equipment.model //throw "TypeError"
flight.equipment && flight.equipment.model //undefined

