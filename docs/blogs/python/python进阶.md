---
sidebar: auto
---
# python进阶

## 1 个人介绍

刘清政，刘老师，老刘 ，Justin

##  2 关于编辑器

python开发：pycharm（收费），vscode（免费），sublintext，

go开发：goland（收费），vscode，国产的

java：idea（收费），eclipse（免费），MyEclipse（收费）

android：androidstudio（免费），eclipse+adt

前端：webstorm（收费）

php：phpstorm（收费）

数据库开发：data

jetbrains公司出的全家桶，一个注册码，可以都用

androidstudio：买了jetbrains公司授权，在它基础上，做了它

## 3  基础串讲

### 3.1 解释型和编译型

```python
# 你出去之后开发环境：windows开发（主流），sanic，fastapi框架，windows安装不上（不支持），装了乌班图，在上面开发，配mac本
# 远程连接linux开发，远程连linux内的docker开发


c：c代码写完，编译（不同平台），跨平台运行，linux上源码安装软件，自行编译，运行
java:一处编码，处处运行，java是编译型还是解释型？编译型，编译过程---把java源代码编译成字节码文件 .class
    ---不能直接运行在操作系统之上----》jvm（java虚拟机），jvm运行至少要300m内存
    jdk
    jre
    jvm
    javase javame javaee
go:编译型，跨平台编译（windows平台可以编译出mac平台的可执行文件），所有go代码打成一个可执行文件
    
python: 强类型动态语言
js：只能在浏览器中运行，nodejs
php：web开发


# 你们将来从从事的方向
1 python后端开发：做网站，前端可以是app，小程序的python后端
2 自动化运维：收集服务器软硬件信息（cmdb），jumpserver（堡垒机），sql审批，监控，日志收集，处理
devops：ci/di

3 自动化测试：selenium，appnium，pytest
4 数据分析：
5 爬虫：
6 量化交易
7 人工智能，图像处理
8 安全方向：端口扫描，弱口令扫描，sql注入，csrf攻击，xss攻击（利用python成为顶级黑客）
9 网络方向
10 物联网方向

# 申请一个github账号
# 维护一个博客（博客园，自己写的，hexo）

```

## 3.2 数据类型



#### 3.2.1 一切皆对象

```python
python中一切皆对象

# type和object的关系
1 type 是object的类
2 type继承了object
3 type是type自己的类
4 object也是由type实例化得到


a=int(2)
#int是一个类，具体实现是由c语言实现的，如果写了pass，看不到源码,有一部分可以看到
# print(type(1))  # int :数字1 的类是int
#
# print(type(int))
# print(type(dict))

# int。dict..都是type类的对象
# int。dict继承了object
# type和object是什么关系？

# print(type(object))
# print(type(type))
# object

def a():
    pass

print(type(a))



print(type(int))  #type
print(type(object))  #type
print(type(type))  #type

# 所有类，除了object都继承自object，包括type


```

#### 3.2.1 深浅copy

```python
 #一切皆对象的好处
不同类型之间的变量直接可以相关赋值
a=100
a='xxx'
其实本质，变量都是指向了一个内存地址
出现了深浅copy问题
# 深浅copy问题

# l=[1,2,3,[4,5,6]]
# l2=l  #赋值
#
# print(l2 is l)
# from copy import copy
# from copy import deepcopy
# # l3=copy(l)
# # print(l)
# # print(l3)
# # print(l is l3)
# # l3[3][1]=999
# # print(l)
# # print(l3)
#
# l4=deepcopy(l)
# l4[3][1]=999
# print(l)
# print(l4)

```

### 3.2.3 可变类型与不可变类型

```python
#字典，列表，集合   可变类型
#数字，字符串，元组  不可变类型
# 字典的key必须用不可变类型，可以hash    
# 看一下这篇博客
https://www.cnblogs.com/xiaoyuanqujing/articles/12008689.html
# python中的参数传递是值传递还是引用传递？
python中参数传递都是copy一份传递过去，由于一切皆对象，传过去，都是地址，python中区分可变和不可变类型，可变类型在函数中修改会影响原来的，不可变类型，不会影响原来的
```

### 3.3 字符编码
```python
# 计算机的计量单位：
bit比特位：0或者1的一个小格
8个bit位是一个byte，一个字节
1024个字节---》1kb
1024kb---》1mb
1024mb---》1gb

1个字节---》2的8次方中变化，就可以表示出所有的字符（数字，字母，标点符号）

计算机到了中国---》中国汉字--》gbk编码
但是到了不同国家，不同国家有不同国家编码方式，就会出现乱码问题

Unicode编码统一了，字符和数字的对应关系

utf-8：目前主流的编码方式
utf-16

需要说清楚：assic码，gbk，unicode，utf-8
```

## 3.4 闭包函数

```python
1 定义在函数内部
2 对外部作用域有引用

函数是一等公民：函数可以赋值给一个变量
# 装饰器是闭包函数的典型应用
# python中有装饰器语法糖  @

def wrapper(func):
    def inner(*args,**kwargs):
        # 代码
        res=func(*args,**kwargs)
        # 代码
        return res
    return inner

# def a():
#     print("xxx")
   
# 没有语法糖 
# a=wrapper(a)
# a()

# 有语法糖
# @wrapper()
def a():
    print("xxx")
    
# 面向切面编程 AOP
# OOP 面向对象编程

```





## 作业

```python
前后端传数据三种编码格式，传json格式，原生django不能从POST中取出字典
用中间件或者装饰器前端不管传json还是其他格式，requests对象中有个data属性
```

# 今日内容

## 1 后续课程安排

```python
1 drf框架
2 git
3 redis使用
4 路飞项目（celery异步）
5 爬虫（mongodb）
6 linux
7 cmdb项目（资产收集）
8 代码发布系统
9 flask框架（给你一到两个项目）
10 数据结构和算法
11 docker，dockercompose（用docker部署项目，nginx负载均衡，横向扩展），k8s(看情况)
12 就业辅导（redis高级，Elasticsearch，如何提高项目并发量，分布式锁，分布式id，远程连接docker开发，git冲突如何解决）
```

## 2 作业讲解

```python
#django.middleware.common.CommonMiddleware 中间件源码# 核心代码（中间件）from django.utils.deprecation import MiddlewareMixinimport jsonclass JsonMiddel(MiddlewareMixin):    def process_request(self, request):        try:            request.data=json.loads(request.body)        except Exception as e:            request.data=request.POST            # 关注的问题：1 form表达和ajax提交的重复，form表单中input的submit类型和button按钮都会触发两次（有ajax的情况），input的button类型2 from django.http.request import QueryDict 	本质就是一个字典，比字典强大。不能修改值，一改就报错3 CommonMiddleware中间件控制了是否重定向到带/的地址
```



## 3 python中的魔法方法

``` python
# __init__：类实例化会触发# __str__:打印对象会触发# __call__:对象()触发，类也是对象  类(),类的实例化过程调用元类的__call__# __new__:在类实例化会触发，它比__init__早（造出裸体的人，__init__穿衣服）# __del__:del 对象，对象回收的时候触发# __setattr__,__getattr__:(.拦截方法)，当对象.属性--》赋值会调用setattr，如果是取值会调用getattr# __getitem__,__setitem__:([]拦截)# __enter__和__exit__ 上下文管理器
```







#### setattr，getattr，setitem，getitem演示

```python
# class Person:
#     def __init__(self,name):
#         self.name=name
#     def __setitem__(self, key, value):
#         setattr(self,key,value)  #反射
#     def __getitem__(self, item):
#         return getattr(self,item) # 反射取值
#
# p=Person('lqz')
# # p.name='ppp'
# p['name']=10 # 如何变行 重写__setitem__魔法方法
# # print(p.name)
#
# print(p['name'])


# dic={'name':'lqz','age':19}

class Mydic(dict):
    def __setattr__(self, key, value):
        print("对象加点赋值，会触发我")
        self[key]=value
    def __getattr__(self, item):
        print("对象加点取值，会触发我")
        return self[item] # 不要加引号

mydic=Mydic(name='lqz',age=18)
# print(mydic['name'])
print(mydic.name)
# mydic.name=99
# print(mydic.name)
```





#### with 上下文管理器

```python
class Person:
    def __enter__(self):
        print("我在with管理的时候，会触发")
        print('进入with语句块时执行此方法，此方法如果有返回值会赋值给as声明的变量')
        return 'oo'

    def __exit__(self, exc_type, exc_val, exc_tb):
        print('退出with代码块时执行此方法')
        print('1', exc_type)
        print('2', exc_val)
        print('3', exc_tb)


with Person() as p:   # 这句话执行，会触发类的__enter__
    print(p)
```

#### __eq__

```python
class A:
    def __init__(self,x,y):
        self.x = x
        self.y = y

    # def __eq__(self,obj):
    #     # 打印出比较的第二个对象的x值
    #     print(obj.x)
    #     if self.x +self.y == obj.x+obj.y:
    #         return True
    #     else:
    #         return False

a=A(1,2)
b=A(99,3)
print(a=='ddd')   # 当执行==s时，会触发__eq__的执行，并且把b传进去，就是object
# ==后只要是对象，就可以传进去，就是object

```



## 4   cookie，session，token

```python
# HTTP协议：无状态，无连接，基于请求响应，基于tcp/ip,应用层协议

# mysql：c/s架构：底层基于socket，自己封装的协议，mysql的客户端：navcate（c++图形化界面，实现了请求和响应协议）,pymysql(用python语言实现了请求和响应协议)
# redis：c/s架构：底层基于socket，自己封装的协议
# docker：c/s架构，基于http协议，使用restfull规范
# elasticsearch：c/s架构，基于http协议，使用restfull规范

# cookie：是存在于浏览器的键值对，向服务端发送请求，携带它过去（不安全）
# session：存在于服务端的键值对（放在哪？内存中，文件，mysql，redis）
#  缺陷：如果用户量很大，存储需要耗费服务器资源
# token：就是个字符串（既安全，又存个人信息），加密字符串，会有个人信息

# token现在应用非常广泛，契合了前后端分离
# JWT：json web token
```

### 5 django中的session底层原理

```python
# 在中间件中，请求走的时候，process_response，取出request.session的modify属性，判断是否是true，如果是true，表示在视图函数中修改过session，数据库同步修改，如果是false，就不修改，返回给前端sessionid：随机字符串
# 请求来了，通过sessionid，取出随机字符串--》去数据库中查--》把表的数据转成字典，赋值给request.session,后面视图函数中就可以操作它了
```



### 6 异常处理

```python
try:except   ：finally：else：  什么时候执行try:    print("xxx")    # print(1/0)except Exception as e:    print(e)else:  # 基本上不会用到    print("正常执行，没有出异常，会走")finally:    print("我是finally")   # 用于会走，无论是否有异常
```

## 7 pymysql的使用

```python
import pymysql#连接数据库conn=pymysql.connect(host='101.133.225.166', user='root', password="123456",database='test', port=3306) ## 获取游标cursor=conn.cursor(cursor=pymysql.cursors.DictCursor) # 查出来数据是字典格式# 操作 定义一个sql# sql='select id,name from book'# cursor.execute(sql)# ret=cursor.fetchall()# print(ret)# 插入# sql='insert into book(id,name) values (%s,%s)'# cursor.execute(sql,[3,'lqz'])# conn.commit()# 删除# sql='delete from book where name=%s'# cursor.execute(sql,['lqz'])# conn.commit()# 更新# sql='update book set name=%s where id=%s'# cursor.execute(sql,['xxx',1])# conn.commit()
```





# 作业

1 写一个类，有个name属性，如果name赋值为非字符串，就不让放

2 通过上下文管理器写一个mysql的连接，通过with管理

3 使用django实现token功能



## django回顾

### 1 web应用，http协议，web框架

```python
# ip+端口号唯一确定一个应用
# web框架是什么
# http协议

# wsgi协议，wsgiref，uWSGI分别是什么？
wsgi协议是py中的一个协议：规定了如何拆，封http协议

#模板文件是在什么时候完成渲染的？
在后端渲染完，只要出了django框架，就是完整的html，css和js
```

### 2 django请求生命周期

![1593655165215](C:\Users\oldboy\AppData\Roaming\Typora\typora-user-images\1593655165215.png)

### 3 路由控制

```python
# django是一个同步框架
# 最新版本3.x  
# URL与要为该URL调用的视图函数之间的映射表
# 1.x 和2.x版本路由稍微不同
	1.x：url
    2.x：path，re_path(原来的url)
# 写法
from django.conf.urls import url
urlpatterns = [
     url(正则表达式, views视图函数，参数，别名),
]
#  APPEND_SLASH  的用法
# 
# 有名分组 
re_path(r'^articles/(?P<year>[0-9]{4})/$', views.year_archive),
# 无名分组
re_path(r'^articles/([0-9]{4})/$', views.year_archive),

# 路由分发
path('app01/', include(urls)),

#反向解析
###视图函数中
from django.shortcuts import reverse
url=reverse('test',args=(10,20))  # test是在url内配置的别名
###在模板中使用
{% url "别名" 参数  参数%}

# 名称空间（了解）

#2.x的path内置了几个转换器
str,匹配除了路径分隔符（/）之外的非空字符串，这是默认的形式
int,匹配正整数，包含0。
slug,匹配字母、数字以及横杠、下划线组成的字符串。
uuid,匹配格式化的uuid，如 075194d3-6885-417e-a8a8-6c931e272f00。
path,匹配任何非空字符串，包含了路径分隔符（/）（不能用？）


# 2.x的path自定义转换器（了解）
```

### 4 视图层

```python
#response对象： 三件套+JsonResponse   本质都是HttpResonse
#request对象：
	request.GET:http://127.0.0.1:8000/index/123?name=lqz&age=18   name=lqz&age=18会被转成字典，放到GET中
    request.POST:urlencoded,formdata两种编码的数据会被放在这个字典中
        
    request.META:HTTP请求的其他东西，放在里面，入客户端ip地址：REMOTE_ADDR
    request.FILES:上传的文件
    request.session:用的session
        
        
# 301 和302的区别

# JsonResponse

# CBV和FBV
#文件上传（form表单中指定编码方式）
def index(request):
    if request.method=='GET':

        return  render(request,'index.html')
    else:
        myfile=request.FILES.get('myfile')  #文件对象
        print(type(myfile))
        from django.core.files.uploadedfile import InMemoryUploadedFile
        name=myfile.name
        print(myfile.field_name)
        with open(name,'wb') as f:
            for line in myfile:
                f.write(line)
        return HttpResponse('文件上传成功')
```

