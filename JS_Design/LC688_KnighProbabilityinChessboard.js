/*
* Author: Peter
* Date: Aug 5 2020
* Content : knight move design
* */

// Time O(N ^ 2 * K)
// Space O(N ^ 2)

var knightProbability = function(N, K, r, c) {
    const directions = [[2,1], [2,-1], [-2, 1],[-2, -1], [1,2], [1, -2], [-1, 2], [-1,-2]]
    let matrix = [];
    for(let i = 0; i < N; i++)matrix.push(new Array(N).fill(0))
    matrix[r][c] = 1;
    for(let step = 0; step < K; step++){
        let newMatrix = [];
        for(let i = 0; i < N; i++)newMatrix.push(new Array(N).fill(0))
        for(let i = 0; i < N; i++){
            for(let j = 0; j < N; j++){
                for(let d of directions){
                    let x = i + d[0];
                    let y = j + d[1];
                    if(x < 0 || y < 0 || x >= N || y >= N) continue;
                    newMatrix[i][j] += matrix[x][y]
                }
            }
        }
        console.log(newMatrix)
        matrix = newMatrix;
    }
    let res = 0;
    for(let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            res += matrix[i][j]
        }
    }

    return res / (8**K)
};

knightProbability(8,2,0,0)
console.log(8**2)
