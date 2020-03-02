<template>
    <div>
        <div>
            <h5>模拟发布订阅</h5>
            <pre>
        &lt;foo /&gt;      &lt;bar /&gt;  

        数据中转站
        var Strore={
            dingyue:["getHtitle"],
            $emit(dispath,value){
                this.dingyue.forEach((ele)=>{
                    if(ele.dispath==dispath){
                        ele.callback(value);
                    }
                })
            },
            $on(dispath,callback){
                var obj={};
                obj.dispath=dispath;
                obj.callback=callback;
                this.dingyue.push(obj);
            }
        };

        Vue.component("foo",{//发布
            mounted(){
                Strore.$emit("getHtitle",this.htitle)
            },
            data(){
                return{ htitle:"htitle",}
            },
            template:" &lt;div&gt;&lt;input type='text' :value='htitle' /&gt;&lt;/div&gt;",
        });

        Vue.component("bar",{//订阅
            create(){
                Strore.$on("getHtitle",(v)=&gt;{
                    this.d=v;
                })
            },
            data(){
                return{d:"", }
            },
            template:" &lt;div&gt;从外部接收的数据：{{d}}&lt;/div&gt;",
        });

        var app=new Vue({
            el:"#app",
            data:{
            }
        })
            </pre>
        </div>
        <div>
            <h5>模拟Vuex</h5>
            <pre>
        熟悉VueX流程,如果不用VueX,我们可以实现一个store模型
        &lt;div ref="A"&gt;组件A&lt;/div&gt;
		&lt;div ref="B"&gt;组件B&lt;/div&gt;
		&lt;div ref="C"&gt;&lt;/div&gt;

        var store={
            state:{
                toC:""
            },
            内部方法,不允许外界主动调用
            mutation:{
                setToc(newValue){
                    store.state.toC=newValue
                }
            },
            commit:function(type,newValue){
                store.mutation.setToc(newValue)
            }
        };        
        将组件A的值传给组件C(store.commit方法)
        store.commit("setToc",this.refs.b.innerHTML);
        数据单向流原则
        this.refs.c.innerHTML=store.state.toC;
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"simulation",
}
</script>

