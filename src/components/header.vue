<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <!--当浏览器宽度变窄的时候会显示这个Button按钮，并且会把data-target中的div中ul收缩导航到Button下方-->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <!--定义小按钮的样式-->
                    <span class="sr-only">Toggle navigation</span>
                    <!-- 页面变窄时 ， 按钮的3条横线 -->
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!--Logo位置-->
                <a href="#" class="navbar-brand precise-logo">
                    <img src="../assets/images/logo.png">
                </a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">产品与服务
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <router-link to="/product/virtualscreen">虚拟筛选</router-link>
                            </li>
                            <li>
                                <router-link to="/product/md">动力学模拟</router-link>
                            </li>
                            <li>
                                <router-link to="/product/dock">分子对接</router-link>
                            </li>
                            <li>
                                <router-link to="/product/pharmacophore">药效团筛选</router-link>
                            </li>
                            <li>
                                <router-link to="/product/modeling">同源建模</router-link>
                            </li>
                            <li>
                                <router-link to="/product/training">定制培训</router-link>
                            </li>
                            <li>
                                <router-link to="/product/platform">平台建设</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">客户与案例
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <router-link to="/custom/cooperation">合作客户</router-link>
                            </li>
                            <li>
                                <router-link to="/custom/case">经典案例</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/news">新闻资讯</router-link>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">&nbsp;关于我们&nbsp;&nbsp;
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <router-link to="/abouts/company">公司简介</router-link>
                            </li>
                            <li>
                                <router-link to="/abouts/culture">公司文化</router-link>
                            </li>
                            <li>
                                <router-link to="/abouts/join">加入我们</router-link>
                            </li>
                            <li>
                                <router-link to="/abouts/contact">联系我们</router-link>
                            </li>
                            <li>
                                <router-link to="/abouts/faq">常见问题</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
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
// navigator
nav.navbar {
    background: #fff;
    .navbar-header .navbar-brand.precise-logo {
        display: inline-block;
        width: 180px;
        height: 90px;
        padding: 0;
        img {
            display: inline-block;
            width: 180px;
        }
    }
    .navbar-collapse {
        padding: 0;
    }
    .navbar-collapse .navbar-nav {
        position: relative;
        color: #000;
        font-size: 16px;
        &>li:hover {
            background: #e6e7e7;
            a {
                color: #00b7ee;
            }
        }
        .dropdown {
            .dropdown-menu {
                background: #e6e7e7;
                min-width: 125px;
                border: none;
                &>li {
                    position: relative;
                    &::before {
                        position: absolute;
                        content: '';
                        top: 12px;
                        left: 8px;
                        width: 8px;
                        height: 8px;
                        transform: rotate(45deg);
                        background: #00b7ee;
                    }
                    a {
                        padding: 5px 10px;
                        margin-left: 20px;
                        font-weight: 700;
                        font: 14px "Microsoft Yahei";
                        line-height: 1.42857143;
                        color: #333;
                    }
                }
            }
        }
    }
}

@media (min-width: 768px) {
    .navbar-nav {
        float: right;
        margin: 0;
        padding-top: 20px;
    }
}
</style>