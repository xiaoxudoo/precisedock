<template>
  <layout>
    <div slot="content" class="J_wrapper_content" v-webp.back="require('../assets/images/boom.png')">
      <img class="boat" v-webp="require('../assets/images/boat.png')">
      <section class="group-info" v-webp.back="require('../assets/images/bg_small.png')">
        <div class="info-title">基础信息</div>
        <div class="form-group input-group">
          <label class="form-label" for="groupName">团队名称</label>
          <div class="form-control">
            <input v-validate="'required'" data-vv-as="团队名称" name="groupName" v-model="team.name" type="text" id="groupName" placeholder="天美工作室">
            <span v-show="errors.has('groupName')" class="info-input-error">{{errors.first('groupName')}}</span>
          </div>
        </div>
        <div class="form-group input-group">
          <label class="form-label">品牌标识&nbsp;(Logo <em>512*512</em>)</label>
          <div class="addImageSmall">
            <input v-validate="'required'" data-vv-as="品牌标识" name="groupLogo" v-model="team.logo" type="hidden">
            <input v-validate="'mimes:image/jpeg,image/png'" data-vv-as="品牌标识" name="groupLogo" class="logo" type="file" @change="onAddImage($event, 'logo')" />
            <img v-show="team.logo" :src="team.logo | filterCdnDomain(1)" >
            <em class="load"></em>
            <em v-show="team.logo" class="close" @click="onClearImage('logo')"></em>            
          </div>
          <span v-show="errors.has('groupLogo')" style="margin-top:15px;" class="info-input-error info-input-error-image">{{errors.first('groupLogo')}}</span>
        </div>
        <div class="form-group textarea-group">
          <label class="form-label" for="groupIntro">团队介绍</label>
          <div class="form-control">
            <textarea v-validate="'required|min:30|max:300'" data-vv-as="团队介绍" name="groupIntro" v-model="team.description" id="groupIntro" placeholder="30-300字，骑士团所有用户均可见，请认真填写！"></textarea>
            <span v-show="errors.has('groupIntro')" style="width:170px;" class="info-input-error">{{errors.first('groupIntro')}}</span>            
          </div>
        </div>
      </section>
      <section class="person-info" v-webp.back="require('../assets/images/bg_big.png')">
        <img class="cookie" src="../assets/images/cookie.png">
        <div class="person-info-body">
          <div class="info-title">账号所有人信息</div>
          <div class="form-group input-group">
            <label class="form-label" for="personName">账号所有人/管理员姓名</label>
            <div class="form-control">
              <input v-validate="'required'" data-vv-as="姓名" name="personName" v-model="user_profile.name" type="text" id="personName" placeholder="点击输入">
              <span v-show="errors.has('personName')" class="info-input-error">{{errors.first('personName')}}</span>                        
            </div>
          </div>
          <div class="form-group input-group">
            <label class="form-label" for="personIdentity">所有人/管理员身份证号</label>
            <div class="form-control">
              <input v-validate="{rules: {required: true,regex: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/}}" data-vv-as="身份证号" name="personIdentity" v-model="user_profile.id_card_number" type="text" id="personIdentity" placeholder="点击输入">
              <span v-show="errors.has('personIdentity')" class="info-input-error">{{errors.first('personIdentity')}}</span>
            </div>
          </div>
          <div class="form-group input-group">
            <label class="form-label" for="personPhone">联系电话</label>
            <div class="form-control">
              <input v-validate="{rules: {required: true,regex: /^([0-9]+)$/}}" data-vv-as="联系电话" name="personPhone" v-model="user_profile.phone" type="text" id="personPhone" placeholder="点击输入">
              <span v-show="errors.has('personPhone')" class="info-input-error">{{errors.first('personPhone')}}</span>                                      
            </div>
          </div>
          <div class="form-group input-group">
            <label class="form-label" for="personEmail">联系邮箱</label>
            <div class="form-control">
              <input v-validate="'required|email'" data-vv-as="联系邮箱" name="personEmail" v-model="user_profile.email" type="text" id="personEmail" placeholder="点击输入">
              <span v-show="errors.has('personEmail')" class="info-input-error">{{errors.first('personEmail')}}</span>                                      
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">身份证</label>
            <div class="idPic">
              <div class="addImageBig front">
                <input v-validate="'required'" data-vv-as="身份证正面" name="personFront" v-model="user_profile.id_card_images[0]" type="hidden">                
                <input class="logo" type="file"  @change="onAddImage($event, 'front')" />
                <img v-show="user_profile.id_card_images_filter && user_profile.id_card_images_filter[0]" :src="user_profile.id_card_images_filter[0]" alt="">
                <em class="load"></em>
                <em v-show="user_profile.id_card_images_filter && user_profile.id_card_images_filter[0]" class="close" @click="onClearImage('front')"></em>
                <span v-show="errors.has('personFront')" class="info-input-error info-input-error-image">{{errors.first('personFront')}}</span>
              </div>
              <div class="addImageBig back">
                <input v-validate="'required'" data-vv-as="身份证反面" name="personBack" v-model="user_profile.id_card_images[1]" type="hidden">                
                <input class="logo" type="file"  @change="onAddImage($event, 'back')" />
                <img v-show="user_profile.id_card_images_filter && user_profile.id_card_images_filter[1]" :src="user_profile.id_card_images_filter[1]" alt="">
                <em class="load"></em>
                <em v-show="user_profile.id_card_images_filter && user_profile.id_card_images_filter[1]" class="close" @click="onClearImage('back')"></em>
                <span v-show="errors.has('personBack')" class="info-input-error info-input-error-image">{{errors.first('personBack')}}</span>
              </div>
              <div class="addImageBig hold">
                <input v-validate="'required'" data-vv-as="手持身份证" name="personHold" v-model="user_profile.id_card_images[2]" type="hidden">                
                <input class="logo" type="file"  @change="onAddImage($event, 'hold')" />
                <img v-show="user_profile.id_card_images_filter && user_profile.id_card_images_filter[2]" :src="user_profile.id_card_images_filter[2]" alt="">
                <em class="load"></em>
                <em v-show="user_profile.id_card_images_filter && user_profile.id_card_images_filter[2]" class="close" @click="onClearImage('hold')"></em>
                <span v-show="errors.has('personHold')" class="info-input-error info-input-error-image">{{errors.first('personHold')}}</span>
              </div>
              <div class="example">
                <span>范例:</span>
                <img src="../assets/images/eg.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="button-group">
        <button @click="onSubmitClick(false)" class="button-item dis"><em>保存信息</em></button>
        <button @click="onSubmitClick(true)"  class="button-item yes"><em>完成并提交</em></button>
      </div>
    </div>
  </layout>
