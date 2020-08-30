/**
 * Author: Peter
 * Date: Aug 29
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    // odd [0, 1, -1, 2, -2]
    //even [1, -1, 2, -2]

    let res = []
    if(n % 2 === 1) {
        res.push(0);
        n = n - 1
    }

    for(let i = 1; i <= n / 2; i++){
        res.push(i)
        res.push(i * -1)
    }
    return res


};
