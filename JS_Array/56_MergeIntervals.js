/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ls = intervals.length;
    if (ls < 2) return intervals;
    intervals.sort((a,b) => a[0] - b[0])
    let left = intervals[0][0];
    let right = intervals[0][1];
    let res = [];
    for(let index in intervals){
        if(right < intervals[index][0]){
            res.push([left, right]);
            left = intervals[index][0];
            right = intervals[index][1];
        }
        else{
            right = Math.max(right,intervals[index][1]);
        }
    }
    res.push([left, right]);
    return res;
}

console.log(merge( [[1,3],[2,6],[8,10],[15,18]]))
