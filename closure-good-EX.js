//BETTER EXAMPLE
//make a function that assigns event handler nctions to an array of nodes the RIGHT WAY
//when you click on a node, an alert box will display the ordinal of the node

var add_the_handlers = function(nodes){
	var i;
	for(i = 0; i < nodes.length; i += 1){
		nodes[i].onclick = function(i){
			return function(e){
				alert(e);
			};
		}(i);
	}
};