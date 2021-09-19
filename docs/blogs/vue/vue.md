---
sidebar: auto
---
# Vue-用于构建用户页面的渐进式javascript框架

::: tip 提示
学习vue你需要有 [html](/blogs/html/) [css](/blogs/css/) [javascript](/blogs/javascript/)的基础
:::

## ES6模块化
```javascript
npm init -y  //初始化

# package.json中添加
"type":"module"
```

### 模块的导出导入

```javascript
commonjs导出导入
//导出
exports.导出属性名 = 属性名
//导入
接收对象名 = require('文件路径')
//使用
接收对象名.导出属性名


es6默认导出导入
//导出
export default {
    成员名
}
//导入
import 接收对象名称 from "js文件标识符" 
//使用
接受对象名称.属性


按需导入导出
//导出
export {导出成员名}
或直接在对应成员前加export
例如:export let a = 0
// 导入
export {导入成员} from "js文件标识符"
//使用
直接写成员名字即可使用

//注意
每个模块可使用多个export
导出名称与导入名称应一致
可用as进行重命名
{ str as str2}
```
## Vue基础
::: tip Vue特性
1. 数据驱动视图：vue会自动监听数据的变化，从而自动更新，重新渲染页面的结构，程序员只管把数据维持好。
2. 双向数据绑定：辅助开发者在不操作DOM的前提下自动把用户填写的内容同步到数据源中。
:::
vue结构为
```javascript
var vm = new Vue(
    el:"#app",
    data:{
        数据
},
method:{
        方法
}
)
```
### vue基础命令-用来辅助开发者渲染DOM元素的文本内容
#### 内容渲染命令
##### v-text指令：会覆盖标签内部原有内容
```javascript
<p v-text="username"> ->会把显示username显示在p标签中并且覆盖原有内容
```
##### {{ }}插值表达式：文本的占位符 ->可在表达式中进行简单的javascript运算
```javascript
<p>性别 {{ gender }}</p> ->将gender对应的数据填充在对应位置
```
##### v-html指令：可渲染html元素
```javascript
<p v-html="<span>123</span>"></p> ->将内容渲染到p标签内并覆盖原有元素
```
#### 属性绑定指令 v-bind指令(简写 : ):给属性动态绑定值
```javascript
<input v-bind:placeholder="usermame"> ->将数据源中的username属性绑定到placeholder
//简写
<input :placeholder="usermame">
```
#### 事件绑定指令 
##### v-on指令(简写 @ ):给元素添加事件
```javascript
<button v-on:click="add"></button> ->给button添加了click事件，执行数据源中method节点下的add方法
//简写
<button @click="add"></button>
```

##### 事件传参
```javascript
v-on:click="add()"
```
##### 事件修饰符
| 事件修饰符      | 描述       | 
| ------------- |:-------------:|
| .prevent      | 阻止默认行为 |
| .stop      | 阻止事件冒泡      |
| .capture |以捕获模式触发当前事件处理函数      |
| .once|绑定的事件仅能触发一次|
| .self|只有在event.target为自身的时候触发|

