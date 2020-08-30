function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const helper = (node, depth) =>{
        res = Math.max(depth, res);
        if(node.left !== null) helper(node.left, depth + 1)
        if(node.right !== null) helper(node.right, depth + 1)
    }

    if(root === null) return 0;
    let res = 1;
    helper(root, 1);
    return res
};
