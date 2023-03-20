let q = require('nodejs-websocket')
q.connect('ws://127.0.0.1:3000',function (connect) {
    connect.on('connect',function (data) {
        console.log(data)
    })
})
