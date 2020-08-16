/*
* Author: peter
* Date: Aug 16 2020
* Content: Tree DFS
* */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var rightSideView = function(root) {
    function helper(node, h) {
        if(!node) return;
        res[h] = node.val;
        helper(node.left, h + 1)
        helper(node.right, h + 1)
    }

    //if(!root) return [];
    if(root == null) return [];
    let res = [];
    helper(root,0);
    return res;
};
