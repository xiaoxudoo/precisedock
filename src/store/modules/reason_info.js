/**
 * Created by xiaoxudoo on 2017/8/24.
 */
import * as types from '../mutation-types'

const	state = {
	currentApp: {
			modal: false, // 弹窗是否出现   
			id: null,       // 正在操作的游戏id
			name: null,   // 正在操作的游戏名称
			reason: '', // 下架的原因
			reasonError: false // 是否出现为空错误
	},
}

const	getters = {
	currentApp: state => state.currentApp
}

const	actions = {
	setReasonInfo ({ commit }, params) {
		commit(types.SET_REASON_INFO, params)
	}
}

const	mutations = {		
	[types.SET_REASON_INFO] (state, params) {
		util.extend(state.currentApp, params)
  },
	initialReason (state) {
		state.currentApp = {
			modal: false,
			id: null,
			name: null,
			reason: '',
			reasonError: false
		}
	}
}

module.exports = {
    state,
    getters,
    actions,
    mutations
}
