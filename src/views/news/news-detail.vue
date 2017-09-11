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
                    <router-link to="/">首页</router-link> > 新闻资讯
                </div>
            </div>
            <div class="row-fluid subody">
                <div class="container">
                    <section class="col-md-12">
                      <div class="news_title centered">{{news.title}}</div>
                      <div class="news_time centered">{{news.time}}</div>
                      <div class="news_content" v-html="news.content"></div>
                    </section>
                </div>
            </div>

        </div>
        <mfooter></mfooter>
    </div>
</template>

<script>
import mheader from '../../components/header'
import mfooter from '../../components/footer'
import { GetNews } from '../../api'
module.exports = {
    data: function() {
        return {
            news: {}
        }
    },
    created: function() {
        var newsId = this.$route.params.id
        this.news = GetNews()[newsId]
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
        .subody  {
            margin-bottom: 100px;
            .news_title {
                margin-top: 70px;
                margin-bottom: 20px;
                font-size: 36px;
                font-family: 'MicroSoft yahei';
                color: #000;
                opacity: 0.9;
            }
            .news_time {
                font-family: 'MicroSoft yahei';
                color: #000;
                opacity: 0.6;
                margin-bottom: 60px;
            }
        }
    }
}
</style>