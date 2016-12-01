
var foo = function() {
	var a = 3, b = 5;

	//BAR IS VISIBLE
	var bar = function(){
		var b = 7, c = 11;

		//At this point, a is 3, b is 7, and c is 11
		console.log('a is ' + a);
		console.log('b is ' + b);
		console.log('c is ' + c);

		a += b + c;

		//At this point, a is 21, b is 7, and c is 11
		console.log('a is ' + a);
		console.log('b is ' + b);
		console.log('c is ' + c);

		};

		//At this point, a is 3, b is 5, and c is not defiend

		bar();

		//At this point a is 21, b is 5

	};

//BAR IS NOW INVISIBLE TO THE CONSOLE
console.log(foo());
console.log(bar());
