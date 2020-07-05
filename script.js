// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  // this.hobby = hobby;
  // this.eyeColor = eyeColor;
  // this.hairColor = hairColor;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}



// const dave = new Person('david', 38, 'hockey', 'brn', 'brn');
// const john = new Person('jon');
// const brad = new Person('brad');

// console.log(dave);

const dave = new Person('David Harbin', '12/13/1981');
console.log(dave.calculateAge());