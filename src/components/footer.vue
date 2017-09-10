<template>
  <div class="footer_wrapper">
    <div class="footer container-fluid">
      <div class="row-fluid">
        <nav class="footer-nav flag col-md-3">

        </nav>
        <nav class="footer-nav col-md-3">
          <ul>
            <li class="footer-title">应用领域</li>
            <li>
              <a>科研服务</a>
            </li>
            <li>
              <a>食品保健</a>
            </li>
            <li>
              <a>农业&环境</a>
            </li>
          </ul>
          <ul>
            <li class="footer-title">内部链接</li>
            <li>
              <a href="http://xiaoxudoo.cn/jsmol/jsmol.htm">JSmol视图</a>
            </li>
          </ul>
        </nav>
        <div class="col-md-2">
          <section class="qr-code">
            <div class="qr-code-inner"></div>
            <p>网页手机端</p>
          </section>
        </div>
        <div class="col-md-2">
          <section class="sns">
            <p class="footer-title">关注我们</p>
            <p class="sns-icons">
              <a href="#" target="_blank">
                <span class="weibo"></span>
              </a>
            </p>
            <p class="footer-title">客户意见反馈邮箱</p>
            <p>
              <a style="color:#fff" href="mailto:info@precisedock.com">info@precisedock.com</a>
            </p>
          </section>
        </div>
        <div class="col-md-2">
          <section class="service-tel">
            <p class="footer-title">客服热线</p>
            <p class="tel-number">
              4000181609
            </p>
            <p class="footer-title">工作时间</p>
            <p>8:30 ~ 18:00</p>
          </section>
        </div>
      </div>
    </div>
    <div class="copyrightbox container-fluid">
      <div class="row-fluid">
        <div class="col-md-12">
          <p class="copyright text-center">
            &copy;&nbsp;2016普瑞赛思生物医药科技（北京）有限公司 京ICP备16026270号
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
  created() {
  },
  mounted() {
  }
};
</script>

<style scoped lang="scss">
.footer_wrapper {}
</style>