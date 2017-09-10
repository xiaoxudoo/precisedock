<template>
	<div class="container">
		<div class="J_layout_header">
			<div class="header">
				<img class="logo" src="../assets/images/logo.png" alt="">
				<div class="account_info" v-if="$route.name != 'login'">
					<img v-if="userAvatar" @click="onAccountClick" class="userportrait" :src="userAvatar" />
					<img v-else @click="onAccountClick" class="userportrait" src="../assets/images/portrait.png" />
					<span @click="onAccountClick" class="username">{{userName}}</span>
					<em>|</em>
					<span @click="onLogoutClick" class="logout">退出</span>
				</div>
			</div>
		</div>
		<div class="J_layout_body" v-webp.back="require('../assets/images/bg_full_ql.jpg')">
			<div class="J_body_content" style="">
				<slot name="content"></slot>
			</div>
		</div>
	</div>
</template>

<script>
import { logoutAuth } from '../api'
import { hosts } from '../config'
module.exports = {
	data: function() {
		return {
			userAvatar: null,
			userName: null
		}
	},
	computed: {

	},
	created: function() {
		var _this = this, imgUrl = null, img = null;
		if (this.$store.getters.userInfo.uuid) {
			this.userName = this.$store.getters.userInfo.userName
			imgUrl = hosts.cdnDomain + this.$store.getters.userInfo.uuid + '_' + this.$store.getters.userInfo.userAvatar
		} else if (util.getCookie('uuid')) {
			this.userName = util.getCookie('userName')
			imgUrl = hosts.cdnDomain + util.getCookie('uuid') + '_' + util.getCookie('userAvatar')
		}
		img = new Image()
		img.src = imgUrl		
		img.onload = function() {
			this.userAvatar = imgUrl
		}
		img.onerror = function() {
			this.userAvatar = ''
		}
	},
	mounted: function() {

	},
	methods: {
		onLogoutClick: function() {
			var _this = this
			logoutAuth().then(({ status, data }) => {
				if (status == 200 || status == 201) {
					util.setCookie('auth_login','')
					this.$router.push('/login')
				}
			}).catch(function(err) {
				_this.$store.dispatch('setToast', { content: err.response.data.error })
			})
		},
		onAccountClick: function() {
		}
	},
	components: {
	}
};
</script>

<style scoped lang="scss">
.container {
	font-family: PingFangSC-Regular;
	.J_layout_header {
		position: relative;
		width: 100%;
		height: 72px;
		background: #FFDA44;
		box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.10);
		.header {
			width: 1000px;
			height: 100%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between; // font-size: 0;
			.logo {
				display: inline-block;
				width: 214px;
			}
			.account_info {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				margin-right: 30px;
				img {
					display: inline-block;
					width: 30px;
					height: 30px;
					border-radius: 100%;
					margin-right: 12px;
					cursor: pointer;
				}
				span {
					opacity: 0.9;
					font-size: 14px;
					color: #000000;
					line-height: 24px;
					cursor: pointer;
					&.username {
						max-width: 100px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-right: 8px;
					}
					&.logout {
						margin-left: 8px;
					}
				}
				em {
					opacity: 0.4;
					color: #000000;
				}
			}
		}
	}
	.J_layout_body {
		height: auto;
		background: url('http://10.38.164.198/knights_developer/static/img/bg_full_ql.jpg')!important;
		background-repeat: repeat;
		background-position: center 0;
		.J_body_content {
			width: 100%;
			height: auto;
			background: rgba(27, 29, 37, 0.90);
		}
	}
}
</style>