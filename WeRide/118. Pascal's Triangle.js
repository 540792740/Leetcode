/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // line 0
    if(numRows === 0){return []}

    // line 1
    else if(numRows === 1){return [[1]]}

    // line 2
    else if(numRows === 2){return [[1], [1,1]]}

    // line >= 3
    // init result = [1,2,1]
    else{
        let res = [[1], [1,1]];

        //init index from 3 to numRows
        let index = 3;
        let temp
        while(index <= numRows){
            // current line
            temp = [1];
            for(let i = 1; i < index - 1; i++){
                // push number equal to sum of last line two element
                temp.push(res[index - 2][i - 1] + res[index - 2][i]);
            }
            index++;

            // last num is 1, each line, push into temp string
            temp.push(1);
            res.push(temp);
        }

        //return result array
        return res;
    }
};
