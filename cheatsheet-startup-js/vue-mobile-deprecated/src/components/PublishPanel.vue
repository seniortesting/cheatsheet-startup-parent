<template>
  <ion-content padding class="animated fadeIn">
    <ion-grid>
      <ion-row>
        <ion-col text-center>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qq"></use>
            </svg>
          </div>
          <ion-label>QQ</ion-label>
        </ion-col>
        <ion-col text-center>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
          </div>
          <ion-label>Wechat</ion-label>
        </ion-col>
        <ion-col text-center>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weibo"></use>
            </svg>
          </div>
          <ion-label>Weibo</ion-label>
        </ion-col>
        <ion-col text-center>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jinritoutiao"></use>
            </svg>
          </div>
          <ion-label>Toutiao</ion-label>
        </ion-col>
      </ion-row>
    </ion-grid>

    <!--    底部的关闭按钮-->
    <ion-fab vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button @click="hideModal">
        <ion-icon name="close"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script>
export default {
  name: 'PublishPanel',
  methods: {
    hideModal: function () {
      this.$ionic.modalController.getTop().then(modal => {
        modal.dismiss()
      })
    }
  }
}
</script>

<style scoped>
  .icon {
    width: 32px;
    height: 32px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
