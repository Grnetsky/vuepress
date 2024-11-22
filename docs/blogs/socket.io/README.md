---
sidebar: auto
---
# socket.io
## websocket简介

## websocket是什么
WebSocket是一种在单个TCP连接上进行全双工通信的协议。WebSocket通信协议于2011年被IETF定为标准RFC 6455，并由RFC7936补充规范。WebSocket API也被W3C定为标准。
WebSocket使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。
## websocket解决了什么痛点
解决了服务器主动调用客户端进行消息推送和消息提示的痛点

## websocket的使用
### 服务端
[socketio官方网站](https://socket.io/)

由于几乎所有语言都可以使用socketio，为了简便这里以我最方便的python实现socketio服务端
为了实现高解耦和高并发的情况，技术上采用了socketio+eventlet+rabbitmq+grpc的异步队列架构，并分为三个py文件


```python
# main.py

# 导入socketio，部署django环境
import socketio,django,os
import eventlet  # 协程
import sys
# 获取启动命令中的参数 sys.argv = ['server.py',[port]]

# django环境配置，为了能让在socketio运行在django的环境中
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.extend([BASE_DIR,])
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "background_app.settings")


# 将所有用到的系统标准io函数替换成eventlet提供的同名函数
eventlet.monkey_patch()
# django.setup()

import eventlet.wsgi
# 创建sio服务器

import server
# if len(sys.argv) < 2:
#     print('未提供端口号')
#     exit(1)
# port = int(sys.argv[1])
import chat
port=5000
# 写死
#SERVER_ADDRESS = ('',8000)

# 启动中指定端口号

SERVER_ADDRESS = ('0.0.0.0',port)
# 创建协程服务器 并启动
sock = eventlet.listen(SERVER_ADDRESS,)
#启动协程服务器
eventlet.wsgi.server(sock, server.app)

```


在server文件中连接rabbitmq，开启协程服务器，并将socketio绑定到协程服务器上
```python
# server.py


import socketio
import eventlet
import kombu

fJWT_SECRET = 'TPmi4aLWRbyVq8zu9v82dWYW17/z+UvRnYTt4P6fAXA'

# 连接rabbitmq
mgr = socketio.KombuManager("amqp://admin:admin@localhost:5672//")  # amqp://用户名:密码@localhost：5672/v_host名

sio = socketio.Server(logger=True, engineio_logger=True,async_mode="eventlet", client_manager=mgr,always_connect=True,cors_allowed_origins='*')

# 将socketio绑定到wsgi的app上
app = socketio.WSGIApp(sio)


# eventlet.wsgi.server(eventlet.listen((''


```

在chat文件中写socketio的逻辑函数

```python

# shij事件处理函数
# 设置环境变量中的 DJANGO_SETTINGS_MODULE 设置为 django 配置
# 启动 django 配置、注册 app 等等初始化操作
from django.core.handlers.wsgi import WSGIRequest
from server import sio
import time
import grpc
from im_to_django import im_to_django_pb2_grpc
from im_to_django import im_to_django_pb2

print("运行socketio")


def get_userinfo(stub, token):
    """
    调用rpc检查用户身份
    :return:
    """
    rsp_data = im_to_django_pb2.rsp_data()
    rsp_data.token = token
    res = stub.tokrn_interface(rsp_data)
    print(res)
    return res


def check_user_exist(token):
    # 构建连接rpc服务器的对象
    with grpc.insecure_channel('127.0.0.1:8888') as channel:
        stub = im_to_django_pb2_grpc.nameStub(channel)
        # req = stub.tokrn_interface()
        return get_userinfo(stub, token)


USER_LIST = []


@sio.on('connect')
def on_connect(sid, environ):
    request = WSGIRequest(environ)
    """
    在客户端连接之后被执行
    :param sid：string 客户端设置的用户id
    :environ :http请求数据
    :return:
    """
    print(request.headers)
    token = request.headers.get("token")
    print(token)
    back_data = check_user_exist(token)
    # 向客户端发送事件消息
    msg_data = {
        'msg': 'hello',
        'timestamp': round(time.time() * 1000)
    }
    print(back_data.user_exist)
    if back_data.user_exist:
        sio.enter_room(sid, room=str(back_data.user_id))
        if str(back_data.user_id) in USER_LIST:
            pass
        else:
            USER_LIST.append(str(back_data.user_id))

        print(USER_LIST)
        sio.send({"message": "登陆成功"}, room=str(back_data.user_id))

    else:
        sio.disconnect(sid)
    # 多事件名称为message则可以直接调用 sio.send(msg_data, room=sid)


def ack(event, room, message, ack):
    if not ack:
        sio.emit(event, room=room, data=message)


class Ack:
    def __init__(self, event, message, room):
        self.event = event
        self.message = message
        self.room = room

    def ack(self, ack):
        if not ack:
            print("消息未传到")
            sio.emit(self.event, self.message, self.room, callback=self.ack)
        else:
            print("消息已成功传到",ack)


# 聊天时使用message事件 传输的聊天格式为json
@sio.on("chat")
def chat(sid, data):
    data_to = data["to"]
    data_from = data["from"]
    message = data["message"]
    data_type = data["type"]
    msg_data = {
        "from": data_from,
        "message": message,
        "sendtime": time.time(),
        "type": data_type
    }
    # sio.enter_room(sid=sid, room="we")
    # print(sio.rooms(sid))
    print(USER_LIST)
    # user_online(data_to)
    sio.emit("chat", data=msg_data, room=str(data_to), callback=Ack('chat', msg_data, data_to).ack)
    # return "服务端收到"

def user_online(user_id):
    while str(user_id) not in USER_LIST:
        time.sleep(2)
    return True


@sio.on("enter_room")
def enter_room(sid, data):
    data_obj = data
    print(data_obj)
    sio.enter_room(sid, room=data_obj["room"])
    sio.emit("message", data={"msg": "进入房间成功"}, room=sid)


@sio.on("disconnect")
def disconnect(sid):
    rooms = sio.rooms(sid)
    print(sid, "断开了连接")
    print(sio.rooms(sid))
    USER_LIST.remove(sio.rooms(sid)[1])
    for room in rooms:
        sio.leave_room(sid, room)


```


