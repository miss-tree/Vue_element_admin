<template>
    <div>
        <div>
            <h4>渲染</h4>
            <p>
                小程序渲染和vue渲染大致相同，只是在命名结构上有调整。
                数据绑定和Vue是一致的，都是双胡子语法，定义的data不一样，
                在page({})内定义data，但是data不需要返回一个函数，是一个对象
            </p>
        </div>
        <div>
            <h5>列表渲染</h5>
            <pre v-pre>
        用item内的序列号或id做key值，尽量避免使用 item 的index     
        &lt;view wx:for="{{array}}" wx:key="item.sku"&gt; {{item}}&lt;/view&gt;      
            </pre>
            <p>
                和vue一样，小程序根据key值渲染页面，可以根据数组的key值渲染，
                通过判断key值上的数据的增、删、改重新渲染数组key上的数据，
                而不用重新渲染整个数组。
            </p>
        </div>
        <div>
            <h5>条件渲染</h5>
            <pre v-pre>
        &lt;!--wxml--&gt;
        &lt;view wx:if="{{view == 'WEBVIEW'}}"&gt; WEBVIEW &lt;/view&gt;
        &lt;view wx:elif="{{view == 'APP'}}"&gt; APP &lt;/view&gt;
        &lt;view wx:else="{{view == 'MINA'}}"&gt; MINA &lt;/view&gt;     

        &lt;view hidden="{{ishidden}}"&gt; MINA &lt;/view&gt;   与v-show相反，true就隐藏。      
            </pre>
        </div>
        <div>
            <h5>性能优化</h5>
            <p>
                将列表渲染和条件渲染放到 &lt;block&gt; 内设定条件，更有利于
                页面的渲染。
            </p>
            <pre v-pre>
        &lt;block wx:for="{{array}}" wx:key="item.sku"&gt;         
            &lt;view&gt;
            {{item}}
            &lt;/view&gt;        
        &lt;/block&gt; 

        &lt;block hidden="{{ishidden}}"&gt;            
            &lt;view&gt; MINA &lt;/view&gt;  
        &lt;/block&gt;      
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"dataRender",
}
</script>
