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

/*  function f1(n, arr, k){

    return
}


f1(3, arr, 2)   => 2

f1(3, arr, 1)   => 1

f1(3, arr, 3)   => 3


*  arr =   [[1,2,3],
*           [2,3,4],
*           [3,3,3]]
*  n = 3;
*   k = 3
*   return 0
*
*   [10]
*   [1] [4] [6] > 10 return
*           [5]  res += 1
* */
