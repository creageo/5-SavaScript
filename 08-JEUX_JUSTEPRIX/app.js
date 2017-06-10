// juste prix
var texte = "";
var calcul= 0;
var nombre_min= 20;
var nombre_max= 80;

function aleatoire(){
	var context = nombre_min + Math.random() * (nombre_max - nombre_min);
	return Math.round(context);
}

console.log(aleatoire());

let memo = aleatoire();
console.log(memo);

function teste(){
	calcul ++;
	let tries = prompt('ent a num : ');
	console.log(tries);
	if (tries < memo) {
		window.alert("plus");
		teste();
	}
	else if (tries > memo){
		window.alert("moins");
		teste();
	}
	else if(tries == memo){
		window.alert("gagne " + calcul);
		teste();
	}
}

console.log(teste());