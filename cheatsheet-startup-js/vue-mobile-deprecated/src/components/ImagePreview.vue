<template>
    <page>
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-button @click="closeModal()"> <ion-icon slot="icon-only" name="close"></ion-icon> </ion-button>
          </ion-buttons>
          <ion-title>{{ imgTitle }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content forceOverscroll="false" color="dark" fullscreen>
        <ion-slides @options="slideOpts" @ionSlideDidChange="slideChanged($event)">
          <ion-slide v-for="(img,index) in images" :key="index">
            <div class="swiper-zoom-container"><img :src="img.src" height="100vh" /></div>
          </ion-slide>
        </ion-slides>
      </ion-content>

      <ion-footer v-if="currentImage.desc.length">
        <ion-toolbar color="dark" text-center>
          <ion-text>{{ currentImage.desc }}</ion-text>
        </ion-toolbar>
      </ion-footer>
    </page>
</template>

<script>
// 参考： https://github.com/SimonGolms/ionic4-image-viewer-example/blob/master/src/app/component/image-viewer/image-viewer.component.html
import Page from './Page'
export default {
  name: 'ImagePreview',
  components: { Page },
  data () {
    return {
      slideOpts: {
        initialSlide: 0,
        centeredSlides: 'true'
      },
      images: [],
      currentImage: {
        src: '',
        desc: ''
      }
    }
  },
  methods: {
    slideChanged: function ($event) {
      const value = $event.detail.value
      console.log(value)
    },
    closeModal: function () {
      this.$ionic.modalController.getTop().then((modalController) => {
        modalController && modalController.dismiss()
      })
    }
  }

}
</script>

<style scoped>
  ion-slides {
    height: 100%;
  }
</style>
