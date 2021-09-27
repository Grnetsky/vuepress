# Django rest framework

restful规范：drf入门，视图，序列化，反序列化，响应，权限，认证，频率，过滤，分页

## drf的入门规范

### 1. web开发模式

```python
# 前后端不分离（前后端混合开发）返回的是html内容，服务器压力大，响应慢
  
# 前后端分离  后端只负责接口，返回json格式数据
# 什么是动态页面，什么是静态页面

# 页面静态化（高级）=>服务器减压，增加反应速度
用在并发量比较高的首页
```

#### 前后端不分离

![image-20210927085334062](/Users/mac/Library/Application Support/typora-user-images/image-20210927085334062.png)

#### 前后端分离

![image-20210927085603581](/Users/mac/Library/Application Support/typora-user-images/image-20210927085603581.png)

前端只负责页面和js逻辑，后端只提供接口，逻辑更清晰

### API接口规范

特点 url长得像返回数据的url链接

## Restful 规范

任何框架都能实现restful规范

1. 保证数据安全，url链接一般采用https协议

2. 接口特征表现

   用api关键词表示接口

   例如https://api.baidu.com/ 或者 https://www.baidu.com/api

3. 多数据版本并存

   在url链接中标识数据版本

   http://www.baidu.com/api/v1

4. 数据即资源，均使用名词

   https://www.baidu.com/api/v1/users

5. 根据请求方式决定操作资源

   https://www.baidu.com/api/v1/users  get请求，获取所有用户

   https://www.baidu.com/api/v1/users/1 get请求，获取id为1的用户

   https://www.baidu.com/api/v1/users post请求，新增用户

   https://www.baidu.com/api/v1/users/1  put请求，修改id为1的用户信息

   https://www.baidu.com/api/v1/users/1 patch请求，局部修改id为1的用户信息

   https://www.baidu.com/api/v1/users/1 delete请求，删除id为1的用户信息

6. 过滤：在url地址上以传参的形式传递搜索条件

   https://www.baidu.com/api/v1/users?limit=10 返回指定数量的数据

   https://www.baidu.com/api/v1/users/?offset =10返回记录的开始位置

7. 响应状态码

    * 请求成功 200
    * 创建成功 201
    * 永久重定向 301
    * 暂时重定向 302
    * 请求无权限 403
    * 请求路径不在 404
    * 请求方式不存在 405
    * 服务器异常 500

8. 错误处理
