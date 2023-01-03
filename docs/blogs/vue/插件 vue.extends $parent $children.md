---
sidebar: auto
---

::: info
    写在前面，这个专题为
:::
## vue Mixins
### 什么是mixins
所谓mixins简单理解为就是分化的配置项合集  将vue实例上的data，methods，props等配置项单独封装咋一个js文件中  可以供多个vue实例引入使用
例如：如下是我在实习时写的mixins文件


mixins配置项就是将公共的部分抽取出来 然后引用到需要的地方
### 执行顺序
1. 对于生命周期函数 mixins中的代码优先执行
2. 对于data中的字段 组件中定义的覆盖mixins中同名字段
3. 对于methods配置项，组件中定义的覆盖mixins中定义的

### 代码举例
```js
// 表格高度自适应mixin  

/*
使用方法：
1. 在对应vue组件中import {reactiveTableMixin} from "@/mixins/reactiveTableHeight.js"
2.引入后在el-form里添加 :heigth="tableHeight" 属性即可
*/
import {calculateTableHeight} from "@/utils/util.js"
export const reactiveTableMixin = {
    data() {
        return {
            tableHeight:null
        }
    },
    methods:{
        renderCell({ row, column }){
            if(row.xtZxbz == 1){
                return 'warning-row'
            }else{
                return ''
            }
        },
    },
    mounted() {
        this.$nextTick(()=>this.tableHeight = calculateTableHeight(this))
    },
}

```
### 什么是Vue.extends 组件继承

vueextend 组件继承
```html
MyPrompt.vue组件
<template>
  <div class="container">
    <van-popup v-model="showPrompt" :close-on-click-overlay="false">
      <div class="popup">
        <div class="title">{{title}}</div>
        <input class="input" type="text" :placeholder="placeholder" required v-model="data">
        <div class="bottons">
          <span style="color:#333333" @click="close">取消</span>
          <span style="color:#0159CD" @click="confirm">提交</span>
        </div>        
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name:'MyPrompt',
  data(){
    return {
      title:"",
      placeholder:"",
      showPrompt:false,
      data:"",
      callback:""
    }  
  },
  methods: {
    close(){
      this.showPrompt = false
      this.callback('取消')
    },
    confirm(){
      this.showPrompt = false
      this.callback('确认')
    }
  },
}
</script>

<style scoped>
.popup {
  width: 7.8rem;
  height: 3.5rem;
  padding:22px;
}
.title {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  }
  /* .underline {
    padding: 0.26667rem 0.42667rem;
    border-top: 1px solid #B0B0B0;
    scale: 0.4;
  } */
  .input {
    border: none;
    margin-top: 10px;
    height: 40%;
    font-size: 16px;
    /* transform: translateX(-50%); */
    /* position:relative; */
    left: 50%;
    width: 100%;
    border-bottom: 1px solid #B0B0B0;
  }
  .bottons {
    float: right;
    display: flex;
    width: 35%;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    font-size: 16px;
  }
</style>

```


```js
import Vue from 'vue'
import MyPromot from './MyPrompt.vue'

let MyPromptConstructor = Vue.extend(MyPromot)
let instance
const initMyPromptTip = function(options = {}) {
    instance = new MyPromptConstructor({
      el:document.createElement('div'),
      data: options,
    })

}
const showPrompt = obj => {
  return new Promise((resolve,reject)=>{
    // let {options } = obj
    initMyPromptTip(obj)
    Vue.nextTick(()=>{
      instance.showPrompt = true
    })
    document.body.appendChild(instance.$mount().$el)
    instance.callback = action =>{
      if(action == '确认')resolve(instance.data)
      else reject()
    }
   //this.$el拿到组件实际上的dom，把他挂载到body上
  })
}

function registerModule(){
    Vue.prototype.$prompt = showPrompt
}
export default registerModule
```
## vue.use
