/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let ls1  = board.length;
    if(ls1 === 0) return false
    let ls2 = board[0].length
    let ls = word.length;
    let direction = [[0,1],[0,-1],[-1,0],[1,0]];
    const helper = (i, j, index)=>{
        if(index === ls ) return true;
        for(let d of direction) {
            let dx = parseInt(i) + d[0];
            let dy = parseInt(j) + d[1];
            if (-1 < dx && dx < ls1 && -1 < dy && dy < ls2) {
                if (board[dx][dy] === word[index]) {
                    board[dx][dy] = '';
                    index++;
                    if (helper(dx, dy, index)) return true
                    index--;
                    board[dx][dy] = word[index];
                }
            }
        }
    }

    for(let i = 0; i < ls1; i++){
        for(let j = 0; j < ls2; j++){
            if(board[i][j] === word[0]){
                board[i][j] = '';
                let index = 1;
                if(helper(i, j, index)) return true;
                board[i][j] = word[0];
            }
        }
    }
    return false
};


console.log('true', exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))
console.log('false', exist([["a","b"],["c","d"]], "abcd"))
console.log('false', exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))
