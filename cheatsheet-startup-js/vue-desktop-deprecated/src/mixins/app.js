import { mapState } from 'vuex'
import { DEVICE_TYPE, deviceEnquire } from '../utils/DeviceUtils'
import names from '../store/names'
const mixinApp = {
  computed: {
    ...mapState({
      layoutMode: state => state.app.layout,
      navTheme: state => state.app.theme,
      primaryColor: state => state.app.color,
      colorWeak: state => state.app.weak,
      fixedHeader: state => state.app.fixedHeader,
      fixSiderbar: state => state.app.fixSiderbar,
      fixSidebar: state => state.app.fixSiderbar,
      contentWidth: state => state.app.contentWidth,
      autoHideHeader: state => state.app.autoHideHeader,
      sidebarOpened: state => state.app.sidebar,
      multiTab: state => state.app.multiTab
    })
  },
  methods: {
    isTopMenu () {
      return this.layoutMode === 'topmenu'
    },
    isSideMenu () {
      return !this.isTopMenu()
    }
  }
}

const mixinDevice = {
  computed: {
    ...mapState({
      device: state => state.app.device
    })
  },
  methods: {
    isMobile () {
      return this.device === DEVICE_TYPE.MOBILE
    },
    isDesktop () {
      return this.device === DEVICE_TYPE.DESKTOP
    },
    isTablet () {
      return this.device === DEVICE_TYPE.TABLET
    }
  }
}

const AppDeviceEnquire = {
  mounted () {
    const store = this.$store
    deviceEnquire(deviceType => {
      switch (deviceType) {
        case DEVICE_TYPE.DESKTOP:
          store.dispatch(names.TOGGLE_DEVICE, 'desktop')
          store.dispatch(names.SET_SIDEBAR_TYPE, true)
          break
        case DEVICE_TYPE.TABLET:
          store.dispatch(names.TOGGLE_DEVICE, 'tablet')
          store.dispatch(names.SET_SIDEBAR_TYPE, false)
          break
        case DEVICE_TYPE.MOBILE:
        default:
          store.dispatch(names.TOGGLE_DEVICE, 'mobile')
          store.dispatch(names.SET_SIDEBAR_TYPE, true)
          break
      }
      console.log('deviceType -> ', deviceType)
    })
  }
}

export { mixinApp, mixinDevice, AppDeviceEnquire }
