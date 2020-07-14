let n = 348597;

function digitize(n) {
  return Array.from(String(n), Number).reverse()
};

console.log(digitize(n));