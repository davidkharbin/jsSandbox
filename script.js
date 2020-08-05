var holidays = {
  christian: 'Christmas',
  american: ['Memorial Day', 'Labor Day'],
  muslim: 'Ramadan',
  hindu:'Holi'
};

var valueOfAmericanHolidays = holidays.american
console.log('accessing the inner array value:', valueOfAmericanHolidays); //Array>mem day, labor day

var isAmericanValueAnArray = Array.isArray(valueOfAmericanHolidays); 
console.log('american value within holidays is an array:', isAmericanValueAnArray); //true

var valueOfHinduHoliday = holidays['hindu'];
console.log('accessing the value:', valueOfHinduHoliday); //Holil

var isHinduValueAnArray = Array.isArray(valueOfHinduHoliday);
console.log('hindu value within holidays is an array:', isHinduValueAnArray);  //false