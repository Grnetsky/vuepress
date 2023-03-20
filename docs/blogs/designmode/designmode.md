---
sidebar: auto
---
# 设计模式

## 单例模式

### 代码演示
```js
// 单例模式
// 普通单例模式

// 构造函数
let singleton = function (name) {
    this.name = name
}
// 用instance指向这个对象
singleton.instance = null
singleton.getInstance = function (name) {
    if (!this.instance){
        this.instance = new singleton(name)
    }
    return this.instance
}
let o1 = singleton.getInstance('hhh')   //
let o2 = singleton.getInstance('aaa')   // 这个本质上没用
console.log(o2 == o1) // true
console.log(o2.name,o1.name) // hhh hhh

// 类的单例模式
class Singleton{
    static instance = null  // 核心就在用一个变量保存这个对象，创建对象前就去查看是否有对象
    constructor(name) {
        console.log(Singleton.instance)
        if(!Singleton.instance){
            console.log("创造对象")
            this.name = name
            Singleton.instance = this
            return this
        }
        return Singleton.instance
    }
    say(){
        return this.name
    }
}
let s1 = new Singleton("蔡豪")
let s2 = new Singleton("666")
console.log(s1==s2,s1.name,s2.name,s1.say(),s2.say())

```

## 策略模式

## 代理模式
### 代码演示
```js
// 为对象提供个代用品  可以理解为中间件  通过中间人去操作真正的对象

class Boy{
    constructor(flower) {
        this.flower = flower
    }
    sendFlower(to){
        to.receive(this.flower)
    }
}


class Girl{
    constructor() {
        this.flower = null
    }
    receive(f){
        this.flower = f
        console.log("收到了",f)
    }
}

class Proxy{
    constructor(who) {
        this.who = who
    }
    // 代理接口与本体接口一致性
    receive(f){
        this.flower = f
        console.log("收到了",f)
        if(f.number>=9){
            this.who.receive(f)
        }
        else{
            console.log("代理拒绝了，花太少兄弟！")
        }
    }
}
let b = new Boy({number:100})
let g = new Girl()
let p = new Proxy(g)
b.sendFlower(p)

```
```js
//代理模式实现图片懒加载
let myImage = (function () {
        let imgNode = document.createElement("img");
        document.body.appendChild(imgNode)
        return {
            setSrc(src){
                imgNode.src = src
            }
        }
    }
    )();

let proxyImage = (function () {
    let image = new Image()
        image.onload = function () {   // 监听图片加载完成
            console.log(this)   //这个this指向image对象
            myImage.setSrc(this.src)  // 替换原图片
    }
    return {
        setSrc(src){
            myImage.setSrc('/Users/mac/Desktop/vuepress/docs/blogs/vue/img.png'); // 预定义一个图片
            image.src = src
        }
    }}
)()
proxyImage.setSrc('https://img2.baidu.com/it/u=1116803737,2778388361&fm=253&fmt=auto&app=138&f=JPEG?w=670&h=500')


```
## 迭代器模式

## 发布-订阅模式
### 代码演示
```js
// 发布订阅模式

// es5
let publisher = {}
publisher.listenList = []
publisher.subscript = function (fn) {
    this.listenList.push(fn)
}

publisher.publish = function (){
    this.listenList.forEach((fn)=>{
        fn(arguments)
    })
}


publisher.subscript(function () {
    console.log("小明注册了",arguments)
})
publisher.subscript(function () {
    console.log("小红注册了",arguments)

})
setTimeout(()=>{publisher.publish("2秒后发布")},2000)

//es6
class Publisher{
    constructor() {
        this.listenList = []
    }
    // 订阅
    subscript(fn){
        this.listenList.push(fn)
    }

    //发布
    publish(){
        this.listenList.forEach((fn)=>{
            fn(arguments)
        })
    }
    remove(){

    }
}
let publish1 = new Publisher()
// publish1.subscript(function () {
//     console.log("小明订阅")
// })
//
// publish1.subscript(function () {
//     console.log("小红订阅")
// })
//
// publish1.publish()


class Subscriptor{
    constructor() {
    }
    on(publisher,fn){
        publisher.subscript(fn)
    }
    remove(){
    }
}
let s = new Subscriptor()
s.on(publish1,function () {
    console.log("回调函数触发成功")
})
publish1.publish()

let list = []
let fns = [function () {
    console.log(1)
},function () {
    console.log(2)
}]
for(var i = 0,fn;fn = fns[i++];){
    fn()
}
```


#### 更完善的版本
```js
// 定义发布者
class Publisher {
    constructor() {
        this.listenList = {}  // 定义消息队列 对象形式 方便声明多个事件名
    }
    on(event,fn){
        if(!this.listenList[event]){
            this.listenList[event] = []  // 队列中没有这个事件则创建事件
        }
        this.listenList[event].push(fn)  // 追加事件到队列

    }
    trigger(event){     // 触发事件
        this.listenList[event]?.fojrEach((fn)=>{  // 从对应的队列里依次触发事件
            fn.apply(this,arguments)
        })
    }
    remove(event,fn){
        this.listenList[event].splice(this.listenList[event].indexOf(fn),1)  // 取消事件监听
    }

}
var publisher = new Publisher()
class Subscript{
    constructor() {
    }
    addEventListener(event,fn){
        publisher.on(event,fn)
    }
    remove(event,fn){
        publisher.remove(event,fn)
    }
}

let a = new Subscript()
let b = new Subscript()
let fun = ()=>{console.log("a执行点击函数")}

a.addEventListener('click',fun)
b.addEventListener('click',()=>{console.log("b执行点击函数")})
// a.remove('click',fun)


publisher.trigger('click')


let login = {}
login.listenList = []
login.listen = function (fn) {
    this.listenList.push(fn)
}

login.trigger = function () {
    this.listenList.forEach((fn)=>{
        fn()
    })
}

login.listen(()=>{console.log("login1")})
login.listen(()=>{console.log("login2")})

login.trigger()

```


## 命令模式

## 组合模式

## 模板方法模式

## 享元模式

## 职责链模式

## 中介者模式

## 装饰者模式

## 状态模式

## 适配器模式

# 设计原则

## 单一职责原则

## 最少知识原则

## 开放-封闭原则

## 接口和面向接口

## 代码重构方法

