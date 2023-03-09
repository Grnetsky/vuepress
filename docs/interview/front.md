---
sidebar: auto
---
# 前端面试题集锦

### 基础

#### 1.css继承
![img.png](img.png)
#### 2.padding会撑开盒子，但是当盒子没有width时候则不会撑开
#### 3.盒子居中方法
1. flex (子盒子可以不给宽度)
```css
body{
    display: flex;
    justify-content: center;
    align-items: center;
}
```
##### 拓展 flex的用法

父项配置：<br/>
flex-direction：设置主轴方向<br/>
flex-wrap: 设置子元素是否换行<br/>
flex-flow :复合属性相当于同时设置flex-direction和flex-warp<br/>
justify-content: 设置主轴元素排列<br/>
align-items: 设置侧轴上子元素的排列（设置每个子项）<br/>
align-content: 设置侧轴上子元素的排列 将flex子项当做一个整体 只对多行起作用<br/>

子项配置<br/>
flex:子项占用的份数
align-self:控制自己在侧轴的排列方式
order: 排序 默认为0
flex-grow: 索取父容器的剩余空间  控制放大比例，默认0  
flex-shrink:默认1 flex-shrink 属性指定了 flex 元素的收缩规则，默认值是1。
    在flex 元素的默认宽度之和大于容器的宽度时候，元素会发生收缩，其收缩的大小的依据是 
    flex-shrink 值。
flex-basis: 设置具体大小  它的初始值是 auto，此时浏览器会检查元素是否设置了 width 属性值。
    如果有，则使用 width 的值作为 flex-basis 的值；如果没有，则用元素内容自身的大小。
    如果 flex-basis 的值不是 auto，width 属性会被忽略

2.margin:auto (需要高度)
```css
.item {
    width: 200px;
    height:200px;
    margin: auto;
}
```
3.定位加位移 (transition加position，可不知道自己的width)
```css
.parent {
    width: 300px;
    height: 200px;
    background: rgb(203, 192, 255);
    position: relative;
}
.child {
    width: 50px;
    height: 50px;
    background: rgb(221, 201, 73);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
```
4.绝对定位盒子居中 (明确知道自己的width)
```css
.item {
    left:50%;
    margin-left:-100px
}
```
5.grid布局
```css
div {
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
}
```
6.绝对定位加置零法 
```css
div {
    background: red;
    width: 100px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;

}
```


#### 4.css盒子模式
css中分为两种盒子模型
1.content-box: （正常盒子模型）盒子的实际大小 = width + border + padding （所以一般获取盒子的offsetWidth大于width属性的值）<br/>
2.border-box: （怪异盒子模式 ie默认的方式）盒子实际大小 = width (padding和border不会撑大盒子，前提是padding和border不会超过width的宽度)
设置盒模型 box-sizing:content-box
用途：正常盒模型主要用于PC端，怪异盒模型主要用于手机端。


#### bfc ifc ffc gfc
##### 什么是bfc?
bfc(block formatting contexts 格式化上下文) 是页面中的一块渲染区域，并且有自己的一套渲染规则
它决定了其子元素如何定位，以及和其他元素的关系和相互作用。需要注意的是，它并不会影响区域外的元素
我理解的就是，只要触发了bfc 那这个区域就会自动形成一个独立渲染的区域，不会影响别人的渲染。这也是为什么
设置overflow = hidden的时候 不会超出盒子边框

##### 触发bfc条件：
根元素（<html>）
浮动元素（元素的 float 不是 none）
绝对定位元素（元素的 position 为 absolute 或 fixed）
行内块元素（元素的 display 为 inline-block）
表格单元格（元素的 display 为 table-cell，HTML表格单元格默认为该值）
表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
匿名表格单元格元素（元素的 display 为 table、``table-row、 table-row-group、``table-header-group、``table-footer-group（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
overflow 计算值(Computed)不为 visible 的块元素
display 值为 flow-root 的元素
contain 值为 layout、content或 paint 的元素
弹性元素（display 为 flex 或 inline-flex元素的直接子元素）
网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
多列容器（元素的 column-count 或 column-width (en-US) 不为 auto，包括 ``column-count 为 1）
column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

##### bfc规则
内部的Box会在垂直方向，一个接一个地放置。
Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。
每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
BFC的区域不会与float box重叠。
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
计算BFC的高度时，浮动元素也参与计算。

