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





var hero = aHero();

var newSaga = function() {
  var foil = aFoil();
  var saga = function() {
    var deed = aDeed();
    console.log(`${hero} ${deed} ${foil}`);
  };
  saga();
  saga();
};

newSaga();
newSaga();