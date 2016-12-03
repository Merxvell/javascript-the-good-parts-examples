//array.concat(item...)
//produces a new array containing a shallow copy of 
//this array with the items APPENEDED

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
//c is ['a', 'b', 'c', 'x', 'y', 'z', true];

//array.join(separator)
//makes a string from an array. 
//does this by making a string of each of the array's eements
//and then CONCATENATING THEM all together witha  separator between
//them. DEFAULT SEPARATOR IS ',' TO JOIN WITHOUT SEPARATION USE AN EMPTY
//STRING AS THE SEPARATOR

var d = ['a', 'b', 'c'];
d.push('d');
var e = d.join(' ');

//array.pop()
//removes and returns the last element in the array
//if element is empty it returns undefined

var f = ['a', 'b', 'c'];
var g = f.pop();

//pop can be implemented as such:
/*
Array.method('pop', function(){
	return this.splice(this.length - 1, 1)[0];
});
*/

//array.push(item...)
//appends items to the end of an array
//unlike concat it MODIFIES THE ARRAY AND APPENDS ITEMS WHOLE
var h = ['a','b','c'];
var i = ['x','y','z'];
var j = h.push(i, true);

//push can be implemented as such
/*
Array.method('push', function(){
	this.splice.apply(
	this,
	[this.length, 0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});
*/


//array.reverse()
//modifies the array by reversing the order of th eements, then returns array
var l = ['a','b','c'];
var m = l.reverse();
//both a and b are ['c', 'b', 'a']

//array.shift()
//removes the first element form an array and returns it.
//if the array is empty, it returns undefined. USUALLY MUCH SLOWER THAN POP

var n = ['a','b','c'];
var o = n.shift();	//n is ['b','c'] o is 'a'

//can be implemented as such
/*
Array.method('shift', function(){
	return this.spice(0, 1)[0];
});
*/

//array.slice(start, end)
//makes a shallow copy of a PORTION of an array
//first element coppied will be array[start] and will stop before copying array[end]
//the end parameter is OPTIONAL and the DEFAULT IS array.length
//if EITHER parameter is negative, array.length will be added to make the NONNEGATIVE
//if start is greater than or equal to array.length, the result will be a NEW EMPTY ARRAY
//DO NOT CONFUSE SLICE WITH SPLICE

var p = ['a', 'b', 'c'];
var q = p.slice(0,1);  // q is ['a']
var r = p.slice(1);	   // r is ['b', 'c']
var s = p.slice(1,2);  // s is ['b']

//array.sort(comparefn)
//sorts the contents of an array inplace
//sorts arrays of numbers INCORRECTLY

var t = [4, 8, 15, 16, 23, 42];
t.sort();
//t is [15, 16, 23, 4, 42, 8]

//this is due to javascripts default comparions function. it assuems that 
//the elements to be sorted are STRINGS. WILL CONVERT NUMBERS TO STRINGS BEFORE
//COMPARING. WRITE YOUR OWN COMPARISON FUNCTION UNLESS IT'S FOR STRINGS ONLY

//will sort numbers BUT NOT STRINGS
t.sort(function (a,b){
	return a - b;
});

//will sort both numbers and strgings
var u = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
u.sort(function(a,b){
	if(a===b){ //if they are equal then return 0, 
		return 0;
	}
	if(typeof a === typeof b){	//if type of are equal
		return a < b ? -1 : 1; //if a is less than b return -1 else return 1 (aka move it up or down 1)
	}
	return typeof a < typeof b ? -1 : 1; //if type of a greater than type of b return -1 else 1 (aka move it up or down 1)
});




