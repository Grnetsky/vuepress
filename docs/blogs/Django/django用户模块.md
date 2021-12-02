---
sidebar: auto
---
auth模块是Django提供的标准权限管理系统,可以提供用户身份认证, 用户组和权限管理。

auth可以和admin模块配合使用， 快速建立网站的管理系统。

在INSTALLED_APPS中添加'django.contrib.auth'使用该app, auth模块默认启用。

主要的操作包括:

create_user 创建用户
authenticate 验证登录
login 记住用户的登录状态
logout 退出登录
is_authenticated 判断用户是否登录
@login_required 判断用户是否登录的装饰器
二、前期配置
1、说明
Django 在新建工程时已经为使用用户认证系统做好了全部必要的配置。不过有可能你并非使用 django-admin 命令新建的工程，或者你使用的是一个正在开发中的项目，因此最好再检查一下 settings.py 文件中是否已经做好了全部必要配置。

2、配置
在setting.py的INSTALLED_APPS
INSTALLED_APPS = [
'django.contrib.auth',   
# 用户权限处理部分依赖的应用    
'django.contrib.contenttypes',
]
在setting.py的MIDDLEWARE
MIDDLEWARE = [
# 会话支持中间件
'django.contrib.sessions.middleware.SessionMiddleware',
# 认证支持中间件
'django.contrib.auth.middleware.AuthenticationMiddleware',
]
在项目下面的urls.py中
urlpatterns = [
url(r'^admin/', admin.site.urls),
# 首页
url(r'^$', views.index, name='index')
# 将 auth 应用中的 urls 模块包含进来
url(r'^users/', include('django.contrib.auth.urls')),
]
三、User对象
1、user对象
属性
说明	说明	备注
username	少于等于30个字符。 用户名可以包含字母、数字、_、@、+、.和- 字符	必选
first_name	少于等于30个字符	可选
last_name	少于30个字符	可选
email	邮箱地址	可选
password	密码的哈希及元数据。（Django 不保存原始密码）。原始密码可以无限长而且可以包含任意字符。参见密码相关的文档	必选
groups	与Group 之间的多对多关系	可选
user_permissions	与Permission 之间的多对多关系	可选
is_staff	布尔值。指示用户是否可以访问Admin 站点	可选
is_active	布尔值。指示用户的账号是否激活	必选
is_superuser	布尔值。只是这个用户拥有所有的权限而不需要给他们分配明确的权限。	可选
last_login	用户最后一次登录的时间	默认值
date_joined	账户创建的时间。当账号创建时，默认设置为当前的date/time	默认值
说明
User 对象属性：username， password（必填项）password用哈希算法保存到数据库
is_staff ： 用户是否拥有网站的管理权限.
is_active ： 是否允许用户登录, 设置为False，可以不用删除用户来禁止 用户登录
2、拓展 User 模型
2.1、说明
用户可能还包含有头像、昵称、介绍等等其它属性，因此仅仅使用 Django 内置的 User 模型是不够。所有有些时候我们必须使用在系统的User上进行拓展

