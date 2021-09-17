---
sidebarDepth: 2
---
# javascript 核心语法

## 基本引用类型

### Date对象



#### （一）定义时间对象方法

```javascript
let now = new Date() // 创建一个时间对象 返回的是当前时间

let time = new Date(Date.parse("5/23/2021")) // 设置具体时间 格式为 (月/日/年/时/分/秒)  或  (月 日 年 时 分 秒) 

let now = Date.now() //获取当前毫秒数

```



#### （三）日期的格式化方法

|      方法      |            作用            |
| :------------: | :------------------------: |
| toDateString() | 显示日期中的 周几 月 日 年 |
| toTimeString() | 显示日期中的 时 分 秒 时区 |
|                |                            |





#### （二）获取时间值的方法

|   方法    |       作用       |
| :-------: | :--------------: |
| getTime() | 返回日期的毫秒数 |
| get。。。 |                  |



### 正则表达式

#### 匹配模式

| 模式名 |                             内容                             |
| ------ | :----------------------------------------------------------: |
| g      | 全局模式，表示查找字符串全部内容，而不是找到第一个匹配的内容就结束 |
| i      |                         不区分大小写                         |
| m      |          多行模式，表示查找到第一行末尾时会继续查找          |
| y      |      粘附模式，表示只查找从lastIndex开始及之后的字符串       |
| u      |                 Unicode模式，启用Unicode匹配                 |
| s      |            dotAll模式，表示元字符，匹配任何字符串            |



#### 使用方法

#####     1. 字符串法

 * search()法 : 检索与正则表达式相匹配的值。返回第一个所在位置索引号

   ```javascript
   var str = "Visit Runoob!"; 
   var n = str.search(/Runoob/i);  // search() 方法 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。
   ```

 * replace()法 : 替换与正则表达式匹配的子串，返回替换后的字符串

   ```javascript
   var str = document.getElementById("demo").innerHTML; 
   var txt = str.replace(/microsoft/i,"Runoob");  // 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
   ```

* match() : 找到一个或多个正则表达式的匹配。返回一个列表包含所有匹配项

  ```javascript
  var str="The rain in SPAIN stays mainly in the plain"; 
  var n=str.match(/ain/g);
  ```

* split()：用于把一个字符串分割成字符串数组,返回分割后的字符串数组  该方法有个limit选项 可用于限制分割后的数量

  ```javascript
  var str="How are you doing today?";
  var n=str.split();   
  ```

  

#####  2. 正则表达式法

| 表达式 | 描述                       |
| ------ | -------------------------- |
| [abc]  | 查找方括号之间的任何字符。 |
| [0-9]  | 查找任何从 0 至 9 的数字。 |
| (x\|y) | 查找任何以                 |

