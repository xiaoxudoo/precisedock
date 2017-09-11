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
            <img style="width: 60%;margin-bottom: 120px;" src="../../assets/images/pharmacophore.png" />
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