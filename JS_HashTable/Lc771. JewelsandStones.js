/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const jew = new Set(J);
    let res = 0;
    for(let i of S){
        if(jew.has(i)) res++
    }
    return res
};

var numJewelsInStones1 = function(J, S) {
    const jew = new Set(J);
    return S.split('').reduce((x, y) =>x + jew.has(y), 0)
};

console.log(numJewelsInStones("aA", "aAAbbbb"))
