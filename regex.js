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

//URL: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#*]))?(?:#(.*))?$/;
//(?:...) INDICATES A NONCAPTURING GROUP ? MEANS GROUP IS OPTIONAL
//(...) = captuering class  [...] = character group
//character class A-Za-z 
// + INDICATES THAT THE CHARACTER CLAS WILL BE MATCHED ONE OR MORE TIMES
//followed by : which will be MATCHED LITERALLY

//SCHEME: (?:([A-Za-z]+):)?

//SLASH: (\/{0,3})
//  \/ indicates taht a /(slash) character should be matched, escaped with \(backslash)
// {0,3} indicates that the / will be matched 0 or 1 or 2 or 3 times

//HOST:([0-9./A-Za-z]+)
//this captures host name which is 

//PORT:(?::(\d+))
//:.\d represents a digit character 

//PATH:(?:\/([^?#]*))?
//Character class [^?#] indicates that the class includes ALL characters except ? and #
//* indicates that the character class is matched 0 or more times


//QUERY(?:\?([^#]*))?
// zero or more characters that aren't #

//HASH:(?:#(.*))?
//. will match any character except the line-ending character: $


var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

var test = function(num){
	document.writeln(parse_number.test(num));
};

test('1');
test('number');
test('98.6');
test('123.21.86.100'); 
test('123.45E-67'); 
test('123.45D-67');
//parse number breakdown

// /^ $/i 	tells if string only gives a number 
//just the ^ means it would match strings STARTING with a number
//just a $ would match strings ENDING with a number
//-? this indicstes taht the minus sign is optional:
//\d+ ... \d = [0-9]. it matches a digit, the suffix causes it to match one or more digits
//(?:\.\d*)?
//(?:...?) indicates the first operational noncapturing group
//will match a decimal followed by zero or more digits
//(?:e[+\-]?\d+)?
//another optional noncapturing group
//matches e (or E), an optional sign, and one or more digits











