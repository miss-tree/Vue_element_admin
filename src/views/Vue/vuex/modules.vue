<template>
    <div>
        <div>
            <h5>modules</h5>
            <p>
                getter相当于是Vuex的computed属性。
            </p>
            <pre>
        store/index.js        
        import Vue from 'vue'
        import Vuex from 'vuex'
        import getters from './getters'

        Vue.use(Vuex)
        引入所有模块
        const modulesFiles = require.context('./modules', true, /\.js$/)
        // set './app.js' => 'app'
        const modules = modulesFiles.keys().reduce((modules, modulePath) => {
            const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
            const value = modulesFiles(modulePath)
            modules[moduleName] = value.default
            return modules
        }, {})

        const store = new Vuex.Store({
            modules,    
            getters
        })
        export default store

        store/module/moduleA.js 
        const state={
            //...
        }
        const getters={
            //...
        }
        const mutations={
            //...
        }
        const actions={
            //...
        }
        export default{
            state, getters, mutations, actions
        }
            </pre>
        </div>
        <div>
            <h5>在模块中，getter和mutation接收的第一个参数state，是全局的还是模块的?</h5>
            <ul>
                <li>在getter中可以通过第三个参数rootState访问到全局的state,可以通过第四个参数rootGetters访问到全局的getter。</li>
                <li>在mutation中不可以访问全局的satat和getter，只能访问到局部的state。</li>
                <li>在action中第一个参数context中的context.rootState访问到全局的state，context.rootGetters访问到全局的getter。</li>
            </ul>
        </div>
        <div>
            <h5>用过Vuex模块的命名空间吗？为什么使用，怎么使用。</h5>
            <p>
                默认情况下，模块内部的action、mutation和getter是注册在全局命名空间，
                如果多个模块中action、mutation的命名是一样的，那么提交mutation、action时，
                将会触发所有模块中命名相同的mutation、action。
                如果要使你的模块具有更高的封装度和复用性，你可以通过添加namespaced: true 的方式使其成为带命名空间的模块。
            </p>
            <pre>
        ...
        export default{
           namespaced: true, state, getters, mutations, actions
        }        

            </pre>
        </div>
        <div>
            <h5>组件中怎么提交modules中的带命名空间的moduleA中的mutationA？</h5>
            <pre>
        this.$store.commit('moduleA/mutationA',data)     
            </pre>
        </div>
        <div>
            <h5>怎么在带命名空间的模块内注册全局的action？</h5>
            <pre>
        actions: {
            actionA: {
                root: true,
                handler (context, data) { ... }
            }
        }        
            </pre>
        </div>
        <div>
            <h5>使用mapState，mapGetters，mapActions和mapMutations这些函数来绑定带命名空间的模块？</h5>
            <pre>
        import { createNamespacedHelpers } from 'vuex';
        const { mapState, mapActions } = createNamespacedHelpers('moduleA');
        export default {
            computed: {
                // 在 `module/moduleA` 中查找
                ...mapState({
                    a: state => state.a,
                    b: state => state.b
                })
            },
            methods: {
                // 在 `module/moduleA` 中查找
                ...mapActions([
                    'actionA',
                    'actionB'
                ])
            }
        }
        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"modules",
}
</script>

