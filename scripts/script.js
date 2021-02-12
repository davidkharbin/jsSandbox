function mxdiflg(a1, a2) {
  if ((a1.length === 0 || a2.length === 0) || (a1.length === 0 && a2.length === 0)) {
    return -1;
  }

  var longest = a1[0];
  var longest2 = a2[0];
  var shortest1 = a1[0];
  var shortest2 = a2[0];

  for (var i = 0; i < a1.length; i++) {
    if (a1[i].length > longest1.length) {
      longest1 = a1[i];
    }
    if (a1[i].length < shortest1.length) {
      shortest1 = a1[i];
    }
  }

  for (var j = 0; j < a2.length; j++) {
    if (a2[j].length > longest2.length) {
      longest2 = a2[j];
    }
    if (a2[j].length < shortest2.length) {
      shortest2 = a2[j];
    }
  }

  var maxDiffA = Math.abs(longest1.length - shortest2.length);
  var maxDiffB = Math.abs(longest2.length - shortest1.length);


  if (maxDiffA > maxDiffB) {
    return maxDiffA;
  }

  return maxDiffB;

}

var s1 = [];
    var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    console.log(mxdiflg(s1, s2));