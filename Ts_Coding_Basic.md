### 理论
* ts 是静态类型

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
* protected 允许在类内及继承的子类中使用
`class Person { constructor(private name: string) {}}`

### 静态属性