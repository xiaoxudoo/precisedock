/**
 * Created by xiaoxudoo on 2017/1/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import video_info from './modules/video_info'
import reason_info from './modules/reason_info'
import toast from './modules/toast'
Vue.use(Vuex);
module.exports = new Vuex.Store({
	modules: {
		video_info,
		reason_info,
		toast
	},
	state: {
		// login 信息放在了cookie中
		userInfo: {
			uuid: null,
			userName: null,
			userAvatar: null
		}
	},
	getters:{
		userInfo: state => state.userInfo,
	},
	actions:{
		setUserInfo ({ commit }, info) {
			commit(types.SET_USER_INFO, info)
		}
	},
	mutations: {
		[types.SET_USER_INFO] (state, info) {
			util.setCookie('uuid', info.uuid)
			util.setCookie('userName', info.userName)
			util.setCookie('userAvatar', info.userAvatar)
			util.extend(state.userInfo, info)
		}
	}
})
