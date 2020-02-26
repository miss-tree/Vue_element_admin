<template>
    <div>
        <div>
            <h5>类的继承</h5>
            <div>还是一样先讲ES5的方法</div>
            <pre>
        ES5 类的继承
        function Human(sex){
            this.sex=sex;
        }
        Human.prototype.speak=function(){
            alert("说话")
        }
        function Man(sex){
            this.sex=sex;
        }
        类的继承 相当于ES6调用super方法，子类的__proto__能够访问基类的属性和方法
        function Man(sex){
            return Human.bind(this,sex)
        }
        Man.prototype=new Human()
        var XiaoMing=new Man("man");
        XiaoMing.speak()
            </pre>
            <div>ES6类的继承</div>
            <pre>
        定义一个基类
        class Plane{
            constructor(type){
                this.type=type;
            }
            move(){
                console.log("移动")
            }
            shoot(){
                console.log("射击")
            }
        }
        使用 extends 关键字来继承Plane类
        class PlayerPlane extends Plane{
            constructor(type){
                super(type);/*调用关键字 super 方法继承父类*/
                
                先创建this,继承完基类的属性和方法
                才能对当前的类,进行扩展，将父类的属性和方法,拷贝到当前this当中去
            }
        }
        let PlayerPlane1=new PlayerPlane("player")
        PlayerPlane1.shoot();        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:'extends',
}
</script>

