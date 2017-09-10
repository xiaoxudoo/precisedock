<template>
<div>
	<div class="mask_transparent" v-if="show"></div>
	<div class="toast" transition="toast" v-if="show">
    <em></em>
		<slot name="content"></slot>
	</div>
</div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      show: false
    }
  },
  props: ['toast'],
  watch: {
    // 当给toast设置内容的时候就显示，如果没有定义时间，那么2.5秒后渐隐
    'toast.content': function (val, oldVal) {
      if (val === '') {
        return
      }
      var _this = this
      _this.show = true
      setTimeout(function () {
        _this.show = false

        setTimeout(function () {
          _this.toast.content = ''
          delete _this.toast.timer
        }, 310) // 这里的300是动画的延迟，故意多设置10毫秒
      }, _this.toast.timer || 3000)
    }
  }
}
</script>

<style scoped lang="scss">
.mask_transparent {
	position: fixed;
	z-index: 9999;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
.toast{
	position: fixed;
  z-index: 9999;
	top:50%;
	left:50%;
  background: #FFFBEA;
  border: 1px solid #D7CAA7;
	transform:translateX(-50%) translateY(-50%);
  font-size: 14px;
  color: #9E7B5C;
  text-align: center;
  border-radius: 5px;
  padding:15px;
  opacity:1;
  transition:opacity .3s linear;
  em {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('../assets/images/errorWarn.png') no-repeat 0 0;
    background-size: 100%;
  }
}


.toast-leave{
	opacity:0;
}

</style>