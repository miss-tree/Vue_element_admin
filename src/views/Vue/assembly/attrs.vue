<template>
  <div>
      <div>
            <h4>$attrs与$listeners</h4>
            <div>$attrs是跨级获取值，$listeners是跨级获取事件方法</div>
            <p>
                $attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。
                当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，
                并且可以通过 v-bind="$attrs" 传入内部组件。
                通常配合 interitAttrs 选项一起使用。
            </p>
            <p>
                $listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。
                它可以通过 v-on="$listeners" 传入内部组件,跟$attrs一样，需要在组件上一个个传递下去。
            </p>
            <pre>
        &lt;template&gt;
            &lt;div&gt;
                &lt;child-com1
                :foo="foo"
                :boo="boo"
                :coo="coo"
                :doo="doo"
                title="前端工匠"
                @passEvent='handle'
                &gt;&lt;/child-com1&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        data() {
            return {
            foo: "Javascript",
            boo: "Html",
            coo: "CSS",
            doo: "Vue"
            };
        },
        methods:{
            handle(){
                console.log('父组件方法')
            }
        }
        
        
        // childCom1.vue
        &lt;template class="border"&gt;
            &lt;div&gt;
                &lt;p&gt;foo: { { foo } }&lt;/p&gt;
                &lt;child-com2 v-bind="$attrs"&gt;&lt;/child-com2&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        props: {
            foo: String // foo作为props属性绑定
        }, 
        created() {
            console.log(this.$attrs); // { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
        } 


        // childCom2.vue
        &lt;template&gt;
            &lt;div class="border"&gt;
                &lt;p&gt;boo: { { boo } }&lt;/p&gt;
                &lt;child-com3 v-bind="$attrs"  v-on="$listeners"&gt;&lt;/child-com3&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        props: {
            boo: String
        },


        // childCom3.vue
        &lt;template&gt;
            &lt;div class="border"&gt;
                &lt;p&gt; childCom3: { { $attrs } }&lt;/p&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        props: {
            coo: String,
            title: String
        },
        created() {
            console.log(this.$attrs); // { "doo": "Vue"}
            console.log(this.$listeners.passEvent()); // 父组件方法
        }        
            </pre>
            <div>
                <span class="red">注意</span>
                $attrs获取的数据是除props以外的数据传到子组件
            </div>
        </div>
        <last  v-on="$listeners"/>
  </div>
</template>
<script>
export default {
    components:{
        last:()=>import('./last')
    }
}
</script>
