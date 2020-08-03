class Node{
    constructor(key, val) {
        this.key = key;
        this.val = val
        this.prev = null;
        this.next = null;
    }
}
class LRUCache{
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    get(key){
        if(this.map.has(key)){
            const node = this.map.get(key);
            this.remove(node)
            this.add(node)
            return node.val;
        }
        else return -1
    }

    put(key, val){
        if(this.map.has(key)) {
            this.remove(this.map.get(key))
        }
        const node = new Node(key, val)
        this.map.set(key, node);
        this.add(node);
        if(this.map.size > this.capacity){
            let n = this.head.next
            this.remove(n)
            this.map.delete(n.key)
        }

    }
    remove(node){
        let p = node.prev;
        let n = node.next;
        p.next = n;
        n.prev = p;
    }
    add(node){
        let p = this.tail.prev;

        // connect p node
        p.next = node;
        node.prev = p;

        //connect node and tail
        this.tail.prev = node;
        node.next = this.tail;
    }

}
const LRU = new LRUCache(2)
LRU.put(1,1)
LRU.put(2,2)
LRU.get(1)
LRU.put(3,3)
LRU.get(2)
// LRU.put(4,4)
// LRU.get(1)
// LRU.get(3)
// LRU.get(4)


// var LRUCache = function(capacity) {
//     this.map = new Map();
//     this.capacity = capacity;
// };
//
// LRUCache.prototype.get = function(key) {
//     if(this.map.has(key)){
//         let value = this.map.get(key);
//         this.map.delete(key);
//         this.map.set(key, value);
//         return this.map.get(key)
//     }
//     else return -1
// };
//
// LRUCache.prototype.put = function(key, value) {
//     if(this.map.has(key)){this.map.delete(key)}
//
//     this.map.set(key, value)
//     if(this.capacity < this.map.size){
//         this.map.delete(this.map.keys().next().value);
//     }
// };
