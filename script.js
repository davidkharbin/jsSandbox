
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

var output = greetCustomer('Carrie');
console.log(output);


function greetCustomer(firstName) {
  if (customerData[firstName] === undefined){
      return 'Welcome! Is this your first time?';
  }
  
  // var visitsObject = customerData[firstName];
  if (customerData[firstName]['visits'] === 1){
      return "Welcome back, " + firstName + "! We're glad you liked us the first time!";
  } else {
      return "Welcome back, " + firstName + "! So glad to see you again!";
  }
}