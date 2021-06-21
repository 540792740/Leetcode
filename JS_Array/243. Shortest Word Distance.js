/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {
    let shortestDis = wordsDict.length

    let word1_index = -1;
    let word2_index = -1;

    for (let i in wordsDict) {
        // equal word1
        if (wordsDict[i] === word1) {
            if (word2_index !== -1) {
                shortestDis = Math.min(shortestDis, Math.abs(i - word2_index))
            }
            word1_index = i;
        }

        //equal word2
        if (wordsDict[i] === word2) {
            if (word1_index !== -1) {
                shortestDis = Math.min(shortestDis, Math.abs(i - word1_index))
            }
            word2_index = i;
        }
    }
    return shortestDis;


};