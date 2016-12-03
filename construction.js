// REGULAR EXRESSION LITERALS ARE ENCOLSED IN SLASHES

//Make a regular rexpression object that matches
//a Javascript string

var my_regexp = /"(?:\\.|[^\\\"])*"/g;

//flag = MEANING
//g = GLOBAL (MATCH MULTIPLE ITEMS: THE PRECISE MEANING OF THIS VARIES WITH THE METHOD)
//i = INSTENSITIVE (IGNORE CHARACTER CASE)
//m = MULTILINE (^ AND $ CAN MATCH LINE-ENDING CHARACTERS)

//make a regular expression object that matches
//a javascript string USING THE RegExp constructor

var my_regexp2 = new RegExp("\"(?:\\.|[^\\\\\\\"])*\"", 'g');

//the RegExp constructor takes a string and compiles it into a RegExp object
//CARE MUST BE TAKEN DUE TO STRINGS AND REGULAR EXPRESSIONS HAVING DIFFERENT
//MEANINGS WHEN USING BACKSLASHES
//USUALLY NECCESSARY TO DOUBLE SLASHES AND QUOTATION MARKS

//RegExp constructor is useful when a regular expression must be generated 
//at RUNTIME USING MATERIAL THAT IS NOT AVAILABLE TO THE PROGRAMMER

//RegExp object properties
//
//property  = use
//global	  = true if g flag was used
//ignoreCase  = true if i falg was used
//lastIndex   = The index at which to start the next exec match, initially it is 0
//multiline   = true if the m flag was used
//source 	  = the source text of the regular expression

//RegExp objects made by REGULAR EXPRESSION LITERALS share the same instance

function make_a_matcher(){
	return /a/gi;
}

var y = make_a_matcher();
var x = make_a_matcher();

//Beware: x and y are the same object!

y.lastIndex;

document.writeln(x.lastIndex); // 10