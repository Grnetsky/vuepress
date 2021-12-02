---
sidebar: auto
---
# 本周内容

### django-rest-framework

### restful规范，

### drf入门，

### 视图，

### 序列化（最重要）

### 响应，

### 权限，

### 认证

### 频率，

### 过滤，

### 分页

## 今日内容

## 1 web开发模式

```python
#前后端混合开发（前后端不分离）：返回的是html的内容，需要写模板
#前后端分离：只专注于写后端接口，返回json，xml格式数据

# xml格式
<xml>
<name>lqz</name>
</xml>
# json
{"name":"lqz"}

# java---》jsp
https://www.pearvideo.com/category_loading.jsp
#php写的
http://www.aa7a.cn/user.php
# python写的
http://www.aa7a.cn/user.html




#什么是动态页面（查数据库的），什么是静态页面（静止的html）
#页面静态化
```

### 2 api接口

```python
#通过网络，规定了前后台信息交互规则的url链接，也就是前后台信息交互的媒介

#百度地图的api接口 
https://api.map.baidu.com/place/v2/search?ak=6E823f587c95f0148c19993539b99295&region=%E4%B8%8A%E6%B5%B7&query=%E8%82%AF%E5%BE%B7%E5%9F%BA&output=xml
```

## 3 postman的使用

```python
# postman是目前最好用的，模拟发送http请求的工具
# 双击安装，安装完成自动打开

# 解析json的网站
http://www.json.cn/
    
#请求头中User-Agent：客户端的类型
# 请求头中加其他参数：
# 批量接口导出和测试（实操一下）


```

![1594001178121](.\assets\1594001228907.png)



## 4 Restful规范（重点）

```python
REST全称是Representational State Transfer，中文意思是表述（编者注：通常译为表征性状态转移）。 它首次出现在2000年Roy Fielding的博士论文中。

RESTful是一种定义Web API接口的设计风格，尤其适用于前后端分离的应用模式中。

这种风格的理念认为后端开发任务就是提供数据的，对外提供的是数据资源的访问接口，所以在定义接口时，客户端访问的URL路径就表示这种要操作的数据资源。

事实上，我们可以使用任何一个框架都可以实现符合restful规范的API接口。

# 抓包工具：fiddler，charles

# 10条规范
1  数据的安全保障：url链接一般都采用https协议进行传输 注：采用https协议，可以提高数据交互过程中的安全性
2 接口特征表现，一看就知道是个api接口
    - 用api关键字标识接口url：
      - [https://api.baidu.com](https://api.baidu.com/)
      - https://www.baidu.com/api
      注：看到api字眼，就代表该请求url链接是完成前后台数据交互的
      -路飞的接口：https://api.luffycity.com/api/v1/course/free/
3 多数据版本共存
    - 在url链接中标识数据版本
    - https://api.baidu.com/v1
    - https://api.baidu.com/v2
    注：url链接中的v1、v2就是不同数据版本的体现（只有在一种数据资源有多版本情况下）
4 数据即是资源，均使用名词（可复数）
    - 接口一般都是完成前后台数据的交互，交互的数据我们称之为资源
      - https://api.baidu.com/users
      - https://api.baidu.com/books
      - https://api.baidu.com/book

      注：一般提倡用资源的复数形式，在url链接中奖励不要出现操作资源的动词，错误示范：https://api.baidu.com/delete-user
    - 特殊的接口可以出现动词，因为这些接口一般没有一个明确的资源，或是动词就是接口的核心含义

      - https://api.baidu.com/place/search
      - https://api.baidu.com/login
5 资源操作由请求方式决定（method）
    - 操作资源一般都会涉及到增删改查，我们提供请求方式来标识增删改查动作
      - https://api.baidu.com/books - get请求：获取所有书
      - https://api.baidu.com/books/1 - get请求：获取主键为1的书
      - https://api.baidu.com/books - post请求：新增一本书书
      - https://api.baidu.com/books/1 - put请求：整体修改主键为1的书
      - https://api.baidu.com/books/1 - patch请求：局部修改主键为1的书
      - https://api.baidu.com/books/1 - delete请求：删除主键为1的书
6 过滤，通过在url上传参的形式传递搜索条件
    - https://api.example.com/v1/zoos?limit=10：指定返回记录的数量
    - https://api.example.com/v1/zoos?offset=10：指定返回记录的开始位置
    - https://api.example.com/v1/zoos?page=2&per_page=100：指定第几页，以及每页的记录数
    - https://api.example.com/v1/zoos?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序
    - https://api.example.com/v1/zoos?animal_type_id=1：指定筛选条件
        
7 响应状态码
   7.1 正常响应
    - 响应状态码2xx
      - 200：常规请求
      - 201：创建成功
   7.2 重定向响应
    - 响应状态码3xx
      - 301：永久重定向
      - 302：暂时重定向
   7.3 客户端异常
    - 响应状态码4xx
      - 403：请求无权限
      - 404：请求路径不存在
      - 405：请求方法不存在
	7.4 服务器异常
    - 响应状态码5xx
      - 500：服务器异常
 8 错误处理，应返回错误信息，error当做key
    {
        error: "无权限操作"
    }
    
 9 返回结果，针对不同操作，服务器向用户返回的结果应该符合以下规范
    GET /collection：返回资源对象的列表（数组）
    GET /collection/resource：返回单个资源对象
    POST /collection：返回新生成的资源对象
    PUT /collection/resource：返回完整的资源对象
    PATCH /collection/resource：返回完整的资源对象
    DELETE /collection/resource：返回一个空文档
    
 10 需要url请求的资源需要访问资源的请求链接
     # Hypermedia API，RESTful API最好做到Hypermedia，即返回结果中提供链接，连向其他API方法，使得用户不查文档，也知道下一步应该做什么
        {
            "status": 0,
            "msg": "ok",
            "results":[
                {
                    "name":"肯德基(罗餐厅)",
                    "img": "https://image.baidu.com/kfc/001.png"
                }
                ...
                ]
        }
```



