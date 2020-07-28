/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let ls = s.length;
    if(ls < 10){ return []}
    let dic = new Map();
    let res = []
    for( let i = 0; i <= ls - 10; i++){
        let tempStr = s.substring(i, i + 10)
        if (dic.get(tempStr) === 1){
            res.push(tempStr);
            dic.set(tempStr, 2)
        }
        else if(dic.get(tempStr) > 1){}
        else{dic.set(tempStr,1)}
    }
    return res
};

// console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
console.log(findRepeatedDnaSequences("AAAAAAAAAAA"))

