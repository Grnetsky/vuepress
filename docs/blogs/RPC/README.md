---
sidebar: auto
---
# RPC (Remote Procedure Call)- 系统间通讯解决方案

将网络请求，像本地调用一样，通讯效率高，传输数据以二进制数据为主
python一般使用Thrify，grpc两种rpc方案
grpc传输数据的协议叫protobuf
使用IDL 接口定义语言

* gRPC是由Google公司开源的高性能RPC框架。

* gRPC支持多语言

* gRPC原生使用C、Java、Go进行了三种实现，而C语言实现的版本进行封装后又支持C++、C#、Node、ObjC、 Python、Ruby、PHP等开发语言

* gRPC支持多平台

* 支持的平台包括：Linux、Android、iOS、MacOS、Windows

* gRPC的消息协议使用Google自家开源的Protocol Buffers协议机制（proto3） 序列化

* gRPC的传输使用HTTP/2标准，支持双向流和连接多路复用


## 使用方法
* 使用Protocol Buffers（proto3）的IDL接口定义语言定义接口服务，编写在文本文件（以.proto为后缀名）中。
* 使用protobuf编译器生成服务器和客户端使用的stub代码
* 编写补充服务器和客户端逻辑代码

### 编写proto文件
在gRPC中推荐使用proto3版本
#### 定义protocol Buffers版本
Protocol Buffers文档的第一行非注释行，为版本申明，不填写的话默认为版本2。
```proto
syntax = "proto3";
或者
syntax = "proto2";
```

#### 基本使用方法
```proto

//指定版本
syntax = "proto3";

//使用service定义一组远端服务
service UserRecommend {
    //使用rpc定义函数名 ()里是传入参数（只能打包为一个对象中） returns()括号里定义返回参数（只能打包为一个对象中）{}
    rpc UserRecommend(UserRequest) returns (UserResponse) {}
}

//定义UserRequest数据
message UserRequest {
    //每个参数格式为    数据类型 数据名 = 序号;   （序号的存在意义是 在网络中为了效率不会出现数据名，而是用序号代替）
    int64 user_id = 0;
    int32 channel_id = 1;
    int32 article_num = 2;
    int64 time_stamp = 3;

}


// 定义UserResponse数据
message UserResponse {
    string exposer = 1;
    int64 time_stamp = 2;

    message Article {
        message Track {
            string click = 1;
            string collect = 2;
            string share = 3;
            string read = 4;
        }

        int64 article_id = 1;
        Track track = 2;
    }
    //repeated表示定义的数据是数组出现的，表示多个  格式为     repeated 数据类型 数据名 = 序号;
    repeated Article recommends = 3;
}

```

### 代码生成
安装protobuf编译器接grpc库
```python
pip install grpcio-tools
```

编译生成代码
```python
python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. reco.proto
```
* -I表示搜索proto文件中被导入文件的目录（指明根目录）
* --python_out表示保存生成Python文件的目录，生成的文件中包含接口定义中的数据类型
* --grpc_python_out表示保存生成Python文件的目录，生成的文件中包含接口定义中的服务类型
在toutiao-backend/common/rpc目录下执行上述命令，会自动生成如下两个rpc调用辅助代码模块：

* reco_pb2.py 保存根据接口定义文件中的数据类型生成的python类
* reco_pb2_grpc.py 保存根据接口定义文件中的服务方法类型生成的python调用RPC方法

输入代码过后回车 如无任何报错 则表示生成成功<br>
会生成两个文件  文件名_pb2.py  文件名_pb2_grpc.py
* 文件名_pb2.py   此文件看起来比较麻烦。因为他使用的是python的描述器来实现的，只要简单把他理解为都是类。都是message所定义的数据名的类即可
* 文件名_pb2_grpc.py 此文件生成的是rpc方法名 对应proto文件的service节点   需要说明的是此文件的类方法需要重写（不重写就报错，通过继承方法重写）

### 补充代码

服务端
```python
# -*- coding: utf-8 -*-
# @Time    : 2022/2/20 08:25
# @Author  : Garnetsky
# @FileName: server_rpc.py
# @Software: PyCharm
# @Cnblogs ：http://blog.xroot.top
import time
from concurrent.futures import ThreadPoolExecutor

import grpc
import test_pb2_grpc
import test_pb2


# 补充服务端
# 补全调用的函数代码
class UserRecommends(test_pb2_grpc.UserRecommendServicer):
    def UserRecommend(self, request, context):
        """
        这是在接口中定义的用户推荐方法
        :param request: 调用时的请求参数对象
        :param context: 通过此对象可以设置调用返回的异常信息（ context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')）
        :return:
        """
        # 获取调用的参数（request = UserRequest   获取参数直接使用request.参数形式,并且数据类型就是python内置数据）
        channel_id = request.channel_id
        user_id = request.user_id
        article_num = request.article_num
        print(channel_id,user_id,article_num)
        # 返回参数(进行逻辑运算)
        rep = test_pb2.UserResponse()
        rep.exposer = 'exposure'
        rep.time_stamp = round(time.time() * 1000)
        # =使用extend方法
        _recommends = []
        for i in range(article_num):
            # 获取参数
            article = rep.Article()

            # 设置参数
            article.article_id = i + 1
            article.track.click = 'click param'
            article.track.collect = 'collect param'
            article.track.read = 'read param'

            # 写入数据
            _recommends.append(article)

        rep.recommends.extend(_recommends)

        #返回对象数据
        return rep
# 创建rpc服务器（固定代码）

def serve():
    """
    rpc服务端启动方法
    :return:
    """

    # 创建服务器(设置工作线程)
    server = grpc.server(ThreadPoolExecutor(max_workers=10))

    # 将自己实现的被调用实现方法与服务器绑定（使用pb2中的add_方法名_server(重写的类名()，服务器名)方法添加）
    test_pb2_grpc.add_UserRecommendServicer_to_server(UserRecommends(), server)
    # 绑定ip地址和端口
    server.add_insecure_port('127.0.0.1:8000')

    # 此方法为非阻塞代码 后面需要自己添加循环
    server.start()

    # 添加循环
    while True:
        time.sleep(10)


if __name__ == '__main__':
    serve()

```

客户端
```python
# -*- coding: utf-8 -*-
# @Time    : 2022/2/20 09:01
# @Author  : Garnetsky
# @FileName: client_rpc.py
# @Software: PyCharm
# @Cnblogs ：http://blog.xroot.top
import time
import grpc
import test_pb2
import test_pb2_grpc


def feed_articles(stub):
    """
    调用推荐系统
    :return:
    """
    # 获取request参数
    user_request = test_pb2.UserRequest()

    # 设置request参数
    user_request.user_id = 1
    user_request.channel_id = 2
    user_request.article_num = 10
    user_request.time_stamp = round(time.time()*1000)

    # 相当于在rpc中调用方法   返回为ret参数为UserResponse          rpc UserRecommend(UserRequest) returns (UserResponse) {}
    ret = stub.UserRecommend(user_request)
    print(ret)



def run():
    #  创建连接rpc服务器的对象
    with grpc.insecure_channel('127.0.0.1:8000') as channel:

        # 创建调用辅助工具对象 stub
        stub = test_pb2_grpc.UserRecommendStub(channel)

        # 可以通过stub进行rpc调用 stub.方法名     （方法名为在proto文件中 rpc所定义的方法名）

        # 实现业务逻辑
        feed_articles(stub)

if __name__ == '__main__':
    run()
```

