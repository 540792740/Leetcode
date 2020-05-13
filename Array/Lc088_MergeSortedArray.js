/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let ls = nums1.length - 1;
    let ls2 = nums2.length - 1;
    let ls1 = ls - ls2 - 1
    while(ls2 >= 0 && ls1 >= 0){
        if (nums2[ls2] > nums1[ls1]){
            nums1[ls--] = nums2[ls2--];

        }
        else{
            nums1[ls--] = nums1[ls1--];
        }
    }
    while(ls2 >= 0){
        nums1[ls--] = nums2[ls2--];
    }
    return nums1;
};

a = merge([1,2,3,0,0,0], 3,[2,5,6], 3)
console.log(a)
