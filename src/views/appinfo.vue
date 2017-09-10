<template>
  <layout>
    <div slot="content" class="J_wrapper_content" v-webp.back="require('../assets/images/boom.png')">
      <img class="boat" v-webp="require('../assets/images/boat.png')">
      <section class="app-info" v-webp="require('../assets/images/bg_big_s.png')">
        <div v-if="verify_solve_message" class="disApproveMsgBox">
          <div class="disApproveMsg">
            <p class="title">审核不通过！</p>
            <p class="content" v-html="verify_solve_message"></p>
          </div>
        </div>
        <div class="info-title">游戏信息</div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>安装包</label>
          <div class="form-control apkUpload">
            <div class="apk-upload-box">
              <input v-validate="'required'" data-vv-as="安装包" name="package" v-model="gameInfo.package_name" type="hidden">
              <input type="file" @change="onAddFile($event, 'apk')" />
              <em class="progress"></em>
              <p>上传游戏APK</p>
            </div>
            <div v-if="gameInfo.package_name" class="apk-info-detail">
              <p class="name">包名：{{gameInfo.package_name}}</p>
              <p>版本号 ( code ) ：{{gameInfo.version_code}}</p>
              <p v-show="gameInfo.size">大小：{{gameInfo.size}}</p>
            </div>
            <span v-show="errors.has('package')" class="info-input-error info-input-error-file">{{errors.first('package')}}</span>
          </div>
        </div>
        <div v-if="gameInfo.post_message" class="form-group textarea-group">
          <label class="form-label"><em class="asterisk">*</em>更新说明</label>
          <div class="form-control">
            <textarea v-validate="'required|min:30|max:300'" data-vv-as="更新说明" name="updateNote" v-model="gameInfo.post_message" placeholder="30-300字" maxlength="300"></textarea>
            <span v-show="errors.has('updateNote')" style="width:170px;" class="info-input-error">{{errors.first('updateNote')}}</span>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>游戏名称</label>
          <div class="form-control">
            <input v-validate="'required'" data-vv-as="游戏名称" name="gameName" v-model="gameInfo.game_name" type="text" placeholder="点击输入">
            <span v-show="errors.has('gameName')" class="info-input-error">{{errors.first('gameName')}}</span>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>一句话简介</label>
          <div class="form-control">
            <input v-validate="'required|max:20'" data-vv-as="简介" name="briefIntro" v-model="gameInfo.short_desc" type="text" placeholder="20字以内" maxlength="20">
            <span v-show="errors.has('briefIntro')" class="info-input-error">{{errors.first('briefIntro')}}</span>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label optional">英文名称</label>
          <div class="form-control">
            <input v-model="gameInfo.english_name" type="text" placeholder="点击输入">
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>开发者角色</label>
          <div class="form-control">
            <em v-for="(item, index) in Object.keys(game_files_option.developer_type)" :key="index">
              <input name="developerRole" data-vv-as="开发者角色" v-validate="'required'" type="radio" :id="`developer${item}`" :value="item" v-model="gameInfo.developer_type">
              <label class="input-box-label" :for="`developer${item}`">{{game_files_option.developer_type[item]}}</label>
            </em>
            <span v-show="errors.has('developerRole')" class="info-input-error">{{errors.first('developerRole')}}</span>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label optional">计费类型</label>
          <div class="form-control">
            <em v-for="(item, index) in Object.keys(game_files_option.fee_type)" :key="index">
              <input type="checkbox" :id="`charge${item}`" :value="item" v-model="gameInfo.fee_type">
              <label class="input-box-label" :for="`charge${item}`">{{game_files_option.fee_type[item]}}</label>
            </em>
            <span v-show="errors.has('chargeType')" class="info-input-error">{{errors.first('chargeType')}}</span>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>网络类型</label>
          <div class="form-control">
            <em v-for="(item, index) in Object.keys(game_files_option.network)" :key="index">
              <input name="networkType" data-vv-as="网络类型" v-validate="'required'" type="radio" :id="`network${item}`" :value="item" v-model="gameInfo.network">
              <label class="input-box-label" :for="`network${item}`">{{game_files_option.network[item]}}</label>
            </em>
            <span v-show="errors.has('networkType')" class="info-input-error">{{errors.first('networkType')}}</span>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>语言</label>
          <div class="form-control">
            <em v-for="(item, index) in Object.keys(game_files_option.language)" :key="index">
              <input name="language" data-vv-as="语言" v-validate="'required'" type="checkbox" :id="`language${item}`" :value="item" v-model="gameInfo.language">
              <label class="input-box-label" :for="`language${item}`">{{game_files_option.language[item]}}</label>
            </em>
            <span v-show="errors.has('language')" class="info-input-error">{{errors.first('language')}}</span>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>游戏介绍</label>
          <div class="form-control">
            <textarea name="detailIntro" data-vv-as="游戏介绍" v-validate="'required|min:30|max:300'" v-model="gameInfo.introduction" placeholder="30-300字" maxlength="300"></textarea>
            <span v-show="errors.has('detailIntro')"  class="info-input-error" style="width:170px;">{{errors.first('detailIntro')}}</span>            
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>年龄分级</label>
          <div class="form-control">
            <em v-for="(item, index) in Object.keys(game_files_option.age_grading)" :key="index">
              <input name="ageLevel" data-vv-as="年龄分级" v-validate="'required'" type="radio" :id="`age${item}`" :value="item" v-model="gameInfo.age_grading">
              <label class="input-box-label" :for="`age${item}`">{{game_files_option.age_grading[item]}}</label>
            </em>
            <span v-show="errors.has('ageLevel')" class="info-input-error">{{errors.first('ageLevel')}}</span>
          </div>
        </div>
        <div class="form-group input-group" style="position:relative;">
          <label class="form-label"><em class="asterisk">*</em>游戏ICON ( 512*512 支持png格式)</label>
          <div class="form-control">
            <div class="addImageSmall">
              <input v-validate="'required'" data-vv-as="游戏ICON" name="gameIcon" v-model="gameInfo.icon" type="hidden">
              <input v-validate="'mimes:image/jpeg,image/png'" data-vv-as="游戏ICON" name="gameIcon" class="logo" type="file" @change="onAddImage($event, 'icon')" />
              <img v-show="gameInfo.icon" :src="gameInfo.icon | filterCdnDomain(1)" alt="">
              <em class="load"></em>
              <em v-show="gameInfo.icon" class="close" @click="onClearImage('icon')"></em>
            </div>
          </div>
          <span v-show="errors.has('gameIcon')" style="margin-top:15px;" class="info-input-error info-input-error-image">{{errors.first('gameIcon')}}</span>
        </div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>游戏详情banner ( 1080*608 )</label>
          <div class="form-control">
            <div class="addImageBig">
              <input v-validate="'required'" data-vv-as="游戏详情banner" name="gameBanner" v-model="gameInfo.banner" type="hidden">
              <input v-validate="'mimes:image/jpeg,image/png'" data-vv-as="游戏详情banner" name="gameBanner" class="logo" type="file" @change="onAddImage($event, 'banner')" />
              <img v-show="gameInfo.banner" :src="gameInfo.banner | filterCdnDomain(1)">
              <em class="load"></em>
              <em v-show="gameInfo.banner" class="close" @click="onClearImage('developerBanner')"></em>
              <span v-show="errors.has('gameBanner')" class="info-input-error info-input-error-image">{{errors.first('banner')}}</span>
            </div>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label optional">游戏视频 ( 1个 支持MP4格式)</label>
          <div class="form-control">
            <div class="addImageBig">
              <input class="logo" type="file" @change="onAddFile($event, 'video')" />
              <em style="position:absolute;width:100%;margin-top:10px;text-align:center;color:green;" class="progress">{{gameInfo.video.name}}</em>              
            </div>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>游戏截图 (4-5张,支持jpg、png格式)</label>
          <div class="form-control">
            <div class="groupPic">
              <div v-for="i in gameInfo.screen_shoot.length" :data-index="i-1" :key="i" class="addImageBig">
                <!-- <input v-validate="'required'" data-vv-as="游戏截图" :name="`snapShot${i}`" v-model="gameInfo.screen_shoot[i-1]" type="hidden">                 -->
                <input v-validate="'mimes:image/jpeg,image/png'" data-vv-as="游戏截图" :name="`snapShot${i}`" class="logo" type="file" @change="onAddImage($event, 'screen_shoot')" />
                <img v-show="gameInfo.screen_shoot[i-1]" :src="gameInfo.screen_shoot[i-1] | filterCdnDomain(1)" alt="">
                <em class="load"></em>
                <em v-show="gameInfo.screen_shoot[i-1]" class="close" @click="onClearImage('screen_shoot')"></em>
                <span v-show="errors.has(`snapShot${i}`)" class="info-input-error info-input-error-image">{{errors.first(`snapShot${i}`)}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label"><em class="asterisk">*</em>开发者寄语</label>
          <div class="form-control">
            <textarea name="deverloperWord" data-vv-as="开发者寄语" v-validate="'required|min:100|max:3000'" v-model="gameInfo.developer_words" placeholder="100-3000字，寄语将以骑士团账号发出、展示在游戏详情页，是贵团队与骑士团用户交流的重要渠道，能够向用户传播游戏的理念，务必重视！" maxlength="3000"></textarea>
            <span v-show="errors.has('deverloperWord')" class="info-input-error" style="width:170px;">{{errors.first('deverloperWord')}}</span>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label optional">团队合照 ( 1080*608 )</label>
          <div class="form-control">
            <div class="addImageBig">
              <input v-validate="'mimes:image/jpeg,image/png'" data-vv-as="团队合照" name="groupPhoto" class="logo" type="file" @change="onAddImage($event, 'team_photo')" />
              <img v-show="gameInfo.team_photo" :src="gameInfo.team_photo | filterCdnDomain(1)" alt="">
              <em class="load"></em>
              <em v-show="gameInfo.team_photo" class="close" @click="onClearImage('team_photo')"></em>
              <span v-show="errors.has('groupPhoto')" class="info-input-error info-input-error-image">{{errors.first('groupPhoto')}}</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label optional">游戏介绍视频 ( 可传多个 )</label>
          <div class="form-control groupVideo">
            <div class="video-item" v-for="(video, index) in gameInfo.videos" :key="index">
              <span @click="onVideoClick(video, index)">{{video.name}}</span>
              <em @click="onVideoDeleteClick(index)"></em>
            </div>
            <button @click="onVideoClick(null)" class="uploadVideo">点击上传</button>
          </div>
        </div>
        <img class="cookie" src="../assets/images/cookie.png">
      </section>
      <div class="button-group">
        <button @click="onSubmitClick(false)" class="button-item dis"><em>保存信息</em></button>
        <button @click="onSubmitClick(true)"  class="button-item yes"><em>完成并提交</em></button>
      </div>
      <modal :videoLength="videoLength" @update:video="onVideoUpdate"></modal>
    </div>
  </layout>
</template>

<script>
// 添加游戏 接口10、11
import layout from '../components/layout'
import modal from '../components/videoModal'
import { getGameOne, saveGameOne, patchGameOne, postImage, postApk, postVideo } from '../api'
var TYPES = {}
TYPES.gameInfo = 'gameInfo'
TYPES.gameSnapshot = 'screen_shoot'
module.exports = {
  data: function(){
    return {
      currentVideoIndex: null,
      gameInfo: {
        verify_solve_message: null,
        cdn_path: null,
        package_name: null,
        version_name: null,
        version_code: null,
        apk_hash: null,
        release_key_hash: null,
        size: null,
        game_name: null,
        short_desc: null,
        english_name: null,
        developer_type: null,
        fee_type: [],
        network: null,
        option: '', // TODO...
        language: [],
        introduction: null,
        age_grading: null,
        icon: null,
        banner: null,
        video_pic: '', // TODO...
        video: {},
        screen_shoot: ['','','','',''],
        developer_words: null,
        team_photo: null,
        videos: []
      },
      videoLength: null,
      game_files_option: {
        language: {
        },
        network: {
        },
        options: {
        },
        fee_type: {
        }
      }
    }
  },
  computed: {
    
  },
  created: function () {
    var _this = this
    util.extend(this.game_files_option, miStorage.get('config').game_files_option)
    if(!!this.$route.params.appid) {
      getGameOne(this.$route.params.appid).then(({status, data}) => {
        if(status == 200 || status == 201) {
          util.extend(this.gameInfo, data)
          this.gameInfo.fee_type = data.fee_type.split(',')
          this.gameInfo.language = data.language.split(',')
          if(!util.isRealObject(data.video)) this.gameInfo.video = {};
          console.log(this.gameInfo)
        }
      }).catch(function (err) {
        _this.$store.dispatch('setToast', {content: err.response.data.error})
      })
    }
  },
  mounted: function () {
  },
  methods: {
    onAddFile: function(event, type) {
      var _this = this
      var file = new FormData();
          file.append('file', event.target.files[0]);
      var onUploadProgress = function (oEvent) {
        if (oEvent.lengthComputable) {
          var percentComplete = oEvent.loaded / oEvent.total;
          percentComplete = (percentComplete * 100).toFixed(2)
          if(parseInt(percentComplete) == 100) {
            $(event.target).next('em').html('已完成')
          } else {
            $(event.target).next('em').html(`上传中...${percentComplete}%`)            
          }
        }
      }
      var addfile = function(action, callback) {
        action(file, onUploadProgress).then(({data}) => {
          callback(data)
          // 最后需要清除input[file]中的文件，因为这里用的是change事件
          event.target.value = null
        }).catch(function (err) {
          console.log(err)
          _this.$store.dispatch('setToast', {content: err.response.data.error})          
          event.target.value = null
        });
      }
      // 调用上传接口
      if(type == 'apk') {
        // 如果是上传apk包
        addfile(postApk, function(data){
          _this.gameInfo.cdn_path = data.cdnObj
          _this.gameInfo.package_name = data.package
          _this.gameInfo.version_name = data.version
          _this.gameInfo.version_code = data.versionCode
          _this.gameInfo.size = data.size
          _this.gameInfo.apk_hash = data.apkHash
          _this.gameInfo.release_key_hash = data.releaseKeyHash
        })
      } else if(type == 'video') {
        // 调用上传视频接口
        addfile(postVideo, function(data){
          _this.gameInfo.video = {
            file: data.video_id,
            name: data.originalName,
            upload_time: data.uploadTime
          }
        })
      }
    },
    onAddImage: function(event, type) {
      var _this = this
      var image = new FormData();
          image.append('file', event.target.files[0]);
      // 调用上传图片接口
      $(event.target).siblings('.load').css('visibility', 'visible')  // 显示loading
      postImage(image).then(({data}) => {
        setTimeout(function() {
          $(event.target).siblings('.load').css('visibility', 'hidden') // 隐藏loading
        }, 2000)
        var imgUrl = data.cdnObj
        // 如果是snapshot 需要单独处理
        if(type == TYPES.gameSnapshot) {
          var index = $(event.target).parent().data('index')
          // 给数组赋值，需要注意用splice
          _this[TYPES.gameInfo][type].splice(index, 1, imgUrl)
        } else {
          _this[TYPES.gameInfo][type] = imgUrl
        }
        // 最后需要清除input[file]中的文件，因为这里用的是change事件
        event.target.value = null
      }).catch(function (err) {
        _this.$store.dispatch('setToast', {content: err.response.data.error})
        $(event.target).siblings('.load').css('visibility', 'hidden')
        event.target.value = null
      });
    },
    onClearImage: function(type) {
      var _this = this
      if(type == TYPES.gameSnapshot) {
        var index = $(event.target).parent().data('index')
        _this[TYPES.gameInfo][type].splice(index, 1, '')
      } else {
        _this[TYPES.gameInfo][type] = null
      }
    },
    onVideoClick: function(video, index) {
      this.$store.commit('initialVideo')
      if(video) {
        this.videoLength = this.gameInfo.videos.length
        this.currentVideoIndex = index
        this.$store.dispatch('setVideoInfo', {
          show: true,
          file: video.file,
          name: video.name,
          selected: index + 1,
          upload_time: video.upload_time
        })
      } else {
        this.videoLength = this.gameInfo.videos.length + 1
        this.currentVideoIndex = null
        this.$store.dispatch('setVideoInfo', { show: true})
      }
    },
    onVideoDeleteClick: function(index) {
      this.gameInfo.videos.splice(index, 1)
    },
    onVideoUpdate: function(video) {
      // 有index值，表示是更新操作
      if(this.currentVideoIndex != null) {
        var temp = this.gameInfo.videos[video.selected - 1]
        this.team.videos.splice(video.selected - 1, 1, {
          file: video.file,
          name: video.name,
          upload_time: video.upload_time
        })
        this.gameInfo.videos.splice(this.currentVideoIndex, 1, temp)
      } else {
        this.gameInfo.videos.splice(video.selected - 1, 0, {
          file: video.file,
          name: video.name,
          upload_time: video.upload_time
        })
      }
    },
    onSubmitClick: function(validate) {
      var _this = this
      var params = {}
      util.extend(params, this.gameInfo)
      params.fee_type = this.gameInfo.fee_type.join(',')
      params.language = this.gameInfo.language.join(',')
      var save = () => {
        var type = (!!this.$route.params.appid) ?  'put' : 'post'
        saveGameOne(type, params).then(({status, data}) => {
          this.$store.dispatch('setToast', {content: '信息保存成功'})
          if(validate) this.$router.push('/')
        }).catch((err) => {
          if(err.response.status == 422) {
            console.log(err.response.data)
            var msgKeyArray = Object.keys(err.response.data)
            var msg = err.response.data[msgKeyArray[0]]
            _this.$store.dispatch('setToast', {content: msg[0]})
          } else {
            _this.$store.dispatch('setToast', {content: err.response.data.error})
          }
        })
      }
      if(validate) {
        params.post_action = 1
        params.video_pic = params.banner  // todo...
        params.option = '支持手柄' // todo...      
        this.$validator.validateAll().then((result) => {
          if (result) {
            if(util.arrayLength(this.gameInfo.screen_shoot) < 4) {
              _this.$store.dispatch('setToast', {content: '游戏截图少于4张，请将信息填写完整'})
              return false;
            }
            save()
          } else {
            this.$store.dispatch('setToast', {content: '请将信息填写完整'})
          }
        })
      } else {
        save()
      }
    }
  },
  components: {
    layout,
    modal
  }
};
</script>

<style scoped lang="scss">
  .J_wrapper_content {
    position: relative;
    width: 100%;
    min-height: 1200px;
    padding-bottom: 120px;
    background-repeat: no-repeat;
    background-position: center 128px;
    .info-input-error {
      vertical-align: middle;
      display: inline-block;
      opacity: 0.9;
      font-size: 14px;
      color: #EA4632;
      &-image{
        position: absolute;
        width: 100%;
        margin: 10px auto;
        text-align: center;
        top:0;
      }
    }
    .boat {
      position: absolute;
      top: -50px;
      left: 50%;
      margin-left: -720px;
      width: 231px;
    }
    .app-info {
      position: relative;
      top: 26px;
      width: 1000px;
      min-height: 933px;
      padding-bottom: 100px;
      margin: 0 auto;
      background-image: url('http://10.38.164.198/knights_developer/static/img/bg_big_s.png')!important;
      background-repeat: no-repeat;
      background-position: center 0;
      background-size: 100% 100%;
      .disApproveMsgBox {
        position: relative;
        width: 100%;
        height: auto;
        padding-top: 50px;
        .disApproveMsg {
          box-sizing: border-box;
          width: 956px;
          margin-left: 22px;
          padding: 30px 52px 30px;
          background: #fff8da;          
          .title{
            width: 100%;
            line-height: 28px;
            font-size: 20px;
            color: #DE1E00;
            text-align: center;
            margin-bottom: 10px;
          }
          .content {
            opacity: 0.7;
            font-size: 16px;
            color: #000000;
            line-height: 26px;
          }
        }
      }
      .form-group {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: nowrap;
        transition: all .1s;
        border-top: 1px solid rgba(97, 97, 97, 0.15);
        &:hover {
          box-shadow: 0 0 10px rgba(34,44,55,0.25);
        }
        .form-label {
          position: relative;
          top: 18px;
          width: 312px;
          padding-left: 34px;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.9);
          box-sizing: border-box;
          &.optional { padding-left: 50px; }
          em {
            font-size: 12px;
            color: #000000;
            line-height: 22px;
          }
          .asterisk {
            font-size: 16px;
            color: #D0021B;
            margin-right: 7px;
          }
        }
        .form-control {
          position: relative;
          // width: 686px;
          height: 100%;
          input,textarea {
            box-sizing: border-box;
            width: 500px;
            margin: 5px 0;
            height: 50px;
            padding-left: 6px;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.6);
            vertical-align: middle;
            background: #fff!important;
            &::-webkit-autofill {
              box-shadow: 0 0 0px 1000px white inset;
            }
            &::-webkit-input-placeholder {
              font-size: 16px;
              color: rgba(0, 0, 0, 0.2);
            }
          }
          textarea {
            resize: none;
            margin: 5px 0;
            height: 80px;
            padding-left: 6px;
            padding-top: 10px;
          }
          input[type='file'] {
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          input[type='checkbox'], input[type="radio"] {
            display: inline-block;
            width: 22px;
            height: 22px;
            margin: 20px 0;
            font-size: 0;
          }
          .input-box-label {
            line-height: 22px;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.6);
            vertical-align: middle;
            margin-right: 30px;
          }
        }
        .addImageSmall, .addImageBig {
          position: relative;
          margin: 16px 0;
          width: 68px;
          height: 68px;
          background: url('../assets/images/addbox_s.png') no-repeat 0 0;
          img {
            position: relative;
            z-index:2;
            display: inline-block;
            width: 100%;
            height: 100%;
          }
          .logo {
            position: absolute;
            z-index: 1;
            top: 0;
          }
          .close {
            position: absolute;
            z-index:3;
            top:-5px;
            right: -5px;
            width: 16px;
            height: 16px;
            cursor: pointer;
            background: url('../assets/images/close_normal.png') no-repeat;
            background-size: cover;
            &:hover {
              background: url('../assets/images/close_active.png') no-repeat;
              background-size: cover;
              animation: rotate 500ms linear 1;
            }
          }
          .load {
            visibility: hidden;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -19px;
            margin-top: -18px;
            width: 38px;
            height: 36px;
            animation: rotate 1s linear 0.1s infinite;
            background: url('../assets/images/loading.png') no-repeat center center;
          }
        }
        .addImageBig {
          margin: 20px 45px 20px 0;
          width: 156px;
          height: 156px;
          display: inline-block;
          background: url('../assets/images/addbox_b.png') no-repeat 0 0;          
        }
        .apkUpload {
          display: flex;
          margin: 20px 0;
          .apk-upload-box {
            position: relative;
            width: 120px;
            height: 120px;
            background: url('../assets/images/apk.png') no-repeat 0 0;
            background-size: 100%;
            margin-right: 30px;
            text-align: center;
            input {
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              z-index: 10;
            }
            p{
              position: absolute;
              z-index: 9;
              bottom: 14px;
              width: 100%;
              opacity: 0.4;
              font-size: 16px;
              color: #000000;
            }
          }
          .apk-info-detail {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            p {
              opacity: 0.7;
              font-size: 16px;
              color: #000000;
              margin-top: 10px;
              &.name {
                font-size: 20px;
              }
            }
          }
        }
        .groupPic {
          position: relative;          
          width: 686px;
          height: 100%;
          margin-bottom: 15px;
          .addImageBig { margin: 20px 40px 0 0; }
        }
        .groupVideo {
          display: flex;
          flex-wrap: wrap;
          margin: 20px 0;
          .video-item {
            min-height: 42px;
            opacity: 0.9;
            font-size: 16px;
            color: #000000;
            margin-right: 30px;
            width: auto;
            span{ 
              display: inline-block;
              width: 70px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              vertical-align: middle;
              cursor: pointer; 
            }
            em {
              display: inline-block;
              width: 17px;
              height: 18px;
              background: url('../assets/images/delete.png') no-repeat 0 0;
              vertical-align: middle;
              cursor: pointer;
              &:hover {
                opacity: 0.6;
              }
            }
          }
          .uploadVideo {
            position: relative;
            z-index: 10;
            width: 120px;
            height: 42px;
            margin-top: -10px;
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
          }
        }
      }
      .cookie {
        position: absolute;
        bottom: 0px;
        left: 50%;
        margin-left: 410px;
        width: 178px;
      }
    }
    
  }
</style>