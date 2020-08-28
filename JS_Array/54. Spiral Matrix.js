/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];

    //Init vertical lens
    let row_m = matrix.length - 1;

    // Avoid no matrix element
    if(row_m === -1) return res

    // Init horizon lens
    let col_n = matrix[0].length - 1;

    let row_x = 0;
    let col_y = 0;

    while(col_y <= col_n && row_x <= row_m) {
        // loop right
        for (let i = col_y; i <= col_n; i++) {
            res.push(matrix[row_x][i]);
        }
        row_x++;

        //loop bottom
        for (let i = row_x; i <= row_m; i++) {
            res.push(matrix[i][col_n]);
        }
        col_n--;

        //loop left
        if (row_x <= row_m) {
            for (let i = col_n; i >= col_y; i--) {
                res.push(matrix[row_m][i]);
            }
            row_m--;
        }
        // console.log(res)

        //loop top
        if (col_y <= col_n) {
            for (let i = row_m; i >= row_x; i--) {
                res.push(matrix[i][col_y]);
            }
            col_y++;
        }
    }
    return res
};

// console.log(spiralOrder([
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]))

console.log(spiralOrder(
    [[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
