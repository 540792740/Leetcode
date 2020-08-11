/**
 * Author: Peter
 * Date: Aug 11 2020
 * Content: DFS Graph
 */
var findOrder = function(numCourses, prerequisites) {
    let dic = {};
    let noPre = {};
    for(let i = 0; i < numCourses; i++) {
        dic[i] = new Set();
        noPre[i] = new Set();
    }
    for (let course of prerequisites) {
        dic[course[0]].add(course[1])
        noPre[course[1]].add(course[0])
    }
    // console.log('dic', dic)
    // console.log('noPre', noPre)

    //1. Stack save course with no preCourse
    let stack = [];
    for(let i = 0; i < numCourses; i++) {
        if( dic[[i]].size === 0 ) stack.push(i)
    }

    let res = [];
    while(stack.length > 0){
        let Node = stack.pop();
        res.push(Node);
        for(let i of noPre[Node]){
            dic[i].delete(Node)
            if(dic[i].size === 0) stack.push(i)
        }
        delete (dic[Node])
    }
    if(res.length === numCourses) return res
    else return []
    // console.log(res)
}

// console.log(findOrder(2, [[1,0]]))
// console.log(findOrder(2, [[0,1],[1,0]]))
// console.log(findOrder(3, [[1,0],[1,2],[0,1]]))
console.log(findOrder(3, [[2,0],[2,1]]))
// console.log(findOrder( 4, [[1,0],[2,0],[3,1],[3,2]]))

// a = new Set()
// a.add(1)
// a.delete(1)
// console.log(a)
