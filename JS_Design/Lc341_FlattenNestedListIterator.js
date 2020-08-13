/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.stack = [[nestedList, 0]]
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    let s = this.stack;
    while(s.length > 0){
        console.log(s)
        let i;
        let nestedList;
        [nestedList, i] = this.stack[this.stack.length - 1];
        if(i === nestedList.length) s.pop();
        else{
            let x = nestedList[i]
            if(x.isInteger() === true){return true}
            s[s.length - 1][1] += 1;
            s.push([x.getList(), 0])
        }
    }
    return false
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    this.hasNext()
    let i;
    let nestedList;
    [nestedList, i] = this.stack[this.stack.length - 1];
    this.stack[this.stack.length - 1][1] += 1;
    return nestedList[i].getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
