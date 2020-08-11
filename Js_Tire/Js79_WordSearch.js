/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    if(board.length === 0) return [];
    if(words.length === 0) return [];
    let m = board.length
    let n = board[0].length

    let tire = {};
    for(let word of words){
        let temp = tire;
        for(let c of word){
            if(!temp[c]) temp[c] = {}
            temp = temp[c]
        }
        temp['#'] = '#'
    }
    let res = new Set();

    this.helper = function (i, j, tire, board, path) {
        if(tire['#']) res.add(path);
        if(board[i][j] && tire[board[i][j]]){
            for([x, y] of [[0, 1], [0, -1], [-1, 0], [1, 0],[0,0]]){
                let dx = x + i;
                let dy = y + j;
                if(dx > -1 && dx < m && dy > -1 && dy < n){
                    let c = board[i][j];
                    board[i][j] = '';
                    this.helper(dx, dy, tire[c], board, path + c)
                    board[i][j] = c;
                }
            }
        }
    }
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            this.helper(i, j, tire, board, '');
        }
    }
    return Array.from(res)

};


// console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]))
console.log(findWords([["a"]], ["a"]))
