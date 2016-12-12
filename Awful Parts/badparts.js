// ==

//REASON TO NOT USE THIS
// === AND !== CHECK FOR TRUE FALSE
// == AND != ALSO CHECK BUT TRY TO COERCE THE VALUES 

'' == '0'; //false
0 == ''; //true
0== '0'; //true

false == 'false'; //false
false == '0'; //true

false == undefined; //false
false == null; //false
null == undefined; //true

' \t\r\n ' == 0; //true

//all comparisons above are false with === operator

//with statement
//was intended to provide a shorthand when accessing the properties of an object
//Unfortunately its results can sometimes be unpredictable so it should be avoided

//the statment
with(obj){
	a = b;
}

//does the same thing as
if(obj.a === undefined){
	a = obj.b === undefined ? b : obj.b;
}else{
	obj.a = obj.b === undefined ? b : obj.b;
}

// so it's the same as one of the following
a = b;
a  = obj.b;
obj.a = b;
obj.a = obj.b;

//NOT POSSIBLE TO TELL FROM READING THE PROGRAM WHAT STAMENT YOU WILL GET
//CAN VARY FROM ONE RUN TO NEXT
//CAN VARY WIHTIN THE SAME RUN 
//CANNOT BE SURE IT'LL DO WHAT YOU WANT CORRECTLY


//EVAL
//passes a string to the javascript compiler and executes the result
//THE SINGLE MOST MISUED FEATURE OF JAVASCRIPT
//ex

eval("myValue = myObject." + myKey + ";");
//instead write
myvalue = myObject[myKey];

//eval is much harder to read
//will be significantly slower because it needs to run the compiler just to execute
//a trivial assignent statement

//block statments
//if you can use a block statment use a block statment 
//examples
if(ok)
	t = true;

//can be come
if(ok)
	t = true;
	advance();

//which looks like
if(ok){
	t - true;
	advance();
}

//BUT ACTUALLY MEANS
if(ok){
	t = true;
}
advance();


//bitwise operators
//javascript has the same set of bitwise operators as java
/*
&	and
!	or
^	xor
~	not
>>	signed right shift
>>>	unsigned right shift
<<	left shift
*/
//in java bitwise operators work with integers. JAVASCRIPT DOESN'T HAVE INTEGERS 
//JAVASCRIPT HAS DOUBLE PRECISION FLOATING-POINT NUMBERS
//VERY FAR FROM HARDWARE AND VERY SLOW

//Function statment versus the function expression
//javascript has a function statment as well as a function expression.
//this is confusing because they can look exactly the same
//a function statment is shorthand for a var statment with a function value

//the statment

function foo(){};

//means about the same thing as

var foo = function foo(){};

//please note FUNCTIONS ARE VALUES
//function statments are subject to HOISTING
//hoisting
//regarldess of where a function is placed, IT IS MOVED TO THE TOP OF THE SCOPE IN WHICH IT'S DEFIEND
//relaxes the requirement of "functions should be declared before use" which can lead to sloppy code

//prohibits the use of function statments in if statments
//turns out that most browsers allow funtion statments in if statments, but they vary in how that should be
//interpreted. This creates a portability problem

//First thing in a statement cannot be a function expression because the official
//grammer assumes that a statement that STARTS with the word FUNCTION is a function statment.\
//the workaround is to wrap the function expression in parenthesis

(function(){
	var hidden_variable;
	//this function can have some impact on
	//the enviroment, but introduces no new
	//global variables
})();



//typed wrappers
//example

new Boolean(false);

//can be confusing
//odn't use new boolean, number or string.
//also avoid new object and new array use {} and [] instead


