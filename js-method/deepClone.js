
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

let arr = [new RegExp, function () { }, undefined, NaN, Infinity];
let obj = { NaN, Infinity, undefined }
let str = JSON.stringify(arr);
let obj1 = JSON.stringify(obj);
str = JSON.parse(str);
obj1 = JSON.parse(obj1);
console.log(str, obj1)

function cloneFunction(func) {
  const funcString = func.toString(); // func变成string
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const param = paramReg.exec(funcString);
  const body = bodyReg.exec(funcString); // 匹配到函数体
  const paramArr = param[0].split(','); //匹配到参数
  if (func.prototype) { //普通函数'
    if (body) {
      return param ?
        new Function(...paramArr, body[0]) :
        new Function(body[0]);
    } else {
      return null;
    }
  } else {
    return eval(funcString); //箭头函数
  }
}
let func1 = cloneFunction((val) => { return val });
func2 = cloneFunction(function (val) { return val });
console.log(func1(4));
console.log(func2(4));

function cloneOtherType(targe, type) {
  const Ctor = targe.constructor;
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(targe);
    case regexpTag:
      return cloneReg(targe);
    case symbolTag:
      return cloneSymbol(targe);
    default:
      return null;
  }
}