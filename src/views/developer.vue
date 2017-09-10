<template>
  <layout>
    <div slot="content" class="J_wrapper_content" v-webp.back="require('../assets/images/boom.png')">
      <img class="boat" v-webp="require('../assets/images/boat.png')">
      <div class="group-account-info"  v-webp.back="require('../assets/images/bg_big.png')">
        <div class="header-goup">
          <span @click="onNavigatorClick(true)" :class="['group-info-title', currentStatus ? 'active' : '' ]">团队信息</span>
          <span @click="onNavigatorClick(false)" :class="['account-info-title', currentStatus ? '' : 'active' ]">账号信息</span>
        </div>
        <section v-if="currentStatus" class="group-info">
          <div class="form-group input-group">
            <label class="form-label" for="teamName"><em class="asterisk">*</em>团队名称</label>
            <div class="form-control">
              <input disabled :value="team.name" type="text" id="teamName" placeholder="天美工作室">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label"><em class="asterisk">*</em>品牌标识&nbsp;(Logo <em>512*512</em>)</label>
            <div class="addImageSmall">
              <input v-validate="'required'" data-vv-as="品牌标识" name="teamLogo" v-model="team.logo" type="hidden">
              <input v-validate="'mimes:image/jpeg,image/png'" data-vv-as="品牌标识" name="teamLogo" class="logo" type="file" @change="onAddImage($event, 'logo')" />
              <img v-show="team.logo" :src="team.logo | filterCdnDomain(1)" alt="">
              <em class="load"></em>
              <em v-show="team.logo" class="close" @click="onClearImage('logo')"></em>
            </div>
            <span v-show="errors.has('teamLogo')" style="margin-top:15px;" class="info-input-error info-input-error-image">{{errors.first('teamLogo')}}</span>
          </div>
          <div class="form-group textarea-group">
            <label class="form-label" for="teamIntro"><em class="asterisk">*</em>团队介绍</label>
            <div class="form-control">
              <textarea v-validate="'required|min:30|max:300'" data-vv-as="团队介绍" name="teamIntro" v-model="team.description" id="teamIntro" placeholder="30-300字，骑士团所有用户均可见，请认真填写！"></textarea>
              <span v-show="errors.has('teamIntro')" style="width:170px;" class="info-input-error">{{errors.first('teamIntro')}}</span>            
            </div>
          </div>
          <div class="form-group">
            <label class="form-label optional">开发者主页banner ( 1080*608 )</label>
            <div class="addImageBig">
              <input v-validate="'mimes:image/jpeg,image/png'" data-vv-as="主页banner" name="teamBanner" class="logo" type="file" @change="onAddImage($event, 'banner')" />
              <img v-show="team.banner" :src="team.banner | filterCdnDomain(1)">
              <em class="load"></em>
              <em v-show="team.banner" class="close" @click="onClearImage('banner')"></em>
              <span v-show="errors.has('teamBanner')" class="info-input-error info-input-error-image">{{errors.first('teamBanner')}}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label optional">团队照片 ( 2-5张 )</label>
            <div class="groupPic">
              <div v-for="i in team.photos.length" :data-index="i-1" :key="i" class="addImageBig">
                <input v-validate="'mimes:image/jpeg,image/png'" data-vv-as="团队照片" :name="`groupPhoto${i}`" class="logo" type="file" @change="onAddImage($event, 'groupPhoto')" />
                <img v-show="team.photos[i-1]" :src="team.photos[i-1] | filterCdnDomain(1)">
                <em class="load"></em>
                <em v-show="team.photos[i-1]" class="close" @click="onClearImage('groupPhoto')"></em>
                <span v-show="errors.has(`groupPhoto${i}`)" class="info-input-error info-input-error-image">{{errors.first(`groupPhoto${i}`)}}</span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label optional">团队介绍视频 ( 可传多个 )</label>
            <div class="form-control groupVideo">
              <div class="video-item" v-for="(video, index) in team.videos" :key="index">
                <span @click="onVideoClick(video, index)">{{video.name}}</span>
                <em @click="onVideoDeleteClick(index)"></em>
              </div>
              <button @click="onVideoClick(null)" class="uploadVideo">点击上传</button>
            </div>
          </div>
        </section>
        <section v-else class="account-info">
          <div class="form-group input-group">
            <label class="form-label">团队名称</label>
            <div class="form-control">
              <input disabled :value="team.name" type="text" placeholder="天美工作室">
            </div>
          </div>
          <div class="form-group input-group">
            <label class="form-label" for="personName">账号所有人/管理员姓名</label>
            <div class="form-control">
              <input disabled v-model="user_profile.name" type="text" id="personName" placeholder="点击输入">
            </div>
          </div>
          <div class="form-group input-group">
            <label class="form-label" for="personIdentity">所有人/管理员身份证号</label>
            <div class="form-control">
              <input disabled v-model="user_profile.id_card_number" type="text" id="personIdentity" placeholder="点击输入">
            </div>
          </div>
          <div class="form-group input-group">
            <label class="form-label" for="personPhone">联系电话</label>
            <div class="form-control">
              <input disabled v-model="user_profile.phone" type="text" id="personPhone" placeholder="点击输入">
            </div>
          </div>
          <div class="form-group input-group">
            <label class="form-label" for="personEmail">联系邮箱</label>
            <div class="form-control">
              <input disabled v-model="user_profile.email" type="text" id="personEmail" placeholder="点击输入">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">身份证</label>
            <div class="idPic">
              <div class="addImageBig front">
                <!-- <input disabled class="logo" type="file" @change="onAddImage($event, 'front')" /> -->
                <img :src="user_profile.id_card_images_filter[0]">
                <!-- <em class="load"></em> -->
                <!-- <em v-show="person.front" class="close" @click="onClearImage('front')"></em> -->
              </div>
              <div class="addImageBig back">
                <!-- <input disabled class="logo" type="file" @change="onAddImage($event, 'back')" /> -->
                <img :src="user_profile.id_card_images_filter[1]">
                <!-- <em class="load"></em> -->
                <!-- <em v-show="person.back" class="close" @click="onClearImage('back')"></em> -->
              </div>
              <div class="addImageBig hold">
                <!-- <input disabled class="logo" type="file" @change="onAddImage($event, 'hold')" /> -->
                <img :src="user_profile.id_card_images_filter[2]">
                <!-- <em class="load"></em> -->
                <!-- <em v-show="person.hold" class="close" @click="onClearImage('hold')"></em> -->
              </div>
              <div class="example">
                <span>范例:</span>
                <img src="../assets/images/eg.png" alt="">
              </div>
            </div>
          </div>
        </section>
        <img class="cookie" src="../assets/images/cookie.png">
      </div>
      <div v-show="currentStatus" class="button-group">
        <button @click="onSubmitClick" class="button-item"><em>完成并提交</em></button>        
      </div>
      <modal :videoLength="videoLength" @update:video="onVideoUpdate"></modal>
    </div>
  </layout>
