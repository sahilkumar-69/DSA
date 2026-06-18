let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let rows = matrix.length;
let cols = matrix[0].length;

for (let i = 0; i < rows; i++) {
  for (let j = i + 1; j < cols; j++) {
    [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  }
}

for (let i = 0; i < rows; i++) {
  matrix[i].reverse();
}

console.log(matrix);
