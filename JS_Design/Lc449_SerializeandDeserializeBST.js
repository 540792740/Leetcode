
class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

var serialize = function(root) {
    if (!root) return '';
    let queue = [root];
    let tree_list = []
    while(queue.length > 0){
        root = queue.shift();
        if(root !== null){
            tree_list.push(root.val)
            queue.push(root.left)
            queue.push(root.right)
        }
        else{
            tree_list.push('null')
        }
    }
    return tree_list.join(' ')
};

var deserialize = function(data) {
    if (data.length <= 0) return null;
    let tree_list = data.split(' ');
    let head = new TreeNode(parseInt(tree_list[0]))
    let queue = [head];
    let index = 1;
    while (queue.length > 0) {
        let root = queue.shift();
        if (tree_list[index] !== 'null') {
            root.left = new TreeNode(parseInt(tree_list[index]))
            queue.push(root.left);
        }
        index++;
        if (tree_list[index] !== 'null') {
            root.right = new TreeNode(parseInt(tree_list[index]))
            queue.push(root.right);
        }
        index++;
    }
    return head
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
const node15 = new TreeNode(15)
const node9 = new TreeNode(9, undefined, undefined)
const node13 = new TreeNode(13,node9, node15)
const node2 = new TreeNode(2,undefined,undefined)
const node5 = new TreeNode(5,node2,undefined)
const head = new TreeNode(7, node5, node13)
console.log(deserialize(serialize(head)))
