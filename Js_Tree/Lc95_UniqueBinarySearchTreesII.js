function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const dfs = (start, end) => {
    let res = [];
    if(start > end){res.push(null)}
    for(let i = start; i <= end; i++){
        for(let left_node of dfs(start, i - 1)){
            // if(left_node === i) left_node = [null]
            for(let right_node of dfs(i + 1, end)) {
                // if(right_node === end) left_node = [null]
                const root = new TreeNode(i)
                root.left = left_node;
                root.right = right_node;
                res.push(root)
            }
        }
    }
    return res;
}

var generateTrees = function(n) {
    if(n === 0) return []
    else return dfs(1, n)
};

console.log(generateTrees(3))
