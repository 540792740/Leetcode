/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // initial 3 pointer; 0-red, 1-white ,2-blue;
    let r = 0;
    let b = nums.length - 1;
    let w = 0;

    // Move white pointer,traverse from start to end;
    while(w <= b){


        // init temp color, used for swap
        let temp;

        // red color
        if(nums[w] === 0){
            temp = nums[w];
            nums[w] = nums[r];
            nums[r] = temp;
            r++;
            w++;
        }

        // blue color
        else if(nums[w] === 2){
            temp = nums[w];
            nums[w] = nums[b];
            nums[b] = temp;
            b--;
        }

        // continue white color
        else{w++}
    }
    console.log(nums)

};

// console.log(sortColors( [2,0,2,1,1,0]))
console.log(sortColors( [2,0,1]))
