function func1(str) {
    let res = 0;
    let dic = {};
    let max = 1

    // dic
    for(let i of str){
        if(dic[i] > 0){
            dic[i] += 1
            max = Math.max(max, dic[i])
        }
        else{dic[i] = 1}
    }
    console.log(dic)

    let arr = new Array(max + 1).fill(0);
    console.log(arr)
    for(let i in dic){
        arr[dic[i]] += 1
    }
    console.log(arr)

    let temp = 0
    for(let i = max; i >= 0; i--){
        if(i >= 1) {
            arr[i] += temp;
            if (arr[i] > 1) {
                temp = arr[i] - 1;
                res += temp;
            } else {
                temp = 0
            }
        }
        else{
            if(arr[i] >= 1) res += arr[i] - 1
        }
    }
    return res
}


// console.log(func1("abbccddddffffggggzzzzzxxxxx"), "result : 12")
// console.log(func1("abc"), "result : 12")


let Minimum_deletions = function (theS) {
    let allCount={}

    for (let i = 0; i < theS.length; i++) {
        if ( allCount[theS[i]] ) {
            allCount[theS[i]] ++
        } else {
            allCount[theS[i]] = 1
        }
    } //统计每个字母出现的次数

    // let theMax = Math.max(...Object.values( allCount ));
    let theArray = [...Object.values( allCount )].sort((a, b) => a - b);
    console.log(theArray)
    //用出现的次数，把它转换成数组，然后保持每个元素是唯一，若不唯一则减1.计算减1的次数

    let myAnswer = 0;
    for (let i = theArray.length; i >0; i--) {
        console.log( theArray);
        if ( theArray[i]==0 ) {
            theArray.splice(i,1)
        }
        if ( theArray[i]==theArray[i-1] ) {
            theArray[i-1]--
            myAnswer ++
            i++
        }
        // console.log( theArray );
        theArray.sort((a, b) => a - b)
    }

    console.log( allCount );
    // delete allCount.e
    return myAnswer
}

console.log(Minimum_deletions("abbccddddffffggggzzzzzxxxxx"))
console.log(Minimum_deletions("abbcceeeee"))
