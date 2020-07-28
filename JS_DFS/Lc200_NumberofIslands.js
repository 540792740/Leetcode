/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length
    if(m < 1) {return 0}
    let n = grid[0].length;
    let res = 0;
    let directions = [[0,1], [1, 0], [0, -1], [-1, 0]]
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === "1"){
                res += 1;
                var stack = [[i, j]];
                grid[i][j] = "0";

                while (stack.length > 0){
                    let tempCor = stack.pop();
                    let x = tempCor[0]
                    let y = tempCor[1]
                    for(let index in directions) {
                        let dx = directions[index][0];
                        let dy = directions[index][1];
                        dx = x + dx
                        dy = y + dy
                        if (dx >= 0 && dx < m && dy >= 0 && dy < n) {
                            if (grid[dx][dy] === "1") {
                                grid[dx][dy] = "0";
                                stack.push([dx,dy])
                            }
                        }
                    }
                }
            }
        }
    }
    return res
};

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]))
