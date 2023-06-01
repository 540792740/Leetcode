
var a = { __proto__: Array.prototype };
let a1 = a instanceof Array; // true
let a2 = a.constructor === Array; // true
let a3 = Array.prototype.isPrototypeOf(a); // true
let a4 = Object.getPrototypeOf(a) === Array.prototype; // true

function func(a, b) {
    return a = b;
}
// let func1 = func.prototype.bind({});
let func2 = new Function('return ' + func.toString())();
console.log({ func, func2 });