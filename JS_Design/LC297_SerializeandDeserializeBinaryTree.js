function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var serialize = function(root) {
    function helper(node) {
        if(node){
            vals.push(node.val + '')
            helper(node.left)
            helper(node.right)
        }
        else{
            vals.push('null')
        }
    }
    let vals = [];
    helper(root);
    return vals
};

var deserialize = function(data) {
    function helper() {
        // No data
        if(data.length === 0) return;

        // Deal with null Node(Leaf)
        const val = data.shift();
        if(val === 'null') return null;

        const node = new TreeNode(val);
        node.left = helper();
        node.right = helper();
        return node
    }
    return helper()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
