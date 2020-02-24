
const permissionRouter=[
    {
        path: '/permission',
        component: () => import('@/views/permission/index'),
        alwaysShow: true, // will always show the root menu
        name: 'permission',
        meta: {
          title: '权限测试',
          icon: 'lock',
          roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
          {
            path: 'page',
            component: () => import('@/views/permission/page'),
            name: 'PagePermission',
            meta: {
              title: '权限页面',
              roles: ['admin'] // or you can only set roles in sub nav
            }
          },
          {
            path: 'directive',
            component: () => import('@/views/permission/directive'),
            name: 'DirectivePermission',
            meta: {
              title: 'Directive Permission'
              // if do not set roles, means: this page does not require permission
            }
          },
          {
            path: 'role',
            component: () => import('@/views/permission/role'),
            name: 'RolePermission',
            meta: {
              title: '角色权限',
              roles: ['admin']
            }
          }
        ]
    },
]

export default permissionRouter
