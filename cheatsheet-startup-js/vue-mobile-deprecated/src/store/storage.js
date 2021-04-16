const storejs = require('store')
var expirePlugin = require('store/plugins/expire')
storejs.addPlugin(expirePlugin)
// 同步操作数据
const storage = {
  getItem: function (storeKey) {
    // 移除所有过期的key
    // store.removeExpiredKeys()
    return storejs.get(storeKey)
  },
  setItem: function (storeKey, storeValue, seconds) {
    // 第三个参数是设置对应的过期时间,到了时间会自动删除掉该过期的key
    if (seconds) {
      storejs.set(storeKey, storeValue, new Date().getTime() + seconds * 1000)
    } else {
      storejs.set(storeKey, storeValue)
    }
  },
  removeItem: function (storeKey) {
    storejs.remove(storeKey)
  },
  clear: function () {
    storejs.clearAll()
  }
}

export default storage
