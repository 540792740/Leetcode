//构造函数
function Axios(config) {
  this.config = config;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  }
}
//发送请求  难点与重点
Axios.prototype.request = function (config) {
  //创建一个 promise 对象
  let promise = Promise.resolve(config);
  //创建一个数组
  const chains = [dispatchRequest, undefined];
  //处理拦截器
  //请求拦截器 将请求拦截器的回调 压入到 chains 的前面  request.handles = []
  this.interceptors.request.handlers.forEach(item => {
    chains.unshift(item.fulfilled, item.rejected);
  });
  //响应拦截器
  this.interceptors.response.handlers.forEach(item => {
    chains.push(item.fulfilled, item.rejected);
  });

  // console.log(chains);
  //遍历
  while (chains.length > 0) {
    promise = promise.then(chains.shift(), chains.shift());
  }

  return promise;
}

//发送请求
function dispatchRequest(config) {
  //返回一个promise 队形
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      statusText: 'OK'
    });
  });
}

//创建实例
let context = new Axios({});
//创建axios函数
let axios = Axios.prototype.request.bind(context);
//将 context 属性 config interceptors 添加至 axios 函数对象身上
Object.keys(context).forEach(key => {
  axios[key] = context[key];
});

//拦截器管理器构造函数
function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function (fulfilled, rejected) {
  this.handlers.push({
    fulfilled,
    rejected
  })
}

//以下为功能测试代码
// 设置请求拦截器  config 配置对象
axios.interceptors.request.use(function one(config) {
  console.log('请求拦截器 成功 - 1号');
  return config;
}, function one(error) {
  console.log('请求拦截器 失败 - 1号');
  return Promise.reject(error);
});

axios.interceptors.request.use(function two(config) {
  console.log('请求拦截器 成功 - 2号');
  return config;
}, function two(error) {
  console.log('请求拦截器 失败 - 2号');
  return Promise.reject(error);
});

// 设置响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('响应拦截器 成功 1号');
  return response;
}, function (error) {
  console.log('响应拦截器 失败 1号')
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  console.log('响应拦截器 成功 2号')
  return response;
}, function (error) {
  console.log('响应拦截器 失败 2号')
  return Promise.reject(error);
});


//发送请求
axios({
  method: 'GET',
  url: 'http://localhost:3000/posts'
}).then(response => {
  console.log(response);
});