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

永远返回最快的，不管是resolve还是reject
Promise.race([p1, p2, p3 ]).then(res=> console.log(res))  => p1
Promise.race([p1, p4, p5 ]).then(res=> console.log(res))  => p1
Promise.race([p2, p4, p5 ]).then(res=> console.log(res))  => p4 rejected
*/
Promise.MyRace = function (promises) {
  return new Promise((resolve, reject) => {
    // 这里不需要使用索引，只要能循环出每一项就行
    for (const item of promises) {
      Promise.resolve(item).then(resolve, reject) //.then()第二个参数，是处理错误的回调函数：
    }
  })
}