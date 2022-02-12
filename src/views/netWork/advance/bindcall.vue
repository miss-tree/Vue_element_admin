<template>
    <div>
        <location :list='list'/>
        <div>
            <h4>call()、apply()、bind()</h4>
            <p>
               三者的相同点：都是用来改变this的指向
            </p>
            <pre>
        var a = {
            user:"miss-tree",
            fn:function(){
                console.log(this.user);
            }
        }
        var b = a.fn;
        b(); //undefined  => a.fn 的this是指向a，b没有user

        修改方式：将b的this指向a
        b.call(a)          
        b.apply(a)          
        b.bind(a)()     

        理解下this
        function fn1(){
            console.log(this)//window
        }
        fn1()==>window

        var a = 1
        var obj1 = {
            a:2,
            fn:function(){
                console.log(this.a)
            }
        }
        var fn1 = obj1.fn
        fn1()//1

        原因：普通函数(匿名函数、非工厂函数)的调用，此时的this被绑定到window

        构造函数绑定this
        function Person(name,age){
        // 这里的this都指向实例
            this.name = name
            this.age = age
            this.sayAge = function(){
                console.log(this.age)
            }
        }

        var dot = new Person('Dot',2)
        dot.sayAge()//2
        ==>new一个函数时，背地里会将创建一个连接到prototype成员的新对象，同时this会被绑定到那个新对象上


            </pre>
            <div>应用场景</div>
            <ul>
                <li>call 经常做继承.</li>
                <li>apply经常跟数组有关系. 比如借助于数学对象实现数组最大值最小值</li>
                <li>bind 不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向</li>
                <li>bind返回对应函数, 便于稍后调用； apply, call则是立即调用</li>
            </ul>
        </div>
        <div>
            <h5 id="axios">call()和apply()的区别</h5>
            <ul>
                <li>call()的第一个参数是this要指向的对象，后面传入的是参数列表，
                    参数可以是任意类型，当第一个参数为null、undefined的时候，默认指向window；
                    如果没有提供 obj 参数，那么 Global 对象被用作 obj</li>
                <li>apply()：第一个参数是this要指向的对象，第二个参数是数组</li>
                <li></li>
            </ul>
            <pre>
        function Person(name,age) {   
            this.name=name; 
            this.age=age;   
        }   
        function Student(name,age,grade) {   
            Person.apply(this,arguments); this.grade=grade;   
        }   
        // 创建一个学生类   
        var student=new Student("miss",21,"一年级");   
        // 测试   
        alert("name:"+student.name+"\n"+"age:"+student.age+"\n"+"grade:"+student.grade);   
        //测试结果name:miss age:21 grade:一年级   
        //学生类里面没有给name和age属性赋值啊,为什么又存在这两个属性的值呢,这个就是apply的神奇之处.
        //用student去执行Person这个类里面的内容,在Person这个类里面存在this.name等之类的语句,这样就将属性创建到了student对象里面 

        function Person(name,age){
            // 这里的this都指向实例
            this.name = name
            this.age = age
            this.sayAge = function(){
                console.log(this.age)
            }
        }
        function Female(){
            Person.apply(this,arguments)//将父元素所有方法在这里执行一遍就继承了
        }
        var dot = new Female('Dot',2)

        var arr = [1,2,3,89,46]
        var max = Math.max.apply(null,arr)//89
        var min = Math.min.apply(null,arr)//1 
            </pre>
        </div>
        <div>
            <h5 id="trends">call()和bind()的区别</h5>
            <p>
                call()改过this的指向后，会再执行函数，bind()改过this后，不执行函数，会返回一个绑定新this的函数
            </p>
            <pre>
        传递另一个函数的函数名，函数中的this指向这个函数的引用
        传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean
        传递一个对象，函数中的this指向这个对象
        function a(){   
            console.log(this);   //输出函数a中的this对象
        }       

        function b(){}       

        var c={name:"call"};    //定义对象c  

        a.call();   // window
        a.call(null);   //window
        a.call(undefined);   //window
        a.call(1);   //Number
        a.call('');   //String
        a.call(true);   //Boolean
        a.call(b);   //function b(){}
        a.call(c);   //Object        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"pluginNpm",
    components:{
        list:()=>import('@/components/explainList/index'),
        location:()=>import('@/components/location/index')
    },
    data(){
        return{
            list:[
                {name:'call()和apply()的区别',id:'axios'},
                {name:'call()和bind()的区别',id:'trends'},
            ],
            datalist:[
                {name:'lodash',explain:'一个一致性、模块化、高性能的 JavaScript 实用工具库'},
                {name:'qs',explain:'一个 url参数转化 (parse和stringify)的轻量级js库'},
                {name:'fastclick',explain:'消除了移动端浏览器上的物理点击和触发一个 click 事件之间的300ms 的延迟。不干扰你目前的逻辑的同时，让你的应用反应更加灵敏'},
                {name:'file-saver',explain:'一个在客户端保存文件的解决方案，非常适合在客户端上生成文件的Web应用程序'},
                {name:'js-xlsx',explain:'一个强大的解析和编写excel文件的库'},
                {name:'Typed.js',explain:'一个轻松实现打字效果的js插件'},
                {name:'fullPage.js',explain:'一个可轻易创建全屏滚动网站的js滚动动画库, 兼容性无可替代'},
                {name:'SortableJS',explain:'功能强大的JavaScript 拖拽库'},
                {name:'KeyboardJS',explain:'一个在浏览器中使用的库（与node.js兼容）可以轻松设置键绑定和使用组合键来设置复杂的绑定'},
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
.table{
    border: 1px solid #ccc;
    width: 100%;
    .row{
        width: 100%;
        display: grid;
        grid-template-columns:30% 40% 40%;
        div{
            padding: 5px 10px;
            text-align: center;
        }
        div:nth-child(2),div:nth-child(3){
            text-align: left;
            padding-left: 15px;
        }
        div~div{
            border-left: 1px solid #ccc;
        }
        .title{
            text-align: center !important;
            background: #eef1f6;
            color: #222;
            font-weight: bold;
        }
    }
    .row~.row{
        border-top: 1px solid #ccc;
    }
}
</style>