2.2、继承AbstractUser (方式一)
说明
推荐方式、django.contrib.auth.models.User 也是继承自 AbstractUser 抽象基类，而且仅仅就是继承了 AbstractUser，没有对 AbstractUser 做任何的拓展
在app的models.py中
class User(AbstractUser):
# 昵称
nickname = models.CharField(max_length=50, blank=True)
# 头像
head = models.ImageField(max_length=50)
class Meta(AbstractUser.Meta):
db_table='user'
pass
注意
为了让 Django 用户认证系统使用我们自定义的用户模型，必须在 settings.py 里通过 AUTH_USER_MODEL 指定自定义用户模型所在的位置
AUTH_USER_MODEL = '模块.User'
迁移
python manage.py makemigrations
python manage.py migrate
3、使用 Profile 模式(方式二)
说明
如果想为一个已使用了 Django 内置 User 模型的项目拓展用户模型，上述继承 AbstractUser 的拓展方式会变得有点麻烦。Django 没有提供将内置的 User 迁移到自定义的用户模型，因为 Django 已经为内置的 User 模型生成了相关数据库迁移文件和数据库表。如果非要这么做的话，需要手工修改迁移文件和数据库表，并且移动数据库中相关的用户数据。
示例代码
class UserProfile(models.Model):
nickname = models.CharField(max_length=50, blank=True)
desc = models.TextField(blank=True, null=True)
user = models.OneToOneField(User)
users = User.objects.all()
for user in users:
print(user.userprofile.desc)
4、优缺点
继承 AbstractUser 的用户模型只有一张数据库表。
而 Profile 这种模式有两张表，一张是 User 模型对应的表，一张是 Profile 模型对应的表，两张表通过一对一的关系关联。可见，当要查询某个用户的 Profile 时，需要执行额外的跨表查询操作，所以这种方式比起直接承AbstractUser 效率更低一点。因此对于新项目来说，优先推荐使用继承 AbstractUser 的方式来拓展用户模型
3、 常用操作
1、验证登录
说明
当用户登录的时候用authenticate(username=username,password=password)验证登录，判断数据库中是否存在用户输入的账号和密码，返回一个user对象。底层将password用hash算法加密后和数据库中password进行对比
示例代码
2、注册操作
说明
当用户注册的时候用create_user(username,password,email)默认情况下is_active=True,is_staff=False,is_superuser=False。
底层将password用hash算法加密之后存储到数据库中
示例代码
def register_view(request):
if request.method == 'POST':
try:
username = request.POST.get('username')
password = request.POST.get('password')
phone = request.POST.get('phone')
email = request.POST.get('email')
# 验证用户是否存在
user = authenticate(username=username, password=password)
if user:
# 用户已经存在
return render(request, 'register.html', {'msg': '用户名已存在'})
else:
# 保存用户
user = User.objects.create_user(username=username,
password=password,
phone=phone,
email=email)
# 将用户信息保存到session中
login(request, user)
return redirect('/')
except Exception as e:
return render(request, 'register.html', {'msg': '注册失败'})
else:
return render(request, 'register.html')
3、登录操作
说明
当用户登录的时候用login(request,user)来记住用户的登录状态
该函数接受一个HttpRequest对象，以及一个认证了的User对象
此函数使用django的session框架给某个已认证的用户附加上session id等信息。
示例代码
def login_view(request):
if request.method == 'POST':
username = request.POST.get('username')
password = request.POST.get('password')
# 验证用户是否存在
user = authenticate(request, username=username, password=password)
if user:
# 判断用户是否激活
if user.is_active:
login(request, user)
return redirect('/')
else:
return render(request, 'test/login.html', {'msg': '用户尚未激活'})
else:
return render(request, 'test/login.html', {'msg': '用户密码错误'})
else:
return render(request, 'login.html')
4、登出操作
说明
当用户注销的时候用logout(request),只需要一个参数request
示例代码
from django.contrib.auth import logout
def logout_view(request):
logout(request)
5、修改密码
说明
示例代码
user = auth.authenticate(username=username, password=old_password)
if user:
user.set_password(new_password)
user.save()
6、只允许登录用户访问
说明
@login_required 修饰器修饰的view函数会先通过session key检查是否登录,
已登录用户可以正常的执行操作, 未登录用户将被重定向到login_url指定的位置. 若未指定login_url参数, 则重定向到settings.LOGIN_URL
示例代码
# settings 配置
LOGIN_URL = '/user/login/'
# views
@login_required
def find_user_info(request):
pass
@login_required(login_url='/accounts/login/')
def find_user_info(request):
pass
7、验证登录
说明
如果是真正的 User 对象，返回值恒为 True 。 用于检查用户是否已经通过了认证。 通过认证并不意味着用户拥有任何权限，甚至也不检查该用户是否处于激活状态，这只是表明用户成功的通过了认证。 这个方法很重要, 在后台用request.user.is_authenticated()判断用户是否已经登录，如果true则可以向前台展示request.user.name
示例代码

在后台的视图函数里可以用request.user.is_authenticated()判断用户是否登录
在前端页面中可以用
{% if user.is_authenticated %}
{% endif %}
判断用户是否登录

作者：唯老
链接：https://www.jianshu.com/p/5c94b0d2dc84
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
