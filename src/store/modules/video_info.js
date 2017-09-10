/**
 * Created by xiaoxudoo on 2017/8/24.
 */
import * as types from '../mutation-types'

const	state = {
	currentVideo: {
        show: false,
        file: null,
        name: null,
        selected: '1',
        upload_time: null
    }
}

const	getters = {
	currentVideo: state => state.currentVideo
}

const	actions = {
	setVideoInfo ({ commit }, params) {
		commit(types.SET_VIDEO_INFO, params)
	}
}

const	mutations = {		
	[types.SET_VIDEO_INFO] (state, params) {
		util.extend(state.currentVideo, params)
    },
    initialVideo (state) {
        state.currentVideo = {
            show: false,
            error: null,
            file: null,
            name: null,
            selected: '1',
            upload_time: null
        }
    }
}

module.exports = {
    state,
    getters,
    actions,
    mutations
}
