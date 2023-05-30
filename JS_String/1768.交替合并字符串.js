/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let index = 0;
    let res = '';
    while (index < word1.length && index < word2.length) {
        res += word1[index];
        res += word2[index];
        index++;
    }
    if (index < word1.length) {
        res += word1.substring(index, word1.length)
    } else if (index < word2.length) {
        res += word2.substring(index, word2.length)
    }
    return res;
};