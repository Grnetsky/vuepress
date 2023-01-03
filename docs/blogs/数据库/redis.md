# redis

# redis笔记
## nosql（not only sql）
* 指非关系型数据库
* 不支持sql语法
* nosql没有通用语法，每个nosql语法都不同
* nosql产品：Mongodb redis

### nosql与sql对比
* sql数据库适用于关系比较复杂的数据查询
* sql支持事务，nosql不支持事务
* nosql速度更快，性能极高

## redis特性
* 内存数据库。所有数据保存在内存中
* 支持数据持久化，可以将数据保存在磁盘中，重启后可以再次加载使用
* redis不仅仅支持简单的key-value类型的数据，还支持list，set，hash，zset等数据结构的存储
* redis支持数据的备份，即master-slave的数据备份

## redis安装
[https://redis.io/download
](下载redis)


### 命令
redis-server 执行文件名来开启redis服务器 
redis-cle 开启redis

### 值命令
set name value 设置值

setx key seconds value 设置过期时间

mset key1 value1 key2 value2...  设置多个值

append key value 追加值

get key 获取值

mget key1 key2 获取一组值

select index 切换数据库

flushall 删除所有数据库

