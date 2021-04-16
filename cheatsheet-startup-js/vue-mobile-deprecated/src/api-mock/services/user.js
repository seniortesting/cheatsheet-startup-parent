import { mock } from '../utils'
import urls from '../../api'
import { randomNumber } from '../../utils/NumberUtils'

mock.onPost(urls.USER_LOGIN_URL).reply(config => {
  console.log('登录mock')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        'code': 1000,
        'data': {
          'id': '4291d7da9005377ec9aec4a71ea837f',
          'token': '4291d7da9005377ec9aec4a71ea837f',
          'userName': 'admin',
          'nickName': '小胡',
          'phone': '13052113519',
          'avatar': 'https://preview.pro.loacg.com/avatar2.jpg',
          'status': 1,
          'expired': 0,
          'locked': 0,
          'lastLoginIp': '27.154.74.117',
          'lastLoginTime': 1534837621348
        }
      }])
    }, 2000)
  })
})

mock.onGet(urls.USER_INFO + '/4291d7da9005377ec9aec4a71ea837f').reply(config => {
  console.log(`获取用户信息mock`)
  return new Promise((resolve, reject) => {
    resolve([200, {
      'code': 1000,
      'data': {
        'id': '4291d7da9005377ec9aec4a71ea837f',
        'userName': 'admin',
        'nickName': '小胡',
        'phone': '13052113519',
        'avatar': 'https://preview.pro.loacg.com/avatar2.jpg',
        'role': {
          'id': '4591d7da9005377ec9aec4a71ea83763',
          'name': 'admin-role',
          'status': 1,
          'permissions': [{
            'permissionId': 'dashboard',
            'actions': [
              {
                'action': 'add',
                'des': '新增',
                'defaultCheck': false
              }, {
                'action': 'delete',
                'des': '删除',
                'defaultCheck': false
              }, {
                'action': 'update',
                'des': '修改',
                'defaultCheck': false
              }, {
                'action': 'query',
                'des': '查询',
                'defaultCheck': false
              }, {
                'action': 'enable',
                'des': '启用',
                'defaultCheck': false
              }, {
                'action': 'disable',
                'des': '禁用',
                'defaultCheck': false
              }, {
                'action': 'import',
                'des': '导入',
                'defaultCheck': false
              }, {
                'action': 'export',
                'des': '导出',
                'defaultCheck': false
              }
            ]
          }]
        }
      }
    }])
  })
})

// 发送验证码
mock.onPost(urls.USER_SMS_URL).reply(config => {
  const number = randomNumber(100000, 999999)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        'code': 1000,
        'data': {
          'captcha': number
        }
      }])
    }, 1000)
  })
})

// 用户注册
mock.onPost(urls.USER_REGISTER_URL).reply(config => {
  console.log(`注册mock...`)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        'code': 1000,
        'data': {
          'id': '4291d7da9005377ec9aec4a71ea837f',
          'token': '4291d7da9005377ec9aec4a71ea837f',
          'userName': 'admin',
          'nickName': '小胡',
          'phone': '13052113519',
          'avatar': 'https://preview.pro.loacg.com/avatar2.jpg',
          'status': 1,
          'expired': 0,
          'locked': 0,
          'lastLoginIp': '27.154.74.117',
          'lastLoginTime': 1534837621348
        }
      }])
    }, 2000)
  })
})

// 用户忘记密码
mock.onPost(urls.USER_FORGETPWD_URL).reply(config => {
  console.log(`忘记密码mock...`)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        'code': 1000,
        'data': {
          'id': '4291d7da9005377ec9aec4a71ea837f',
          'token': '4291d7da9005377ec9aec4a71ea837f',
          'userName': 'admin',
          'nickName': '小胡',
          'phone': '13052113519',
          'avatar': 'https://preview.pro.loacg.com/avatar2.jpg',
          'status': 1,
          'expired': 0,
          'locked': 0,
          'lastLoginIp': '27.154.74.117',
          'lastLoginTime': 1534837621348
        }
      }])
    }, 2000)
  })
})
