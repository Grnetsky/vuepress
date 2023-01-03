//导入包
var ws = require("nodejs-websocket")
// 每次有用户连接 function就会执行，并且创建一个connect对象
const server = ws.createServer(function (connect){
console.log("有用户连接上来了")
    connect.on("text",(data)=>{
        // 接受并打印用户数据
        console.log(data)
        //响应给用户数据
        connect.send("1 "+data)
    })
    //用户关闭连接时触发
    connect.on("close",()=>{
        console.log("连接断开")
    })
    //注册error事件，是必须的，不然用户断开连接会报错
    connect.on("error",(e)=>{
        console.log("连接异常")
    })

})
server.listen("3000","127.0.0.1",()=>{
    console.log("websocket服务启动成功")
})

