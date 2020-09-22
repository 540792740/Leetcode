// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let temp = 2;
    let res = 2;
    if(A.length === 1) return 0
    let firstValue = [A[0],0];
    let secondValue = [A[1],1];

    for(let i = 2; i < A.length; i++){
        if(A[i] === firstValue[0] || A[i] === secondValue[0]){
            if(A[i] === firstValue[0]) firstValue[1] = i
            else secondValue[1] = i;
            temp++;
            res = Math.max(res, temp)
        }
        else {
            if (A[i - 1] === secondValue[0]) {
                temp = i - firstValue[1];
                firstValue = secondValue;
                secondValue = [A[i], i];

            } else {
                temp = i - secondValue[1];
                secondValue = [A[i], i];
            }
        }
    }
    return res
}

// console.log(solution([0,5,4,4,5,12]))
console.log(solution([0,5,5,4,4,12,12,12]))
// console.log(solution([4,2,2,4,2]))
// console.log(solution([1,2,3,2]))
