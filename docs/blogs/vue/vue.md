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

## 组件的三个组成部分
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

### 组件使用的三个步骤
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
### 组件的props属性
目的：为了提高组件的复用性，让用户自定义组件的初始值，且不可直接更改，为只读属性

### 用法
props是组件的自定义属性，值为数组
```javascript
export default {
    props:["属性A","属性B",...]
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
## 生命周期
生命周期指的是一个组件从创建->运行->销毁的整个过程
![alt 生命周期](/image/生命周期.png)

生命周期函数：
### beforCreate()
组件的data，methods，props属性都不能使用时调用的函数
（用的比较少）
### create() (重要)
组建的模板结构尚未生成，模板的data，methods，props等属性可以使用<br/>
一般用于发送ajax请求

### beforMount() 
已有DOM结构将要把HTML渲染出来之前

### mounted() (重要)
已生成DOM结构 HTML已渲染出来

### beforUpdate
当数据变化时，页面重新渲染之前执行的函数

### updated() (重要)
当数据变化页面完成渲染之后执行的函数

### beforDestroy()
组件销毁之前执行的函数

### destroyed()
组件销毁后执行的函数

## 组件之间的数据共享
### 父传子
#### 使用自定义属性（props和V-bind）
```javascript
<child 属性A="" :属性B="" :属性C=""></child>
```
### 子传父
#### 使用自定义事件方式
子组件中
```javascript
export default {
    data(){
        return {a:100 }
    },
    method:{
        方法名(){this.$emit("触发事件名",this.传递参数)}
    }
}
```
父组件中
```javascript
<son @触发事件名="方法名"></son>
export default {
    data(){return {}},
    methods:{
        方法名(参数){
            //操作
        }
    }
    
}
```
### 其他传递
#### 用EventBus
定义EventBus
```javascript
新建eventBus.js并写入
import Vue from "vue"
export default new Vue()
```
数据发送方
```javascript
import eventBus from "eventBus"
export default {
    data(){
        return {数据}
    },
    methods:{
        sendMsg(){
            eventBus.$emit("事件名",this.参数) //触发事件

        }
    }}
```
接受数据方
```javascript
import evenBus from "eventBus"
export default {
    data(){
        return {msgGet:""}
    },
    created()
{
    bus.$on("事件名", 参数 => {  //监听事件
        //执行操作
    })
}
}
```
## ref引用
__用于辅助开发者获取DOM或组件的引用__
每个Vue实例上都默认包含一个 __$ref__ 对象,里面存储着对应的DOM元素或组件的引用，默认情况下组件的$ref指向一个空对象
### 获取元素方法：在要获取的DOM元素标签上添加 __ref__ 属性
```javascript
<h1 ref="myh1">这是h1元素</h1>

使用时获取方法
this.$refs.myh1
```
### 获取组件的方法：在组件标签中添加 __ref__ 属性
```javascript
<vue ref="myvue">这是个组件标签</vue>

使用时获取方法
this.$refs.myvue
```
::: tip 拓展
组件的this.$nextTick()方法<br/>
延迟到页面全部重新渲染后才执行回调函数<br/>
例如：<br/>
this.$nextTick(()=>{this.$refs.myvue.focus()})
 
:::

## 动态组件
__指动态切换组件的显示和隐藏__
vue提供了一个内置的 __\<component>__ 组件专门用来实现动态组件的渲染
### is属性
is属性对应的值为显示的组件名，可以为变量
```javascript
<component :is="state"></component>  //此时显示的是state对应的组件

 <div @click="state ='right'"></div> //点击后state变为right组件
