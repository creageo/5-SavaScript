// ex 1
var langue = "fr";
var message = "Bonjour tout le monde";

if(langue === "fr"){
	console.log(message);
} else {
	console.log();
}

// ex 2
var score = 100;
var resultat = score;

if(score < 90){
	console.log("Rang A");
}
if(score >= 90){
	console.log("Rang B");
}
if(score <= 50){
	console.log("Rang C");
}

// ex 3
var singulier = "banane";
var nombre = 4;
var resultat_pluriel = "bananes";

if(nombre > 1){
	console.log("j'ai 4 " + resultat_pluriel);
} else {
	console.log("j'ai une " + singulier);
}