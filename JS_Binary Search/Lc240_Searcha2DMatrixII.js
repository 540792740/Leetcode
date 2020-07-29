/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    if ( m === 0) return false;
    let n  = matrix[0].length;
    let index = 0;
    for(let i = n - 1; i >= 0; i--){
            while(index < m) {
                if (matrix[index][i] === target) return true
                else if (matrix[index][i] < target) index++;
                else break;
            }
    }
    return false;

};

console.log(searchMatrix([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 11))

console.log('false', searchMatrix([[1,1]], 2))
console.log('---------')
console.log('true', searchMatrix([[5],[6]],6))
