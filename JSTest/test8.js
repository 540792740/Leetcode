var ch1='b'
var ch2;
test =  ()=> {
    switch (ch1) {
        case 'a':
            return ch2 = '1'
        case 'b':
            return ch2 = '2'
        case 'c':
            return ch2 = '3'
        default:
            ch2 = '4'
    }
}
test1 =  ()=> {
    switch (ch1) {
        case 'a':
             ch2 = '1';
        case 'b':
             ch2 = '2'
        default:
            ch2 = '4'
        case 'c':
             ch2 = '3'

    }
}
console.log( test() );
console.log(ch2)
console.log( test1() );
console.log(ch2)
