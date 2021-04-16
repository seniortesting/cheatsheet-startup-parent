<template>
  <!--上传组件-->
  <div class="toutiao-uploader">
    <!--<div class="toutiao-uploader_hd">-->
    <!--<p class="toutiao-uploader_title">{{ title }}</p>-->
    <!--<div class="toutiao-uploader_info">{{ imageUploadedList.length }} / {{ limit }}</div>-->
    <!--</div>-->
    <div class="toutiao-uploader_bd">
      <ul class="toutiao-uploader_files">
        <li :class="{
              'toutiao-uploader_file': true,
              'toutiao-uploader_file-status': !!item.fetchStatus && item.fetchStatus !== 'success'
            }"
            v-for="(item, index) in uploadedList"
            :key="index"
            :style="{
              backgroundImage: `url(${item.url})`
            }"
            @click="handleImagePreview($event, item)"
        >
          <div v-if="!!item.fetchStatus && item.fetchStatus !== 'success'" class="toutiao-uploader_file-content">
            {{ item.fetchStatus === 'progress' ? item.progress + '%' : '' }}
            <!-- progress !== 0 && progress < 100 -->
            <i v-if="item.fetchStatus === 'fail'" class="upload-error"></i>
          </div>
        </li>
        <ion-icon name="md-trash" class="toutiao-uploader_del"></ion-icon>
      </ul>
      <div class="toutiao-uploader_input-box" v-show="uploadedList.length < limit">
        <button ref="file" style="width: 100%;height: 100%;" class="toutiao-uploader_input"
                @click="showUploadOptions">
        </button>
      </div>
    </div>
    <div class="toutiao-uploader_previewer" id="previewer" v-show="previewVisible" @click="hidePreviewer">
      <div class="toutiao-uploader_preview-img" id="previewerImg"></div>
      <div @click="deleteImage">
        <ion-icon name="md-trash" class="toutiao-uploader_del"></ion-icon>
      </div>
      <!--<div class="toutiao-uploader_del" @click="deleteImage"></div>-->
    </div>

  </div>
</template>

<script>
import vant from '../mixins/vant'
export default {
  name: 'Uploader',
  mixins: [vant],
  props: {
    limit: {
      type: Number,
      default: 10
    },
    url: {
      type: String
    },
    params: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      uploadedList: [],
      previewVisible: false
    }
  },
  methods: {
    showUploadOptions: function () {
      this.$ionic.actionSheetController.create({
        buttons: [
          {
            text: '从相册中选择',
            role: 'destructive',
            handler: () => {
              console.log('choose clicked')
            }
          },
          {
            text: '拍照',
            handler: () => {
              console.log('Play clicked')
            }
          },
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked')
            }
          }
        ]
      }).then((actionSheetController) => {
        actionSheetController.present()
      })
    },
    // 放大预览图片
    handleImagePreview: function ($event, item) {
      const imgs = []
      imgs.push(item.url)
      this.showImagePreview(imgs)
    },
    hidePreviewer: function () {

    },
    deleteImage: function () {

    },
    submitUpload: function () {

    }
  }
}
</script>

<style scoped lang="less">
  .toutiao-uploader {
    margin-left: 2px;

  .toutiao-uploader_hd {
    /*display:;*/
    padding-bottom: 10px;

  .toutiao-uploader_title {
    flex: 1;
  }

  .toutiao-uploader_info {
    color: #b2b2b2;
  }
  }

  .toutiao-uploader_bd {
    overflow: hidden;

  .toutiao-uploader_files {
    list-style: none;

  .toutiao-uploader_file {
    float: left;
    margin-right: 9px;
    margin-bottom: 9px;
    width: 99px;
    height: 99px;
    background: no-repeat center center;
    background-size: cover;
  }

  .toutiao-uploader_file-status {
    position: relative;

  &:before {
     content: "";
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     background: rgba(0, 0, 0, 0.4);
   }
  }

  .toutiao-uploader_file-content {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #fff;

  .upload-error {
    display: inline-block;
    font-size: 23px;
    color: #f43530;
    font-family: "weui";
    font-style: normal;

  &:before {
     content: "\EA0B";
   }
  }
  }
  }

  .toutiao-uploader_input-box {
    float: left;
    position: relative;
    margin-right: 9px;
    margin-bottom: 9px;
    width: 109px;
    height: 109px;
    border: 1px solid #d9d9d9;

  &:before,
  &:after {
     content: " ";
     position: absolute;
     top: 50%;
     left: 50%;
     -webkit-transform: translate(-50%, -50%);
     transform: translate(-50%, -50%);
     background-color: #d9d9d9;
   }

  &:before {
     width: 2px;
     height: 39.5px;
   }

  &:after {
     width: 39.5px;
     height: 2px;
   }

  .toutiao-uploader_input {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  }
  }

  .toutiao-uploader_previewer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    z-index: 1000;

  .toutiao-uploader_preview-img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 60px;
    left: 0;
    background: center center no-repeat;
    background-size: contain;
  }

  .toutiao-uploader_del {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #0d0d0d;
    color: #ffffff;
    height: 60px;
    line-height: 60px;
    text-align: center;
    /*font-family: "weui";*/

    /*&:after {*/
    /*color: #ffffff;*/
    /*font-size: 22px;*/
    /*content: "\EA11";*/
    /*}*/
  }
  }
  }
</style>
