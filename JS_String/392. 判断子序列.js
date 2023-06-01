/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let index = 0;
    // 特殊处理边界值
    if (s === '') {
        return true;
    }
    for (let i = 0; i < t.length; i++) {
        // 匹配字符，指针右移
        if (t[i] === s[index]) {
            index++;
            if (index > s.length - 1) {
                // 遍历结束，超过s边界则匹配的是最后一个字符
                return true;
            }
        }
    }
    return false;
};