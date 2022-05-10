/*
Promise.all() 方法接收一个 promise 的 iterable 类型（注：Array，Map，Set都属于ES6的iterable类型）的输入，
并且只返回一个Promise实例， 那个输入的所有 promise 的 resolve 回调的结果是一个数组。

const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p2 延时5秒'), 5000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p3 延时两秒'), 2000)
})
const p4 = Promise.reject('p4 rejected')
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => reject('p5 rejected 延时1.5秒'), 1500)
})

Promise.all([p1, p2, p3 ]).then(res=> console.log(res))  => ['p1', 'p2 延时5秒', 'p3 延时两秒' ]
Promise.all([p1, p4, p5 ]).then(res=> console.log(res))  => p4 rejected
*/

Promise.MyAll = function (promises) {
  let arr = [];
  let count = 0; // 计数器统计是否所有都执行
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        arr[i] = res;
        count += 1;
        if (count === promises.length) resolve(arr)
      }, reject)
    })
  })
}
