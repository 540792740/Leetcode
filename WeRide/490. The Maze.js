/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    // no Maze, return False; height
    let m = maze.length;
    if(m === 0) return false;

    // init width n, no width false
    let n = maze[0].length
    if(n === 0) return false;

    // init directions
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    // BFS find all possible solutions
    const DFS = (matrix, position) =>{

        for(let direction of directions){
            let dx = position[0];
            let dy = position[1];

            // new position should be not visited and in the maze
            while(dx + direction[0] > -1 && dx + direction[0]< m &&
            dy + direction[1] > -1 && dy + direction[1] < n &&
            matrix[dx + direction[0]][dy + direction[1]] !== 1){
                dx += direction[0];
                dy += direction[1];

                // visited node is 2
                if(matrix[dx][dy] === 2) break;
            }

            if(dx === position[0] && dy === position[1] || matrix[dx][dy] === 2) continue

            // mark as visited
            matrix[dx][dy] = 2;
            if(dx === destination[0] && dy === destination[1]) return true

            if(DFS(matrix, [dx, dy]) === true) return true;

        }
        return false;
    }

    return DFS(maze,start)

};

// console.log(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0,4],[4,4]))
console.log(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]]
    ,[0,4]
    ,[3,2]))
