/**
 * @param {number} k
 * @param {number[]} nums
 * [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 * [2, 4, 5, 8] => 4
 * [2, 3, 4, 5, 8] => 4
 * [2, 3, 4, 5, 5, 8] => 5
 * [2, 3, 4, 5, 5, 8, 10] => 5
 * [2, 3, 4, 5, 5, 8, 9, 10] => 8
 * [2, 3, 4, 4, 5, 5, 8, 9, 10] => 8
 * 
 */

var KthLargest = function (k, nums) {
  this.stream = nums.sort((a, b) => a - b);
  this.k = k;
};

KthLargest.prototype.add = function (val) {
  if (this.stream.length === 0 || val >= this.stream[this.stream.length - 1])
    this.stream.push(val);
  else
    for (let i = 0; i < this.stream.length; i++)
      if (val <= this.stream[i]) {
        this.stream.splice(i, 0, val);
        break;
      }

  return this.stream[this.stream.length - this.k];
};

var KthLargest_slow_version = function (k, nums) {
  this.arr = nums.sort((a, b) => a - b) // decend sort
  this.k = k; // kth largest
};

KthLargest.prototype.add_slow_version = function (val) {
  const insert = () => {
    this.arr.push(val);
    this.arr = this.arr.sort((a, b) => b - a);
  }
  insert();
  return this.arr[this.k - 1];
};