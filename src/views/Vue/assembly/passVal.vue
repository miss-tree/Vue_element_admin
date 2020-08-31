<template>
    <div>
        <location :list='list'/>
        <div>
            <h3>组件传值</h3>
            <p>组件传值有多种，其中先说vue官方推荐的传值方式</p>
        </div>
        <div>
            <h4 id="props">props</h4>
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
            <p>
                优雅更新props：有时候通过事件只是简单的传值不需要更新父组件其他事件，
                可以通过model方式和.sync方式，下面先讲述.sync方式
            </p>
            <pre>
        parent.vue:
        &lt;child :title.sync="title"&gt;&lt;/child&gt;

        child.vue:
        export defalut {
            props: {
                title: String  
            },
            methods: {
                changeTitle(){
                    this.$emit('update:title', 'hello')
                }
            }
        }
        
        此方式只需要在子组件内更新即可，在子组件内部就可以触发 update:属性名 来更新 prop。
        可以看到这种手段确实简洁且优雅，这让父组件的代码中减少一个“没必要的函数”。
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
        <attrs id="listeners" @click="handleEvent"/>
        <provide id="provide"/>
        <ref/>
        <div>
            <h4 id="bus">兄弟组件通信</h4>
            <p>
                主要解决root根组件下的所有组件相互通信问题，
                把发布和订阅的方法挂载到vue的原型上，
                实现一个全局的监听事件(观察者)，就可以跨组件去通讯了(不能跨页面)。
            </p>
            <pre>
        main.js
        const Bus=new Vue()    Vue.prototype.Bus=Bus
        =>    Vue.prototype.Bus=new Vue()

        组件传值
        组件传值：Bus.$emit("EventName",function/Value)
        兄弟组件接收值：Bus.$on("EventName",function/Value)

        组件事件传递
        组件传递事件：Bus.$emit("EventName")
        兄弟组件接收事件：Bus.$on("EventName",()=>{
            this.handler()
        })

            </pre>
        </div>
        <div>
            <h5 id="model">model传值</h5>
            <p>model传值有一个好处就是父子组件相互传值互相改变，
                不需要向父组件传递事件</p>
            <pre>
        // 父组件
        &lt;model-input v-model="isChecked"&gt;&lt;/model-input&gt;

        // script
        data() {
            return {
                isChecked: false
            }
        },


        // 子组件
        &lt;input
        type="checkbox"
        v-bind:checked="checked"
        @change="$emit('change', $event.target.checked)"
        &gt;
        // script
        export default {
            name: 'ModelInput',
            // v-model 拆分
            model: {
                prop: 'checked', // 将传进来的 isChecked 变成 checked 供后面的 props 使用
                event: 'change' //  定义 emit 自定义的事件名字
            },
            props: {
                checked: {
                    type: Boolean
                }
            }
        }
            </pre>
        </div>
        <div>
            <h5 id="other">其他组件传值方式</h5>
            <div>
                小型状态管理器
            </div>
            <pre>
        // store.js
        import Vue from 'vue'

        export const state = Vue.observable({ 
            count: 0 
        })
        export const mutations = {
            SET_COUNT(payload) {
                if (payload &gt; 0) {
                    state.count = payload
                } 
            }
        }

        &lt;div @click="setCount"&gt;{ { count } }&lt;/div&gt;
        import {state, mutations} from '../store.js'
        export default {
            computed: {
                count() {
                    return state.count
                }
            },
            methods: {
                setCount() {
                    mutations.SET_COUNT(100)
                }
            }
        }

            </pre>
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
    components:{
        attrs,provide,ref,
        location:()=>import('@/components/location/index')
    },
    data(){
        return {
            list:[
                {name:'props',id:'props'},
                {name:'$attrs与$listeners',id:'listeners'},
                {name:'provide/inject',id:'provide'},
                {name:'兄弟通信bus',id:'bus'},
                {name:'model传值',id:'model'},
                {name:'其他组件传值方式',id:'other'},
            ]
        }
    },
    methods:{
        handleEvent(){
            console.log('父组件方法');
        }
    }
}
</script>

