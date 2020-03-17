<template>
    <div>
        <div>
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
    </div>
</template>

<script>
    export default {
        name:"example",
    }
</script>

