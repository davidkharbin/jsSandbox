var employeeData = [
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
];


var result = [
  {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
  {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]


function transformEmployeeData(employeeData) {

  let container = [];
  
  for (let i = 0; i < employeeData.length; i++){
    let personArray = employeeData[i];
    let personObject =  {}
    for (let j = 0; j < personArray.length; j++){
      let key = personArray[j][0];
      let value = personArray[j][1];
      personObject[key] = value;
    }
    container.push(personObject);
  }
  return container
}

console.log(transformEmployeeData(employeeData));