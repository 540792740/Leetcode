/*
    axios.get(), axios.post(), axios({method:"GET"})
*/

function Axios(config) {
    // 初始化
    this.defaults = config // 初始化default默认属性
    this.intercepters = {
        request: {},
        response: {}
    }
}
// 原型添加相关的方法
Axios.prototype.request = function (config) {
    console.log("发送请求,类型为", config.method);
}
Axios.prototype.get = function (config) {
    return this.request({ method: "GET" })
}
Axios.prototype.post = function (config) {
    return this.request({ method: "POST" })
}

// 创建实例
function createInstance(config) {
    const context = new Axios(config);  //创建Axios实例
    const instance = Axios.prototype.request.bind(context); // instance是 context的request方法
    console.log("可以直接调用方法", instance({ method: "GET" }));
    Object.keys(Axios.prototype).forEach(key => {
        instance[key] = Axios.prototype[key].bind(context); // instance的get post方法是context的 get post方法
    })
    console.log("可以调用get,post", instance.get(), instance.intercepters);
    Object.keys(context).forEach(key => {
        instance[key] = context[key];
    });
    console.log("可以调用defaults,intercepter", instance.defaults, instance.intercepters);
    return instance
}

const a = new createInstance({ default: "default" })