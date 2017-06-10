/*

// while
var int = 0;

while(int <= 20){
	console.log(int);
	int = int + 1;
}

// for
for(var int = 0; int <= 20; int++){
	console.log(int);
}

*/

// ex 1
for (var i = 0; i <= 20; i++) {
	var moduloI = i%2;
	if(moduloI === 0){
		console.log(i + " est pair");
	} else {
		console.log(i + " est impair");
	}
}

// ex 2
for(var int = 0; int <= 10; int++){
	var calcul = int * 9;
	console.log(int + "x 9 = " + calcul);
}

// ex 3
for(var int = 0; int <= 100; int++){
	console.log(int);

	if(int => 0){
		console.log(int + "Rang B");
	}

	if(int => 50){
		console.log(int + "Rang A");
	}

}

// ex 4
for(var int = 0; int <= 4; int++){

	if(int === 0){
		console.log("*");
	}

	if(int === 1){
		console.log("**");
	}

	if(int === 2){
		console.log("***");
	}

	if(int === 3){
		console.log("****");
	}

	if(int === 4){
		console.log("*****");
	}

}