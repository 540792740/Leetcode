/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

    const helper = (i, j) =>{
        // initial count
        let count = 0;

        // initial x, y coordinate
        let x, y;
        for(let neb of neighbors){
            x = i + neb[0];
            y = j + neb[1];
            console.log(x, y, n, m)
            if(0 <= x && x < m && 0 <= y && y < n){
                if(board[x][y] % 2 === 1) count++;
            }
        }
        //return how many live cell
        return count;
    }
    // Initial width and height of matrix;
    let m = board.length;
    let n = board[0].length
    const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            let tempCount = helper(i, j);
            // board[[i][j] was dead cell
            if(board[i][j] === 0){

                // 2 means dead to live;
                if(tempCount === 3) board[i][j] = 2;
            }

            // board[i][j] was live cell.
            else{
                // Next generation will dead
                // live cell has less than 2 or greater than 3
                // live cell, will dead, return 3
                if(tempCount < 2 || tempCount > 3){board[i][j] = 3;}
            }
        }
    }

    // convert 2 -> 1; 3 -> 0
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 2) board[i][j] = 1;
            if(board[i][j] === 3) board[i][j] = 0;
        }
    }
    return board;

};
// console.log(gameOfLife([
//     [0,1,0],
//     [0,0,1],
//     [1,1,1],
//     [0,0,0]
// ]))

console.log(gameOfLife([[0,0]]))
