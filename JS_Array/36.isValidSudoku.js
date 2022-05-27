
var isValidSudoku = function (board) {
  let row = [];
  let column = [];
  let square = [];

  for (let i = 0; i < 9; i++) {
    row.push(new Array(9))
    column.push(new Array(9))
    square.push(new Array(9))
  }

  let num // 记录当前数
  let k // 记录当前9宫格位置
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        num = board[i][j] - 1;
        k = Math.floor(i / 3) + Math.floor(j / 3) * 3
        if (row[num][j] || column[i][num] || square[k][num]) return false
        row[num][j] = column[i][num] = square[k][num] = 1;
      }
    }
  }
  return true
}

isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])