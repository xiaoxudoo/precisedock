<template>
    <div id="appBody" v-cloak>
        <div v-show="loadif" class="loading">
            <div class="rotate">
                <img src="./assets/images/loading.png">
            </div><br>Loading ...
        </div>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
        <!--toast-->
        <toast :toast.sync="$store.getters.toast">
            <div slot = "content" >{{$store.getters.toast.content}}</div>
        </toast>
    </div>
</template>

<script>
import toast from './components/toast'
// commonjs syntax: module.exports = exports = 
// es6 syntax: export default
module.exports = {
    data:function () {
        return {
            loadif: true
        }
    },
    components: {
        toast
    },
    created:function () {
        var _this = this
        this.loadif = true
        setTimeout(function(){
            _this.loadif = false
        }, 2000)
    },
    directives: {
        
    }
};
</script>

<style lang="scss">
    @import './common/sass/base.scss';
    // 强制使用content-box
    * {
        box-sizing: content-box;
        line-height: 1.5;
    }
    html,body{
        height: auto;  // set height on the main element in the body
    }
    /*这个指令对应的元素当Vue实例化完成前都不显示*/
    [v-cloak] {
        display: none;
    }
    textarea {
        -webkit-appearance: none!important; /*去除input默认样式*/
    }
    .protocol > p {
        line-height: 38px!important;
    }
    #appBody{
        position: relative;
        width: 100%;
        height: auto;
        .loading {
            position: fixed;
            top: 5px;
            left: 50%;
            text-align: center;
            z-index:0;
            .rotate {
                display: inline-block;
                width: 38px;
                height: 36px;
                animation: rotate 1s linear 0.1s infinite;
                -webkit-animation: rotate 1s linear 0.1s infinite;
                img{
                    display: inline-block;
                    width: 100%;
                }
            }
        } 
    }
    .info-title {
        box-sizing: border-box;
        width: 100%;
        height: 92px;
        line-height: 110px;
        padding-left: 35px;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.6);
        &::before {
          display: inline-block;
          content: '';
          width: 12px;
          height: 14px;
          background: url('./assets/images/info.png') no-repeat 0 0;
          background-size: 100%;
          margin-right: 20px;
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
          background: url('./assets/images/agree_normal.png') no-repeat;
          background-size: 100%;
          &:active {
            background: url('./assets/images/agree_active.png') no-repeat;
            background-size: 100%;
          }
        }
        &.dis {
          background: url('./assets/images/white_normal.png') no-repeat;
          background-size: 100%;
          margin-right: 30px;
          &:active {
            background: url('./assets/images/white_active.png') no-repeat;
            background-size: 100%;
          }
        }
        em {
          vertical-align: 10px;
        }
      }
    }
    @-webkit-keyframes rotate
    {
        0% {
            transform: rotate(0);
        }
        50% {    
            transform: rotate(180deg);
        }
        100% {      
            transform: rotate(360deg);
        }
    }

    @keyframes rotate
    {
        0% {
            transform: rotate(0);
        }
        50% {
            
            transform: rotate(180deg);
        }
        100% {
            
            transform: rotate(360deg);
        }
    }
</style>