##### 应用场景
1.解决margin重叠的问题
2.解决高度坍塌问题
3.清除浮动

##### 相似的ifc ffc gfc
ifc规则：
在一个IFC内，子元素是水平方向横向排列的，并且垂直方向起点为元素顶部。

子元素只会计算横向样式空间，【padding、border、margin】，垂直方向样式空间不会被计算，【padding、border、margin】。

在垂直方向上，子元素会以不同形式来对齐（vertical-align）

能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。

IFC中的line box一般左右边贴紧其包含块，但float元素会优先排列。

IFC中的line box高度由 CSS 行高计算规则来确定，同个IFC下的多个line box高度可能会不同。

当 inline boxes的总宽度少于包含它们的line box时，其水平渲染规则由 text-align 属性值来决定。

当一个inline box超过父元素的宽度时，它会被分割成多个boxes，这些boxes分布在多个line box中。如果子元素未设置强制换行的情况下，inline box将不可被分割，将会溢出父元素。

__应用__ ：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。


ffc和gfc这里就不多赘述了 都有对应的规则 


##### 清除浮动的几种方法
1.clear：both
2.overflow：hidden|auto|scroll
3.伪元素 （闭合便签法 不让盒子跑出去）

##### 文字溢出省略号表示
```css
text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

##### new操作符做了些什么？
1.创建一个空对象
2.将该对象的原型指向构造函数
3.将构建函数中的this绑定到新建的对象obj上
4.根据构造函数的返回值，返回对象，如果值为非对象类型则返回obj对象若为对象类型则返回该对象
```js
function mynew(Func, ...args) {
    // 1.创建一个新对象
    const obj = {}
    // 2.新对象原型指向构造函数原型对象
    obj.__proto__ = Func.prototype
    // 3.将构建函数的this指向新对象
    let result = Func.apply(obj, args)
    // 4.根据返回值判断
    return result instanceof Object ? result : obj
}
```

##### 函数柯里化
将传入多个参数转换为调用多次函数的分别传入参数的形式
```js
// 非函数柯里化
var add = function (x,y) {
    return x+y;
}
add(3,4) //7

// 函数柯里化
var add2 = function (x) {
    //**返回函数**
    return function (y) {
        return x+y;
    }
}
add2(3)(4) //7
```

###### 好处？函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。


##### 高阶函数
将函数作为参数传入并且返回新函数的函数为高阶函数<br/>
以下为高阶函数封装的缓存函数
```js
const memoize = function (func, content) {
  let cache = Object.create(null)
  content = content || this
  return (...key) => {
    if (!cache[key]) {
      cache[key] = func.apply(content, key)
    }
    return cache[key]
  }
}
```

##### js继承的六种方式
###### 1.原型链继承（EcmaScript的主要继承方式）
```js
function Father() {
    this.fatherName = "fatherName"
}
Father.prototype.getFatherName = function () {
    return this.fatherName
}

function Child(){
    this.childName = "childName"
}

Child.prototype = new Father()  // 指定原型链
Child.prototype.getChildName = function () {
    return this.childName
}
let child = new Child()
console.log(child.getChildName())
```
:::warning
问题：
所有子类都会共享Father上的属性，一旦某个子类更改了Father上的属性，那么整个子类都会更改，所以一般把属性都定义在构造函数里
:::
###### 2.盗用构造函数继承
优点：给父类构造函数传参
```js
function Father() {
    this.fatherName = "fatherName"
}

