/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    function helper(node){
        if(node === null) return 0;
        let l = helper(node.left)
        let r = helper(node.right)
        res = Math.max(res, l + r);
        return Math.max(l, r) + 1;
    }
    let res = 0;
    helper(root)
    return res
};

