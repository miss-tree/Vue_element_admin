<template>
    <div>
        <div>
            <h4>类似Vue 的 Mixins</h4>
            <p>
                小程序也可以将数据和方法分离出来封装，在需要的组件调用。
                这就跟Vue的mixins很相似，简化组件，降低耦合达到高复用性能。
            </p>
        </div>
        <div>
            <h5>Behaviors</h5>
            <pre>
        // my-behavior.js
        module.exports = Behavior({
            data: {
                sharedText: 'This is a piece of data shared between pages.'
            },
            methods: {
                sharedMethod: function() {
                this.data.sharedText === 'This is a piece of data shared between pages.'
                }
            }
        })     

        // page-a.js
        var myBehavior = require('./my-behavior.js')
        Page({
            behaviors: [myBehavior],
            onLoad: function() {
                this.data.sharedText === 'This is a piece of data shared between pages.'
            }
        })   
            </pre>
        </div>
        <div>
            <h5>Component</h5>
            <p>
                小程序的一个构造器，类似vue的Vue.extend()方法构建一个自定义组件。
                但是小程序相对麻烦一点，不能一下注册直接使用
                首先将组件文件夹内的 json文件内修改，声明定义一个自定义组件。
            </p>
            <pre>
        {
            "component": true
        }
            </pre>
            <pre v-pre>
        这是自定义组件的内部WXML结构
        &lt;view class="inner"&gt;
            {{innerText}}
        &lt;/view&gt;
        &lt;slot&gt;&lt;/slot&gt;   

        Component({
            properties: {
                // 这里定义了innerText属性，属性值可以在组件使用时指定
                innerText: {
                type: String,
                value: 'default value',
                }
            },
            data: {
                // 这里是一些组件内部数据
                someData: {}
            },
            methods: {
                // 这里是一个自定义方法
                customMethod: function(){}
            }
        })  
            </pre>
            <div>在其他组件内使用前要在使用组件的 json文件内修改，声明引用一个自定义组件。</div>
            <pre>
        使用组件的 json 文件        
        {
            "usingComponents": {
                "component-tag-name": "path/to/the/custom/component"
            }
        }     

        wxml 
        &lt;view&gt;
            &lt;!-- 以下是对一个自定义组件的引用 --&gt;
            &lt;component-tag-name inner-text="Some text"&gt;&lt;/component-tag-name&gt;
        &lt;/view&gt;  
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"weChatMinxins",
}
</script>


