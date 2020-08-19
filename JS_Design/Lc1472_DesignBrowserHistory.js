/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.list = [homepage];
    this.index = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    let ls = this.list.length;
    if(this.index !== ls){
        this.list = this.list.slice(0, this.index);
    }
    this.index++;
    this.list.push(url)
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if(this.index - steps - 1 < 0) this.index = 1;
    else this.index = this.index - steps;
    return this.list[this.index - 1];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    let ls = this.list.length;
    if(this.index + steps > ls) this.index = ls;
    else this.index = this.index + steps;
    return this.list[this.index - 1]
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
