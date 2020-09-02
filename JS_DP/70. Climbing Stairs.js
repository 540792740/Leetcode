/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if( n <= 3 ) return n;
    let prev = 2;
    let cur = 3;
    let temp = 0
    for(let i = 4; i <= n; i++){
        temp = prev;
        prev = cur
        cur = temp + cur;
    }
    return cur;
};
