// 后台配置信息
import storage from '../storage'
import keys from '../keys'
import names from '../names'

const app = {
  state: {
    sidebar: true,
    device: 'desktop',
    theme: '',
    layout: '',
    contentWidth: '',
    fixedHeader: false,
    fixSiderbar: false,
    autoHideHeader: false,
    color: null,
    weak: false,
    multiTab: true
  },
  mutations: {
    // 关闭边栏
    [names.SET_SIDEBAR_TYPE]: (state, type) => {
      state.sidebar = type
      storage.setItem(keys.SIDEBAR_TYPE, type)
    },
    [names.CLOSE_SIDEBAR]: (state) => {
      state.sidebar = false
      storage.setItem(keys.SIDEBAR_TYPE, true)
    },
    // 切换设备
    [names.TOGGLE_DEVICE]: (state, device) => {
      state.device = device
    },
    // 切换主题
    [names.TOGGLE_THEME]: (state, theme) => {
      // setStore('_DEFAULT_THEME', theme)
      state.theme = theme
      storage.setItem(keys.DEFAULT_THEME, theme)
    },
    // 切换布局
    [names.TOGGLE_LAYOUT_MODE]: (state, layout) => {
      state.layout = layout
      storage.setItem(keys.DEFAULT_LAYOUT_MODE, layout)
    },
    // 顶部导航页头fix状态
    [names.TOGGLE_FIXED_HEADER]: (state, fixed) => {
      state.fixedHeader = fixed
      storage.setItem(keys.DEFAULT_FIXED_HEADER, fixed)
    },
    [names.TOGGLE_FIXED_SIDERBAR]: (state, fixed) => {
      state.fixSiderbar = fixed
      storage.setItem(keys.DEFAULT_FIXED_SIDEMENU, fixed)
    },
    [names.TOGGLE_FIXED_HEADER_HIDDEN]: (state, show) => {
      state.autoHideHeader = show
      storage.setItem(keys.DEFAULT_FIXED_HEADER_HIDDEN, show)
    },
    [names.TOGGLE_CONTENT_WIDTH]: (state, type) => {
      state.contentWidth = type
      storage.setItem(keys.DEFAULT_CONTENT_WIDTH_TYPE, type)
    },
    [names.TOGGLE_COLOR]: (state, color) => {
      state.color = color
      storage.setItem(keys.DEFAULT_COLOR, color)
    },
    [names.TOGGLE_WEAK]: (state, flag) => {
      state.weak = flag
      storage.setItem(keys.DEFAULT_COLOR_WEAK, flag)
    },
    [names.TOGGLE_MULTI_TAB]: (state, bool) => {
      state.multiTab = bool
      storage.setItem(keys.DEFAULT_MULTI_TAB, bool)
    }
  },
  actions: {
    [names.SET_SIDEBAR_TYPE]: ({ commit }, type) => {
      commit(names.SET_SIDEBAR_TYPE, type)
    },
    [names.CLOSE_SIDEBAR]: ({ commit }) => {
      commit(names.CLOSE_SIDEBAR)
    },
    [names.TOGGLE_DEVICE]: ({ commit }, device) => {
      commit(names.TOGGLE_DEVICE, device)
    },
    [names.TOGGLE_THEME]: ({ commit }, theme) => {
      commit(names.TOGGLE_THEME, theme)
    },
    [names.TOGGLE_LAYOUT_MODE]: ({ commit }, mode) => {
      commit(names.TOGGLE_LAYOUT_MODE, mode)
    },
    [names.TOGGLE_FIXED_HEADER]: ({ commit }, fixedHeader) => {
      if (!fixedHeader) {
        commit(names.TOGGLE_FIXED_HEADER_HIDDEN, false)
      }
      commit(names.TOGGLE_FIXED_HEADER, fixedHeader)
    },
    [names.TOGGLE_FIXED_SIDERBAR]: ({ commit }, fixSiderbar) => {
      commit(names.TOGGLE_FIXED_SIDERBAR, fixSiderbar)
    },
    [names.TOGGLE_FIXED_HEADER_HIDDEN]: ({ commit }, show) => {
      commit(names.TOGGLE_FIXED_HEADER_HIDDEN, show)
    },
    [names.TOGGLE_CONTENT_WIDTH]: ({ commit }, type) => {
      commit(names.TOGGLE_CONTENT_WIDTH, type)
    },
    [names.TOGGLE_COLOR]: ({ commit }, color) => {
      commit(names.TOGGLE_COLOR, color)
    },
    [names.TOGGLE_WEAK]: ({ commit }, weakFlag) => {
      commit(names.TOGGLE_WEAK, weakFlag)
    },
    [names.TOGGLE_MULTI_TAB]: ({ commit }, bool) => {
      commit(names.TOGGLE_MULTI_TAB, bool)
    }
  }
}

export default app
