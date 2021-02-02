var myFunc = function(myStr) {
  console.log(myStr);
  return myStr;
}

setTimeout(function(timeoutArgument) {
  myFunc('Hello World');
}, 1500);