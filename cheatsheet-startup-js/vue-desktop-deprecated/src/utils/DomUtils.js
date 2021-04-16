/**
 * 触发 window.resize
 */
export const triggerWindowResizeEvent = function () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export const handleScrollHeader = function (callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () {}
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export const removeLoadingAnimate = function (id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}

/**
 * 使用方法：
 * QQ地图： loadScript(global.qqMap,'https://map.qq.com/api/js?v=2.exp&key=')
 * @param globalObject
 * @param src
 * @returns {*|Promise<any>|null|Promise<any>}
 */
export const loadScript = function (globalObject, src) {
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
