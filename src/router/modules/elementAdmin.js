/* Layout */
import Layout from '@/layout'

//所有模块一起加载
const routerList = []  // 路由数组 - 存放所有路由
const importAll=(routerArr)=>{
  // 该函数用于将所有分区路由中的路由添加到路由数组
  routerArr.keys().forEach( key => {
    Array.prototype.push.apply(routerList,routerArr(key).default)
  })
}
importAll(require.context('./',false,/\.routes\.js/))//将所有的路由引进

import charts from "./charts.routes"

/** When your routing table is too long, you can split it into small modules **/
const elementRouter = {
  path: '/element',
  component: Layout,
  redirect: '/element/menu1/menu1-1',
  name: 'element',
  meta: {
    title: 'element组件',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/element/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: 'Menu 1' },
      redirect: '/element/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/views/element/menu1/menu1-1'),
          name: 'Menu1-1',
          meta: { title: 'Menu 1-1' }
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/element/menu1/menu1-2'),
          name: 'Menu1-2',
          redirect: '/element/menu1/menu1-2/menu1-2-1',
          meta: { title: 'Menu 1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/views/element/menu1/menu1-2/menu1-2-1'),
              name: 'Menu1-2-1',
              meta: { title: 'Menu 1-2-1' }
            }
          ]
        },
      ]
    },
    {
      path: 'documentation',
      component: () => import('@/views/documentation/index'),
      name: 'Documentation',
      meta: { title: '文档', icon: 'documentation' }
    },
    {
      path: 'guide',
      component: () => import('@/views/guide/index'),
      name: 'Guide',
      meta: { title: '指引', icon: 'guide', noCache: true }
    },
    charts,
    ...routerList,
  ]
}

export default elementRouter


