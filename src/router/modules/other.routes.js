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
    path: 'tab',
    component: () => import('@/views/tab/index'),
    name: 'Tab',
    meta: {
      title: 'Tab',
      icon: 'tab'
    }
  },

  {
    path: 'zip',
    component: () => import('@/views/zip/index'),
    name: 'ExportZip',
    meta: {
      title: 'Export Zip'
    }
  },

  {
    path: '/pdf',
    component: () => import('@/views/pdf/index'),
    name: 'PDF',
    meta: {
      title: 'PDF',
      icon: 'pdf'
    }
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
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
