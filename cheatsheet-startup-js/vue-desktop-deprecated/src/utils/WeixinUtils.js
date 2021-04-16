import axios from '../plugins/axios.js'
import { jsConfig } from '../api/services/weixin'

const wx = window.wx
const wxApiList = [ // 所有要调用的 API 都要加到这个列表中
  'checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage',
  'miniProgram',
  'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone',
  'showOptionMenu', 'hideOptionMenu', 'closeWindow',
  'chooseImage', 'previewImage', 'uploadImage', 'downloadImage',
  'getNetworkType', 'openLocation', 'getLocation',
  'scanQRCode'
]

const weixinSetup = (pageurl) => {
  if (!pageurl) {
    pageurl = location.href.split('#')[0] // hash后面的部分如果带上ios中config会不对
  }
  pageurl = encodeURIComponent(pageurl)
  // alert(`jssdk页面url: ${currentUrl}, 对应的页面地址是: ${linkUrl}`)
  return new Promise((resolve, reject) => {
    jsConfig(pageurl).then((response) => {
      // console.log(`获取的结果是: ${JSON.stringify(response)}`)
      const code = response.data.code
      if (code === 1000) {
        let signaturedata = response.data.data
        if (signaturedata.signature) {
          // StoreUtils.set(webconfig.StoreWXSignatureKey, signaturedata, 7100)
          wx.config({
            debug: process.env.NODE_ENV !== 'production', // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: signaturedata.appid, // 必填，公众号的唯一标识
            timestamp: signaturedata.timestamp, // 必填，生成签名的时间戳
            nonceStr: signaturedata.noncestr, // 必填，生成签名的随机串
            signature: signaturedata.signature, // 必填，签名，见附录1
            jsApiList: wxApiList
          })
        }
        wx.ready(() => {
          resolve(wx)
        })
        wx.error(function (res) {
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
          reject(new Error(`微信接口配置出错返回异常: ${JSON.stringify(res)}`))
        })
      } else {
        reject(new Error(`服务器端微信签名返回异常代码: ${code}!`))
      }
    }).catch((error) => {
      reject(new Error(`服务器微信签名未捕获的异常错误: ${JSON.stringify(error)}`))
    })
  })
}

/**
 * 分享接口调用
 * @param title
 * @param linkUrl
 * @param imageUrl
 * @param desc
 * @param successCallback
 */
export const weixinShare = (title, desc, linkUrl, imageUrl, successCallback, pageUrl) => {
  if (isWeixin()) {
    weixinSetup(pageUrl).then((wx) => {
      wx.onMenuShareTimeline({
        title: title,
        link: linkUrl,
        imgUrl: imageUrl,
        success: function () {
          successCallback()
        },
        error: function () {
        }
      })
      // 分享给朋友
      wx.onMenuShareAppMessage({
        title: title,
        desc: desc,
        link: linkUrl,
        imgUrl: imageUrl,
        success: function () {
          successCallback()
        },
        error: function () {
          // alert('分享朋友失败')
        }
      })
      // 分享到到QQ
      wx.onMenuShareQQ({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: linkUrl, // 分享链接
        imgUrl: imageUrl, // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
          successCallback()
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      })
      // 分享到腾讯微博
      wx.onMenuShareWeibo({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: linkUrl, // 分享链接
        imgUrl: imageUrl, // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
          successCallback()
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      })
      // 分享到QQ空间
      wx.onMenuShareQZone({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: linkUrl, // 分享链接
        imgUrl: imageUrl, // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
          successCallback()
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      })
    })
  }
}

/**
 * 选择图片
 * @param callback
 */
export const weixinChooseImage = (callback, pageurl) => {
  if (isWeixin()) {
    weixinSetup(pageurl).then((wx) => {
      wx.chooseImage(callback)
    })
  }
}

/**
 * 上传图片
 * @param callback
 */
export const weixinUploadImage = (callback, pageurl) => {
  if (isWeixin()) {
    weixinSetup(pageurl).then((wx) => {
      wx.uploadImage(callback)
    })
  }
}

/**
 * 获取地理位置
 * @param callback
 */
export const weixinGetLocation = (callback, pageurl) => {
  if (isWeixin()) {
    weixinSetup(pageurl).then((wx) => {
      wx.getLocation(callback)
    })
  }
}
/**
 * 打开一个地理位置
 * @param lat
 * @param lng
 * @param name
 * @param address
 */
export const weixinOpenLocation = function (lat, lng, name, address, pageurl) {
  if (isWeixin()) {
    weixinSetup(pageurl).then((wx) => {
      wx.openLocation({
        latitude: parseFloat(lat), // 纬度，浮点数，范围为90 ~ -90
        longitude: parseFloat(lng), // 经度，浮点数，范围为180 ~ -180。
        name: name, // 位置名
        address: address, // 地址详情说明
        scale: 20, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: 'https://bestphoto.yitieyilu.com', // 在查看位置界面底部显示的超链接,可点击跳转
        error: function (res) {
          alert(`打开位置异常,错误代码: ${JSON.stringify(res)}`)
        }
      })
    })
  }
}

/**
 * 扫描二维码
 * @param callback
 */
export const weixinScanQRCode = (callback, pageurl) => {
  if (isWeixin()) {
    weixinSetup(pageurl).then((wx) => {
      window.wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
          callback(result)
        }
      })
    })
  }
}

/**
 * 返回到小程序的某个特定页面中
 * @param path
 */
export const weixinMiniNavigateTo = (pageurl, path) => {
  if (isWeixin()) {
    weixinSetup(pageurl).then((wx) => {
      wx.miniProgram.navigateTo({ url: path })
    })
  }
}

/**
 * 发送消息
 * @param accesstoken
 * @param data
 */
export const sendNotification = function (accesstoken, data) {
  let url = `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${accesstoken}`
  axios.post(url, data).then((res) => {

  }).catch((err) => {
    console.log(`发送消息出错: ${err}`)
  })
}

export const isWeixin = function () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera
  const isWeixinBrowser = /MicroMessenger/i.test(userAgent)
  const isMini = window.__wxjs_environment === 'miniprogram' || isWeixinBrowser
  return isMini
}
