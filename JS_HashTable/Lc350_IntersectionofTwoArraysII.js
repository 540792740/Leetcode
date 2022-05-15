
var intersect = function (nums1, nums2) {
    let ls1 = nums1.length;
    let ls2 = nums2.length;
    if (ls1 === 0 || ls2 === 0) return []
    const map = new Map();
    for (let n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1)
        }
    }
    let res = []
    for (let n of nums2) {
        if (map.has(n) && map.get(n) >= 1) {
            res.push(n);
            map.set(n, map.get(n) - 1)
        }
    }
    return res
};

console.log(intersect([1, 2, 2, 1], [2, 2]))

var intersect1 = function (nums1, nums2) {
    let l1 = 0;
    let l2 = 0;
    let res = [];

    // sort两个数组
    nums1.sort((x, y) => x - y);
    nums2.sort((x, y) => x - y);

    // 指针指向最左数
    while (l1 < nums1.length && l2 < nums2.length) {
        if (nums1[l1] == nums2[l2]) {
            // 相等，同时移动，推入res
            res.push(nums1[l1]);
            l1++;
            l2++;
        } else {
            // 不等， 移动值小的 
            if (nums1[l1] < nums2[l2]) l1++;
            else l2++;
        }
    }
    return res
};
