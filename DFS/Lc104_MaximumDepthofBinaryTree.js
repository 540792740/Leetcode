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
class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
var maxDepth = function(root) {
    let res
    if (root === null) return 0;
    res = 1;
    function helper(head, depth) {
        res = Math.max(res, depth)
        if(head.left !== null) helper(head.left, depth + 1)
        if(head.right !== null) helper(head.right, depth + 1)
    }
    helper(root, 1)
    return res
};

const node15 = new TreeNode(15)
const node7 = new TreeNode(7,undefined,undefined)
const node20 = new TreeNode(20,node15, node7)
const node9 = new TreeNode(9, undefined, undefined)
const head = new TreeNode(3, node9, node20)
console.log(
    maxDepth(head)
)
console.log(
    maxDepth(new TreeNode())
)
