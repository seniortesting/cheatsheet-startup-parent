import consts from '../config/index.js'

const loadScript = function () {
  if (!global.qqMap) {
    global.qqMap = {}
    global.qqMap._preloader = new Promise((resolve, reject) => {
      global._initQQMap = function () {
        resolve(global.qqMap)
        global.document.body.removeChild($script)
        global.qqMap._preloader = null
        global._initQQMap = null
      }
      const $script = document.createElement('script')
      global.document.body.appendChild($script)
      $script.src = `https://map.qq.com/api/js?v=2.exp&key=${consts.QQMAPKEY}`

      // add the infowindow
      // const $infowindowscript = document.createElement('script')
      // $infowindowscript.setAttribute("type","text/javascript")
      // $infowindowscript.setAttribute("src",  'http://api.map.baidu.com/library/InfoBox/1.2/src/InfoBox_min.js')
    })
    return global.qqMap._preloader
  } else if (!global.qqMap._preloader) {
    return Promise.resolve(global.qqMap)
  } else {
    return global.qqMap._preloader
  }
}

export { loadScript }
