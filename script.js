
  var getPrefix = function(strNums, n) {
    var arrNums = strNums.split('');
    var numsOnly = [];
    for (let i = 0; i < arrNums.length; i++) {
      if (!isNaN(arrNums[i])) {
        numsOnly.push(arrNums[i])
      }
    }
    return numsOnly.join('').substring(0, n);
  };

  // if (cardNumber.length === 14 && (getPrefix(cardNumber, 2) === '38' || getPrefix(cardNumber, 2) === '39')) {
  //   return 'Diner\'s Club';
  // } else if (cardNumber.length === 15 && (getPrefix(cardNumber, 2) === '34' || getPrefix(cardNumber, 2) === '37')) {
  //   return 'American Express';
  // } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && getPrefix(cardNumber, 1) === '4') {
  //   return 'Visa';
  // } else if (cardNumber.length === 16 && (getPrefix(cardNumber, 2) === '51') || (getPrefix(cardNumber, 2) === '52') || (getPrefix(cardNumber, 2) === '53') || (getPrefix(cardNumber, 2) === '54') || (getPrefix(cardNumber, 2) === '55')) {
  //   return 'MasterCard';
  // }

  let testString = '644-649890123456789';
  console.log(getPrefix(testString, 6))
  // console.log((typeof getPrefix(testString, 4)))

  console.log('5018' > '5017')

  for (let i = '0'; i < '10'; i++) {
    console.log(typeof i);
  }