/* Layout */

const ErrorRoutes=[
    {
        path: '/error',
        component: () => import('@/views/error-page/index'),
        name: 'ErrorPages',
        meta: {
          title: '错误页面',
          icon: '404'
        },
        children: [
          {
            path: '401',
            component: () => import('@/views/error-page/401'),
            name: 'Page401',
            meta: { title: '401', noCache: true }
          },
          {
            path: '404',
            component: () => import('@/views/error-page/404'),
            name: 'Page404',
            meta: { title: '404', noCache: true }
          }
        ]
      },
]

export default ErrorRoutes
