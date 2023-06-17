class MyPromise {
  // 构造方法
  constructor(resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;

    // 初始化值
    this.initValue();
    // 初始化this指向
    this.initBind();
    // 执行传进来的函数
  }

  initBind() {
    // 初始化this
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }

  initValue() {
    // 初始化值
    this.PromiseResult = null; // 终值
    this.PromiseState = "pending"; // 状态
  }

  resolve(value) {
    // 如果执行resolve，状态变为fulfilled
    this.PromiseState = "fulfilled";
    // 终值为传进来的值
    this.PromiseResult = value;
  }

  reject(reason) {
    // 如果执行reject，状态变为rejected
    this.PromiseState = "rejected";
    // 终值为传进来的reason
    this.PromiseResult = reason;
  }
}