### 5 模板层

```python
模版语法重点：

　　变量：{{ 变量名 }}

　　　　1 深度查询 用句点符

　　　　2 过滤器

　　标签：｛｛%  % ｝｝

	内置过滤器：
    {{obj|filter__name:param}}  变量名字|过滤器名称：变量
    重点：safe
    
    xss攻击
    <a href="https://www.baidu.com">点我<a>  如果原封不动的显示在html中，一定是a标签，html的特殊字符
    
    for标签
    if标签
    with标签
    
    
    # {% csrf_token%}
    {% csrf_token%}
{{ csrf_token }}
<input type="hidden"value="sadfasdfasdf">


# 模板的导入和继承
include
extend：先用{% block title %}，
再用{% extends "base.html" %} 
{% block content %}
自己的内容
{% endblock %}
```

### 6 模型层

```python
# 使用orm的步骤
	1 在setting中配置（连数据库的地址，端口）
    2 在 __init__中使用pymysql
    3 在models.py中写类，写属性
    4 使用：数据库迁移的两条命令
    	python3 manage.py makemigrations  #记录
        python3 manage.py migrate         # 真正的数据库同步
    5 在视图函数中使用orm
    	
 # orm的api
    <1> all():                  查询所有结果

    <2> filter(**kwargs):       它包含了与所给筛选条件相匹配的对象

    <3> get(**kwargs):          返回与所给筛选条件相匹配的对象，返回结果有且只有一个，如果符合筛选条件的对象超过一个或者没有都会抛出错误。

    <4> exclude(**kwargs):      它包含了与所给筛选条件不匹配的对象

    <5> order_by(*field):       对查询结果排序('-id')

    <6> reverse():              对查询结果反向排序

    <8> count():                返回数据库中匹配查询(QuerySet)的对象数量。

    <9> first():                返回第一条记录

    <10> last():                返回最后一条记录

    <11> exists():              如果QuerySet包含数据，就返回True，否则返回False

    <12> values(*field):        返回一个ValueQuerySet——一个特殊的QuerySet，运行后得到的并不是一系列
                                model的实例化对象，而是一个可迭代的字典序列
    <13> values_list(*field):   它与values()非常相似，它返回的是一个元组序列，values返回的是一个字典序列

    <14> distinct():            从返回结果中剔除重复纪录
        
        
 # 下划线查询
        Book.objects.filter(price__in=[100,200,300])
        Book.objects.filter(price__gt=100)
        Book.objects.filter(price__lt=100)
        Book.objects.filter(price__gte=100)
        Book.objects.filter(price__lte=100)
        Book.objects.filter(price__range=[100,200])
        Book.objects.filter(title__contains="python")
        Book.objects.filter(title__icontains="python")
        Book.objects.filter(title__startswith="py")
        Book.objects.filter(pub_date__year=2012)
 #删除
	对象.delete()   #删一条
    queryset对象.delete()  # 删多条
 #更新
	Book.objects.filter(title__startswith="py").update(price=120）
```





# 作业：

1 链式调用（jq），用python实现链式调用（对象.hello.world.add()）

2 关键字过滤的标签

3 **常用（非常用）字段和参数，Django-model进阶**（https://www.cnblogs.com/liuqingzheng/p/9506212.html）



## 1 Django与Ajax

```python
# 通过ajax向https://api.help.bj.cn/apis/life29/?id=101060101发送请求，看看能不能拿回数据

一 什么是Ajax
二 基于jquery的Ajax实现
三 案例
四 文件上传
五 Ajax提交json格式数据
六 Django内置的serializers（把对象序列化成json字符串）
```



## 2分页器组件

```python
固定代码，修改就可以
```



## 3 **forms组件**

```python
1 使用它字段校验功能
	-1 写一个类（UserForm），继承Form
    -2 在类中写字段，pwd=forms.CharField(max_length=32,min_length=4)
    -3 在视图函数中使用：form=UserForm(校验的字典)
    -4 form.is_valid() 通过了，就可以存起来，不通过，form.errors会有错误信息
2 默认的校验规则还不够，需要自己写钩子函数
	-局部钩子：
    	def clean_字段名()
        	val=self.cleaned_data.get("name") # val就是要校验的字段，做限制
            通过直接return
            不通过抛出raise ValidationError("该用户已注册!")
    -全局钩子：
    	    def clean(self):
                pwd=self.cleaned_data.get('pwd')
                r_pwd=self.cleaned_data.get('r_pwd')

                if pwd and r_pwd:
                    if pwd==r_pwd:
                        return self.cleaned_data
                    else:
                        raise ValidationError('两次密码不一致')
                else:

                    return self.cleaned_data
                
 # forms组件源码执行流程
	form.is_valid()----》内部起了一个for循环，先去校验每个字段配置的规则，校验完成，走该字段的局部钩子函数，一个一个执行完（交验完）---》会走全局钩子（clean()）--->self就会有clean_data和errors
    
1 流程：
	1 form.is_valid()
    2 self.errors
    3 self.full_clean()
    4   self._clean_fields()   局部字段的校验（自己的和局部钩子）
    		    if hasattr(self, 'clean_%s' % name):
                    func=getattr(self, 'clean_%s' % name)
                    value = func()
                    self.cleaned_data[name] = value
        self._clean_form()     全局的钩子
        self._post_clean()
        
        

```



## 4cookie与session组件

```python
# 使用django放置cookie
response.set_cookie(key,value)   （HttpResonse对象） render，JsonResponse，redirect
response.set_signed_cookie(key,value,salt='加密盐')
# 参数详解
key, 键
value='', 值
max_age=None, 超时时间 cookie需要延续的时间（以秒为单位）如果参数是\ None`` ，这个cookie会延续到浏览器关闭为止
expires=None, 超时时间(IE requires expires, so set it if hasn't been already.)
path='/', Cookie生效的路径，/ 表示根路径，特殊的：根路径的cookie可以被任何url的页面访问，浏览器只会把cookie回传给带有该路径的页面，这样可以避免将cookie传给站点中的其他的应用。
domain=None, Cookie生效的域名 你可用这个参数来构造一个跨站cookie。如， domain=".example.com"所构造的cookie对下面这些站点都是可读的：www.example.com 、 www2.example.com 和an.other.sub.domain.example.com 。如果该参数设置为 None ，cookie只能由设置它的站点读取
secure=False, 浏览器将通过HTTPS来回传cookie
httponly=False 只能http协议传输，无法被JavaScript获取（不是绝对，底层抓包可以获取到也可以被覆盖）
# 删除cookie 
response.delete_cookie("user")

# 获取cookie
request.COOKIES['key']    # request对象
request.COOKIES.get('key')
```

```python
#设置session
# 获取、设置、删除Session中数据
request.session['k1']
request.session.get('k1',None)
request.session['k1'] = 123
request.session.setdefault('k1',123) # 存在则不设置
del request.session['k1']


# 所有 键、值、键值对
request.session.keys()
request.session.values()
request.session.items()
request.session.iterkeys()
request.session.itervalues()
request.session.iteritems()

# 会话session的key
request.session.session_key

# 将所有Session失效日期小于当前日期的数据删除
request.session.clear_expired()

# 检查会话session的key在数据库中是否存在
request.session.exists("session_key")

# 删除当前会话的所有Session数据(只删数据库)
request.session.delete()
　　
# 删除当前的会话数据并删除会话的Cookie（数据库和cookie都删）。
request.session.flush() 
    这用于确保前面的会话数据不可以再次被用户的浏览器访问
    例如，django.contrib.auth.logout() 函数中就会调用它。

# 设置会话Session和Cookie的超时时间
request.session.set_expiry(value)
    * 如果value是个整数，session会在些秒数后失效。
    * 如果value是个datatime或timedelta，session就会在这个时间后失效。
    * 如果value是0,用户关闭浏览器session就会失效。
    * 如果value是None,session会依赖全局session失效策略。
```



## 5中间件组件

```python
process_request(self,request)
	return response(不再往后走，直接就回去了)
	return None  会继续往后走
process_response(self, request, response)
	
	return response（否则报错）

# 进来的时候，从上往下执行
# 出的时候，从下往上
```



## 6Auth模块

```python
# 记住这些
authenticate()
login(HttpRequest, user)
logout(request)
is_authenticated()
login_requierd()
create_user()
create_superuser()
check_password(password)
set_password(password)

#扩展auth_user表
自己写一个类，继承AbstractUser，自己写扩展字段
在setting中配置：AUTH_USER_MODEL = "app名.UserInfo"
```



## 作业：

1 学的不好的同学：用ajax提交一个json格式数据，返回一个json格式数据，console.log打印出来

2 通过ajax上传一个文件并保存起来，前端接收到，弹窗说上传成功



3 大家都写的：

用ajax提交用户的注册信息（用户名，密码，确认密码，年龄）（json），form组件做认证，姓名要大于4，小于16，不能以sb开头和结尾，用户名如果存在，也不能存进去，密码（最大16位，最小4位），年龄，小于150，大于18岁，密码和确认密码要一致，校验通过，存到user表中，

4 读一下forms执行流程



5 自己手动实现一个存文件的session，自定制一个session字典

6 敲一遍bbs项目





## 1 Django与Ajax

```python
# 通过ajax向https://api.help.bj.cn/apis/life29/?id=101060101发送请求，看看能不能拿回数据一 什么是Ajax二 基于jquery的Ajax实现三 案例四 文件上传五 Ajax提交json格式数据六 Django内置的serializers（把对象序列化成json字符串）
```



## 2分页器组件

```python
固定代码，修改就可以
```



## 3 **forms组件**

```python
1 使用它字段校验功能	-1 写一个类（UserForm），继承Form    -2 在类中写字段，pwd=forms.CharField(max_length=32,min_length=4)    -3 在视图函数中使用：form=UserForm(校验的字典)    -4 form.is_valid() 通过了，就可以存起来，不通过，form.errors会有错误信息2 默认的校验规则还不够，需要自己写钩子函数	-局部钩子：    	def clean_字段名()        	val=self.cleaned_data.get("name") # val就是要校验的字段，做限制            通过直接return            不通过抛出raise ValidationError("该用户已注册!")    -全局钩子：    	    def clean(self):                pwd=self.cleaned_data.get('pwd')                r_pwd=self.cleaned_data.get('r_pwd')                if pwd and r_pwd:                    if pwd==r_pwd:                        return self.cleaned_data                    else:                        raise ValidationError('两次密码不一致')                else:                    return self.cleaned_data                 # forms组件源码执行流程	form.is_valid()----》内部起了一个for循环，先去校验每个字段配置的规则，校验完成，走该字段的局部钩子函数，一个一个执行完（交验完）---》会走全局钩子（clean()）--->self就会有clean_data和errors    1 流程：	1 form.is_valid()    2 self.errors    3 self.full_clean()    4   self._clean_fields()   局部字段的校验（自己的和局部钩子）    		    if hasattr(self, 'clean_%s' % name):                    func=getattr(self, 'clean_%s' % name)                    value = func()                    self.cleaned_data[name] = value        self._clean_form()     全局的钩子        self._post_clean()                
```



## 4cookie与session组件

```python
# 使用django放置cookieresponse.set_cookie(key,value)   （HttpResonse对象） render，JsonResponse，redirectresponse.set_signed_cookie(key,value,salt='加密盐')# 参数详解key, 键value='', 值max_age=None, 超时时间 cookie需要延续的时间（以秒为单位）如果参数是\ None`` ，这个cookie会延续到浏览器关闭为止expires=None, 超时时间(IE requires expires, so set it if hasn't been already.)path='/', Cookie生效的路径，/ 表示根路径，特殊的：根路径的cookie可以被任何url的页面访问，浏览器只会把cookie回传给带有该路径的页面，这样可以避免将cookie传给站点中的其他的应用。domain=None, Cookie生效的域名 你可用这个参数来构造一个跨站cookie。如， domain=".example.com"所构造的cookie对下面这些站点都是可读的：www.example.com 、 www2.example.com 和an.other.sub.domain.example.com 。如果该参数设置为 None ，cookie只能由设置它的站点读取secure=False, 浏览器将通过HTTPS来回传cookiehttponly=False 只能http协议传输，无法被JavaScript获取（不是绝对，底层抓包可以获取到也可以被覆盖）# 删除cookie response.delete_cookie("user")# 获取cookierequest.COOKIES['key']    # request对象request.COOKIES.get('key')
```

```python
#设置session# 获取、设置、删除Session中数据request.session['k1']request.session.get('k1',None)request.session['k1'] = 123request.session.setdefault('k1',123) # 存在则不设置del request.session['k1']# 所有 键、值、键值对request.session.keys()request.session.values()request.session.items()request.session.iterkeys()request.session.itervalues()request.session.iteritems()# 会话session的keyrequest.session.session_key# 将所有Session失效日期小于当前日期的数据删除request.session.clear_expired()# 检查会话session的key在数据库中是否存在request.session.exists("session_key")# 删除当前会话的所有Session数据(只删数据库)request.session.delete()　　# 删除当前的会话数据并删除会话的Cookie（数据库和cookie都删）。request.session.flush()     这用于确保前面的会话数据不可以再次被用户的浏览器访问    例如，django.contrib.auth.logout() 函数中就会调用它。# 设置会话Session和Cookie的超时时间request.session.set_expiry(value)    * 如果value是个整数，session会在些秒数后失效。    * 如果value是个datatime或timedelta，session就会在这个时间后失效。    * 如果value是0,用户关闭浏览器session就会失效。    * 如果value是None,session会依赖全局session失效策略。
```



## 5中间件组件

```python
process_request(self,request)
	return response(不再往后走，直接就回去了)
	return None  会继续往后走
process_response(self, request, response)
	
	return response（否则报错）

# 进来的时候，从上往下执行
# 出的时候，从下往上
```



## 6Auth模块

```python
# 记住这些
authenticate()
login(HttpRequest, user)
logout(request)
is_authenticated()
login_requierd()
create_user()
create_superuser()
check_password(password)
set_password(password)

#扩展auth_user表
自己写一个类，继承AbstractUser，自己写扩展字段
在setting中配置：AUTH_USER_MODEL = "app名.UserInfo"
```



