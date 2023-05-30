/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let res = '';
  let owlMap = { a: 1, A: 1, E: 1, e: 1, I: 1, i: 1, O: 1, o: 1, U: 1, u: 1 };
  let tempStr = '';
  let index = 0;
  for (let alpha of s) {
    if (owlMap[alpha]) {
      tempStr = alpha + tempStr;
    }
  }
  for (let alpha of s) {
    if (owlMap[alpha]) {
      res = res + tempStr[index];
      index++;
    } else {
      res += alpha;
    }
  }
  return res;
};


