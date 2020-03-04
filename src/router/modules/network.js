
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
            path: 'hello',
            component: () => import('@/views/Vue/hello'),
            name: 'hello',
            meta: { title: 'hello Vue'}
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
          {
            path: 'plugins',
            component: () => import('@/views/Vue/plugins'),
            name: 'plugins',
            meta: { title: '其他'}
          },
        ]
    }

export default netWorkRouter;