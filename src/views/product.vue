<template>
    <div class="wrapper">
        <mheader></mheader>
        <div class="mbody">
            <div class="row-fluid subheader">
                <div class="container">
                    产品与服务
                </div>
            </div>
            <div class="row-fluid subnavigator">
                <div class="container">
                    <router-link to="/">首页</router-link> > 产品与服务
                </div>
            </div>
            <div class="row-fluid subody">
                <div class="container">
                    <div class="col-md-3" style="padding: 0;">
                        <ul class="sidebar">
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
                    </div>
                    <router-view class="col-md-9"></router-view>
                </div>
            </div>

        </div>
        <mfooter></mfooter>
    </div>
</template>

<script>
import mheader from '../components/header'
import mfooter from '../components/footer'
module.exports = {
    data: function() {
        return {
        }
    },
    created: function() {

    },
    components: {
        mheader,
        mfooter
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    .mbody {
        padding: 0px;
        .subheader {
            height: 70px;
            line-height: 70px;
            color: #fff;
            background: #25b9f9;
        }
        .subnavigator {
            height: 40px;
            line-height: 40px;
            color: #000;
            opacity: 0.9;
            background: #f8f8f8;
            a {
                color: #000;
                opacity: 0.9;
            }
        }
        .subody .sidebar {
            width: 265px;
            margin: 50px 0 20px;
            border-top: 1px solid #c8c7c7;
            li {
                position: relative;
                height: 42px;
                line-height: 42px;
                border-bottom: 1px solid #c8c7c7;
                &::before {
                    content: '';
                    position: absolute;
                    top: 16px;
                    left: 0;
                    width: 10px;
                    height: 10px;
                    background: #25b9f9;

                }
                a {
                    margin-left: 20px;
                    color: #000;
                    opacity: 0.9;
                }
            }
        }
    }
}
</style>