/* 反转之后，前后两部分反转 */
var rotate1 = function (nums, k) {
    const reverseNums = (l, r, nums) => {
        let temp;
        while (l < r) {
            temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++; r--;
        }
    }

    if (k >= nums.length) {
        k = k % nums.length;
    }
    reverseNums(0, nums.length - 1, nums);
    reverseNums(0, k - 1, nums);
    reverseNums(k, nums.length - 1, nums);
}

rotate1([1, 2, 3, 4, 5, 6], 2)
rotate1([1, 2], 7)
rotate1([1, 2], 2)



/* unshift + splice */
var rotate2 = function (nums, k) {
    let ls = nums.length;
    if (k >= ls) {
        k = k % ls;
    }
    if (k == 0) return
    nums.unshift(...nums.slice(ls - k, ls));
    nums.splice(ls)
};