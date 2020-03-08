<template>
    <div>
        <div>
            <h5 >使用WePY</h5>
            <span>
                小程序入口app.wpy：
            </span>
            <pre>
        import wepy from 'wepy';
        export default class extends wepy.app {
            config = {
                "pages":[
                    "pages/index/index"
                ],
                "window":{
                    "backgroundTextStyle": "light",
                    "navigationBarBackgroundColor": "#fff",
                    "navigationBarTitleText": "WeChat",
                    "navigationBarTextStyle": "black"
                }
            };
            onLaunch() {
                console.log(this);
            }
        }        
            </pre>
            <span>page.wepy</span>
            <pre>
        &lt;script&gt;
            import wepy from 'wepy';
            import Counter from '../components/counter';

            export default class Page extends wepy.page {
                config = {};
                components = {counter1: Counter};

                data = {};
                methods = {};
                events = {};
                mixins = [];  // 声明页面所引用的Mixin实例
                computed = {};  // 声明<a href="#/wechat/frame/wepycomputed">计算属性</a>
                watch = {};  // 声明数据watcher
                onLoad() {};
                // Other properties
            }
        &lt;/script&gt;

        &lt;template lang="wxml"&gt;
            &lt;view&gt;
                &lt;counter1&gt;&lt;/counter1&gt;
            &lt;/view&gt;
        &lt;/template&gt;        
            </pre>
        </div>
        <div>
            <h5>组件的循环渲染</h5>
            <span>当需要循环渲染WePY组件时(类似于通过wx:for循环渲染原生的wxml标签)，必须使用WePY定义的辅助标签&lt;repeat&gt;，代码如下：</span>
            <pre v-pre>
        &lt;template&gt;        
        注意，使用for属性，而不是使用wx:for属性 
        &lt;repeat for="{{list}}" key="index" index="index" item="item"&gt;
                插入&lt;script&gt;脚本部分所声明的child组件，同时传入item 
            &lt;child :item="item"&gt;&lt;/child&gt;
        &lt;/repeat&gt;

        js
        import wepy from 'wepy';
        // 引入child组件文件
        import Child from '../components/child';
        export default class Index extends wepy.page {
            components = {
                // 声明页面中要使用到的Child组件的ID为child
                child: Child
            }

            data = {
                list: [{id: 1, title: 'title1'}, {id: 2, title: 'title2'}]
            }
        }
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"useWePY",
}
</script>

