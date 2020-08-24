// var cluster = require('cluster');
// if (cluster.isMaster) {
//     var worker = cluster.fork();
//     worker.on('message', function(msg) {
//         console.log('Master:', msg); }); }
// else {
//     console.log('Worker:', 'worker starting');
// process.send('worker started'); process.exit();}

//2
// var util = require('util');
// var events = require('events');
// var domain = require('domain');
// var d = domain.create();
// function EventDrivenClass() {
//     // events.EventEmitter.call(undefined, this)
//     events.EventEmitter()
// }
// util.inherits(EventDrivenClass, events.EventEmitter);
// d.on('error', function(err) {
//     console.log(err.errorMessage);
// });
// d.run(function() {
//     var eventDriven = new EventDrivenClass();
//     eventDriven.emit("error", {errorMessage: "error message"});
// });

//3
// function getRandom()
// {
//     tdy = new Date();
//     var bigN=tdy.getSeconds()*tdy.getTime();
//     bigN *= Math.sqrt(tdy.getMinutes());
//     var randN = (bigN % 4) + 1;
//     return Math.floor(randN);
// }
//
// let a = getRandom()
// console.log(a)

//4
// printer_scanner.js
// module.exports = function(printer, scanner){
//     return{
//         print: function (message) {
//             printer.print(message);
//         },
//         scan: function() {
//             return scanner.scan();
//         }
//     }
// };
//
// // devices.js
// var printer = require("./printer");
// var scanner = require("./scanner");
// var printer_scanner = require("./printer_scanner")(printer, scanner);
// printer_scanner.print("Test Message");
// var scanned_message = printer_scanner.scan();

// console.log("The initial type of function = " + typeof tfunc);
// function tfunc(I) {   }
// console.log("The type of function after call = " + typeof tfunc);

//7
// var express = require('express');
// var http = require('http');
//
// var app = express();
//
// app.use(function(req, res, next){
//     console.log("processing request on server");
//
// });
// app.use(express.static('files'));
// var server = app.listen(3000, function(){
//
// });

//http client
// http.request({host: 'localhost', port: 3000, path: '/user.json'}, function(response) {
//     response.on('data', function(data) { process.stdout.write(data);});
//     response.on('end', function(){server.close();});
// }).end();

//8
// console.log('1johndoe', 30, {first: 'John', last: 'Doe'});
//     console.log('2user %s of age %d has name %j', 'johndoe', 30, {first: 'John', last: 'Doe'});
//     console.log('3user %s of age %d has name %j', ['johndoe', 30, {first: 'John', last: 'Doe'}]);
//     console.log({user:'4johndoe', age:30, name:{first: 'John', last: 'Doe'}, inspector: function(){return JSON.stringify(this)}});
//     console.log({format: '5user %s of age %d has name %j', args: ['johndoe', 30, {first: 'John', last: 'Doe'}]});


//10
// function test(a, b) {
//     return (a * b)+(a + b);
// }
//
// var a = 1;
// var b = 2;
// var c = test(a,b);
// console.log(c)

//11
// function Square(length) {
//     this.length = length;
// }
// function Square_area(){
    // Square.addProperty("area", Square_area);
    // Square.area = Square_area;
    //     Square.prototype.area = Square_area;
    //     Square.area(Square_area);
        // Square.addProperty(Square_area);
    // return this.length*this.length;
// }
// var a = new Square(3);
// console.log(a.area)


//12

// var message = "This is a "message"";
// var message = 'This is a "message"';
// var message2 = 'This is a "' + 'message' + '"';
// var message = "This is a /"message/"";
// var message = "This is a "message"";
// console.log(message)

// var i;
// Object.prototype.array = new Array(3);
// var o = new Object();
// o.array[0] = "2";
// o.array[1] = "4";
// o.array[2] = "6";

// i = o.prototype.array[1];
// console.log(o)
// i = o.array(1);
// console.log(i)
// i = o.array[1];
// console.log(i)
// i = o.array(2);
// console.log(o)
// i = o.array["1"];
// console.log(i)

// function test(a, b) {
//     return a+b;
// }

// console.log(test.call(this, [2, 3]));
// b
// console.log(test.apply(this, [2, 3]));
// console.log(test.call(2, 3));
//  test.apply(this, 2, 3);
//e
// console.log(test.call(this, 2, 3))

//19
// a = typeof new Number(0);
// console.log(a)


//
// var assert = require('assert');
// assert.regexEqual = function(actual, regex, message) {
//     if (!actual.match(regex)) {
//         assert.fail(actual, regex, message, 'regexEqual', assert.regexEqual);
//     }
// };
// console.log(assert.regexEqual('{ name: "John Doe" }', 'John', 'The name should contain John'));
// console.log(assert.regexEqual('{ name: "John Doe" }', 'john', 'The name should contain john'));
// console.log(   assert.regexEqual('{ name: "John Doe" }', /John/, 'The name should contain John'));
// console.log(assert.regexEqual('{ name: "John Doe" }', /john/, 'The name should contain john'));
// console.log(assert.regexEqual('{ name: "John Doe" }', '/John/', 'The name should contain John'));
//
// function test1() {
//     for (var res = [], i = 0; i < 10000; i++) {
//         res[i] = "=";
//     }
//     res = res.join("");
//     return res;
// }
// var start = new Date();
// test1()
// var end=new Date();
// console.log(end - start)
//
// //A
// function test2() {
//     for (var res = "", i = 0; i < 10000; i++) {
//         res += "=";
//     }
//     return res;
// }
// var start = new Date();
// test2()
// var end=new Date();
// console.log(end - start)
//
// //B
// function test() {
//     var res = new String("");
//     var i = 0;
//     while (i<10000) {
//         res += new String("=");
//         i++;
//     }
//     return res;
// }
// var start = new Date();
// test()
// var end=new Date();
// console.log(end - start)
// //C
// function test() {
//     for (var i = 0, res = new Array(); i < 10000; ) {
//         res.push("=");
//     }
//     res = res.join("");
//     return res;
// }
// var start = new Date();
// test()
// var end=new Date();
// console.log(end - start)
//
// //D
// function test() {
//     for (var res = "", i = 0; i < 10000; i++) {
//         res = res + "=";
//     }
//     return res;
// }
// var start = new Date();
// test()
// var end=new Date();
// console.log(end - start)
//
// //E
// function test() {
//     for (var res = new Array(); res.length < 10000; ) {
//         res.push("=");
//     }
//     res = res.join("");
//     return res;
// }
//
// var start = new Date();
// test()
// var end=new Date();
//
// console.log(start, end, end - start)
// var i=0;
// for(j=0;j<=5;j+=1)
// {
//     i++;
// }
// console.log(i)


