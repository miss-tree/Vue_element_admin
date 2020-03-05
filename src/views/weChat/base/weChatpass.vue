<template>
    <div>
        <div>
            <h4>组件传值</h4>
            <p>
                小程序组件传值有两种方式，第一种是直接在子组件标签定义值，
                子组件通过 properties 获取传递的值，然后通过事件将要传的值传到父组件上。
                另一种方法是父组件还可以通过 this.selectComponent 方法获取子组件实例对象，
                这样就可以直接访问组件的任意数据和方法。 这种方法类似 this.refs 方法获取方法和数据。
            </p>
        </div>
        <div>
            <h5>标签传值</h5>
            <pre v-pre>
        &lt;!-- 当自定义组件触发“myevent”事件时，调用“onMyEvent”方法 --&gt;
        &lt;component-tag-name bindmyevent="onMyEvent" /&gt;
        &lt;!-- 或者可以写成 --&gt;
        &lt;component-tag-name bind:myevent="onMyEvent" /&gt;     

        Page({
            onMyEvent: function(e){
                e.detail // 自定义组件触发事件时提供的detail对象
            }
        })



        &lt;!-- 在自定义组件中 --&gt;
        &lt;button bindtap="onTap"&gt;点击这个按钮将触发“myevent”事件&lt;/button&gt;

        Component({
            properties: {},
            methods: {
                onTap: function(){
                    var myEventDetail = {} // detail对象，提供给事件监听函数
                    var myEventOption = {} // 触发事件的选项
                    this.triggerEvent('myevent', myEventDetail, myEventOption)
                }
            },
        })
        通过this.triggerEvent()方法将事件订阅发布给父组件 myevent ，父组件通过 myevent事件获取值。
            </pre>
        </div>
        <div>
            <h5>this.selectComponent</h5>
            <pre>
        &lt;component-tag-name id="childComponent" bind:myevent="onMyEvent" /&gt; 

        Page({
            onReady:function(){
                this.starComment = this.selectComponent("#childComponent");
                console.log(this.starComment)
            }
        })

            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"weChatpass",
}
</script>
