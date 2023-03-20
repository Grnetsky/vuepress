# docker - 系统平滑移至 容器虚拟化技术

## docker是什么
基于GO语言的开源项目
## docker解决了什么痛点
将源代码，配置，环境，版本等打包为镜像文件，镜像既是应用，一次镜像，处处运行
## docker怎么安装

## docker怎么用
### docker三件套
image：镜像，模板
container：容器，实例
repository：仓库，集中存放镜像的地方
## docker详细使用
### 安装
### 配置阿里云加速器

## docker命令
### 帮助启动类
|||
|---|---|
|启动|systemctl start docker|
|停止|systemctl stop docker|
|重启|systemctl restart docker|
|查看状态|systemctl status docker|
|开机自启动|systemctl enable docker|
|查看帮助手册|docker --help|
:::warning 虚悬镜像
仓库名和标签都是none的镜像 是docker产生的垃圾文件 删除就行了
:::
镜像命令
|描述|命令|
|---|---|
|列出所有镜像|docker images|
|查询某个镜像是否在远程仓库|docker search 镜像名|
|拉取某个镜像|docker pull 镜像名[:版本号]|
|查看镜像，容器，数据卷所占用的空间|docker system df |
|删除某个镜像|docker rmi [-f] 镜像id 镜像id2|
|删除虚悬镜像|docker image prune|
容器相关命令
|描述|命令|备注|
|---|---|---|
|新建容器|docker run 参数 镜像名 命令 其他参数选项|参数：--name:"容器新名字" -d:"后台运行容器，守护式运行程序" -i:"以交互模式" -t:"为容器重新分配一个伪输入终端 一般与i一起使用" -P:"随机端口映射 宿主机端口:docker映射端口" -p:"指定端口映射"|
|列出所有正在运行的容器|docker ps 参数|参数:-a:"列出所有正在运行和运行过的容器" -l:"显示最近创建的容器" -n:"显示最近创建的n个容器 -q:"静默模式，只显示容器编号"|
|退出容器|exit: 退出后，容器停止 control+q:退出后容器不停止||
|启动容器|docker start ID/容器名||
|重启容器|docker restart ID/容器名||
|停止容器|docker stop ID/容器名||
|强制停止容器|docker kill ID/容器名||
|删除已停止的容器|docker rm [-f] ID||
|启动守护式容器|docker run -d 容器名(-d启动守护式)|docker后台运行时，必须要有一个前台进程，否则会立即关闭（不是所有容器都能动守护进程启动）|
|查看容器日志|docker logs 容器ID||
|查看容器内运行的进程|docker top 容器ID||
|查看容器内细节|docker inspect 容器ID||
|进入正在运行的容器并以命令行交互|方法1：docker exec [参数] 容器ID   方法2：docker attach 容器ID|参数1-d:"后台运行容器，守护式运行程序" -i:"以交互模式" -t:"为容器重新分配一个伪输入终端 一般与i一起使用"；；方法1和方法2的区别：attach直接进入容器启动命令的终端，不会启动新的进程，用exit会导致容器停止；而exec在容器里新打开终端，并且可以起启动新的进程，用exit不会导致容器停止（推荐使用exec）|
|从容器内拷贝文件到主机|docker cp 容器ID:容器内文件路径 目的主机路径||
|导入导出容器|docker export 容器ID>文件名.tar  导入：cat 文件名.tar \|docker import - 镜像用户/镜像名:镜像版本号 |导出：export 导出容器内容为tar归档文件 导入：import 从tar包中的内容创建一个新的文件系统再导入为镜像|


## docker 镜像详解
### 什么是镜像
docker镜像是轻量级的，可执行的独立的软件包，包含软件运行环境的所有内容

### 镜像分层
通过docker pull 下载镜像时 发现 是一层一层的下载的，为什么docker会这么设计？这么设计的好处是什么？接下来让我们来探究这个问题
#### 联合文件系统（UnionFS）
联合文件系统是一种分层的，轻量级，并且高性能的分层系统，它支持对文件系统的修改作为一次提交来一层层叠加同时可以将不同目录挂载到同一个虚拟文件系统下。联合文件系统是docker镜像的基础，镜像可以通过分层来进行继承

#### docker镜像加载原理
docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。

**bootfs(boot file system)**主要包含bootloader和kernel，bootloader主要是引导加载kernel，Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是bootfs。这一层与我们典型的Linux/Unix系统是一样的, 包含boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。

