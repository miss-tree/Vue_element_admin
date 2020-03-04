
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
            path: 'hello',
            component: () => import('@/views/Vue/hello'),
            name: 'hello',
            meta: { title: 'hello Vue'}
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
              {
                path: 'ifrender',
                component: () => import('@/views/Vue/base/ifrender'),
                name: 'ifrender',
                meta: { title: '条件列表渲染',}
              }, 
              {
                path: 'lifeCycle',
                component: () => import('@/views/Vue/base/lifeCycle'),
                name: 'lifeCycle',
                meta: { title: '生命周期',}
              },  
              {
                path: 'computed',
                component: () => import('@/views/Vue/base/computed'),
                name: 'computed',
                meta: { title: '计算观察属性',}
              }, 
              {
                path: 'filter',
                component: () => import('@/views/Vue/base/filter'),
                name: 'filter',
                meta: { title: '过滤器',}
              }, 
              {
                path: 'Knowledge',
                component: () => import('@/views/Vue/base/Knowledge'),
                name: 'Knowledge',
                meta: { title: '知识点',}
              }, 
            ]
          },{
            path:"assembly",
            component: () => import('@/views/Vue/assembly/index'),
            redirect: '/vue/assembly/passVal',
            name:"assembly",
            alwaysShow : true ,
            meta:{title: '组件 ',},
            children:[
              {
                path: 'passVal',
                component: () => import('@/views/Vue/assembly/passVal'),
                name: 'passVal',
                meta: { title: '组件传值',}
              },
              {
                path: 'slot',
                component: () => import('@/views/Vue/assembly/slot'),
                name: 'slot',
                meta: { title: '插槽',}
              },  
              {
                path: 'iscomponent',
                component: () => import('@/views/Vue/assembly/iscomponent'),
                name: 'iscomponent',
                meta: { title: '动态组件',}
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
            redirect: '/vue/base/structure',
            name:"router",
            alwaysShow : true ,
            meta:{title: 'Vue Router ',},
            children:[
              {
                path: 'structure',
                component: () => import('@/views/Vue/router/structure'),
                name: 'structure',
                meta: { title: '路由结构',}
              },
              {
                path: 'Jump',
                component: () => import('@/views/Vue/router/Jump'),
                name: 'Jump',
                meta: { title: '路由跳转',}
              },  
              {
                path: 'guard',
                component: () => import('@/views/Vue/router/guard'),
                name: 'guard',
                meta: { title: '路由守卫',}
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
            redirect: '/vue/vuex/knowVuex',
            name:"vuex",
            alwaysShow : true ,
            meta:{title: 'Vuex ',},
            children:[ 
              {
                path: 'knowVuex',
                component: () => import('@/views/Vue/vuex/knowVuex'),
                name: 'knowVuex',
                meta: { title: '认识vuex',}
              }, 
              {
                path: 'simulation',
                component: () => import('@/views/Vue/vuex/simulation'),
                name: 'simulation',
                meta: { title: '模拟Vuex',}
              },
              {
                path: 'getter',
                component: () => import('@/views/Vue/vuex/getter'),
                name: 'getter',
                meta: { title: 'getter',}
              }, 
              {
                path: 'action',
                component: () => import('@/views/Vue/vuex/action'),
                name: 'action',
                meta: { title: 'action',}
              },
              {
                path: 'modules',
                component: () => import('@/views/Vue/vuex/modules'),
                name: 'modules',
                meta: { title: 'modules',}
              },
              {
                path: 'createPlugin',
                component: () => import('@/views/Vue/vuex/createPlugin'),
                name: 'createPlugin',
                meta: { title: '插件',}
              },
            ]
          },
          {
            path: 'plugins',
            component: () => import('@/views/Vue/plugins'),
            name: 'plugins',
            meta: { title: 'vue常用插件'}
          },
          {
            path:"advance",
            component: () => import('@/views/Vue/base/index'),
            redirect: '/vue/vuex/simulation',
            name:"advance",
            alwaysShow : true ,
            meta:{title: '其他进阶 ',},
            children:[
              {
                path: 'direct',
                component: () => import('@/views/Vue/advance/direct'),
                name: 'direct',
                meta: { title: 'vue指令',}
              },
              {
                path: 'extend',
                component: () => import('@/views/Vue/advance/extend'),
                name: 'extend',
                meta: { title: 'Vue.extend',}
              },
              {
                path: 'mixins',
                component: () => import('@/views/Vue/advance/mixins'),
                name: 'mixins',
                meta: { title: 'mixins/extends',}
              },
              {
                path: 'install',
                component: () => import('@/views/Vue/advance/install'),
                name: 'install',
                meta: { title: 'install',}
              },
              {
                path: 'render',
                component: () => import('@/views/Vue/advance/render'),
                name: 'render',
                meta: { title: 'render',}
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
              },
              {
                path: 'usplugins',
                component: () => import('@/views/Vue/webpack/usplugins'),
                name: 'usplugins',
                meta: { title: 'vue@2.x常用配置',}
              },
              {
                path: 'package',
                component: () => import('@/views/Vue/webpack/package'),
                name: 'package',
                meta: { title: '更新package',}
              },
              {
                path: 'jquery',
                component: () => import('@/views/Vue/webpack/jquery'),
                name: 'jquery',
                meta: { title: 'jquery插件',}
              }
            ]
          },
          {
            path:"question",
            component: () => import('@/views/Vue/webpack/index'),
            redirect: '/vue/question/esplugin',
            name:"question",
            alwaysShow : true ,
            meta:{title: '常见问题',},
            children:[
              {
                path: 'esplugin',
                component: () => import('@/views/Vue/question/esplugin'),
                name: 'esplugin',
                meta: { title: 'ES6问题',}
              },  
              {
                path: 'split',
                component: () => import('@/views/Vue/question/split'),
                name: 'split',
                meta: { title: '懒加载问题',}
              }, 
            ]
          },
          {
            path: 'style',
            component: () => import('@/views/Vue/index'),
            name: 'style',
            meta: { title: 'vue风格指南'}
          },
        ]
    }

export default vueRouter;