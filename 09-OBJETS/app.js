// objet
/*
//ex teddy
var Dan = {
	age : 17,
	sexe : "Femme",
	musiques : ["simple red","jlo","kim"]
};

console.log(Dan);

var color = "black";

var table = {
	color : color,
	feets : 4,
	objects : ["papier", "telecomande"],
	tape : function(){
		console.log("tap !");
	}
};

console.log(table);
console.log(table.feets);


var prenom = "geoffrey";

console.log(window.prenom);
console.log(window.String);
*/

// ex 1

var Character = {
	name : "nemo",
	age : 5,
	items_to_give : ["nage", "parle"],
	giveItem : function(){
		var result = Math.round(Math.random()*1);
		console.log(Character.items_to_give[result]);
	}
};

for (let keys in Character) {
	console.log(Character[keys]);
};

Character.giveItem();