</template>

<script>
import layout from '../components/layout'
import modal from '../components/videoModal'
import { getProfile, saveProfile, postImage, postIdCard } from '../api'

module.exports = {
  data: function(){
    return {
      currentStatus: true, // true表示团队信息， false表示账号信息
      currentVideoIndex: null, // 当前编辑的视频      
      team: {
        name: null,
        logo: null,
        description: null,
        banner: null,
        photos: ['','','','',''],
        videos: [],
        status: null
      },
      user_profile: {
        name: null,
        id_card_number: null,
        phone: null,
        email: null,
        id_card_images_filter: ['','',''],
        status: null
      },
      videoLength: null
    }
  },
  created: function () {
    getProfile().then(({status, data}) => {
      if(status == 200 || status == 201) {
        util.extend(this.team, data.team)
        util.extend(this.user_profile, data.user_profile)
        if(util.isArray(this.team.photos)) {
          var diff = 5 - this.team.photos.length
          for(var i = 0; i < diff; i++) {
            this.team.photos.push('')
          }
        } else{
          this.team.photos = ['','','','','']
        }
        if(!util.isArray(this.user_profile.id_card_images)) this.user_profile.id_card_images = ['','','']
        if(!util.isArray(this.user_profile.id_card_images_filter)) this.user_profile.id_card_images_filter = ['','','']
        if(!util.isArray(this.team.videos)) this.team.videos = []
      } else {
        console.log(data.content)
      }
    }).catch(function (err) {
      console.log(err)
    });
  },
  mounted: function () {
  },
  methods: {
    onNavigatorClick: function(state) {
      if(this.currentStatus == state) return;
      this.currentStatus = !this.currentStatus
    },
    onAddImage: function(event, type) {
      var _this = this
      var image = new FormData();
          image.append('file', event.target.files[0]);
      // 调用上传图片接口
      $(event.target).siblings('.load').css('visibility', 'visible')  // 显示loading
      // 根据上传图片的类型决定上传方法
      postImage(image).then(({status, data}) => {
        if(status == 200 || status == 201) {
          setTimeout(function() {
            $(event.target).siblings('.load').css('visibility', 'hidden') // 隐藏loading
          }, 2000)
          if(type == 'logo') {
            _this.team.logo = data.cdnObj
          } else if(type == 'banner') {
            _this.team.banner = data.cdnObj
          } else if(type == 'groupPhoto') {
            var index = $(event.target).parent().data('index')
            // 给数组赋值，需要注意用splice
            _this.team.photos.splice(index, 1, data.cdnObj)
          }
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
      if(type == 'logo') {
        this.team.logo = null
      } else if(type == 'banner') {
        this.team.banner = null
      } else if(type == 'groupPhoto') {
        var index = $(event.target).parent().data('index')
        // 给数组赋值，需要注意用splice
        this.team.photos.splice(index, 1, '')
      }
    },
    onVideoClick: function(video, index) {
      this.$store.commit('initialVideo')
      if(video) {
        this.videoLength = this.team.videos.length
        this.currentVideoIndex = index 
        this.$store.dispatch('setVideoInfo', { 
          show: true,
          file: video.file,
          name: video.name,
          selected: index + 1,
          upload_time: video.upload_time
        })
      } else {
        this.videoLength = this.team.videos.length + 1
        this.currentVideoIndex = null
        this.$store.dispatch('setVideoInfo', { show: true})
      }
    },
    onVideoDeleteClick: function(index) {
      this.team.videos.splice(index, 1)
    },
    onVideoUpdate: function(video) {
      // 有index值，表示是更新操作
      if(this.currentVideoIndex) {
        var temp = this.team.videos[video.selected - 1]
        this.team.videos.splice(video.selected - 1, 1, {
          file: video.file,
          name: video.name,
          upload_time: video.upload_time
        })
        this.team.videos.splice(this.currentVideoIndex, 1, temp)
      } else {
        this.team.videos.splice(video.selected - 1, 0, {
          file: video.file,
          name: video.name,
          upload_time: video.upload_time
        })
      }
    },
    onSubmitClick: function() {
      var _this = this
      var params = {}
      params.user_profile = this.user_profile
      params.team = this.team
      this.$validator.validateAll().then((result) => {
        if (result) {
          if(util.arrayLength(this.team.photos) < 2) {
            _this.$store.dispatch('setToast', {content: '团队图片少于2张，请将信息填写完整'})
            return false;
          }
          saveProfile('put', params).then(({status, data}) => {
            if(status == 200 || status == 201) {
              _this.$store.dispatch('setToast', {content: '信息保存成功'})
            } else {
              _this.$store.dispatch('setToast', {content: data.content})
            }
          }).catch(function (err) {
            _this.$store.dispatch('setToast', {content: err.response.data.error})
          })
        } else {
          _this.$store.dispatch('setToast', {content: '请将信息填写完整'})
        }
      })
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
    min-height: 1300px;
    background-repeat: no-repeat;
    background-position: center 128px;
    input[type='file'] {
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
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
    .group-account-info {
      position: relative;
      top: 26px;
      width: 1000px;
      min-height: 933px;
      padding-bottom: 50px;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center 0;
      background-size: 100% 100%;
      .header-goup {
        box-sizing: border-box;
        width: 100%;
        height: 92px;
        font-size: 0;
        padding-left: 15px;
        margin-right: 30px;
        .group-info-title, .account-info-title {
          display: inline-block;
          width: 150px;
          height: 50px;
          padding-top: 40px;
          font-size: 20px;
          color: rgba(0, 0, 0, 0.4);
          border-bottom: 2px solid transparent;
          text-align: center;
          cursor: pointer;
          &.active {
            color: rgba(0, 0, 0, 0.9);
            border-bottom: 2px solid #FFDA44;
          }
        }
      }
      .group-info, .account-info {
        .form-group {
          position: relative;
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
      }
      .account-info {
        .idPic {
          position: relative;          
          width: 686px;
          height: 100%;
          margin-bottom: 20px;
          .addImageBig{
            margin: 30px 40px 0 0;
            width: 267px;
            height: 156px;
            display: inline-block;
            &.front {
              background: url('../assets/images/id_front.png') no-repeat 0 0;
              background-size: 100%;
            }
            &.back {
              background: url('../assets/images/id_back.png') no-repeat 0 0;
              background-size: 100%;
            }
            &.hold {
              background: url('../assets/images/hold.png') no-repeat 0 0;
              background-size: 100%;
            }
            .close {
              top: 10px;
              right: 10px;
              width: 21px;
              height: 21px;
            }
          }
          .example {
            margin: 30px 40px 0 0;
            width: 267px;
            height: 156px;
            display: inline-block;
            vertical-align: top;
            span{
              vertical-align: top;
              opacity: 0.4;
              font-size: 16px;
              color: #000000;
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
    .button-group {
      position: relative;
      width: 100%;
      text-align: center;
      margin-top: 46px;
      font-size: 0;
      button.button-item {
        width: 180px;
        height: 65px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.9);
        cursor: pointer;
        transition: all 0.3s;
        background: url('../assets/images/agree_normal.png') no-repeat;
        background-size: 100%;
        &:active {
          background: url('../assets/images/agree_active.png') no-repeat;
          background-size: 100%;
        }
        em {
          vertical-align: 10px;
        }
      }
    }
  }
</style>