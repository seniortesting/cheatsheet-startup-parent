import DPlayer from 'dplayer'

const VueDPlayer = {
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      defaultOptions: {
        lang: 'zh-cn',
        autoplay: true,
        theme: '#FADFA3',
        loop: true,
        screenshot: true,
        airplay: true,
        hotkey: true,
        volume: 0.5,
        mutex: true
      },
      dp: null
    }
  },
  mounted () {
    this.options.container = this.$el
    const options = Object.assign(this.options, this.defaultOptions)
    const player = this.dp = new DPlayer(options)
    const events = player.events
    Object.keys(events).forEach((item) => {
      if (item === 'events') {
        return false
      } else {
        events[item].forEach((event) => {
          player.on(event, () => this.$emit(event))
        })
      }
    })
    player.on('contextmenu_hide', () => {

    })
  },
  install (Vue, { name = 'd-player' } = {}) {
    Vue.component(name, this)
  },
  render (h) {
    return h('div', {
      class: 'dplayer'
    }, [])
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VueDPlayer = VueDPlayer
}

export default VueDPlayer