## 5 drf的安装和简单使用

```python
# 安装：pip install djangorestframework==3.10.3
# 使用
	1 在setting.py 的app中注册
        INSTALLED_APPS = [
        'rest_framework'
        ]
    2 在models.py中写表模型
    	class Book(models.Model):
            nid=models.AutoField(primary_key=True)
            name=models.CharField(max_length=32)
            price=models.DecimalField(max_digits=5,decimal_places=2)
            author=models.CharField(max_length=32)
    3 新建一个序列化类（听不懂）
    	from rest_framework.serializers import ModelSerializer
        from app01.models import  Book
        class BookModelSerializer(ModelSerializer):
            class Meta:
                model = Book
                fields = "__all__"
    4 在视图中写视图类
        from rest_framework.viewsets import ModelViewSet
        from .models import Book
        from .ser import BookModelSerializer
        class BooksViewSet(ModelViewSet):
            queryset = Book.objects.all()
            serializer_class = BookModelSerializer
    5 写路由关系
    	from app01 import views
        from rest_framework.routers import DefaultRouter
        router = DefaultRouter()  # 可以处理视图的路由器
        router.register('book', views.BooksViewSet)  # 向路由器中注册视图集
          # 将路由器中的所以路由信息追到到django的路由列表中
        urlpatterns = [
            path('admin/', admin.site.urls),
        ]
        #这是什么意思？两个列表相加
        # router.urls  列表
        urlpatterns += router.urls
        
    6 启动，在postman中测试即可
```



## 3 cbv源码

```python
# ModelViewSet继承View（django原生View）
# APIView继承了View

# 先读View的源码
from django.views import View

# urls.py
path('books1/', views.Books.as_view()),  #在这个地方应该写个函数内存地址,views.Books.as_view()执行完，是个函数内存地址,as_view是一个类方法，类直接来调用，会把类自动传入
放了一个view的内存地址（View--》as_view--》内层函数）

# 请求来了，如果路径匹配，会执行，  函数内存地址(request)
def view(request, *args, **kwargs):
    #request是当次请求的request
    self = cls(**initkwargs)  #实例化得到一个对象，Book对象
    if hasattr(self, 'get') and not hasattr(self, 'head'):
        self.head = self.get
        self.request = request
        self.args = args
        self.kwargs = kwargs
        return self.dispatch(request, *args, **kwargs)

 
def dispatch(self, request, *args, **kwargs):
		#request是当次请求的request   self是book对象
        if request.method.lower() in self.http_method_names:
            #handler现在是：
            handler=getattr(self,'get'),你写的Book类的get方法的内存地址
            handler = getattr(self, request.method.lower(), self.http_method_not_allowed)
        else:
            handler = self.http_method_not_allowed
        return handler(request, *args, **kwargs)  #执行get(request)
```







## 4 APIView源码分析

