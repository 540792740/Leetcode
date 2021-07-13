function cycleCheck(A, B) {

    let map = {};
    for (let i in A) {
        // self cycle
        if (A[i] === B[i]) return true;

        // add Graph
        if (map[A[i]]) map[A[i]].add(B[i]);
        else map[A[i]] = new Set([B[i]]);

        if (map[B[i]]) map[B[i]].add(A[i]);
        else map[B[i]] = new Set([A[i]]);
    }
    for (let i in A) {
        // unvisited node
        if (map[A[i]]) {
            let newSet = new Set([A[i]]);
            let stack = [map[A[i]]];
            while (stack.length > 0) {
                let node = stack.pop();
                console.log('node', node);
                // for (let ele of map[node]) {
                //     if (newSet.has(ele)) return true
                //     else newSet.add(ele)
                // }
            }
            // delete visited map
            // for (let ele of newSet) map.delete(ele)
        }




        // visited node
        else continue






    }




    return false
}



// let a = [1, 3, 2, 4];
// let b = [4, 1, 3, 2]
// console.log('should be true -->', cycleCheck(a, b));

// a = [1, 2, 3, 4, 3];
// b = [2, 3, 5, 5, 4];
// console.log('should be true -->', cycleCheck(a, b));

a = [1, 2, 3, 4];
b = [2, 3, 5, 5];
console.log('should be false -->', cycleCheck(a, b));

/*
1.
    1: {4,3},
    2: {3,4}
    3: {1,2},
    4: {1,2},
2.
    set {1, 4, 3, 1}


*/



a = '123🤔cba'
a = a.split('')
a.splice(0, 4,)
console.log(a);