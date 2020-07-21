/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function helper(l, r, str){
        if(l === 0 && r === 0) {
            res.push(str);
            return;
        }
        else {
            if (l > 0 && l <= r) helper(l - 1, r, str + '(');
            if (r > 0 && l < r) helper(l, r - 1, str + ')');
        }
    }
    helper(n, n, '')
    return res
};
console.log(generateParenthesis(3))
