
import Layout from '@/layout'

const D3Router =
    {
        path: '/D3graph',
        component: Layout,
        redirect: 'noRedirect',
        name:"D3graph",
        meta:{ title:"D3笔记", icon: 'chart'},
        children: [
          {
            path: 'index',
            component: () => import('@/views/graph/index'),
            name: 'index',
            alwaysShow : true ,
            meta: { title: '关于D3.JS'},
            children:[
              {
                path: 'introduce',
                component: () => import('@/views/graph/helloD3'),
                name: 'introduce',
                meta: { title: '认识D3.js'}
              },
            ]
          },
          {
            path: 'select',
            component: () => import('@/views/graph/index'),
            name: 'select',
            alwaysShow : true ,
            meta: { title: 'D3核心函数'},
            children:[
              {
                path: 'queryDom',
                component: () => import('@/views/graph/main/handlerDom'),
                name: 'queryDom',
                meta: { title: '选择元素'}
              },
              {
                path: 'datum',
                component: () => import('@/views/graph/main/datum'),
                name: 'datum',
                meta: { title: '绑定数据'}
              },
              {
                path: 'handlerData',
                component: () => import('@/views/graph/main/handlerData'),
                name: 'handlerData',
                meta: { title: '处理数据'}
              },
              {
                path: 'handlerArray',
                component: () => import('@/views/graph/main/handlerArray'),
                name: 'handlerArray',
                meta: { title: '处理数组'}
              },
            ]
          },
          {
            path: 'datum',
            component: () => import('@/views/graph/index'),
            name: 'datum',
            alwaysShow : true ,
            meta: { title: '比例尺'},
            children:[
              {
                path: 'Command',
                component: () => import('@/views/graph/scale/index'),
                name: 'Command',
                meta: { title: 'Command'}
              },
            ]
          },
          {
            path: 'draw',
            component: () => import('@/views/graph/index'),
            name: 'draw',
            alwaysShow : true ,
            meta: { title: '绘制'},
            children:[
              {
                path: 'colors',
                component: () => import('@/views/graph/draw/index'),
                name: 'colors',
                meta: { title: 'd3-color'}
              },
              {
                path: 'line',
                component: () => import('@/views/graph/draw/line'),
                name: 'line',
                meta: { title: 'd3-line'}
              },
              {
                path: 'path',
                component: () => import('@/views/graph/draw/path'),
                name: 'path',
                meta: { title: 'd3-path'}
              },
              // {
              //   path: 'colors',
              //   component: () => import('@/views/graph/draw/index'),
              //   name: 'colors',
              //   meta: { title: 'd3-color'}
              // },
            ]
          },
          {
            path: 'transition',
            component: () => import('@/views/graph/index'),
            name: 'transition',
            alwaysShow : true ,
            meta: { title: '动画'},
            children:[
              {
                path: 'home',
                component: () => import('@/views/graph/transition/index'),
                name: 'home',
                meta: { title: 'd3-transition'}
              },
              {
                path: 'attr',
                component: () => import('@/views/graph/transition/attr'),
                name: 'attr',
                meta: { title: 'transition-attr'}
              },
              {
                path: 'each',
                component: () => import('@/views/graph/transition/each'),
                name: 'each',
                meta: { title: 'transition-each|call'}
              },
              {
                path: 'ease',
                component: () => import('@/views/graph/transition/ease'),
                name: 'ease',
                meta: { title: 'transition-ease'}
              },
            ]
          },
          {
            path: 'interactive',
            component: () => import('@/views/graph/index'),
            name: 'interactive',
            alwaysShow : true ,
            meta: { title: '交互'},
            children:[
              {
                path: 'keyboard',
                component: () => import('@/views/graph/event/keyboard'),
                name: 'keyboard',
                meta: { title: '常用交互'}
              },
              // {
              //   path: 'zoom',
              //   component: () => import('@/views/graph/layout/zoom'),
              //   name: 'zoom',
              //   meta: { title: 'd3-zoom'}
              // },
            ]
          },
          {
            path: 'layout',
            component: () => import('@/views/graph/index'),
            name: 'layout',
            alwaysShow : true ,
            meta: { title: '布局'},
            children:[
              {
                path: 'force',
                component: () => import('@/views/graph/layout/force'),
                name: 'force',
                meta: { title: 'd3-force'}
              },
              {
                path: 'zoom',
                component: () => import('@/views/graph/layout/zoom'),
                name: 'zoom',
                meta: { title: 'd3-zoom'}
              },
              // {
              //   path: 'path',
              //   component: () => import('@/views/graph/draw/path'),
              //   name: 'path',
              //   meta: { title: 'd3-path'}
              // },
              // {
              //   path: 'colors',
              //   component: () => import('@/views/graph/draw/index'),
              //   name: 'colors',
              //   meta: { title: 'd3-color'}
              // },
            ]
          },
          {
            path: 'demo',
            component: () => import('@/views/graph/index'),
            name: 'demo',
            alwaysShow : true ,
            meta: { title: '示例'},
            children:[
              {
                path: 'relation',
                component: () => import('@/views/graph/demo/relation'),
                name: 'relation',
                meta: { title: '多功能关系图'}
              },
              // {
              //   path: 'line',
              //   component: () => import('@/views/graph/demo/line'),
              //   name: 'line',
              //   meta: { title: 'd3-line'}
              // }
            ]
          }
        ]
    }

export default D3Router;