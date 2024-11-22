---
sidebarDepth: 2
---

# 代理反射API - Proxy/Reflect
前不久尤大大宣布vue3为默认版，所以vue3毫无疑问是未来所需

在学习vue3的源码时，了解到vue3的响应式使用了Proxy和Reflect两个对象

## 前奏
js的属性有名字和值，但每个属性还有三个关联特性，决定了你能对属性做哪些操作

*可写特性 指定属性是否可以被修改（writeable）

*可枚举特性 指定属性是否可以被枚举（enumerable）

*可配置特性 指定属性是否可以被删除和修改（configurable）

对象属性有两种方式 一种是数据属性 就是普通数据  另一种是访问器属性（数据名前加set，get的数据）<br>
在js中 把访问器属性数据的set，get也当做属性的特性
```js
var obj = {
    a:1,// 数据属性
    
    // 访问器属性  类似于python中的@property装饰器
    get m(){
        return this.a
    },
    set m(value){
        this.a = value
    }
}
```
所以：<br>
对于 数据属性 数据特性就有4个 ：value，writable，enumerable，configurable<br>
对于 访问器属性 数据特性就有这四个：get，set，enumerable，configurable
::: warning 注意
数据属性和访问器属性的特性不可重复出现，也就是说 value，writable和set，get不可同时出现
:::

## 查询数据的属性特性 Object.getOwnPropertyDescriptor()
通过js的api Object.getOwnPropertyDescriptor(对象，属性名)来获取指定属性名的属性特性
也可用 Object.getOwnPropertyDescriptors(对象)获取所有自身属性的属性特性
```js
var a = {x:1,y:2}
Object.getOwnPropertyDescriptor(a,'x') // { value: 1, writable: true, enumerable: true, configurable: true }
Object.getOwnPropertyDescriptors(a) //{
//x: { value: 1, writable: true, enumerable: true, configurable: true },
//y: { value: 2, writable: true, enumerable: true, configurable: true }
//}

```
## 设置数据的属性特性 Object.defineProperty()
通过js的api Object.defineProperty(对象,属性名,特性对象)来设置指定属性的属性特性
也可以通过 Object.defineProperties(对象，{属性名1，特性对象，属性名2：特性对象})来批量设置数据特性
```js
var a ={number:1}
Object.defineProperty(a,'x',{
    set(value){
        a.number =value
    },
    get(){
        // 自定义操作
        return a.number
    },
    writable:true,
    configurable:true
})

Object.defineProperties(a,{
    m:{value:123,writable:true},
    n:{set(value){a.m = value},get(){return a.m}}
})
```
::: warning 注意 
若不指定具体属性特性，则默认为false或undefined（这也是为什么一个值不赋值为undefined的原因）
:::

## 反射对象 Reflect
Reflect是ES6新增的一个对象，Reflect对象在同一命名空间内定义了一系列便捷的函数，这些函数可以模拟核心语法的行为，复制各种既有对象的特性
说人话就是Reflect对象可以显性得操作其他对象

反射api包含下列函数

|||
|---|---|
|Reflect.apply(f,o,args)|相当于f.apply(o,args)|
|Reflect.construct(构造函数，args,newTarget)|使用new关键字一样调用构造函数，将args传入构造函数，若有new.target，则将其作为构造函数中的new.target的值，若无，则new.target的值是c||
|Reflect.defineProperty(o,name,descriptor)|在o上定义name属性，属性特性为descriptor，成功时返回true，失败false|
|Reflect.deleteProperty(o,name)|删除o上定义的name属性|
|Reflect.get(o,name,\[receiver])|返回属性值，如果属性是一个有获取方法的访问器属性,且指定了可选的receiver参数，则获取方法作为receiver的调用|
|Reflect.set(o,name,value,\[receiver])|设置对象属性，值为value|
|Reflect.getOwnPropertyDescriptor(o,name)|获取name的属性特性|
|Reflect.getPropertyOf(o)|获取o的原型|
|Reflect.has(o,name)|判断对象o上是否有name属性，有返回true|
|Reflect.isExtensible(o)|对象o可扩展时返会true|
|Reflect.ownKeys(o)|获取对象身上的key值，返回为数组|
|Reflect.preventExtensions(o)|将对象o的可扩展性变为false|
|Reflect.setPropertyOf(o,p)|设置对象o的原型对象为p，成功返回true，失败返回false|


## 代理对象 Proxy
Proxy是js的元编程中最强大的特性了，他可以劫持你对某个对象的所有操作（增删改查），并向其中添加自己定义的方法

### 使用
```js
var target = {} // 目标对象
var handlers = {
    set(){}
} // 处理对象
var p = new Proxy(target,handlers)

```
上面就创建了一个代理对象p  target指定p所代理的对象是哪个，handlers指定所代理时进行的操作有哪些（下面会讲到）
代理对象所支持的操作就是上面Reflect所定义的操作。<br>
当对代理对象进行操作时（增删改查）代理对象首先会在处理对象上查找是否有该操作的定义（方法名与Reflect的哪些api名完全一样），若有则执行处理对象所定义的操作，否则代理对象就在目标对象上进行相应的操作


