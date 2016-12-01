//BAD EXAMPLE
//make a function that assigns event handler funcctions to an array of nodes the WRONG WAY
//when you click on a node, an alert box is supposed to display the ordinal of the node
//but it ALWAYS displays the number of nodes instead

var add_the_handlers = function(nodes){
	var i;
	for(i = 0; i < nodes.length; i+= 1){
		nodes[i].onclick = function(e){
			alert(i);
		};
	}
};

//END BAD EXAMLE
