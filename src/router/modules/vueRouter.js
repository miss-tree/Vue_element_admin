
import Layout from '@/layout'

const vueRouter =
    {
        path: '/vue',
        component: Layout,
        redirect: 'noRedirect',
        name:"vue",
        meta:{
          title:"Vue笔记", icon: 'edit'
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
              {
                path: 'ifrender',
                component: () => import('@/views/Vue/base/ifrender'),
                name: 'ifrender',
                meta: { title: '条件列表渲染',}
              },  
              {
                path: 'event',
                component: () => import('@/views/Vue/base/event'),
                name: 'event',
                meta: { title: '事件处理',}
              },  
              {
                path: 'form',
                component: () => import('@/views/Vue/base/form'),
                name: 'form',
                meta: { title: '数据绑定',}
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
              {
                path: 'ifrender',
                component: () => import('@/views/Vue/base/ifrender'),
                name: 'ifrender',
                meta: { title: '条件列表渲染',}
              },  
              {
                path: 'base',
                component: () => import('@/views/Vue/webpack/base'),
                name: 'base',
                meta: { title: '数据绑定',}
              }, 
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
              {
                path: 'ifrender',
                component: () => import('@/views/Vue/base/ifrender'),
                name: 'ifrender',
                meta: { title: '条件列表渲染',}
              },  
              {
                path: 'base',
                component: () => import('@/views/Vue/webpack/base'),
                name: 'base',
                meta: { title: '数据绑定',}
              }, 
              {
                path: 'split',
                component: () => import('@/views/Vue/webpack/split'),
                name: 'split',
                meta: { title: '组件传值',}
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
              {
                path: 'ifrender',
                component: () => import('@/views/Vue/base/ifrender'),
                name: 'ifrender',
                meta: { title: '条件列表渲染',}
              },  
              {
                path: 'base',
                component: () => import('@/views/Vue/webpack/base'),
                name: 'base',
                meta: { title: '数据绑定',}
              }, 
              {
                path: 'split',
                component: () => import('@/views/Vue/webpack/split'),
                name: 'split',
                meta: { title: '组件传值',}
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
              {
                path: 'base',
                component: () => import('@/views/Vue/webpack/base'),
                name: 'base',
                meta: { title: '基本配置',}
              }, 
              {
                path: 'split',
                component: () => import('@/views/Vue/webpack/split'),
                name: 'split',
                meta: { title: '懒加载',}
              },
              {
                path: 'analyzer',
                component: () => import('@/views/Vue/webpack/analyzer'),
                name: 'analyzer',
                meta: { title: '打包分析',}
              }
            ]
          },
        ]
    }

export default vueRouter;