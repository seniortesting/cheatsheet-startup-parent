import Vue from 'vue'
import store from '../store'

const PERMISSION_ENUM = {
  'add': { key: 'add', label: '新增' },
  'delete': { key: 'delete', label: '删除' },
  'edit': { key: 'edit', label: '修改' },

  'query': { key: 'query', label: '查询' },
  'get': { key: 'get', label: '详情' },
  'enable': { key: 'enable', label: '启用' },
  'disable': { key: 'disable', label: '禁用' },
  'import': { key: 'import', label: '导入' },
  'export': { key: 'export', label: '导出' }
}

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  /**
   * 例如： v-if="$auth('table.disable')"
   */
  !Vue.prototype.$auth && Object.defineProperties(Vue.prototype, {
    $auth: {
      get () {
        const _this = this
        return (permissions) => {
          const [permission, action] = permissions.split('.')
          const permissionList = _this.$store.getters.roles.permissions
          return permissionList.find((val) => {
            return val.permissionId === permission
          }).actionList.findIndex((val) => {
            return val === action
          }) > -1
        }
      }
    }
  })

  !Vue.prototype.$enum && Object.defineProperties(Vue.prototype, {
    $enum: {
      get () {
        // const _this = this;
        return (val) => {
          let result = PERMISSION_ENUM
          val && val.split('.').forEach(v => {
            // eslint-disable-next-line
            result = result && result[v] || null
          })
          return result
        }
      }
    }
  })
  /**
   * Action 权限指令
   * 指令用法：
   *  - 在需要控制 action 级别权限的组件上使用 v-action:[method] , 如下：
   *    <i-button v-action:add >添加用户</a-button>
   *    <a-button v-action:delete>删除用户</a-button>
   *    <a v-action:edit @click="edit(record)">修改</a>
   *
   *  - 当前用户没有权限时，组件上使用了该指令则会被隐藏
   *  - 当后台权限跟 pro 提供的模式不同时，只需要针对这里的权限过滤进行修改即可
   *
   *  @see https://github.com/sendya/ant-design-pro-vue/pull/53
   */
  Vue.directive('action', {
    bind: function (el, binding, vnode) {
      const actionName = binding.arg
      const roles = store.getters.roles
      const routePermissions = vnode.context.$route.meta.permission
      // eslint-disable-next-line
      const permissionId = routePermissions instanceof String && [routePermissions] || routePermissions
      roles.permissions.forEach(permission => {
        if (!permissionId.includes(permission.permissionId)) {
          return
        }
        if (permission.actionList && !permission.actionList.includes(actionName)) {
          // eslint-disable-next-line
          el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
        }
      })
    }
  })
}

Vue.use(plugin)
