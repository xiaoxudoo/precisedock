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
<<<<<<< HEAD
            <img style="width: 50%;margin-bottom: 120px;" src="../../assets/images/dock.png" />
=======
            <img style="width: 98%;margin-bottom: 160px;" src="../../assets/images/vs01.jpg" />
        </div>
        <div class="router-title">
            <p>基于结构的反向虚拟筛选</p>
            <em class="bar"></em>
        </div>
        <p class="left">
            &nbsp;&nbsp;&nbsp;&nbsp;反向虚拟筛选是一种对给定药物或活性小分子通过计算方法找到其潜在药物靶标的技术。可以用于化合物靶标确证、药物新作用研究、药物毒副作用研究。目前公司已经构建多个靶标库。
        </p>
        <div class="centered">         
            <img style="width: 70%;" src="../../assets/images/vs02.jpg" />
>>>>>>> 1e22da1927d678ab2e89c8932808353e1898c90d
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