import Layout from '@/layout'

const Ol = {
  path: '/ol',
  component: Layout,
  redirect: 'noRedirect',
  name: "ol",
  meta: {
    title: "openlayers",
    icon: 'international'
  },
  children: [{
      path: 'introduce',
      component: () => import('@/views/openlayers/introduce'),
      name: 'introduce',
      meta: {
        title: 'openlayers简介',
      }
    },
    {
      path: "demo",
      component: () => import('@/views/openlayers/index'),
      // redirect: '/openlayers/introduce',
      name: "demo",
      alwaysShow: true,
      meta: {
        title: '说明及示例',
      },
      children: [
        {
        path: 'layers',
        component: () => import('@/views/openlayers/layers'),
        name: 'layers',
        meta: {
          title: '常用图层说明',
        }
      }, 
      {
        path: 'olEvent',
        component: () => import('@/views/openlayers/olEvent'),
        name: 'olEvent',
        meta: {
          title: '常用事件',
        }
      }, 
      {
        path: 'control',
        component: () => import('@/views/openlayers/control'),
        name: 'control',
        meta: {
          title: '常用控件',
        }
      }, 
      {
        path: 'doubleLayer',
        component: () => import('@/views/openlayers/doubleLayer'),
        name: 'doubleLayer',
        meta: {
          title: '复用图层',
        }
      }, 
      {
        path: 'cluster',
        component: () => import('@/views/openlayers/cluster'),
        name: 'cluster',
        meta: {
          title: '集群标注',
        }
      }, 
      {
        path: 'loadLayer',
        component: () => import('@/views/openlayers/loadLayer'),
        name: 'loadLayer',
        meta: {
          title: '加载地图瓦片',
        }
      }
    ]
    },
  ]
}

export default Ol;
