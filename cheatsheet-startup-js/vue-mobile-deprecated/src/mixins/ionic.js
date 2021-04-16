import { popInEnterAnimation, popOutLeaveAnimation } from '../utils/IonicUtils'

export default {
  data () {
    return {
      modal: null,
      isModalOpen: false
    }
  },
  methods: {
    /**
     * 显示提示框
     * @param message
     * @param duration
     * @returns {Promise<void | never>}
     */
    showToastMessage: function (message, duration) {
      const time = duration || 2000
      return this.$ionic.toastController.create({
        mode: 'ios',
        color: 'dark',
        position: 'middle',
        translucent: false,
        duration: time,
        message: message
      }).then(toast => {
        setTimeout(() => {
          toast.dismiss()
        }, time)
        return toast.present()
      })
    },
    /**
     * 显示加载条
     * @param message
     * @returns {Promise<any>}
     */
    showLoading: function (message) {
      const msg = message || '加载中...'
      return new Promise((resolve, reject) => {
        this.$ionic.loadingController
          .create({
            mode: 'ios',
            spinner: 'circles',
            message: msg,
            translucent: true,
            cssClass: 'custom-class custom-loading'
          }).then(res => {
            resolve(res)
          }).catch(res => {
            reject(res)
          })
      })
    },
    /**
     * 参考：
     *  1. https://github.com/ModusCreateOrg/beep/blob/master/src/mixins/hasModal.js
     *  2. https://github.com/ModusCreateOrg/ionic-vue-examples/blob/master/src/views/Modal.vue
     * 显示一个弹出层,使用方法如下：
     *  {
     *    mixins: [ionic],
     *    methods: {
     *      clickShowModal: function(){
     *         const modal = () => import('@/views/Login','half-modal')
               this.showModal(modal)
     *      },
     *      clickHideModal: function(){
     *         this.hideModal()
     *    }
     *
     *  }
     * @param modalComponent
     * @returns {*|Promise<*>|Promise<void>}
     */
    showModal: function (modalComponent = null, cssClass = null) {
      if (!this.isModalOpen) {
        this.isModalOpen = !this.isModalOpen
        return this._openModal(modalComponent, cssClass)
      }
      this.isModalOpen = !this.isModalOpen
      return Promise.resolve()
    },
    hideModal: function () {
      // 嵌套弹出框
      this.$ionic.modalController.getTop().then((modal) => {
        if (modal) {
          modal.dismiss()
        }
      })
    },
    showPopover: function (popoverComponent = null, cssClass = null) {
      if (!this.isModalOpen) {
        this.isModalOpen = !this.isModalOpen
        return this._openPopover(popoverComponent, cssClass)
      }
      this.isModalOpen = !this.isModalOpen
      return Promise.resolve()
    },
    hidePopover: function () {
      // 嵌套弹出框
      this.$ionic.popoverController.getTop().then((modal) => {
        if (modal) {
          modal.dismiss()
        }
      })
    },

    _openPopover: async function (popoverComponent = null, cssClass = null) {
      let popoverController = null

      if (cssClass) {
        popoverController = await this.$ionic.popoverController.create({
          // https://stackoverflow.com/questions/52451235/show-a-modal-on-a-modal-but-the-second-modal-is-closing-itself-ionic-3
          showBackdrop: true,
          backdropDismiss: true,
          cssClass: cssClass,
          enterAnimation: popInEnterAnimation,
          leaveAnimation: popOutLeaveAnimation,
          component: popoverComponent || this.modal
        })
      } else {
        popoverController = await this.$ionic.popoverController.create({
          // https://stackoverflow.com/questions/52451235/show-a-modal-on-a-modal-but-the-second-modal-is-closing-itself-ionic-3
          showBackdrop: false,
          backdropDismiss: false,
          enterAnimation: popInEnterAnimation,
          leaveAnimation: popOutLeaveAnimation,
          component: popoverComponent || this.modal
        })
      }
      popoverController.present()
      return popoverController.onDidDismiss().then(this.showPopover)
    },
    /**
     *
     * @param modalComponent
     * @returns {Promise<Promise<OverlayEventDetail<any> | never>>}
     * @private
     */
    _openModal: async function (modalComponent = null, cssClass = null) {
      let modalController = null
      if (cssClass) {
        modalController = await this.$ionic.modalController.create({
          // https://stackoverflow.com/questions/52451235/show-a-modal-on-a-modal-but-the-second-modal-is-closing-itself-ionic-3
          showBackdrop: true,
          backdropDismiss: true,
          cssClass: cssClass,
          enterAnimation: popInEnterAnimation,
          leaveAnimation: popOutLeaveAnimation,
          component: modalComponent || this.modal
        })
      } else {
        modalController = await this.$ionic.modalController.create({
          // https://stackoverflow.com/questions/52451235/show-a-modal-on-a-modal-but-the-second-modal-is-closing-itself-ionic-3
          showBackdrop: false,
          backdropDismiss: false,
          enterAnimation: popInEnterAnimation,
          leaveAnimation: popOutLeaveAnimation,
          component: modalComponent || this.modal
        })
      }
      modalController.present()
      return modalController.onDidDismiss().then(this.showModal)
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.isModalOpen) {
      this.$ionic.modalController.dismiss()
    }
    next(!this.isModalOpen)
  }
}
