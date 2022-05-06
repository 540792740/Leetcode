/* example 1 */
console.log('1');
setTimeout(() => console.log('5'), 0);
Promise.resolve()
  .then(() => console.log('3'))
  .then(() => console.log('4'));
console.log('2');