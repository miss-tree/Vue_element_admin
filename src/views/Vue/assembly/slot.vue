<template>
    <div>
        <div>
            <h5>slot 插槽</h5>
            <p>
                插槽的作用是主要给子组件在希望定义的地方添加内容，在调用子组件的时候。

            </p>
            <pre>
        父组件调用        
        &lt;component-a&gt;
            hello 
        &lt;component-a&gt;  

        &lt;div&gt;
            &lt;head&gt;开始&lt;/head&gt;
           &lt;div&gt;&lt;slot /&gt; &lt;/div&gt;  
            &lt;footer&gt; evrybody&lt;/footer&gt;
        &lt;/div&gt;

        渲染出来的效果
        &lt;div&gt;
            &lt;head&gt;开始&lt;/head&gt;
            &lt;div&gt;hello &lt;/div&gt;  
            &lt;footer&gt; evrybody&lt;/footer&gt;
        &lt;/div&gt;
            </pre>
        </div>
        <div>
            <h5>具名插槽</h5>
            <div>当需要在子组件调用多处插槽的时候，就需要在组件定义插槽的 name 属性</div>
            <pre>
        子组件
        &lt;div class="container"&gt;
            &lt;header&gt;
                &lt;slot name="header"&gt;&lt;/slot&gt;
            &lt;/header&gt;
            &lt;main&gt;
                &lt;slot&gt;&lt;/slot&gt;
            &lt;/main&gt;
            &lt;footer&gt;
                &lt;slot name="footer"&gt;&lt;/slot&gt;
            &lt;/footer&gt;
        &lt;/div&gt;   

        父组件调用
        &lt;base-layout&gt;
            &lt;template v-slot:header&gt;
                &lt;h1&gt;Here might be a page title&lt;/h1&gt;
            &lt;/template&gt;
            &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
            &lt;p&gt;And another one.&lt;/p&gt;
            &lt;template v-slot:footer&gt;
                &lt;p&gt;Here's some contact info&lt;/p&gt;
            &lt;/template&gt;
        &lt;/base-layout&gt;   
        父组件调用中没定义的就是默认插槽,具名插槽跟 v-on 和 v-bind 一样，都有缩写。
        v-slot:header  =>  #header
            </pre>
        </div>
        <div>
             <h5>插槽作用域</h5>   
             <div>这个用的还是比较少</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"passVal",
}
</script>

