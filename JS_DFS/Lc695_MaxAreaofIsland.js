/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let m = grid.length
    if(m < 1) {return 0}
    let n = grid[0].length;
    let res = 0;
    let maxRes = 0;
    let directions = [[0,1], [1, 0], [0, -1], [-1, 0]]
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1){
                res += 1;
                var stack = [[i, j]];
                grid[i][j] = 0;
                let tempArea = 1;
                maxRes = Math.max(maxRes, tempArea)
                while (stack.length > 0){
                    console.log(tempArea, maxRes, [i, j])
                    let tempCor = stack.pop();
                    let x = tempCor[0]
                    let y = tempCor[1]
                    for(let index in directions) {
                        let dx = directions[index][0];
                        let dy = directions[index][1];
                        dx = x + dx
                        dy = y + dy
                        if (dx >= 0 && dx < m && dy >= 0 && dy < n) {
                            if (grid[dx][dy] === 1) {
                                // console.log(dx, dy)
                                tempArea += 1
                                maxRes = Math.max(maxRes, tempArea)
                                // console.log(maxRes)
                                grid[dx][dy] = 0;
                                stack.push([dx,dy])
                            }
                        }
                    }
                }
            }
        }
    }
    return maxRes
};

// console.log(maxAreaOfIsland(
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,1,1,0,1,0,0,0,0,0,0,0,0],
//     [0,1,0,0,1,1,0,0,1,0,1,0,0],
//     [0,1,0,0,1,1,0,0,1,1,1,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,0,0,0,0,0,0,1,1,0,0,0,0]]))

console.log(maxAreaOfIsland(
    [[1,1,0,1,1],
          [1,0,0,0,0],
          [0,0,0,0,1],
          [1,1,0,1,1]]))
