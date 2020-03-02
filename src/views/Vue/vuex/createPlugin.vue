<template>
    <div>
        <div>
            <h5>vuex插件</h5>
            <pre>
        store/plugin.js            
        export default function createPlugin(param){
            return store =>{
                //...
            }
        }        

        store/index.js
        import createPlugin from './plugin.js'
        const myPlugin = createPlugin()
        const store = new Vuex.Store({
            // ...
            plugins: [myPlugin]
        })

            </pre>
        </div>
        <div>
            <h5>在Vuex插件中怎么监听组件中提交mutation和action？</h5>
            <pre>
        store/plugin.js
        export default function createPlugin(param) {
            return store => {
                store.subscribe((mutation, state) => {
                    console.log(mutation.type)//是那个mutation
                    console.log(mutation.payload)
                    console.log(state)
                })
                // store.subscribeAction((action, state) => {
                //     console.log(action.type)//是那个action
                //     console.log(action.payload)//提交action的参数
                // })
                store.subscribeAction({
                    before: (action, state) => {//提交action之前
                        console.log(`before action ${action.type}`)
                    },
                    after: (action, state) => {//提交action之后
                        console.log(`after action ${action.type}`)
                    }
                })
            }
        }
        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"createPlugin",
}
</script>

