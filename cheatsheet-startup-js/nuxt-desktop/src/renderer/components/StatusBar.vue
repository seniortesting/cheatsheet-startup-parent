<template>
  <div class="status-bar">
    <div class="status-content">
      <div
        class="action console-log"
      >
        <span>{{ message }}</span>
      </div>
      <!--       right menu-->
      <div
        class="section action bug-report"
        @click="onBugReportClick()"
      >
        <a-icon type="question-circle" />
      </div>
      <div
        class="section action reset-plugin-api"
        @click="refreshUI()"
      >
        <a-icon type="issues-close" />
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: 'StatusBar',
  data () {
    return {
      message: 'No new messages.'
    }
  },
  mounted () {
    // monitor the message event from
    ipcRenderer.on('message', (event, data) => {
      this.message = data
    })
  },
  methods: {
    onBugReportClick () {
    },
    refreshUI () {

    }
  }
}
</script>

<style scoped>
  .status-bar {
    position: relative;
    z-index: 3;
    flex: auto 0 0;
    -webkit-box-shadow: 0 -2px 10px rgba(0,0,0,.1);
    box-shadow: 0 -2px 10px rgba(0,0,0,.1)
  }
  .status-bar .status-content{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 11px;
    height: 20px;
    background: #0D70FF;
    color:  #ffffff;
  }
  .status-bar .section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 8px;
    height: 100%;
    cursor: default
  }
  .status-bar .section:hover {
    background: #12CAFF
  }
  .status-bar .section.action {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  .status-bar .console-log {
    margin-left: 10px;
     width: 94vw;
  }

</style>
