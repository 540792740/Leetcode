function myMap(cb,arr,thisArg){
    var res = [];
    for(var i=0;i<arr.length;i++){
        res.push(cb.call(thisArg,this[i],i,this));
    }
    return res
}
Array.prototype.fakeMap= function(cb,thisArg){
    let arr= []
    for(let i=0; i<this.length; i++){
        arr.push(cb.call(thisArg,this[i],i,this));
    }
    return arr
}

// [1,2,3].fakeMap(a=> {return a * 2})
console.log(myMap((x) => x + 1, [1,2]))
