/**
 * Created by xiaoxudoo on 17/2/17.
 * @desc 自定义webp指令
 *       解决webp图片替换的问题，兼容vue1.0 和 vue2.0
 *       eg: <div v-webp.back="require(imgurl)"></div>
 */

module.exports = function(Vue) {
  let canUseWebp = document.documentElement.getAttribute('data-ext') == 'webp'
  var isVueNext = Vue.version.split('.')[0] === '2';

  function update(el, option) {
    var attr = option.arg || 'src';
    if (el.tagName.toLowerCase() === 'img' && option.value) {
      if (option.value.indexOf('data:image') < 0) {
        el.setAttribute(attr, canUseWebp ? option.value + '.webp' :  option.value);
      } else {
        el.setAttribute(attr, option.value);
      }
    } else if(option.modifiers.back && option.value) {
      // 如果是background图片
       if (option.value.indexOf('data:image') < 0) {
        el.style.backgroundImage = canUseWebp ? 'url(' + option.value + '.webp)' : 'url(' + option.value + ')';
      } else {
        el.style.backgroundImage = 'url(' + option.value + ')';
      }
    }
  };

  if (isVueNext) {
    Vue.directive('webp', {
      bind: function(el, binding) {
        update(el, {
          arg: binding.arg,
          modifiers: binding.modifiers,
          value: binding.value
        });
      }
    })
  } else {
    Vue.directive('webp', {
      bind: function() {},
      update: function(val, old) {
        update(this.el, {
          arg: this.arg,
          value: val
        });
      },
      unbind: function() {}
    })
  }
};