/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let ls1 = nums1.length;
    let ls2 = nums2.length;
    if(ls1 === 0 || ls2 === 0) return []
    const map = new Map();
    for(let n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        }else{
            map.set(n, 1)
        }
    }
    let res = []
    for(let n of nums2){
        if(map.has(n) && map.get(n) >= 1){
            res.push(n);
            map.set(n, map.get(n) - 1)
        }
    }
    return res
};

console.log(intersect([1,2,2,1], [2,2]))
