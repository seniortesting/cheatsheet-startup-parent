const sleep = (interval) => {
  setTimeout(() => {
    new Date().getTime()
  }, interval)
}

/**
 * 使用方法：
 * QQ地图： loadScript(global.qqMap,'https://map.qq.com/api/js?v=2.exp&key=')
 * @param globalObject
 * @param src
 * @returns {*|Promise<any>|null|Promise<any>}
 */
const loadScript = function (globalObject, src) {
  if (!globalObject) {
    globalObject = {}
    globalObject._preloader = new Promise((resolve, reject) => {
      global._initObject = function () {
        resolve(globalObject)
        global.document.body.removeChild($script)
        globalObject._preloader = null
        global._initObject = null
      }
      const $script = document.createElement('script')
      $script.src = src
      global.document.body.appendChild($script)
    })
    return globalObject._preloader
  } else if (!globalObject._preloader) {
    return Promise.resolve(globalObject)
  } else {
    return globalObject._preloader
  }
}
export { sleep, loadScript }
