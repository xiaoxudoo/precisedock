<template>
    <div class="wrapper">
        <mheader></mheader>
        <div class="mbody">
            <div class="row-fluid subheader">
                <div class="container">
                    新闻资讯
                </div>
            </div>
            <div class="row-fluid subnavigator">
                <div class="container">
                    <router-link to="/">首页</router-link> > <router-link to="/news">新闻资讯</router-link>
                </div>
            </div>
            <div class="row-fluid subody">
                <div class="container">
                    <section class="col-md-12">
                        <ul class="news-list">
                            <li>
                                <p class="news-title">
                                    <router-link to="/news/1">
                                        <em></em>普瑞赛思与养生堂研发部门进行深入交流</router-link>
                                </p>
                                <p class="news-content">8月30日我司销售总监及两名骨干技术人员到访养生堂杭州龙坞基地，双方就CADD辅助研发进行了...<router-link to="/news/1">>></router-link><em class="date">2017年8月30日</em></p>
                            </li>
                        </ul>
                    </section>
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
        .subody .news-list {
            margin-top: 50px;
            margin-bottom: 150px;
            .news-title {
                a {
                    color: #3788c5;
                    font-size: 22px;
                    line-height: 25px;
                }
                em {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    transform: rotate(45deg);
                    background: #3788c5;
                    margin-right: 10px;
                }
            }
            .news-content {
                margin-top: 20px;
                padding-left: 25px;
                .date {
                    margin-left: 100px;
                }
            }
        }
    }
}
</style>