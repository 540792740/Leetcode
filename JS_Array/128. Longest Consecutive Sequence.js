/**
 * @param {number[]} nums
 * @return {number}
 */


// O(n) time Complexity
// O(n) space Complexity
var longestConsecutive = function(nums) {
    // when nums is empty; return 0;
    if(nums.length === 0) return 0;

    // when one element; return 1;
    if(nums.length === 1) return 1;

    // save all element into set, remove duplicated element
    let set = new Set([...nums]);

    // init result
    let res = 1

    // traverse Set, find all consequence;
    for(let ele of set){
        // count consequence,
        // ls1 save count larger than element;
        // ls2 save count smaller than element;
        let count = 1;
        let ls1 = ele + 1;
        let ls2 = ele - 1;

        while(set.has(ls1)){
            set.delete(ls1);
            count++;
            ls1 += 1;
        }
        while(set.has(ls2)){
            set.delete(ls2);
            count++;
            ls2 -= 1;
        }
        if(count > res) res = count;
    }

    // return result;
    return res;
}


var longestConsecutive1 = function(nums) {
    if(nums.length === 0) return 0
    let res = 1;
    nums.sort((x, y) => x - y);
    let temp = nums[0]
    let count = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1]) continue;
        if(nums[i] === temp + 1) {
            count++
        }
        else{
            count = 1;
        }
        if(count > res) res = count;
        temp = nums[i];
    }
    return res;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