```python
#from rest_framework.views import APIView
# urls.py
path('booksapiview/', views.BooksAPIView.as_view()),  #在这个地方应该写个函数内存地址

#APIView的as_view方法（类的绑定方法）
   def as_view(cls, **initkwargs):
        view = super().as_view(**initkwargs)  # 调用父类（View）的as_view(**initkwargs)
        view.cls = cls
        view.initkwargs = initkwargs
        # 以后所有的请求，都没有csrf认证了，只要继承了APIView，就没有csrf的认证
        return csrf_exempt(view)
 

#请求来了---》路由匹配上---》view（request）---》调用了self.dispatch(),会执行apiview的dispatch
    
# APIView的dispatch方法
    def dispatch(self, request, *args, **kwargs):

        self.args = args
        self.kwargs = kwargs
        # 重新包装成一个request对象，以后再用的request对象，就是新的request对象了
        request = self.initialize_request(request, *args, **kwargs)
        self.request = request
        self.headers = self.default_response_headers  # deprecate?

        try:
            # 三大认证模块
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
   
# APIView的initial方法
 	def initial(self, request, *args, **kwargs):
        # 认证组件：校验用户 - 游客、合法用户、非法用户
        # 游客：代表校验通过，直接进入下一步校验（权限校验）
        # 合法用户：代表校验通过，将用户存储在request.user中，再进入下一步校验（权限校验）
        # 非法用户：代表校验失败，抛出异常，返回403权限异常结果
        self.perform_authentication(request)
        # 权限组件：校验用户权限 - 必须登录、所有用户、登录读写游客只读、自定义用户角色
        # 认证通过：可以进入下一步校验（频率认证）
        # 认证失败：抛出异常，返回403权限异常结果
        self.check_permissions(request)
        # 频率组件：限制视图接口被访问的频率次数 - 限制的条件(IP、id、唯一键)、频率周期时间(s、m、h)、频率的次数（3/s）
        # 没有达到限次：正常访问接口
        # 达到限次：限制时间内不能访问，限制时间达到后，可以重新访问
        self.check_throttles(request)
```



```python
from rest_framework.request import Request
# 只要继承了APIView，视图类中的request对象，都是新的，也就是上面那个request的对象了
# 老的request在新的request._request
# 以后使用reqeust对象，就像使用之前的request是一模一样（因为重写了__getattr__方法）
  def __getattr__(self, attr):
        try:
            return getattr(self._request, attr) #通过反射，取原生的request对象，取出属性或方法
        except AttributeError:
            return self.__getattribute__(attr)

 # request.data 感觉是个数据属性，其实是个方法，@property，修饰了
	它是一个字典，post请求不管使用什么编码，传过来的数据，都在request.data
 #get请求传过来数据，从哪取？
	request.GET
    @property
    def query_params(self):
        """
        More semantically correct name for request.GET.
        """
        return self._request.GET
    
    #视图类中
     print(request.query_params)  #get请求，地址中的参数
     # 原来在
     print(request.GET)

```





# 补充



## 1 查看源码

![1594007392443](.\assets\1594007392443.png)

## 2 一切皆对象

```python
def foo(a,b):
    return a+b

foo.name='lqz'  #由于一切皆对象，函数也是个对象，对象放值

print(foo(2,3))

print(foo.name)
```

## 3 局部禁用csrf

```python
# 在视图函数上加装饰器@csrf_exempt
# csrf_exempt(view)这么写和在视图函数上加装饰器是一毛一样的

#urls.py中看到这种写法
path('tset/', csrf_exempt(views.test)),
```



## 作业

## 1 用postman，用django写几个接口，测试，导出文件

## 2 新建一个图书表，5个符合restful规范的接口，用CBV的APIView实现

## 3 rest_framework的Resquest类和APIView类，流程，你走一遍，整理成自己的话

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
```
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


#1 Serializer类，需要序列化什么，必须写一个类继承，想序列化什么字段，就在里面写字段，source的作用（很多字段类）
#2 序列化queryset（列表）对象和真正的对象，many=True的作用，instance=要序列化的对象，




#3 反序列化 instance=要序列化的对象,data=request.data
#4 字段验证，序列化类中，给字段加属性，局部和全局钩子函数，字段属性的validators=[check_author]
#5 当在视图中调用 序列化对象.is_valid()   boo_ser.is_valid(raise_exception=True) 只要验证不通过，直接抛异常
#6 修改保存---》调用序列化对象.save(),重写Serializer类的update方法
```
	    def update(self, instance, validated_data):
            #instance是book这个对象
            #validated_data是校验后的数据
            instance.name=validated_data.get('name')
            instance.price=validated_data.get('price')
            instance.author=validated_data.get('author')
            instance.publish=validated_data.get('publish')
            instance.save()  #book.save()   django 的orm提供的
            return instance
