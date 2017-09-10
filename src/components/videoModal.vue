<template>
  <div class="wrapper_inner">
    <div v-if="currentVideo.show" @click="onModalCloseClick" class="mask"></div>
      <div class="modal" v-if="currentVideo.show">
        <p class="modal-title">上传团队视频</p>
        <div class="modal-file">
          <em>视频文件：</em>
          <span v-if="currentVideo.file" class="modal-file-hash">{{currentVideo.file}}</span>
          <input v-validate="'required'" data-vv-as="视频文件" name="videoFile" v-model="currentVideo.file" type="hidden">          
          <button  class="modal-file-upload">
            <em>点击上传</em>
            <input @change="onVideoUploadClick($event)" type="file" class="modal-file-upload-input">
          </button>
          <span v-show="errors.has('videoFile')" class="info-input-error">{{errors.first('videoFile')}}</span>
        </div>
        <div class="modal-vname">
          <em>视频名称：</em>
          <input v-validate="'required'" data-vv-as="视频名称" name="videoName" class="modal-vname-input" type="text" :value="currentVideo.name" @input="onStoreInputClick($event, 'name')"/>
          <span v-show="errors.has('videoName')" class="info-input-error">{{errors.first('videoName')}}</span>
        </div>
        <div class="modal-vorder">
          <em>视频排序：</em>
          <select class="modal-vorder-select" :value="currentVideo.selected" @change="onStoreInputClick($event, 'selected')">
            <option v-for="i in videoLength" :key="i" :value="i">{{i}}</option>
          </select>
        </div>
        <p v-if="currentVideo.upload_time" class="modal-vupdate">上传时间：<em>{{currentVideo.upload_time}}</em></p>
        <div class="modal-buttons">
          <button class="button-item dis" @click="onModalCloseClick"><em>取消</em></button>
          <button class="button-item yes" @click="onModalSubmitClick"><em>保存</em></button>
        </div>
    </div>
  </div>
</template>

<script>
import { postVideo } from '../api'
module.exports = {
  data: function(){
    return {
    }
  },
  computed: {
		currentVideo: function() {
			return this.$store.getters.currentVideo
		}
  },
  methods: {
		onStoreInputClick: function(e, name) {
			this.$store.dispatch('setVideoInfo', {[name]: e.target.value})
		},
    onVideoUploadClick: function(event) {
      var _this = this
      var file = new FormData();
          file.append('file', event.target.files[0]);
      // 调用上传接口
      var onUploadProgress = function (oEvent) {
        if (oEvent.lengthComputable) {
          var percentComplete = oEvent.loaded / oEvent.total;
          percentComplete = (percentComplete * 100).toFixed(2)
          if(parseInt(percentComplete) == 100) {
            $(event.target).prev('em').html('已完成')
          } else {
            $(event.target).prev('em').html(`上传中...${percentComplete}%`)            
          }
        }
      }
      postVideo(file, onUploadProgress).then(({data}) => {
        _this.$store.dispatch('setVideoInfo', { 
          show: true,
          file: data.video_id,
          name: data.originalName,
          selected: '1',
          upload_time: data.uploadTime
        })
        // 最后需要清除input[file]中的文件，因为这里用的是change事件
        event.target.value = null
      }).catch(function (err) {
        console.log(err)
        _this.$store.dispatch('setToast', {content: err.response.data.error})
        event.target.value = null
      })
    },
    onModalSubmitClick: function() {
      var _this = this
      if(this.currentVideo.show) {
        // 为空检查
        this.$validator.validateAll().then((result) => {
          if (result) {
            _this.$emit('update:video', _this.currentVideo)
            _this.$store.dispatch('setVideoInfo', { show: false })
          } else {
            _this.$store.dispatch('setToast', {content: '请将信息填写完整'})
          }
        })
      }
    },
    onModalCloseClick: function() {
      this.$store.dispatch('setVideoInfo', {show: false})
    },
  },
  created() {
  },
  mounted(){
	},
	props: ['videoLength']
};
</script>

<style scoped lang="scss">
  .wrapper_inner {
    .mask {
      position: fixed;
      background: rgba(0,0,0,.5);
      z-index: 99;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .modal {
      position: fixed;
      z-index: 100;    
      width: 695px;
      height: 514px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url('../assets/images/modal.png') no-repeat 0 0;
      background-size: 100%;
      .info-input-error {
        vertical-align: middle;
        display: inline-block;
        opacity: 0.9;
        font-size: 14px;
        color: #EA4632;
      }
      &-title {
        margin: 38px 0 44px;
        line-height: 29px;
        font-size: 24px;
        color: #000000;
        text-align: center;      
      }
      &-file, &-vname, &-vorder, &-vupdate {
        padding-left:105px;
        font-size: 18px;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.9);
        margin-bottom: 20px;
      }
      &-file {
        &-hash {
          display: inline-block;
          margin-left:20px;
          max-width: 200px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          vertical-align: middle;
        }
        &-upload {
          position: relative;
          width: 120px;
          height: 40px;
          margin-left: 20px;
          background: #F5F8FA;
          border: 1px solid #D6D6D6;
          border-radius: 3px;
          box-shadow: inset 0 1px 0 1px #FFFFFF;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.9);
          transition: all 0.5s;
          cursor: pointer;        
          &:active {
            opacity: 0.6;
          }
          &-input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
          }
        }
      }
      &-vname {
        &-input {
          width: 318px;
          height: 40px;
          margin-left: 20px;
          padding-left: 6px;
          font-size: 16px;
          color: #000000;
          background: #FFFFFF;
          border: 3px solid #262932;
          border-radius: 6px;
        }
      }
      &-vorder {
        &-select {
          width: 127px;
          height: 40px;
          margin-left: 20px;
          background: #FFFFFF;
          border: 3px solid #262932;
          option {
            padding-left: 30px;
          }
        }
      }
      &-vupdate em { margin-left: 25px; }
      &-buttons {
        position: relative;
        width: 100%;
        text-align: center;
        font-size: 0;
        margin-top: 50px;
        .button-item {
          width: 160px;
          height: 60px;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.9);
          cursor: pointer;
          transition: all 0.3s;
          &.yes {
            background: url('../assets/images/agree_normal.png') no-repeat;
            background-size: 100%;
            &:active {
              background: url('../assets/images/agree_active.png') no-repeat;
              background-size: 100%;
            }
          }
          &.dis {
            background: url('../assets/images/white_normal.png') no-repeat;
            background-size: 100%;
            margin-right: 40px;
            &:active {
              background: url('../assets/images/white_active.png') no-repeat;
              background-size: 100%;
            }
          }
          em {
            vertical-align: 10px;
          }
        }
      }
    }
  }

</style>