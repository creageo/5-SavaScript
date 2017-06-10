// teddy
var liste = ["pomme","poire","prune"];

liste.pop();//retire dernier element
liste.push("fraise");//ajoute un element a la fin

liste.shift();//retire premier element
liste.unshift("fraise");// ajoute un element au debut

for (var i = 0; i < liste.length; i++) {
	console.log(liste[i]);
}

console.log(liste);

console.log(liste[1]);

console.log(liste.length);
console.log(liste[liste.length - 1]);


var list = [
	["mercedes","volvo","porshe"],
	["truc","mush","flush"],
	["danielle","fabrice","nicolas"]
]

console.log(list);



// ex 1
var valeur = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var add = 0;

for(var i = 0; i < valeur.length; i++){
	add = add + valeur[i];
}

console.log(add);

// ex 2
var acteur = ["stalone","depardieu","delon"];
console.log(acteur);

if (acteur[0]) {
	console.log("Le numero 1 est stalone");
}

if (acteur[1]) {
	console.log("Le numero 2 est depardieu");
}

if (acteur[2]) {
	console.log("Le numero 3 est delon");
}


// ex 3
var test = ["Mario", "Luigi", "Peach"];
var test2 = ["Mario", "Luigi", "Peach"];

test2.push("Bowser");

console.log(test);
console.log(test2);

// co 3
var my_hero = ["mario","luigi","peach"];
var my_hero2 = my_hero.slice();

my_hero2.push("bowser");

console.log(my_hero);
console.log(my_hero2);