function Child() {
    Father.call(this)
}
let child = new Child()
console.log(child.fatherName)
```
:::warning
问题：必须在父类构造函数里定义方法，因此函数不能复用，子类也不能访问父类原型上定义的方法
:::

###### 3.组合模式（原型链+构造函数）
```js
function SuperType(name){
    this.name = name;
    this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
};
function SubType(name, age){
    // 继承属性 第二次调用
    SuperType.call(this, name);
    this.age = age;
}
// 继承方法 第一次调用
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function() {
    console.log(this.age);
};
let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors); //["red,blue,green,black"]
instance1.sayName(); // "Nicholas";
instance1.sayAge(); // 29
let instance2 = new SubType("Greg", 27);
console.log(instance2.colors); // ["red,blue,green"]
instance2.sayName(); // "Greg";
instance2.sayAge(); // 27
```

###### 4.原型式继承
Object.create()
```js
let father = {fatherName:'fatherName'}
let child = Object.create(father)
```

###### 5.寄生式继承
```js
function object(person) {
 function F() {}
 F.prototype = person
 return new F()
}
function createAnother(original){
    let clone = object(original); // 通过调用函数创建一个新对象
    clone.sayHi = function() { // 以某种方式增强这个对象
    console.log("hi");
};
    return clone; // 返回这个对象
}
```

###### 6.寄生组合式继承（引入类型继承最佳的模式）
```js
//核心代码
function object(person) {
 function F(params) {}
 F.prototype = person
 return new F()
}
function inheritPrototype(SubType,SuperType) {
 let prototype = object(SuperType.prototype) //生成一个父类原型的副本
 
 //重写这个实例的constructor
 prototype.constructor = SubType
 
 //将这个对象副本赋值给 子类的原型
 SubType.prototype = prototype
}
 
function SuperType(name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
};
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
 
//调用inheritPrototype函数给子类原型赋值,修复了组合继承的问题
inheritPrototype(SubType, SuperType);
 
