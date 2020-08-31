<template>
    <div>
        <location :list='list'/>
        <div>
            <h5>发布订阅</h5>
            <p>首先了解下什么叫发布订阅，发布订阅就类似于个人向报社订报和报社发报的过程。
                个人订阅，报社发布。报社可以向多个订阅的人发报，只要订阅都可以收到消息。
                所以发布的方法中会有一个订阅者的数组，用来收集订阅的人，然后通过遍历的方式
                想个人发布消息，按照对象的方法，订阅的人可以是不同的变量或方法，
                在遍历发布消息的时候，可以调用订阅人的方法</p>
            <p>
                实现1个机器人类(class Robot)，要求：
            </p>
            <ul>
                <li>- 使用事件监听者模式(观察者模式)</li>
                <li>- 机器人可触发不同类型的事件</li>
                <li>- 机器人1秒内最多只能触发1次事件</li>
                <li>可以添加多个事件监听器，也可以移除已添加的事件监听器</li>
            </ul>
            <pre>
        class  Robot{
            constructor(){
                this.observers=[]//观察者列表
            }
            add(observer){//加
                this.observers.push(observer)
            }
            remove(observer){//减
                let id = this.observers.findIndex(el=>el===observer)
                id > -1 && this.observers.splice(id,1)
            }
            async message(){//方法更新
                for( let observer of this.observers){
                            await	observer.update()
                }
            }
        }
        class Observer{
            constructor(name){
                this.name = name
            }
            sleep(ms){
                return new Promise(resolve => setTimeout(resolve, ms))
            }
            update(){
                return this.sleep(1000).then(()=> {console.log(`我是${this.name}`)});
            }
        }
        let  hello = new Robot();
        let  person1 = new Observer('越秀');
        let  person2 = new Observer('荔湾');
    
        hello.add(person1);
        hello.add(person2); 
        // hello.remove(person1);
        
        hello.message();        
            </pre>
            <p>
                观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，
                所有依赖它的对象 Observer 都会得到通知。
            </p>
            <ul>
                <li>一个目标者对象 Subject，拥有方法：添加 / 删除 / 通知 Observer；</li>
                <li>多个观察者对象 Observer，拥有方法：接收 Subject 状态变更通知并处理；</li>
                <li>目标对象 Subject 状态变更时，通知所有 Observer。</li>
            </ul>
        </div>
        <div>
            <h5 id="Subject">ES5方法实现</h5>
            <pre>
        发布者： - 主要功能是维护订阅自己的人以及分发消息            
        var Publish = function(name) {
            this.name = name;
            this.subscribers = []; // 数组中存放所有的订阅者，本例中是所代表的观察者的行为
        }
        
        // 分发，发布消息
        Publish.prototype.deliver = function (news) {
            var publish = this; // 各报社实例
            // 通知所有的订阅者
            this.subscribers.forEach(item => {
                item(news, publish); // 每个订阅者都收到了 news, 并且还知道是哪家报社发布的
            })
            return this; // 方便链式调用
        }     

        订阅者： - 主要功能是(主动)订阅或取消订阅报社    
        // 订阅
        Function.prototype.subscribe = function(publish) {
            var sub = this; // 当前订阅者这个人
            // 1. publish.subscribers 中，名字可能重复
            // 2. publish.subscribers 数组里面已有的人，不能再次订阅
            var alreadyExists = publish.subscribers.some(function(item) {
                return item === sub;
            })
            // 如果出版社名单中没有这个人，则加入进去
            if (!alreadyExists) publish.subscribers.push(sub);
            
            return this; // 方便链式调用
        }
        
        
        // 取消订阅
        Function.prototype.unsubscribe = function(publish) {
            var sub = this;
            // filter (过滤函数:循环便利数组的每一个元素，执行一个函数如果不匹配，则删除该元素)
            publish.subscribers = publish.subscribers.filter(function(item){
                return item !== sub ;
            });
            return this; // 方便链式调用
        }   
            </pre>
            <pre>
        // 实例化发布者对象(报社)
        var pub1 = new Publish('报社一');

        // 定义观察者，当报社有了新的消息后，观察者会收到通知
        // 本例中以观察者的行为代替观察者对象，模拟 addEventListener
        var sub1 = function (news, pub) {
            console.log(arguments);
            document.getElementById('sub1').innerHTML += pub.name + news + '\n';
        }
        
        // 执行订阅方法，这一步是观察者主动
        sub1.subscribe(pub1).subscribe(pub2);
        
        --------------------- 分割线 ---------------------
        var p1 = document.getElementById('pub1');  // dom
        
        // 事件绑定, 触发 报社 的消息分发
        p1.onclick = function() {
            pub1.deliver(document.getElementById('text1').value, pub1);
        }
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name:"example",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'发布订阅',id:'observers'},
                    {name:'ES5方法实现',id:'Subject'},
                ]
            }
        }
    }
</script>

