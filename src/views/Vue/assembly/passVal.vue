<template>
    <div>
        <div>
            <h3>组件传值</h3>
            <p>组件传值有多种，其中先说vue官方推荐的传值方式</p>
        </div>
        <div>
            <h4>props</h4>
            <p>
                父组件通过在子组件定义数据和事件，子组件接收数据后更新数据，
                通过发布订阅模式将更新的值返回给父组件。</p>
            <pre>
        &lt;template&gt;
            &lt;div&gt;
                &lt;son v-on:updata="babaUpdata" :sonvalue="babaValue"&gt;&lt;/son&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        baba组件的data:{"babaValue",baba}
        son组件接收props:['sonvalue']
        son组件的template:"&lt;div&gt;&lt;input type='text'
                         :value='sonvalue' 
                         @input='sonUpdata'/&gt;&lt;/div&gt;"

        Vue单向数据流
        子组件通过props定义可接收的属性list
        父组件数据通过v-bind：list='父组件数据'，注入子组件中

        #子组件如何更新父组件的值
        要点：当子组件修改了父组件传进来的值后，需要派发一个"通知"，
            告诉父组件更新值，然后再重新注入到子组件中
        1.实例化子组件注入"自定义事件"      =>this.$emit("EventName",NewVal)
        子组件的属性/方法=父组件的属性/方法  (@sonEvent="fatherUpDate")  

        son组件内的methods:{
                    sonUpdata($event){
                        this.$emit('updata',$event.target.value)
                    }

        }

         baba组件内的methods:{
                    babaUpdata(newValue){
                        爸爸组件接收到子组件更新的值newValue
                        从而爸爸就可以更新自己的值，再从新注入到
                        子组件中。
                        this.Text=newValue;
                    }

        } 
            </pre>
            <div>
                其中子组件接收props按照vue风格指南是有要求的,大多数情况指定类型和默认值便可
            </div>
            <pre>
        ...
        props:{
            age:{
                type: Number,       //String|Number|Boolean|Array|Object|Date|Function|Symbol
                default: 0,         //any       默认值
                required: true,     //Boolean   是否必填
                validator: function (value) {//验证数据是否符合
                    return value >= 0
            }
        }    
        ...    
        不推荐写法:
        props:["age","name"]
            </pre>
        </div>
        <div>
            <h4>data需要返回return的原因</h4>
            <p>
                由于我们的组件的data需要像闭包一样，每一个组件都是一个对象，
				所以data就不能以对象的形式存在，以工厂订单形式存在，就可以形成
				状态共享，不影响每个单独按钮开关的状态
				每个组件都是独立的，这样每个组件的data才不会互相影响,不会污染全局。
            </p>
        </div>
        <attrs/>
        <provide/>
        <ref/>
        <div>
            <h4>兄弟组件通信</h4>
            <pre>
        main.js
        const Bus=new Vue()    Vue.prototype.Bus=Bus
        =>    Vue.prototype.Bus=new Vue()

        组件传值：Bus.$emit("EventName",function/Value)
        兄弟组件接收值：Bus.$on("EventName",function/Value)
            </pre>
        </div>
        <div>
            <h5>其他组件传值方式</h5>
            <ul>
                <li>Vuex 通过store.state存储值和获取值</li>
                <li>通过前端本地存储方式设置和获取，localstorge、cookies、session</li>
            </ul>
        </div>
    </div>
</template>

<script>
const attrs = () => import("./attrs.vue");
const provide = () => import("./provide.vue");
const ref = () => import("./ref.vue");
export default {
    name:"passVal",
    components:{attrs,provide,ref}
}
</script>

