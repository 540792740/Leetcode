/**
 * @param {number} n
 * @return {number}
 */

    // Lagrange's four-square theorem:
    // every natural number can be represented as the sum of four integer squares.
    // p = a^2 + b^2 + c^2 + d^2
    // So return value can be only 1,2,3,4;
    // 1 means n is square
    // 2

var numSquares = function(n) {

    //check value is or not square
    const isSquare = (x)=>{
        return Math.floor(Math.sqrt(x))**2 === x;
    }

    //check when n is square:
    if(isSquare(n)) return 1;

    //n! = 4^x(8 * m + 7);
    while(n % 4 === 0) n /= 4;

    //n%8 !== 7, at most return 3
    //else return 4
    if(n % 8 === 7) return 4;

    // check return 2
    for(let i = 0; i <= n; i++){
        if(isSquare(n - i * i)) return 2
    }
    return 3
}







//slow
var numSquares1 = function(n) {
    // find all possible base element:

    // init base array, fill with 1;
    let arr = [0];

    let base = 1;

    while(base <= n){
        arr.push(base);
        base++;
    }

    // init base * base
    let available = 1;
    base = 1;

    while(available <= n){

        // traverse arr[]
        for(let i in arr){
            if(i >= available && arr[i] > arr[i - available] + 1){
                arr[i] = arr[i - available] + 1;
            }
        }
        available = base * base;
        base++;

    }

    //return last ele
    return arr[arr.length - 1];

};


// console.log(numSquares(50))
console.log(numSquares(12))
// console.log(numSquares(0))
// console.log(numSquares(10))
// console.log(numSquares(16))
