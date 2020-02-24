/* Layout */
import Layout from '@/layout'

const exampleRouter=[
    {
        path: '/example',
        component: () => import('@/views/example/index'),
        name: 'Example',
        meta: {
          title: 'Example',
          icon: 'example'
        },
        children: [
          {
            path: 'create',
            component: () => import('@/views/example/create'),
            name: 'CreateArticle',
            meta: { title: 'Create Article', icon: 'edit' }
          },
          {
            path: 'edit/:id(\\d+)',
            component: () => import('@/views/example/edit'),
            name: 'EditArticle',
            meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
            hidden: true
          },
          {
            path: 'list',
            component: () => import('@/views/example/list'),
            name: 'ArticleList',
            meta: { title: 'Article List', icon: 'list' }
          }
        ]
    },
]

export default exampleRouter