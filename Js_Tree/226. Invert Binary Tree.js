function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var invertTree = function(root) {
    if(root === null) return root
    const helper = (node)=>{
        if(node === null) return
        if(node.left !== null || node.right !== null){
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
            helper(node.left);
            helper(node.right);
        }
    }
    helper(root)


    return root;
};
