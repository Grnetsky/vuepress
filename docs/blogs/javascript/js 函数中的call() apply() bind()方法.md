
# js函数中的apply()、call()、bind()方法
ECMAScript中的函数是对象，因此函数也有属性和方法。每个函数都包含两个属性：length和prototype，且每个函数包含两个非继承而来的方法apply()和call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内thiis对象的值。

apply()
apply()方法接受两个参数：一个是在其中运行函数的作用域，另一个是参数数组。其中，第二个参数可以是Array的实例，也可以是arguments对象。

定义：应用某一对象的一个方法，用另一个对象替换当前对象。即apply()方法能劫持另外一个对象的方法，继承另外一个对象的属性.

语法：Function.apply(obj,args)方法能接收两个参数
说明：obj：这个对象将代替Function类里this对象  args：这个是数组，它将作为参数传给Function（args-->arguments）

如果 args 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。
如果没有提供 args 和 obj 任何一个参数，那么 Global 对象将被用作 obj， 并且无法被传递任何参数。

call()
apply()和call()方法的作用相同，它们的区别仅在于接收参数的方式不同。对于call()方法而言，第一个参数是this值没有变化，变卦的是其余参数都直接传递给函数。换句话说，在使用call()方法时，传递给函数的参数必须逐个列举出来。

语法：Function.call(obj,[param1[,param2[,…[,paramN]]]])   
定义：调用一个对象的一个方法，以另一个对象替换当前对象。
说明： obj：这个对象将代替Function类里this对象  params：这个是一个参数列表

call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。
如果没有提供 obj 参数，那么 Global 对象被用作 obj。

举例：

1 <script type="text/javascript">   
2 /*定义一个人类*/   
3 function Person(name,age) {   
4     this.name=name; this.age=age;   
5 }   
6  /*定义一个学生类*/   
7 function Student(name,age,grade) {   
8     Person.apply(this,arguments); this.grade=grade;   
9 }   
10 //创建一个学生类   
11 var student=new Student("qian",21,"一年级");   
12 //测试   
13 alert("name:"+student.name+"\n"+"age:"+student.age+"\n"+"grade:"+student.grade);   
14 //大家可以看到测试结果name:qian age:21 grade:一年级   
15 //学生类里面我没有给name和age属性赋值啊,为什么又存在这两个属性的值呢,这个就是apply的神奇之处.   
16 </script>
分析: Person.apply(this,arguments);

this:在创建对象在这个时候代表的是student

arguments:是一个数组,也就是[“qian”,”21”,”一年级”];

也就是通俗一点讲就是:用student去执行Person这个类里面的内容,在Person这个类里面存在this.name等之类的语句,这样就将属性创建到了student对象里面

主要解决的几个问题  
apply和call的区别在哪里（仅仅只是接受参数的方式不同）

什么情况下用apply,什么情况下用call

在给对象参数的情况下,如果参数的形式是数组的时候,比如apply示例里面传递了参数arguments,这个参数是数组类型,并且在调用Person的时候参数的列表是对应一致的(也就是Person和Student的参数列表前两位是一致的) 就可以采用 apply ；如果我的Person的参数列表是这样的(age,name),而Student的参数列表是(name,age,grade),这样就可以用call来实现了,也就是直接指定参数列表对应值的位置(Person.call(this,age,name,grade)）。    在不给函数传递参数的情况下，使用哪个方法都无所谓。

apply的其他巧妙用法（一般在什么情况下可以使用apply）

调用apply方法的时候,第一个参数是对象(this), 第二个参数是一个数组集合,   这里就说明apply的一个巧妙用法，可以将一个数组默认的转换为一个参数列表([param1,param2,param3] 转换为 param1,param2,param3)， 这个如果让我们用程序来实现将数组的每一个项,来装换为参数的列表,可能都得费一会功夫,借助apply的这点特性,所以就有了以下高效率的方法。

（1）Math.max 实现得到数组中最大的一项

因为Math.max 参数里面不支持Math.max([param1,param2]) 也就是数组 ，但是它支持Math.max(param1,param2,param3…),所以

可以根据刚才apply的那个特点来解决 var max=Math.max.apply(null,array),这样轻易的可以得到一个数组中最大的一项  (apply会将一个数组装换为一个参数接一个参数的传递给方法)

         这块在调用的时候第一个参数给了一个null,这个是因为没有对象去调用这个方法,我只需要用这个方法帮我运算,得到返回的结果就行,.所以直接传递了一个null。

var arr = new Array(1,2,3,4,5);
var max = Math.max.apply(null,arr);    //5
（2）Array.prototype.push 可以实现两个数组合并

同样push方法没有提供push一个数组,但是它提供了push(param1,param,…paramN);

var arr1=new Array("1","2","3");   
var arr2=new Array("4","5","6");
如果我们要把 arr2展开，然后一个一个追加到arr1中去，最后让arr1=[“1”,“2”,“3”,“4”,“5”,“6”]
arr1.push(arr2)显然是不行的，因为这样做会得到[“1”,“2”,“3”,[“4”,“5”,“6”]]

我们只能用一个循环去一个一个的push(当然也可以用arr1.concat(arr2)，但是concat方法并不改变arr1本身)

var arrLen=arr2.length;
for(var i=0;i<arrLen;i++){
arr1.push(arr2[i]);
}
所以同样也可以通过apply来转换一下这个数组,即:

var arr1=new Array("1","2","3");   
var arr2=new Array("4","5","6");   
Array.prototype.push.apply(arr1,arr2);
也可以这样理解,arr1调用了push方法,参数是通过apply将数组装换为参数列表的集合.。

bind()方法
ECMAScript5还定义了一个方法：bind()。这个方法会创建一个函数的实例，其this值会被绑定到传给bind()函数的值。

1     <script type="text/javascript">
2         
3         window.color = "red";
4         var o = { color: "blue" };
5                            
6         function sayColor(){
7             alert(this.color);
8         }
9         var objectSayColor = sayColor.bind(o);
10         objectSayColor();   //blue
11
12
13     </script>
在这里，sayColor()调用bing()并传入对象o，创建了objectSayColor()函数。objectSayColor()函数的this值等于o，因此即使是在全局作用域中调用这个函数，也会看到“blue”。

bind()主要是为了改变函数内部的this指向，这个是在ECMA5以后加入的，所以IE8一下的浏览器不支持。

bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入bind方法的第一个参数作为this,传入bind方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.

