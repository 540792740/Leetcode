/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack  = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let ls = this.stack.length;
    let min = 0;
    if(ls === 0) this.stack.push([x, x])
    else{
        if(this.stack[ls - 1][1] > x){min = x}
        else min = this.stack[ls - 1][1];
        this.stack.push([x, min])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let ls = this.stack.length;

    if(ls === 0) return 0;
    else return this.stack[ls - 1][0]
};

/**
 * @return {number}
 * ss
 */
MinStack.prototype.getMin = function() {
    let ls = this.stack.length;
    return this.stack[ls - 1][1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
