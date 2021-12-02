---
sidebar: auto
---
DRF教程10-关系字段
https://www.django-rest-framework.org/api-guide/relations/

在编程中核心的就是数据结构。

关系字段用来表示model之间的关系，比如外键，m2m，o2o，还有反转关系，自定义关系-GenericForeignKey

关系字段申明在relations.py中，在使用的时候，可以在自己的序列化类中使用serializers.<FieldName>来引用。



使用ModelSerializers类的时候，会自动生成序列化字段和关系，我们可以检查这些自动生成的字段，然后来决定如何自定义关系样式。

1
2
3
4
5
6
7
8
9
10
(venv) E:\Python\dj_test>python manage.py shell
>>> from xxx.serializers import ClothesSerializer
>>> serializer = ClothesSerializer()
>>> print(repr(serializer))
ClothesSerializer():
url = HyperlinkedIdentityField(view_name='clothes-detail')
id = IntegerField(label='ID', read_only=True)
color = SlugRelatedField(queryset=<QuerySet [<Colors: instance:yellow>, <Colors: instance:red>]>, slug_field='colors_cn')
desc = CharField(max_length=64)
#使用shell，导入序列化类，然后实例化，然后使用repr函数打印这个实例的对象关系
　　

API Reference
为了解释多个类型的关系字段，这里使用几个例子。我们的模型将用于音乐专辑Album，以及每张专辑中列出的曲目Track。



StringRelatedField
在这个案例中，可以查看使用yellow颜色作为外键的clothes有哪些，这个clothes字段在这里是read only。

它的作用是得到关联表model.__str__方法的返回字段。因为对应的子表是to-many关系，所以要加上many=True

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
class ColorsSerializer(serializers.ModelSerializer):
clothes = serializers.StringRelatedField(many=True)

    class Meta:
        model = Colors
        fields = ('url', 'id', 'colors', 'clothes')
--->
{
"url": "http://127.0.0.1:8002/colors/1/",
"id": 1,
"colors": "yellow",
"clothes": [
"内衣一号",
"内衣二号"
]
}


Arguments:

many - If applied to a to-many relationship, you should set this argument to True




PrimaryKeyRelatedField
它的作用是得到关联表的主键。

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
class ColorsSerializer(serializers.ModelSerializer):
clothes = serializers.PrimaryKeyRelatedField(queryset=Colors.objects.all(),many=True)

    class Meta:
        model = Colors
        fields = ('url', 'id', 'colors', 'clothes')
--->
{
"url": "http://127.0.0.1:8002/colors/1/",
"id": 1,
"colors": "yellow",
"clothes": [
1,
2
]
}


By default this field is read-write, although you can change this behavior using the read_only flag.

Arguments:

queryset - The queryset used for model instance lookups when validating the field input. Relationships must either set a queryset explicitly, or set read_only=True.
many - If applied to a to-many relationship, you should set this argument to True.
allow_null - If set to True, the field will accept values of None or the empty string for nullable relationships. Defaults to False.
pk_field - Set to a field to control serialization/deserialization of the primary key's value. For example, pk_field=UUIDField(format='hex') would serialize a UUID primary key into its compact hex representation.
HyperlinkedRelatedField
它的作用是得到关联表的url

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
class ColorsSerializer(serializers.ModelSerializer):
clothes = serializers.HyperlinkedRelatedField(queryset=Colors.objects.all(),many=True,view_name='clothes-detail')

    class Meta:
        model = Colors
        fields = ('url', 'id', 'colors', 'clothes')
--->
{
"url": "http://127.0.0.1:8002/colors/1/",
"id": 1,
"colors": "yellow",
"clothes": [
"http://127.0.0.1:8002/clothes/1/",
"http://127.0.0.1:8002/clothes/2/"
]
}




By default this field is read-write, although you can change this behavior using the read_only flag.

Note: This field is designed for objects that map to a URL that accepts a single URL keyword argument, as set using the lookup_field and lookup_url_kwarg arguments.

