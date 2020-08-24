/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.list = [];

    // key is value, value is index in list
    this.dic = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.dic[val] !== undefined){
        return false
    }

    this.list.push(val);
    this.dic[val] = this.list.length - 1
    return true

};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    // console.log(this.list, this.dic[val])
    if(this.dic[val] !== undefined){
        // swap target and last node, update index, Pop()
        let index = this.dic[val];
        let temp = this.list[this.list.length - 1];
        this.list[index] = temp;
        this.list.pop();
        this.dic[temp] = index;
        delete this.dic[val]
        return true;
    }
    else return false
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let ls = this.list.length;
    let index = Math.floor(Math.random() * ls);
    return this.list[index]
};

var obj = new RandomizedSet()
console.log(obj.insert(1), obj.remove(2), obj.insert(2))
console.log(obj.getRandom())
console.log(obj.remove(1), obj.insert(2), obj.getRandom())

