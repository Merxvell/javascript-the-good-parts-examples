//A COMMON ERROR IN JAVASCRIPT PROGRAMS IS TO USE AN OBJECT
//WHEN AN ARRAY IS REQUIRED OR AN ARRAY WHEN AN OBJECT IS REQUIRED
//THE RULE IS AS FOLLOWES
//When the PROPERTY names are SMALL SEQUENTIAL INTEGERS USE AN ARRAY
//OTHERWISE USE AN OBJECT

var is_array function(value){
	return value && typeof value === 'object' &&
		value.constructor === Array;
};

//detects LOCAL arrays

var is_array2 function(value){
	return value &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		typeof value.splice === 'function' &&
		!(value.propertyIsEnumerable('length'));
};

//detects foreign arrays

//order of asking
//is value truthy? (rejects null and other falsy values)
//is the typeof value an object?//true for objects arrays and null)
//ask if the value has a length proepty that is a NUMBER (true for arrays, not usually true for objects)
//ask if the value contains a splice method (true for ALL arrays)
//ask if length is enumerable (false for ALL arrays)