<template>
    <div>
        <div>
            <h5>样式绑定</h5>
            <div>对象语法</div>
            <pre>
        &lt;span v-bind=style="fontsize"&gt;hello world&lt;/span&gt;       
        等价=>  &lt;span :style="fontsize"&gt;hello world&lt;/span&gt; 
        &lt;div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"&gt;&lt;/div&gt;

        a标签锚点跳转
        &lt;a href="'#'+getID" :title="title"&gt;&lt;/div&gt;

        ...
        data:{
            fontsize:{
                color:"#000",
            },
            title:"hello",
            activeColor: 'red',
            fontSize: 30
            },   
        ...       
            </pre>
            <div>数组语法</div>
            <pre>
        &lt;div v-bind:style="[baseStyles, overridingStyles]"&gt;&lt;/div&gt;  

        data:{
            baseStyles:{
                font-size:'16px',
            },
            overridingStyles: {font-weigth:'bold'},
            },       
            </pre>
        </div>
        <div>
            <h5>类名绑定</h5>
            <div>对象语法</div>
            <pre>
        &lt;div v-bind:class="{ active: isActive }"&gt;&lt;/div&gt;,
        &lt;div :class="{ active: isActive, 'text-danger': hasError }"&gt;&lt;/div&gt;,
        渲染结果    
        &lt;div class="active"&gt;&lt;/div&gt;  

        &lt;div v-bind:class="classObject"&gt;&lt;/div&gt;,

        data:{
            isActive:true,
            hasError: false,
            classObject:{active:true,text-danger:false}
            },       
            </pre>
            <div>数组语法</div>
            <pre>
        &lt;div v-bind:class="[activeClass, errorClass]"&gt;&lt;/div&gt;

        根据数据显示多个不同类名
        &lt;div v-bind:class="[color!==3 ? 'green':'', color > 3 ? 'red':'',color< 3 ? 'blue':'', errorClass]"&gt;&lt;/div&gt;

        data:{
            activeClass: 'active',
            errorClass: 'text-danger',
            color：7，
            },         
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"styleclass"
}
</script>

