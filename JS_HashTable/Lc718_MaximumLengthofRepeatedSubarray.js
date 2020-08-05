/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let matrix = [];
    let lsA = A.length;
    let lsB = B.length;
    let res = 0;
    for(let i = 0; i <= lsA; i++){
        matrix.push(new Array(lsB + 1).fill(0))
    }
    for(let i = 1; i <= lsA; i++){
        for(let j = 1; j <= lsB; j++){
            if(A[i - 1] === B[j - 1]){
                matrix[i][j] = matrix[i - 1][j - 1] + 1
                res = Math.max(res, matrix[i][j])
            }
        }
    }
    return res
};

console.log("result: " , 3, findLength([1,2,3,2,1], [3,2,1,4,7]))
// console.log("result: ", 9, findLength(    [0,0,0,0,0,0,1,0,0,0],        [0,0,0,0,0,0,0,1,0,0]))
