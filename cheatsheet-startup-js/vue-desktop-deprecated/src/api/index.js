import consts from '../config'
// 所有的api接口
const urls = {
  // 进行配置jssdk的接口
  JSAPI_URL: consts.serverUrls.WEIXIN_BASE_URL + '/js/sdk2',
  // 获取接口的aouth bearer认证接口
  TOKEN_URL: consts.serverUrls.AUTH_BASE_URL + '/token',
  // 微信的oauth认证地址，保存用户相关个人信息
  WEIXIN_OUATH_URL: consts.serverUrls.API_BASE_URL + '/wx/info',
  // 用户相关请求地址
  USER_LOGIN_URL: consts.serverUrls.API_BASE_URL + '/user/login',
  USER_REGISTER_URL: consts.serverUrls.API_BASE_URL + '/user/register',
  USER_FORGETPWD_URL: consts.serverUrls.API_BASE_URL + '/user/forgetpwd',
  USER_INFO: consts.serverUrls.API_BASE_URL + '/user',
  USER_SMS_URL: consts.serverUrls.API_BASE_URL + '/user/sms',
  USER_TWOSTEP_URL: consts.serverUrls.API_BASE_URL + '/user/2step-code'

}
export default urls
