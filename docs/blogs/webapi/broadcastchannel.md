---
sidebar: auto
---
# Broadcast Channel API

## 介绍
<h2>Broadcast Channel API 可以实现同 源 下浏览器不同窗口，Tab 页，frame 或者 iframe 下的 浏览器上下文 (通常是同一个网站下不同的页面) 之间的简单通讯。全双工通讯。</h2>

## 代码演示

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Broadcast Channel API
    </title>
</head>
<body>
<h1>Broadcast Channel API
</h1>

<h2>Broadcast Channel API 可以实现同 源 下浏览器不同窗口，Tab 页，frame 或者 iframe 下的 浏览器上下文 (通常是同一个网站下不同的页面) 之间的简单通讯。全双工通讯。</h2>
<button onclick="sendMsg()">点击发送广播信息</button>
<input type="text" placeholder="请输入信息">
<div id="showmsg"></div>
<input type="text">
</body>
<script>
  let channel = new BroadcastChannel("channel")  // 进入某个频道 无则创建该平道
  let listener = new BroadcastChannel("channel")
  listener.onmessage = function (msg) {   // 监听message
      console.log(msg)
      document.querySelector("#showmsg").innerHTML = msg.data
  }
  function sendMsg() {
      console.log("发送")
      channel.postMessage(document.querySelector("input").value)  //发送msg  内容可以为任意对象
  }
</script>
</html>

```
