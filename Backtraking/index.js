class backtraking {
  inAnArray(arr, i) {
    if (i === arr.length) {
      console.log(arr);
      return;
    }

    arr[i] = i + 1;

    this.inAnArray(arr, i + 1);

    arr[i] = i - 1;
  }

  subset(str, res, ind) {
    if (ind === str.length) {
      console.log(res, ind);
      return;
    }

    this.subset(str, res + str[ind], ind + 1);
    this.subset(str, res, ind + 1);
  }

  nQueens(board, row) {
    if (row === board.length) {
      console.log("-----");
      console.log(board);
      return;
    }

    for (let j = 0; j < board.length; j++) {
      if (this.isSafe(board, row, j)) {
        board[row][j] = "Q";
        this.nQueens(board, row + 1);
        board[row][j] = "-";
      }
    }
  }

  isSafe(board, row, col) {
    let tempRow = row;
    let tempCol = col;

    // check vertically
    while (tempRow >= 0) {
      if (board[tempRow][col] === "Q") {
        return false;
      }
      tempRow--;
    }

    // check horizontally
    while (tempCol >= 0) {
      if (board[row][tempCol] === "Q") {
        return false;
      }
      tempCol--;
    }

    // check diagonally
    tempCol = 1;
    tempRow = row - 1;

    while (tempRow >= 0) {
      if (
        (col - tempCol >= 0 && board[tempRow][col - tempCol] === "Q") ||
        (col + tempCol < board[row].length &&
          board[tempRow][col + tempCol] === "Q")
      ) {
        return false;
      }
      tempRow--;
      tempCol++;
    }

    return true;
  }
}

const array = Array(5);

const backtrakingInstance = new backtraking();

// backtrakingInstance.subset("abc", "", 0);
const boardSize = 5;

const board = Array.from({ length: boardSize }, () =>
  Array(boardSize).fill("-"),
);
backtrakingInstance.nQueens(board, 0);
