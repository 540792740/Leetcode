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

//[null,12009.00000,6987.00000,4344.66667,1129.50000,-2385.60000,-3213.40000,1895.60000,-2703.00000,983.00000,-3521.80000]
//[null,12009.00000,6987.00000,4344.66667,1129.50000,-2385.60000,-3213.40000,1502.60000,-2515.00000,2874.20000,1470.60000]
