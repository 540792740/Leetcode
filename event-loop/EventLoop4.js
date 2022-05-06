/* example 4 */
console.log(1);
setTimeout(() => {
  console.log(5);
  Promise.resolve().then(() => console.log(6));
});
new Promise((resolve, reject) => {
  console.log(2)
  resolve(4)
}).then((data) => console.log(data))
setTimeout(() => console.log(7))
console.log(3);