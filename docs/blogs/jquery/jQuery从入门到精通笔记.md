---
sidebar: auto
---
# jquery从入门到精通笔记
## 第一章 初识jQuery
jquery作用和来历这里就不多赘述了
### 下载安装使用
1.导入库文件法
下载jquery源文件
[jquery下载链接](https://code.jquery.com/jquery-3.6.0.min.js)
```javascript
<script src="https://code.jquery.com/jquery-3.6.0.min.js">
    $(documen).ready(function(){
    //如果希望jquery操作dom元素，则应用ready函数等DOM元素全部加载完在执行js代码，类似于js的onload函数，不过ready函数优先于onload函数
    //可将$(documen).ready()函数简写成$()函数
    //例如$( function(){
    //    js代码
    // } )
    //js代码
})
</script>
```

2. npm 安装
```javascript
npm install jquery

import $ from "jquery"
```

### jquery框架核心功能
#### 对外接口单一
1. $(expression,context)
expression是一个表达式，一般是css选择器，或者 [Xpath表达式](https://www.w3school.com.cn/xpath/index.asp) 会获取所有匹配到的DOM元素，包装到jquery对象中
```javascript
$("p").addClass("red")  // 给p元素添加red类
```
2. $(html)
html表示一个HTML结构的字符串，此时jquery会创建一个对应的HTML片段
```javascript
$('ul').append($('<li> new item </li>'))  //将字符串变为HTML的DOM元素，通过append方法添加到ul元素内部的最后
```
3. $(elements)
elements是一个DOM元素或者集合，此时jquery会把所有的DOM元素封装为jquery对象
```javascript
$('li').addClass("red") // 给所有的li元素添加red类
```
4. $(fn)
等同于$(documen).ready(function(){})

#### jquery在线手册
[jquery在线手册（W3C）](https://www.w3school.com.cn/jquery/index.asp)

#### 链式操作

## 第二章 选择器

### 2.1 基本选择器
|选择器|说明|示例|
| ---- |-----|----|
|#id|ID选择器|$("#id)|
|element|标签选择器|$("p")|
|.class|类选择器|$(".class")|
|*|通配符选择器|$("*")|
|selector1,selector2,...|组选择器|$("p,li.#id)|
### 2.2 层级选择器
|选择器|说明|示例|
|----|----|----|
|ancestor descendant|后代选择器，选择ancestor的所有descendant后代|$("ul li")|
|parent>child|子代选择器，选择parent的所有child子代元素|$("form>input")|
|prev + next|相邻选择器，匹配所有紧接在prev后的第一个next元素|$("label + input") 匹配所有紧接在label后的第一个input元素|
|prev ~ siblings|兄弟选择器，匹配prev元素后所有的siblings元素|匹配prev所有同级的siblings元素|
### 2.3 简单伪类选择器
|选择器|说明|示例|
|----|----|----|
|:first|匹配找到的第一个元素|$("p:first")匹配第一个p元素|
|:last|匹配找到的最后一个元素|$("p:last")匹配最后p元素
|:not|排除某个元素|$("input:not(:check))排除input中的check属性的元素|
|:even|匹配所有索引值为偶数的元素|$("li:even")匹配索引值为偶数的li元素|
|:odd|匹配所有索引值为奇数的元素|$("li:odd")匹配索引值为奇数的li元素|
|:eq|匹配指定索引值的元素|$("li:eq(2))匹配索引值为2的元素|
|:gt|匹配索引值大于指定值的元素|$("p:gt(3)")|
|:lt|匹配索引值小于指定值的元素|$("p:lt(3)")|
|:header|匹配h1 h2 h3 h4之类的标题元素|$("selector:header")|
|:animated|匹配正在执行动画导入元素|$("selector:animated)|

### 2.4 与内容相关的伪类选择器
|选择器|说明|示例|
|----|----|----|
|:contains|匹配包含给定文本的元素|$("div:contains('图片')")选取div标签包'图片'的元素|
|:empty|匹配所有不包涵子元素或文本的空元素元素|$("div:empty")|
|:has|匹配含有选择器所匹配的元素的元素|$("div:has(p)) 匹配包含p元素的div元素|
|:parent|匹配含有子元素或者文本的元素|$("div:parent")|

### 2.5 与元素显示状态相关的伪类选择器
|选择器|说明|示例|
|----|----|----|
|:hidden|匹配所有不可见的元素，或者type为hidden的元素|$("p:hidden")|
|:visible|匹配所有的可见元素|$("p:visible")|

### 2.6 匹配子元素的伪类选择器
|选择器|说明|示例|
|----|----|----|
|:nth-child|匹配子元素中第n个子元素或奇欧元素||
|:first-child|匹配第一个子元素||
|:last-child|匹配最后一个子元素||
|only-child|如果某个元素是父元素中唯一的子元素，那就会匹配|

### 2.7 与表单对象相关的伪类选择器
|选择器|说明|示例|
|----|----|----|
|:input|匹配所有input select textarea button元素|$("form:input")|
|:text|匹配所有的单行文本框||
|:password|匹配所有密码框||
|:radio|匹配所有单选框||
|:checkbox|匹配所有复选框||
|:submit|匹配所有提交按钮||
|:image|匹配所有图像域||
|:reset|匹配所有重置按钮||
|:button|匹配所有按钮||
|:file|匹配所有文件域||
|:hidden|匹配所有不可见元素，或者type为hidden的元素||


### 2.8 与表单属性相关的伪类选择器
|选择器|说明|示例|
|----|----|----|
|:enabled|匹配所有可用的元素|$("form:enabled")|
|:disabled|匹配所有不可用的元素||
|:checked|匹配所有选中的被选中元素（复选框，单选按钮等，不包括select的option）||
|:selected|匹配所有option元素||

### 2.9 属性选择器
|选择器|说明|示例|
|----|----|----|
|[attribute]|匹配包含给定属性的元素|$("div[id]"匹配所有包含id属性的div元素)|
|[attribute=value]|匹配属性等于特定值的元素|$("div[name=mydiv]"匹配所有name属性等于mydiv的元素)|
|[attribute!=value]|匹配所有不含有指定的属性，或属性不等与特定值的元素|
|[attribute^=value]|匹配所有以value开头的attribute属性的元素||
|[attribute$=value]|匹配属性中value结尾的元素||
|[attribute*=value]|匹配指定属性中含有value值的元素||
|[selector1][selector2][selectorN]|复合选择器 满足多个条件时使用||

## 第三章 过滤器
过滤是对jquery对象在进行筛选的操作
jq包含9中过滤

### 3.1 过滤
对jquery对象进行二次筛选
|过滤方法|说明|示例|
|----|----|-----|
|eq(index)|获取第n个元素|$("div").eq(1)选取第2个元素|
|hasClass()|检查当前元素是否含有某个类，若有返回true|$("div").hasClass('red) 返回true则有red类|
|filter(expr)|筛选出指定表达式匹配的元素集合|$("div").filter(".red") 选择red类的div|
|filter(fn)|筛选出与指定函数返回值匹配的元素集合||
|is(expr)|用一个表达式来检查当前选择的元素集合，如果其中至少有一个元素符号符合这个给定的表达式就返回true|$("div").is(".red")判断div集合是否有red类的元素|
|map(callback)|将一组元素转换成其他数组||
|has(expr)|保留包含指定后代的元素||
|not(expr)|删除指定表达式匹配的元素||
|slice(start,[end])|选取一个匹配的子集||

### 3.2 查找
以当前jquery对象为基础，进行查找父级，同级，或下一级元素，实现延伸筛选

|查找方法|说明|示例|
|----|----|----|
|add(expr)|把与表达式匹配的元素添加到jquery对象中|$("div").add("p")讲p标签元素添加到div集合中|
|children([expr])|取得子元素或子元素中匹配表达式的元素||
|closest(expr)|从元素本身开始，逐级向上级元素匹配，返回最先匹配的元素||
|contents()|查找匹配元素内部所有的子节点（包括文本节点）||
|find(expr)|搜索所有与指定表达式匹配的元素||
|next([expr])|选取下一个同辈元素，取得一个包含匹配元素集合中每一个元素后的第一个同辈元素||
|nextAll([expr])|选取下面所有同辈元素，查找当前元素之后所有的同辈元素||
|nextUntil([selector])|查找当前元素之后所有的同辈元素，直到遇到匹配的元素为止||
|offsetParent()|返回第一个匹配元素用于定位的父节点||
|parent([expr])|取得一个包含所有匹配元素的唯一父元素的元素集合||
|parents([expr])|取得一个包含所有匹配元素的祖先元素的元素结合（不包含根元素）||
|prev([expr])|匹配上一个同辈元素，取得一个包含匹配的元素集合中每一个元素紧邻的前一个同辈元素的元素集合||
|prevAll([expr])|匹配所有以上同辈的元素||
|siblings([expr])|查找所有兄弟元素，取得一个包含匹配元素集合中每一个元素的所有唯一同辈元素的元素集合||


## 第四章 DOM操作
### 创建节点
#### 创建元素 $(html)
````javascript
var $div = $("<h1 id='myh1'>DOM</h1>") //创建DOM元素
$("body").append($div)  //将DOM元素添加到body中

````

### 插入内容
#### 内部插入
|插入方法|说明|示例|
|----|-----|----|
|append()|向每个匹配的元素内部追加内容|$("div").append()|
|appendTo()|把所有匹配的元素追加到能一个指定的元素集合中||
|preapend()|向每一个元素内部前置内容||
|prependTo()|把所有匹配的元素前置到能一个指定的元素集合中||

#### 外部插入
|插入方法|说明|示例|
|----|----|----|
|after()|在每个匹配的元素之后插入内容|$("div").after()|
|before()|在每个匹配的元素之前插入内容||
|insertAfter()|把所有匹配的元素插入到另一个指定的元素集合的后面||
|insertBefore()|把所有匹配的元素插入到另一个指定的元素集合的前面||

### 删除内容
|方法|说明|示例|
|----|----|----|
|remove()|在DOM中删除所匹配的元素|$("div").remove()|
|empty()|删除匹配元素中所有子节点||
|detach([expr])|从DOM中删除所有匹配的元素||

### 克隆内容
```javascript
$("div").clone([true|false]) //true为拷贝事件处理函数
```

### 替换内容
|方法|说明|示例|
|----|----|----|
|replaceWith()|将选中的元素替换成目标元素|$("div").replaceWith("<div>qwe</div>")|
|replaceAll([expr])|用匹配的元素替换掉所有参数匹配到的元素|$("<div>213</div>").replaceAll("div")|
### 包裹内容
在每个匹配的元素外（内）包裹一层HTML元素

|发法|说明|示例|
|----|----|----|
|wrap()|在每个匹配的元素外部包裹元素|$("a").wrap("<li></li>")在每个a链接外包裹li标签|
|wrapInner()|在每个匹配的元素内部内容包裹元素|$("a").wrap("<li></li>")在每个a链接内的内容包裹li标签|
|unwrap()|将匹配元素的父级元素删除||

### 属性操作
#### 设置元素属性
读取元素属性，删除元素属性或修改元素属性

|方法|说明|示例|
|----|----|----|
|prop(name,value)|为匹配的元素设置一个或更多个属性|$("p").prop({name:"p",id:"#p"})|
|value[function])|为匹配的元素设置属性，可以用function来返回value|$("p").attr("src",function(index){return "image/"+index})|

#### 访问元素属性
|方法|说明|示例|
|----|----|----|
|prop(name)|||
|attr(name）|||

#### 删除属性

|方法|说明|示例|
|----|----|----|
|removeProp(name)|||
||removeAttr(name)||

###  类操作
|方法|说明|示例|
|----|----|----|
|addClass(classname1,classname2)|添加类样式||
|removeClass(classname1,classname2)|删除样式||
|toggleClass(classname)|切换样式||
|hasClass(calssname)|判断是否有样式||

### 读写文本和值
|方法|说明|示例|
|----|----|----|
|html([htmlstring])|读写html，该方法不带参数时表示读取元素的html，有参数时表示写入html并覆盖原有内容||
|text([textstring])|读写文本||
|val([valstring])|读写值||

### 样式操作
#### 读写css样式表
|方法|说明|示例|
|----|----|----|
|css(name,[value,])|读写指定样式||
|css({color:"red",font-size:"16px"})|以对象形式写入样式||

#### 读写定位
|方法|说明|示例|
|----|----|----|
|offset([coordinates])|绝对定位，返回元素的偏移量（距离浏览器窗口左上角的距离）不传参数则返回包含left和right的对象||
|position([coordinates])|相对定位，和offset一样，不过是相对于带定位的父级元素||

#### 设置大小

|方法|说明|示例|
|----|----|----|
|width([value])|显式获取设置元素的宽度|$("p").width("120px")设置p标签的宽度为120px|
|height([value])|显式获取设置元素的高度|$("p").width("120px")设置p标签的高度为120px||

## 事件处理










