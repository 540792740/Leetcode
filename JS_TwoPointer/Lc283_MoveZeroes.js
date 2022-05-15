
/*
Solution moveZeroes:
[0,1,0,3,12] l = 0, index = 0
[1,0,0,3,12] l = 1, 交换(l, index); index++
[1,0,0,3,12] l = 2, index = 1
[1,3,0,0,12] l = 3, 交换(l, index); index++
[1,3,12,0,0] l = 4, 交换(l, index); index++ 
*/

var moveZeroes = function (nums) {
    let index = 0;
    let temp;

    const swap = (a, b) => {
        temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            continue;
        } else {
            swap(i, index);
            index++;
        }
    }
};

/*
 * [1,0,0,0,0,3,12]
 * [1,3,0,0,0,0,12]

 */
var moveZeroes1 = function (nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        //只要不为0就往前挪
        if (nums[j] != 0) {
            //i指向的值和j指向的值交换
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;

            i++;
        }
    }
    return nums;
};

a = moveZeroes([0, 1, 0, 3, 11])
console.log(a)