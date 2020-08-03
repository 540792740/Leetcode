var LRUCache = function(capacity) {
    this.map = new Map();
    // this.arr = [];
};

LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){return this.map.get(key)}
    else return -1
};

LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){}
    else{
        let ls = this.arr.length;
        this.map.set(key, [ls , value])
        this.arr.push()
    }
};
