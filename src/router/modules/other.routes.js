/* Layout */
import Layout from '@/layout'

const otherRouter = [{
    path: 'icon',
    component: () => import('@/views/icons/index'),
    name: 'Icons',
    meta: {
      title: 'Icons',
      icon: 'icon',
      noCache: true
    }
  },

  {
    path: 'theme',
    component: () => import('@/views/theme/index'),
    name: 'Theme',
    meta: {
      title: '主题',
      icon: 'theme'
    }
  },

  {
    path: 'clipboard',
    component: () => import('@/views/clipboard/index'),
    name: 'ClipboardDemo',
    meta: {
      title: 'Clipboard',
      icon: 'clipboard'
    }
  },

  {
    path: 'external-link',
    path: 'https://github.com/PanJiaChen/vue-element-admin',
    meta: {
      title: '跳转链接',
      icon: 'link'
    }
  },
]

export default otherRouter
