Function.prototype.method = function(name, func){
	//add a method conditionally
	if(!this.prototype[name]){
		this.prototype[name] = func;
		return this;
	}
};

String.method('deentityify', function(){
	//The entity table. It maps entity names to
	//characters

	var entity = {
		quot: '"', 
		lt: '<',
		gt: '>'
	};
	//return th deentifying method
		return function(){

	//return deentifying method. It calls the sring
	//replace method, looking for substrings that start
	//with '&' and end with ';'. If the characters in 
	//between are in the entity table, then replace the 
	//entity with the characteer from the table. It uses
	//a regular expression

	return this.replace(/&([^&;]+);/g,
		function(a, b){
			var r = entity[b];
			return typeof r === 'string' ? r : a;
			}
		);
	};
}());

document.writeln('&lt;&quot;&gt;'.deentityify()); //<">