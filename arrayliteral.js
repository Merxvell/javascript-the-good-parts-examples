var empty =[];
var numbers = [
'zero', 'one', 'two', 'three', 'four', 
'five', 'six', 'seven', 'eight', 'nine'];

empty[1]; //undefined
numbers[1]; //'one'

empty.length; //0
numbers.length; //10

//The object literal proces a same result
var numbers_object = {
	'0': 'zero','1': 'one','2': 'two',
	'3': 'three', '4': 'four','5': 'five',
	'6': 'six','7': 'seven','8': 'eight',
	'9': 'nine'
};

//difference
//numbers inherits from Array.prototype
//numbers_object inherits from Object.prototype

var misc = [
	'string', 98.6, true, false, null, undefined,
	['nested', 'array'], {object: true}, NaN, Infinity];

numbers.length = 3;
//numbers is ['zero', 'one', 'two']
numbers[numbers.length] = 'shi';
//numbers is ['zero', 'one', 'two','shi']
numbers.push('go');
//numbers is ['zero', 'one', 'two','shi', 'go']

delete numbers[2];
//numbers is ['zero', 'one', undefined,'shi', 'go']
//THIS IS BAD

numbers.splice(2,1);
//numbers is['zero', 'one','shi', 'go']
//THIS IS GOOD