## 作业：

1 学的不好的同学：用ajax提交一个json格式数据，返回一个json格式数据，console.log打印出来

2 通过ajax上传一个文件并保存起来，前端接收到，弹窗说上传成功



3 大家都写的：

用ajax提交用户的注册信息（用户名，密码，确认密码，年龄）（json），form组件做认证，姓名要大于4，小于16，不能以sb开头和结尾，用户名如果存在，也不能存进去，密码（最大16位，最小4位），年龄，小于150，大于18岁，密码和确认密码要一致，校验通过，存到user表中，

4 读一下forms执行流程



5 自己手动实现一个存文件的session，自定制一个session字典

6 敲一遍bbs项目

# 昨日回顾

```python
1 web的两种开发模式
2 web api
3 posman的使用（路径必须完全正确）
4 restful规范 10条
5 drf的安装和使用
6 cbv源码分析
	-视图类，必须继承View（读View的源码）
    -在类里写get，post方法就可以了，只要get请求来，就会走get方法（方法跟之前的fbv写法完全一样）
    -路由：views.Books.as_view()---这个函数执行完一定是一个内存地址---》view（闭包函数）内存函数的地址
    -请求来了，路由匹配上--->view(request)--->self.dispatch(request, *args, **kwargs)
    -dispatch-->把请求方法转成小写---》通过反射，去对象中找，有没有get方法，有就加括号执行，并且把request传进去了
7 APIView源码分析（drf提供的，扩展了View的功能）
	-视图类，继承APIView（读APIView的源码）
    -在类里写get，post方法就可以了，只要get请求来，就会走get方法（方法跟之前的fbv写法完全一样）
    -路由：views.Books.as_view()---这个函数执行完一定是一个内存地址---》view（闭包函数）内存函数的地址，处理了csrf，所有请求，都没有csrf校验了
    -请求来了，路由匹配上--->view(request)--->self.dispatch(request, *args, **kwargs)，现在这个dispatch不是View中的dispatch，而是APIView中的dispatch
    -def dispatch(self, request, *args, **kwargs):

        self.args = args
        self.kwargs = kwargs
        #  self.initialize_request(request, *args, **kwargs)  request是当次请求的request
        # request = self.initialize_request  request是一个新的Request对象
        request = self.initialize_request(request, *args, **kwargs)
        self.request = request
        self.headers = self.default_response_headers  # deprecate?

        try:
            # 三大认证模块(request是新的request)
            self.initial(request, *args, **kwargs)

            # Get the appropriate handler method
            if request.method.lower() in self.http_method_names:
                handler = getattr(self, request.method.lower(),
                                  self.http_method_not_allowed)
            else:
                handler = self.http_method_not_allowed

            # 响应模块
            response = handler(request, *args, **kwargs)

        except Exception as exc:
            # 异常模块
            response = self.handle_exception(exc)

        # 渲染模块
        self.response = self.finalize_response(request, response, *args, **kwargs)
        return self.response
```



# 今日内容

## 1 序列化组件介绍

```python
1. 序列化,序列化器会把模型对象转换成字典,经过response以后变成json字符串
2. 反序列化,把客户端发送过来的数据,经过request以后变成字典,序列化器可以把字典转成模型
3. 反序列化,完成数据校验功能
```

## 2 简单使用

```python
1 写一个序列化的类，继承Serializer
2 在类中写要序列化的字段，想序列化哪个字段，就在类中写哪个字段
3 在视图类中使用，导入--》实例化得到序列化类的对象，把要序列化的对象传入
4 序列化类的对象.data   是一个字典
5 把字典返回，如果不使用rest_framework提供的Response,就得使用JsonResponse

```

```python
# ser.py
class BookSerializer(serializers.Serializer):
    # id=serializers.CharField()
    name=serializers.CharField()
    # price=serializers.DecimalField()
    price=serializers.CharField()
    author=serializers.CharField()  
    publish=serializers.CharField()
    
# views.py
class BookView(APIView):
    def get(self,request,pk):
        book=Book.objects.filter(id=pk).first()
        #用一个类，毫无疑问，一定要实例化
        #要序列化谁，就把谁传过来
        book_ser=BookSerializer(book)  # 调用类的__init__
        # book_ser.data   序列化对象.data就是序列化后的字典
        return Response(book_ser.data)
    
# urls.py
re_path('books/(?P<pk>\d+)', views.BookView.as_view()),
```



## 3 序列化类的字段类型

```python
有很多，不需要都记住
只需要记住：CharField，IntegerField，DateField。。。
```

## 4 序列化字段选项



## 5 序列化组件修改数据

```python
1 写一个序列化的类，继承Serializer
2 在类中写要反序列化的字段，想反序列化哪个字段，就在类中写哪个字段，字段的属性（max_lenth......）
	max_length	最大长度
    min_lenght	最小长度
    allow_blank	是否允许为空
    trim_whitespace	是否截断空白字符
    max_value	最小值
    min_value	最大值
3 在视图类中使用，导入--》实例化得到序列化类的对象，把要要修改的对象传入，修改的数据传入
	boo_ser=BookSerializer(book,request.data)
    boo_ser=BookSerializer(instance=book,data=request.data)
4 数据校验 if boo_ser.is_valid()
5 如果校验通过，就保存
	boo_ser.save()  # 注意不是book.save()
6 如果不通过，逻辑自己写


7 如果字段的校验规则不够，可以写钩子函数（局部和全局）
		# 局部钩子
	    def validate_price(self, data):   # validate_字段名  接收一个参数
            #如果价格小于10，就校验不通过
            # print(type(data))
            # print(data)
            if float(data)>10:
                return data
            else:
                #校验失败，抛异常
                raise ValidationError('价格太低')
         # 全局钩子
        	def validate(self, validate_data):   # 全局钩子
                print(validate_data)
                author=validate_data.get('author')
                publish=validate_data.get('publish')
                if author == publish:
                    raise ValidationError('作者名字跟出版社一样')
                else:
                    return validate_data
8 可以使用字段的author=serializers.CharField(validators=[check_author]) ，来校验
	-写一个函数
    	def check_author(data):
            if data.startswith('sb'):
                raise ValidationError('作者名字不能以sb开头')
            else:
                return data
     -配置：validators=[check_author]

```

```python
# models.py
class Book(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=32)
    price=models.DecimalField(max_digits=5,decimal_places=2)
    author=models.CharField(max_length=32)
    publish=models.CharField(max_length=32)

# ser.py

# from rest_framework.serializers import Serializer  # 就是一个类
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
# 需要继承 Serializer


def check_author(data):
    if data.startswith('sb'):
        raise ValidationError('作者名字不能以sb开头')
    else:
        return data


class BookSerializer(serializers.Serializer):
    # id=serializers.CharField()
    name=serializers.CharField(max_length=16,min_length=4)
    # price=serializers.DecimalField()
    price=serializers.CharField()
    author=serializers.CharField(validators=[check_author])  # validators=[] 列表中写函数内存地址
    publish=serializers.CharField()

    def validate_price(self, data):   # validate_字段名  接收一个参数
        #如果价格小于10，就校验不通过
        # print(type(data))
        # print(data)
        if float(data)>10:
            return data
        else:
            #校验失败，抛异常
            raise ValidationError('价格太低')
    def validate(self, validate_data):   # 全局钩子
        print(validate_data)
        author=validate_data.get('author')
        publish=validate_data.get('publish')
        if author == publish:
            raise ValidationError('作者名字跟出版社一样')
        else:
            return validate_data
    def update(self, instance, validated_data):
        #instance是book这个对象
        #validated_data是校验后的数据
        instance.name=validated_data.get('name')
        instance.price=validated_data.get('price')
        instance.author=validated_data.get('author')
        instance.publish=validated_data.get('publish')
        instance.save()  #book.save()   django 的orm提供的
        return instance

    
 #views.py
class BookView(APIView):
    def get(self,request,pk):
        book=Book.objects.filter(id=pk).first()
        #用一个类，毫无疑问，一定要实例化
        #要序列化谁，就把谁传过来
        book_ser=BookSerializer(book)  # 调用类的__init__
        # book_ser.data   序列化对象.data就是序列化后的字典
        return Response(book_ser.data)
        # return JsonResponse(book_ser.data)

    def put(self,request,pk):
        response_msg={'status':100,'msg':'成功'}
        # 找到这个对象
        book = Book.objects.filter(id=pk).first()
        # 得到一个序列化类的对象
        # boo_ser=BookSerializer(book,request.data)
        boo_ser=BookSerializer(instance=book,data=request.data)

        # 要数据验证（回想form表单的验证）
        if boo_ser.is_valid():  # 返回True表示验证通过
            boo_ser.save()  # 报错
            response_msg['data']=boo_ser.data
        else:
            response_msg['status']=101
            response_msg['msg']='数据校验失败'
            response_msg['data']=boo_ser.errors

        return Response(response_msg)
# urls.py
re_path('books/(?P<pk>\d+)', views.BookView.as_view()),
```



## 6 read_only和write_only

```python
read_only	表明该字段仅用于序列化输出，默认False,如果设置成True，postman中可以看到该字段，修改时，不需要传该字段
write_only	表明该字段仅用于反序列化输入，默认False，如果设置成True，postman中看不到该字段，修改时，该字段需要传

# 以下的了解
required	表明该字段在反序列化时必须输入，默认True
default	反序列化时使用的默认值
allow_null	表明该字段是否允许传入None，默认False
validators	该字段使用的验证器
error_messages	包含错误编号与错误信息的字典
```



## 7查询所有

```python
# views.pyclass 
BooksView(APIView):    
   def get(self,request):        
       response_msg = {'status': 100, 'msg': '成功'}        
       books=Book.objects.all()        
       book_ser=BookSerializer(books,many=True)  #序列化多条,如果序列化一条，不需要写        response_msg['data']=book_ser.data        return Response(response_msg)    #urls.pypath('books/', views.BooksView.as_view()),
```

## 8 新增数据

```python
# views.pyclass BooksView(APIView):    # 新增    
    def post(self,request):        
    response_msg = {'status': 100, 'msg': '成功'}        #修改才有instance，新增没有instance，只有data        
    book_ser = BookSerializer(data=request.data)        
    # book_ser = BookSerializer(request.data)  # 这个按位置传request.data会给instance，就报错了        
    # 校验字段        
    if book_ser.is_valid():            
        book_ser.save()            
        response_msg['data']=book_ser.data        
    else:            
        response_msg['status']=102            
        response_msg['msg']='数据校验失败'            
        response_msg['data']=book_ser.errors        
        return Response(response_msg)#ser.py 序列化类重写create方法    
    def create(self, validated_data):        
    instance=Book.objects.create(**validated_data)        
    return instance# urls.pypath('books/', views.BooksView.as_view()),
```



## 9 删除一个数据

```python
# views.pyclass BookView(APIView):    
def delete(self,request,pk):        
ret=Book.objects.filter(pk=pk).delete()        
return Response({'status':100,'msg':'删除成功'})# urls.pyre_path('books/(?P<pk>\d+)', views.BookView.as_view()),
```



## 10 模型类序列化器

```python
class BookModelSerializer(serializers.ModelSerializer):    class Meta:        model=Book  # 对应上models.py中的模型        fields='__all__'        # fields=('name','price','id','author') # 只序列化指定的字段        # exclude=('name',) #跟fields不能都写，写谁，就表示排除谁        # read_only_fields=('price',)        # write_only_fields=('id',) #弃用了，使用extra_kwargs        extra_kwargs = {  # 类似于这种形式name=serializers.CharField(max_length=16,min_length=4)            'price': {'write_only': True},        }        # 其他使用一模一样#不需要重写create和updata方法了
```



## 11 源码分析

### many=True的实际用途

```python
# 序列化多条，需要传many=True# book_ser=BookModelSerializer(books,many=True)book_one_ser=BookModelSerializer(book)print(type(book_ser))#<class 'rest_framework.serializers.ListSerializer'>print(type(book_one_ser))#<class 'app01.ser.BookModelSerializer'># 对象的生成--》先调用类的__new__方法，生成空对象# 对象=类名(name=lqz)，触发类的__init__()# 类的__new__方法控制对象的生成def __new__(cls, *args, **kwargs):    if kwargs.pop('many', False):        return cls.many_init(*args, **kwargs)    # 没有传many=True,走下面，正常的对象实例化    return super().__new__(cls, *args, **kwargs)
```

### Serializer高级用法

```python
# source的使用	1 可以改字段名字  xxx=serializers.CharField(source='title')    2 可以.跨表publish=serializers.CharField(source='publish.email')    3 可以执行方法pub_date=serializers.CharField(source='test') test是Book表模型中的方法    # SerializerMethodField(）的使用	1 它需要有个配套方法，方法名叫get_字段名，返回值就是要显示的东西    authors=serializers.SerializerMethodField() #它需要有个配套方法，方法名叫get_字段名，返回值就是要显示的东西    def get_authors(self,instance):        # book对象        authors=instance.authors.all()  # 取出所有作者        ll=[]        for author in authors:            ll.append({'name':author.name,'age':author.age})        return ll
```





















# 补充

## 1 如果有这个错（把rest_framework在app中注册一下）

![1594086609193](C:\Users\oldboy\AppData\Roaming\Typora\typora-user-images\1594086609193.png)

## 2补充自己封装Respons对象

```python
class MyResponse():    def __init__(self):        self.status=100        self.msg='成功'    @property    def get_dict(self):        return self.__dict__if __name__ == '__main__':    res=MyResponse()    res.status=101    res.msg='查询失败'    # res.data={'name':'lqz'}    print(res.get_dict)
```

## 3 你在实际开发中碰到的问题及如何解决的

```python
write_only_fields 不能使用了，使用extra_kwargs解决了extra_kwargs = {            'id': {'write_only': True},        }
```



# 作业：

## 1 图书的5个接口写完（使用序列化组件）

## 2 尝试修改一下返回的字段名字

# 昨日回顾

