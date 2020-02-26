
import Layout from '@/layout'

const EsRouter =
    {
        path: '/es6',
        component: Layout,
        redirect: 'noRedirect',
        name:"es6",
        meta:{
          title:"Es6笔记", icon: 'education'
        },
        children: [
          {
            path: 'index',
            component: () => import('@/views/ES6/explain'),
            name: 'welcome',
            meta: { title: '关于ES6'}
          },
          {
            path:"methods",
            component: () => import('@/views/ES6/index'),
            redirect: 'noRedirect',
            name:"methods",
            meta:{title: '常用方法',},
            children:[
              {
                path: 'statement',
                component: () => import('@/views/ES6/methods/statement'),
                name: 'statement',
                meta: { title: '变量声明',}
              }, 
              {
                path: 'variable',
                component: () => import('@/views/ES6/methods/variable'),
                name: 'variable',
                meta: { title: '变量解构',}
              }, 
              {
                path: 'string',
                component: () => import('@/views/ES6/methods/string'),
                name: 'string',
                meta: { title: '字符串扩展',}
              }, 
              {
                path: 'stringAdd',
                component: () => import('@/views/ES6/methods/stringAdd'),
                name: 'stringAdd',
                meta: { title: '字符串方法',}
              }, 
              {
                path: 'numberAdd',
                component: () => import('@/views/ES6/methods/numberAdd'),
                name: 'numberAdd',
                meta: { title: '数值扩展',}
              }, 
              {
                path: 'function',
                component: () => import('@/views/ES6/methods/function'),
                name: 'function',
                meta: { title: '函数扩展',}
              }, 
              {
                path: 'array',
                component: () => import('@/views/ES6/methods/array'),
                name: 'array',
                meta: { title: '数组扩展',}
              }, 
            ]
          },
          {
            path: 'class',
            component: () => import('@/views/ES6/index'),
            name: 'class',
            redirect: '/es6/class/index',
            meta: { title: '类 class'},
            children:[
              {
                path: 'index',
                component: () => import('@/views/ES6/class/index'),
                name: 'index',
                meta: { title: 'class',}
              }, 
              {
                path: 'extends',
                component: () => import('@/views/ES6/class/extends'),
                name: 'extends',
                meta: { title: '类的继承',}
              }, 
            ]
          },
          {
            path: 'promise',
            component: () => import('@/views/ES6/index'),
            name: 'promise',
            redirect: '/es6/promise/index',
            meta: { title: 'Promise'},
            children:[
              {
                path: 'index',
                component: () => import('@/views/ES6/class/index'),
                name: 'index',
                meta: { title: 'class',}
              }, 
              {
                path: 'extends',
                component: () => import('@/views/ES6/class/extends'),
                name: 'extends',
                meta: { title: '类的继承',}
              }, 
            ]
          },
          {
            path: 'set',
            component: () => import('@/views/ES6/index'),
            name: 'set',
            redirect: '/es6/set/index',
            meta: { title: '数据结构'},
            children:[
              {
                path: 'index',
                component: () => import('@/views/ES6/class/index'),
                name: 'index',
                meta: { title: 'Set',}
              }, 
              {
                path: 'map',
                component: () => import('@/views/ES6/class/extends'),
                name: 'map',
                meta: { title: 'Map',}
              }, 
            ]
          },
          {
            path: 'module',
            component: () => import('@/views/ES6/index'),
            name: 'module',
            redirect: '/es6/module/index',
            meta: { title: 'Module'},
            children:[
              {
                path: 'index',
                component: () => import('@/views/ES6/module/index'),
                name: 'index',
                meta: { title: 'require',}
              }, 
              {
                path: 'import',
                component: () => import('@/views/ES6/class/extends'),
                name: 'import',
                meta: { title: 'import',}
              }, 
            ]
          },
        ]
    }

export default EsRouter;