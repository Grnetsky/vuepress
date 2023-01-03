---
sidebar: auto
---
# html+css

## width继承
1.当符合css默认“继承”的情况下（子元素必须是块级元素且无定位或浮动），是不需要写width属性，就可以默认“继承”的。

否则就要特殊声明一下width属性。

2.当使用width:100%的时候 也要注意其基准点到底是谁：

（1）对于使用position:relative的子元素或浮动的子元素,其基准点始终是基于其直接父元素而言的，跟其父元素是否有定位无关。

（2）对于绝对定位position:absolute的子元素，其基准点是相对于离其最近的一层定位父元素而言。如果其所有父级元素均无定位，则是相对于body而言。

（3）对于使用position:fixed的子元素，其基准点就是body。跟父元素无关。

## height继承
height是不能继承的
给一个元素的height设置100%的前提是该元素的父级的高度是确定的
一个元素的height： 1 可以不设置 2 可以设置百分比 3 设置固定的px的高度 4 可以设置auto
如果不设置，那么他的高度是由子元素来决定的
如果设置成百分比，那么他的高度是由父元素来决定的
如果设置成固定的px,那么就是他自己来决定的
如果设置成auto，和不设置是一样的，那么他的高度是由子元素来决定的
而width是可以正常继承的，不需要写100%。

## 背景渐变
### linear-gradient()
用法：linear-gradient(方向(角度或to+方位词),渐变色1 渐变终止位置(百分比),渐变色2 渐变终止位置(百分比))

举例：
/*  从0到40%为红色，40%到50%为红色到黄色的渐变，50%到80%为黄色到绿色的渐变，80%到100%为绿色  */
background: -webkit-linear-gradient(90deg,red 40%,yellow 50%,green 80%);                 
background: -webkit-linear-gradient(left bottom,red 40%,yellow 50%,green 80%);



也可以多个写在一起
```html
background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
```

## 背景重叠
### background-clip()
background-clip: border-box|padding-box|content-box|text;

||||
|----|----|----|
border-box|	默认值。背景绘制在边框方框内（剪切成边框方框）|
padding-box| 背景绘制在衬距方框内（剪切成衬距方框）|
content-box| 背景绘制在内容方框内（剪切成内容方框）|
|text|与文字重叠|background-clip: text;-webkit-background-clip: text;color: transparent;|

## 背景过滤器
### backdrop-filter()
该CSS属性允许您对元素后面的区域执行，诸如"模糊"或"改变颜色"等效果。因为它适用于元素后面的所有内容, 所以要查看效果, 必须使元素或其背景至少部分透明。

## 图像滤镜
### filter()
filter CSS 属性通常用于调整背景和背景的渲染图像效果。

||||
|---|---|---|
filter: blur(5px)|模糊|
filter: brightness(0.4)|亮度|
filter: contrast(200%)|对比度|
filter: drop-shadow(16px 16px 20px blue)|阴影|
filter: grayscale(50%)|灰度|
filter: hue-rotate(90deg)|色相旋转|
filter: invert(75%)|色相反相|
filter: opacity(25%)|透明度（0完全透明）|
filter: saturate(30%)|饱和度|
filter: sepia(60%)|将图像转化为深褐色|


## 蓝桥杯
### HTML 基础标签

### HTML5新特性

### 盒子模型

### 浮动与定位
### CSS3新特性
### 弹性盒子

### 媒体查询


