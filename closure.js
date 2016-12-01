var myObject = function(){
	var value = 0;

	return {
		increment: function(inc){
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function (){
			return value;
		}
	};
}(); //() RETURNS AN OBJECT CONTAINING TWO METHODS, AND THOSE METHODS CONTINUE TO ENJOY
//THE PRIVILAGE OF ACCESS TO THE VARIABLE




//QUO 2.0
//create a maker function called quo. It makes an
//object with a get_status method and a private 
//status property

var quo = function(status){
	return{
		get_status: function(){
			return status;
		}
	};
};

//make an instance of quo.

var myQuo = quo("amazed");
document.writeln(myQuo.get_status());