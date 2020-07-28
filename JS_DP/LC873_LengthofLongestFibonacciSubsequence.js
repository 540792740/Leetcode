/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
    let ls = A.length;
    let res = 2;
    let s = new Set(A);
    for(let i = 0; i < ls; i++){
        for(let j = i + 1; j < ls; j++){
            let a = A[i];
            let b = A[j];
            let tempLen = 2;
            while( s.has(a + b)){
                [a, b] = [b, a + b];
                tempLen++;
            }
            res = Math.max(res, tempLen);
        }
    }
    if (res > 2) return res;
    else return 0
};

console.log(lenLongestFibSubseq( [1, 2,3,4,5,6,7,8]))
console.log(lenLongestFibSubseq( [7,8]))
