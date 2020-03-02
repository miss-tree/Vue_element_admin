<template>
    <div>
        <div>
            <h5>install</h5>
            <p>
                场景:在 Vue.use()说到,
                执行该方法会触发 install 是开发vue的插件,
                这个方法的第一个参数是 Vue 构造器，
                第二个参数是一个可选的选项对象(可选)
            </p>
            <pre>
        var MyPlugin = {};
        MyPlugin.install = function (Vue, options) {
            // 2. 添加全局资源,第二个参数传一个值默认是update对应的值
            Vue.directive('click', {
            bind(el, binding, vnode, oldVnode) {
                //做绑定的准备工作,添加时间监听
                console.log('指令my-directive的bind执行啦');
            },
            inserted: function(el){
                //获取绑定的元素
                console.log('指令my-directive的inserted执行啦');
            },
            update: function(){
                //根据获得的新值执行对应的更新
                //对于初始值也会调用一次
                console.log('指令my-directive的update执行啦');
            },
            componentUpdated: function(){
                console.log('指令my-directive的componentUpdated执行啦');
            },
            unbind: function(){
                //做清理操作
                //比如移除bind时绑定的事件监听器
                console.log('指令my-directive的unbind执行啦');
            }
            })

            // 3. 注入组件
            Vue.mixin({
                created: function () {
                    console.log('注入组件的created被调用啦');
                    console.log('options的值为',options)
                }
            })

            // 4. 添加实例方法
            Vue.prototype.$myMethod = function (methodOptions) {
                console.log('实例方法myMethod被调用啦');
            }
        }

        //调用MyPlugin
        Vue.use(MyPlugin,{someOption: true })

        //3.挂载
        new Vue({
            el: '#app'
        });

            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"install",
}
</script>

