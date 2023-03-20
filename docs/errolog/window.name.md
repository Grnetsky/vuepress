---
sidebar: auto
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>name.value is undefined</title>
</head>
<body>
<input type="text" id="name">
</body>
<script>
    console.log(name)
    // name 是全局变量 window自带的默认属性，不能覆盖
    var name = document.querySelector("#name") // 错误 不能覆盖name属性
    console.log(name.value) // undefined 因为window下的name属性不能被覆盖，所以无效
</script>
</html>

