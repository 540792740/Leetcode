/* example 3 */
setTimeout(() => console.log("4"), 0)
const P = new Promise((resolve, reject) => {
  console.log("1")
  setTimeout(() => {
    resolve()
    console.log("5")
  }, 0)
})
P.then(() => console.log("3"))
console.log("2")