```
::: warning 注意
每次切换后组件会被重新创建或销毁
:::

### 使用 __keep-alive__ 保持状态
keep-alive便签会保存标签内部组件的状态，缓存组件，不销毁<br/>
用法：
```javascript
<keep-alive> <component :is="state"></component> </keep-alive> //用keep-alive标签包裹
```
#### keep-alive生命周期函数
组件被缓存时触发deactivated()
```javascript
在被缓存组件的内部定义
export default {
    data(){return {xxx}},
    deactivated(){
        //执行函数
    }
}
```
组件被激活时activated()
```javascript
在被激活组件的内部定义
export default {
    data(){return {xxx}},
    activated(){
        //执行函数
    }
}
```

#### keep-alive指定哪些组件会被缓存
include属性 默认缓存包裹的所有组件
```javascript
<keep-alive include="组件名">...</keep-alive>
```
exclude属性：排除不被缓存的组件

::: tip 技巧
每个组件都有name属性，若不声明，组件名称为注册时候的名称，声明后组件名称为name属性的名称
注册名称主要用于标签方式渲染到页面中<br/>
name属性主要用于keep-alive实现组件缓存和调试工具看到的组件名字<br/>
规矩是这样，其实我觉得挺多此一举的，等实际开发遇到了再说吧
:::

## 插槽
__是vue为组件的封装者提供的能力，允许开发者在开发组件时把不确定的希望由用户指定的部分叫插槽__
### 定义插槽
在组件内部使用\<slot></slot>占位符来定义一个插槽，每个插槽都应该有个name属性，用来区分不同的插槽，省略则默认为default
```javascript
//vue组件内部
<slot name="插槽名"></slot>
```
### 使用插槽
若要指定到某个插槽中，则用 __\<template v-slot:"插槽名">\</template>__ 标签包裹内容
```javascript
<template v-slot:"插槽名"><p>插入内容</p></template>
若用户未定义内容，则在slot标签中填入默认内容即可
<template v-slot:"default"><p>默认内容</p></template>
```
### 简写：#
可用"#"代替"v-slot:"
```javascript
<template v-slot:"插槽名"><p>插入内容</p></template>
等价于
<template #"插槽名"><p>插入内容</p></template>
```

### 插槽分类
1. 具名插槽：有name属性的插槽
2. 作用域插槽：
    自定义属性，由插槽定义数据给插槽内容使用
```javascript
<slot name="default" msg="插槽定义内容"></slot>
使用：
<template #default="obj"> ->obj指向一个对象，该对象上有插槽的自定义属性，可以用obj.msg来获取自定义属性
也可使用解构赋值获取自定义属性
<template #default="{ msg }"> ->使用解构赋值获取msg属性
```

## 自定义指令
### 私有自定义指令
私有自定义属性只能自身使用，子组件都用不了
#### 定义私有自定义属性
在每个组件中，用 __directives__ 节点声明自定义指令
```javascript{4}
export default {
    directives:{
        自定义指令名:{   
            bind(el){     ->指令一绑定到元素上就自动触发bind方法，el为指令所绑定的那个元素对象
                //操作元素
                el.style.color = 'red'
            }
        }
}
}
```

#### 给自定义属性传参
```javascript{6}
export default {
    directives:{
        自定义指令名:{   
            bind(el,binding){     ->el为指令所绑定的元素的对象，binding为自定义属性对象
                //操作元素
                el.style.color = binding.value  ->binding对象上有个value方法用于接受用户传参
            }
        }
}
}
```

#### 使用方法
使用：
```javascript
<p v-自定义指令名="参数">
```
::: warning 注意
bind函数只在第一次元素绑定自定义指令时调用，当DOM元素更新时不调用
:::
### update函数
update函数会在每次DOM更新时都调用, __update函数内部一般与bind函数相同__
```javascript
export default {
    directives:{
        自定义指令名:{   
            bind(el,binding){     ->el为指令所绑定的元素的对象，binding为自定义属性对象
                //操作元素
                el.style.color = binding.value  ->binding对象上有个value方法用于接受用户传参
            },
            update(el,binding){
                //操作元素
            }
        }
}
}

```
### 函数简写
当bind函数和uodate函数内容相同时，可简写成
```javascript
export default {
    directives: {
        自定义指令名(el,binding){
            //操作元素
            el.style.color = binding.value
        }
    }
}
```
### 全局自定义属性
在main.js中使用
```javascript
Vue.directive("自定义属性名",function (el,bingding){
    //操作元素
})
```
## Vue-router 路由
__路由是地址与组件之间的对应关系__<br/>
<p>前端路由工作过程<p>
1. 用户点击路由链接
2. 导致url地址中的hash地址发生了改变
3. 前端路由监听到了hash地址的变化
4. 前端路由把hash地址对应的组件渲染到浏览器中
::: tip 原理
window有个onhashchange事件，当hash地址改变时触发这个事件
:::

### vue-router的基本使用
#### 安装路由
1. 安装vue-router包
```javascript
npm install vue-router -S
```
2. 创建路由模块
在src文件夹下新建一个router文件夹，router文件夹中新建index.js文件
在index.js中配置
```javascript
//index.js

