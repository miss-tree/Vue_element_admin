<template>
    <div>
        <div>
            <h5>生命周期</h5>
            <p>
                vue在生命周期每个阶段都会处理不同的事件，下面先了解各个阶段
            </p>
            <ul>
                <li>
                    beforeCreate:在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
                </li>
                <li>
                    created:在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，
                    属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前尚不可用。
                    <div>
                        在此阶段初始化了inject、provide、props、methods、data、computed和watch。
                    </div>
                </li>
                <li>
                    beforeMount:在挂载开始之前被调用：相关的 render 函数首次被调用。
                    该钩子在服务器端渲染期间不被调用。
                </li>
                <li>
                    mounted:实例被挂载后调用, 不会保证所有的子组件也都一起被挂载。
                    该钩子在服务器端渲染期间不被调用。
                </li>
                <li>
                    beforeUpdate:数据更新时调用，该钩子在服务器端渲染期间不被调用，
                    因为只有初次渲染会在服务端进行。
                </li>
                <li>
                    updated:当这个钩子被调用时，组件 DOM 已经更新, 
                    不会保证所有的子组件也都一起被重绘。
                    该钩子在服务器端渲染期间不被调用。
                </li>
                <li>
                    activated:被 keep-alive 缓存的组件激活时调用。
                    该钩子在服务器端渲染期间不被调用。
                </li>
                <li>
                    deactivated:被 keep-alive 缓存的组件停用时调用。
                    该钩子在服务器端渲染期间不被调用。
                </li>
                <li>
                    beforeDestroy:实例销毁之前调用。在这一步，实例仍然完全可用。
                    该钩子在服务器端渲染期间不被调用。
                </li>
                <li>
                    destroyed:实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，
                    所有的事件监听器被移除，所有的子实例也都被销毁。
                        该钩子在服务器端渲染期间不被调用。
                </li>
                <li>
                    errorCaptured:当捕获一个来自子孙组件的错误时被调用。
                </li>
            </ul>
        </div>
        <div>
            <h5>父组件和子组件生命周期钩子执行顺序</h5>
            <p>
                父组件挂载完成必须是等到子组件都挂载完成之后，才算父组件挂载完，
                所以父组件的mounted肯定是在子组件mounted之后
            </p>
            <div>
                So：「父」beforeCreate → 「父」created → 「父」beforeMount → 「子」beforeCreate → 
                「子」created → 「子」beforeMount → 「子」mounted → 「父」mounted
            </div>
            <ul>
                <li>
                   子组件更新过程（取决于对父组件是否有影响）
                   <div>
                       影响到父组件： 「父」beforeUpdate → 「子」beforeUpdate → 「子」updated → 「父」updated
                    </div> 
                    <div>
                        不影响父组件： 「子」beforeUpdate → 「子」updated
                    </div>
                </li>
                <li>
                    父组件更新过程（取决于对子组件是否有影响）
                    <div>
                        影响到子组件： 「父」beforeUpdate → 「子」beforeUpdate → 「子」updated → 「父」updated
                    </div>
                    <div>
                        不影响子组件： 「父」beforeUpdate → 「父」updated
                    </div>
                </li>
                <li>
                    销毁过程
                    <div>
                        「父」beforeDestroy → 「子」beforeDestroy → 「子」destroyed → 「父」destroyed
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <h5>Vue在created和mounted这两个生命周期中请求数据有什么区别呢？</h5>
            <p>
                在created中，页面视图未出现，如果请求信息过多，页面会长时间处于白屏状态，
                DOM节点没出来，无法操作DOM节点。在mounted不会这样，比较好。
            </p>
        </div>
        <div>
            <h5>父组件可以监听到子组件的生命周期</h5>
            <pre>
        // Parent.vue
        &lt;Child @mounted="doSomething"/&gt;	
            
        // Child.vue
        mounted() {
            this.$emit("mounted");
        }
            </pre>
            <p>
                以上需要手动通过 $emit 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：
            </p>
            <pre>
        //  Parent.vue
        &lt;Child @hook:mounted="doSomething" &gt;&lt;/Child&gt;

        doSomething() {
            console.log('父组件监听到 mounted 钩子函数 ...');
        },
            
        //  Child.vue
        mounted(){
            console.log('子组件触发 mounted 钩子函数 ...');
        },    
            
        // 以上输出顺序为：
        // 子组件触发 mounted 钩子函数 ...
        // 父组件监听到 mounted 钩子函数 ...     
        
            </pre>
        </div>
        <div>
            <img src="@/assets/lifecycle.png" alt="" style="width:80%">
            <img src="@/assets/lifecycle.jpg" alt="" style="width:80%">
        </div>
    </div>
</template>

<script>
export default {
    name:"passVal",
}
</script>

