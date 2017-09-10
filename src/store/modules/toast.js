/*
    @author xiaoxudoo
    @description loading页加载信息
*/

import * as types from '../mutation-types'

// initial state
const state = {
    toast: {content: '提示内容', timer: 1600}
}

// getters
const getters = {
    toast: state => state.toast
}

// actions
const actions = {
    setToast ({ commit }, params) {
        commit(types.SET_TOAST, params)
    }
}

// mutations
const mutations = {
    [types.SET_TOAST] (state, params) {
        state.toast.content = params.content
    }
}

module.exports = {
    state,
    getters,
    actions,
    mutations
}
