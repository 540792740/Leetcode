/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = 0;
  let res = [];
  candies.forEach(item => {
    if (item > maxCandies) {
      maxCandies = item;
    }
  });
  candies.forEach(item => {
    if (item + extraCandies >= maxCandies) {
      res.push(true);
    } else {
      res.push(false);
    }
  });
  return res;
};