//29
// var x = 3;
// var y = 0;
//
// function testY() {
//     y++;
//     return true;
// }
//
// if (x>=3 && testY()) { y++; }
// if (x<3 || testY()) { y++; }
// if (x<3 && testY()) { y++; }
// if (x>=3 || testY()) { y++; }
//
// var z = y;
// console.log(z)

//30
// var cluster = require('cluster');
// var http = require('http');
// var port = 3000;
// if (cluster.isMaster) {
//     var worker1 = cluster.fork();
//     var worker2 = cluster.fork();
//     worker1.send(port);
//     worker1.send(port+1);
//     worker2.send(port+1);
//     worker2.send(port);
// } else {
//     process.on('message', function(port){
//         console.log("worker " + cluster.worker.process.pid + " started on port " + port);
//         http.createServer(function (req, res) {
//             res.end("worker: " + cluster.worker.process.pid);
//         }).listen(port);
//     });
// }
//
// process.on('uncaughtException', function (err) {
//     console.log('exception occurred: ', err);
//     console.log('stackTrace:', err.stack);
//     if(!(err instanceof ReferenceError))
//         process.exit(1);
// });
// process.on('exit', function(errorCode){
//     console.log('process exited with code ' + errorCode + ', cleaning up');
// });
// // cause ReferenceError uncaught exception
// missingFunction();
//
// console.log('line after calling the missing function.');
//
// // cause another uncaught exception
// require('fs').readFile('missingFile.txt');


var fib = function (n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
// var start = new Date();
// fib(100)
// var end=new Date();
// console.log(end - start)
// A.
// var fibonacci = (function () {
//     var cache = [1, 1];
//     var fib = function (n) {
//         if (n >= cache.length) {
//             for (var i = cache.length; i <= n; i++) {
//                 cache[i] = cache[i - 2] + cache[i - 1];
//             }
//         }
//         return cache[n];
//     }
//     return fib;
// });
// var start = new Date();
// fibonacci(100)
// var end=new Date();
// console.log(end - start)
//
// // B.
//     var fibonacci = function () {
//     var memo = [0, 1];
//     var fib = function (n) {
//         var result = memo[n];
//         if (typeof result != "number") {
//             result = fib(n - 1) + fib(n - 2);
//             memo[n] = result;
//         }
//         return result;
//     };
//     return fib;
// } ();
// var start = new Date();
// fibonacci(100)
// var end=new Date();
// console.log(end - start)
//
// // C.
//     var fibonacci = function () {
//     var memo = [0, 1];
//     var fib = function () {
//         var result = memo[n];
//         if (typeof result != "number") {
//             result = fib(n - 1) + fib(n - 2);
//             memo[n] = result;
//         }
//         return result;
//     };
//     return fib;
// } ();
//
// // D.
//     var fibonacci = function () {
//     var memo = [0, 1];
//     var fib = function (n) {
//         var result = memo[n];
//         if (typeof result != "number") {
//             result = fib(n - 1) + fib(n - 2);
//             memo[n] = result;
//         }
//     };
//     return fib;
// } ();
//
// // E.
//     var fibonacci = (function () {
//     var cache = [1, 1];
//     var fib = function (n) {
//         if (n >= cache.length) {
//             for (var i = cache.length; i <= n; i++) {
//                 cache[i] = cache[i - 2] + cache[i - 1];
//             }
//         }
//         return cache[n];
//     }
//     return fib;
// })();

//37
// function test(x, y)
// {
//     return (Math.sqrt(x*x + y*y));
// }
// function test2(x, y)
// {
//     return (x ^ y);
// }
// console.log(test2(test(3,4),3));

//38
// console.log(new Date('December 22, 2014'));
// console.log(new Date('12/22/2014'));
// console.log(new Date(2014, 12, 22));
// console.log( new Date(12, 22, 2014))
// console.log(new Date(2014, 11, 22));

//39
// expires=new Date();
// expires.setTime(expires.getTime() + 24 * 60 * 60 * 365 * 1000);
// document.cookie = "c1=data; expires=" + expires.toGMTString();
//
//    var A=new Array[];
// console.log(A)
//    var A=new Array("A", "2", "C");
// console.log(A)
//    var A=new Array(5);
// console.log(A)
//    var A= Array(0, 1, 2);
// console.log(A)
//    var A=new A("A", "B", "C");console.log(A)


// var total=0;
// for (var x = 1; x < 5; x = x << 1) {
//     total += x;
// }
// console.log(total
//
// )

// var assert = require('assert');
// function test(val){
//     if (!val) {
//         assert.notEqual(val, 1, 'This should not have passed.');
//     }
//     assert.equal(val, 1, 'This should have passed.');
// }
// test(1);
// test(0);

a = parseInt('6', 16)
console.log(a)
