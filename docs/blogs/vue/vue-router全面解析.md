---
sidebar: auto
---
## hash模式实现原理
```js
<body>
    <a href="#/login">登录</a>
    <a href="#/desk">桌面</a>
    <hr/>
    <div id="content">
    </div>
</body>
<script>
   let content= document.querySelector('#content')
    window.onhashchange=function(e){
       console.log( window.history.state )
        let { newURL }=e
        if(newURL.endsWith('#/login')){
            content.innerHTML='这是登录内容'
        }
        else if(newURL.endsWith('#/desk')){
            content.innerHTML='这是桌面内容'
        }
    }
</script>
```
## history模块原理
```js
<body>
    <a id="login" href="#">登录</a>
    <a id="desk" href="#">桌面</a>
    <hr>
        <div id="content">

        </div>
</body>
<script>
    let login=document.querySelector('#login')
    let content=document.querySelector('#content')
    login.addEventListener('click',function(e){
    e.preventDefault();
    history.pushState({name:'loginname'},'login','/login')
    content.innerHTML="登录"
})
    let desk=document.querySelector('#desk')
    desk.addEventListener('click',function(e){
    e.preventDefault();
    history.pushState({name:'deskname'},'desk','/desk')
    content.innerHTML="桌面"
})
    window.onpopstate=function(e){ 
    let name=e.state.name
    if(name=='loginname'){
    content.innerHTML="这是登录"
}else{
    content.innerHTML="这是桌面"
}
}
</script>
```