```python
1 web的两种开发模式2 web api3 posman的使用（路径必须完全正确）4 restful规范 10条5 drf的安装和使用6 cbv源码分析	-视图类，必须继承View（读View的源码）    -在类里写get，post方法就可以了，只要get请求来，就会走get方法（方法跟之前的fbv写法完全一样）    -路由：views.Books.as_view()---这个函数执行完一定是一个内存地址---》view（闭包函数）内存函数的地址    -请求来了，路由匹配上--->view(request)--->self.dispatch(request, *args, **kwargs)    -dispatch-->把请求方法转成小写---》通过反射，去对象中找，有没有get方法，有就加括号执行，并且把request传进去了7 APIView源码分析（drf提供的，扩展了View的功能）	-视图类，继承APIView（读APIView的源码）    -在类里写get，post方法就可以了，只要get请求来，就会走get方法（方法跟之前的fbv写法完全一样）    -路由：views.Books.as_view()---这个函数执行完一定是一个内存地址---》view（闭包函数）内存函数的地址，处理了csrf，所有请求，都没有csrf校验了    -请求来了，路由匹配上--->view(request)--->self.dispatch(request, *args, **kwargs)，现在这个dispatch不是View中的dispatch，而是APIView中的dispatch    -def dispatch(self, request, *args, **kwargs):        self.args = args        self.kwargs = kwargs        #  self.initialize_request(request, *args, **kwargs)  request是当次请求的request        # request = self.initialize_request  request是一个新的Request对象        request = self.initialize_request(request, *args, **kwargs)        self.request = request        self.headers = self.default_response_headers  # deprecate?        try:            # 三大认证模块(request是新的request)            self.initial(request, *args, **kwargs)            # Get the appropriate handler method            if request.method.lower() in self.http_method_names:                handler = getattr(self, request.method.lower(),                                  self.http_method_not_allowed)            else:                handler = self.http_method_not_allowed            # 响应模块            response = handler(request, *args, **kwargs)        except Exception as exc:            # 异常模块            response = self.handle_exception(exc)        # 渲染模块        self.response = self.finalize_response(request, response, *args, **kwargs)        return self.response
```



# 今日内容

## 1 序列化组件介绍

```python
1. 序列化,序列化器会把模型对象转换成字典,经过response以后变成json字符串2. 反序列化,把客户端发送过来的数据,经过request以后变成字典,序列化器可以把字典转成模型3. 反序列化,完成数据校验功能
```

## 2 简单使用

```python
1 写一个序列化的类，继承Serializer2 在类中写要序列化的字段，想序列化哪个字段，就在类中写哪个字段3 在视图类中使用，导入--》实例化得到序列化类的对象，把要序列化的对象传入4 序列化类的对象.data   是一个字典5 把字典返回，如果不使用rest_framework提供的Response,就得使用JsonResponse
```

```python
# ser.pyclass BookSerializer(serializers.Serializer):    # id=serializers.CharField()    name=serializers.CharField()    # price=serializers.DecimalField()    price=serializers.CharField()    author=serializers.CharField()      publish=serializers.CharField()    # views.pyclass BookView(APIView):    def get(self,request,pk):        book=Book.objects.filter(id=pk).first()        #用一个类，毫无疑问，一定要实例化        #要序列化谁，就把谁传过来        book_ser=BookSerializer(book)  # 调用类的__init__        # book_ser.data   序列化对象.data就是序列化后的字典        return Response(book_ser.data)    # urls.pyre_path('books/(?P<pk>\d+)', views.BookView.as_view()),
```



## 3 序列化类的字段类型

```python
有很多，不需要都记住只需要记住：CharField，IntegerField，DateField。。。
```

## 4 序列化字段选项



## 5 序列化组件修改数据

```python
1 写一个序列化的类，继承Serializer2 在类中写要反序列化的字段，想反序列化哪个字段，就在类中写哪个字段，字段的属性（max_lenth......）	max_length	最大长度    min_lenght	最小长度    allow_blank	是否允许为空    trim_whitespace	是否截断空白字符    max_value	最小值    min_value	最大值3 在视图类中使用，导入--》实例化得到序列化类的对象，把要要修改的对象传入，修改的数据传入	boo_ser=BookSerializer(book,request.data)    boo_ser=BookSerializer(instance=book,data=request.data)4 数据校验 if boo_ser.is_valid()5 如果校验通过，就保存	boo_ser.save()  # 注意不是book.save()6 如果不通过，逻辑自己写7 如果字段的校验规则不够，可以写钩子函数（局部和全局）		# 局部钩子	    def validate_price(self, data):   # validate_字段名  接收一个参数            #如果价格小于10，就校验不通过            # print(type(data))            # print(data)            if float(data)>10:                return data            else:                #校验失败，抛异常                raise ValidationError('价格太低')         # 全局钩子        	def validate(self, validate_data):   # 全局钩子                print(validate_data)                author=validate_data.get('author')                publish=validate_data.get('publish')                if author == publish:                    raise ValidationError('作者名字跟出版社一样')                else:                    return validate_data8 可以使用字段的author=serializers.CharField(validators=[check_author]) ，来校验	-写一个函数    	def check_author(data):            if data.startswith('sb'):                raise ValidationError('作者名字不能以sb开头')            else:                return data     -配置：validators=[check_author]
```

```python
# models.pyclass Book(models.Model):    id=models.AutoField(primary_key=True)    name=models.CharField(max_length=32)    price=models.DecimalField(max_digits=5,decimal_places=2)    author=models.CharField(max_length=32)    publish=models.CharField(max_length=32)# ser.py# from rest_framework.serializers import Serializer  # 就是一个类from rest_framework import serializersfrom rest_framework.exceptions import ValidationError# 需要继承 Serializerdef check_author(data):    if data.startswith('sb'):        raise ValidationError('作者名字不能以sb开头')    else:        return dataclass BookSerializer(serializers.Serializer):    # id=serializers.CharField()    name=serializers.CharField(max_length=16,min_length=4)    # price=serializers.DecimalField()    price=serializers.CharField()    author=serializers.CharField(validators=[check_author])  # validators=[] 列表中写函数内存地址    publish=serializers.CharField()    def validate_price(self, data):   # validate_字段名  接收一个参数        #如果价格小于10，就校验不通过        # print(type(data))        # print(data)        if float(data)>10:            return data        else:            #校验失败，抛异常            raise ValidationError('价格太低')    def validate(self, validate_data):   # 全局钩子        print(validate_data)        author=validate_data.get('author')        publish=validate_data.get('publish')        if author == publish:            raise ValidationError('作者名字跟出版社一样')        else:            return validate_data    def update(self, instance, validated_data):        #instance是book这个对象        #validated_data是校验后的数据        instance.name=validated_data.get('name')        instance.price=validated_data.get('price')        instance.author=validated_data.get('author')        instance.publish=validated_data.get('publish')        instance.save()  #book.save()   django 的orm提供的        return instance     #views.pyclass BookView(APIView):    def get(self,request,pk):        book=Book.objects.filter(id=pk).first()        #用一个类，毫无疑问，一定要实例化        #要序列化谁，就把谁传过来        book_ser=BookSerializer(book)  # 调用类的__init__        # book_ser.data   序列化对象.data就是序列化后的字典        return Response(book_ser.data)        # return JsonResponse(book_ser.data)    def put(self,request,pk):        response_msg={'status':100,'msg':'成功'}        # 找到这个对象        book = Book.objects.filter(id=pk).first()        # 得到一个序列化类的对象        # boo_ser=BookSerializer(book,request.data)        boo_ser=BookSerializer(instance=book,data=request.data)        # 要数据验证（回想form表单的验证）        if boo_ser.is_valid():  # 返回True表示验证通过            boo_ser.save()  # 报错            response_msg['data']=boo_ser.data        else:            response_msg['status']=101            response_msg['msg']='数据校验失败'            response_msg['data']=boo_ser.errors        return Response(response_msg)# urls.pyre_path('books/(?P<pk>\d+)', views.BookView.as_view()),
```



## 6 read_only和write_only

```python
read_only	表明该字段仅用于序列化输出，默认False,如果设置成True，postman中可以看到该字段，修改时，不需要传该字段write_only	表明该字段仅用于反序列化输入，默认False，如果设置成True，postman中看不到该字段，修改时，该字段需要传# 以下的了解required	表明该字段在反序列化时必须输入，默认Truedefault	反序列化时使用的默认值allow_null	表明该字段是否允许传入None，默认Falsevalidators	该字段使用的验证器error_messages	包含错误编号与错误信息的字典
```



## 7查询所有

```python
# views.pyclass BooksView(APIView):    def get(self,request):        response_msg = {'status': 100, 'msg': '成功'}        books=Book.objects.all()        book_ser=BookSerializer(books,many=True)  #序列化多条,如果序列化一条，不需要写        response_msg['data']=book_ser.data        return Response(response_msg)    #urls.pypath('books/', views.BooksView.as_view()),
```

## 8 新增数据

```python
# views.pyclass BooksView(APIView):    # 新增    def post(self,request):        response_msg = {'status': 100, 'msg': '成功'}        #修改才有instance，新增没有instance，只有data        book_ser = BookSerializer(data=request.data)        # book_ser = BookSerializer(request.data)  # 这个按位置传request.data会给instance，就报错了        # 校验字段        if book_ser.is_valid():            book_ser.save()            response_msg['data']=book_ser.data        else:            response_msg['status']=102            response_msg['msg']='数据校验失败'            response_msg['data']=book_ser.errors        return Response(response_msg)#ser.py 序列化类重写create方法    def create(self, validated_data):        instance=Book.objects.create(**validated_data)        return instance# urls.pypath('books/', views.BooksView.as_view()),
```



## 9 删除一个数据

```python
# views.pyclass BookView(APIView):    def delete(self,request,pk):        ret=Book.objects.filter(pk=pk).delete()        return Response({'status':100,'msg':'删除成功'})# urls.pyre_path('books/(?P<pk>\d+)', views.BookView.as_view()),
```



## 10 模型类序列化器

```python
class BookModelSerializer(serializers.ModelSerializer):    class Meta:        model=Book  # 对应上models.py中的模型        fields='__all__'        # fields=('name','price','id','author') # 只序列化指定的字段        # exclude=('name',) #跟fields不能都写，写谁，就表示排除谁        # read_only_fields=('price',)        # write_only_fields=('id',) #弃用了，使用extra_kwargs        extra_kwargs = {  # 类似于这种形式name=serializers.CharField(max_length=16,min_length=4)            'price': {'write_only': True},        }        # 其他使用一模一样#不需要重写create和updata方法了
```



## 11 源码分析

### many=True的实际用途

```python
# 序列化多条，需要传many=True# book_ser=BookModelSerializer(books,many=True)book_one_ser=BookModelSerializer(book)print(type(book_ser))#<class 'rest_framework.serializers.ListSerializer'>print(type(book_one_ser))#<class 'app01.ser.BookModelSerializer'># 对象的生成--》先调用类的__new__方法，生成空对象# 对象=类名(name=lqz)，触发类的__init__()# 类的__new__方法控制对象的生成def __new__(cls, *args, **kwargs):    if kwargs.pop('many', False):        return cls.many_init(*args, **kwargs)    # 没有传many=True,走下面，正常的对象实例化    return super().__new__(cls, *args, **kwargs)
```

### Serializer高级用法

```python
# source的使用	1 可以改字段名字  xxx=serializers.CharField(source='title')    2 可以.跨表publish=serializers.CharField(source='publish.email')    3 可以执行方法pub_date=serializers.CharField(source='test') test是Book表模型中的方法    # SerializerMethodField(）的使用	1 它需要有个配套方法，方法名叫get_字段名，返回值就是要显示的东西    authors=serializers.SerializerMethodField() #它需要有个配套方法，方法名叫get_字段名，返回值就是要显示的东西    def get_authors(self,instance):        # book对象        authors=instance.authors.all()  # 取出所有作者        ll=[]        for author in authors:            ll.append({'name':author.name,'age':author.age})        return ll
```





















# 补充

## 1 如果有这个错（把rest_framework在app中注册一下）

![1594086609193](C:\Users\oldboy\AppData\Roaming\Typora\typora-user-images\1594086609193.png)

## 2补充自己封装Respons对象

```python
class MyResponse():    def __init__(self):        self.status=100        self.msg='成功'    @property    def get_dict(self):        return self.__dict__if __name__ == '__main__':    res=MyResponse()    res.status=101    res.msg='查询失败'    # res.data={'name':'lqz'}    print(res.get_dict)
```

## 3 你在实际开发中碰到的问题及如何解决的

```python
write_only_fields 不能使用了，使用extra_kwargs解决了extra_kwargs = {            'id': {'write_only': True},        }
```



# 作业：

## 1 图书的5个接口写完（使用序列化组件）

## 2 尝试修改一下返回的字段名字

# 昨日回顾

```python
#1 Serializer类，需要序列化什么，必须写一个类继承，想序列化什么字段，就在里面写字段，source的作用（很多字段类）#2 序列化queryset（列表）对象和真正的对象，many=True的作用，instance=要序列化的对象，#3 反序列化 instance=要序列化的对象,data=request.data#4 字段验证，序列化类中，给字段加属性，局部和全局钩子函数，字段属性的validators=[check_author]#5 当在视图中调用 序列化对象.is_valid()   boo_ser.is_valid(raise_exception=True) 只要验证不通过，直接抛异常#6 修改保存---》调用序列化对象.save(),重写Serializer类的update方法	    def update(self, instance, validated_data):            #instance是book这个对象            #validated_data是校验后的数据            instance.name=validated_data.get('name')            instance.price=validated_data.get('price')            instance.author=validated_data.get('author')            instance.publish=validated_data.get('publish')            instance.save()  #book.save()   django 的orm提供的            return instance#7 序列化得到字典，序列化对象.data  #8 自己定义了一个Response对象	class MyResponse():        def __init__(self):            self.status=100            self.msg='成功'        @property        def get_dict(self):            return self.__dict__        #9 反序列化的新增 序列化类(data=request.data),如果只传了data，当调用  序列化对象.save()，会触发序列化类的create方法执行，当传了instance和data时，调用 序列化对象.save()，会触发序列化类的update方法执行#10 重写create方法（可以很复杂）	    def create(self, validated_data):            instance=Book.objects.create(**validated_data)            return instance#11 ModelSerializer 跟Model做了一个对应	class BookModelSerializer(serializers.ModelSerializer):        def validate_price（self, data）:            pass        publish=serializers.CharField(source='publish.name')        class Meta:            model=Book  # 对应上models.py中的模型            fields='__all__'            # fields=('name','price','id','author','publish') # 只序列化指定的字段            # exclude=('name',) #跟fields不能都写，写谁，就表示排除谁            # read_only_fields=('price',)            # write_only_fields=('id',) #弃用了，使用extra_kwargs            extra_kwargs = {  # 类似于这种形式name=serializers.CharField(max_length=16,min_length=4)                'price': {'write_only': True,max_length:16,min_length:4},                            }            #12 如果在ModelSerializer中写一个局部钩子或者全局钩子，如何写？	-跟之前一模一样#13 many=True 能够序列化多条的原因---》__new__是在__init__之前执行的，造出一个空对象#14 接口：统一子类的行为
```



