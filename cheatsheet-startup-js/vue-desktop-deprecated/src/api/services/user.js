import http from '../../plugins/axios'
import urls from '../index'
import store from '../../store'
import names from '../../store/names'
import storage from '../../store/storage'
import keys from '../../store/keys'

export default class User {
  /**
   * 登录用户
   * @param data
   * @returns {*}
   */
  login (data) {
    return new Promise((resolve, reject) => {
      http.post(urls.USER_LOGIN_URL, data).then(res => {
        const resCode = res.data.code
        if (resCode === 1000) {
          const result = res.data.data
          const accessToken = result.token
          // 保存用户信息和token信息
          store.dispatch(names.UPDATE_LOGIN_INFO, result)
          store.dispatch(names.UPDATE_LOGIN_TOKEN, accessToken)
        }
        resolve(resCode)
      }).catch(error => {
        reject(error)
      })
    })
  }

  /**
   * 注册用户
   * @param data
   */
  register (data) {
    return new Promise((resolve, reject) => {
      http.post(urls.USER_REGISTER_URL, data).then(res => {
        const resCode = res.data.code
        if (resCode === 1000) {
          const result = res.data.data
          const accessToken = result.token
          // 保存用户信息和token信息
          store.dispatch(names.UPDATE_LOGIN_INFO, result)
          store.dispatch(names.UPDATE_LOGIN_TOKEN, accessToken)
        }
        resolve(resCode)
      }).catch(error => {
        reject(error)
      })
    })
  }

  /**
   * 忘记密码
   * @param data
   */
  forgetPwd (data) {

  }
  /**
   * 短信验证码
   * @param data
   * @returns {*}
   */
  getSmsCaptcha (data) {
    return http.post(urls.USER_SMS_URL, data)
  }
  /**
   * 两步验证
   * @param data
   * @returns {*}
   */
  get2step (data) {
    return http.post(urls.USER_TWOSTEP_URL, data)
  }

  isAuthorization () {
    const accessToken = storage.getItem(keys.LOGIN_TOKEN)
    return accessToken
  }
  /**
   * 得到用户的详细信息
   */
  getUserInfo () {
    return new Promise((resolve, reject) => {
      const userInfo = Object.keys(store.getters.userInfo).length > 0 ? store.getters.userInfo : storage.getItem(keys.LOGIN_INFO)
      if (userInfo) {
        // 如果存在
        const url = `${urls.USER_INFO}/${userInfo.id}`
        http.get(url).then(res => {
          const resCode = res.data.code
          if (resCode === 1000) {
            // 保存用户的相关信息
            const data = res.data.data
            const role = data.role
            if (role && role.permissions.length > 0) {
              // 这个用在路由的过滤上，必须要转化一下
              role.permissionList = role.permissions.map(permission => { return permission.permissionId })
              role.permissions.map(per => {
                if (per.actions != null && per.actions.length > 0) {
                  const action = per.actions.map(action => { return action.action })
                  per.actionList = action
                }
              })
              // 保存用户的角色信息
              store.dispatch(names.UPDATE_ROLES, role)
            } else {
              reject(new Error('getInfo: role must be a non-null array !'))
            }

            const id = data.id
            const userName = data.userName
            const nickName = data.nickName
            const phone = data.phone
            const avata = data.avatar
            store.dispatch(names.UPDATE_LOGIN_INFO, {
              id: id,
              userName: userName,
              nickName: nickName,
              phone: phone,
              avatar: avata
            })
            resolve(role)
          }
        }).catch(err => {
          reject(err)
        })
      } else {
        reject(userInfo)
      }
    })
  }
  /**
   * 退出登录
   * @param data
   * @returns {*}
   */
  logout () {
    return new Promise((resolve, reject) => {
      store.dispatch(names.UPDATE_LOGOUT)
      resolve()
    })
  }
}