import Vue from "Vue"
import vueRouter from "vue-router"
Vue.use(vueRouter)
const router = new vueRouter()
export default router

```

3. 在mian.js中添加
```javascript
import router from "router/index.js"
new Vue({
    render:h=>h(App),
    router
}).$mount("#app")
```
4. 在项目中使用router-view标签
<router-view></router-view>标签是组件最终的输出地
在main.js中的VueRouter()中写
```javascript
router=VueRouter({
    router:[
        { path:"路径",component:展示组件 },
            ...
    ]
})
```
```javascript
用<router-link to="/home"></router-link>  ->to属性对应的是跳转hash地址

redirect重定向
{ path:'/', redirect:'/home' }

```

### 嵌套路由
__通过路由实现的组件嵌套展示__<br/>
实现代码
```javascript
router:[
    { path:"/about", component:About,children:[
            { path:"Tap1",component:Tap1 }
        ]}
]
```
#### 动态路由匹配
--把hash地址可变部分定义为参数，从而提高路由功能的复用性__
在路由规则中使用 "__:__"来定义动态路由
```javascript
{ path:"/home/:id",component:Movie,props:true} ->:id为动态路由
```
#### 在组件中获取参数项的值
* 方法一：在组件中用this.$router.params.参数项名获取（this.$router为路由的参考对象）
* 方法二：给路由规则开启props传参
```javascript
//路由中
{ path:"/home/:id",component:Movie,props:true} ->为当前路由规则开启props传参

//对应组件中
在组件中使用props:["mid"]接受
```

::: tip 技巧
用this.$route.fullpath获取完整路径<br/>
用this.$route.path获取路径（不包含查询参数）
:::

### 编程式导航
#### 导航的分类：
1. 声明式导航：通过点击链接实现页面跳转的方式
2. 编程式导航：在浏览器中通过调用API方法来实现页面的跳转，例如：location.herf属性
#### vue-router中的编程式导航API
|方法|描述|
|---|---|
|this.$router.push("hash地址") |->跳到指定的hash地址，并增加浏览器记录|
|this.$router.replace("hash地址")|跳到指定的hash地址。并替换当前历史记录|
|this.$router.go(数值n)    |n为正整数或负整数，表示在历史页中前进或倒退n个长度|
|this.$roter.back()|倒退一个页面|
|this.$router.forward()|前进一个页面|

### 导航守卫 
__控制路由的访问权限__

#### 全局前置守卫
__每次发生路由的导航跳转时都会触发全局前置守卫__
##### 声明全局前置守卫
在router文件夹的index.js中
```javascript
// router/index.js
const router = new VueRouter({...})
router.beforeEach(function (to, from, next){
    ...
}))
```
function(to, from, next){...}
|参数|描述|
|---|---|
|to|要访问的路由信息对象|
|from|要离开的路由信息对象|
|next|是一个函数的引用，next()表示允许跳转|
next函数的三种调用方式<br/>

|方式|描述|
|---|---|
|next()|表示直接放行，允许跳转|
|next("hash地址")|强制跳转到指定页面，next("/login")强制跳转到登录页面|
|next(false)|强制停留在当前页面|

##### 控制访问权限代码
```javascript
// router/index.js
router.beforeEach(to, from, next){
    if (to.path == "/main"){
        const token = localStorage.getItem("token")
    if (token){
        next()
    }
    else {
        next("/login")
    }}
    else {
        next()
    }
}
```
__多个router-view时__
```javascript
//router/index.js
{path:"/about",name:"about",components:{name1:组件名,name2:组件名,...}}
```

::: tip 技巧
__为了方便第三方库的使用可以在vue原型上挂载第三方库的插件__
例如<br/>
Vue.prototype.axios = axios 将axios挂载到Vue原型上
使用时可以直接用Vue.axios使用
:::

## 官方文档
__为了方便此处提供了 [Vue中文官方文档](https://cn.vuejs.org/v2/guide/routing.html?)__ 和 __[vue-router中文官方文档](https://router.vuejs.org/zh/guide/)__




