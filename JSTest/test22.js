let x = 20
var y = 20
{
    let x=50;
    var y=50;
    {
        let x =22;
        var y =22;
        console.log('x='+x);
        console.log('y='+y);
        console.log('output1');
    }
    console.log('x='+x);
    console.log('y='+y);
    console.log('output2');
}
console.log('x='+x);
console.log('y='+y);
console.log('output3');
