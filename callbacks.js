//we want to use an asynchronous function for callbacks 
//so it returns immediately, making sure the client isn't blocked

request = prepare_the_request();
send_request_asychronously(request, function(response){
	display(response)
});