
import Layout from '@/layout'

const weChatRouter =
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
            path: 'Introduction',
            component: () => import('@/views/weChat/Introduction'),
            name: 'Introduction',
            meta: { title: '小程序入门'}
          },
          {
            path:"base",
            component: () => import('@/views/weChat/index'),
            redirect: '/wechat/base/chatlife',
            name:"base",
            alwaysShow : true ,
            meta:{title: '小程序基础',},
            children:[
              {
                path: 'dataRender',
                component: () => import('@/views/weChat/base/dataRender'),
                name: 'dataRender',
                meta: { title: '数据渲染',}
              },
              {
                path: 'weChatpass',
                component: () => import('@/views/weChat/base/weChatpass'),
                name: 'weChatpass',
                meta: { title: '组件通信',}
              },
              {
                path: 'chatRouter',
                component: () => import('@/views/weChat/base/chatRouter'),
                name: 'chatRouter',
                meta: { title: '路由',}
              },
              {
                path: 'chatlife',
                component: () => import('@/views/weChat/base/chatlife'),
                name: 'chatlife',
                meta: { title: '生命周期',}
              },
            ]
          },{
            path:"weChatadvance",
            component: () => import('@/views/weChat/index'),
            redirect: '/wechat/weChatadvance/weChatMinxins',
            name:"weChatadvance",
            alwaysShow : true ,
            meta:{title: '进阶 ',},
            children:[
              {
                path: 'weChatMinxins',
                component: () => import('@/views/weChat/advance/weChatMinxins'),
                name: 'weChatMinxins',
                meta: { title: 'behaviors/Component',}
              },
            ]
          },
          {
            path:"webpack",
            component: () => import('@/views/Vue/webpack/index'),
            redirect: '/vue/webpack/base',
            name:"webpack 配置",
            alwaysShow : true ,
            meta:{title: '插件',},
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

export default weChatRouter;