SubType.prototype.sayAge = function() {
    console.log(this.age);
};
```

##### defer 和 async 区别

##### prefetch 和 preload 区别

##### 预加载和懒加载

##### 节流和防抖

##### axios如何中断请求？xhr和fetch呢？promise能中断吗 若要中断要怎么做？

##### 哪些是宏任务哪些是微任务
###### 微任务
promise.then
MutationObserve
process.nextTick

###### 宏任务
script (可以理解为外层同步代码)
setTimeout/setInterval
UI rendering/UI事件
postMessage、MessageChannel
setImmediate、I/O（Node.js）

##### 浏览器页面渲染的流程是什么（输入url后页面发生什么）？
大概分为：
###### 1.解析DNS（根据域名找ip地址）
首先从浏览器缓存中去找，若没有则去操作系统缓存中找，若还没有则去路由器中的DNS中查找，
还没有就去isp（网络业务提供商）的DNS服务器中查找查找，DNS服务器中查找

###### 2.建立tcp链接（osi七层模型）
获取到ip地址后根据tcp/ip协议发送tcp连接请求
这里涉及到tcp的三次握手，四次挥手（为什么是三次握手呢？因为通信本来就不可能100%可靠，三次握手是最大程度保持连接可靠性，四次握手没必要还增加性能消耗）
tcp链接过程：
客户端发送syn=1（表示希望进行tcp链接）并且发送随机序号seq=x  ACK=0 客户端进入SYN_SEND 状态
服务端收到syn链接请求后，给客户端回一个ack=x+1(校验数) ACK=1(表示确定) 然后自己也发送个seq=y（用来校验客户端是否正确连接） 服务器进入SYN_RECV状态
客户端收到后 发送ack=y+1 ACK=1 seq=x+1 双方进入ESTABLISHED状态
三次握手成功
![img_1.png](img_1.png)
###### 3.发送http请求
通过http协议 向服务端发送请求，服务端相应数据（注意此时可能会有缓存）
缓存有强缓存和协商缓存两种
强缓存：浏览器判断本地文件未过期时就强制使用本地缓存的文件，无需发起请求 此时请求状态是200 from cache
如何设置强缓存？ 通过cache-control属性 设置max-age来规定过期时长，从而来判断缓存是否失效
这比之前使用的expires更安全
cache-control属性：
* public：客户端和代理服务器都可以缓存
* private：客户端可以缓存
* max-age：t  缓存内容在t秒后失效
* no-cache：使用协商缓存验证缓存的数据
* no-store：所有内容都不缓存
协商缓存：客户端和服务端对比判断是否使用缓存，浏览器发送请求 来判断本地缓存是否被修改
如何实现对比？由etag和if-none-match来匹配  __etag__ :服务器告诉客户端当前资源在服务器的唯一标识
__if-none-match__ 浏览器向服务端发送请求头中包含此字段 值为该资源的唯一标识，服务器拿到后跟请求资源唯一标识进行比对，
不同则说明资源被改过，返回整个资源，状态码200 相同则表示无需修改 返回响应头 状态码304 浏览器从缓存读取数据

###### 4.返回html字符串，浏览器解析html
浏览器解析html步骤：
1. 首先浏览器会开启一个预解析器去下载和解析css下载js，渲染主线程从头开始解析html构建为DOM树，遇见js（不带defer async）的会等到js执行完再解析html，同事与解析器解析css位CSSOM，
（css不会阻塞html解析的原理，运行在不同线程中的）
2. 将DOM和CSSOM合并，遍历DOM树的每个节点，然后计算每个节点的样式，此时相对单位变成绝对单位
3. 根据DOM树计算布局（layout）信息，获取每个元素的几何信息
4. 然后分层渲染，提高渲染速度，当某一层变化后，只更新当层就行了，是浏览器自动计算的优化项（可以使用will-change 属性，告诉浏览器哪里可能会经常变化，浏览器根据情况分层）
5. 绘制，为每一层生成绘制指令（渲染主线程工作到此为止）
6. 分块：将每一层分为多个小块（会开启合成线程做这个事，合成线程会开启线程池取多个线程处理）
7. 光栅化：将每个块图变为位图（像素信息），优先处理靠近视图窗口的，开启gpu加速
8. 画：将每个像素画在屏幕上，以及考虑到旋转缩放变形

这里就要引出重绘和回流：
回流：元素的几何信息改变，布局改变，会重新计算样式再重复上面的流程（从计算样式开始），会比较消耗性能，
重绘：仅仅作用于最后一步（画）上，所以会很流畅，也不会被js操作阻塞（因为根本没运行在渲染主线程中，而是在合成线程中完成）
回流一定会引起重绘！！！

（这里又要拓展事件循环和单线程模型了，又要引出异步问题了宏任务微任务的概念了）
到此为整个过程结束


##### 正侧表达式？

##### vue的$nextTick原理

##### promiseA+规范

##### 首屏优化

##### gzip

##### 强缓存和协商缓存

##### 常见状态码

##### vueRouter 几个守卫？和生命周期

##### vue组件传值？

##### v-on能监听多个事件吗

##### vuex相关

##### 如何解决异步请求竞态问题？
1.发送新请求时取消上次请求即可
2.忽略过期请求

##### 移动端适配？响应式布局？

##### 跨域问题？解决方案？

##### cookie session token 对比 应用场景

##### 介绍下websocket协议

##### keep-alive组件

##### computed 和 watch

##### async await原理及其实现

##### 发布订阅和观察着模式的区别

##### 前端模块化方案？

##### 浏览器缓存？

##### HTTP 1.0 1.1 2.0 3.0区别？
###### HTTP1.0
默认使用短连接，没进行一次http请求都会创建一个tcp链接（消耗性能）
###### HTTP1.1
默认使用长链接（keep-alive）当一个网页打开操作时候不会关闭（长链接并非永久有效，服务端可配置时间）
###### HTTP2.0
1.http2.0采用多路复用 同一个tcp上请求多个资源，分成更小的帧请求，性能提升
2.http2.0在应用层和传输层层之间加了个二进制分帧层，以实现低延迟高吞吐量
3.http2.0自带服务器主动推送功能
4.可以设置请求优先级（服务器根据请求优先级来确定要分配多少资源处理该请求）
5.HTTP2.0 头部压缩 减少报文传输体积
（关键词：多路复用 二进制帧 主动推送 头部压缩 优先级）
###### HTTP3.0
放弃tcp 使用基于udp的QUIC来实现
##### 了解HTTPS（HTTP+SSL）吗？

##### get和post区别
###### 一般区别
GET在浏览器回退时是无害的，而POST会再次提交请求。
GET产生的URL地址可以被Bookmark，而POST不可以。
GET请求会被浏览器主动cache，而POST不会，除非手动设置。
GET请求只能进行url编码，而POST支持多种编码方式。
GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
GET请求在URL中传送的参数是有长度限制的，而POST么有。
对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
GET参数通过URL传递，POST放在Request body中。
###### 跟重要的区别
GET会产生一个TCP数据包，而POST会产生两个TCP数据包。
对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200(返回数据);
而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok(返回数据)。（根据浏览器厂商觉得 firefox就发送一次）


##### 浏览器最多支持同一个域名同时发送多少个请求？
6-8个，可以使用域名分片技术来巧妙的避开（不建议，消耗性能，会多开tcp链接）
