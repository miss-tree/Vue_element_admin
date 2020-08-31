
import Layout from '@/layout'

const netWorkRouter =
    {
        path: '/network',
        component: Layout,
        redirect: 'noRedirect',
        name:"network",
        meta:{
          title:"网络笔记", icon: 'tree'
        },
        children: [
          {
            path: 'aboutFetch',
            component: () => import('@/views/netWork/aboutFetch'),
            name: 'aboutFetch',
            meta: { title: '关于Fetch'}
          },
          {
            path: 'DevTools',
            component: () => import('@/views/netWork/linkTCP'),
            name: 'DevTools',
            alwaysShow : true ,
            meta: { title: 'DevTools'},
            children:[
              {
                path: 'IntersectionObserver',
                component: () => import('@/views/netWork/jsApi/IntersectionObserver'),
                name: 'Chrome DevTools',
                meta: { title: 'IntersectionObserver'}
              },
            ]
          },
          {
            path: 'linkTCP',
            component: () => import('@/views/netWork/linkTCP'),
            name: 'linkTCP',
            meta: { title: '关于TCP'}
          },
          {
            path: 'linkApi',
            component: () => import('@/views/netWork/index'),
            name: 'linkApi',
            meta: { title: '进阶API'},
            children:[
              {
                path: 'IntersectionObserver',
                component: () => import('@/views/netWork/jsApi/IntersectionObserver'),
                //css/gridLayout 
                name: 'IntersectionObserver',
                meta: { title: 'IntersectionObserver'}
              },
            ]
          },
          {
            path:"cascading",
            component: () => import('@/views/netWork/index'),
            redirect: 'noRedirect',
            name:"Cascading",
            alwaysShow : true ,
            meta:{title: '关于css进阶'},
            children:[
              {
                path: 'gridlayout',
                component: () => import('@/views/netWork/css/gridLayout'),
                name: 'gridLayout',
                meta: { title: 'Grid网格布局'}
              },
            ]
          },
          {
            path:"advance",
            component: () => import('@/views/netWork/index'),
            redirect: 'noRedirect',
            name:"advance",
            alwaysShow : true ,
            meta:{title: '关于js进阶',},
            children:[
              {
                path: 'execution',
                component: () => import('@/views/netWork/advance/execution'),
                name: 'execution',
                meta: { title: 'js执行机制'}
              },
              {
                path: 'tool',
                component: () => import('@/views/netWork/index'),
                name: 'tool',
                meta: { title: '工具函数'},
                children:[
                  {
                    path: 'tooloften',
                    component: () => import('@/views/netWork/advance/tooloften'),
                    name: 'tooloften',
                    meta: { title: '工具函数一'}
                  },
                  {
                    path: 'toolusually',
                    component: () => import('@/views/netWork/advance/toolusually'),
                    name: 'toolusually',
                    meta: { title: '工具函数二'}
                  },
                  {
                    path: 'browsertool',
                    component: () => import('@/views/netWork/advance/browsertool'),
                    name: 'browsertool',
                    meta: { title: '浏览器工具函数'}
                  },
                  {
                    path: 'browserstorage',
                    component: () => import('@/views/netWork/advance/browserstorage'),
                    name: 'browserstorage',
                    meta: { title: 'storage工具函数'}
                  },
                  {
                    path: 'tooldate',
                    component: () => import('@/views/netWork/advance/tooldate'),
                    name: 'tooldate',
                    meta: { title: 'Date工具函数'}
                  },
                  {
                    path: 'toolfunc',
                    component: () => import('@/views/netWork/advance/toolfunc'),
                    name: 'toolfunc',
                    meta: { title: '工具函数三'}
                  },
                ]
              },
              {
                path: 'ergodic',
                component: () => import('@/views/netWork/advance/ergodic'),
                name: 'ergodic',
                meta: { title: 'js遍历'}
              },
              {
                path: 'skill',
                component: () => import('@/views/netWork/advance/skill'),
                name: 'skill',
                meta: { title: 'js技巧'}
              },
              {
                path: 'blob',
                component: () => import('@/views/netWork/advance/blob'),
                name: 'blob',
                meta: { title: 'Blob 对象'}
              },
              {
                path: 'drag',
                component: () => import('@/views/netWork/advance/drag'),
                name: 'drag',
                meta: { title: 'drag/drop事件'}
              },
            ]
          },
          {
            path:"HTTP",
            component: () => import('@/views/netWork/index'),
            redirect: 'noRedirect',
            name:"HTTP",
            alwaysShow : true ,
            meta:{title: '关于HTTP',},
            children:[
              {
                path: 'linkHTTP',
                component: () => import('@/views/netWork/http/linkHTTP'),
                name: 'linkHTTP',
                meta: { title: 'HTTP',}
              },
              {
                path: 'HTTPcode',
                component: () => import('@/views/netWork/http/HTTPcode'),
                name: 'HTTPcode',
                meta: { title: 'HTTP命令',}
              },
            ]
          },
          {
            path: 'knowlage',
            component: () => import('@/views/netWork/knowlage'),
            name: 'knowlage',
            meta: { title: '面试常见知识点'}
          },
          {
            path:"webpack",
            component: () => import('@/views/netWork/index'),
            redirect: 'noRedirect',
            name:"webpack",
            alwaysShow : true ,
            meta:{title: '关于webpack',},
            children:[
              {
                path: 'webpackapi',
                component: () => import('@/views/netWork/webpack/webpackapi'),
                name: 'webpackapi',
                meta: { title: 'api简介',}
              },
            ]
          },
          {
            path:"git",
            component: () => import('@/views/netWork/index'),
            redirect: 'noRedirect',
            name:"git",
            alwaysShow : true ,
            meta:{title: 'Git使用',},
            children:[
              {
                path: 'gitCommand',
                component: () => import('@/views/netWork/git/gitCommand'),
                name: 'gitCommand',
                meta: { title: 'git命令-',}
              },
              {
                path: 'gitTool',
                component: () => import('@/views/netWork/git/gittool'),
                name: 'gitTool',
                meta: { title: 'git工具+',}
              },
            ]
          },
          {
            path:"mysql",
            component: () => import('@/views/netWork/index'),
            redirect: '/network/mysql/command',
            name:"mysql",
            alwaysShow : true ,
            meta:{title: 'MySql',},
            children:[
              {
                path: 'command',
                component: () => import('@/views/netWork/mysql/command'),
                name: 'command',
                meta: { title: 'mysql命令',}
              },
            ]
          },
        ]
    }

export default netWorkRouter;