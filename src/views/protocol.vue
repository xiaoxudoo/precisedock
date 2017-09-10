<template>
  <layout>
    <div slot="content" class="J_wrapper_content">
      <div class="protocol_box" v-webp.back="require('../assets/images/bg_big.png')">
        <p class="title">用户协议</p>
        <div class="protocol" v-html="agreement"></div>
      </div>
      <div class="button-group">
        <!-- <button @click="onDisClick" class="button-item dis"><em>不同意</em></button> -->
        <button @click="onYesClick"  class="button-item yes"><em>同意</em></button>
      </div>
    </div>
  </layout>
</template>

<script>
import layout from '../components/layout'
import { agreement } from '../api/agreement'
module.exports = {
  data: function(){
    return {
      agreement: '',
      agreeif: false
    }
  },
  computed: {
    
  },
  created: function () {
    this.agreement = agreement
  },
  mounted: function () {
  },
  methods: {
    onDisClick: function() {
      console.log('disagree...')
      this.$router.push('/login')
    },
    onYesClick: function() {
      console.log('yes,agree...')
      this.$router.push('/account')
    }
    
  },
  components: {
    layout
  }
};
</script>

<style scoped lang="scss">
  .J_wrapper_content {
    width: 100%;
    min-height: 1200px;
    .protocol_box {
      position: relative;
      top: 26px;
      left: 10px;
      width: 1000px;
      height: 930px;
      margin: 0 auto;
      // background: url('../assets/images/knights_queen.png') no-repeat center 0;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100% 100%;
      .title {
        width: 100%;
        padding: 73px 0 30px;
        line-height: 29px;
        font-size: 24px;
        font-family: "FZZDHJW--GB1-0";
        color: #000000;
        text-align: center;
      }
      .protocol {
        height: 730px;
        overflow: auto;
        padding: 0 100px;
        font-size: 18px;
        color: #000000;
        
      }
    }
    .button-group {
      position: relative;
      width: 100%;
      text-align: center;
      margin-top: 60px;
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