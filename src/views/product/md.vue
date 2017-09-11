<template>
    <div class="inner_router centered">
        <div class="router-title">
            <p>分子动力学模拟</p>
            <em class="bar"></em>
        </div>
        <p class="left">
          &nbsp;&nbsp;&nbsp;&nbsp;分子动力学（Molecular Dynamics, MD）模拟是一套分子模拟方法，该方法主要是依靠牛顿力学来模拟分子体系的不用状态构成的系统中抽取样本，从而计算体系的构型积分，并以构型积分的结果为基础进一步计算体系的热力学量和其他宏观性质。<br/><br/>
          分子动力学模拟能够有效运用于：<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;1、大分子与小分子相互作用，如：预测药物分子与蛋白/DNA的相互作用，材料吸附等;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;2、大分子之间的相互作用（蛋白-蛋白相互作用）;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;3、分子（药物、蛋白、材料分子）三维结构的优化，如优化同源模建的结构;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;4、结构与功能、性质的关系。
        </p><br/>
        <div class="centered">         
            <img style="width:98%;" src="../../assets/images/md01.jpg" />
        </div><br/>
        <p class="left"><strong>分子模拟与药物设计</strong></p>
        <br/>
        <p class="left">1）在对接前，优化蛋白结构</p>
        <p class="left">&nbsp;&nbsp;&nbsp;&nbsp;优化同源建模技术得到的蛋白质结构，蛋白质同源建模通常都基于特定的算法与数据库的搜索，对于非保守区域的氨基酸，其结构往往有较高的随机性，准确度不够，因此需要基于分子力场的动力学模拟技术予以结构优化。</p>
        <br/>
        <p class="left">2）在对接后，验证筛选结果，提高命中率</p>
        <p class="left">&nbsp;&nbsp;&nbsp;&nbsp;一般是先利用动力学模拟优化对接后的蛋白、配体复合物，验证蛋白与筛选的小分子配体的结合情况；利用各种计算自由能的技术来计算蛋白与配体的结合自由能，寻找结合能最大的小分子来进一步筛选小分子化合物。</p>
        <br/>
        <p class="left">3）预测药物与靶标蛋白或DNA的结合机理</p>
        <p class="left">&nbsp;&nbsp;&nbsp;&nbsp;在已知一些实验现象的情况下，如钾离子通道的选择通透性对于神经传导有非常重要的意义，这时需要进一步研究为什么钾离子通道会只选择透过钾离子，而排斥其它离子，这时候最合适的方法就是应用分子动力学模拟，从微观结构上去阐述它的机理。</p>
        </p><br/>
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
</style>