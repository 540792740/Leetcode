 // 1  2  3 4 5 6 7 8 9
 // 0 1 2
 // 3 4 5
//  6 7 8
//
function checkAdd(arr){
    for(let i = 0; i < 3; i++){
        let row = parseInt(arr[i * 3 ]) +
                    parseInt(arr[i * 3  + 1]) +
                    parseInt(arr[i * 3  + 2])

        let col = parseInt(arr[0 + i]) +
                    parseInt(arr[3 + i]) +
                    parseInt(arr[6 + i])

        if(row !== 15 || col !== 15) return false
    }
    let leftSlope = parseInt(arr[0]) +
                    parseInt(arr[4]) +
                    parseInt(arr[8])
    let rightSlope = parseInt(arr[2]) +
                        parseInt(arr[4]) +
                        parseInt(arr[6])
    if (leftSlope !== 15 || rightSlope !== 15) return false
    return true
}

 // function fullpermutate(str) {
 //     var result = [];
 //     if (str.length > 1) {
 //         for (var m = 0; m < str.length; m++) {
 //             var left = str[m];
 //             var rest = str.slice(0, m) + str.slice(m + 1, str.length);
 //             var preResult = fullpermutate(rest);
 //             for (var i = 0; i < preResult.length; i++) {
 //                 var tmp = left + preResult[i]
 //                 // if(tmp.length === )
 //                 if(tmp.length === 9 ) {
 //                    if(checkAdd(tmp)) result.push(tmp);
 //                 }
 //                 else result.push(tmp);
 //
 //             }
 //         }
 //     } else if (str.length === 1) {
 //         result.push(str);
 //     }
 //     return result;
 // }
 //
 // console.log(fullpermutate('123456789'))




 function fullpermutate1(str) {
     var result = [];
     if (str.length > 1) {
         for (var m = 0; m < str.length; m++) {
             var left = str[m];
             var rest = str.slice(0, m) + str.slice(m + 1, str.length);
             var preResult = fullpermutate1(rest);
             for (var i = 0; i < preResult.length; i++) {
                 var tmp = left + preResult[i]
                 result.push(tmp);

             }
         }
     } else if (str.length === 1) {
         result.push(str);
     }
     return result;
 }

 console.log(fullpermutate1('123'))
