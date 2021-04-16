<template>
  <div>
    <!-- 底部导航-->
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" :to="{name: 'home'}">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-home"></use>
          </svg>
          <ion-label class="tab-font">{{$t('home.name')}}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="discover" :to="{name: 'discover'}">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-workspace"></use>
          </svg>
          <ion-label class="tab-font">{{$t('discover.name')}}</ion-label>
        </ion-tab-button>

        <!-- 加号-->
        <ion-tab-button tab="add">
        </ion-tab-button>

        <ion-tab-button tab="contact" :to="{name: 'contact'}">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-contact"></use>
          </svg>
          <ion-label class="tab-font">{{$t('contact.name')}}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="usercenter" :to="{name: 'usercenter'}">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-usercenter"></use>
          </svg>
          <ion-label class="tab-font">{{islogged? $t('usercenter.name') : $t('usercenter.notlogged')}}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

      <!-- start 在命名视图中是针对不同的视图进行判断的-->
      <ion-tab tab="home">
        <ion-vue-router name="home" :animated="false"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="discover">
        <ion-vue-router name="discover" :animated="false"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="contact">
        <ion-vue-router name="contact" :animated="false"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="usercenter">
        <ion-vue-router name="usercenter" :animated="false"></ion-vue-router>
      </ion-tab>
      <!-- end 在命名视图中是针对不同的视图进行判断的-->
    </ion-tabs>
    <ion-fab vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button @click="showPublishPanel">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
<!--      显示选项, 采用对话框形式-->
<!--      <ion-fab-list side="top">-->
<!--        <ion-fab-button>-->
<!--          <ion-icon name="logo-twitter"></ion-icon>-->
<!--        </ion-fab-button>-->
<!--      </ion-fab-list>-->
    </ion-fab>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ionic from '../mixins/ionic'

export default {
  name: 'TabLayout',
  mixins: [ionic],
  methods: {
    showPublishPanel: function () {
      const publishPanel = () => import('@/components/PublishPanel')
      this.showModal(publishPanel, 'half-modal')
    }
  },
  computed: {
    ...mapGetters(['islogged'])
  }
}
</script>

<style scoped>
  .icon {
    width: 16px;
    height: 16px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .tab-font {
    font-size: 10px;
  }

  .add-btn {
    font-size: 40px !important;
  }
</style>
