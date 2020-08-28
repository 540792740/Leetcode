/*
* Generator
* Author : Jiawei Wang
*/

function* foo(x){
    yield x + 1;
    yield x + 2;
    return x + 3
}
let f = foo(3);
console.log(f.next()) //{ value: 4, done: false }
console.log(f.next()) //{ value: 5, done: false }
console.log(f.next()) //{ value: 6, done: true }


console.log('A,b,c-b@Q'.replace(/[^\w]/g, '') )
console.log('A,b,c-b@Q'.replace(/[A-z]/g, '')   )
