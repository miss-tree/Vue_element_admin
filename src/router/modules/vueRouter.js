
import Layout from '@/layout'

const vueRouter =
// [
    {
        path: '/vue',
        component: Layout,
        redirect: 'noRedirect',
        name:"vue",
        meta:{
          title:"Vue笔记", icon: 'bug'
        },
        children: [
          {
            path: 'index',
            component: () => import('@/views/Vue/index'),
            name: 'hello',
            meta: { title: '欢迎使用'}
          },
          {
            path:"webpack",
            component: () => import('@/views/Vue/webpack/index'),
            redirect: 'noRedirect',
            name:"webpack 配置",
            alwaysShow : true ,
            meta:{title: 'webpack 配置',},
            children:[
              {
                path: 'plugin',
                component: () => import('@/views/Vue/webpack/webpackplugin'),
                name: 'split',
                meta: { title: '懒加载',}
              },
              {
                path: 'analyzer',
                component: () => import('@/views/Vue/webpack/webpackplugin'),
                name: 'analyzer',
                meta: { title: '打包分析',}
              }
            ]
          },
        ]
    }
// ]

export default vueRouter;