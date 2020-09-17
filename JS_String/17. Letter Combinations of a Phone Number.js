/**
 * @param {string} digits
 * @return {string[]}
 *
 * save a map{key=1-9: ['a', 'b', 'c']}
 * while(i = 0 < length){
 *     temp = []
 *     temp = [ad, bd, cd, ae, be, ce, af, df, cf]
 *     res = temp
 * }
 * return res
 */


var letterCombinations = function(digits) {
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
    let i = 0;
    let temp = [];
    let res = [];
    while(i < digits.length){
        if(i === 0) {
            res=[...map[digits[i]]];
            i++;
            continue;
        }
        temp = [];
        for(let j of res) {
            for (let alpha of map[digits[i]]) {
                temp.push(j + alpha)
            }
        }
        res = temp;
        i++;
    }
    return res
};

console.log(letterCombinations("23"))
