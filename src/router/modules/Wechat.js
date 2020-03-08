
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
              {
                path: 'chatLogin',
                component: () => import('@/views/weChat/base/chatLogin'),
                name: 'chatLogin',
                meta: { title: '登录授权',}
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
              {
                path: 'relations',
                component: () => import('@/views/weChat/advance/relations'),
                name: 'relations',
                meta: { title: '组件关系',}
              },
            ]
          },
          {
            path:"frame",
            component: () => import('@/views/weChat/index'),
            redirect: '/weChat/frame/index',
            name:"frame",
            alwaysShow : true ,
            meta:{title: '第三方框架',},
            children:[
              {
                path: 'index',
                component: () => import('@/views/weChat/plugins/mpindex'),
                name: 'mpindex',
                meta: { title: '美团mpvue',}
              },  
              {
                path: 'wxparse',
                component: () => import('@/views/weChat/plugins/wxparse'),
                name: 'wxparse',
                meta: { title: 'mpvue-wxparse',}
              }, 
              {
                path: 'WePY',
                component: () => import('@/views/weChat/plugins/WePY'),
                name: 'WePY',
                meta: { title: '微信WePY',}
              },
              {
                path: 'WePYconfig',
                component: () => import('@/views/weChat/plugins/WePYconfig'),
                name: 'WePYconfig',
                meta: { title: 'wepy.config.js',}
              },   
              {
                path: 'useWePY',
                component: () => import('@/views/weChat/plugins/useWePY'),
                name: 'useWePY',
                meta: { title: '使用WePY',}
              },   
              {
                path: 'WePYpass',
                component: () => import('@/views/weChat/plugins/WePYpass'),
                name: 'WePYpass',
                meta: { title: '组件传值',}
              }, 
              {
                path: 'wepycomputed',
                component: () => import('@/views/weChat/plugins/wepycomputed'),
                name: 'wepycomputed',
                meta: { title: '计算观察属性',}
              }, 
              {
                path: 'wepyQa',
                component: () => import('@/views/weChat/plugins/wepyQa'),
                name: 'wepyQa',
                meta: { title: 'WePY常见问题',}
              },  
            ]
          },
        ]
    }

export default weChatRouter;