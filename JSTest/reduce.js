var num = [1,2,3,43,4]
var c = (total, num)=>{
    return total + num
}
var b = num.reduce(c)
console.log(b)
