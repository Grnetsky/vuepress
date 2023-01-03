---
sidebar: auto
---
# vue动画

## 使用keyframe关键帧实现
```vue
<template>
  <div class="hello">
    <button @click="isShow = !isShow">
      显示/隐藏
    </button>
<!--    transition标签为元素提供动画效果 name属性指定动画名 若不填则自动匹配.v-enter的类 appear属性定义元素出现就播放-->
    <transition appear name="hallo">
      <h1 v-show="isShow">这是vue动画</h1>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      isShow:true

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

h1 {
  background-color: tomato;
}
// 定义进入动画
.hallo-enter-active {
  animation:h1 1s linear;
}
// 定义离开
.hallo-leave-active {
  animation: h1 2s linear reverse;
}
// 定义动画
@keyframes h1 {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }

}
</style>

```
## 使用过度实现
```vue
<template>
  <div class="hello">
    <button @click="isShow = !isShow">
      显示/隐藏
    </button>
    <transition appear>
      <h1 v-show="isShow">这是vue动画</h1>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      isShow:true

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

h1 {
  background-color: tomato;
}
// 为transition 所包含的元素自动添加的类 也可以直接在过渡元素（h1）上加属性
.v-enter-active,.v-leave-active {
  transition:all 1s linear;
}
// 进入的起点，离开的终点 时的效果
.v-enter,.v-leave-to {
  transform: translateX(-100%);
}

// 进入的终点和离开的起点实现的效果
.v-leave,.v-enter-to {
  transform: translateX(0);
}
</style>
```

## 多个元素过渡 transition-group

```vue

<template>
  <div class="hello">
    <button @click="isShow = !isShow">
      显示/隐藏
    </button>
<!--    key属性必须添加-->
    <transition-group appear>
      <h1 v-show="isShow" key="1">这是vue动画1</h1>
      <h1 v-show="isShow" key="2">这是vue动画2</h1>
    </transition-group>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      isShow:true

    }
  },
  props: {
    msg: String
  },
  created() {
    this.$on("send",val=>{
      alert(val)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

h1 {
  background-color: tomato;
}

.v-enter-active,.v-leave-active {
  transition:all 1s linear;
}

.v-enter,.v-leave-to {
  transform: translateX(-100%);
}

.v-leave,.v-enter-to {
  transform: translateX(0);
}
</style>
```


## 使用第三方动画库 animate.css
官网地址：[animate.css](https://animate.style/)
```vue
<template>
  <div class="hello">
    <button @click="isShow = !isShow">
      显示/隐藏
    </button>
    <!--    // 固定写法 指定动画为animate.css-->
    <transition-group
        name="animate__animated animate__bounce"  
        appear
    enter-active-class="animate__tada"  // 指定进入动画（去animate.css官网复制）
    leave-active-class="animate__bounceOutUp" // 指定退出动画 （去animate.css官网复制）
    >
      <h1 v-show="isShow" key="1">这是vue动画1</h1>
      <h1 v-show="isShow" key="2">这是vue动画2</h1>
    </transition-group>

  </div>
</template>

<script>
// 引入animate.css
import "animate.css"
export default {
  name: 'HelloWorld',
  data(){
    return {
      isShow:true
    }
  },
  props: {
    msg: String
  },
  created() {
    this.$on("send",val=>{
      alert(val)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

h1 {
  background-color: tomato;
}

</style>
```
