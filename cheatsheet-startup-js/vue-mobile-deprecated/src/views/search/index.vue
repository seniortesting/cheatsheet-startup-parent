<template>
  <page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-searchbar
          ref="searchbar"
          color="white"
          autocomplete
          mode="ios"
          showCancelButton
          :cancelButtonText="$t('app.cancel')"
          :placeholder="searchPlaceholder"
          :value="keyword"
          @ionChange="searchKeyword">
        </ion-searchbar>
        <ion-label slot="end" @click="cancelSearch">取消</ion-label>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item lines="none">
          <ion-label>历史搜索</ion-label>
          <ion-icon slot="end" name="ios-trash" size="small" @click="clearSearch"></ion-icon>
        </ion-item>
        <div v-if="history.length>0">
          <ion-chip v-for="item in history" :key="item.id">
            <ion-label>{{item.content}}</ion-label>
          </ion-chip>
        </div>
        <ion-label padding text-center v-else>没有搜索记录!</ion-label>
      </ion-list>
      <ion-list>
        <ion-item lines="none">
          <ion-label>热点搜索</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </page>
</template>

<script>
import storage from '../../store/storage'
import keys from '../../store/keys'
import Page from '../../components/Page'

export default {
  name: 'Search',
  components: { Page },
  data () {
    return {
      keyword: '',
      searchPlaceholder: '输入你要搜索的关键字',
      history: []
    }
  },
  methods: {
    searchKeyword: function (event) {
      this.keyword = event.target.value
      if (this.keyword && this.keyword.length > 1) {
        this.saveSearchHistory()
      }
    },
    saveSearchHistory: function () {
      let history = storage.getItem(keys.SEARCH_HISTORY)
      if (!history) {
        history = []
      }
      history.unshift({
        id: new Date().getTime(),
        content: this.keyword
      })
      storage.setItem(keys.SEARCH_HISTORY, history)
    },
    cancelSearch: function () {
      this.$router.go(-1)
    },
    clearSearch: function () {
      storage.removeItem(keys.SEARCH_HISTORY)
      this.history = []
    }
  },
  mounted () {
    setTimeout(() => this.$refs.searchbar.setFocus(), 100)
    this.history = storage.getItem(keys.SEARCH_HISTORY) || []
  }
}
</script>

<style scoped>

</style>
