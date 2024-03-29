/*
    axios.get(), axios.post(), axios({method:"GET"})
*/
function Axios(config) {
    this.config = config;
}
Axios.prototype.request = function (config) {
    //发送请求
    //创建一个 promise 对象
    let promise = Promise.resolve(config);
    //声明一个数组
    let chains = [dispatchRequest, undefined];// undefined 占位
    //调用 then 方法指定回调,返回 promise 的结果
    return promise.then(chains[0], chains[1]);
}

//2. dispatchRequest 函数
function dispatchRequest(config) {
    //调用适配器发送请求
    return xhrAdapter(config).then(response => {
        //响应的结果进行转换处理
        return response;
    }, error => {
        throw error;
    });
}

//3. adapter 适配器
function xhrAdapter(config) {
    console.log('xhrAdapter 函数执行');
    return new Promise((resolve, reject) => {
        //发送 AJAX 请求
        let xhr = new XMLHttpRequest();
        //初始化
        xhr.open(config.method, config.url);
        //发送
        xhr.send();
        //绑定事件
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                //判断成功的条件
                if (xhr.status >= 200 && xhr.status < 300) {
                    //成功的状态
                    resolve({
                        //配置对象
                        config: config,
                        //响应体
                        data: xhr.response,
                        //响应头
                        headers: xhr.getAllResponseHeaders(), //字符串  parseHeaders
                        // xhr 请求对象
                        request: xhr,
                        //响应状态码
                        status: xhr.status,
                        //响应状态字符串
                        statusText: xhr.statusText
                    });
                } else {
                    //失败的状态
                    reject(new Error('请求失败 失败的状态码为' + xhr.status));
                }
            }
        }
    });
}


//4. 创建 axios 函数
let axios = Axios.prototype.request.bind(null);
axios({
    method: 'GET',
    url: 'http://localhost:3000/posts'
}).then(response => {
    console.log(response);
});