// Object.prototype
// Person.prototype
















class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
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

console.log(mary);
 f442f5537f83655ce8fe417e4bbc345074d8fea8









 var result1 = generateReportSummary({a_team: 12, b_team: 7, c_team: 0}, 'b_team');
console.log('should log "b_team has surpassed goal with 7 reports":', result1);

var result2 = generateReportSummary({blue: 18, red: 8, green: 12}, 'blue');
console.log('should log "blue has surpassed goal with 18 reports":', result2);

var result3 = generateReportSummary({gamma: 1, epsilon: 3, alpha: 4, bravo: 17}, 'alpha');
console.log('Should log undefined, because function returned nothing:', result3);

function generateReportSummary(reportTotals, teamName) {

  if(reportTotals[teamName] > 5){
    return `${teamName} has surpassed goal with ${reportTotals[teamName]} reports`
  }
  // if teamName's report total is greater than 5
    // return '{teamName} has surpassed goal with {number_of_reports_for_team} reports'
}