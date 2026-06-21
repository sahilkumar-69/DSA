const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

class twoDArray {
  spiralPrint(matrix) {
    // spiral print
    let rs = 0;
    let re = matrix.length - 1;
    let cs = 0;
    let ce = matrix[0].length - 1;

    while (rs <= re && cs <= ce) {
      for (let i = cs; i <= ce; i++) {
        console.log(matrix[rs][i] + " - 1");
      }
      for (let i = rs + 1; i <= re; i++) {
        console.log(matrix[i][ce] + " - 2");
      }
      for (let i = ce - 1; i >= cs; i--) {
        console.log(matrix[re][i] + " - 3");
      }
      for (let i = re - 1; i >= rs + 1; i--) {
        console.log(matrix[i][cs] + " - 4");
      }

      rs++;
      re--;
      cs++;
      ce--;
    }
  }

  diagonalSum(matrix) {
    // diagonal sum | O(n^2)
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i == j) {
          sum += matrix[i][j];
        } else if (i + j == matrix.length - 1) {
          sum += matrix[i][j];
        }
      }
    }
    console.log(sum);

    // diagonal sum | O(n)

    // let sum = 0;
    // for (let i = 0; i < matrix.length; i++) {
    //   sum += matrix[i][i];

    //   if (i != matrix.length - 1 - i) {
    //     sum += matrix[i][matrix.length - 1 - i];
    //   }
    // }
    // console.log(sum);
  }

  search(matrix, key) {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
      if (matrix[row][col] == key) {
        console.log(`Key found - ${row}-${col}`);
        return;
      } else if (matrix[row][col] > key) col--;
      else row++;
    }
    console.log(`Key not found`);
  }

  rotate(matrix) {
    // rotate 90 degree clockwise
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < m; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }

    for (let i = 0; i < n; i++) {
      matrix[i].reverse();
    }
  }
}

const twoDInstance = new twoDArray();

twoDInstance.rotate(arr);
console.log(arr);
