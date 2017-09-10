<template>
  <div class="wrapper_inner">
    <div v-if="currentApp.modal" @click="onModalCloseClick" class="mask"></div>
    <div class="modal" v-if="currentApp.modal">
    <p class="modal-title">申请下架</p>
    <p class="modal-name">游戏名称：<em>{{currentApp.name}}</em></p>
    <div class="modal-reason">
        <span>下架原因:</span><textarea :value="currentApp.reason" @input="onStoreInputClick($event, 'reason')" class="soldOutReason"></textarea>
    </div>
    <div :class="['modal-reasonError', currentApp.reasonError ? '' : 'hidden']">Reason is null</div>
    <div class="modal-buttons">
        <button class="button-item dis" @click="onModalCloseClick"><em>取消</em></button>
        <button class="button-item yes" @click="onReasonSubmitClick"><em>保存</em></button>
    </div>
    </div>
  </div>
</template>

<script>
import { patchGameOne } from '../api'
module.exports = {
  data: function(){
    return {
    }
  },
  computed: {
		currentApp: function() {
			return this.$store.getters.currentApp
		}
  },
  components: {
  },
  methods: {
		onStoreInputClick: function(e, name) {
			this.$store.dispatch('setReasonInfo', {[name]: e.target.value})
		},
    onModalCloseClick: function() {
      this.$store.dispatch('setReasonInfo', {modal: false})
		},
    onReasonSubmitClick: function() {
      var _this = this
      if(this.currentApp.modal) {
        // 为空检查
        if(this.currentApp.reason == '') {
					this.$store.dispatch('setReasonInfo', { reasonError: true})
          setTimeout(function() { _this.$store.dispatch('setReasonInfo', { reasonError: false}); }, 3000)
          return false;
				}
				var params = {
					id: _this.currentApp.id,
					post_message: _this.currentApp.reason,
					post_action: 'PUT_OFFLINE'
				}
        patchGameOne(params).then(({status, data}) => {
          if(status == 200 || status == 201) {
						this.$store.dispatch('setReasonInfo', {modal: false})
						this.$store.dispatch('setToast', {content: '下架申请提交成功'})
						window.location.href = window.location.href
          }
        }).catch(function (err) {
					_this.$store.dispatch('setToast', {content: err.response.data.error})
        });
      }
    },
  },
  created() {
  },
  mounted(){
	},
	props: []
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
			&-title {
				margin: 38px 0 50px;
				line-height: 29px;
				font-size: 24px;
				color: #000000;
				text-align: center;      
			}
			&-name, &-reason {
				padding-left: 105px;
				opacity: 0.9;
				font-size: 18px;
				color: #000000;
				margin-bottom: 30px;
				em {
					margin-left: 20px;
				}
				textarea {
					box-sizing: border-box;
					width: 355px;
					height: 170px;
					padding: 10px;
					margin-left: 36px;
					resize: none;
					font-size: 15px;
					background: #FFFFFF;
					border: 3px solid #262932;
					border-radius: 5px;
					vertical-align: top;
				}
			}
			&-reasonError {
				font-size: 15px;
				text-align: center;
				color: #f00;
				margin-top: -10px;
				margin-bottom: 5px;
				&.hidden {
					visibility: hidden;
				}
			}
			&-buttons {
				position: relative;
				width: 100%;
				text-align: center;
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