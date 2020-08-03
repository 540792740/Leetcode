/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let str = s;
    let count = new Array(s.length).fill(0)
    for(let i = 0; i < str.length; i++){
        if(i === 0 || str[i] !== str[i - 1]){
            count[i] = 1;
        }else{
            count[i] = count[i - 1] + 1;
            if(count[i] === k){
                str  = str.slice(0, i - k + 1) + str.slice(i + 1)
                i = i - k;
                console.log(str)
            }
        }
    }
    return str
};


// console.log('abcd',removeDuplicates('abcd', 2))
console.log('aa',removeDuplicates('deeedbbcccbdaa', 3))
// console.log('ps',removeDuplicates('pbbcggttciiippooaais', 2))
