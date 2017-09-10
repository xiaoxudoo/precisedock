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
        margin-top: 90px;
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
            
        }
    }
}
</style>