# 今日内容

## 1 请求和响应

### 1.1 请求

```python
# 请求对象# from rest_framework.request import Request    def __init__(self, request, parsers=None, authenticators=None,                 negotiator=None, parser_context=None):        # 二次封装request，将原生request作为drf request对象的 _request 属性        self._request = request    def __getattr__（self，item）：    	return getattr(self._request,item)# 请求对象.data:前端以三种编码方式传入的数据，都可以取出来# 请求对象..query_params 与Django标准的request.GET相同，只是更换了更正确的名称而已。        
```

### 1.2 响应

```python
#from rest_framework.response import Response def __init__(self, data=None, status=None,                 template_name=None, headers=None,                 exception=False, content_type=None):        #data：你要返回的数据，字典#status：返回的状态码，默认是200，	-from rest_framework import status在这个路径下，它把所有使用到的状态码都定义成了常量#template_name 渲染的模板名字（自定制模板），不需要了解#headers:响应头，可以往响应头放东西，就是一个字典#content_type：响应的编码格式，application/json和text/html;# 浏览器响应成浏览器的格式，postman响应成json格式，通过配置实现的（默认配置）#不管是postman还是浏览器，都返回json格式数据# drf有默认的配置文件---》先从项目的setting中找，找不到，采用默认的# drf的配置信息，先从自己类中找--》项目的setting中找---》默认的找	-局部使用:对某个视图类有效        -在视图类中写如下        from rest_framework.renderers import JSONRenderer        renderer_classes=[JSONRenderer,]    -全局使用：全局的视图类，所有请求，都有效    	-在setting.py中加入如下        REST_FRAMEWORK = {            'DEFAULT_RENDERER_CLASSES': (  # 默认响应渲染类                'rest_framework.renderers.JSONRenderer',  # json渲染器                'rest_framework.renderers.BrowsableAPIRenderer',  # 浏览API渲染器            )        }
```



## 2 视图

```python
# 两个视图基类APIViewGenericAPIView
```

### 2.1 基于APIView写接口

```python
#### views.pyfrom rest_framework.generics import GenericAPIViewfrom app01.models import Bookfrom app01.ser import BookSerializer# 基于APIView写的class BookView(APIView):    def get(self,request):        book_list=Book.objects.all()        book_ser=BookSerializer(book_list,many=True)        return Response(book_ser.data)    def post(self,request):        book_ser = BookSerializer(data=request.data)        if book_ser.is_valid():            book_ser.save()            return Response(book_ser.data)        else:            return Response({'status':101,'msg':'校验失败'})class BookDetailView(APIView):    def get(self, request,pk):        book = Book.objects.all().filter(pk=pk).first()        book_ser = BookSerializer(book)        return Response(book_ser.data)    def put(self, request,pk):        book = Book.objects.all().filter(pk=pk).first()        book_ser = BookSerializer(instance=book,data=request.data)        if book_ser.is_valid():            book_ser.save()            return Response(book_ser.data)        else:            return Response({'status': 101, 'msg': '校验失败'})    def delete(self,request,pk):        ret=Book.objects.filter(pk=pk).delete()        return Response({'status': 100, 'msg': '删除成功'})    #models.pyclass Book(models.Model):    name=models.CharField(max_length=32)    price=models.DecimalField(max_digits=5,decimal_places=2)    publish=models.CharField(max_length=32)#ser.pyclass BookSerializer(serializers.ModelSerializer):    class Meta:        model=Book        fields='__all__'# urls.pypath('books/', views.BookView.as_view()),re_path('books/(?P<pk>\d+)', views.BookDetailView.as_view()),
```

### 2.2  基于GenericAPIView写的接口

```python
# views.pyclass Book2View(GenericAPIView):    #queryset要传queryset对象，查询了所有的图书    # serializer_class使用哪个序列化类来序列化这堆数据    queryset=Book.objects    # queryset=Book.objects.all()    serializer_class = BookSerializer    def get(self,request):        book_list=self.get_queryset()        book_ser=self.get_serializer(book_list,many=True)        return Response(book_ser.data)    def post(self,request):        book_ser = self.get_serializer(data=request.data)        if book_ser.is_valid():            book_ser.save()            return Response(book_ser.data)        else:            return Response({'status':101,'msg':'校验失败'})class Book2DetailView(GenericAPIView):    queryset = Book.objects    serializer_class = BookSerializer    def get(self, request,pk):        book = self.get_object()        book_ser = self.get_serializer(book)        return Response(book_ser.data)    def put(self, request,pk):        book = self.get_object()        book_ser = self.get_serializer(instance=book,data=request.data)        if book_ser.is_valid():            book_ser.save()            return Response(book_ser.data)        else:            return Response({'status': 101, 'msg': '校验失败'})    def delete(self,request,pk):        ret=self.get_object().delete()        return Response({'status': 100, 'msg': '删除成功'})     #url.py    # 使用GenericAPIView重写的    path('books2/', views.Book2View.as_view()),    re_path('books2/(?P<pk>\d+)', views.Book2DetailView.as_view()),
```

### 2.3 基于GenericAPIView和5个视图扩展类写的接口

```python
from rest_framework.mixins import  ListModelMixin,CreateModelMixin,UpdateModelMixin,DestroyModelMixin,RetrieveModelMixin# views.pyclass Book3View(GenericAPIView,ListModelMixin,CreateModelMixin):    queryset=Book.objects    serializer_class = BookSerializer    def get(self,request):        return self.list(request)    def post(self,request):        return self.create(request)class Book3DetailView(GenericAPIView,RetrieveModelMixin,DestroyModelMixin,UpdateModelMixin):    queryset = Book.objects    serializer_class = BookSerializer    def get(self, request,pk):        return self.retrieve(request,pk)    def put(self, request,pk):        return self.update(request,pk)    def delete(self,request,pk):        return self.destroy(request,pk)# urls.py    # 使用GenericAPIView+5 个视图扩展类  重写的    path('books3/', views.Book3View.as_view()),    re_path('books3/(?P<pk>\d+)', views.Book3DetailView.as_view()),
```

### 3.4 使用ModelViewSet编写5个接口

```python
# views.pyfrom rest_framework.viewsets import ModelViewSetclass Book5View(ModelViewSet):  #5个接口都有，但是路由有点问题    queryset = Book.objects    serializer_class = BookSerializer    # urls.py# 使用ModelViewSet编写5个接口    path('books5/', views.Book5View.as_view(actions={'get':'list','post':'create'})), #当路径匹配，又是get请求，会执行Book5View的list方法    re_path('books5/(?P<pk>\d+)', views.Book5View.as_view(actions={'get':'retrieve','put':'update','delete':'destroy'})),
```

### 3.5 源码分析ViewSetMixin

```python
# 重写了as_view# 核心代码（所以路由中只要配置了对应关系，比如{'get':'list'}）,当get请求来，就会执行list方法for method, action in actions.items():    #method：get    # action：list    handler = getattr(self, action)    #执行完上一句，handler就变成了list的内存地址    setattr(self, method, handler)    #执行完上一句  对象.get=list    #for循环执行完毕 对象.get:对着list   对象.post：对着create
```

### 3.6 继承ViewSetMixin的视图类

```python
# views.py
from rest_framework.viewsets import ViewSetMixin
class Book6View(ViewSetMixin,APIView): #一定要放在APIVIew前
    def get_all_book(self,request):
        print("xxxx")
        book_list = Book.objects.all()
        book_ser = BookSerializer(book_list, many=True)
        return Response(book_ser.data)
    
# urls.py
    #继承ViewSetMixin的视图类，路由可以改写成这样
    path('books6/', views.Book6View.as_view(actions={'get': 'get_all_book'})),

```









# 补充

### 1 在pycharm中查看类的继承关系



![1594180914084](/Users/mac/Desktop/DRF课件/day82/代码笔记/assets/1594180914084.png)

# 作业

## 1 自己封装一个CommonResponse对象，使用方法如下

```python
        return CoomonResponse('100','成功',boo_ser.data)
        return CoomonResponse('101','验证失败',boo_ser.errors)
```

# 2 什么是正向代理，什么是反向代理

## 3 大家都写：分别用APIView，GenericAPIView，5个视图扩展类，GenericAPIView和5个视图扩展类写的接口和ModelViewSet写5个接口

## 4 今天讲的所有视图类的继承关系，写出来

# 昨日回顾

```python
# 1 请求和响应# 2 请求 Request对象，drf新包装的，Request.data，Request.query_params, 重写了__getattr__,  request._request# 3 json模块是否执行反序列化bytes格式# 4 考你：视图类的方法中：self.request，就是当次请求的request# 5 Response：类，实例化传一堆参，data=字典，status=状态码（有一堆常量），headers=响应头（字典），content_type=响应的编码方式# 6 全局和局部配置，响应格式# 7 drf默认配置文件，查找顺序--》先从类中属性找---》项目的setting找---》drf默认的配置找# 8 视图家族	-APIView---》继承自View    -GenicAPIView---》APIView，做了一些扩展：    	-queryset = None    	-serializer_class = None        -get_queryset()  经常用        -get_serializer() 经常用        -get_serializer_class() 内部来用，外部会重写        -get_object()  经常用，获取一条数据（pk传过来）        	-源码解析            queryset = self.filter_queryset(self.get_queryset()) #返回所有数据queryset对象            # lookup_url_kwarg就是pk，路由中有名分组分出来的pk            lookup_url_kwarg = self.lookup_url_kwarg or self.lookup_field            # {pk:4}  4 浏览器地址中要查询的id号http://127.0.0.1:8000/books6/4/            filter_kwargs = {self.lookup_field: self.kwargs[lookup_url_kwarg]}            # 根据pk=4去queryset中get单个对象            obj = get_object_or_404(queryset, **filter_kwargs)            self.check_object_permissions(self.request, obj)            return obj   -5 个视图扩展类（继承了object），每个里面写了一个方法（ListModelMixin：list方法）		        ListModelMixin,        CreateModelMixin,        UpdateModelMixin,        DestroyModelMixin,        RetrieveModelMixin   -GenericAPIView的视图子类，9个，继承了GenicAPIView+一个或者两个或者三个视图扩展类        CreateAPIView,        ListAPIView,        UpdateAPIView,        RetrieveAPIView,        DestroyAPIView,        ListCreateAPIView,        RetrieveUpdateDestroyAPIView,        RetrieveDestroyAPIView,        RetrieveUpdateAPIView  -视图集：ModelViewSet,ReadOnlyModelViewSet：继承了上面一堆（5个视图扩展和GenicAPIView）+自己写了一个ViewSetMixin（as_view方法），只要继承它的，路由得写成{‘get’：‘自己定义的方法’}	-ViewSet=ViewSetMixin, views.APIView ：ViewSetMixin要放在前面    -GenericViewSet=ViewSetMixin+GenicAPIView        -ViewSetMixin（as_view方法）    -ViewSetMixin+APIView=ViewSet    -ViewSetMixin+GenicAPIView=GenericViewSet
```



# 今日内容

## 1 路由

```python
# 1 在urls.py中配置    path('books4/', views.Book4View.as_view()),    re_path('books4/(?P<pk>\d+)', views.Book4DetailView.as_view()),# 2 一旦视图类，继承了ViewSetMixin，路由	 path('books5/', views.Book5View.as_view(actions={'get':'list','post':'create'})), #当路径匹配，又是get请求，会执行Book5View的list方法    re_path('books5/(?P<pk>\d+)', views.Book5View.as_view(actions={'get':'retrieve','put':'update','delete':'destroy'})), # 3 继承自视图类，ModelViewSet的路由写法（自动生成路由）	-urls.py        # 第一步：导入routers模块        from rest_framework import routers        # 第二步：有两个类,实例化得到对象        # routers.DefaultRouter 生成的路由更多        # routers.SimpleRouter        router=routers.DefaultRouter()        # 第三步：注册        # router.register('前缀','继承自ModelViewSet视图类','别名')        router.register('books',views.BookViewSet) # 不要加斜杠了        # 第四步        # router.urls # 自动生成的路由,加入到原路由中        # print(router.urls)        # urlpatterns+=router.urls        '''	-views.py		from rest_framework.viewsets import ModelViewSet        from app01.models import Book        from app01.ser import BookSerializer        class BookViewSet(ModelViewSet):            queryset =Book.objects            serializer_class = BookSerializer
```

### 1.1 action的使用

```python
# action干什么用？为了给继承自ModelViewSet的视图类中定义的函数也添加路由# 使用class BookViewSet(ModelViewSet):    queryset =Book.objects.all()    serializer_class = BookSerializer    # methods第一个参数，传一个列表，列表中放请求方式，    # ^books/get_1/$ [name='book-get-1'] 当向这个地址发送get请求，会执行下面的函数    # detail：布尔类型 如果是True    #^books/(?P<pk>[^/.]+)/get_1/$ [name='book-get-1']    @action(methods=['GET','POST'],detail=True)    def get_1(self,request,pk):        print(pk)        book=self.get_queryset()[:2]  # 从0开始截取一条        ser=self.get_serializer(book,many=True)        return Response(ser.data)    # 装饰器，放在被装饰的函数上方，method：请求方式，detail：是否带pk
```



## 2 认证

### 2.1 认证的写法

```python
# 认证的实现	1 写一个类，继承BaseAuthentication，重写authenticate，认证的逻辑写在里面，认证通过，返回两个值，一个值最终给了Requet对象的user，认证失败，抛异常：APIException或者AuthenticationFailed    2 全局使用，局部使用
```

