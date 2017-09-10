<template>
  <layout>
    <div slot="content" class="J_wrapper_content" v-webp.back="require('../assets/images/knights_queen.png')">
      <div class="">
        <div class="J_content_qrcode" v-show="showQcode">
          <img class="qrcode" :src="qrcodeSrc" />
          <span class="scan_title">请使用骑士团APP-个人主页</span>
          <span class="scan_content">侧边栏右上角 “扫一扫” 登录</span>
          <p>若还未有骑士团账号<br>请先至骑士团APP注册一个账号</p>
        </div>
        <div class="J_content_qrcode" v-show="!showQcode">
          <img v-if="avatorSrc" class="qrcode avator" :src="avatorSrc" />
          <img v-else class="qrcode avator" src="../assets/images/portrait.png" />
          <span class="avator_title">扫描成功！</span>
          <span class="avator_content">请在手机上点击确认以登录</span>
          <p>若还未有骑士团账号<br>请先至骑士团APP注册一个账号</p>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import layout from '../components/layout'
import { hosts } from '../config'
import { getQrCode, _poll, loginAuth } from '../api'
// 二维码两分钟过期
const TIME_PER_STEP = 3000
const TIMEOUT_NUMBER = 40
module.exports = {
  data: function(){
    return {
      qrcodeSrc: null,
      showQcode: true,
      scan_count: 0,
      scan_timer: null,
      login_count: 0,
      login_timer: null
    }
  },
  computed: {
    avatorSrc: function() {
      if(this.$store.getters.userInfo.uuid) {
        // 预加载此图片
        var _this = this
        var imgUrl = hosts.cdnDomain + this.$store.getters.userInfo.uuid + '_' + this.$store.getters.userInfo.userAvatar
        var img = new Image()
        img.onload = function() {
          return imgUrl
        }
        img.onerror = function() {
          return ''
        }
        img.src = imgUrl
      } else {
        return ''
      }
    }
  },
  created: function () {
    var _this = this
    this.qrcodeSrc = getQrCode()
  },
  mounted: function () {
    var _this = this
    this.checkScanCode(function(token){
      if(!token) token = util.getCookie('service_token')
      loginAuth({token: token}).then(({ status, data }) => {
        if (status == 200 || status == 201) {
          // config本地化
          miStorage.set('config', data.config)
          // 设置登录cookie
          util.setCookie('auth_login', true, 3600000, 'milsecond')
          if(data.user_profile && data.user_profile.status == 'VERIFY') {
            // 如果已经认证
            util.setCookie('account', true) // 用户已经设置账户信息，用于路由跳转的判断
            var redirect = _this.$route.query.redirect
            if(!!redirect) {
              _this.$router.replace(redirect)
            } else {
              _this.$router.push('/')
            }
          } else {
            _this.$router.push('/protocol')
          }
        }
      }).catch(function (err) {
        _this.$store.dispatch('setToast', {content: err.response.data.error})
      });
    })
  },
  methods: {
    // 检查是否已扫码二维码
    checkScanCode: function(callback) {
      var _this = this
      _this.scan_timer = setInterval(function() {
        _this.scan_count++;
        _poll().then(({ data }) => {
          if (data.errorCode == 0) {
            if (!!data.uuid) {
              _this.$store.dispatch('setUserInfo', {
                uuid: data.uuid,
                userName: data.userName,
			          userAvatar: data.userAvatar
              })
              _this.showQcode = false
              clearInterval(_this.scan_timer)
              if (!!data.isLogined) {
                callback(data.serviceToken)
              } else {
                _this.scan_count = 0
                _this.checkIsLogin(callback)
              }
            }
          }
        }).catch(function (err) {
          console.log(err)
        });
        // 如果循环超过40次
        if (_this.scan_count == TIMEOUT_NUMBER) {
          _this.scan_count = 0
          _this.qrcodeSrc = getQrCode()
        }
      }, TIME_PER_STEP)
    },
    // 检查是否已经登录
    checkIsLogin: function(callback) {
      var _this = this
      _this.login_timer = setInterval(function() {
        _this.login_count++
        _poll().then(({ data }) => {
          if (data.errorCode == 0) {
            if (!!data.isLogined) {
              _this.login_count = 0
              clearInterval(_this.login_timer)
              callback(data.serviceToken)
            }
          }
        }).catch(function (err) {
          console.log(err)
        });
        if (_this.login_count == TIMEOUT_NUMBER) {
          _this.login_count = 0
          clearInterval(_this.login_timer)
          _this.showQcode = true
          _this.checkScanCode()
        }
      }, TIME_PER_STEP)
    }
  },
  destroyed: function() {
    clearInterval(this.scan_timer);
    clearInterval(this.login_timer);
  },
  components: {
    layout
  }
};
</script>

<style scoped lang="scss">
  .J_wrapper_content {
    width: 100%;
    height: 841px;
    background-image: url('http://10.38.164.198/knights_developer/static/img/knights_queen.png')!important;
    background-repeat: no-repeat;
    background-position: center 0;
    .J_content_qrcode {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      top: 88px;
      left: 50%;
      margin-left: 65px;
      width: 380px;
      height: 536px;
      background: url('../assets/images/bg_qrcode.png') no-repeat 0 0;
      background-size: 100%;
      text-align: center;
      .qrcode {
        display: block;
        width: 235px;
        height: 235px;
        margin-right: 15px;
        padding: 55px 0 25px;
      }
      span {
        line-height: 28px;
        font-size: 21px;
        color: #000000;
        margin-bottom: 8px;
        margin-right: 15px;
      }
      p {
        margin-top: 27px;
        opacity: 0.6;
        line-height: 24px;
        font-size: 18px;
        color: #000000;
        margin-right: 15px;
      }
    }
  }
</style>