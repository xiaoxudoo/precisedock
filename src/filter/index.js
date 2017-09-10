import { cdn_domains } from '../config'
const ONLINE = 'ONLINE'
const PUT_ONLINE_VERIFYING = 'PUT_ONLINE_VERIFYING'
const PUT_OFFLINE_VERIFYING = 'PUT_OFFLINE_VERIFYING'
const UPDATE_APK_VERIFYING = 'UPDATE_APK_VERIFYING'
const UPDATE_INFO_VERIFYING = 'UPDATE_INFO_VERIFYING'
const DRAFT = 'DRAFT'
const VERIFY_FAILED = ['PUT_ONLINE_VERIFY_FAILED', 'PUT_OFFLINE_VERIFY_FAILED', 'UPDATE_APK_VERIFY_FAILED', 'UPDATE_INFO_VERIFY_FAILED']
const OFFLINE = 'OFFLINE'
export function filterPrice (val) {
  return '￥' + (val / 100).toFixed(2)
}

export function filterTime (time) {
  date = parseInt(date)
  return moment(time).format('YYYY-MM-DD')
}

export function filterDate (date) {
  date = parseInt(date)
  return moment(date).format('YYYY-MM-DD')
}

export function filterCdnDomain(imgUrl, imageType) {
  var domain = miStorage.get('config') && miStorage.get('config').cdn_domains || cdn_domains
  if(!imgUrl) return '';
  if(imageType == 1) {
    return `${domain.image}${imgUrl}`
  }
}

export function mapStatusToManual(status) {
  // TODO...替换成状态码
  switch(status) {
    case ONLINE:
      return '申请下架';
    case PUT_ONLINE_VERIFYING:
    case PUT_OFFLINE_VERIFYING:
    case UPDATE_APK_VERIFYING:
    case UPDATE_INFO_VERIFYING:
      return '中止审核';
    default:
      return ''
  }
}
