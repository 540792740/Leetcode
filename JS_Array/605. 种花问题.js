/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let left = 0;
    let right = flowerbed.length - 1;
    let res = 0;
    let num0 = 0;

    // 开头、结尾2/3-1, 4/5种2，6种3
    // 如果是全0, 1-1, 3-2, 5-3
    // [0,0,1,0,0], [0,1,0],[0]
    while (flowerbed[left] !== 1 && left <= right) {
        num0++;
        left++;
    }
    if (left <= right && flowerbed[left] === 1) {
        res += Math.floor(num0 / 2)
    } else {
        // [0],[0,0], [0,0,0]
        return Math.floor((num0 + 1) / 2) >= n;
    }
    num0 = 0;
    while (flowerbed[right] !== 1 && left <= right) {
        num0++;
        right--;
    }
    if (flowerbed[right] === 1) {
        res += Math.floor(num0 / 2)
    }

    // [0,0,1,0,0], [0,1,0], [1]
    num0 = 0;
    if (left === right) { return res >= n; }
    left++;

    // [0,0,1,1,0,0], [0,1,1,0], [1,1],
    // 中间三个0种一个3/4-1,5/6-2,7-3
    while (left <= right) {
        if (flowerbed[left] !== 1) {
            num0++
        } else {
            res += Math.floor((num0 - 1) / 2)
            num0 = 0;
        }
        left++
    }
    return res >= n;
};