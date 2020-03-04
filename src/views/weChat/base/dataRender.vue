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
        用{}代替双胡子        
        &lt;view wx:for="{{array}}"&gt; {{item}}&lt;/view&gt;        
            </pre>
        </div>
        <div>
            <h5>条件渲染</h5>
            <pre v-pre>
        &lt;!--wxml--&gt;
        &lt;view wx:if="{{view == 'WEBVIEW'}}"&gt; WEBVIEW &lt;/view&gt;
        &lt;view wx:elif="{{view == 'APP'}}"&gt; APP &lt;/view&gt;
        &lt;view wx:else="{{view == 'MINA'}}"&gt; MINA &lt;/view&gt;        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"dataRender",
}
</script>
