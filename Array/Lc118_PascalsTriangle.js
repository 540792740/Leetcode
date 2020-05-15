/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0){return []}
    else if(numRows === 1){return [[1]]}
    else if(numRows === 2){return [[1], [1, 1]]}
    else{
        let index = 3
        let temp = [1]
        var res = [[1], [1, 1]];
        while (index <= numRows) {
            temp = [1];
            for (let i = 1; i < index - 1; i++) {
                temp.push(res[index - 2][i - 1] + res[index - 2][i])
            }
            index++;
            temp.push(1)
            res.push(temp)
        }
    }
    return res;
};

console.log(generate(5))
