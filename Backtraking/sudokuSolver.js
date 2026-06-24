function sudokuSolver(board, row, col) {
  if (row == 9) {
    return true;
  }

  let nextRow = row;
  let nextCol = col + 1;

  if (nextCol === 9) {
    nextRow++;
    nextCol = 0;
  }

  if (board[row][col] !== 0) {
    return sudokuSolver(board, nextRow, nextCol);
  }

  for (let i = 1; i <= 9; i++) {
    if (isValid(board, row, col, i)) {
      board[row][col] = i;
      if (sudokuSolver(board, nextRow, nextCol)) {
        return true;
      }
      board[row][col] = 0;
    }
  }
  return false;
}

function isValid(board, row, col, num) {
  // Check if the number is already in the row
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
      return false;
    }
  }

  // Check if the number is already in the column
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
      return false;
    }
  }

  // Check if the number is already in the 3x3 box
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[boxRow + i][boxCol + j] === num) {
        return false;
      }
    }
  }

  return true;
}

// Example usage:
const board = [
  [0, 7, 0, 5, 8, 3, 0, 2, 0],
  [0, 5, 9, 2, 0, 0, 3, 0, 0],
  [3, 4, 0, 0, 0, 6, 5, 0, 7],
  [7, 9, 5, 0, 0, 0, 6, 3, 2],
  [0, 0, 3, 6, 9, 7, 1, 0, 0],
  [6, 8, 0, 0, 0, 2, 7, 0, 0],
  [9, 1, 4, 8, 3, 5, 0, 7, 6],
  [0, 3, 0, 7, 0, 1, 4, 9, 5],
  [5, 6, 7, 4, 2, 9, 0, 1, 3],
];

if (sudokuSolver(board, 0, 0)) {
  console.log("Sudoku solved:");
  console.log(board);
} else {
  console.log("No solution exists.");
}
