<template>
	<body>
		<!-- 导航条  默认高度50px, 反色（黑色） 固定在顶部 -->
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<!--当浏览器宽度变窄的时候会显示这个Button按钮，并且会把data-target中的div中ul收缩导航到Button下方-->
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<!--定义小按钮的样式-->
						<span class="sr-only">Toggle navigation</span>
						<!-- 页面变窄时 ， 按钮的3条横线 -->
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!--Logo位置-->
					<a href="#" class="navbar-brand precise-title">
						<img class="logoImg" src="../assets/images/logo.png" width="150" height="50">
					</a>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">

					</ul>
				</div>
			</div>
		</nav>

		<!--栅格系统， 全局CSS样式-栅格系统  -->
		<!--栅格系统放在container容器中-->
		<div class="body container-fluid">
			<!--添加一行占用12列，添加img-->
			<div class="row-fluid">
				<!--javascript插件，添加carousel轮播图-->
				<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
					<!-- Indicators -->
					<ol class="carousel-indicators">
						<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
						<li data-target="#carousel-example-generic" data-slide-to="1"></li>
						<li data-target="#carousel-example-generic" data-slide-to="2"></li>
						<li data-target="#carousel-example-generic" data-slide-to="3"></li>
					</ol>
					<!-- Wrapper for slides -->
					<div class="carousel-inner" role="listbox">
						<div class="item active">
							<img src="../assets/images/carousel01.jpg" />
							<div class="carousel-caption">
								<h2></h2>
							</div>
						</div>
						<div class="item">
							<img src="../assets/images/carousel01.jpg" />
							<div class="carousel-caption">
								<h2></h2>
							</div>
						</div>
						<div class="item">
							<img src="../assets/images/carousel01.jpg" />
							<div class="carousel-caption">
								<h2></h2>
							</div>
						</div>
						<div class="item">
							<img src="../assets/images/carousel01.jpg" />
							<div class="carousel-caption">
								<h2></h2>
							</div>
						</div>
					</div>
					<!-- Controls -->
					<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
			<div class="container-fluid brief">
				<div class="desc row-fluid">
					<div class="col-md-12">
						<h1 class="text-center">
							<span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> 我们致力于
						</h1>
					</div>
				</div>
				<div class="row-fluid centered">
					<div class="col-md-4">
						<div class="thumbnail">
							<img class="vs" src="../assets/images/product01.jpg" alt="virtual screen">
							<div class="caption">
								<h3>虚拟筛选</h3>
								<p>虚拟筛选通过分子对接软件模拟靶点受体蛋白质与多个化合物之间进行相互作用配体，计算两者之间的亲和力大小，从而预测可能的潜在化合物。它能大大缩减传统实验筛选带来的财力、精力、时间上的消耗。</p>
								<a href="./virtualScreen.html" class="btn btn-primary" role="button">查看更多>></a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="thumbnail">
							<img class="md" src="../assets/images/product02.jpg" alt="molecular dynamics">
							<div class="caption">
								<h3>分子动力学模拟</h3>
								<p>分子动力学模拟是一套分子模拟方法，该方法主要是依靠牛顿力学来模拟分子体系的不用状态构成的系统中抽取样本，从而计算体系的构型积分，并以构型积分的结果为基础进一步计算体系的热力学量和其他宏观性质。</p>
								<a href="./md.html" class="btn btn-primary" role="button">查看更多>></a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="thumbnail">
							<img class="dock" alt="molecular docking" src="../assets/images/product03.jpg">
							<div class="caption">
								<h3>分子-蛋白对接</h3>
								<p> 分子对接是依据配体与受体作用的“锁-钥原理”，模拟配体小分子与受体生物大分子相互作用。主要包括静电作用、氢键作用、疏水作用、范德华作用等。通过计算，可以预测两者间的结合模式和亲和力。<br>
								</p>
								<a href="./docking.html" class="btn btn-primary">查看更多>></a>
							</div>
						</div>
					</div>
				</div>
				<div class="row-fluid centered">
					<div class="col-md-4">
						<div class="thumbnail">
							<img class="model" alt="Bootstrap Thumbnail Second" src="../assets/images/product04.jpg">
							<div class="caption">
								<h3>同源建模</h3>
								<p>蛋白质三维结构是理解其生物学功能和进行基于结构的药物设计的重要基础。但是很多蛋白并不能准确测定其三维结构，为了解决这一问题，通过计算模拟的手段来构建这些蛋白的三维结构，这就是所谓的同源建模。
								</p>
								<a class="btn btn-success" href="./model.html">了解详情</a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="thumbnail">
							<img class="pharm" alt="Bootstrap Thumbnail Second" src="../assets/images/product05.jpg">
							<div class="caption">
								<h3>药效团筛选</h3>
								<p>认为化合物与受体相互作用的第一步是受体分子对化合物分子的识别过程，受体须识别接近的分子是否具有相互结合所必须的性质，所谓药效团指的就是符合某一受体对配体分子识别所提出的主要三维空间性质要求的分子结构要素。
								</p>
								<a class="btn btn-success" href="./pharm.html">了解详情</a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="thumbnail">
							<img class="valid" alt="Bootstrap Thumbnail Third" src="../assets/images/product06.jpg">
							<div class="caption">
								<h3>实验验证</h3>
								<p>为了进一步服务好广大客户，本公司可以提供不同水平的试验验证，从小分子购买到后续的试验方案确定再到试验的实施及最后试验结果报告。我们都能提供全程服务。具体详情欢迎您电话咨询我们。
								</p>
								<a class="btn btn-success" href="./valid.html">了解详情</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 合作机构 -->
			<div class="row-fluid centered">
				<div class="col-md-12">
					<div id="cooperation" class="cooperation thumbnail">
						<img class="cop" alt="coopration" src="../assets/images/universities.jpg">
						<div class="caption">
							<h3>普瑞赛思的忠实合作伙伴</h3>
							<ul class="items list-inline">
								<!-- <li class="bg one"></li> -->
								<li class="peking r"></li>
								<li class="cmu r"></li>
								<li class="cas r"></li>
								<li class="bnu r"></li>
								<li class="cau"></li>
								<li class="tsinghua r"></li>
								<li class="drug r"></li>
								<li class="army r"></li>
								<li class="police r"></li>
								<li class="_301"></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- footer -->
		<mfooter></mfooter>
	</body>
</template>

<script>
import mfooter from '../components/footer'
module.exports = {
	data: function() {
		return {
		}
	},

	created: function() {

	},
	components: {
		mfooter
	},
};
</script>

<style lang="scss">
@import '../common/sass/util.scss'; // 强制使用content-box

</style>