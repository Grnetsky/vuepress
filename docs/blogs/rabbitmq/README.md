---
sidebar: auto
---

# 初识rabbitmq
## 一生产 一消费
生产队列任务
```python
import pika
from pika import ConnectionParameters

credentials = pika.PlainCredentials('admin','admin')  # 远程连接时的用户名和密码
# cconnect = pika.BlockingConnection(pika,ConnectionParameters('127.0.0.1',credentials=credentials))
# 链接rabbitmq服务器
connect = pika.BlockingConnection(ConnectionParameters('127.0.0.1',5672,credentials=credentials),)

# 设置通道
channel = connect.channel()
# 声明消息队列
channel.queue_declare("hallo")

# 发布消息
channel.basic_publish(exchange="", routing_key="hallo", body="halloworld")
# 管饱通道
connect.close()
```
消费队列任务
```
import pika
from pika import ConnectionParameters

credentials = pika.PlainCredentials('admin','admin')  # 远程连接时的用户名和密码
# cconnect = pika.BlockingConnection(pika,ConnectionParameters('127.0.0.1',credentials=credentials))
# 链接rabbitmq服务器
connect = pika.BlockingConnection(ConnectionParameters('127.0.0.1',5672,credentials=credentials),)
# 设置通道
channel = connect.channel()
# 声明消息队列
channel.queue_declare("hallo")

def call_back(ch,method,pro,body):
    print("已消费"+("-"*100))
    print(method)

channel.basic_consume(on_message_callback=call_back,
                    auto_ack=True,
                      queue="hallo"
                    )
channel.start_consuming()
```

## 一生产 多消费
与上面代码一样，多开几个消费者文件而已，会发现消费者会平分生产者的任务，公平分发

## 消息安全接受
rabbitmq会全程监听消费者是否返回任务完成响应，若返回了才真正的消费了任务，若无响应，则会重新发给另外的消费者

详细代码如下
消费者端
```
import pika
from pika import ConnectionParameters
import time
credentials = pika.PlainCredentials('admin','admin')  # 远程连接时的用户名和密码
# cconnect = pika.BlockingConnection(pika,ConnectionParameters('127.0.0.1',credentials=credentials))
# 链接rabbitmq服务器
connect = pika.BlockingConnection(ConnectionParameters('127.0.0.1',5672,credentials=credentials),)
# 设置通道
channel = connect.channel()
# 声明消息队列
channel.queue_declare("hallo")

def call_back(ch,method,pro,body):
    print("已消费"+("-"*100))
    print(body)
    time.sleep(5)
    print(5)
    ch.basic_ack(delivery_tag=method.delivery_tag)

channel.basic_consume(on_message_callback=call_back,
                      queue="hallo",
                      auto_ack=False,  # 默认为false，当为true时 则关自动安全机制
                                           # ，消息一旦被消费者接受则缓冲区会删除这套消息，
                                            #一旦消费者宕机，任务也无法重新执行
                    )
channel.start_consuming()
```
## 消息持久化
当消息队列在rabbitmq中时，而rabbitmq却出现服务器崩溃宕机，此时为了使得任务依然存在，必须进行持久化配置
配置如下
```
import pika
from pika import ConnectionParameters

credentials = pika.PlainCredentials('admin','admin')  # 远程连接时的用户名和密码
# cconnect = pika.BlockingConnection(pika,ConnectionParameters('127.0.0.1',credentials=credentials))
# 链接rabbitmq服务器
connect = pika.BlockingConnection(ConnectionParameters('127.0.0.1',5672,credentials=credentials),)

# 设置通道
channel = connect.channel()
# 声明消息队列
channel.queue_declare("hallo",durable=True) # 设置durable为True 则保留此队列为持久化队列

# 发布消息
channel.basic_publish(exchange="", routing_key="hallo", body="halloworld",
                      properties=pika.BasicProperties(delivery_mode=2)) # 设置队列中的消息持久化
# 管饱通道
connect.close()

```
:::warning 注意
一旦durable为True,则无法更改为False，因为此时消息已经持久化了
:::

## 发布订阅模式
使用rabbitmq中的exchange进行消息转发
exchange有好几种模式
1. fanout:所有绑定此exchange的队列都可以接受消息 （全民广播）
2. direct:通过routingKey和exchange决定的那些queue能接收消息
3. 所有符合routingkey的routinkey所bind的queue能接收消息
4. headers:通关headers来决定把消息发送给哪些queue

### fanout广播模式
此模式类似于广播，监听此广播的人都能接受，但是广播一旦错过就不再重复
本模式需要用到exchange交换机来进行转发，所以发布者需要指定交换机的名字和交换机的模式，而消费者，不仅需要指定模式和名字还需要绑定一个消息队列来接收消息<br>

发布者代码如下
```
import pika
from pika import ConnectionParameters

credentials = pika.PlainCredentials('admin', 'admin')  # 远程连接时的用户名和密码
# cconnect = pika.BlockingConnection(pika,ConnectionParameters('127.0.0.1',credentials=credentials))
# 链接rabbitmq服务器
connect = pika.BlockingConnection(ConnectionParameters('127.0.0.1', 5672, credentials=credentials), )

# 设置通道
channel = connect.channel()

# 声明转发器 （fanout模式不需要声明队列）
channel.exchange_declare(exchange="logx", exchange_type="fanout")

# 发布消息
channel.basic_publish(exchange="logx", body="halloworld",routing_key="1",
                      properties=pika.BasicProperties(delivery_mode=2))# 消息持久化
# 管饱通道
connect.close()

```

