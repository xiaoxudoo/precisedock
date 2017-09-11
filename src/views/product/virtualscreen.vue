<template>
    <div class="inner_router centered">
        <div class="router-title">
            <p>基于结构的虚拟筛选</p>
            <em class="bar"></em>
        </div>
        <p class="left">
            &nbsp;&nbsp;&nbsp;&nbsp;该技术广泛应用于小分子发现的早期过程中。通过分子对接软件模拟靶点受体蛋白质与多个化合物之间进行相互作用配体，计算两者之间的亲和力大小，从而预测潜在结合的小分子。虚拟筛选技术已经成为当今小分子研发的重要手段，它能大大缩减传统实验筛选带来的财力、精力、时间上的消耗。<br/></br> &nbsp;&nbsp;&nbsp;&nbsp;本公司已经构建多个小分子化合物数据库，包含数百万个小分子，运用多种分子对接软件，可以快速实现寻找潜在先导化合物。</br></br>
        </p>
        <div class="centered">         
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
    margin-bottom: 50px;
    padding: 0 0 0 50px;
}
@media (max-width: 768px) {
	.inner_router {
        padding: 0!important;
    }
}
</style>