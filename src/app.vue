<template>
    <div id="appBody" v-cloak v-bd-statistic>
        <keep-alive>
            <router-view></router-view>            
        </keep-alive>
    </div>
</template>

<script>
module.exports = {
    data:function () {
        return {
        }
    },
    components: {
    },
    created:function () {

    },
    directives: {
        
    }
};
</script>

<style lang="scss">
    @import './common/sass/base.scss';
    html,body{
        height: auto;  // set height on the main element in the body
        background: #fff;
    }
    /*这个指令对应的元素当Vue实例化完成前都不显示*/
    [v-cloak] {
        display: none;
    }
    .centered{
        text-align: center;
    }
    .left{
        text-align: left;
    }
    p.left,
    p.centered{
        margin-bottom: 20px;
        font: 18px "微软雅黑";
    }
    p.float{
        font: 18px "微软雅黑";
    }
    .question{
        margin-top:20px;
        font-weight: bold!important;
        font: 18px "微软雅黑";
    }
    .answer{
        font-weight: 700;
        font: 18px "微软雅黑";
    }
</style>