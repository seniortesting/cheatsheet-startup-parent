import Vue from 'vue'
import https from 'https'
import axios from 'axios'

import storage from '../store/storage'
import keys from '../store/keys'
import Weixin from '../api/services/weixin'

const weixin = new Weixin()
// axios的相关配置参数
const Agent = new https.Agent({
  rejectUnauthorized: true
})
let apiConfig = {
  httpsAgent: Agent,
  timeout: 30 * 1000 // Timeout
}
const http = axios.create(apiConfig)
http.defaults.headers.post['Content-Type'] = 'application/json'
http.defaults.headers.put['Content-Type'] = 'application/json'
// http.defaults.baseURL = 'https://open.yitieyilu.com/core'
http.interceptors.request.use(
  config => {
    showPreloader()
    if (!config.headers.Authorization) {
      const token = storage.getItem(keys.LOGIN_TOKEN)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    // 加上公用的用户的参数
    const userInfo = storage.getItem(keys.LOGIN_INFO)
    const userid = userInfo ? userInfo.userid : '0'
    if (config.data instanceof FormData) {
      if (!config.data.get('userid')) {
        config.data.append('userid', userid)
      }
    } else if (config.data instanceof Object) {
      if (!config.data.userid) {
        config.data = {
          userid: userid,
          ...config.data
        }
      }
    } else {
      if (config.params) {
        if (!config.params.userid) {
          config.params = {
            userid: userid,
            ...config.params
          }
        }
      } else {
        config.params = {
          userid: userid,
          ...config.params
        }
      }
    }
    return config
  },
  error => {
    hidePreloader()
    console.log(`发送Axios请求失败，错误代码: ${error}`)
    return Promise.reject(error)
  }
)

// Add a response interceptor
http.interceptors.response.use(
  response => {
    console.debug('[BA-XHR] 返回的数据: ', response)
    hidePreloader()
    return response
  },
  error => {
    // 401 errror
    hidePreloader()
    const originalRequest = error.config
    if (error.response) { // 如果是网络原因等
      if (error.response.status === 401 && !originalRequest._retry) {
        console.log(`无法认证的请求${originalRequest},重新请求相关信息中....`)
        originalRequest._retry = true
        // 如果本地存在该用户信息
        return weixin.oauthToken().then((response) => {
          const validResponse = response.status === 200
          if (validResponse) {
            const tokenInfo = response.data
            const accessToken = tokenInfo.access_token
            storage.setItem(keys.LOGIN_TOKEN, accessToken)
            console.log('重新发起正确的请求...')
            return http(originalRequest)
          }
        }).catch((error) => {
          console.log(`认证失败，非法请求: ${JSON.stringify(error)}`)
          hidePreloader()
          for (let i = 0; i < error.response.data.errors.length; i++) {
            if (error.response.data.errors[i] === 'TOKEN-EXPIRED') {
              return
            }
          }
        })
      }
    }
    return Promise.reject(error)
  }
)

/** 发起请求的时候显示的加载模式窗口 **/
const showPreloader = function () {

}
/** 加载完成的时候隐藏模式窗口 **/
const hidePreloader = function () {

}
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.http = http
Vue.prototype.$http = http

export default http
