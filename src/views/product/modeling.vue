<template>
    <div class="inner_router centered">
        <div class="router-title">
            <p>同源建模</p>
            <em class="bar"></em>
        </div>
        <p class="left"  style="margin-bottom: 120px;">
            &nbsp;&nbsp;&nbsp;&nbsp;蛋白质三维结构是理解其生物学功能和进行基于结构的药物设计的重要基础。但是很多蛋白并不能准确测定其三维结构，为了解决这一问题，科学家们通过计算模拟的手段来构建这些蛋白的三维结构，这就是所谓的同源建模(Homology Modeling)。<br/><br/>
            <span style="font-weight:bold">目前常用的有两种方法来实现蛋白的三维结构模建：</span></br>
            1、蛋白质从头模建，也叫从头预测法，从头预测是不依赖模板仅从氨基酸序列信息得到天然结构，它的关键是正确定义能量函数、精确选用计算机搜索算法来寻找能量最低值；<br/>
            2、蛋白质同源模建。这种方法基本假设是：如果未知结构蛋白A与已知结构蛋白B之间具有序列、结构和功能上的同源性，则蛋白A可以以蛋白B为模板来构建其全原子三维结构。<br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;高质量的同源建模的结果可以帮助研究人员了解目标蛋白的结构性质，分析与研究其“结构—功能”关系，以便研究蛋白-蛋白相互作用，蛋白-DNA、RNA和小分子药物、多肽相互作用。可用于阐明蛋白作用机制，药物的虚拟筛选，药物的设计，以发现某种疾病的潜在治疗药物。<br/><br/>
            <span style="font-weight:bold">建模服务类型：</span>抗体建模、GPCR蛋白建模、激酶蛋白建模、普通蛋白同源建模、同源多聚体的蛋白同源模建、异源多聚体的蛋白同源模建。
        </p>
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