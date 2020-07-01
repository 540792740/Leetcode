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
console.log( test() );
console.log(ch2)
