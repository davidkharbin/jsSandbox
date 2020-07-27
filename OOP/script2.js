var animalOne = "Dog";
var animalTwo = "Cat";
var animalThree = "Mouse";
animalTwo = animalOne;
animalOne = "Frog";
var str = animalOne.substring(2, 4) + animalTwo.substring(1, 2) + animalThree.substring(animalOne.indexOf('o'), 5);
console.log(str);

console.log(animalOne.substring(2,4));  
console.log(animalTwo.substring(1,2));
console.log(animalThree.substring(animalOne.indexOf('o'), 4));

console.log(animalOne);