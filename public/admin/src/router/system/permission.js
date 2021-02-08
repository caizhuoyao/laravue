import Layout from '@/layout'

const route =  {
  path: '/permission',
  component: Layout,
  redirect: '/admin/index',
  alwaysShow: true,
  name: 'Permission',
  meta: {
    title: 'Permission',
    icon: 'el-icon-s-management',
    roles: [
      'larke-admin.admin.index',
      'larke-admin.auth-group.index',
      'larke-admin.auth-rule.index',
      'larke-admin.log.index'
    ]
  },
  children: [
    // 管理员
    {
      path: '/admin/index',
      component: () => import('@/views/admin/index'),
      name: 'Admin',
      meta: {
        title: 'Admin',
        icon: 'peoples',
        roles: ['larke-admin.admin.index']
      }
    },

    // 分组
    {
      path: '/auth/group/index',
      component: () => import('@/views/auth-group/index'),
      name: 'AuthGroup',
      meta: {
        title: 'AuthGroup',
        icon: 'el-icon-s-operation',
        roles: ['larke-admin.auth-group.index']
      }
    },
    {
      path: '/auth/group/tree',
      component: () => import('@/views/auth-group/tree'),
      name: 'AuthGroupTree',
      meta: {
        title: 'AuthGroupTree',
        roles: ['larke-admin.auth-group.index'],
        activeMenu: '/auth/group/index'
      },
      hidden: true
    },

    // 权限
    {
      path: '/auth/rule/index',
      component: () => import('@/views/auth-rule/index'),
      name: 'AuthRule',
      meta: {
        title: 'AuthRule',
        icon: 'el-icon-menu',
        roles: ['larke-admin.auth-rule.index']
      }
    },
    {
      path: '/auth/rule/tree',
      component: () => import('@/views/auth-rule/tree'),
      name: 'AuthRuleTree',
      meta: {
        title: 'AuthRuleTree',
        roles: ['larke-admin.auth-rule.index'],
        activeMenu: '/auth/rule/index'
      },
      hidden: true
    },

    // 日志
    {
      path: '/adminlog/index',
      component: () => import('@/views/admin-log/index'),
      name: 'AdminLog',
      meta: {
        title: 'AdminLog',
        icon: 'el-icon-document-add',
        roles: ['larke-admin.log.index']
      }
    }

  ]
}

export default route