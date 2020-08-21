var output = convertScoreToGrade(91);
console.log(output); // --> 'A'


function convertScoreToGrade(score) {
  if (score > 100 || score < 0){
      return 'INVALID SCORE'
  }
  let grade = '';
  switch (score) {
      case (score <= 100 || score >= 90):
          grade = 'A';
          break;
  }
  
  return grade
}