消费者代码
```
import pika
from pika import ConnectionParameters

credentials = pika.PlainCredentials('admin', 'admin')  # 远程连接时的用户名和密码
# cconnect = pika.BlockingConnection(pika,ConnectionParameters('127.0.0.1',credentials=credentials))
# 链接rabbitmq服务器
connect = pika.BlockingConnection(ConnectionParameters('127.0.0.1', 5672, credentials=credentials), )

# 设置通道
channel = connect.channel()

# 声明转发器 （fanout模式不需要声明队列）
channel.exchange_declare(exchange="logx",exchange_type="fanout") # 设置监听的exchange交换机名和交换模式 需要指定模式的原因是默认为direct模式
result = channel.queue_declare(exclusive=True,queue='')  # exclusive 排他 保证唯一队列名字 并会是此queue断开后自动删除queue 指定queue为空值
queuename= result.method.queue
# 将指定队列绑定到交换机上
channel.queue_bind(exchange="logx",queue=queuename)  # 将自己随机生成的queue绑定到交换机上
# 管饱通道

def call_back(ch,method,pro,body):
    print("已消费"+("-"*100))
    print(body)
    print(5)
    ch.basic_ack(delivery_tag=method.delivery_tag)

# 公平分发
channel.basic_qos(prefetch_count = 1)
channel.basic_consume(on_message_callback=call_back,
                      queue=queuename, # 指定队列名字
                      auto_ack=False,
                    )
channel.start_consuming()
```
### 组播模式（direct）

生产者代码
```python
import pika
import sys

credentials = pika.PlainCredentials("admin", "admin")
connect = pika.BlockingConnection(pika.ConnectionParameters("127.0.0.1", 5672, credentials=credentials))

channel = connect.channel()

channel.exchange_declare("direct_logs", exchange_type="direct")


severities = sys.argv[1] if len(sys.argv)>1 else "info"
message = ''.join(sys.argv[2]) or 'halloworld'

channel.basic_publish(exchange="direct_logs",
                      routing_key=severities,
                      body=message)
print("消息已发出")
channel.close()

```

消费者代码
```python
import pika
import sys

import pika
import sys

credentials = pika.PlainCredentials("admin", "admin")
connect = pika.BlockingConnection(pika.ConnectionParameters("127.0.0.1", 5672, credentials=credentials))

channel = connect.channel()
channel.exchange_declare("direct_logs", exchange_type="direct")

result = channel.queue_declare(exclusive=True, queue="",)
queue_name = result.method.queue
serverites = sys.argv[1:]

def call_back(ch,method,properties,body):
    print(method.routing_key,body)

for serverity in serverites:
    channel.queue_bind(queue=queue_name,
                       exchange="direct_logs",
                       routing_key=serverity
                       )
channel.basic_consume(on_message_callback=call_back,queue=queue_name)
channel.start_consuming()
```

### 通配符模式 (topic)
\# 匹配一个或多个单词<br>
\* 匹配一个单词
生产者
```python
import pika

from pika import ConnectionParameters

credentials = pika.PlainCredentials('admin', 'admin')  # 远程连接时的用户名和密码
# cconnect = pika.BlockingConnection(pika,ConnectionParameters('127.0.0.1',credentials=credentials))
# 链接rabbitmq服务器
connect = pika.BlockingConnection(ConnectionParameters('127.0.0.1', 5672, credentials=credentials), )

# 设置通道
channel = connect.channel()

# 声明转发器 （fanout模式不需要声明队列）
channel.exchange_declare(exchange="logx", exchange_type="topic")

# 发布消息
channel.basic_publish(exchange="logx", body="halloworld",routing_key="usa.weather",
                      properties=pika.BasicProperties(delivery_mode=2))
# 管饱通道
connect.close()

```


消费者
```python
# -*- coding: utf-8 -*-
# @Time    : 2022/2/16 19:12
# @Author  : Garnetsky
# @FileName: rabbitmq_通配符_recive.py
# @Software: PyCharm
# @Cnblogs ：http://blog.xroot.top
import pika
from pika import ConnectionParameters

credentials = pika.PlainCredentials('admin', 'admin')  # 远程连接时的用户名和密码
# cconnect = pika.BlockingConnection(pika,ConnectionParameters('127.0.0.1',credentials=credentials))
# 链接rabbitmq服务器
connect = pika.BlockingConnection(ConnectionParameters('127.0.0.1', 5672, credentials=credentials), )

# 设置通道
channel = connect.channel()

# 声明转发器 （fanout模式不需要声明队列）
channel.exchange_declare(exchange="logx",exchange_type="topic")
# 声明队列
result = channel.queue_declare(exclusive=True,queue='')  # exclusive 排他 保证唯一队列名字 并会是此queue断开后自动删除queue 指定queue为空值
queuename= result.method.queue
# 发布消息
channel.queue_bind(exchange="logx",queue=queuename,
                   routing_key="#.weather"
                   )  # 将自己随机生成的queue绑定到交换机上
# 管饱通道

def call_back(ch,method,pro,body):
    print("已消费"+("-"*100))
    print(body)
    print(5)
    ch.basic_ack(delivery_tag=method.delivery_tag)

channel.basic_consume(on_message_callback=call_back,
                      queue=queuename,
                      auto_ack=False,
                    )
channel.start_consuming()
```
