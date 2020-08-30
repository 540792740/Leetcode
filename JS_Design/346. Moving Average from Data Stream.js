/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.arr = [];
    this.total = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.arr.length < this.size){
        this.total += val;
        this.arr.push(val)
        return this.total / this.arr.length
    }
    else{
        this.total -= this.arr.shift();
        this.total += val;
        this.arr.push(val)
        return this.total / this.size
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
