import { Toast, ImagePreview } from 'vant'
import Vue from 'vue'

Vue.use(Toast)
Vue.use(ImagePreview)
export default {
  data () {
    return {
      loadingToast: null
    }
  },
  methods: {
    showMessage: function (message) {
      this.$toast({
        message: message,
        duration: 4000
      })
    },
    showFailed: function (message) {
      this.$toast.fail({
        message: message,
        duration: 4000
      })
    },
    showSuccess: function (message) {
      this.$toast.success({
        message: message,
        duration: 3000
      })
    },
    showLoading: function (message) {
      const msg = message || '加载中...'
      return this.$toast.loading({
        duration: 0, // 持续展示 toast
        mask: true,
        forbidClick: true,
        loadingType: 'spinner',
        message: msg
      })
    },
    showImagePreview: function (images) {
      ImagePreview({
        images: images
      })
    }
  },
  mounted () {
    // 注意此处的巨坑，
    this.$toast.allowMultiple()
  }
}
