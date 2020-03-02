import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* Layout */
// import Layout from '@/layout'
/* Router Modules */
import indexRouter from './modules/index'
import vueRouter from './modules/vueRouter'
import EsRouter from './modules/Es6Router'
import weChat from './modules/Wechat'

import elementRouter from './modules/elementAdmin'
/**
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 * hidden: true                   是否显示框架
 * alwaysShow: true               //当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 * 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面,若你想不管路由下面的 children 声明的个数都显示你的根路由
 * 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           是否需要重定向；在面包屑导航中是否被点击
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    可以设置访问页面的角色
    title: 'title'               //设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             icon图标
    noCache: true                //如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
/**  constantRoutes 不需要权限访问的路由*/
export const constantRoutes = [
 ...indexRouter
]
/** asyncRoutes  需要权限的路由*/
export const asyncRoutes = [
  // ...vueRouter,
  vueRouter,
  EsRouter,
  weChat,
  elementRouter,
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
