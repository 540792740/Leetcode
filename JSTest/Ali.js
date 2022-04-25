
function getArray(inputArray) {

    if (inputArray.length <= 1) return inputArray

    // init return array
    let res = inputArray[0];

    for (let i = 1; i < inputArray.length; i++) {
        let tempArr = [];

        for (let resElement of res) {
            for (let element of inputArray[i]) {
                tempArr.push(resElement + '-' + element);
            }
        }
        res = tempArr;
    }
    return res
}
// console.log(getArray([[1, 2], ['a', 'b'], ['test', 'ab']]));
// console.log(getArray([[1, 2], [2, 3]]));
// console.log(getArray([]));
// console.log(getArray([['a', 'b'], ['苹果', '梨', '香蕉'], ['红', '黑']]));


function fibonacci(n) {
    
    if (n === 0) {
        return
    }
    else if (n === 1) {
        return 1
    }
    else if (n === 2) {
        return 1
    }
    else {
        let a = 1;
        let b = 1;
        
        while (n > 2) {
            [a, b] = [b, a + b];
            n--;
        }
        return b

    }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));


