/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let ls = nums.length;
    let dic = {}
    let max_num = [nums[0]];
    let max_value = 1;
    for(let i = 0; i < ls; i++) {
        dic[nums[i]] = dic[nums[i]] + 1 | 1;
        if (dic[nums[i]] > max_value) {
            max_value = dic[nums[i]];
            max_num = [nums[i]]
        }

        else if(dic[nums[i]] === max_value){
            max_num.push(nums[i])
        }
    }
    console.log(max_num)
    let res = ls;
    function minLength(a) {
        let left = 0;
        let right = ls - 1
        if(left < right){
            while(left < right && nums[left] !== a){
                left++;
            }
            while(left < right && nums[right] !== a){
                right--;
            }
        }
        // console.log(right - left - 1)
        return right - left + 1
    }
    for(let i in max_num){
        res = Math.min(minLength(max_num[i]), res)
    }
    return res
};

// a = findShortestSubArray([1,2,2,3,1])
a = findShortestSubArray(
    [2,1,1,2,1,3,3,3,1,3,1,3,2])
console.log(a)
