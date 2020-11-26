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
          }
        ]
    },
]

export default exampleRouter