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

    // init visited node
    let visited = new Set();

    // BFS find all possible solutions
    const BFS = (position) =>{

        // position means current position;
        if(position[0] === destination[0] && position[1] === destination[1]) return true;

        // return false once visited
        if(visited.has(position[0] + '' + position[1]) === true) return false;

        // save visited node into set
        visited.add(position[0] + '' + position[1]);

        for(let direction of directions){
            let dx = position[0];
            let dy = position[1];

            // new position should be not visited and in the maze
            while(dx + direction[0] > -1 && dx + direction[0]< m &&
            dy + direction[1] > -1 && dy + direction[1] < n &&
            maze[dx + direction[0]][dy + direction[1]] === 0){
                dx += direction[0];
                dy += direction[1];
            }
            if(BFS([dx, dy]) === true) return true;

        }
        return false;
    }

    return BFS(start)

};

console.log(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0,4],[4,4]))
// console.log(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]]
//     ,[0,4]
//     ,[3,2]))
