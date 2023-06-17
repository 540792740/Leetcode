function Calculator(val) {
    this.result = val;
}
Calculator.prototype = {
    add(val) {
        this.result += val;
        return this;
    },
    sub(val) {
        this.result -= val;
        return this;
    }

}

// const calculator = new Calculator(10);
// console.log(calculator.add(20).sub(10).sub(-20));
console.log([1, 2].toString());

var arr = []
for (var i = 0; i < 3; i++) {
    let a = i;
    arr[i] = function () {
        console.log(i, a)
    }
}
arr[0]()
arr[1]()
arr[2]()