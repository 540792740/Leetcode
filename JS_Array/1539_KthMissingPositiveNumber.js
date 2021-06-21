/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {

    // traverse arr
    let num = 0;
    for (let ele of arr) {
        // no miss
        if (ele - num === 1) num = ele

        // miss exist
        else {
            // if mis number larger than need
            if (ele - num > k) {
                return num + k

            }

            // not larger than need
            else {
                k = k - ele + num + 1;
                num = ele;

            }
        }
    }
    return arr[arr.length - 1] + k
};