### 2.2  认证的源码分析

```python
#1 APIVIew----》dispatch方法---》self.initial(request, *args, **kwargs)---->有认证，权限，频率
#2 只读认证源码： self.perform_authentication(request)
#3 self.perform_authentication(request)就一句话：request.user，需要去drf的Request对象中找user属性（方法） 
#4 Request类中的user方法，刚开始来，没有_user,走 self._authenticate()

#5 核心，就是Request类的 _authenticate(self):
    def _authenticate(self):
        # 遍历拿到一个个认证器，进行认证
        # self.authenticators配置的一堆认证类产生的认证类对象组成的 list
        #self.authenticators 你在视图类中配置的一个个的认证类：authentication_classes=[认证类1，认证类2]，对象的列表
        for authenticator in self.authenticators:
            try:
                # 认证器(对象)调用认证方法authenticate(认证类对象self, request请求对象)
                # 返回值：登陆的用户与认证的信息组成的 tuple
                # 该方法被try包裹，代表该方法会抛异常，抛异常就代表认证失败
                user_auth_tuple = authenticator.authenticate(self) #注意这self是request对象
            except exceptions.APIException:
                self._not_authenticated()
                raise

            # 返回值的处理
            if user_auth_tuple is not None:
                self._authenticator = authenticator
                # 如何有返回值，就将 登陆用户 与 登陆认证 分别保存到 request.user、request.auth
                self.user, self.auth = user_auth_tuple
                return
        # 如果返回值user_auth_tuple为空，代表认证通过，但是没有 登陆用户 与 登陆认证信息，代表游客
        self._not_authenticated()
```

### 2.3 认证组件的使用

```python
# 写一个认证类 app_auth.py
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from app01.models import UserToken
class MyAuthentication(BaseAuthentication):
    def authenticate(self, request):
        # 认证逻辑，如果认证通过，返回两个值
        #如果认证失败，抛出AuthenticationFailed异常
        token=request.GET.get('token')
        if  token:
            user_token=UserToken.objects.filter(token=token).first()
            # 认证通过
            if user_token:
                return user_token.user,token
            else:
                raise AuthenticationFailed('认证失败')
        else:
            raise AuthenticationFailed('请求地址中需要携带token')

# 可以有多个认证，从左到右依次执行
# 全局使用，在setting.py中配置
REST_FRAMEWORK={
    "DEFAULT_AUTHENTICATION_CLASSES":["app01.app_auth.MyAuthentication",]
}
# 局部使用，在视图类上写
authentication_classes=[MyAuthentication]
# 局部禁用
authentication_classes=[]
```







# 作业

## 1 继承ModelViewSet，获取所有的，只获取前10条

## 2 登陆接口，查询图书接口，必须登录后才能查看，token信息放在头里（认证组件），全局使用，局部禁用（login禁用）

## 3 使用simplerouter自动生成路由

#  昨日回顾

```python
# 1 路由# 2 3种写法  	-django传统的路由（cvb路由）path('test/', views.TestView.as_view()),    -只要继承ViewSetMixin：path('books/', views.BookViewSet.as_view({'get':'list','post':'create'})),    -自动生成路由    	-SimpleRouter        -DefaultRouter        -使用：        	# 第一步：导入routers模块            from rest_framework import routers            # 第二步：有两个类,实例化得到对象            # routers.DefaultRouter 生成的路由更多            # routers.SimpleRouter            router=routers.SimpleRouter()            # 第三步：注册            # router.register('前缀','继承自ModelViewSet视图类','别名')            router.register('books',views.BookViewSet) # 不要加斜杠了            urlpatterns+=router.urls#3 action的使用：装饰器给继承了ModeViewSet的视图类中自定义的方法，自动生成路由#4 method=['get','post'],detail=True(带pk的)/False（不带pk）# 5 认证	-使用    	-定义一个类，继承BaseAuthentication，重写def authenticate(self, request)，校验成功返回两个值，一个是user对象，第二个是token        -需要注意，如果配置多个认证类，要把返回两个值的放到最后        -全局使用：setting配置            REST_FRAMEWORK={        	"DEFAULT_AUTHENTICATION_CLASSES":["app01.app_auth.MyAuthentication",],    			}        -局部使用：        authentication_classes=[MyAuthentication]        -局部禁用：authentication_classes = []
```



##  今日内容

## 1 权限

### 1.1 权限源码分析

```python
# APIView---->dispatch---->initial--->self.check_permissions(request)(APIView的对象方法)    def check_permissions(self, request):        # 遍历权限对象列表得到一个个权限对象(权限器)，进行权限认证        for permission in self.get_permissions():            # 权限类一定有一个has_permission权限方法，用来做权限认证的            # 参数：权限对象self、请求对象request、视图类对象            # 返回值：有权限返回True，无权限返回False            if not permission.has_permission(request, self):                self.permission_denied(                    request, message=getattr(permission, 'message', None)                )
```

## 1.2 权限的使用

```python
# 写一个类，继承BasePermission，重写has_permission，如果权限通过，就返回True，不通过就返回Falsefrom rest_framework.permissions import BasePermissionclass UserPermission(BasePermission):    def  has_permission(self, request, view):        # 不是超级用户，不能访问        # 由于认证已经过了，request内就有user对象了，当前登录用户        user=request.user  # 当前登录用户        # 如果该字段用了choice，通过get_字段名_display()就能取出choice后面的中文        print(user.get_user_type_display())        if user.user_type==1:            return True        else:            return False        # 局部使用class TestView(APIView):    permission_classes = [app_auth.UserPermission]# 全局使用REST_FRAMEWORK={    "DEFAULT_AUTHENTICATION_CLASSES":["app01.app_auth.MyAuthentication",],    'DEFAULT_PERMISSION_CLASSES': [        'app01.app_auth.UserPermission',    ],}# 局部禁用class TestView(APIView):    permission_classes = []
```

### 1.3 内置权限（了解）

```python
# 演示一下内置权限的使用：IsAdminUser，控制是否对网站后台有权限的人# 1 创建超级管理员# 2 写一个测试视图类from rest_framework.permissions import IsAdminUserfrom rest_framework.authentication import SessionAuthenticationclass TestView3(APIView):    authentication_classes=[SessionAuthentication,]    permission_classes = [IsAdminUser]    def get(self,request,*args,**kwargs):        return Response('这是22222222测试数据，超级管理员可以看')# 3 超级用户登录到admin，再访问test3就有权限# 4 正常的话，普通管理员，没有权限看（判断的是is_staff字段）
```



## 2 频率

### 2.1 内置的频率限制(限制未登录用户)

```python
# 全局使用  限制未登录用户1分钟访问5次REST_FRAMEWORK = {    'DEFAULT_THROTTLE_CLASSES': (        'rest_framework.throttling.AnonRateThrottle',    ),    'DEFAULT_THROTTLE_RATES': {        'anon': '3/m',    }}##############views.pyfrom rest_framework.permissions import IsAdminUserfrom rest_framework.authentication import SessionAuthentication,BasicAuthenticationclass TestView4(APIView):    authentication_classes=[]    permission_classes = []    def get(self,request,*args,**kwargs):        return Response('我是未登录用户')# 局部使用from rest_framework.permissions import IsAdminUserfrom rest_framework.authentication import SessionAuthentication,BasicAuthenticationfrom rest_framework.throttling import AnonRateThrottleclass TestView5(APIView):    authentication_classes=[]    permission_classes = []    throttle_classes = [AnonRateThrottle]    def get(self,request,*args,**kwargs):        return Response('我是未登录用户，TestView5')
```

### 2.2 内置频率限制之，限制登录用户的访问频次

```python
# 需求：未登录用户1分钟访问5次，登录用户一分钟访问10次全局：在setting中  'DEFAULT_THROTTLE_CLASSES': (        'rest_framework.throttling.AnonRateThrottle',        'rest_framework.throttling.UserRateThrottle'    ),    'DEFAULT_THROTTLE_RATES': {        'user': '10/m',        'anon': '5/m',    }         局部配置：	在视图类中配一个就行
```



## 3 过滤

```python
#1 安装：pip3 install django-filter#2 注册，在app中注册#3 全局配，或者局部配 'DEFAULT_FILTER_BACKENDS': ('django_filters.rest_framework.DjangoFilterBackend',)#4 视图类class BookView(ListAPIView):    queryset = Book.objects.all()    serializer_class = BookSerializer    filter_fields = ('name',)  #配置可以按照哪个字段来过滤
```



## 4 排序

```python
# 局部使用和全局使用# 局部使用from rest_framework.generics import ListAPIViewfrom rest_framework.filters import OrderingFilterfrom app01.models import Bookfrom app01.ser import BookSerializerclass Book2View(ListAPIView):    queryset = Book.objects.all()    serializer_class = BookSerializer    filter_backends = [OrderingFilter]    ordering_fields = ('id', 'price')    # urls.pypath('books2/', views.Book2View.as_view()),]# 使用：http://127.0.0.1:8000/books2/?ordering=-pricehttp://127.0.0.1:8000/books2/?ordering=pricehttp://127.0.0.1:8000/books2/?ordering=-id
```



## 5 异常处理

```python
#统一接口返回# 自定义异常方法，替换掉全局# 写一个方法# 自定义异常处理的方法from rest_framework.views import exception_handlerfrom rest_framework.response import Responsefrom rest_framework import statusdef my_exception_handler(exc, context):    response=exception_handler(exc, context)    # 两种情况，一个是None，drf没有处理    #response对象，django处理了，但是处理的不符合咱们的要求    # print(type(exc))    if not response:        if isinstance(exc, ZeroDivisionError):            return Response(data={'status': 777, 'msg': "除以0的错误" + str(exc)}, status=status.HTTP_400_BAD_REQUEST)        return Response(data={'status':999,'msg':str(exc)},status=status.HTTP_400_BAD_REQUEST)    else:        # return response        return Response(data={'status':888,'msg':response.data.get('detail')},status=status.HTTP_400_BAD_REQUEST)    # 全局配置setting.py'EXCEPTION_HANDLER': 'app01.app_auth.my_exception_handler',
```



## 6 封装Response对象(重要)

```python
# 以后都用自己封装的class APIResponse(Response):    def __init__(self,code=100,msg='成功',data=None,status=None,headers=None,**kwargs):        dic = {'code': code, 'msg': msg}        if  data:            dic = {'code': code, 'msg': msg,'data':data}        dic.update(kwargs)        super().__init__(data=dic, status=status,headers=headers)# 使用return APIResponse(data={"name":'lqz'},token='dsafsdfa',aa='dsafdsafasfdee')return APIResponse(data={"name":'lqz'})return APIResponse(code='101',msg='错误',data={"name":'lqz'},token='dsafsdfa',aa='dsafdsafasfdee',header={})
```





# 补充

## 1 变量后直接加逗号

```python
a=(3,)a=3,  # a是元组print(type(a))
```



# 作业

## 1 视图类继承GenericAPIView，get方法，post方法，用的序列化类不一样

## 2 图书一堆关联表的增删查改写完book表，author表，authordetail表，publish表，中间表

## 3 过滤，排序，认证，权限，频率，异常处理

# 回顾

```python
# 1 web开发模型，混合开发和前后端分离# 2 web api：接口# 3 postman的使用# 4 restful规范：10条# 5 djangorestframework，django的第三方插件（app）# 6 drf几大组件    请求（APIView源码，Requset对象）和响应（Response，自己封装Response），    序列化，    视图，    路由，    解析器（DEFAULT_PARSER_CLASSES,全局配置，局部配置）,    响应器（DEFAULT_RENDERER_CLASSES，全局配，局部配），    认证：校验是否登录（有内置，自定义，全局配置，局部配置）    权限：是否有权限访问某些接口（有内置，自定义，全局配置，局部配置）    频率：限制访问频次（有内置，自定义，全局配置，局部配置），根据用户ip，根据用户id限制    过滤：筛选，查询出符合条件的    排序：结果进行排序    异常：全局异常（自定义，全局配置）        版本控制（不讲）    分页器    文档生成    jwt认证   	Xadmin的使用    路飞项目    git    redis    短信    支付宝支付        
```



# 今日内容

## 1 books系列表接口

```python
# urls.pyfrom django.urls import path,re_pathfrom api import viewsurlpatterns = [    path('books/', views.BookAPIView.as_view()),    re_path('books/(?P<pk>\d+)', views.BookAPIView.as_view()),]
```

```python
# views.pyfrom rest_framework.response import Responsefrom api import modelsfrom  rest_framework.views import APIViewfrom rest_framework.generics import GenericAPIViewfrom api.ser import BookModelSerializerclass BookAPIView(APIView):    def get(self,request,*args,**kwargs):        #查询单个和查询所有，合到一起        # 查所有        book_list=models.Book.objects.all().filter(is_delete=False)        book_list_ser=BookModelSerializer(book_list,many=True)        return Response(data=book_list_ser.data)        #查一个    def post(self,request,*args,**kwargs):        # 具备增单条，和增多条的功能        if isinstance(request.data,dict):            book_ser=BookModelSerializer(data=request.data)            book_ser.is_valid(raise_exception=True)            book_ser.save()            return Response(data=book_ser.data)        elif isinstance(request.data,list):            #现在book_ser是ListSerializer对象            from rest_framework.serializers import ListSerializer            book_ser = BookModelSerializer(data=request.data,many=True)  #增多条            print('--------',type(book_ser))            book_ser.is_valid(raise_exception=True)            book_ser.save()            # 新增---》ListSerializer--》create方法            # def create(self, validated_data):            #   self.child是BookModelSerializer对象            #   print(type(self.child))            #     return [            #         self.child.create(attrs) for attrs in validated_data            #     ]            return Response(data=book_ser.data)    def put(self,request,*args,**kwargs):        # 改一个，改多个        #改一个个        if kwargs.get('pk',None):            book=models.Book.objects.filter(pk=kwargs.get('pk')).first()            book_ser = BookModelSerializer(instance=book,data=request.data,partial=True)  # 增多条            book_ser.is_valid(raise_exception=True)            book_ser.save()            return Response(data=book_ser.data)        else:            #改多个,            # 前端传递数据格式[{id:1,name:xx,price:xx},{id:1,name:xx,price:xx}]            # 处理传入的数据  对象列表[book1，book2]  修改的数据列表[{name:xx,price:xx},{name:xx,price:xx}]            book_list=[]            modify_data=[]            for item in request.data:                #{id:1,name:xx,price:xx}                pk=item.pop('id')                book=models.Book.objects.get(pk=pk)                book_list.append(book)                modify_data.append(item)            # 第一种方案，for循环一个一个修改            #把这个实现            # for i,si_data in enumerate(modify_data):            #     book_ser = BookModelSerializer(instance=book_list[i], data=si_data)            #     book_ser.is_valid(raise_exception=True)            #     book_ser.save()            # return Response(data='成功')            # 第二种方案，重写ListSerializer的update方法            book_ser = BookModelSerializer(instance=book_list,data=modify_data,many=True)            book_ser.is_valid(raise_exception=True)            book_ser.save()  #ListSerializer的update方法,自己写的update方法            return Response(book_ser.data)            # request.data            #            # book_ser=BookModelSerializer(data=request.data)    def delete(self,request,*args,**kwargs):        #单个删除和批量删除        pk=kwargs.get('pk')        pks=[]        if pk:            # 单条删除            pks.append(pk)        #不管单条删除还是多条删除，都用多条删除        #多条删除        # {'pks':[1,2,3]}        else:            pks=request.data.get('pks')        #把is_delete设置成true        # ret返回受影响的行数        ret=models.Book.objects.filter(pk__in=pks,is_delete=False).update(is_delete=True)        if ret:            return Response(data={'msg':'删除成功'})        else:            return Response(data={'msg': '没有要删除的数据'})
```

