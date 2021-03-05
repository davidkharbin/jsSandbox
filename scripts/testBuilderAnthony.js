// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'
​
// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
​
const getFirstNDigits = (cardNumber, n) => cardNumber.slice(0, n);
​
const isDinersClub = (cardNumber) => {
  const prefixes = ['38', '39'];
  const firstTwoDigits = getFirstNDigits(cardNumber, 2);
​
  return prefixes.includes(firstTwoDigits) && cardNumber.length === 14;
};
​
const isAmericanExpress = (cardNumber) => {
  const prefixes = ['34', '37'];
  const firstTwoDigits = getFirstNDigits(cardNumber, 2);
​
  return prefixes.includes(firstTwoDigits) && cardNumber.length === 15;
};
​
const isVisa = (cardNumber) => {
  const cardLengths = [13, 16, 19];
  const firstDigit = getFirstNDigits(cardNumber, 1);
​
  return firstDigit === '4' && cardLengths.includes(cardNumber.length);
};
​
const isMasterCard = (cardNumber) => {
  const prefixes = ['51', '52', '53', '54', '55'];
  const firstTwoDigits = getFirstNDigits(cardNumber, 2);
​
  return prefixes.includes(firstTwoDigits) && cardNumber.length === 16;
};
​
const isDiscover = (cardNumber) => {
  const prefixes = ['65', '644', '645', '646', '647', '648', '649', '6011'];
  const cardLengths = [16, 19];
​
  const isValidPrefix = prefixes.some(
    (prefix) => prefix === getFirstNDigits(cardNumber, prefix.length)
  );
​
  return isValidPrefix && cardLengths.includes(cardNumber.length);
};
​
const isMaestro = (cardNumber) => {
  const prefixes = ['5018', '5020', '5038', '6304'];
  const firstFourDigits = getFirstNDigits(cardNumber, 4);
​
  const isValidCardLength = cardNumber.length >= 12 && cardNumber.length <= 19;
​
  return prefixes.includes(firstFourDigits) && isValidCardLength;
};
​
const isChinaUnionPay = (cardNumber) => {
  const firstThreeDigits = getFirstNDigits(cardNumber, 3);
  const firstFourDigits = getFirstNDigits(cardNumber, 4);
  const firstSixDigits = getFirstNDigits(cardNumber, 6);
  const cardLengths = [16, 17, 18, 19];
​
  const isValidPrefix =
    (firstThreeDigits >= 624 && firstThreeDigits <= 626) ||
    (firstFourDigits >= 6282 && firstFourDigits <= 6288) ||
    (firstSixDigits >= 622126 && firstSixDigits <= 622925);
​
  return isValidPrefix && cardLengths.includes(cardNumber.length);
};
​
const isSwitch = (cardNumber) => {
  const prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  const cardLengths = [16, 18, 19];
​
  const isValidPrefix = prefixes.some(
    (prefix) => prefix === getFirstNDigits(cardNumber, prefix.length)
  );
​
  return isValidPrefix && cardLengths.includes(cardNumber.length);
};
​
var detectNetwork = function(cardNumber) {
  if (isDinersClub(cardNumber)) {
    return `Diner's Club`;
  }
​
  if (isAmericanExpress(cardNumber)) {
    return 'American Express';
  }
​
  if (isMasterCard(cardNumber)) {
    return 'MasterCard';
  }
​
  if (isDiscover(cardNumber)) {
    return 'Discover';
  }
​
  if (isMaestro(cardNumber)) {
    return 'Maestro';
  }
​
  if (isChinaUnionPay(cardNumber)) {
    return 'China UnionPay';
  }
​
  if (isSwitch(cardNumber)) {
    return 'Switch';
  }
​
  if (isVisa(cardNumber)) {
    return 'Visa';
  }
​
  return `${cardNumber} is an invalid credit card number!`
};