#7 序列化得到字典，序列化对象.data
#8 自己定义了一个Response对象
	class MyResponse():
        def __init__(self):
            self.status=100
            self.msg='成功'
        @property
        def get_dict(self):
            return self.__dict__

#9 反序列化的新增 序列化类(data=request.data),如果只传了data，当调用  序列化对象.save()，会触发序列化类的create方法执行，当传了instance和data时，调用 序列化对象.save()，会触发序列化类的update方法执行
#10 重写create方法（可以很复杂）
	    def create(self, validated_data):
            instance=Book.objects.create(**validated_data)
            return instance
#11 ModelSerializer 跟Model做了一个对应
	class BookModelSerializer(serializers.ModelSerializer):
        def validate_price（self, data）:
            pass
        publish=serializers.CharField(source='publish.name')
        class Meta:
            model=Book  # 对应上models.py中的模型
            fields='__all__'
            # fields=('name','price','id','author','publish') # 只序列化指定的字段
            # exclude=('name',) #跟fields不能都写，写谁，就表示排除谁
            # read_only_fields=('price',)
            # write_only_fields=('id',) #弃用了，使用extra_kwargs
            extra_kwargs = {  # 类似于这种形式name=serializers.CharField(max_length=16,min_length=4)
                'price': {'write_only': True,max_length:16,min_length:4},
            }
