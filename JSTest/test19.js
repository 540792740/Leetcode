

//A
function getCurrentMeal1() {
    let message = '';
    if (tm >= '6:00' && tm <= '9:00')  message = r1;
    else if ( tm >= '11:00' && tm <= '13:00') message = r2;
    else if ( tm >= '17:00' && tm <= '20:00') message = r3;
    else message =r4;
    return message;
}

//B
function getCurrentMeal2() {
    let message = '';
    if (tm >= '6:00' && tm < '9:00')  message = r1;
    if ( tm >= '11:00' && tm <= '13:00') message = r2;
    if ( tm >= '17:00' && tm < '20:00') message = r3;
    else message =r4;
    return message;
}

//C
function getCurrentMeal3() {
    let message = '';
    console.log(tm >= '6:00' && tm < '9:00')
    console.log(tm >= '11:00' && tm <= '13:00')
    console.log(tm >= '17:00' && tm <= '20:00')
    switch (tm) {
        case tm >= '6:00' && tm < '9:00':
            message = r1;
            break;
        case tm >= '11:00' && tm <= '13:00':
            message = r2;
            break;
        case tm >= '17:00' && tm <= '20:00':
            message = r3;
            break;
        default:
            message = r4;
    }
    return message;
}
//D
function getCurrentMeal4() {
    var message = ( tm >= '6:00' && tm < '9:00' ) ? r1 : ( tm >= '11:00' && tm <= '13:00') ? r2 : ( tm >= '17:00' && tm <= '20:00') ? r3 : r4
    return message

}

//E
function getCurrentMeal5() {
    var message = ( tm >= '6:00' || tm < '9:00' ) ? r1 : ( tm >= '11:00' || tm <= '13:00') ? r2 : ( tm >= '17:00' || tm <= '20:00') ? r3 : r4
    return message

}

var dt= new Date();
var hr = dt.getHours();
var min = dt.getMinutes();
var tm = hr.toString()+':'+min.toString();
var r1 = " BreakFast is served  in the morning ";
var r2 = " Midday is time for lunch ";
var r3 = " Supper is now served ";
var r4 = " It is not time to eat ";
var message1 = getCurrentMeal1();
var message2 = getCurrentMeal2();
var message3 = getCurrentMeal3();
var message4 = getCurrentMeal4();
var message5 = getCurrentMeal5();
// console.log(message1)
// console.log(message2)
console.log(message3)
// console.log(message4)
// console.log(message5)
