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
