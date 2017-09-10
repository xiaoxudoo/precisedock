/**
 * Created by chenlei on 16/8/25.
 * @desc 自定义百度统计指令
 */
module.exports = function(Vue) {
    Vue.directive('bd-statistic', {
        bind: function () {
            var _hmt = _hmt || [];
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?70dd77fbe247aa71fd61c99fd02b6e34";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        }
    });
};

