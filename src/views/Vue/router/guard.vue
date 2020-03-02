<template>
    <div>
        <div>
            <h4>路由守卫</h4>
            <ul>
                <li>router.beforeEach:全局前置守卫</li>
                <li>router.beforeResolve:全局解析守卫这和 router.beforeEach 类似，
                    区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，
                    解析守卫就被调用。</li>
                <li>router.afterEach:全局后置钩子</li>
                <li>beforeEnter:路由独享的守卫</li>
                <li>beforeRouteEnter:组件内的守卫</li>
                <li>beforeRouteUpdate (2.2+):组件内的守卫</li>
                <li>beforeRouteLeave:组件内的守卫</li>
            </ul>
        </div>
        <div>
            <h5>完整的导航解析流程</h5>
            <ul>
                <li>导航被触发。</li>
                <li>在失活的组件里调用离开守卫。</li>
                <li>用全局的 beforeEach 守卫。</li>
                <li>在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。</li>
                <li>在路由配置里调用 beforeEnter。</li>
                <li>解析异步路由组件。</li>
                <li>在被激活的组件里调用 beforeRouteEnter。</li>
                <li>调用全局的 beforeResolve 守卫 (2.5+)。</li>
                <li>导航被确认。</li>
                <li>调用全局的 afterEach 钩子。</li>
                <li>触发 DOM 更新。</li>
                <li>用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。</li>
            </ul>
        </div>
        <div>
            <h5>全局守卫</h5>
            <pre>
        router.beforeEach(async(to, from, next) => {
            NProgress.start()   路由进度条
            document.title = getPageTitle(to.meta.title)//设置头部标题
            const hasToken = getToken()//获取用户token
            if (hasToken) {
                if (to.path === '/login') {
                    next({ path: '/' })
                    NProgress.done()
                } else {
                    const hasRoles = store.getters.roles && store.getters.roles.length > 0
                    if (hasRoles) {
                        next()
                    } else {
                        try {
                            const { roles } = await store.dispatch('user/getInfo')
                            const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
                            router.addRoutes(accessRoutes)
                            next({ ...to, replace: true })
                        } catch (error) {
                            await store.dispatch('user/resetToken')
                            Message.error(error || 'Has Error')
                            next(`/login?redirect=${to.path}`)
                            NProgress.done()
                        }
                    }
                }
            } else {
                if (whiteList.indexOf(to.path) !== -1) {
                    next()
                } else {
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        })

        router.afterEach(() => {
            NProgress.done()
        })
            </pre> 
        </div>
        <div>
            <h5>路由独享的守卫</h5>
            <pre>
        const router = new VueRouter({
            routes: [
                {
                path: '/foo',
                component: Foo,
                beforeEnter: (to, from, next) => {
                    // ...
                }
                }
            ]
        })
            </pre>
        </div>
        <div>
            <h5>组件内的守卫</h5>
            <pre>
        const Foo = {
            template: `...`,
            beforeRouteEnter (to, from, next) {
                /*/ 在渲染该组件的对应路由被 confirm 前调用
                /*/ 不！能！获取组件实例 `this`
                /*/ 因为当守卫执行前，组件实例还没被创建
            },
            beforeRouteUpdate (to, from, next) {
                /*/ 在当前路由改变，但是该组件被复用时调用
                /*/ 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
                /*/ 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
                /*/ 可以访问组件实例 `this`
            },
            beforeRouteLeave (to, from, next) {
                /*/ 导航离开该组件的对应路由时调用
                /*/ 可以访问组件实例 `this`
            }
        }
            </pre>
            <div class="G_red">注意</div>
            <p>
                仔细看上面注释详情，不能随便调用 this，改善的方法
            </p>
            <pre>
        可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数        
        beforeRouteEnter (to, from, next) {
            next(vm => {
                // 通过 `vm` 访问组件实例
            })
        }        
            </pre>
            <div>离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消</div>
            <pre>
        beforeRouteLeave (to, from, next) {
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }      
            </pre>
        </div>
        <div>
            <h4>返回要跳转的页面</h4>
            <p>
                在前端路由守卫时都会判断权限，或者判断是否登陆要求登陆再去需要去的页面。
                这时我们就要在路由守卫跳转前处理。下面以淘宝下单和登陆为例
            </p>
            <pre>
        router.beforeEach(async(to, from, next) => {
            const hasToken = getToken()//获取用户token是否登陆
            if (hasToken) {
                next()
            } else {
              next("/login?redirect=${to.path}")  //将要跳转的页面路由作为重定向的参数
            }
        })        

        点击登陆操作
        loginHandle(){
            localStorage.setItem("islogin","true")
            this.$router.push({path:this.$router.query.redirect})//跳转到要跳转的页面
        }
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"guard",
}
</script>

