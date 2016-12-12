//GLOBAL VARIABLES
//three ways to defien
//place a varstatment outisde of any function
var foo = value;

//add a property directly to the globa ovject. 
//globalobject is the container of all gloabal variables 
//aka
window.foo = value;

//third is to use a variable without declaring it
//this is called IMPLIED GLOBAL
foo = value;



//semicolon insertion
//javascript has a mechanism that tries to correct faulty programs by automatically inserting semicolons
//Consider the consequences of semicolon insertion on the return statement
//if a return statment returns a value, that value expression must begin on the same line as the return

//VALUE DOES NOT START ON THE SAME LINE AS RETURN
return 
{ 
status: true 
}; //returns undefined


//VALUE DOES START ON THE SAME LINE AS RETURN
return {
	status: true
}; //this returns true


//reserved words
/* banned words

abstract boolean break byte case catch char class const continue debugger default
delete do double else enum export extends false final finally float for function goto
if implements import in instanceof int interface long native new null package private
protected public return short static super switch synchronized this throw throws
transient true try typeof var volatile void while with

*/

//when reserved words are used as keys in object literals they must be quoted.
//they CANNOT be used with the dot notation, so it is sometimes necessary to use the bracket notation instead

var method; //ok
var class; //illegal
object = {box: value}; //ok
object = {case: value}; //illegal
object = {'case': value}; //ok
object.box = value; //ok
object.case = value// //illegal
object['case'] = value; //ok

//type of 
//returns a string that identifies the type of it's operand

typeof 98.6 //number
typeof null //this is bad and returns object

//a better test for null is
my_value === null


//this problem comes into occurrence when testing for objectness.
//type of cannot distinguish between null and objects. but YOU can because null is falsy
//all objects are truthy

if(my_value && typeof my_value === 'object')_{
	//my_value is an object or an array!
}

//see "NaN" and "Phony Arrays"

//NaN
//stands for not a number even though
typeof NaN === 'number'; // true

//can be produced by attempting to convert a string to a number when the string
//is not in the form of a number EX
+'0'; //0
+ 'oops'; //NaN

//if NaN is an operand in an arithmetic operation, then NaN will be the result. 
//if you have a chain of formulas that produce NaN at least one of the inputs was NaN

//YOU CAN TEST FOR NaN 

NaN === NaN; //true
NaN !== NaN; //false

//provides an isNaN function that can distinguish between numbers and NaN
isNaN(NaN); //true
isNaN(0); //false
isNaN('oops'); //true
isNaN('0'); //false

//the isFinite function is the best way of determining whether a value can be used as a number because
//it rejects NaN and Infinity. Unfortunately, isFinite will attemp to convert its operand to a number,
//so it is not a good test if a value is not actually a number

//define your own isNumber function as such
var isNumber = function isNumber(value){
	return typeof value === 'number' && isFinite(value);
}

//Phony Arrays
//not a real array which isn't bad or good
//they are slower than real arrays though at the cost of being easy to use
//typeof does not distinguish between arrays and objects. To determine that a value is an array
if(my_value && typeof my_value === 'object' && 
	my_value.constructor === Array){
	//my_value is an array
}

//will give a false negative if an array was created in a different frame or window
//the test can be more reliable when the value might have ben created in another frame

if(my_value && typeof my_value === 'object' &&
		typeof my_value.length === 'number' &&
		!(my_value.propertyIsEnumerale('length')){
			//my_value is TRULY an array!
}


//falsy values
//javascript has a surprisingly large number of them
////////////////////////////////////////////////////
//value 					type
//0							Number
//NaN (not a number)		Number
//''(empty String)			String
//false						Boolean
//null						Object
//undefined					Undefined
////////////////////////////////////////////////////

//wrong wasy to determine if an object is missing a member

value = myObject[name];
if(value == null){
	alert(name + ' not found.');
}

//snippit is testing for null
//using the == operator WHICH DOES TYPE COERCION



//hasOwnProperty
//offered as a filter to work around a problem with the for in statement
//unofrunately, hasOwnProperty is a method, not an operator so in any object
//it could be repalced with a different function of even a value that is not
//a function

var name;
another_stooge.hasOwnProperty = null; //trouble
for(name in another_stooge){
	if(another_stooge.hasOwnProperty(name)){ //boom
		document.writeln(name + ': ' + another_stooge[name]);
	}
}


//Object
//javascripts objects are never truly empty because they CAN pick up numbers from
//the prototype chain. 
//Ex toLowerCase method to normalize text to lowercase, and then use the split method
//with a regexp to produce an array of words. We can then loop through the words and count
//the number of times we see each one.

var i;
var word;
var text = 
			"this oracle of comfort has pleased me, " +
			"That when I am in heaven I shall desire " + 
			"To see what this child does, " +
			"and praise my Constructor.";

var words = text.toLowerCase().split(/[\s,.]+/);
var count = {};
for(i = 0; i < words.length; i+=1){
	word = words[i];
	if(count[word]){
		count[word]+=1;
	}else{
		count[word] = 1;
	}
}

//looking at the results [count'this'] is 2 and count.heaven is 1
//but count.constructor contains a crazy looking string. The reason 
//is that the cound object inherits from Object.prototype and Object.prototype
//contains a member named constructor whose value is Object

//