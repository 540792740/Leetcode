let stdin = '20'

// time complexity O()


stdin = parseInt(stdin);
let coin = [5,3,1];

function helper(coin, left, count){
    if(left === 0 ) return count;
    else{
        for(let i = 0; i < coin.length; i++) {
            if (left - coin[i] === 0) {
                return count + 1;
            } else if (left - coin[i] < 0) {
                continue;
            } else {
                return helper(coin, left - coin[i], count + 1)
            }
        }
    }
}

console.log(helper(coin, stdin, 0))


