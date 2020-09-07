/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const helper = (nums, target, path, N)=>{
        let ls = nums.length
        if(ls < N || N < 2 || nums[0] * N > target || nums[ls - 1] * N < target) return []
        if(N === 2){
            let l = 0;
            let r = ls - 1;
            while(l < r){
                let summ = nums[l] + nums[r];
                if(summ > target) r--;
                else if (summ < target) l++;
                else{
                    path.push(nums[l])
                    path.push(nums[r])
                    res.push([...path]);
                    path.pop()
                    path.pop()
                    l++;
                    while( l < r && nums[l] === nums[l - 1]) l++;
                }
            }
        }
        else if(N > 2){
            for(let i = 0; i < ls - N + 1; i++){
                if(i === 0 || (i > 0 && nums[i] !== nums[i - 1])){
                    path.push(nums[i]);
                    helper(nums.slice(i + 1), target - nums[i], path, N - 1)
                    path.pop()
                }
            }
        }
    }

    nums.sort((x, y) => x - y)
    let res = [];
    helper(nums, target, [], 4)
    return res;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
