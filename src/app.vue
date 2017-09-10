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
    }
    /*这个指令对应的元素当Vue实例化完成前都不显示*/
    [v-cloak] {
        display: none;
    }
</style>