rootfs(root file system), 在bootfs之上。包含的就是典型Linux系统中的/dev, /proc, /bin, /etc等标准目录和文件。rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos等等。


平时我们安装虚拟机的CentOS都是好几个G，为什么docker这里才200M？

对于一个精简的OS，rootfs可以很小，只需要包括最基本的命令、工具和程序库就可以了，因为底层直接用Host的kernel，自己只需要提供rootfs就行了。由此可见对于不同的linux发行版，bootfs基本是一致的，rootfs会有差别，因此不同的发行版可以共用bootfs。

#### 为什么采用分层模式呢
资源共享（多个镜像可以共用同一个基石），方便复制迁移
::: warning 注意
docker的镜像层是只读的，容器层是可写的，当一个容器启动时，一个新的可写层加载到镜像层顶部，这一层通常叫容器层，容器层之下叫镜像层
:::

### docker镜像commit命令集
在实际开发中，我们需要基于一个镜像在其上堆加新的功能，就可以使用commit命令来提交容器副本使他成为一个新的镜像
```linux
docker commit -m="提交的信息" -a="作者" 容器ID 要创建的目标镜像:[标签名]
```

### 发布镜像到阿里云
1. 进入阿里云官网 https://www.aliyun.com/
2. 登录个人账户
3. 搜索容器镜像服务
4. 点击管理控制台
5. 点击个人版
6. 设置命名空间（如果有需要的话）
7. 设置镜像仓库
8. 点击管理
9. 系统会自动生成代码，选择需要的操作复制执行即可



### 容器数据卷
:::warning 注意
使用容器数据卷时一定要加上 --privileged=true 打开真正的root权限
:::

#### 数据卷是什么？
是对资料的备份行为，对容器内容进行持久化保存在主机中，是一种映射关系，docker不会在容器删除时删除容器数据卷

#### 好处是
* 可以在容器之间共享数据和重用数据
* 卷中的更改可以实时更新到容器中，实时生效
* 数据卷的更改不会更新到镜像中
* 数据卷的生命周期一直持续到没人用他为止
#### 怎么用
docker run [-it] --privileged=true -v /宿主机绝对路径目录:/容器内目录:rw (可读可写)  ro:(容器内只读)  镜像名

* docker修改主机同步，主机修改docker同步，容器stop后主机修改容器依然同步


### 卷的继承和共享
docker run -it --privileged=true --volumes-from 父类 --name 别名 镜像名


## docker常规安装简介

### 搜索镜像

### 拉取镜像

### 查看镜像

### 启动镜像

###停止镜像

### 移除镜像

### 实战
#### mysql修改中文乱码问题 要使用容器卷
docker run -d -p 3306:3306 --privileged=true -v /zzzyyuszzzyyusee/mysql/log:/var/log/mysql -v /zzyyuse/mysql/data"/var/lib/mysql 0v /zzyyuse/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 --name mysql mysql:5.7


####redis运行


## 高级篇


###安装mysql主从复制

#### 创建主服务器

新建3307主服务器 3308从服务器



## dockerfile
### 简介
dockerfile是用来构建镜像的文本文件 是有一条条构建镜像所需的指令和参数构成的脚本

### 构建三部曲


### Dockerfile常用保留字
FROM 基础镜像，当前新镜像是基于哪个镜像的，一般指定一个已经存在的镜像文件
MAINTAINER 指定作者和邮箱

#(井号)
RUN 执行命令行命令   例如 RUN apt install vim
WORKDIR 指定在创建容器后 终端默认登入的进来工作目录，一个落脚点
ENV 用来指定环境变量的
VOLUME 容器卷，用于保存数据和持久化
ADD 将宿主机目录下的文件拷贝进镜像 且会自动处理URL和解压tar压缩包
COPY 类似于ADD，拷贝文件和目录到镜像中，将从构建上下文目录中原文件路径的文件/目录复制到新的一层的镜像内的目标文件
CMD 1.指定容器启动后要干的事  注意可以有多个指令 但是只有最后一个生效 CMD会被docker run 之后的参数替换
ENTRYPOINT 也是用来指定一个容器启动时要运行的命令，类似于CMD ，但是ENTRYPOINT不会被docker run 后面的命令参数覆盖 而且这些命令行参数会被当作参数送给ENTRYPOINT指定的程序
EXPOSE 端口  暴露某个端口

### Dockerfile 构建

docker build -t 新镜像名字:TAG .  (注意这个点 )  .代表当前目录
### 虚悬镜像
docker image prune 删除所有虚悬镜像
