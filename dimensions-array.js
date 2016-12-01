Array.dim = function(dimension, initial){
	var a = [], i;
	for(i = 0; i < dimension; i += 1){
		a[i] = initial;
	}
	return a;
};

//make an array containing 10 zeros

var myArray = Array.dim(10, 0);

var matrix = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8]
];

matrix[2][1]; //7

/*
for(i = 0; i < n; i += 1){
	my_array[i] = [];
}
*/
//NOTE: Array.dim(n, []) WILL NOT work here.
//each element would get a reference to the same
//array which would be bac (infinite?).

Array.matrix = function(m, n, initial){
	var a, i, j, mat = [];
	for(i = 0; i < m; i += 1){
		a = [];
		for(j = 0; j < n; j += 1){
			a[j] = initial;
		}
		mat[i] = a;
	}
	return mat;
};

//Make a 4 * 4 matrix filled with zeroes

var myMatrix = Array.matrix(4,4,0);
document.writeln(myMatrix[3][3]); //0

//method to make an identity matrix

Array.identity = function(n){
	var i, mat = Array.matrix(n,n,0);
	for(i = 0; i < n; i += 1){
		mat[i][i] = 1;
	}
	return mat;
};

myMatrix = Array.identity(4);

document.writeln(myMatrix[3][3]); //1