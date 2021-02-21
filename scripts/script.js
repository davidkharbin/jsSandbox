// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:

// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.


function multiplicationTable(row,col){
  // create the matrix
  var matrix = [];
  for (var i = 0; i < row; i++) {
    matrix.push(new Array(col));
  }

  // populate the first row
  for (var j = 0; j < col; j++) {
    matrix[0][j] = j + 1;
  }

  // populate the other rows
  for (var k = 1; k < matrix.length; k++) {
    for (var m = 0; m < col; m++) {
      matrix[k][m] = (matrix[0][m]) * (k+1);
    }
  }
  return matrix;
}


console.log(multiplicationTable(8, 3));