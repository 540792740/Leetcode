/* example 5 */
console.log(1);
setTimeout(() => {
  console.log(7);
  Promise.resolve().then(() => console.log(8));
});
new Promise((resolve, reject) => {
  console.log(2)
  resolve(4)
}).then((data) => {
  console.log(data);
  Promise.resolve()
    .then(() => console.log(5))
    .then(() => {
      console.log(6)
      setTimeout(() => console.log(10), 0);
    });
})
setTimeout(() => console.log(9))
console.log(3);