```

#12 如果在ModelSerializer中写一个局部钩子或者全局钩子，如何写？
	-跟之前一模一样
#13 many=True 能够序列化多条的原因---》__new__是在__init__之前执行的，造出一个空对象
#14 接口：统一子类的行为

# 1 请求和响应

# 2 请求 Request对象，drf新包装的，Request.data，Request.query_params, 重写了__getattr__,  request._request

# 3 json模块是否执行反序列化bytes格式

# 4 考你：视图类的方法中：self.request，就是当次请求的request

# 5 Response：类，实例化传一堆参，data=字典，status=状态码（有一堆常量），headers=响应头（字典），content_type=响应的编码方式

# 6 全局和局部配置，响应格式

# 7 drf默认配置文件，查找顺序--》先从类中属性找---》项目的setting找---》drf默认的配置找


# 8 视图家族

	-APIView---》继承自View
	-GenicAPIView---》APIView，做了一些扩展：
		-queryset = None
		-serializer_class = None
	    -get_queryset()  经常用
	    -get_serializer() 经常用
	    -get_serializer_class() 内部来用，外部会重写
	    -get_object()  经常用，获取一条数据（pk传过来）
	    	-源码解析
	        queryset = self.filter_queryset(self.get_queryset()) #返回所有数据queryset对象
	        # lookup_url_kwarg就是pk，路由中有名分组分出来的pk
	        lookup_url_kwarg = self.lookup_url_kwarg or self.lookup_field
	        # {pk:4}  4 浏览器地址中要查询的id号http://127.0.0.1:8000/books6/4/
	        filter_kwargs = {self.lookup_field: self.kwargs[lookup_url_kwarg]}
	        # 根据pk=4去queryset中get单个对象
	        obj = get_object_or_404(queryset, **filter_kwargs)
	        self.check_object_permissions(self.request, obj)
	        return obj

-5 个视图扩展类（继承了object），每个里面写了一个方法（ListModelMixin：list方法）		
ListModelMixin,
CreateModelMixin,
UpdateModelMixin,
DestroyModelMixin,
RetrieveModelMixin
-GenericAPIView的视图子类，9个，继承了GenicAPIView+一个或者两个或者三个视图扩展类
CreateAPIView,
ListAPIView,
UpdateAPIView,
RetrieveAPIView,
DestroyAPIView,
ListCreateAPIView,
RetrieveUpdateDestroyAPIView,
RetrieveDestroyAPIView,
RetrieveUpdateAPIView
-视图集：ModelViewSet,ReadOnlyModelViewSet：继承了上面一堆（5个视图扩展和GenicAPIView）+自己写了一个ViewSetMixin（as_view方法），只要继承它的，路由得写成{‘get’：‘自己定义的方法’}
-ViewSet=ViewSetMixin, views.APIView ：ViewSetMixin要放在前面
-GenericViewSet=ViewSetMixin+GenicAPIView


    -ViewSetMixin（as_view方法）
    -ViewSetMixin+APIView=ViewSet
    -ViewSetMixin+GenicAPIView=GenericViewSet

# 1 路由

# 2 3种写法

	-django传统的路由（cvb路由）path('test/', views.TestView.as_view()),
	-只要继承ViewSetMixin：path('books/', views.BookViewSet.as_view({'get':'list','post':'create'})),
	-自动生成路由
		-SimpleRouter
	    -DefaultRouter
	    -使用：
	    	# 第一步：导入routers模块
	        from rest_framework import routers
	        # 第二步：有两个类,实例化得到对象
	        # routers.DefaultRouter 生成的路由更多
	        # routers.SimpleRouter
	        router=routers.SimpleRouter()
	        # 第三步：注册
	        # router.register('前缀','继承自ModelViewSet视图类','别名')
	        router.register('books',views.BookViewSet) # 不要加斜杠了
	        urlpatterns+=router.urls

#3 action的使用：装饰器给继承了ModeViewSet的视图类中自定义的方法，自动生成路由
#4 method=['get','post'],detail=True(带pk的)/False（不带pk）

# 5 认证

	-使用
		-定义一个类，继承BaseAuthentication，重写def authenticate(self, request)，校验成功返回两个值，一个是user对象，第二个是token
	    -需要注意，如果配置多个认证类，要把返回两个值的放到最后
	    -全局使用：setting配置
	        REST_FRAMEWORK={
	    	"DEFAULT_AUTHENTICATION_CLASSES":["app01.app_auth.MyAuthentication",],
				}
	    -局部使用：
	    authentication_classes=[MyAuthentication]
	    -局部禁用：authentication_classes = []

# 1 web开发模型，混合开发和前后端分离

# 2 web api：接口

# 3 postman的使用

# 4 restful规范：10条

# 5 djangorestframework，django的第三方插件（app）

# 6 drf几大组件

    请求（APIView源码，Requset对象）和响应（Response，自己封装Response），
    序列化，
    视图，
    路由，
    解析器（DEFAULT_PARSER_CLASSES,全局配置，局部配置）,
    响应器（DEFAULT_RENDERER_CLASSES，全局配，局部配），
    认证：校验是否登录（有内置，自定义，全局配置，局部配置）
    权限：是否有权限访问某些接口（有内置，自定义，全局配置，局部配置）
    频率：限制访问频次（有内置，自定义，全局配置，局部配置），根据用户ip，根据用户id限制
    过滤：筛选，查询出符合条件的
    排序：结果进行排序
    异常：全局异常（自定义，全局配置）
    
    版本控制（不讲）
    分页器
    文档生成
    jwt认证
    Xadmin的使用
    路飞项目
    git
    redis
    短信
    支付宝支付


​

#1  book 其实是5个表（自动生成了一个），
	-一对一关系，其实是Forainkey，unique
    -on_delete：级联删除，设置为空，什么都不干，设置成默认值
    -字段建索引，字段唯一
    -联合索引，联合唯一
    -日期类型 auto_now  和 auto_now_add  
    -基表  abstract
#2 book
	-单条查询，多条查询
    -单条增，多条增（生成序列化对象，many=True）
    -单条修改，多条修改（BookListSerializer：重写了update方法）
    -单删，群删（is_delete），统一用群删  pk__in=[1,2,3]

# 3 频率

	-自定义频率（ip，user_id）
	-继承SimpleRateThrottle
	-重写get_cache_key，返回什么就以什么为key进行限制
	-scope字段，需要与setting中对应

#4 分页
	-PageNumberPagination,基本分页
    	-每页显示大小
        -get请求路径中查询的key
        -get请求路径中每页显示条数
        -每页最大显示多少条
    -LimitOffsetPagination,

    	#     default_limit = 3   # 每页条数

        #     limit_query_param = 'limit' # 往后拿几条

        #     offset_query_param = 'offset' # 标杆

        #     max_limit = 5   # 每页最大几条

​    -CursorPagination
​        cursor_query_param = 'cursor'  # 每一页查询的key
​        page_size = 2   #每页显示的条数
​        ordering = '-id'  #排序字段-





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
# base64编码和解码
#md5固定长度，不可反解
#base63 变长，可反解

#编码（字符串，json格式字符串）
import base64
import json
dic={'name':'lqz','age':18,'sex':'男'}
dic_str=json.dumps(dic)

ret=base64.b64encode(dic_str.encode('utf-8'))
print(ret)

# 解码
# ret是带解码的串
ret2=base64.b64decode(ret)
print(ret2)
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

