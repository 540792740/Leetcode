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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const check = (l, r)=>{
        if(l == null && r == null) return true;
        if(l == null || r == null) return false;
        if((l.val === r.val && check(l.left, r.right) && check(l.right, r.left) === true)) return true
        return false
    }
    if(!root) return true;
    return check(root.left, root.right)
};
