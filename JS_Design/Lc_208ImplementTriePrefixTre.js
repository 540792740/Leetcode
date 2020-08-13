/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.dic = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let tempDic = this.dic;
    for(let char of word){
        if(tempDic[char]) tempDic = tempDic[char]
        else{
            tempDic[char] = {}
            tempDic = tempDic[char];
        }
    }
    tempDic['#']  = '#'
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let tempDic = this.dic;
    for(let char of word){
        if(tempDic[char]) tempDic = tempDic[char]
        else{return false}
    }
    if (tempDic['#']) return true;
    return false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let tempDic = this.dic;
    for(let char of prefix){
        if(tempDic[char]) tempDic = tempDic[char]
        else{return false}
    }
    for(let i in tempDic) {
        return true;
    }
    return false
};

var obj = new Trie()
obj.insert("apple")
obj.search("apple")
obj.search("app")
obj.startsWith("app")
obj.insert("app")
obj.search("app")

