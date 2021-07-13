/*
 实现一个函数，将一个浮点数转换为对应的中文字符串，比如：
# 输入：3.14
# 输出：三点一四

实现一个函数，将一个浮点数转换为对应的中文字符串，比如：

输入：3.14
输出：三点一四

输入：1024
输出：一千零二十四

输入：300
输出：三百

一亿7千万零五十
1700000050
五千

10 % 10 = 0
10
*/




let dic = { 0: '零', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七', 8: '八', 9: '九' };


function translate(num) {

	// translate number to string
	num = num + '';

	// split string, read sperately
	let arr = num.split('.');

	// initial variable
	let unit = ["", "万", "亿", "万亿"];
	let res = '';
	var strIns = '';
	let index = 0;
	let flagCount0 = false;

	// read after '.' 
	if (arr.length === 2) {
		for (let i of arr[1]) { res = res + dic[i] }
		res = '点' + res
	}
	// read before '.' 
	while (arr[0] > 0) {
		var tempNum = arr[0] % 10000;
		if (flagCount0) {
			res = dic[0] + res;
		}

		// get 4 digit with unit
		strIns = toCharater(tempNum);
		strIns += (tempNum !== 0) ? unit[index] : unit[0];
		res = strIns + res;
		flagCount0 = (tempNum < 1000) && (tempNum > 0);

		// update array
		arr[0] = Math.floor(arr[0] / 10000);
		index++;
	}
	console.log(res);
	return res;
}

// get charater within 10000
function toCharater(num) {
	let unit = ['', '十', '百', '千'];
	let res = '';
	var strIns = '';
	let index = 0;
	let flagCount0 = false;

	while (num > 0) {
		var tempNum = num % 10;
		if (tempNum === 0) {
			if (!flagCount0) {
				flagCount0 = true;
				res = dic[tempNum] + res;
			}
		} else {
			flagCount0 = false;
			strIns = dic[tempNum];
			strIns += unit[index];
			res = strIns + res;
		}
		index++;
		num = Math.floor(num / 10);
	}

	// deal with unexpected value
	if (res[res.length - 1] === '零') res = res.substring(0, res.length - 1);
	if (res === '一十') res = '十'
	return res;
}

translate(1355.1415926)
translate(12345.1415926)
translate(123456.1415926)
translate(1234567.1415926)
translate(12345678.1415926)
translate(10)
translate(100)
translate(1009)
translate(10009)
translate(100009)
translate(1010009)
translate(101000109)
