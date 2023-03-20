---
sidebar: auto
---
# 用jquery发送ajax请求时data数据为json时需要注意
默认get方法没有contentType，post方法的contentType为：application/x-www-form-urlencoded; charset=UTF-8

## 什么是contentType？
在菜鸟教程中给出这样的解释：
>Content-Type（内容类型），一般是指网页中存在的 Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些 PHP 网页点击的结果却是下载一个文件或一张图片的原因。
>Content-Type 标头告诉客户端实际返回的内容的内容类型。

相当于告诉服务器上传的数据为什么类型，以至于用不同的方式处理数据
当jquery的ajax方法传递data为json时，需要设置contentType为 application/json 类型
此时后端才能正常接受和处理json数据，不然后端将默认为表单数据处理。 ->在django中就是表现为querydict类型数据，drf中的request.data才无法获取到数据

## HTTP contentType对照表
详情查看 [菜鸟教程](https://www.runoob.com/http/http-content-type.html)