##### 按键修饰符
| 按键修饰符      | 描述       | 
| ------------- |:-------------:|
| .enter|按下enter键时触发|
| .esc| 按下esc键时触发|
| .tab| 见名知意，懒得写了，下同|
| . delete||
| .up||
| .down||
| .left||
| .up||
自定义按键修饰符：@click.[按键对应的数字](https://dpb-bobokaoya-sm.blog.csdn.net/article/details/96280857)="方法名"
#### 双向数据绑定指令（用于表单，select，textarea）
##### v-model: 辅助开发者在不操作DOM前提下，快速获取表单数据
```javascript
<input v-model="username"> -> 将input的value和数据源的username绑定起来
```
##### v-model修饰符
| 修饰符      | 描述       | 
| ------------- |:-------------:|
| .number|自动将用户输入值转为数值类型|
| .trim| 自动过滤用户输入的首尾空字符|
| .lazy| 在change时而非input时更新数据|

#### 条件渲染指令：辅助开发者按需控制DOM的显示与隐藏
##### v-if指令：v-if=布尔  若布尔为true 则显示元素 为false则隐藏该元素
##### v-else 与v-if相反
##### v-else-if 相当于 else if 语句
##### v-show指令：v-show=布尔  若布尔为true 则显示元素 
::: warning 两者差异
v-if 若为false则删除该元素 从而达到隐藏效果<br/>
v-show 若为false则设置元素的display:none 从而达到隐藏效果
:::

#### 列表渲染指令：v-for 
```javascript
<li v-for="item in kist" :key="item.id">{{ item.username }}</li> ->生成li集

```
::: warning 注意
v-for 后必须要有个:key属性，并且一般为item.id 如上
:::

## 过滤器(Vue3已取消)
### 过滤器常用于文本格式化，只能在{{ }}中和v-bind中使用
#### 使用方法：添加在js表达式尾部，由"|调用

例如：
```javascript
<p>{{ username | captitalize }}</p>

var vm = new Vue({
    filters: {
        captitalize (){  ->对应的方法名
            return
        } 
    }
    }
)
```
### 私有过滤器和全局过滤器
私有过滤器的定义上面已经展示
全局过滤器的定义应用 Vue.filter("过滤器名",（str）=>{return xxx})
::: tip 提示
npm上有day.js模块用于格式化输出时间日期
:::

## 侦听器
### watch侦听器用于侦听数据变化，而对数据进行操作
#### 使用方法：在根节点下创建watch节点来指向侦听器对象
例如：
```javascript
var vm = new Vue({
    data:{数据名},
    watch:{
        侦听的数据名(新数据,旧数据){
            //执行操作
        }
    }
})
```
#### 应用场景：判断用户名是否被占用（ajax）

::: warning 注意
watch若用方法格式，则进入页面不会自动触发<br/>
若用对象格式 可以通过immediate选项让侦听器自动触发<br/>
watch:{ 侦听数据名: {
    handler: function(新数据,旧数据){
            //处理函数
} ,
    immediate: true ->进入主页自动触发handler函数
    deep: true  ->深度监听 若监听的是对象，则对象的属性不能被监听到 故用deep选项
}}
:::


## 计算属性
### 通过一系列的计算最终得到一个属性值，这个动态计算出来的属性可以被模板结构和methods方法使用
#### 使用方法：在根节点下创建computed节点来指向计算属性对象
例如：
```javascript
var vm = new Vue({
    computed:{
        计算属性名：function(){
            return xxx  ->最终返回一个生成好的字符串
}
    }
})
使用时直接用计算属性名即可
```
::: warning 注意
只要任何一个依赖数据发生变化，计算属性将被重新求值
:::

## vue-cli 脚手架
### vue开发的标准工具 简化了webpack创建工程化vue项目，用于写单页面应用程序

#### 安装
```javascript
npm install -g vue/cli
```
#### 使用步骤
```javascript
vue create 项目名称

按需操作选择

```
#### 目录结构：
node_modules: 第三方包目录<br/>
public: index.html 和图标的保存位置<br/>
src：<br/>
        &nbsp;assets:存放项目中的静态资源 css 图片等<br/>
&nbsp;main.js:项目的入口文件，项目一启动首先执行的文件<br/>
&nbsp;components:程序员封装的可复用组件<br/>
&nbsp;App.vue: 项目的根组件

#### Vue项目运行流程：
通过main.js把App.vue渲染到index.html的指定区域
* App.vue用来编写渲染的模板结构 
* index.html中预留一个el区域
* main.js把App.vue渲染到index.html的指定区域中

#### 组件的三个组成部分
1. temolate:模板结构
2. script:组件的js行为 固定写法
```javascript
export default {
    data(){ return xxx},
    methods:{ xxx}
    //其他节点
        ...
}
```
3. style 组件的样式 -> 用less语法则<style lang="less>
::: warning 注意
vue组件中的data不能指向对象，必须为函数<br/>
即： data(){
    return { 数据定义位置 }
}
:::

#### 组件使用的三个步骤
1. 父组件中导入子组件
```javascript
import "组件名" from "组件路径"
```
2. 使用components节点注册组件
```javascript
export default {
    components:{ 组件名 }
}
```
3. 以标签形式使用刚注册的组件
```javascript
<组件名></组件名>
```
::: warning 注意
组件封装好后彼此相互独立，只有根据不同的嵌套关系才有了父子关系，兄弟关系
:::
若定义全局组件<br/>
则在main.js中
```javascript
1. import "组件名" from "组件路径"
2. Vue.components("自定义组件名",组件名)
```
#### 组件的props属性
目的：为了提高组件的复用性，让用户自定义组件的初始值，且不可直接更改，为只读属性

##### 用法
props是组件的自定义属性，值为数组
```javascript
export default {
    props["属性A","属性B",...]
}
```
如何传参：
在标签中用属性的形式，例如：
```javascript
<组件名 属性A="" :属性B=""></组件名> ->可以用v-bind命令绑定
```

props的默认值：用对象定义属性值即可设定默认值

```javascript
export default {
    props:{
        属性A: {
            default: 0, ->设置默认值
            type:Number, ->设置传参类型
            required:true, ->设置是否为必须传参
        }
    }
}
```
::: warning 注意
若参数名为小驼峰命名法则传参时用"_"分开<br/>
例如参数名为cmtCount 则传参时写cmt_count
:::

#### 组件间的样式冲突问题
默认情况下Vue组件样式为全局样式<br/>
解决办法: 给当前的style标签添加 __scoped__ 属性<br/>
在父组件中修改子组件的样式:添加 __/deep/__ 前缀
```css
/deep/ 选择器{   ->/deep/一般用于给第三方组件修改默认样式
    //样式
}
```
