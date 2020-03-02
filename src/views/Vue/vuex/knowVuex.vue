<template>
    <div>
        <div>
            <h5>认识vuex</h5>
            <p>
                Vuex 是一个专为 Vue.js 应用程序开发的状态管理插件。
                它采用集中式存储管理应用的所有组件的状态，而更改状态的唯一方法是提交mutation，
                例this.$store.commit('SET_VIDEO_PAUSE', video_pause)，
                SET_VIDEO_PAUSE为mutations属性中定义的方法。
            </p>
            <div>
                Vuex的5个核心属性是:state、getters、mutations、actions、modules 。
            </div>
            <pre>
        import Vue from 'vue'
        import Vuex from 'vuex'
        import permission from './permission'

        Vue.use(Vuex)
        export default new Vuex.Store({
            modules: {
                permission,
            },
            state: {
                title:'hello world',
                number:66,
            },
            getters:{
                ...
            },
            mutations: {
                setTitle(state, payload) {
                    state.title = payload.title;
                },
                SET_NUMBER(state, payload){
                    state.number = payload.number;
                }
            },
            actions: {
                ...
            },
        })
            </pre>
        </div>
        <div>
            <h5>改变Vuex的state值</h5>
            <div class="G_red">mutation 必须是同步函数</div>
            <pre>
        this.$store.commit('SET_NUMBER',10)
            </pre>
        </div>
        <div>
            <h5>在组件中多次提交同一个mutation</h5>
            <pre>
        import { mapMutations } from 'vuex'
        methods:{
            ...mapMutations([
                'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
                // `mapMutations` 也支持载荷：
                'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
            ]),
            ...mapMutations({
                setNumber:'SET_NUMBER',// 将 `this.setNumber()` 映射为 `this.$store.commit('SET_NUMBER')`
            })
        }

            </pre>
        </div>
        <div>
            <h5>批量使用Vuex的state状态</h5>
            <pre>
        import {mapState} from 'vuex'
        export default{
            computed:{
                ...mapState(['price','number'])
            }
        }
            </pre>
        </div>
        <div>
            <h5>批量使用Vuex的state状态</h5>
            <pre>
        import {mapState} from 'vuex'
        export default{
            computed:{
                ...mapState(['price','number'])
            }
        }
            </pre>
        </div>
        <div>
            <h5>在v-model上怎么用Vuex中state的值？</h5>
            <pre>
        &lt;input v-model="message"&gt;
        // ...
        computed: {
            message: {
                get () {
                    return this.$store.state.message
                },
                set (value) {
                    this.$store.commit('updateMessage', value)
                }
            }
        }
            </pre>
        </div>
        <div>
            <h5>Vuex的严格模式是什么,有什么作用,怎么开启？</h5>
            <p>
                在严格模式下，无论何时发生了状态变更且不是由 mutation函数引起的，
                将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
            </p>
            <pre>
        const store = new Vuex.Store({
            strict:true,
        })
            </pre>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"knowVuex",
}
</script>

