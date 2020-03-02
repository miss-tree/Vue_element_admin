<template>
    <div>
        <div>
            <h5>action</h5>
            <p>
                action是vuex的异步 mutations，异步更新state。
                使用方法是在action处理一个promise事件，将返回的值
                调用 mutations 中的方法改变state。
            </p>
            <pre>
        const store = new Vuex.Store({
            state: {
                count: 0
            },
            mutations: {
                increment (state) {
                state.count++
                }
            },
            actions: {
                increment (context) {
                context.commit('increment')
                }
                /*简写
                increment ({commit}) {
                    commit('increment')
                }
                */
            }
        })
        
        components
        methods: {
            handle() {
                store.dispatch('increment',newVal)
                /*以载荷形式分发
                store.dispatch('incrementAsync', {
                    amount: 10
                })
                store.dispatch({以对象形式分发
                    type: 'incrementAsync',
                    amount: 10
                })
                */
            },
        }
            </pre>
        </div>
        <div>
            <h5>批量使用Vuex的getter属性取别名并使用</h5>
            <pre>
        import { mapActions } from 'vuex'
        export default {
            // ...
            methods: {
                ...mapActions([
                    'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
                    // `mapActions` 也支持载荷：
                    'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
                ]),
                ...mapActions({
                    add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
                })
            }
        }
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"action",
}
</script>

