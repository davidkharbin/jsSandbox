expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  var nums = Array.from(String(num), Number);
  var numStrings = [];

  for (var i = 0; i < nums.length; i++) {
    var zeros = new Array((nums.length - 1) - i).fill(0);
    var num = (`${nums[i]}${zeros.join('')}`);
    if (num > 0) {
      numStrings.push(num);
    }
  }
  return numStrings.join(' + ');
};