
// =======================================================
// gavanize(learn) scopes and closures slides
// =======================================================

/*
var aHero = function() {
  var heros = [
  'Gal',
  'Guy',
  'SuperMan',
  'SuperWorman',
  'Catwoman',
  'Batman'
];
  return heros[Math.floor(Math.random()*heros.length)];
};

var aDeed = function() {
  var deeds = [
  'Pets',
  'Chases',
  'Fires upon',
  'Kicks'
];
  return deeds[Math.floor(Math.random()*deeds.length)];
};

var aFoil = function() {
  var foils = [
    'Joker',
    'Doggy',
    'Riddler',
    'TwoFace',
    'Crony'
  ];
  return foils[Math.floor(Math.random()*foils.length)];
};

var sagas = [];
var hero = aHero();

var newSaga = function() {
  var foil = aFoil();
  sagas.push(function() {
    var deed = aDeed();
    console.log(`${hero} ${deed} ${foil}`);
  });

};

newSaga();
sagas[0]();
sagas[0]();
newSaga();
*/


// =======================================================
// JavaScript: Understanding the weird parts - closures
// =======================================================

// ============== PART 1  ==============
// var greet = function(greeting) {
//   var age = 39;
//   return function(name) {
//     console.log(greeting + ' ' + name + age);
//   };
// };

// var sayHi = greet('Hello');
// console.log(sayHi);
// sayHi('David');

// ============== PART 2  ==============
var buildFunctions = function() {
  var arr = [];
  for (var i = 0; i < 3; i++) { // on the last iteration, i = 3
    arr.push(function() {
      console.log(i); // this is not being invoked here, it's being passed into the array
    });
  }
  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

var buildFunctions2 = function() {
  var arr = [];
  for (var i = 0; i < 3; i++) { // on the last iteration, i = 3
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )
  }
  return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();