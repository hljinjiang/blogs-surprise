**JavaScript设计模式和开发实践**

**设计模式作用**

设计模式可能会增加复杂的逻辑，或更多的代码量

作用：让人们写出可复用和可维护性高的程序

JavaScript是没有工厂模式的，JavaScript不存在类型耦合的问题，因此不需要

**动态类型语言和鸭子类型**

JavaScript是动态类型语言，这一切都建立在鸭子类型上

只要该函数是实现某种事件的方法，只要能实现，就不会管你是什么类型

**多态**

同样的操作作用于不同对象上面，产生不同的解释和不同的执行结果

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.001.png)

不同对象在同一个操作中，展现出不同的执行结果

JavaScript在面向对象中，不必询问对象是什么类型，只需要调用该行为就是了

父类定义一个方法不去实现，让继承它的子类去实现

**设计模式**

**原型模式**

每个对象都有构造器原型，对象的构造器原型又可被用做其他对象的原型，从而实现原型模式的继承，可以通过方便的Object.create()来创建对象继承，但此方法性能较慢

**this指向**

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.002.png)

**作为在对象中this指向该对象**

**在普通函数中this指向window**

如function qwe() { return this === window}

**在构造器调用指向该函数对象**

如new function () {this.name = 'sven'}

但如果调用构造器，显式地返回一个object，如

new function () { this.name = 'sven' return { name: name}}

则this指向的是return返回的对象

**call和apply**

使用call()改变对象的内部this指向

**闭包的作用**

封装变量集合

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.003.png)

延续局部变量的寿命

**高阶函数**

函数可以作为参数被传递

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.004.png)

回调函数把函数当作参数传递

函数可以作为返回值输出

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.005.png)

柯里化（相当于就是闭包的延申）

将需要传递多个参数的函数，分解成每次只传递一个或一部分参数

让它返回的函数去处理剩下的参数

**设计模式**

**单例模式**

**保证一个类仅有一个实例，并提供一个访问它的全局访问点**

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.006.png)

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.007.png)

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.008.png)

通过闭包保存私有变量来判断是否已经创建对象

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.009.png)

利用单例模式，通过闭包保存私有变量从而判断某个对象是否创建，**避免重复创建对象**

**策略模式**

**定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换、**

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.010.png)

定义了S、A、B算法封装起来，使用时通过key来随时更替算法

还可以用于表单提交，多重校验时使用策略模式

利用策略模式，**可以有效避免多重条件选择语句，易于扩展，易于切换**

**代理模式**

**为一个对象提供一个代用品或占位符，以便控制对它的访问**

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.011.png)

代理对象，对目标对象做出一定的响应事件

**迭代器模式**

就是迭代器，for循环，forEach，map等

**发布-订阅模式（观察者模式）**

一对多的依赖关系，当一个对象状态发生改变时，所有依赖于它的对象都将得到通知

多个订阅者，只需要等发布者通知订阅者即可

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.012.png)

多个订阅者订阅点击事件，当点击事件触发时（发布），订阅者订阅到事件

**装饰器模式**

能够动态地增加对象的职责，称为装饰器模式

比如天冷了，需要多穿外套；需要飞行，就在头上插上一支竹蜻蜓

能够包装基类，**在继承基类的基础上包装成新功能，扩展功能**

允许向一个现有的对象添加新功能，同时又不改变其结构，包装现有的类等，提供额外的功能

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.013.png)

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.014.png)

**状态模式**

定义

·允许一个对象在其内部状态改变时改变它的行为

对象看起来似乎修改了它的类

电灯泡之类的弱光、中等光、强光状态的切换

由此我产生一个由对象包装的字典状态管理，管理电灯泡的状态模式

通过不同方法的触发，返回key，触发对应字典的状态管理

**适配器模式**

对于某个接口，不用去改变源代码，只是再进一步适配接口，如封装组件流出接口交互

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.015.png)

如果百度map的接口不是show，那么就需要写一个适配对象，返回百度的接口

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.016.png)

如上，当百度map接口为display时，只需要调用show方法，适配返回百度的display方法

相当于适配包装了接口

**JavaScript设计模式**

**一、继承**

**原型继承（类式继承）**

通过实例化父类，赋值给子类的原型上，实例化子类后，实现继承

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.017.png)

**构造函数继承**

在子类中改变父类的作用域指向，通过实例化子类，达到构造函数继承

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.018.png)

**原型式继承**

使父类对象赋值给子类原型，返回实例化后的子类（这时就继承了父类对象在原型链上）

原型式继承相当于Object.create(obj)

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.019.png)

**寄生式继承**

在原型式继承上，对继承的对象进行了扩展

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.020.png)

**组合寄生式继承**

复制父类的原型，使子类对象赋值给父类原型的构造函数

子类对象的prototype为父类的实例（在子类赋值给父类构造函数之后）

子类的原型拥有父类的方法

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.021.png)

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.022.png)

**二、设计模式**

工厂模式

创建一个接口，让其子类自己决定实例化哪个工厂类

抽离出工厂类的公共部分（方法和属性）

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.023.png)

安全模式类

![clipboard.png](./assets/Aspose.Words.2cdef457-5190-481d-92b0-36b34a4cdc09.024.png)

1