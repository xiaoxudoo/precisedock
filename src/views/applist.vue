<template>
  <layout>
    <div slot="content" class="J_wrapper_content" v-webp.back="require('../assets/images/boom.png')">
      <img class="boat" v-webp="require('../assets/images/boat.png')">
      <section class="developer-info" v-webp.back="require('../assets/images/bg_small.png')">
        <div class="info-title">开发者信息</div>
        <div class="developer-info-detail">
          <img :src="team.logo | filterCdnDomain(1)" class="logo">
          <div class="infos">
            <span class="infos-name">{{user_profile.name}}</span>
            <span class="infos-id">ID:&nbsp;{{user_profile.user_id}}</span>
          </div>
          <button @click="onDeveloperClick(user_profile.user_id)">完善修改开发者信息</button>
        </div>
      </section>
      <section class="gamelist-info" v-webp.back="require('../assets/images/bg_big.png')">
        <img class="cookie" src="../assets/images/cookie.png">
        <div class="gamelist-info-title info-title">
          <span>我的游戏</span>
          <button @click="onNewGameClick"><em>新建游戏</em></button>
        </div>
        <div v-if="listloading" class="gamelist-info-waiting">
          <div class="rotate02">
            <img src="../assets/images/loading.png">
          </div>
        </div>
        <div v-else class="gamelist-info-content">
          <p>认领骑士团已有游戏请联系QQ:6567676767</p>
          <table class="gamelist-table">
            <thead class="gamelist-table-header">
              <tr>
                <th width="186px">游戏名称</th>
                <th width="185px">状态</th>
                <th width="165px">创建时间</th>
                <th width="165px">最后更新时间</th>
                <th width="223px">操作</th>
              </tr>
            </thead>
            <tbody class="gamelist-table-cell">
              <tr v-if="projectData == false">
                <td colspan="5" class="gamelist-table-blank">暂无数据</td>
              </tr>
              <tr v-else v-for="(items, key) in projectData" :key="key">
                <td>{{items.game_name}}</td>
                <td :style="{color: map2Color(items.status)}">{{items.status_filter}}</td>
                <td>{{items.created_at}}</td>
                <td>{{items.updated_at}}</td>
                <td class="gamelist-table-manual">
                  <!-- TODO -->
                  <span v-if="items.status != 'OFFLINE'" @click="onCheckClick(items.id)">检查/更新</span>
                  <span v-else class="deactive">检查/更新</span>
                  <span @click="onManualClick(items.status, items.id, items.game_name)">{{items.status | mapStatusToManual}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <modal></modal>
    </div>
  </layout>
</template>

<script>
// 对应接口19
import layout from '../components/layout'
import modal from '../components/reasonModal'
import { getProfile, getGameList, patchGameOne } from '../api'
const ONLINE = 'ONLINE'
const PUT_ONLINE_VERIFYING = 'PUT_ONLINE_VERIFYING'
const PUT_OFFLINE_VERIFYING = 'PUT_OFFLINE_VERIFYING'
const UPDATE_APK_VERIFYING = 'UPDATE_APK_VERIFYING'
const UPDATE_INFO_VERIFYING = 'UPDATE_INFO_VERIFYING'
const DRAFT = 'DRAFT'
const VERIFY_FAILED = ['PUT_ONLINE_VERIFY_FAILED', 'PUT_OFFLINE_VERIFY_FAILED', 'UPDATE_APK_VERIFY_FAILED', 'UPDATE_INFO_VERIFY_FAILED']
const OFFLINE = 'OFFLINE'
module.exports = {
  data: function(){
      return {
        listloading: true, // true: 正在加载中
        team: {
          logo: null,
        },
        user_profile: {
          name: null,
          user_id: null
        },
        projectData: []
      }
  },
  computed: {
  },
  created: function () {
    this.getDeveloperData()
    this.getProjectData()
  },
  methods: {
    getDeveloperData: function() {
      var _this = this
      getProfile().then(({status, data}) => {
        if(status == 200 || status == 201) {
          _this.user_profile.name = data.user_profile.name
          _this.user_profile.user_id = data.user_profile.user_id
          _this.team.logo = data.team.logo
        }
      }).catch(function (err) {
        _this.$store.dispatch('setToast', {content: err.response.data.error})
      })
    },
    getProjectData: function() {
      var _this = this
      // 初始化传空
      getGameList().then(({status, data}) => {
        if(status == 200 || status == 201) {
          // 填写数据
          _this.projectData =  data.data || []
          _this.listloading = false
        }
      }).catch(function (err) {
        _this.listloading = false
        _this.$store.dispatch('setToast', {content: err.response.data.error})
      })
    },
    onDeveloperClick: function(developerid) {
      this.$router.push({ name: 'developer', query: { id: developerid }})
    },
    onNewGameClick: function() {
      this.$router.push({ name: 'appinfo'})
    },
    onCheckClick: function(appid) {
      this.$router.push({ name: 'appinfo', params: { appid: appid } })
    },
    onManualClick: function(status, id, game) {
      var _this = this
      // TODO...替换成状态码
      switch(status) {
        case ONLINE:
          _this.applyRemove(id, game)
          break;
        case PUT_ONLINE_VERIFYING:
        case PUT_OFFLINE_VERIFYING:
        case UPDATE_APK_VERIFYING:
        case UPDATE_INFO_VERIFYING:
          _this.cancelReview(id)
          break;
      }
    },
    applyRemove: function(id, game) {
      this.$store.commit('initialReason')
      this.$store.dispatch('setReasonInfo', {
        modal: true,
        id: id,
        name: game
      })
    },
    cancelReview: function(id) {
      var _this = this
      var params = {
        id: id,
        post_action: 'CANCEL'
      }
      patchGameOne(params).then(({status, data}) => {
        if(status == 200 || status == 201) {
          this.$store.dispatch('setToast', {content: '中止审核申请提交成功'})
          this.getProjectData() // 刷新列表
        }
      }).catch(function (err) {
        _this.$store.dispatch('setToast', {content: err.response.data.error})
      })
    },
    map2Color: function(status) {
      // TODO...替换成状态码
      switch(status) {
        case ONLINE:
          return '#2BA114';
        case PUT_ONLINE_VERIFYING:
        case PUT_OFFLINE_VERIFYING:
        case UPDATE_APK_VERIFYING:
        case UPDATE_INFO_VERIFYING:
          return '#F3A000';
        case VERIFY_FAILED[0]:
        case VERIFY_FAILED[1]:
        case VERIFY_FAILED[2]:
        case VERIFY_FAILED[3]:
          return '#DE1E00'
        case DRAFT:
        case OFFLINE:
          return 'rgba(0,0,0,.4)'
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
  min-height: 1400px;
  padding-bottom: 120px;
  background-repeat: no-repeat;
  background-position: center 128px;
  .boat {
    position: absolute;
    top: -50px;
    left: 50%;
    margin-left: -720px;
    width: 231px;
  }
  .developer-info {
    position: relative;
    top: 26px;
    width: 1000px;
    height: 287px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: 100% 100%;
    .developer-info-title {
      box-sizing: border-box;
      width: 100%;
      height: 92px;
      line-height: 110px;
      padding-left: 35px;
      font-size: 20px;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.6);
      &::before {
        display: inline-block;
        content: '';
        width: 12px;
        height: 14px;
        background: url('../assets/images/info.png') no-repeat 0 0;
        background-size: 100%;
        margin-right: 20px;
      }
    }
    .developer-info-detail {
      border-top: 1px solid rgba(97, 97, 97, 0.15);
      padding: 32px 42px 0 35px;
      display: flex;
      flex-direction: row;
      img {
        width: 90px;
        height: 90px;
        border-radius: 10px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
      }
      .infos {
        max-width: 520px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        line-height: 28px;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.7);
        margin-left: 30px;
        &-id {
          line-height: 22px;
          font-size: 16px;
          margin-top: 16px;
        }
      }
      button {
        width: 190px;
        height: 42px;
        margin-top: 42px;
        position: absolute;
        right: 42px;
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
  .gamelist-info {
    position: relative;
    top: 46px;
    width: 1000px;
    min-height: 770px;
    padding-bottom: 82px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: 100% 100%;
    .gamelist-info-title {
      border-bottom: 1px solid rgba(97, 97, 97, 0.15);
      button {
        position: absolute;
        right: 56px;
        top: 30px;
        width: 140px;
        height: 45px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.9);
        background: url('../assets/images/newgame_normal.png') no-repeat 0 0;
        background-size: 100%;
        cursor: pointer;
        em {
          position: relative;
          top: -5px;
        }
        &::before {
          position: relative;
          top: -4px;
          content: '+';
          font-size: 24px;
          margin-right: 10px;
        }
        &:active {
          background: url('../assets/images/newgame_active.png') no-repeat 0 0;
          background-size: 100%;
        }
      }
    }
    .gamelist-info-waiting {
      padding-top: 100px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .rotate02 {
          display: inline-block;
          width: 38px;
          height: 36px;
          animation: rotate 1s linear 0.1s infinite;
          img{
              display: inline-block;
              width: 100%;
          }
      }
    }
    .gamelist-info-content {
      & > p {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        text-align: right;
        padding: 17px 40px 17px 0;
      }
      table.gamelist-table {
        width: 933px;
        margin-left: 32px;
        text-align: center;
        thead th {
          height: 65px;
          border: 1px solid rgba(97,97,97,0.15);
          background: #E8EDED;
          opacity: 0.8;
          font-size: 20px;
          font-weight: 300;
          color: rgba(0, 0, 0, 0.7);
        }
        tbody td{
          height: 60px;
          border: 1px solid rgba(97,97,97,0.15);
          background: #FFFFFF;
          opacity: 0.8;
          font-size: 16px;
          font-weight: 400;          
          color: rgba(0, 0, 0, 0.9);
        }
        .gamelist-table-cell .gamelist-table-manual {
          span {
            margin: 0 14px;
            text-decoration: underline;
            cursor: pointer;
            &.deactive {
              text-decoration: none;
              cursor: auto;
            }
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