<template>
    <div>
        <div>
            <h4>组件关系</h4>
            <p>
                不同组件之间有不同的关系，可能是父子、兄弟、祖先、子孙。
                这时候我们就要根据不同的关系绑定联系，绑定事件和数据。
        <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/relations.html" target="_blank">更多详情</a>
            </p>
        </div>
        <div>
            <h5>父子关系</h5>
            <pre>
        &lt;custom-ul&gt;
        &lt;custom-li&gt; item 1 &lt;/custom-li&gt;
        &lt;/custom-ul&gt;   

        // path/to/custom-ul.js
        Component({
            relations: {
                './custom-li': {
                type: 'child', // 关联的目标节点应为子节点
                linked: function(target) {
                    // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
                },
                linkChanged: function(target) {
                    // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
                },
                unlinked: function(target) {
                    // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
                }
                }
            },
            methods: {
                _getAllLi: function(){
                // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
                var nodes = this.getRelationNodes('path/to/custom-li')
                }
            },
            ready: function(){
                this._getAllLi()
            }
        })     

        // path/to/custom-li.js
        Component({
            relations: {
                './custom-ul': {
                type: 'parent', // 关联的目标节点应为父节点
                linked: function(target) {
                    // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
                },
                linkChanged: function(target) {
                    // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
                },
                unlinked: function(target) {
                    // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
                }
                }
            }
        })
            </pre>
            <div>
               relations下的type可选 parent 、 child 、 ancestor 、 descendant。更多请查看
               <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/relations.html#relations%20%E5%AE%9A%E4%B9%89%E6%AE%B5" target="_blank">文档</a>
            </div>
        </div>
        <div>
            <h5>2018年前组件使用方式</h5>
            <p>
                现在的文档和之前学习时方法不同，之前组件可以直接调用到使用界面，不用直接在 json 文件配置
            </p>
            <pre v-pre>
        &lt;view&gt;        
            &lt;import src="./lunbo"/&gt;
            &lt;template is="lunbo" data="{{indicatorDots,autoplay,interval,imgUrls,duration}}"/&gt;

            &lt;import src="./components/module/mokuai"/&gt;  
            &lt;template is="mokuai"/&gt;
        &lt;/view&gt;      
        直接  import 引用组件，再用 template 以 is 的方式调用组件，组件名即引用的文件名
        定义传递的数据直接在标签  data="{{indicatorDots,autoplay,interval,imgUrls,duration}}"，直接使用变量
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"relations",
}
</script>

