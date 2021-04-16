<template>
  <page-with-header :title="$t('usercenter.settings.about.title')" class="about">
    <ion-content padding class="about-page">
      <div class="logo">
        <img :src="`${rootPath}img/icons/512x512.png`" class="lazy lazy-fade-in" alt="logo">
      </div>
      <div class="app-name">{{$t('app.name')}}</div>
      <ion-text class="detail">
        <p>{{$t('usercenter.settings.about.version')}}: <a external href="#">{{buildVersion}}</a></p>
        <p>{{$t('usercenter.settings.about.website')}}: <a external
                                                           href="https://www.yitieyilu.com">https://github.com</a></p>
        <p>{{$t('usercenter.settings.about.email')}}: <a external
                                                         href="mailto:help@yitieyilu.com?subject=反馈问题到Vue Framework7">help@gmail.com</a>
        </p>
        <p>{{$t('usercenter.settings.about.wechat')}}: <a external
                                                          href="https://open.weixin.qq.com/qr/code?username=Delightful_Village">{{$t('app.name')}}</a>
        </p>
      </ion-text>
      <copy-right/>
    </ion-content>
  </page-with-header>
</template>

<script>
import PageWithHeader from '../../../components/PageWithHeader'
import CopyRight from '../../../components/CopyRight'

export default {
  name: 'About',
  components: { CopyRight, PageWithHeader },
  data () {
    return {
      rootPath: process.env.BASE_URL,
      buildVersion: process.env.VUE_APP_VERSION
    }
  }
}
</script>

<style lang="less">
  .about-page {
    .logo {
      width: 90px;
      height: 90px;
      line-height: 90px;
      background-color: #fff;
      /*text-indent: -9999;*/
      border-radius: 5px;
      margin: 0 auto;
      border: 1px solid #dfdfdf;
      text-align: center;

      > img {
        width: 75px;
        height: 75px;
        vertical-align: middle;
      }
    }

    .app-name {
      text-align: center;
      color: #666;
      font-size: 20px;
      margin-top: 15px;
    }

    .detail {
      padding: 15px;
      text-align: left;
      color: #666;

      > p {
        /*text-align: center;*/
        margin: 6px 8vh 0;
      }
    }
  }
</style>
