class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

var sortedArrayToBST = function(nums) {
    let ls = nums.length;
    if (ls === 0) return null;
    let mid = Math.floor(ls / 2);
    let root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))

console.log( 1/ 2);
console.log( 2/ 2);
console.log( 3/ 2);
console.log( 4/ 2);
console.log( 5/ 2);
