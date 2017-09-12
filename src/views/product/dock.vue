<template>
    <div class="inner_router centered">
        <div class="router-title">
            <p>分子对接</p>
            <em class="bar"></em>
        </div>
        <p class="left" style="margin-bottom: 50px;">
            &nbsp;&nbsp;&nbsp;&nbsp;分子对接（molecular docking）是依据配体与受体作用的“锁-钥原理”
          （lock and key principle），模拟配体小分子与受体生物大分子相互作用。配体与受体相互作用是分子识别的过程，主要包括静电作用、氢键作用、疏水作用、范德华作用等。通过计算，可以预测两者间的结合模式和亲和力。<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;分子对接能有效运用于：<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;1、探索药物小分子和大分子受体的具体作用方式和结合构型;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;2、筛选可以与靶点结合的先导药物;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;3、解释药物分子产生活性的原因;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;4、指导合理地优化药物分子结构。
        </p>
        <div class="centered">         
            <img style="width: 50%;margin-bottom: 120px;" src="../../assets/images/dock.jpg" />
        </div> 
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
        }
    },
    created: function() {

    },
    components: {
    },
};
</script>

<style lang="scss" scoped>
.inner_router {
    margin-top: 36px;
    padding: 0 0 0 50px;
}
</style>