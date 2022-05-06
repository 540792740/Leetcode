/* example 2 */
console.log('1')
async function async1() {
  await async2()
  console.log('5')
}
async function async2() {
  console.log('2')
}
async1()
setTimeout(() => console.log('8'), 0)
new Promise(resolve => {
  console.log('3')
  resolve()
})
  .then(() => console.log('6'))
  .then(() => console.log('7'))
console.log('4')