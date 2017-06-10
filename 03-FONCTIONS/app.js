//js
var resultat;

	resultat = "hello world";

	resultat = "bonjour";

	resultat = 200;

//php
$resultat = "hello world";

$resultat = "bonjour";

// exemple
function faitquelquechose(){
	var ville = "bruxelles";
	console.log(ville);
}

var maFonction = function(){
	var pays = "belgique";
	console.log(pays);
}

maFonction();
faitquelquechose();

// ex 1
var foncsous = function(a, b){
	var sous = a - b;
	console.log(sous);
}
var resusous = foncsous(10, 5);

var foncdivi = function(a, b){
	var divi = a / b;
	console.log(divi);
}
var resudivi = foncdivi(10, 5);

var foncmult = function(a, b){
	var mult = a * b;
	console.log(mult);
}
var resumult = foncmult(10, 5);

var foncpour = function(a, b){
	var pour = a / 100 * b;
	console.log(pour);
}
var resupour = foncpour(100, 15);

var foncvite = function(a, b){
	var vite = (a / b) + "/kmh";
	console.log(vite);
}
var resuvite = foncvite(200, 2);