# 深入浅出iframe（转载）
前言
说起iframe，大家都会觉得很嫌弃或者很不愿接近，原因大概都是：能耗高，安全问题，spider不喜欢它...也有（不少）同学内心独白就是：不！这很low很dirty，我才不想用惹！但是我们必须的承认iframe之强大，很多时候我们都会（不得不）使用它，真的素又爱又恨呐-8-

今天就在这里和大家一起好好讨论一下iframe。

iframe基本概念
我们先看一个🌰
```javascript
<iframe src="demo.html" height="300" width="500" name="demo" scrolling="auto" sandbox="allow-same-origin"></iframe>
```
iframe的一些基本属性：

src iframe页面地址，有同域跨域之分
height iframe高度
width iframe宽度
name iframe命名，可通过window.frames[xxx]被调用
scrolling iframe滚动模式
sandbox html5新特性，用于限制iframe的功能
使用iframe的正确姿势
。
```javascript


let iframe = document.getElementById('demo');
let iwindow = iframe.contentWindow; // 获取iframe的window对象
let idoc = iframe.contentDocument; // 获取iframe的document对象
刚刚我们提到了iframe的name属性，我们也可以通过window.frames[iframeName]来调用iframe。
```
let iframe = window.frames['demo']
iframe使用父级内容的正确姿势
我们通过window.self，window.parent，window.top这三个属性分别获取自身window对象，父级window对象，顶级window对象。

看图说话
![alt ](/image/img/7162582-53d566dcd1f1505f.webp)


iframe1.self === iframe1
iframe1.parent === iframe2
iframe2.parent === window
iframe1.top === window
同域/跨域
什么是同域什么跨域咧？同域跨域的区别在哪咧？我们一般会使用iframe来进行父子页面的通信，然鹅父子页面是否同域决定了它们之间能否进行通信。

js遵循同源策略，即同协议，同域名，同端口号，否则都算跨域。

同源策略 是由Netscape提出的一个著名的安全策略，现在所有支持JavaScript 的浏览器都会使用这个策略。实际上，这种策略只是一个规范，并不是强制要求，各大厂商的浏览器只是针对同源策略的一种实现。它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。

跨域 简单的来说，指的是两个资源非同源。出于安全方面的考虑，页面中的JavaScript在请求非同源的资源时就会出 跨域问题 ——即跨域请求，这时，由于同源策略，我们的请求会被浏览器禁止。也就出现了 我们常说的 跨域 问题。


通过这个图可以进一步帮助我们理解同域和跨域。
![](/image/img/7162582-43b00d1bec340073.webp)

iframe跨域通讯之document.domain
对于主域相同子域不同的两个页面，我们可以通过document.domain + iframe来解决跨域通信问题。

举个🌰，网页a(http://www.easonwong.com)和网页b(http://script.easonwong.com)，两者都设置document.domain = 'easonwong.com'（这样浏览器就会认为它们处于同一个域下），然后网页a再创建iframe上网页b，就可以进行通信啦～！

网页a
```javascript

document.domain = 'easonwong.com';
var ifr = document.createElement('iframe');
ifr.src = 'http://script.easonwong.com';
ifr.style.display = 'none';
document.body.appendChild(ifr);
ifr.onload = function(){
let doc = ifr.contentDocument || ifr.contentWindow.document;
// 在这里操纵b.html
};
```

网页b
```javascript

document.domain = 'easonwong.com';
```

iframe跨域通讯之postMessage
postMessage是html5的新特性，具体介绍不在此赘述。

postMessage介绍

MDN postMessage

兼容性 IE8以上

can I use

我们可以通过html5这个新特性进行iframe间的跨域通信，使用postMessage进行数据传递，通过Message监听通信事件。举个🌰

网页a

document.domain = 'easonwong.com';
var ifr = document.createElement('iframe');
ifr.src = 'http://script.easonwong.com';
ifr.style.display = 'none';
document.body.appendChild(ifr);
// 发送数据
ifr.postmessage('hello, I`m a', 'http://script.easonwong.com');
网页b

// 监听message事件
window.addEventListener('message', receiver, false);
function receiver(e) {
if (e.origin == 'http://www.easonwong.com') {
if (e.data == 'hello, I`m a') {
e.source.postMessage('hello, I`m b', e.origin);信息
}
}
}
iframe实现JSBridge
在移动端Hybrid混合模式中经常用到JSBridge进行JS和Native之间的通信，其中我们可以通过iframe的方式实现JS调用Native的方法。

以上提到的方法就是URL SCHEME拦截。

URL SCHEME是一种类似于url的链接，是为了方便app直接互相调用设计的，形式和普通的 url 近似，主要区别是 protocol 和 host 一般是自定义的，例如: easonwong://hh/url?name=easonwong，其中protocol是easonwong，host则是hh。

我们通过创建一个iframe（src设为我们自定义的URL SCHEME）来发送请求，然后Native那边可以拦截到请求并获取其中带有的参数，即可进行后续的操作。

想了解更多具体的关于JSBridge的内容，可以阅读我的JSBridge学习笔记～

iframe的其他用途
用iframe进行异步请求
在很久很久很久以前，久到ajax还没出现的时候，人们会用iframe来进行异步请求。大概就是异步创建iframe，然后后台返回数据在iframe中，我们在从里面获取数据。

例如在我做过的一个项目中，通过iframe.src传入一个文件下载地址，实现无需打开新窗口下载文件。

引用/展示第三方内容

需要独立样式和带有交互的内容，例如幻灯片

sandbox沙箱隔离

历史记录管理

iframe的安全问题
iframe小广告
很让我们讨厌iframe的一点，就是很多*网站都会有各种让人防不胜防的小广告，它们大多就是用通过iframe实现的，本来想点击某个播放按钮，结果马鸭直接跳几十跳不知道去了哪个新世界去了。

更讨厌的一种情况是，可能不知道哪天用户突然拿刀过来，说我们的项目页面里出现了野鸡广告，说我们在消费他们，一脸懵逼的我们觉得十分无辜。实际上就是我们的页面被运行商劫持了，被挂上了注入了不知名的野鸡广告。

所以我们一定要注意在用iframe的同时，要防止我们被iframe了。

防嵌套页面操作
在前端领域，我们可以通过window.top来防止我们页面被嵌套。

if(window != window.top){
window.top.location.href = myURL;
}
或者通过window.location.host来检测是否跨域了

if (top.location.host != window.location.host) {
top.location.href = window.location.href;
}
而后端也可以做对应的防范措施，通过设置X-Frame-Options响应头来确保自己网站的内容没有被嵌到别人的网站中去，也从而避免了点击劫持 (clickjacking) 的攻击。

CSP
内容安全策略（CSP）用于检测和减轻用于 Web 站点的特定类型的攻击，例如 XSS 和数据注入等。

MDN CSP

通过CSP配置sandbox和child-src可以设置iframe的有效地址，它限制适iframe的行为，包括阻止弹出窗口,防止插件和脚本的执行,而且可以执行一个同源策略。

用法
我们可以在html头部中加上<meta>标签
<meta http-equiv="Content-Security-Policy" content="child-src 'unsafe-inline' 'unsafe-eval' www.easonwong.com">
或者通过HTTP头部信息加上Content-Security-Policy字段
想了解更多具体的关于CSP或者XSS攻击等网络安全内容，可以阅读我的网络攻击与安全防御学习笔记～

作者：Rocky_Wong<br>
链接：https://www.jianshu.com/p/7ec986aa28a7 <br>
来源：简书<br>
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

