// pendu
var target = ['B','O','N','J','O','U','R',];
console.log(' target ' + target);

var guessed = ['','','x','','','','_'];
console.log(' guessed ' + guessed);

var guessLetter = function(x){

	for (let i = 0; i < target.length; i++) {

		if (x === target[i]) {

			guessed.splice(i,1,x);
			console.log(guessed);
	}
}
}

if (guessed[0]!='' && guessed[1]!='' && guessed[2]!='' && guessed[3]!='' && guessed[4]!='' && guessed[5]!='' && guessed[6]!=''){
	console.log('Winner');
}

guessLetter();

console.log(window);