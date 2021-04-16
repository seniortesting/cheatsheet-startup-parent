<template>
  <page-with-header :title="$t('usercenter.notification.title')" class="notification">
    <!--      消息列表-->
    <ion-content padding>
      <ion-list v-if="messages.length>0">
      </ion-list>
      <div v-else text-center>
        <no-data :message="$t('usercenter.notification.empty')"/>
      </div>
    </ion-content>
  </page-with-header>
</template>

<script>
import NoData from '../../components/NoData'
import PageWithHeader from '../../components/PageWithHeader'

export default {
  name: 'Notification',
  components: { PageWithHeader, NoData },
  data () {
    return {
      messages: []
    }
  }
}
</script>

<style scoped>

</style>
