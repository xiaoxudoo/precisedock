import axios from 'axios'
import {
  hosts,
  api
} from '../config'

var instance = axios.create();
instance.interceptors.response.use(function (response) {
  // Do something with response data
  console.log(response);
  util.setCookie('auth_login',true, 3600000, 'milsecond')
  return response
}, function (error) {
  // Do something with response error
  console.log(error)
  if (error.response) {
    if(error.response.status == 403) {
      util.setCookie('auth_login','')
      window.location.href = window.location.href
    } else {
      util.setCookie('auth_login',true, 3600000, 'milsecond')
    }
  }
  return Promise.reject(error)
});

/* 取game list信息数据接口 */
export function getGameList() {
  return instance.get(hosts.apiHost + api.game + `?page_size=999`)
}

export function getGameOne(gameid) {
  return instance.get(hosts.apiHost + api.game + `/${gameid}`)
}

/* 取game信息数据接口 */
export function saveGameOne(type, data) {
  var url = data.id ? hosts.apiHost + api.game + `/${data.id}` : hosts.apiHost + api.game
  return instance({
    method: type,
    url: url,
    data: data
  })
}

/* 下架或中止审核接口 */
export function patchGameOne(data) {
  var params = {}
  params.post_action = data.post_action
  if(data.post_message) params.post_message = data.post_message
  return instance({
    method: 'patch',
    url: hosts.apiHost + api.game + `/${data.id}`,
    data: params
  })
}

/* 取profile信息数据接口 */
export function getProfile() {
  return instance.get(hosts.apiHost + api.profile)
}

/* 取profile信息数据接口 */
export function saveProfile(type, data) {
  return instance({
    method: type,
    url: hosts.apiHost + api.profile,
    data: data
  })
}

/*  登录验权
 *  params: <uuid,token>
 */
export function loginAuth(params) {
  var method = 'POST';
  return axios({
    method: method,
    url: hosts.apiHost + api.log_auth,
    data: params
  })
}

/*  退出登录
 *  params: <uuid>
 */
export function logoutAuth(params) {
  return axios({
    method: 'delete',
    url: hosts.apiHost + api.log_auth,
    data: params
  })
}

/* 上传图片接口 */
export function postImage(data) {
  return instance({
    method: 'post',
    url: hosts.apiHost + api.image_upload,
    data: data
  })
}

/* 上传视频接口 */
export function postVideo(data, onUploadProgress) {
  return instance({
    method: 'post',
    url: hosts.apiHost + api.video_upload,
    data: data,
    onUploadProgress: onUploadProgress
  })
}

/* 上传Apk包接口 */
export function postApk(data, onUploadProgress) {
  return instance({
    method: 'post',
    url: hosts.apiHost + api.apk_upload,
    data: data,
    onUploadProgress: onUploadProgress
  })
}

/* 上传身份证接口 */
export function postIdCard(data) {
  return instance({
    method: 'post',
    url: hosts.apiHost + api.id_card_upload,
    data: data
  })
}

export function _poll() {
  return axios({
    method: 'get',
    timeout: 60000, // 60s
    url: hosts.qrCodeHost + api.check_login
  })
}

export function getQrCode() {
  return hosts.qrCodeHost + api.get_qr_code + new Date().getTime()
}