var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#*]))?(?:#(.*))?$/;
var url = "https://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

var blanks = '     ';
var i;

for(i = 0; i < names.length; i++){
	document.writeln(names[i] + ':' + blanks.substring(names[i].length), result[i]);
}

//should produce
//url: http://www.ora.com:80/goodparts?q#fragment
//scheme: http
//slash: //
//host: www.ora.com
//port: 80
//path: goodparts
//query: q 
//hash: fragment