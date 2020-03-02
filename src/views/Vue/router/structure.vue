<template>
    <div>
        <div>
            <h5>路由结构</h5>
            <p>

            </p>
            <pre>
        const routes = [
            { path: '/foo', component: Foo },
            { path: '/bar', component: Bar },
            { path: '*', redirect:{home:'404'} },//404页面放到底部
        ]

        const router = new VueRouter({
            mode:"hash",        hash|history
            scorllBehavior:(to,from,savedPosition){//滚动条位置
                if(savedPosition){//若是缓存的保持之前的位置
                    return savedPosition
                }else{//不是则回到顶部
                    return {x:0,y:0}
                }
            }
            routes: routes
        })

        // 4. 创建和挂载根实例。
        // 记得要通过 router 配置参数注入路由，
        // 从而让整个应用都有路由功能
        const app = new Vue({
        router
        }).$mount('#app')
            </pre>
        </div>
        <div>
            <h5></h5>
            <pre>
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"passVal",
}
</script>

