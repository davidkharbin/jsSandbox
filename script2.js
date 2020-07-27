// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const john = new Person('John', 'Doe', '8/12/90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);


function indexOfString(string1, string2) {
  
  arr1 = Array.from(string1);
  arr2 = Array.from(string2);
  
  for (let i = 0; i < arr1.length || arr2.length; i++){
      if (arr1[i] == arr2[i]) {
          return i;
      }
  }
}