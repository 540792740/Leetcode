#### ts 背景
- js 是动态变量
- ts 是静态变量，如果一个变量是静态变量，不仅类型不能修改，而且属性和方法也是确定的
- 所以编辑器在使用静态类型时候，就会有很好的语法提示

#### install
- sudo npm install -g typescript
- sudo npm install -g @types/node ts 的 node 运行环境
- sudo npm install -g ts-node

#### 插件
- Prettier Formatter
- Bracket Pair Colorizer
- ts-node :

#### ts to js
- tsc demo.ts(将会把 ts 转化成 js) + node demo.js(运行)
- ts-node demo.ts 借助插件

### type & interface
* type可以定义基本数据类型

### 类型注解，类型推断
* type annotation 类型注解, 我们来告诉 TS 变量是什么类型
* type inference 类型推断, TS 会自动的去尝试分析变量的类型
* 如果 TS 能够自动分析变量类型，我们就什么也不需要做了
* 如果 TS 无法分析变量类型的话，我们就需要使用类型注解

### Function 声明
```
    function sayHello(): void {}
    function errorEmitter(): never { while (true) { } }
    const getNumber = ({ first }: { first: number }) => first
```

### 元组 tuple
* const teacherInfo: [string, string, number] = ['Dell', 'male', 18];
* 场景
    * 在导入csv文件时候用
    * 定义抽象函数参数时候

### Class
* super关键词，继承使用父类的属性

### 范围
* public 允许我在类的内外被调用
* private 允许在类内被使用
    * 配合 getter and setter
      ```
      class Person {
          constructor(private _name: string) {}
          get name() {
              sreturn this._name + ' lee';
          }
          set name(name: string) {
              const realName = name.split(' ')[0];
              this._name = realName;
          }
      }
      const person = new Person('dell'); => dell lee
      person.name = 'dell lee'; name存的是dell
      ```
* protected 允许在类内及继承的子类中使用
`class Person { constructor(private name: string) {}}`

### 静态属性 static
* 在类上面使用
  ```
  class Demo {
    private static instance: Demo;
    private constructor(public name: string) { }

    static getInstance() {
      if (!this.instance) { this.instance = new Demo("Lee") }
      return this.instance
    }
  }
  const demo1 = Demo.getInstance();
  ```