</template>

<script>
import layout from '../components/layout'
import { getProfile, saveProfile, postImage, postIdCard } from '../api'

module.exports = {
  data: function(){
    return {
      team: {
        name: null,
        logo: null,
        description: null,
        banner: null,
        photos: [],
        videos: []
      },
      user_profile: {
        name: null,
        id_card_number: null,
        phone: null,
        email: null,
        id_card_images: ['','',''],
        id_card_images_filter: ['','','']
      }
    }
  },
  created: function () {
    getProfile().then(({status, data}) => {
      if(status == 200 || status == 201) {
        util.extend(this.team, data.team)
        util.extend(this.user_profile, data.user_profile)
        if(!util.isArray(this.user_profile.id_card_images)) this.user_profile.id_card_images = ['','','']
        if(!util.isArray(this.user_profile.id_card_images_filter)) this.user_profile.id_card_images_filter = ['','','']
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
    onAddImage: function(event, type) {
      var _this = this
      var image = new FormData();
          image.append('file', event.target.files[0]);
      // 调用上传图片接口
      $(event.target).siblings('.load').css('visibility', 'visible')  // 显示loading
      var types = {}
      // 根据上传图片的类型决定上传方法
      type == 'logo' ? types.ACTION = postImage : types.ACTION =  postIdCard
      types.ACTION(image).then(({status, data}) => {
        if(status == 200 || status == 201) {
          setTimeout(function() {
            $(event.target).siblings('.load').css('visibility', 'hidden') // 隐藏loading
          }, 2000)
          switch(type) {
            case 'logo':
              _this.team.logo = data.cdnObj
              break;
            case 'front':
              _this.user_profile.id_card_images.splice(0, 1, data.id)
              _this.user_profile.id_card_images_filter.splice(0, 1, data.url)
              break;
            case 'back':
              _this.user_profile.id_card_images.splice(1, 1, data.id)
              _this.user_profile.id_card_images_filter.splice(1, 1, data.url)
              
              break;
            case 'hold':
              _this.user_profile.id_card_images.splice(2, 1, data.id)
              _this.user_profile.id_card_images_filter.splice(2, 1, data.url)
              break;
          }
        } else {
          _this.$store.dispatch('setToast', {content: data.content})
        }
        // 最后需要清除input[file]中的文件，因为这里用的是change事件
        event.target.value = null
      }).catch(function (err) {
        console.log(err)
        $(event.target).siblings('.load').css('visibility', 'hidden')
        event.target.value = null
      });
    },
    onClearImage: function(type) {
      var _this = this
      switch(type) {
        case 'logo':
          _this.team.logo = null
          break;
        case 'front':
          _this.user_profile.id_card_images.splice(0, 1, '')
          _this.user_profile.id_card_images_filter.splice(0, 1, '')
          break;
        case 'back':
          _this.user_profile.id_card_images.splice(1, 1, '')
          _this.user_profile.id_card_images_filter.splice(1, 1, '')
          break;
        case 'hold':
          _this.user_profile.id_card_images.splice(2, 1, '')
          _this.user_profile.id_card_images_filter.splice(2, 1, '')
          break;
      }
    },
    onSubmitClick: function(validate) {
      var _this = this
      var params = {}
      var type = this.user_profile.status == null ? 'post' : 'put'
      var save = function() {
        saveProfile(type, params).then(({status, data}) => {
          if(status == 200 || status == 201) {
            _this.$store.dispatch('setToast', {content: '信息保存成功'})
            if(validate) {
              util.setCookie('account', true)
              _this.$router.push('/')
            }
          }
        }).catch(function (err) {
          _this.$store.dispatch('setToast', {content: err.response.data.error})          
        });
      }
      params.user_profile = this.user_profile
      params.team = this.team
      if(validate) {
        params.team.status = 'VERIFY'
        params.user_profile.status = 'VERIFY'
        this.$validator.validateAll().then((result) => {
          if (result) {
            save()
          } else {
            _this.$store.dispatch('setToast', {content: '请将信息填写完整'})            
          }
        });
      } else {
        params.team.status = 'DRAFT'
        params.user_profile.status = 'DRAFT'
        save()
      }
    }
  },
  components: {
    layout
  }
};
</script>

<style scoped lang="scss">
  .J_wrapper_content {
    position: relative;
    width: 100%;
    min-height: 1400px;
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
    .group-info, .person-info {
      position: relative;
      top: 26px;
      width: 1000px;
      height: 357px;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center 0;
      background-size: 100% 100%;
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
          em {
            font-size: 12px;
            color: #000000;
            line-height: 22px;
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
          input[type='file'] {
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
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
      }
    }
    .person-info {
      position: relative;
      top: 46px;
      width: 1000px;
      height: 852px;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center 0;
      background-size: 100% 100%;
      .person-info-body {
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
      margin-top: 80px;
      font-size: 0;
      .button-item {
        width: 180px;
        height: 65px;
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
          margin-right: 30px;
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
</style>