```python
ser.pyfrom rest_framework import serializersfrom api import models#写一个类，继ListSerializer,重写updateclass BookListSerializer(serializers.ListSerializer):    # def create(self, validated_data):    #     print(validated_data)    #     return super().create(validated_data)    def update(self, instance, validated_data):        print(instance)        print(validated_data)        # 保存数据        # self.child:是BookModelSerializer对象        # ll=[]        # for i,si_data in enumerate(validated_data):        #     ret=self.child.update(instance[i],si_data)        #     ll.append(ret)        # return ll        return [            # self.child.update(对象，字典) for attrs in validated_data            self.child.update(instance[i],attrs) for i,attrs in enumerate(validated_data)        ]#如果序列化的是数据库的表，尽量用ModelSerializerclass BookModelSerializer(serializers.ModelSerializer):    # 一种方案（只序列化可以，反序列化有问题）    # publish=serializers.CharField(source='publish.name')    # 第二种方案，models中写方法    class Meta:        list_serializer_class=BookListSerializer        model=models.Book        # fields='__all__'        # 用的少        # depth=0        fields = ('name','price','authors','publish','publish_name','author_list')        extra_kwargs={            'publish':{'write_only':True},            'publish_name':{'read_only':True},            'authors':{'write_only':True},            'author_list':{'read_only':True}        }
```

```python
# models.pyfrom django.db import modelsfrom django.contrib.auth.models import AbstractUserclass BaseModel(models.Model):    is_delete=models.BooleanField(default=False)    # auto_now_add=True 只要记录创建，不需要手动插入时间，自动把当前时间插入    create_time=models.DateTimeField(auto_now_add=True)    # auto_now=True,只要更新，就会把当前时间插入    last_update_time=models.DateTimeField(auto_now=True)    # import datetime    # create_time=models.DateTimeField(default=datetime.datetime.now)    class Meta:        # 单个字段，有索引，有唯一        # 多个字段，有联合索引，联合唯一        abstract=True  # 抽象表，不再数据库建立出表class Book(BaseModel):    id=models.AutoField(primary_key=True)    # verbose_name admin中显示中文    name=models.CharField(max_length=32,verbose_name='书名',help_text='这里填书名')    price=models.DecimalField(max_digits=5,decimal_places=2)    # 一对多的关系一旦确立，关联字段写在多的一方    #to_field 默认不写，关联到Publish主键    #db_constraint=False  逻辑上的关联，实质上没有外键练习，增删不会受外键影响，但是orm查询不影响    publish=models.ForeignKey(to='Publish',on_delete=models.DO_NOTHING,db_constraint=False)    # 多对多，跟作者，关联字段写在 查询次数多的一方    # 什么时候用自动，什么时候用手动？第三张表只有关联字段，用自动    第三张表有扩展字段，需要手动写    # 不能写on_delete    authors=models.ManyToManyField(to='Author',db_constraint=False)    class Meta:        verbose_name_plural='书表'  # admin中表名的显示    def __str__(self):        return self.name    @property    def publish_name(self):        return self.publish.name    # def author_list(self):    def author_list(self):        author_list=self.authors.all()        # ll=[]        # for author in author_list:        #     ll.append({'name':author.name,'sex':author.get_sex_display()})        # return ll        return [ {'name':author.name,'sex':author.get_sex_display()}for author in author_list]class Publish(BaseModel):    name = models.CharField(max_length=32)    addr=models.CharField(max_length=32)    def __str__(self):        return self.nameclass Author(BaseModel):    name=models.CharField(max_length=32)    sex=models.IntegerField(choices=((1,'男'),(2,'女')))    # 一对一关系，写在查询频率高的一方    #OneToOneField本质就是ForeignKey+unique，自己手写也可以    authordetail=models.OneToOneField(to='AuthorDetail',db_constraint=False,on_delete=models.CASCADE)class AuthorDetail(BaseModel):    mobile=models.CharField(max_length=11)# 二、表断关联# 1、表之间没有外键关联，但是有外键逻辑关联(有充当外键的字段)# 2、断关联后不会影响数据库查询效率，但是会极大提高数据库增删改效率（不影响增删改查操作）# 3、断关联一定要通过逻辑保证表之间数据的安全，不要出现脏数据，代码控制# 4、断关联# 5、级联关系#       作者没了，详情也没：on_delete=models.CASCADE#       出版社没了，书还是那个出版社出版：on_delete=models.DO_NOTHING#       部门没了，员工没有部门(空不能)：null=True, on_delete=models.SET_NULL#       部门没了，员工进入默认部门(默认值)：default=0, on_delete=models.SET_DEFAULT
```



## 2 分页器

```python
#views.py

# 查所有，才需要分页
from rest_framework.generics import ListAPIView
# 内置三种分页方式
from  rest_framework.pagination import PageNumberPagination,LimitOffsetPagination,CursorPagination
'''
PageNumberPagination
    page_size:每页显示的条数
'''
class MyPageNumberPagination(PageNumberPagination):
    #http://127.0.0.1:8000/api/books2/?aaa=1&size=6
    page_size=3  #每页条数
    page_query_param='aaa' #查询第几页的key
    page_size_query_param='size' # 每一页显示的条数
    max_page_size=5    # 每页最大显示条数


# class MyLimitOffsetPagination(LimitOffsetPagination):
#     default_limit = 3   # 每页条数
#     limit_query_param = 'limit' # 往后拿几条
#     offset_query_param = 'offset' # 标杆
#     max_limit = 5   # 每页最大几条

class MyCursorPagination(CursorPagination):
    cursor_query_param = 'cursor'  # 每一页查询的key
    page_size = 2   #每页显示的条数
    ordering = '-id'  #排序字段
# class BookView(ListAPIView):
#     # queryset = models.Book.objects.all().filter(is_delete=False)
#     queryset = models.Book.objects.all()
#     serializer_class = BookModelSerializer
#     #配置分页
#     pagination_class = MyCursorPagination

# 如果使用APIView分页
from utils.throttling import MyThrottle
class BookView(APIView):
    # throttle_classes = [MyThrottle,]
    def get(self,request,*args,**kwargs):
        book_list=models.Book.objects.all()
        # 实例化得到一个分页器对象
        page_cursor=MyPageNumberPagination()

        book_list=page_cursor.paginate_queryset(book_list,request,view=self)
        next_url =page_cursor.get_next_link()
        pr_url=page_cursor.get_previous_link()
        # print(next_url)
        # print(pr_url)
        book_ser=BookModelSerializer(book_list,many=True)
        return Response(data=book_ser.data)

    
  

#settings.py
REST_FRAMEWORK={
    'PAGE_SIZE': 2,
}
```



## 2 根据ip进行频率限制

```python
# 写一个类，继承SimpleRateThrottle，只需要重写get_cache_key 
from rest_framework.throttling import ScopedRateThrottle,SimpleRateThrottle

#继承SimpleRateThrottle
class MyThrottle(SimpleRateThrottle):
    scope='luffy'
    def get_cache_key(self, request, view):
        print(request.META.get('REMOTE_ADDR'))
        return request.META.get('REMOTE_ADDR')   # 返回
    
# 局部使用，全局使用 
REST_FRAMEWORK={
    'DEFAULT_THROTTLE_CLASSES': (
        'utils.throttling.MyThrottle',
    ),
    'DEFAULT_THROTTLE_RATES': {
        'luffy': '3/m'  # key要跟类中的scop对应
    },
}

# python3 manage.py runserver 0.0.0.0:8000   你们局域网就可以相互访问


# 内网穿透
```





# 作业

## 1 一个表可不可以有多个自增字段

## 2 用GenericAPIView重写book的单增，群增，。。。。







# 昨日回顾

```python
#1  book 其实是5个表（自动生成了一个），	-一对一关系，其实是Forainkey，unique    -on_delete：级联删除，设置为空，什么都不干，设置成默认值    -字段建索引，字段唯一    -联合索引，联合唯一    -日期类型 auto_now  和 auto_now_add      -基表  abstract#2 book 		-单条查询，多条查询    -单条增，多条增（生成序列化对象，many=True）    -单条修改，多条修改（BookListSerializer：重写了update方法）    -单删，群删（is_delete），统一用群删  pk__in=[1,2,3]# 3 频率	-自定义频率（ip，user_id）    -继承SimpleRateThrottle    -重写get_cache_key，返回什么就以什么为key进行限制    -scope字段，需要与setting中对应    #4 分页	-PageNumberPagination,基本分页    	-每页显示大小        -get请求路径中查询的key        -get请求路径中每页显示条数        -每页最大显示多少条    -LimitOffsetPagination,    	#     default_limit = 3   # 每页条数        #     limit_query_param = 'limit' # 往后拿几条        #     offset_query_param = 'offset' # 标杆        #     max_limit = 5   # 每页最大几条    -CursorPagination        cursor_query_param = 'cursor'  # 每一页查询的key        page_size = 2   #每页显示的条数        ordering = '-id'  #排序字段-
```



# 今日内容

## 1 自定制频率

```python
# 自定制频率类，需要写两个方法
	-# 判断是否限次：没有限次可以请求True，限次了不可以请求False
    	def allow_request(self, request, view):
    -# 限次后调用，显示还需等待多长时间才能再访问，返回等待的时间seconds
    	def wait(self):
            
# 代码
import time
class IPThrottle():
    #定义成类属性,所有对象用的都是这个
    VISIT_DIC = {}
    def __init__(self):
        self.history_list=[]
    def allow_request(self, request, view):
        '''
        #（1）取出访问者ip
        #（2）判断当前ip不在访问字典里，添加进去，并且直接返回True,表示第一次访问，在字典里，继续往下走
        #（3）循环判断当前ip的列表，有值，并且当前时间减去列表的最后一个时间大于60s，把这种数据pop掉，这样列表中只有60s以内的访问时间，
        #（4）判断，当列表小于3，说明一分钟以内访问不足三次，把当前时间插入到列表第一个位置，返回True，顺利通过
        #（5）当大于等于3，说明一分钟内访问超过三次，返回False验证失败
        '''

        ip=request.META.get('REMOTE_ADDR')
        ctime=time.time()
        if ip not in self.VISIT_DIC:
            self.VISIT_DIC[ip]=[ctime,]
            return True
        self.history_list=self.VISIT_DIC[ip]   #当前访问者时间列表拿出来
        while True:
            if ctime-self.history_list[-1]>60:
                self.history_list.pop() # 把最后一个移除
            else:
                break
        if len(self.history_list)<3:
            self.history_list.insert(0,ctime)
            return True
        else:
            return False

    def wait(self):
        # 当前时间，减去列表中最后一个时间
        ctime=time.time()

        return 60-(ctime-self.history_list[-1])

#全局使用，局部使用

```

```python
# SimpleRateThrottle源码分析
    def get_rate(self):
        """
        Determine the string representation of the allowed request rate.
        """
        if not getattr(self, 'scope', None):
            msg = ("You must set either `.scope` or `.rate` for '%s' throttle" %
                   self.__class__.__name__)
            raise ImproperlyConfigured(msg)

        try:
            return self.THROTTLE_RATES[self.scope]  # scope：'user' => '3/min'
        except KeyError:
            msg = "No default throttle rate set for '%s' scope" % self.scope
            raise ImproperlyConfigured(msg)
    def parse_rate(self, rate):
        """
        Given the request rate string, return a two tuple of:
        <allowed number of requests>, <period of time in seconds>
        """
        if rate is None:
            return (None, None)
        #3  mmmmm
        num, period = rate.split('/')  # rate：'3/min'
        num_requests = int(num)
        duration = {'s': 1, 'm': 60, 'h': 3600, 'd': 86400}[period[0]]
        return (num_requests, duration)
    def allow_request(self, request, view):
        if self.rate is None:
            return True
        #当前登录用户的ip地址
        self.key = self.get_cache_key(request, view)  # key：'throttle_user_1'
        if self.key is None:
            return True

        # 初次访问缓存为空，self.history为[]，是存放时间的列表
        self.history = self.cache.get(self.key, [])
        # 获取一下当前时间，存放到 self.now
        self.now = self.timer()

        # Drop any requests from the history which have now passed the
        # throttle duration

        # 当前访问与第一次访问时间间隔如果大于60s，第一次记录清除，不再算作一次计数
        # 10 20 30 40
        # self.history:[10:23,10:55]
        # now:10:56
        while self.history and  self.now - self.history[-1] >= self.duration:
            self.history.pop()

        # history的长度与限制次数3进行比较
        # history 长度第一次访问0，第二次访问1，第三次访问2，第四次访问3失败
        if len(self.history) >= self.num_requests:
            # 直接返回False，代表频率限制了
            return self.throttle_failure()

        # history的长度未达到限制次数3，代表可以访问
        # 将当前时间插入到history列表的开头，将history列表作为数据存到缓存中，key是throttle_user_1，过期时间60s
        return self.throttle_success()

```



