/*
* Author : Peter
* Date: Aug 4 2020
* Content:
*   Using Promise and Async function
*/

const getFruit = async(name)=>{
    const fruits = {
        pineapple: 1,
        peach: 2,
        strawberry: 3
    }
    return Promise.resolve(fruits[name]);
}
getFruit('peach').then(console.log)

const makeSmoothie = async()=>{
    const a =  getFruit('pineapple');
    const b =  getFruit('strawberry');
    const smoothie = await Promise.all([a, b])
    return smoothie
}

makeSmoothie().then(console.log)


const badSmoothie = async()=>{
    try{
        const a = getFruit('pineapple')
        const b = getFruit('strawberry')
        const smoothie = await Promise.all([a, b])
        throw 'broken'
        return smoothie;;
    }
    catch(err){
        console.log(err)
    }
}
badSmoothie()
