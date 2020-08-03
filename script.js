var colors = [
/*0*/  ['red'], 
/*1*/  'orange', 
/*2*/  ['yellow',['green', ['blue']]],
/*3*/   ['indigo', 'violet']];

console.log(colors[2][1][1][0]);//blue
console.log(colors[2][1][0]);//green
console.log(colors[3][0]);//indigo
console.log(colors[1]);//orange
console.log(colors[0][0]);//red
console.log(colors[3][1]);//violet
console.log(colors[2][0]);//yellow