This is suitable for URLs that contain a single primary key or slug argument as part of the URL.

If you require more complex hyperlinked representation you'll need to customize the field, as described in the custom hyperlinked fields section, below.

Arguments:

view_name - The view name that should be used as the target of the relationship. If you're using the standard router classes this will be a string with the format <modelname>-detail. required.
queryset - The queryset used for model instance lookups when validating the field input. Relationships must either set a queryset explicitly, or set read_only=True.
many - If applied to a to-many relationship, you should set this argument to True.
allow_null - If set to True, the field will accept values of None or the empty string for nullable relationships. Defaults to False.
lookup_field - The field on the target that should be used for the lookup. Should correspond to a URL keyword argument on the referenced view. Default is 'pk'.
lookup_url_kwarg - The name of the keyword argument defined in the URL conf that corresponds to the lookup field. Defaults to using the same value as lookup_field.
format - If using format suffixes, hyperlinked fields will use the same format suffix for the target unless overridden by using the format argument.
SlugRelatedField
它的作用是得到关联表的具体某个字段

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
# Clothes的color是外键，默认情况下，color字段会对应母表的主键，id。
# 使用SlugRelatedField可以指向外键，slug_field表示获取哪个字段返回给color
# 这里color这个属性就被重写了
class ClothesSerializer(serializers.ModelSerializer):
color = serializers.SlugRelatedField(queryset=Colors.objects.all(), slug_field='colors')
class Meta:
model = Clothes
fields = ('url', 'id', 'color', 'desc')
--->
{
"url": "http://127.0.0.1:8002/clothes/5/",
"id": 5,
"color": "red",
"desc": "袜子三号"
}


By default this field is read-write, although you can change this behavior using the read_only flag.

When using SlugRelatedField as a read-write field, you will normally want to ensure that the slug field corresponds to a model field with unique=True.

Arguments:

slug_field - The field on the target that should be used to represent it. This should be a field that uniquely identifies any given instance. For example, username. required
queryset - The queryset used for model instance lookups when validating the field input. Relationships must either set a queryset explicitly, or set read_only=True.
many - If applied to a to-many relationship, you should set this argument to True.
allow_null - If set to True, the field will accept values of None or the empty string for nullable relationships. Defaults to False.
HyperlinkedIdentityField
和HyperlinkedModelSerializer上的url字段一个作用

　

Nested relationships
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
class ColorsSerializer(serializers.ModelSerializer):
# 序列化嵌套
clothes = ClothesSerializer(many=True, read_only=True)

    class Meta:
        model = Colors
        fields = ('url', 'id', 'colors', 'clothes')
--->
{
"url": "http://127.0.0.1:8002/colors/1/",
"id": 1,
"colors": "yellow",
"clothes": [
{
"url": "http://127.0.0.1:8002/clothes/1/",
"id": 1,
"color": "yellow",
"desc": "内衣三号"
},
{
"url": "http://127.0.0.1:8002/clothes/2/",
"id": 2,
"color": "yellow",
"desc": "内衣二号"
}
]
}
#被嵌套的关联表，整个出现在母表的字段中
　　

Writable nested serializers
默认情况下，嵌套序列化程序是只读的。如果要支持对嵌套序列化程序字段的写操作，则需要创建create()和/或update()方法，以便明确指定应如何保存子关系。

1
2
3
4
5
6
7
8
9
10
11
12
13
14
class ColorsSerializer(serializers.ModelSerializer):
# 序列化嵌套
clothes = ClothesSerializer(many=True)

    class Meta:
        model = Colors
        fields = ('url', 'id', 'colors', 'clothes')
 
    def create(self, validated_data):
        clothes_data = validated_data.pop('clothes')    #先把clothes字段弹出来
        colors = Colors.objects.create(**validated_data)    #然后colors实例落表
        for clothe_data in clothes_data:    #clothes_data是多个实例
            Clothes.objects.create(color=colors,**clothe_data)  #把每个clothe实例落表，其中外键color指向color实例
        return colors
　　
