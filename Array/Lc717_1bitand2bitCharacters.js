/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0;
    let ls = bits.length;
    while(i < ls - 1){
        i += !bits[i] ? 1 : 2
    }
    return i === ls - 1
};