## 2 自动生成接口文档

```python
# 1 安装：pip install coreapi

# 2 在路由中配置
	from rest_framework.documentation import include_docs_urls
    urlpatterns = [
        ...
        path('docs/', include_docs_urls(title='站点页面标题'))
    ]
#3 视图类：自动接口文档能生成的是继承自APIView及其子类的视图。
	-1 ） 单一方法的视图，可直接使用类视图的文档字符串，如
        class BookListView(generics.ListAPIView):
            """
            返回所有图书信息.
            """
    -2)包含多个方法的视图，在类视图的文档字符串中，分开方法定义，如
        class BookListCreateView(generics.ListCreateAPIView):
            """
            get:
            返回所有图书信息.
            post:
            新建图书.
            """
    -3)对于视图集ViewSet，仍在类视图的文档字符串中封开定义，但是应使用action名称区分，如
        class BookInfoViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, GenericViewSet):
        """
        list:
        返回图书列表数据
        retrieve:
        返回图书详情数据
        latest:
        返回最新的图书数据
        read:
        修改图书的阅读量
        """
```



## 3 JWT

```python
jwt=Json Web token
#原理
"""
1）jwt分三段式：头.体.签名 （head.payload.sgin）
2）头和体是可逆加密，让服务器可以反解出user对象；签名是不可逆加密，保证整个token的安全性的
3）头体签名三部分，都是采用json格式的字符串，进行加密，可逆加密一般采用base64算法，不可逆加密一般采用hash(md5)算法
4）头中的内容是基本信息：公司信息、项目组信息、token采用的加密方式信息
{
	"company": "公司信息",
	...
}
5）体中的内容是关键信息：用户主键、用户名、签发时客户端信息(设备号、地址)、过期时间
{
	"user_id": 1,
	...
}
6）签名中的内容时安全信息：头的加密结果 + 体的加密结果 + 服务器不对外公开的安全码 进行md5加密
{
	"head": "头的加密字符串",
	"payload": "体的加密字符串",
	"secret_key": "安全码"
}
"""

校验
"""
1）将token按 . 拆分为三段字符串，第一段 头加密字符串 一般不需要做任何处理
2）第二段 体加密字符串，要反解出用户主键，通过主键从User表中就能得到登录用户，过期时间和设备信息都是安全信息，确保token没过期，且时同一设备来的
3）再用 第一段 + 第二段 + 服务器安全码 不可逆md5加密，与第三段 签名字符串 进行碰撞校验，通过后才能代表第二段校验得到的user对象就是合法的登录用户
"""

drf项目的jwt认证开发流程（重点）
"""
1）用账号密码访问登录接口，登录接口逻辑中调用 签发token 算法，得到token，返回给客户端，客户端自己存到cookies中

2）校验token的算法应该写在认证类中(在认证类中调用)，全局配置给认证组件，所有视图类请求，都会进行认证校验，所以请求带了token，就会反解出user对象，在视图类中用request.user就能访问登录的用户

注：登录接口需要做 认证 + 权限 两个局部禁用
"""

# 第三方写好的  django-rest-framework-jwt
# 安装pip install djangorestframework-jwt

# 新建一个项目，继承AbstractUser表（）

# 创建超级用户

# 简单使用
 #urls.py
    from rest_framework_jwt.views import ObtainJSONWebToken,VerifyJSONWebToken,RefreshJSONWebToken,obtain_jwt_token
    path('login/', obtain_jwt_token),

    
 

```



## 自定制auth认证类

```python
from rest_framework_jwt.authentication import BaseAuthentication,BaseJSONWebTokenAuthentication
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_jwt.authentication import jwt_decode_handler
from rest_framework_jwt.authentication import get_authorization_header,jwt_get_username_from_payload
from rest_framework import exceptions
class MyToken(BaseJSONWebTokenAuthentication):
    def authenticate(self, request):
        jwt_value=str(request.META.get('HTTP_AUTHORIZATION'))
        # 认证
        try:
            payload = jwt_decode_handler(jwt_value)

        except Exception:
            raise exceptions.AuthenticationFailed("认证失败")
        user=self.authenticate_credentials(payload)
        return user,None
    
#局部使用，全局使用
```





# 补充

## 1 函数显示传参类型和返回值类中

# 作业

## 1 什么是集群，什么是分布式



```python
作业：
	1 自定义User表，新增mobile唯一约束字段；新增icon图片字段
	2 在自定义User表基础上，用 GenericViewSet + CreateModelMixin + serializer 完成User表新增接口（就是注册接口）（重要提示：序列化类要重写create方法，不然密码就是明文了）
	3 在自定义User表基础上，用 GenericViewSet + RetrieveModelMixin + serializer 完成User表单查（就是用户中心）
	4 在自定义User表基础上，用 GenericViewSet + UpdateModelMixin + serializer 完成用户头像的修改
```





# 昨日回顾

```python
# 1 自定义了频率类
# 2 自动生成接口文档
# 3 jwt：三部分组成：头+荷载（用户数据）+签名
# 4 drf中使用jwt：djangorestframework_jwt
	-路由里配了一条


# 	作业
1 自定义User表，新增mobile唯一约束字段；新增icon图片字段
	2 在自定义User表基础上，用 GenericViewSet + CreateModelMixin + serializer 完成User表新增接口（就是注册接口）（重要提示：序列化类要重写create方法，不然密码就是明文了）
	3 在自定义User表基础上，用 GenericViewSet + RetrieveModelMixin + serializer 完成User表单查（就是用户中心）
	4 在自定义User表基础上，用 GenericViewSet + UpdateModelMixin + serializer 完成用户头像的修改
```

# 今日内容

## 1 jwt

### 1.1 控制用户登录后才能访问，和不登录就能访问

```python
# 1 控制用户登录后才能访问，和不登录就能访问
from rest_framework.permissions import IsAuthenticated
class OrderAPIView(APIView):# 登录才能
    authentication_classes = [JSONWebTokenAuthentication,]
    # 权限控制
    permission_classes = [IsAuthenticated,]
    def get(self,request,*args,**kwargs):
        return Response('这是订单信息')


class UserInfoAPIView(APIView):# 不登录就可以
    authentication_classes = [JSONWebTokenAuthentication,]
    # 权限控制
    # permission_classes = [IsAuthenticated,]
    def get(self,request,*args,**kwargs):
        return Response('UserInfoAPIView')
```

## 1.2 控制登录接口返回的数据格式

```python
# 2 控制登录接口返回的数据格式
	-第一种方案，自己写登录接口
    -第二种写法，用内置，控制登录接口返回的数据格式
    	-jwt的配置信息中有这个属性
    	    'JWT_RESPONSE_PAYLOAD_HANDLER':
    'rest_framework_jwt.utils.jwt_response_payload_handler',
    	-重写jwt_response_payload_handler，配置成咱们自己的
```

## 1.3 自定义基于jwt的权限类

```python
# 3 自定义基于jwt的权限类
from rest_framework.authentication import BaseAuthentication  # 基于它
from rest_framework_jwt.authentication import BaseJSONWebTokenAuthentication # 基于它
from rest_framework.exceptions import AuthenticationFailed
# from rest_framework_jwt.authentication import jwt_decode_handler
from rest_framework_jwt.utils import jwt_decode_handler # 跟上面是一个
import jwt

from api import models
# class MyJwtAuthentication(BaseAuthentication):
#     def authenticate(self, request):
#         jwt_value=request.META.get('HTTP_AUTHORIZATION')
#         if jwt_value:
#             try:
#             #jwt提供了通过三段token，取出payload的方法，并且有校验功能
#                 payload=jwt_decode_handler(jwt_value)
#             except jwt.ExpiredSignature:
#                 raise AuthenticationFailed('签名过期')
#             except jwt.InvalidTokenError:
#                 raise AuthenticationFailed('用户非法')
#             except Exception as e:
#                 # 所有异常都会走到这
#                 raise AuthenticationFailed(str(e))
#             # 因为payload就是用户信息的字典
#             print(payload)
#             # return payload, jwt_value
#             # 需要得到user对象，
#             # 第一种，去数据库查
#             # user=models.User.objects.get(pk=payload.get('user_id'))
#             # 第二种不查库
#             user=models.User(id=payload.get('user_id'),username=payload.get('username'))
#             return user,jwt_value
#         # 没有值，直接抛异常
#         raise AuthenticationFailed('您没有携带认证信息')


class MyJwtAuthentication(BaseJSONWebTokenAuthentication):
    def authenticate(self, request):
        jwt_value=request.META.get('HTTP_AUTHORIZATION')
        if jwt_value:
            try:
            #jwt提供了通过三段token，取出payload的方法，并且有校验功能
                payload=jwt_decode_handler(jwt_value)
            except jwt.ExpiredSignature:
                raise AuthenticationFailed('签名过期')
            except jwt.InvalidTokenError:
                raise AuthenticationFailed('用户非法')
            except Exception as e:
                # 所有异常都会走到这
                raise AuthenticationFailed(str(e))
            user=self.authenticate_credentials(payload)
            return user,jwt_value
        # 没有值，直接抛异常
        raise AuthenticationFailed('您没有携带认证信息')
```

## 1.4 手动签发token（多方式登录）

```python
# 使用用户名，手机号，邮箱，都可以登录#
# 前端需要传的数据格式
{
"username":"lqz/1332323223/33@qq.com",
"password":"lqz12345"
}
# 视图
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSetMixin, ViewSet

from app02 import ser
class Login2View(ViewSet):  # 跟上面完全一样
    def login(self, request, *args, **kwargs):
        # 1 需要 有个序列化的类
        login_ser = ser.LoginModelSerializer(data=request.data,context={'request':request})
        # 2 生成序列化类对象
        # 3 调用序列号对象的is_validad
        login_ser.is_valid(raise_exception=True)
        token=login_ser.context.get('token')
        # 4 return
        return Response({'status':100,'msg':'登录成功','token':token,'username':login_ser.context.get('username')})
    
# 序列化类
from rest_framework import serializers
from api import models
import re
from rest_framework.exceptions import ValidationError

from rest_framework_jwt.utils import jwt_encode_handler,jwt_payload_handler
class LoginModelSerializer(serializers.ModelSerializer):
    username=serializers.CharField()  # 重新覆盖username字段，数据中它是unique，post，认为你保存数据，自己有校验没过
    class Meta:
        model=models.User
        fields=['username','password']

    def validate(self, attrs):

        print(self.context)

        # 在这写逻辑
        username=attrs.get('username') # 用户名有三种方式
        password=attrs.get('password')
        # 通过判断，username数据不同，查询字段不一样
        # 正则匹配，如果是手机号
        if re.match('^1[3-9][0-9]{9}$',username):
            user=models.User.objects.filter(mobile=username).first()
        elif re.match('^.+@.+$',username):# 邮箱
            user=models.User.objects.filter(email=username).first()
        else:
            user=models.User.objects.filter(username=username).first()
        if user: # 存在用户
            # 校验密码,因为是密文，要用check_password
            if user.check_password(password):
                # 签发token
                payload = jwt_payload_handler(user)  # 把user传入，得到payload
                token = jwt_encode_handler(payload)  # 把payload传入，得到token
                self.context['token']=token
                self.context['username']=user.username
                return attrs
            else:
                raise ValidationError('密码错误')
        else:
            raise ValidationError('用户不存在')
```



## 1.5 jwt的配置参数

```python
# jwt的配置
import datetime
JWT_AUTH={
    'JWT_RESPONSE_PAYLOAD_HANDLER':'app02.utils.my_jwt_response_payload_handler',
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=7), # 过期时间，手动配置
}
```



## 2 基于角色的权限控制（django内置auth体系）

```python
# RBAC :是基于角色的访问控制（Role-Based Access Control ）,公司内部系统
# django的auth就是内置了一套基于RBAC的权限系统

# django中
	# 后台的权限控制（公司内部系统，crm，erp，协同平台）
	user表
    permssion表
    group表
    user_groups表是user和group的中间表
    group_permissions表是group和permssion中间表
    user_user_permissions表是user和permission中间表
    # 前台（主站），需要用三大认证
# 演示：
	
	
```



## 3 django缓存

```python
# 前端混合开发缓存的使用
	-缓存的位置，通过配置文件来操作（以文件为例）
    -缓存的粒度：
    	-全站缓存
        	中间件
            MIDDLEWARE = [
                'django.middleware.cache.UpdateCacheMiddleware',
                。。。。
                'django.middleware.cache.FetchFromCacheMiddleware',
            ]
            CACHE_MIDDLEWARE_SECONDS=10  # 全站缓存时间
        -单页面缓存
        	在视图函数上加装饰器
            from django.views.decorators.cache import cache_page
            @cache_page(5)  # 缓存5s钟
            def test_cache(request):
                import time
                ctime=time.time()
                return render(request,'index.html',context={'ctime':ctime})
        	
        -页面局部缓存
        	{% load cache %}
            {% cache 5 'name' %}  # 5表示5s钟，name是唯一key值
             {{ ctime }}
            {% endcache %}
        	
    
# 前后端分离缓存的使用
	- 如何使用
        from django.core.cache import cache
        cache.set('key',value可以是任意数据类型)
        cache.get('key')
    -应用场景：
    	-第一次查询所有图书，你通过多表联查序列化之后的数据，直接缓存起来
        -后续，直接先去缓存查，如果有直接返回，没有，再去连表查，返回之前再缓存

```





# 补充

## 1  补充base64使用

```python
# base64编码和解码#md5固定长度，不可反解#base63 变长，可反解#编码（字符串，json格式字符串）import base64import jsondic={'name':'lqz','age':18,'sex':'男'}dic_str=json.dumps(dic)ret=base64.b64encode(dic_str.encode('utf-8'))print(ret)# 解码# ret是带解码的串ret2=base64.b64decode(ret)print(ret2)
```

# 作业：

## 必做

### 0 自定义jwt认证类

### 1 多方式登录，逻辑写在视图类中

### 2 多方式登录，逻辑写在序列化类中

### 3 画出django内置auth的六表逻辑

### 4 整理django缓存的使用



## 选做

### 1 了解一下什么是对称加密，什么是非对称加密

### 2 Vue-cli创建vue项目，在pycharm中打开

