/**
 * Author: Peter
 * Date: Aug 29
 *
 * [[1,1,0],    [[1,0,0]
 * [1,0,1],     [0,1,0]
 * [0,0,0]]     [1,1,1]
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(a => {return a.reverse().map(b=>b^1)})
};

var flipAndInvertImage1 = function(A) {


};

console.log(1^1)
console.log(0^1)
