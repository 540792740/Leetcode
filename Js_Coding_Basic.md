####1. Map, Hash
* map[0] = 1;

####2. Math
* Math.max(num[0], num[1])

####3. Max, Min Value
* Min: -Number.MAX_VALUE  <br>
* Max: Number.MAX_VALUE

####4. Sort
* arr.sort(); // returns [-1, -3, -5, 0, 1, 3]   <br> 
* **Ascend:** arr.sort((x, y) => x - y); // returns [-5, -3, -1, 0, 1, 3]
* **Descend:** arr.sort((x, y) => y - x); // returns [ 3, 1, 0, -1, -3, -5 ]

####5. Divided
* Math.ceil(5 / 2)  ->3     进一法
* Math.floor(5 / 2) ->2     向下取整
* parseInt(5 / 2) ->2       向下取整
* Math.round(5 / 2) ->3     四舍五入

####6. shift, unshift
nums = [1, 2, 3, 4]
* nums.shift()   -> [2, 3, 4]
* nums.unshift(1) -> [1,1,2,3,4] add element 1 to left of the array

####7. splice

* nums = [1,2,3,4,5,6]  <br>
nums.splice(2, 3)  -> [1,2,6]

####8. dictionary
* var dic = {} 

####9. reverse
* [1,2,3,4].reverse()  -> [4,3,2,1]

####10. map
* array.map(a=>{return a.reverse()})

####11. Bit Manipulation
# or gate a^1  -> [0,1,1,]  -> [1,0,0]

#### undefine:
undefine + ''    =  undefine
undefine + 'abc' = 'undefineabc'
undefine + else  =  NaN

number + NaN = NaN

NaN + String = ''
Nan + else = NaN

#### Substring(index,index): (] right not include 
'abcdefg'.substring(1, 3)  => bcd

#### keep number 
    `this.state.total.toFixed(2)` => 0.00

#### reduce() : calculate sum of array
```
    var num = [1,2,3,43,4]
    var c = (total, num)=>{
        return total + num
    }21112222222    
    var b = num.reduce(c)
```

#### Set:
    * const s = new Set(arr)  => {2, 3, 5}  => turn into Set
    * const array = Array.from(s)   => turn into array
    * s.add(4),  a.delete(2)
    * for(let i of s){}
    * s = new Set([1, 2, 4].filter(x => x % 3 == 0))  => how to use filter and map
    * s.size
    * let union = new Set([...a, ...b]);  => 并集
    * let intersect = new Set([...a].filter(x => b.has(x)))    交集
    * let intersect = new Set([...a].filter(x => !b.has(x)))    差集
    
#### Map:
    * Object.values(map) => [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

#### 'a'.charCodeAt() => 97

#### Full Element Array
* Array.from(new Array(nums.length + 1).keys()).

#### Regular Expression
* 'A,b,c-b@Q'.replace(/[^\w]/g, '')  -> AbcbQ
* 'A,b,c-b@Q'.replace(/[A-z]/g, '')  -> ,,-@

#### DFS
* Hashtable LC-438.

#### Deep Copy
* var ary2 = JSON.parse(JSON.stringify(matrix));
