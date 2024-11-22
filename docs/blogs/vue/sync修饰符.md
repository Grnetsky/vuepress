---
sidebar: auto
---
# vue中sync修饰符原理解析
.sync修饰符本质上就是vue的语法糖，他的作用是简化父子组件通过prop进行数据双向绑定的操作，在vue官方中文档中这么介绍的他：<br>

>在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以变更父组件，且在父组件和子组件两侧都没有明显的变更来源。
这也是为什么我们推荐以 update:myPropName 的模式触发事件取而代之。举个例子，在一个包含 title prop 的假设的组件中，我们可以用以下方法表达对其赋新值的意图：
> ```js
> this.$emit('update:title', newTitle)
>```
> 然后父组件可以监听那个事件并根据需要更新一个本地的数据 property。例如：
>```vue
><text-document
> v-bind:title="doc.title"
> v-on:update:title="doc.title = $event">
></text-document>
>````
>了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符：
> ```vue
> <text-document v-bind:title.sync="doc.title"></text-document>
>```
不难看出.sync修饰符就是将父子组件数据的双向绑定操作做了个封装，
将
```html
<son 
    :value="fatherValue"
    @update:value="(i)=>fatherValue = i">
</son> 

```
这种原本较为复杂的"手动双向绑定操作"封装成
```html
<son
    :value.sync="fatherValue">
</son>
```
::: warning
在子组件中都需要手动触发$emit('update:value',i)事件触发函数，才能进行双向绑定，且触发事件格式固定"update:子组件prop值"
:::

## 注意
绑定的fatherValue不能为表达式，也不能为显示的对象<br>
例如
```html
<son
        :value.sync="fatherVlue+'!'">
</son>

<son
        :value.sync="{title:fatherVlue.title}">
</son>
```
