/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let dp = [new Set()]
    for(let a of arr){
        if(new Set(a).size < a.length) continue;
        a = new Set(a)
        for(let c of dp){
            let flag = true
            // let intersect = [...a].filter(x => c.has(x))
            for(let i of a) if(c.has(i)) {
                flag = false;
                break;
            }
            if(flag === false) continue
            // let intersect = [...a].filter(x => c.has(x))
            // if(intersect.length !== 0) continue;
            else{dp.push( new Set([...a, ...c]))}
        }
    }
    // console.log(dp)
    let res = 0
    for(let a of dp){
        if(a.size > res) res = a.size
    }
    return res
};


console.log(maxLength( ["un","iq","ue"]))
let a = new Set(['aa','aab','b'])
let b = new Set(['t'])
let intersect = new Set([...a].filter(x => !b.has(x)))

// console.log('aa' & 'a')
