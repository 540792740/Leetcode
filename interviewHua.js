// 给定一副牌，每张牌上都写着一个整数。

//   此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

//   每组都有 X 张牌。
//   组内所有的牌上都写着相同的整数。
//   仅当你可选的 X >= 2 时返回 true。

//   示例 1：

//   输入：deck = [1,2,3,4,4,3,2,1]
//   输出：true
//   解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
//   示例 2：

//   输入：deck = [1,1,1,2,2,2,3,3]
//   输出：false
//   解释：没有满足要求的分组。

//   提示：

//   1 <= deck.length <= 10**4
//   0 <= deck[i] < 10**4

// function isSeperate(arr) {
//     if (arr.length < 4) return false

//     let dic = {};  // dic{1:2, 2:2, 3:2}

//     // 保存所有元素到字典 
//     for (let i in arr) {
//         if (dic[arr[i]]) dic[arr[i]]++;
//         else dic[arr[i]] = 1;
//     }

//     // 找到value最小值
//     let value = dic[arr[0]];
//     for (let i in dic) {
//         if (dic[i] < value) value = dic[i];
//     }
//     if (value < 2) return false;

//     // 校验字典值相等
//     for (let i in dic) {
//         if (dic[i] % value != 0) return false;
//     }

//     return true
// }

// console.log(isSeperate([1, 1, 2, 2, 2, 2, 3, 3]));
// console.log(isSeperate([1, 1, 2, 3]));
// console.log(isSeperate([1, 1, 2, 3, 3]));
// console.log(isSeperate([1, 1, 2, 2, 3, 3]));


// zhuqianxia z00492760 to Everyone (10:24 AM)


// console.log('1');

// setTimeout(function () {
//     console.log('2');

//     new Promise(function (resolve) {
//         console.log('4');
//         resolve();
//     }).then(function () {
//         console.log('5')
//     })
// })


// new Promise(function (resolve) {
//     console.log('7');
//     resolve();
// }).then(function () {
//     console.log('8')
// })

// setTimeout(function () {
//     console.log('9');
//     new Promise(function (resolve) {
//         console.log('11');
//         resolve();
//     }).then(function () {
//         console.log('12')
//     })
// })


// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
// 示例:
// 输入: [1,2,3,4]
//       [1, 1, 2, 6]
//       [24, 12, 8, 6]
// 输出: [24,12,8,6]

//  [0，1，2，3]  
//  [1,0,0,0]
//  [1 * 6 ,0,0,0]


// 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
// 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

function getArraySum(arr) {
    let tempArr = [1];

    // 正向相乘
    let tempValue = 1;
    for (let i = 0; i < arr.length; i++) {
        tempArr.push(tempValue);
        tempValue *= arr[i];
    }

    // 反向相乘
    tempValue = 1;  // 6
    for (let i = arr.length - 1; i >= 0; i--) {
        tempArr[i] = tempArr[i] * tempValue;
        tempValue *= arr[i];
    }
    return tempArr

}

console.log(getArraySum([1, 2, 3, 4]));