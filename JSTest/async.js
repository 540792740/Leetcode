const list = [1, 2, 3];
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    });
}
function test() {
    list.forEach(async x => {
        const res = await square(x);
        console.log(res);
    });
}
test()

function bookShop(name, year, vs) {
    var book = new Object();
    book.name = name;
    book.year = year;
    book.vs = vs;
    book.price = '暂无标价';
    if (name === 'JS高级编程') book.price = '79';
    if (name === 'css世界') book.price = '69';
    if (name === 'VUE权威指南') book.price = '89';
    return book;
}
var book1 = bookShop('JS高级编程', '2013', '第三版');
var book2 = bookShop('ES6入门教程', '2017', '第六版');
var book3 = bookShop('css世界', '2015', '第一版');