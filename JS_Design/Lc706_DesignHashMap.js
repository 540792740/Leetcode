class Bucket {
    constructor() {
        this.bucket = []
    }
    get(key){
        for(let i in this.bucket){
            if (this.bucket[i][0] === key) return this.bucket[i][1]
        }
        return -1
    }
    update(key, value){
        for(let i in this.bucket){
            if(key === this.bucket[i][0]){
                this.bucket[i] = [key, value]
                return;
            }
        }
        this.bucket.push([key, value])
    }
    remove(key){
        for(let i in this.bucket){
            if(this.bucket[i][0] === key) {
                this.bucket.splice(i,1);
                return
            }
        }
    }
}
class MyHashMap {
    constructor() {
        this.key_space = 20;
        this.map = []
        for(let i = 0; i < this.key_space; i++){
            this.map.push(new Bucket())
        }
        console.log(this.map)
    }
    put(key, value){
        let hash_key = key % this.key_space;
        this.map[hash_key].update(key, value)
    }
    get(key){
        let hash_key = key % this.key_space;
        return this.map[hash_key].get(key);
    }
    remove(key){
        let hash_key = key % this.key_space;
        this.map[hash_key].remove(key)
    }
}
const obj = new MyHashMap()