| 元字符                                                       | 描述                                        |
| :----------------------------------------------------------- | :------------------------------------------ |
| [.](https://www.runoob.com/jsref/jsref-regexp-dot.html)      | 查找单个字符，除了换行和行结束符。          |
| [\w](https://www.runoob.com/jsref/jsref-regexp-wordchar.html) | 查找数字、字母及下划线。                    |
| [\W](https://www.runoob.com/jsref/jsref-regexp-wordchar-non.html) | 查找非单词字符。                            |
| [\d](https://www.runoob.com/jsref/jsref-regexp-digit.html)   | 查找数字。                                  |
| [\D](https://www.runoob.com/jsref/jsref-regexp-digit-non.html) | 查找非数字字符。                            |
| [\s](https://www.runoob.com/jsref/jsref-regexp-whitespace.html) | 查找空白字符。                              |
| [\S](https://www.runoob.com/jsref/jsref-regexp-whitespace-non.html) | 查找非空白字符。                            |
| [\b](https://www.runoob.com/jsref/jsref-regexp-begin.html)   | 匹配单词边界。                              |
| [\B](https://www.runoob.com/jsref/jsref-regexp-begin-not.html) | 匹配非单词边界。                            |
| \0                                                           | 查找 NULL 字符。                            |
| [\n](https://www.runoob.com/jsref/jsref-regexp-newline.html) | 查找换行符。                                |
| \f                                                           | 查找换页符。                                |
| \r                                                           | 查找回车符。                                |
| \t                                                           | 查找制表符。                                |
| \v                                                           | 查找垂直制表符。                            |
| [\xxx](https://www.runoob.com/jsref/jsref-regexp-octal.html) | 查找以八进制数 xxx 规定的字符。             |
| [\xdd](https://www.runoob.com/jsref/jsref-regexp-hex.html)   | 查找以十六进制数 dd 规定的字符。            |
| [\uxxxx](https://www.runoob.com/jsref/jsref-regexp-unicode-hex.html) | 查找以十六进制数 xxxx 规定的 Unicode 字符。 |



| 量词 | 描述                                  |
| ---- | ------------------------------------- |
| n+   | 匹配任何包含至少一个 *n* 的字符串。   |
| n*   | 匹配任何包含零个或多个 *n* 的字符串。 |
| n?   | 匹配任何包含零个或一个 *n* 的字符串。 |

1. test()方法：test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。

   ```javascript
   var patt = /e/;
   patt.test("The best things in life are free!"); // 输出 true
    
   /e/.test("The best things in life are free!") //这种方式也可
   
   ```

   ​	

   

2. exec()方法：方法用于检索字符串中的正则表达式的匹配。返回一个数组里面包含结果的信息 包括索引位置

   ```javascript
   var str = "hallo world"
   var patt = /hallo/g
   var result = patt.exec(str)
   ```



### 原始包装值

#### 数字（number）对象

##### 方法

| 方法                    | 描述                                                |
| ----------------------- | --------------------------------------------------- |
| toFiexd(num)            | 返回包含指定位数的小数数值字符串，num接受小数位数值 |
| toExponential(num)      | 返回以科学计数法表示的数值字符串，num接受小数位数值 |
| toPrecision(num)        | 根据情况返回最合理的输出结果，num接受数值的总位数   |
| Number.isInteger( num ) | 用于判断num是否为整数 整数则返回True 否则返回False  |
| 3                       |                                                     |



#### 字符串（String）对象

##### 方法

1. JavaScript字符方法

| 方法                | 描述                             |
| :------------------ | -------------------------------- |
| length              | 返回字符数量                     |
| charAt( num )       | 返回指定索引位置的字符           |
| charCodeAt( num )   | 返回指定索引位置的字符编码       |
| fromCharCode( num ) | 根据UTF-16码元创建字符串中的字符 |
| codePointAt( num )  | 从指定的元码的位置识别完整码点   |
| normalize()         | 与编码相关，自行百度用法         |
|                     |                                  |

2. 字符串操作方法

   | 方法                                                         | 描述                                                         | 用法                                                    |
   | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------- |
   | concat( str )                                                | 用于将一个或者多个字符串拼接成一个新字符串                   | var str = “hallo”  ; str.concat(“world”)=>“hallo world” |
   | slice(起始位置,结束位置)                                     | 切割字符串 从起始位置切割到结束位置                          |                                                         |
   | substr(起始位置,结束位置)                                    | 切割字符串 从起始位置切割到结束位置                          |                                                         |
   | indexOf() / lastIndexOf()                                    | 搜索指定字符串 并返回索引，若无则返回-1，区别在于lastIndexOf是从文末尾开始匹配 | var str = ”hallo“ ; str.indexof(“o”) //4                |
   | startsWith() / endsWith()  / includes()                      | 用于检查字符串是否包含另一个字符串 返回布尔值，icludes()检索整个字符串 | var str= ”hallo“；str.include(“ha”)//true               |
   | trim()                                                       | 删除字符串前后所有的空格符                                   | var str = ”  hallo    “; str.trim()// “hallo”           |
   | trimLeft()/trimRight()                                       | 删除字符串前面/后面的空格符                                  |                                                         |
   | repeat( num )                                                | 表示将字符串复制多少次 返回复制后的结果字符串                |                                                         |
   | padStart( num , str) / padEnd( num , str)                    | 若字符串小于num值则在对应一方填充str字符直到长度为num（默认str为空格） |                                                         |
   | toLowerCase() / toUpperCase() / toLocaleLowerCase() / toLocaleUpperCase() / | 字符串大小写转换，返回转换后的字符串                         |                                                         |
   | match( str \| 正则表达式)                                    | 匹配str 或者 使用正则表达式搜索字符串 返回一个数组包含字符串的索引 与 正则表达式的exec()相同 |                                                         |
   | search( str \| 正则表达式)                                   | 搜素str并返回位置                                            |                                                         |
   | replace( str\|正则表达式, str)                               | 搜索正则表达式或字符串  并用str替换                          |                                                         |
   | localeCompare()                                              | 用于比较两个字符串                                           | 详情见百度                                              |



## 集合引用类型

### 数组 (Arrary)

#### 方法

| 方法                               | 描述                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| push()                             | 向数组末尾追加参数，返回数组的新长度                         |
| pop()                              | 删除数组的最后一项                                           |
| concat()                           | 两个数组相加                                                 |
| shift()                            | 删除数组的第一项并返回这项                                   |
| unshift()                          | 在数组开头追加任意多个值并返回新数组的长度                   |
| reverse()                          | 翻转数组                                                     |
| sort()                             | 按照升序排列数组                                             |
| slice(开始索引，结束索引)          | 用于切割数组 返回切割后的数组                                |
| splice()                           | 删除：两个参数：从索引为第一个参数的的元素开始，删除第二个参数数量的元素；插入：三个参数：开始位置，删除数量（可为0），插入的元素（可为多个）； |
| indexOf() lastIndexOf() includes() | 搜索指定元素 并返回索引，若无则返回-1，区别在于lastIndexOf是从文末尾开始匹配；接受两个参数为要搜索的字符串和从哪个索引开始搜索 |
| find()                             | 返回第一个匹配的元素                                         |
| findIndex()                        | 返回第一个匹配的元素的索引                                   |
| join(str)                          | 用str分割数组 返回分割后的字符串                             |
| form（）                           | 用于将类数组转换为数组实例 例如：Arrary.from ( nodeList)     |

#### 迭代

| 方法                                                         | 描述 |
| ------------------------------------------------------------ | ---- |
| every()  参数：function(item,index.arrary){所有为真，则every为真} |      |
| filter(（item,index,arrary）=>{返回一个符合条件的新数组})    |      |
| forEach(（item,index,arrary）=> {执行操作，没有返回值})      |      |
| map()                                                        |      |
| some(（item,index,arrary）=> {有true 则为true})              |      |
| reduce(（上一个并归值，当前项，当前项索引，数组本身）=>{return 并归值}) |      |
| ruduceRight() 与reduce一样。区别在于reduceRight从末尾开始并归 |      |
|                                                              |      |











## 对象，类，面向对象

### 对象

Object.defineProperty(对象名，对象属性，属性特性{value:值，writable:是否可被重写，enumerable:能否被看见，configurable:是否可被删除})





## 异步编程与期约

### 异步编程

setTimeout（ ()=>{},time）time毫秒后执行箭头函数



### Promise期约

#### 期约基础

三种状态：

​	待定（pending）

​	兑现（resolved）

​	拒绝（rejected）

使用方法：

```javascript
var p = new Promise((resolve,reject)=>{
  //运行代码
  resolve(参数1)
  reject(参数2)
})

p.then(参数1=>{成功执行的函数})  //then方法接受resolve的参数
p.catch(参数2=>{失败执行的函数}) // catch方法接受reject参数

//或者直接用then方法
p.then((onResolved)=>{},(onRejected)=>{}) 

```

 

```javascript
(function (){
  // 一般用函数返回一个promise对象
  const a = function (){
        return new Promise((resolve, reject)=>{
            setTimeout(function (){
                console.log("计时器生效")
                resolve("已解决")},3000)
            console.log("已经进入promise")
            
        })
    }
    a().then((data)=>{setTimeout(()=>{console.log(data)},3000)})

})()

//打印结果
已经进入promise //立即
undefined //3秒后
计时器生效 
已解决 //又3秒后

```



#### 期约的实例方法

1. then()方法

   为期约实例添加处理程序的主要方法，接受两个参数onResolved和onReject分别对应期约执行的兑现和拒绝状态的函数，返回一个新的promise对象

   例子：

   ```javascript
   var p = new Promise((resolve,reject)=>{
     //运行代码
     resolve(参数1)
     reject(参数2)
   })
   
   p.then(参数1=>{成功执行的函数})  //then方法接受resolve的参数
   p.catch(参数2=>{失败执行的函数}) // catch方法接受reject参数
   
   //或者直接用then方法
   p.then((onResolved)=>{},(onRejected)=>{}) 
   
   
   //关于链式调用
   let p1 = new Promise((resolve, reject) => {
       console.log("p1")
       setTimeout(resolve,1000)
   
   })
   p1.then(()=>{
       return new Promise((resolve, reject) => { //注意 若箭头函数有大括号则必须写return返回数据
           
           console.log("p2")
           setTimeout(resolve,1000) //resolve不能加括号，不然会立即执行 传参则用的setTimeout（resolve，1000，参数）
       })
   }).then(()=>{
       return new Promise((resolve, reject) => {
           console.log("p3")
           setTimeout(resolve,1000)
       })
   })
   
   ```

   

2. catch()方法

   接受拒绝的执行函数 有唯一参数onReject，相当于调用了promise.then(null,(onRejected)=>{}) 

   例子如上

   

3. all()方法

   Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。

   ```javascript
   let p = new Promise.all([
     Promise.resolve()
     Promise.resolve()
   ])
   p.then( (reolve,reject)=>{
     //执行代码
   }) //每个包含的期约都解决后执行
   ```

   

4. finally()方法

   无论成功或失败都执行

   ```javascript
   let p = new Promise((resolve,reject)=>{
     resolve()
     reject()
   })
   
   p.finally()
   ```

   

5. race()方法

   Promise的race方法提供了并行执行异步操作的能力，只要有一个异步操作执行完后就执行回调





### 异步函数

#### async

##### 定义

用于声明异步函数，可用在函数声明，函数表达式，箭头函数前。

##### 用法

若函数中有return返回了值，那么这个中被包装成Promise.resolve()的一个期约对象。异步函数始终返回期约对象，在函数外部调用时可以得到返回的期约。

例如

``` javascript
async function foo(){
  console.log(1)
  return 3 //返回一个期约对象
  也可以写成
  return Promise.resolve(3)
}

foo().then(console.log) 
console.log(2) 

// 1
// 2
// 3

```



#### await

#####  定义

暂停异步函数后面代码的执行，等待期约的解决。

##### 用法

await 需要和async搭配使用

``` javascript
async function foo (){
    var p,x
    await new Promise(resolve => setTimeout(function (num){ p = 0;  x = num;resolve()},1000,123))
    console.log(p)
    console.log(x)
}
foo()

//0 123 一秒后
```

##### 注意

await会执行异步求值，无论await后面是否是异步函数

例如：

```javascript
async function foo (){
  console.log(2)
  await null  //执行到这里会将null以及后面的代码放到异步执行栈中，等所有同步任务执行完再执行异步任务
  consloe.log(4)
}

console.log(1)
foo()
console.log(3)

//1
//2
//3
//4

```





## BOM

### window对象

window对象具有全局作用域

所有声明的全局变量和函数都会成为window对象的属性和方法



#### 窗口关系

Window.top = window.parent = window.self 指向当前窗口本身



#### 窗口位置和像素比

| 属性                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| screen / screenTop / screenLeft | 放回当前窗口相对于屏幕顶侧或左侧的位置                       |
| moveTo(x,y) / moveBy(x,y)       | 将窗口移动到屏幕左上角的(x,y)坐标位置处，将窗口移动(x,y)个距离单位（仅适用于ie浏览器） |
|                                 |                                                              |

#### 窗口大小

| 属性                          | 描述                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| innerWidth / innerHeight      | 返回浏览器自身的大小                                         |
| outerWidth / outerHeight      | 返回浏览器页面的视口大小（不包含浏览器边缘和工具栏）         |
| resizeTo(x,y) / resizeBy(x,y) | 调整窗口大小到（x,y）,缩放的具体数值（x,y） （部分浏览器不支持） |
|                               |                                                              |

#### 视口位置

| 属性          | 描述                            |
| ------------- | ------------------------------- |
| scrollTo(x,y) | 滚动到页面的（x,y）的位置       |
| scrollBy(x,y) | 相对于当前视图滚动（x,y）个像素 |
|               |                                 |

用法：

```javascript
window.scrollTo(100,100)
window.scrollBy(100,100)

window.scrollTo({
  							 left:x, 
                 top:y,
                 behavior:"auto" / "smooth" // 光滑滚动或跳转滚动选项
} 
                
```



#### 导航和跳转

window.open( url , name, ) 方法可以导航到指定的url，设置别名，也可以用于打开新的浏览器窗口 

window.close() 方法关闭用open创建出来的窗口



#### 系统对话框

alert（“内容”） 警告弹窗

prompt（”内容“） 表单弹窗 返回填入的值或null

confirm（”内容“）确认弹窗 返回true 或false

find（”内容”）查找页面的内容 返回true或false 并高亮找到的值

print（） 打印视图



### location对象

 location对象提供了窗口加载文档的信息和导航功能，他既是window的对象，也是document的对象

即；window.location = document.location

#### 常见属性

url = http://www.xroot.top:80/main/cxtool?q=jacvascript&p=123#content

| 属性              | 值                                                           | 描述                |
| ----------------- | ------------------------------------------------------------ | ------------------- |
| location.hash     | “#Content“                                                   | 返回url的哈希地址   |
| location.host     | “www.xroot.top:80”                                           | 返回服务器和端口    |
| location.hostname | “www.xroot.top                                               | 服务器名            |
| location.herf     | “http://www.xroot.top:80/main/cxtool?q=jacvascript&p=123#content” | 返回完整的url       |
| location.pathname | “/main/cxtool”                                               | url中的路径和文件名 |
| location.port     | “80”                                                         | 返回端口            |
| location.protocol | “http:”                                                      | 页面使用的协议      |
| location.search   | “?q=javascript&p=123”                                        | url查询字符         |
| location.origin   | “www.xroot.top”                                              | url源地址           |
|                   |                                                              |                     |

#### 操作地址

Location.assign( url ) 和location.herf ()一样 

location.replace( url ) 替换当前页面且不能撤回

Location.reload( true ) 强制从服务器加载数据



### navigator对象

包含浏览器的相关信息（可人为更改）

来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：

* navigator 数据可被浏览器使用者更改
* 一些浏览器对测试站点会识别错误
* 浏览器无法报告晚于浏览器发布的新操作系统

详细见参考书



### screen对象（不常用）

详见参考书



### history对象

history.go( num ) 向前或向后前进行走多少步 例如：history.go(-1) 浏览器从历史后退一页 



### 浏览器检测请见参考书



## DOM

### 节点层级

document 节点为每个文档的根节点

关系为：Document > \<html>



#### node类型

node.element.nodeType = 1    (元素节点值为1)

node.attribute_node.nodeType = 2  (属性节点值为2)

node.text.nodeType = 3 (文本节点值为3)

document节点值为9

其他node值见参考书



##### nodeName与nodeValue

元素名

##### 节点关系

Element.childNode = nodelist => 一个类似数组但又不是数组的集合可用

父子节点属性

| 属性                    | 描述                                       |
| ----------------------- | ------------------------------------------ |
| childNodes              | 返回所有子节点包括文本节点 (不包含孙节点)  |
| firstChild \| lastChild | 返回第一个 \| 最后一个节点（包括文本节点） |
| children[ n ]           | 返回第n+1个元素节点                        |
| hasChildNodes()         | 返回布尔值 验证是否有子节点                |
|                         |                                            |



子父节点属性

| 属性       | 描述       |
| ---------- | ---------- |
| parentNode | 返回父节点 |
|            |            |



兄弟节点属性

| 属性                   | 描述                               |
| ---------------------- | ---------------------------------- |
| nextSibling            | 返回下一个兄弟节点（包括文本节点） |
| previouSibling         | 返回上一个兄弟节点（包括文本节点） |
| nextElementSibling     | 返回下一个兄弟元素节点             |
| previousElementSibling | 返回上一个兄弟元素节点             |
|                        |                                    |









##### 操作节点

| 属性                                 | 描述                             |
| ------------------------------------ | -------------------------------- |
| appendChild（添加的节点）            | 在childNodes后追加一个子元素节点 |
| insertBefore（插入的节点，参照节点） | 在参照节点之前插入节点           |
| replaceChild（插入的节点，替换节点） | 将替换节点换为插入节点           |
| removeChild（删除的节点）            | 将指定节点删除                   |
|                                      |                                  |

##### 其他方法

| 属性              | 描述                       |
| ----------------- | -------------------------- |
| cloneNode（布尔） | 复制节点，为true则为深拷贝 |
| normalize（）     |                            |



#### Document类型

| 属性              | 描述                            |
| ----------------- | ------------------------------- |
| document.body     | 返回body节点                    |
| document.title    | 返回title节点                   |
| document.URL      | 返回页面完整url                 |
| Document.domain   | 返回域名                        |
| document.referrer | 链接到当前页面的那个页面        |
| document.anchors  | 获取文档中所有带name元素的a元素 |
| document.forms    | 获取元素中所有form元素          |
| document.images   | 获取元素中所有image元素         |
| document.links    | 获取文档中所有带herf属性的a元素 |
|                   |                                 |

定位元素

| 属性                  | 描述                    |
| --------------------- | ----------------------- |
| getElementById()      | 通过id获取              |
| getElementByTagName() | 通过元素名获取 返回数组 |
| querySelector         |                         |

文档写入

| 属性                    | 描述                                 |
| ----------------------- | ------------------------------------ |
| document.write( str )   | 在网页中重新写入数据 可以是html      |
| Document.writeln( str ) | 在网页中重新写入数据并换行可以是html |
| document.ooen()         | 打开一个新文档                       |
| Document.close()        | 关闭一个新文档                       |
|                         |                                      |

#### Element类型

nodeType = 1

nodeVlue = null

##### HTML元素

所有html元素都有以下属性

| 属性      | 描述                                 |
| --------- | ------------------------------------ |
| id        | id                                   |
| title     | 包含元素的额外信息，通常以提醒条显示 |
| lang      | 元素内容的语言代码                   |
| dir       | 语言书写方向                         |
| className | class属性                            |
|           |                                      |



##### 获取属性

| 方法                        | 描述       |
| --------------------------- | ---------- |
| getAttribute（“属性”）      | 获取属性值 |
| setAttribute（“属性”,”值”） | 设置属性值 |
| removeAttribute（“属性”）   | 删除属性值 |
|                             |            |



##### attributes属性

见参考书



##### 创建元素

document.createElement（“元素名）



#### Text类型

nodetype = 3

nodeValue = 文本内容

| 方法                               | 描述                                       |
| ---------------------------------- | ------------------------------------------ |
| appendData（text）                 | 追加文本                                   |
| deleteData（offset，count）        | 从位置offset开始删除count个字符            |
| insertData（offset，text）         | 在offset位置插入text                       |
| replaceData（offset，count，text） | 用text替换从offset到offset+count位置的文本 |
| splitText（offset）                | 在offset位置将文本拆分成两个文本节点       |
| substringData（offset，count）     | 提取从offset到offset+count的文本           |
| document.createTextNode（ str ）   | 创建一个文本节点                           |

### DOM编程



## DOM扩展

| 方法                       | 描述                           |
| -------------------------- | ------------------------------ |
| querySelector（“选择器）   | 选择元素                       |
| querySelectorAll(“选择器”) | 选择所有指定的元素返回NodeList |
| contain（）                | 查看某个元素是否包含某个子元素 |



## 事件

| 方法                                              | 描述                                                         |
| ------------------------------------------------- | ------------------------------------------------------------ |
| addEventListener（“事件”，function（）{},布尔值） | 监听事件 并执行function函数，true为捕获阶段调用，false在冒泡时调用 |
| removeEventListener（“”）                         |                                                              |



### 事件类型

#### 用户界面事件

| 事件   | 描述                                                       |
| ------ | ---------------------------------------------------------- |
| load   | 在整个页面所有外部资源加载完后触发，或指定资源加载完后触发 |
| unload | 在文档卸载完成后触发                                       |
| resize | 当浏览器窗口被缩放到新的高度或宽度时触发                   |
| scroll | 页面滚动时触发                                             |



#### 焦点事件

| 事件     | 描述                              |
| -------- | --------------------------------- |
| blur     | 元素失去焦点时触发，不冒泡        |
| focus    | 元素获取焦点时触发                |
| focusin  | 元素获取焦点时触发，focus的冒泡版 |
| focusout | 元素失去焦点时触发                |
|          |                                   |

#### 鼠标事件

| 事件       | 描述                           |
| ---------- | ------------------------------ |
| click      | 鼠标左键点击或按回车键时触发   |
| dbclick    | 鼠标左键双击触发               |
| mousedown  | 按下任意鼠标键触发             |
| mouseenter | 光标进入元素时触发（不会冒泡） |
| mouseleave | 光标离开元素时触发（不会冒泡） |
| mousemove  | 光标移动时触发                 |
| mouseover  | 光标进入元素时触发             |
| mouseout   | 光标离开时触发                 |
| mouseup    | 鼠标释放时触发                 |



#### 键盘输入事件

| 事件      | 描述                                           |
| --------- | ---------------------------------------------- |
| keydown   | 用户按下按键时触发，持续按住重复触发           |
| keyup     | 用户释放按键时触发                             |
| keypress  | 用户按下按键并产生字符时触发，持续按住重复触发 |
| textInput |                                                |
|           |                                                |

#### 输入事件

| 事件   | 描述 |
| ------ | ---- |
| select |      |
| change |      |
| submit |      |
| reset  |      |
|        |      |

#### 加载事件

| 事件   | 描述                   |
| ------ | ---------------------- |
| load   | 页面加载完后           |
| error  | 图像加载发生错误时     |
| unload | 浏览器关闭文档时       |
| resize | 浏览器窗口大小被调整数 |



#### HTML5事件

| 事件             | 描述             |
| ---------------- | ---------------- |
| contextmenu      | 显示右键菜单     |
| beforeunload     | 页面被卸载前确认 |
| readystatechange |                  |

