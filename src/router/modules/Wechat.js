
import Layout from '@/layout'

const weChat =
    {
        path: '/wechat',
        component: Layout,
        redirect: 'noRedirect',
        name:"wechat",
        meta:{
          title:"小程序笔记", icon: 'wechat'
        },
        children: [
          {
            path: 'index',
            component: () => import('@/views/Vue/index'),
            name: 'hello',
            meta: { title: '欢迎使用'}
          },
          {
            path:"base",
            component: () => import('@/views/Vue/base/index'),
            redirect: '/vue/base/style',
            name:"base",
            alwaysShow : true ,
            meta:{title: 'Vue 基础',},
            children:[
              {
                path: 'style',
                component: () => import('@/views/Vue/base/style'),
                name: 'style',
                meta: { title: '样式类名',}
              },
            ]
          },{
            path:"components",
            component: () => import('@/views/Vue/base/index'),
            redirect: '/vue/base/style',
            name:"components",
            alwaysShow : true ,
            meta:{title: '组件 ',},
            children:[
              {
                path: 'split',
                component: () => import('@/views/Vue/webpack/split'),
                name: 'split',
                meta: { title: '组件传值',}
              },
            ]
          },
          {
            path:"router",
            component: () => import('@/views/Vue/base/index'),
            redirect: '/vue/base/style',
            name:"router",
            alwaysShow : true ,
            meta:{title: 'Vue Router ',},
            children:[
              {
                path: 'style',
                component: () => import('@/views/Vue/base/style'),
                name: 'style',
                meta: { title: '样式类名',}
              },
            ]
          },
          {
            path:"vuex",
            component: () => import('@/views/Vue/base/index'),
            redirect: '/vue/base/style',
            name:"vuex",
            alwaysShow : true ,
            meta:{title: 'Vuex ',},
            children:[
              {
                path: 'style',
                component: () => import('@/views/Vue/base/style'),
                name: 'style',
                meta: { title: '样式类名',}
              },
            ]
          },
          {
            path:"webpack",
            component: () => import('@/views/Vue/webpack/index'),
            redirect: '/vue/webpack/base',
            name:"webpack 配置",
            alwaysShow : true ,
            meta:{title: 'webpack 配置',},
            children:[
              {
                path: 'plugin',
                component: () => import('@/views/Vue/webpack/plugin'),
                name: 'plugin',
                meta: { title: '脚手架配置',}
              },  
            ]
          },
        ]
    }

export default weChat;