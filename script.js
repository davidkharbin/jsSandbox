var fun = function (input) {
  console.log(input.toUpperCase());
}


setTimeout(
  function () {
    fun('hi');
  }
  , 2000);