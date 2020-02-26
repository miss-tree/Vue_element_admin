<template>
    <div>
        <div>
            <h4>ES6 class</h4>
            <div>说到类，先讲下ES5的类</div>
            <pre>
        function Person(name,age){
            this.name=name;
            this.age=age;
        }
        Person.prototype.sayName=function(){
            alert(this.name);
        }
        Person.prototype.sayAge=function(){
            alert(this.age);
        }

        构造函数里的prototype属性指向原型对象
        原型对象里的constructor属性指向构造函数
        上面重写的两个方法可以写成下面的方式
        Person.prototype={
            constructor:Person, /*显示将constructor指向构造函数*/
            sayName:function(){
                alert(this.name);
            },
            sayAge:function(){
                alert(this.age);
            },
        }
        console.log("Person.prototype.constructor",Person.prototype.constructor);
            </pre>
        </div>
        <div>
            <h5>ES6 定义一个类</h5>
            <pre>
        class Person{
            constructor(name,age){
                this.name=name;
                this.age=age;
            }
            sayName(){
                alert(this.name)
            }
        }
        var p1=new Person("华为",18);
        p1.sayName()
        console.log("p1.hasOwnProperty('name')",p1.hasOwnProperty("name"))
        =>true
        console.log("p1.hasOwnProperty('sayName')",p1.hasOwnProperty("sayName"))
        =>false    

        避免过于依赖浏览器,查看属性推荐使用Object.getPrototypeOf()方法
        访问实例化对象共享的原型对象,
        不推荐使用_proto_,因为这是浏览器实现的私有方法
        
        console.log("Object.getPrototypeOf(p1)",Object.getPrototypeOf(p1))
        hasOwnProperty 查看属性是否为继承过来的    
            </pre>
        </div>
        <div>
            <h5>class表达式</h5>
            <pre>
        const a=class A{
            constructor(name){
                A.n=name
                console.log(A.n)
            }
        }
        new a("bqq");   
        这个类的名字是a而不是A,A只在class的内部代码可用,指代当前类
			(严格的说函数内的this被A替代了)

        ES5写法
        var b=function B(name){
            1.函数内部创建this
            2.将构造函数的作用域赋予this
            3.原型对象里面方法和构造函数的属性添加到this上
            4.将this return 出去
            B.n=name;
            console.log(B.n)
        }
        new b("wasd");    
            </pre>
        </div>
        <div>
            <h5>ES6 class 静态属性</h5>
            <pre>
        class Person{
            constructor(name,age){
                this.name=name;
                this.age=age;
            }
            sayName(){
                alert(this.name)
            }
            static getMoney(){
                const money=100;
                return "私房钱："+money;
            }
        }
        Person.money=50;/*强行模拟静态属性*/
        var someBody=new Person("someBody",10);
        console.log(Person.getMoney());	=>私房钱：100
        console.log(someBody.getMoney());	=>报错  someBody.getMoney is not a function        
            </pre>
        </div>
        <div>
            <div>ES6类做选项卡</div>
            <pre>
        class Tab{
            constructor(lists,contents){
                this.lists = document.querySelectorAll(lists);
                this.contents=document.querySelectorAll(contents);
                this.lists.forEach((el,index)=>{
                    this.addEvent(el,index);
                })
            }
            addEvent(el,index){
                el.addEventListener("click",()=>{
            /*用箭头函数会先固定好this，而不是使用时所在的对象this，方便下面this使用
            el.parentNode.children是一个伪数组,需要函数的解构式,否则forEach不能解析,会报错*/
                    [...el.parentNode.children].forEach((ele,i)=>{
                        this.removeActive(ele);
                        this.removeActive(this.contents[i]);
                    })
                    this.addActive(el);
                    this.addActive(this.contents[index]);
                    this.contents[index].classList.add("active");
                })
            }
            addActive(ele){
                ele.classList.add("active");
            }
            removeActive(ele){
                ele.classList.remove("active");
            }
        }
        let t = new Tab(".list",".content");   
            </pre>
            <div>面向对象编程的特点:将所有的属性和方法,都会挂载一个对象中。有以下好处</div>
            <ul>
                <li>避免命名冲突</li>
                <li>保证方法方法都是引用同一个对象(原型模式的特点)</li>
                <li>代码的可读性,健壮性</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name:"class"
}
</script>

