<template>
  <div class="footer container-fluid">
    <div class="row-fluid">
      <div class="col-md-3">
        <section class="qr-code">
          <div class="qr-code-inner"></div>
          <p>微信公众号</p>
        </section>
      </div>
      <div class="footer-nav col-md-2">
        <ul>
          <li class="footer-title">科技服务</li>
          <li><router-link to="/product/virtualscreen">虚拟筛选</router-link></li>
          <li><router-link to="/product/md">动力学模拟</router-link></li>
          <li><router-link to="/product/dock">分子对接</router-link></li>
          <li><router-link to="/product/pharmacophore">药效团筛选</router-link></li>
          <li><router-link to="/product/modeling">同源建模</router-link></li>
          <li><router-link to="/product/training">定制培训</router-link></li>
          <li><router-link to="/product/platform">平台建设</router-link></li>
        </ul>
      </div>
      <div class="footer-nav col-md-2">
        <ul>
          <li class="footer-title">应用领域</li>
          <li>
            <a>医药研发</a>
          </li>
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
      </div>
      <div class="footer-nav col-md-2">
        <ul>
          <li class="footer-title">关注我们</li>
          <li><router-link to="/abouts/company">公司简介</router-link></li>
          <li><router-link to="/abouts/culture">公司文化</router-link></li>
          <li><router-link to="/abouts/join">加入我们</router-link></li>
          <li><router-link to="/abouts/contact">联系我们</router-link></li>
          <li><router-link to="/abouts/faq">常见问题</router-link></li>
        </ul>
      </div>
      <div class="col-md-3">
        <p class="footer-title">客服热线</p>
        <p class="tel-number">400-0181-609</p>
        <p class="footer-title">客户意见反馈邮箱</p>
        <p class="email"><a href="mailto:info@precisedock.com">info@precisedock.com</a></p>
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
/*footer*/
.footer {
  background-color: #f0f0f0;
  border-top: 6px solid #78d5fd;
  padding-top: 30px;
  padding-bottom: 40px;
  padding-left: 100px;
  .qr-code {
    float: right;
    margin-right: 100px;
    p {
      font-size: 12px;
      text-align: center;
    }
    .qr-code-inner {
      width: 100px;
      height: 100px;
      background-image: url("../assets/images/qrcode.jpg");
      background-size: 100px 100px;
      margin-bottom: 15px;
    }
  }
  .footer-nav ul {
    display: inline-block;
    vertical-align: top;
    margin-right: 40px;
    li {
      line-height: 28px;
    }
  }
  .footer-title {
    color: #000;
    line-height: 28px;
    font-weight: bold;
  }
  .tel-number {
    margin-bottom: 35px;
  }
}
@media (max-width: 768px) {
  .footer {
    padding-left: 20px!important;
  }
	.qr-code {
    margin-right: 50px!important;
  }
  .tel-number {
    margin-bottom: 0px!important;
  }
}
</style>