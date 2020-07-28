/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    function isoCheck(str) {
        let dic = new Map();
        let res = '';
        let index = 1;
        for(let i = 0; i < str.length; i++){
            if(dic.get(str[i]) > 0) res+=dic.get(str[i])
            else{
                dic.set(str[i], index)
                res+=index
                index++;
            }
        }
        return res
    }
    let s_str = isoCheck(s);
    let t_str = isoCheck(t);
    return s_str === t_str

};

console.log(isIsomorphic('sssa', 'aaax'))
