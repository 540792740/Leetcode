/**
 * @param {string} s
 * @return {string}
 */
var reverseWords1 = function(s) {
    let arr = s.split(' ');
    for(let i in arr){
        arr[i] = arr[i].split('').reverse().join('')
    }
    return arr.join(' ')
};
var reverseWords = function(s) {
    let arr = s.split(" ");
    return arr.map(a=>{
        return a.split("").reverse().join("")
    }).join(' ')
}

console.log(reverseWords( "Let's take LeetCode contest"))
