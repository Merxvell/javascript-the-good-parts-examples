//instead of
var myObect = maker(f, l, m, c, s);

//we can write
//this has affects with JSON objects as well
//arguments can NOW BE LISTED IN ANY ORDER
var myObejct = maker({
	first: f,
	last: l,
	state: s,
	city: c
});