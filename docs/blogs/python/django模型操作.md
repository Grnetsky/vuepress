
# django模型操作

## 单表
### 增加数据
```python
 Book.object.create(字段1="",字段2=""")
```
### 查询
1. 查所有
```python
Book.object.all()
```
2. 查部分

|方法|描述|
|----|----|
|.filter(字段1="") |过滤|
|.exclude()|排除|
|.order_by("id")|排序（升序） =>"-id"降序|
|.reserve()|倒序|
|.count()|数量|
|.exist()|存在返回true|
|Book.object.all().values("字段名")|取出某个字段的值返回字典 （quertset），为空则返回所有字段的字典| 
|Book.object.all().values_list("字段名1","字段名2")| 取出某些字段，返回元组型queryset |
|.distinct|去重|

3. 查单一
```python
Book.object.filter().first()
Book.object.filter().last()
Book.object.all()[2]
Book.object.get()
```
4.删除数据
```python
Book.object.filter().delete()
```
5. 模糊查询

|方法|描述|
|---|---|
|__gt|大于|
|__lt|小于|
|__startwith|以开头|
|__endwith|以结尾|
|__contains||
|__icontains|包含（不区分大小写）|
|__in=[100,200]|为100，200的|
|__range=[100,200]|在100到200之间|
|__year，__month|datafiled才有的，选择指定年月日份的|
```python
Book.objects.filter(price__in=[100,200,300])
Book.objects.filter(price__gt=100)
Book.objects.filter(price__lt=100)
Book.objects.filter(price__range=[100,200])
Book.objects.filter(title__contains="python")
Book.objects.filter(title__icontains="python")
Book.objects.filter(title__startswith="py")
Book.objects.filter(pub_date__year=2012) 
```
6. 更改数据
```python
Book.objects.filter().update(name="123") 
```
### 一对多表
一旦确定表关系为一对多，就要创建关联字段，放在多类中


### 多对多
一旦确定关系是多对多，就要第三张 创建一个关系表

### 一对一
一旦确定关系是一对一，就要建立唯一关联字段，放哪个表中都可以

## orm关联模型
### 一对一
```python
OneToOne(to="表名",to_filed="字段名")
```

### 一对多

```python
Foreignkey(to="表名",to_filed="字段名")
```

#### 新建一对多关系
方式1.
book = Book.object.create(publish_id="") =>通过关联字段创建

方式2.
book = Book.object.create(publish=publish的实例对象)

book.publish => 返回关联对象
book.publish_id =>返回关联对象的id
### 多对多
```python
ManyToMany(to="",to_filed="")
```
#### 新建多对多关系
book.关联字段.add(对象一,对象二)
book.关联字段.add(id1,id2...)
#### 删除多对多关系
book.关联字段.remove(对象或id)
book.关联对象.clear() 清空 
#### 获取所有
book.关联字段.all()

## 跨表查询
### 基于对象的跨表查询
#### 一对多查询
正向查询 关联属性在A表中，从A查B是正向查询，反之为反向查询
正向查询按字段
```python
book.关联字段名.name
```

反向查询
反向查询按表名 表名小写_set.all()
```
publish.book_set.all()
```

#### 多对多查询
正向查询按字段
```
book.关联字段名.all()  =>返回queryset
```
反向查询按表名 表名小写_set.all()
```
author.关联表名_set.all()
```

#### 一对一查询
正向查询按字段
```
author.authordetail
```
反向查询按表名 对象.表名小写
```
authordetail.表名
```

### 基于双下划线的跨表查询

**正向查询按字段，反向查询按表名小写**
#### 一对多
正向查询 正向查询按字段
```
book.object.filter().values('字段__name')
```
反向查询 反向查询按表名小写
```
Publish.object.filter(book__name="金瓶梅").values("name")
```
#### 多对多
正向查询
```
Book.object.filter().values("author__name")
```

反向查询
```
aAuthor.object.filter(book__name = "金瓶梅").values("name")
```

#### 一对一
正向查询
```
Author.object.filter(name="").values("authordetail__email")
```
反向查询
```
AuthorDetail.object.filter(author__name="").values("email")
```
Book.object.values()  => 获取所有字段的字典
Book.object.values("name") => 获取指定字段的字典 
