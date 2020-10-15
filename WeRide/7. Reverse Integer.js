
const reverseInt = (num) => {
    // Confirm flag, negative or positive
    let flag = 1;
    if(num < 0) flag = -1;
    if(num > 0) flag = 1;

    // make num as positive, then put into string to reverse
    num = Math.abs(num) + '';

    // find reverse num;
    let tempStr =''
    for(let i of num){
        tempStr = i + tempStr;
    }

    if(tempStr > 2**31 - 1 || tempStr < -(2**31)){return 0}
    return flag * tempStr;
}

/*
* input is number? cannot be string?
* range: reverse 1234569999 -> 9999654321 may out of the range; -> 0
*
* */

console.log(reverseInt(123))
