/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}


var mergeTrees = function(t1, t2) {
    if(!t1) return t2;
    if(!t2) return t1;
    t1.val += t2.val;

    t1.left = mergeTrees(t1.left, t2.left)
    t1.right = mergeTrees(t1.right, t2.right)

    return t1
};


// var mergeTrees1 = function(t1, t2) {
//     // if(t1) return t2;
//     // if(t2) return t1;
//     if(t1 && t2) {
//         let root = new TreeNode(t1.val + t2.val);
//         root.left = mergeTrees(t1.left, t2.left);
//         root.right = mergeTrees(t1.right, t2.right);
//         return root;
//     }
//     return t1 || t2
//
// };

let a = new TreeNode(1)
let b = new TreeNode()
if(a.left) console.log(b)
if(b) console.log(a)
