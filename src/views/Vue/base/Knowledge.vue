<template>
    <div>
        <div>
            <h5>vue 保留注释</h5>
            <pre>
        &lt;template components&gt;
            &lt;!-- 注释 --&gt;
        &lt;/template&gt;        
            </pre>
        </div>
        <div>
            <h5>箭头函数</h5>
            <div class="G_line">
                <div>
                    <span class="G_line_l">this指向 undefined </span>
                    <span class="G_line_r">=> <span class="G_space"/> webpack 环境下 </span>
                </div>
                <div>
                    <span class="G_line_l">this指向 window </span>
                    <span class="G_line_r">=> <span class="G_space"/> vue.js 引入 </span>
                </div>
            </div>
        </div>
        <div>
            <h5>自定义事件无效</h5>
            <pre>
        &lt;news @click.navtive="handl()"&gt;
            给组件外部加修饰符 .navtive
        &lt;/news&gt;        

        组件内部使用父子组件传值方式
        this.$emit("changeVal",newVal)
            </pre>
        </div>
        <div>
            <h5>清除组件内定时器</h5>
            <pre>
        cost timer=setInterval(()=>{
           ...code...
        },5000)

        通过$once来监听定时器，在beforeDestory钩子可以被清除
        vm.$once : 监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。
        this.$once("hook:beforeDestory",()=>{
            clearInterval(timer)
        })
            </pre>
        </div>
        <div>
            <h5>vm.$forceUpdate()</h5>
            <div>迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。</div>
            <div>在methods方法里写某些方法后直接调用 this.$forceUpdate()</div>
        </div>
        <div>
            <h5>v-pre/v-once</h5>
            <p>
                v-pre场景:vue 是响应式系统,但是有些静态的标签不需要多次编译,这样可以节省性能。
                v-once场景:有些 template 中的静态 dom 没有改变,这时就只需要渲染一次,可以降低性能开销
            </p>
            <pre>
        &lt;span v-pre&gt;{ this will not be compiled }&lt;/span&gt;   显示的是{ this will not be compiled }
        &lt;span v-pre&gt;{msg}&lt;/span&gt;     即使data里面定义了msg这里仍然是显示的{msg}
        
        &lt;span v-once&gt; 这时只需要加载一次的标签&lt;/span&gt;		
            </pre>
            <div class="G_red">
        v-once 和 v-pre 的区别: v-once只渲染一次；v-pre不编译,原样输出        
            </div>
        </div>
        <div>
            <h5>v-cloak</h5>
            <p>
                场景:在网速慢的情况下,在使用vue绑定数据的时候，渲染页面时会出现变量闪烁
                用法:这个指令保持在元素上直到关联实例结束编译。
                和 CSS 规则如 [v-cloak] { display: none } 一起用时，
                这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕
            </p>
            <pre>
        // template 中
        &lt;div class="#app" v-cloak&gt;
            &lt;p&gt;{value.name}&lt;/p&gt;
        &lt;/div&gt;

        // css 中
        [v-cloak] {
            display: none;
        }        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"Knowledge",
}
</script>

