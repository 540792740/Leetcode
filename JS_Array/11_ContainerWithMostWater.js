/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var right = height.length - 1;
    if(right <= 0){return 0}
    var left = 0;
    var res = 0;
    while (left < right){
        if(height[left] < height[right]){
            res = Math.max(res, (right - left) * height[left])
            left++;
        }
        else{
            console.log((right - left), height[right])
            res = Math.max(res, (right - left) * height[right])
            right--;
        }
    }
    return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
