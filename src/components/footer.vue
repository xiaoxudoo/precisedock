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
.footer_wrapper {
  /*footer*/
  .footer {
    margin-top: 30px;
    background-color: #434343;
  }

  .footer-nav ul {
    display: inline-block;
    vertical-align: top;
  }

  .footer .footer-title,
  .footer .footer-title a {
    color: #7d7d7d;
  }

  .footer nav,
  .footer section {
    display: inline-block;
    vertical-align: top;
    color: #fff;
    /*height: 240px;*/
    font-family: "微软雅黑";
  }
  .footer nav a {
    font-size: 14px "微软雅黑";
    color: #fff;
  }
  .footer .footer-nav ul {
    margin-right: 40px;
  }

  .footer .footer-nav li {
    height: 33px;
  }

  .footer .qr-code {
    margin-right: 117px;
  }

  .footer .qr-code p {
    font-size: 12px;
    text-align: center;
  }
  .footer .sns {
    margin-right: 45px;
  }

  .footer .footer-nav,
  .footer .qr-code,
  .footer .sns,
  .footer .service-tel {
    padding-top: 33px;
  }

  .footer .qr-code .qr-code-inner {
    width: 100px;
    height: 100px;
    background-image: url("../assets/images/qrcode.jpg");
    background-size: 100px 100px;
    margin-bottom: 15px;
  }

  .footer .sns-icons .weibo {
    width: 42px;
    height: 37px;
    display: inline-block;
    background: url("../assets/images/qrcode.jpg");
    cursor: pointer;
    margin: 3px 6px 7px 0;
  }

  .footer .service-tel .footer-title,
  .footer .sns .footer-title {
    margin-bottom: 8px;
  }

  .footer .service-tel .tel-number {
    font-size: 24px;
  }
  .copyrightbox {
    width: 100%;
    background-color: #313131;
  }
  .copyrightbox .copyright {
    height: 40px;
    width: 100%;
    line-height: 50px;
    background-color: #313131;
    color: #535353;
  }
}
</style>