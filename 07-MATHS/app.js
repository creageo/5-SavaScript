// math

//ex 1
var Mathmin = Math.min (7, 5, -12, 6, 32, 18, 14, -2);
console.log(Mathmin);

var Mathmax = Math.max (-3, 9, 21, 36, 27, 54, 17, 35);
console.log(Mathmax);

console.log(Mathmin + Mathmax);

//ex 2
var floatBateau = 10.4;
console.log(floatBateau);

var couleBateau = Math.floor(floatBateau);
console.log(couleBateau);

var voleBateau = Math.ceil(floatBateau);
console.log(voleBateau);

//ex 3
function getRandomArbitrary(min, max) {
  return Math.random() * (100 - 50) + 50;
}
console.log(getRandomArbitrary());

function getRandomIntInclusive(min, max) {
  max = Math.ceil(1);
  min = Math.floor(0);
  return Math.floor(Math.random() * (max - min +1)) + min;
}
console.log(getRandomIntInclusive());

function getRandomIntInclusive10(min, max) {
  max = 10;
  min = 0;
  return Math.floor(Math.random() * (max - min +1)) + min;
}
console.log(getRandomIntInclusive10());