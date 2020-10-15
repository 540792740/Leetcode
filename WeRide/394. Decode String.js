/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

    // Init result
    let res = '';

    // init stack [number, alpha, final]
    let stack = [['', '', '']];

    // init alpha, number;
    let alpha = '';
    let num = '';
    // For loop travers array;
    for(let i of s){
        // number
        if(i >= 0 && i <= 9){
            num = num + i;
        }

        // alpha
        else if(i >= 'a' && i <= 'z'){
            alpha = alpha + i;
        }
        else if(i >= 'A' && i <= 'Z'){
            alpha = alpha + i;
        }

        // i = [
        else if(i === '['){
            stack.push([num, alpha, '']);

            num = '';
            alpha = '';
        }

        // i == ]
        else if(i === ']'){
            let temp = stack.pop();
            let index = Number(temp[0]);
            let tempStr = temp[2] + alpha;
            alpha = tempStr;
            while(index > 1){
                alpha += tempStr;
                index--;
            }
            stack[stack.length - 1][2] += temp[1] + alpha;
            alpha = '';
        }

        // error syntax
        else {
            console.log(i)
        }

    }
    // Return String
    return stack.pop()[2] + alpha;
};

// console.log(decodeString("3[a]2[bc]"))
console.log(decodeString("3[a]2[b4[F]c]"))
// console.log(decodeString("100[leetcode]"))
