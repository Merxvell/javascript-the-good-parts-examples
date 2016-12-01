//OBJECTS ARE NEVER COPIES JUST PASSED BY REFERENCE
 var x = stooge; 
 x.nickname = 'Curly';
 var nick = stooge.nickname;
 //nick is 'curley' because of x and stooge
 //are references of the same object

 var a = {}, b = {}, c ={};
 //a,b and c each refer to a
 //different empty object
 a = b = c = {};
 //a, b, and c all refer to 
 //the SAME empty object