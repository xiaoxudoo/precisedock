<template>
    <div class="inner_router centered">
        <div class="router-title">
            <p>药效团筛选</p>
            <em class="bar"></em>
        </div>
        <p class="left" style="margin-bottom: 50px;">
            &nbsp;&nbsp;&nbsp;&nbsp;药效团筛选可以分为基于配体和基于受体的筛选两种。基于配体就是根据训练集分子得到的药效特征元素去筛选化学物；基于受体的就是根据与配体的相互作用的蛋白活性位点中心的一些关键氨基酸得到官能团筛选配体，如果有靶标蛋白结的晶结构一般用基于受体的方法如果没有用基于配体的方法。<br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;药效团是一种与生物活性相关的抽象分子特征的表示方法。这些抽象分子特征包括三维的（亲疏水性基团、带电/可离子化基团、氢键供体/受体等），二维的（子结构）和一维的（物化和生物性质）。一个三维的药效团模型给出了这些药效基团之间的特定三维排列方式。利用一系列结构和生物活性具有一定差别的化合物数据集构建一、二和三维药效团模型，这些模型可用于药效团筛选。
        </p>
        <div class="centered">         
<<<<<<< HEAD
            <img style="width: 60%;margin-bottom: 120px;" src="../../assets/images/pharmacophore.png" />
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