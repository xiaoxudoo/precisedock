<template>
	<body>
		<!-- 导航条  默认高度50px, 反色（黑色） 固定在顶部 -->
		<nav class="navbar navbar-default">
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
					<a href="#" class="navbar-brand precise-logo">
						<img src="../assets/images/logo.png">
					</a>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<div class="tel"><em></em>400-0181-609</div>
						<li><router-link to="/">首页</router-link></li>						
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">产品与服务<span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li><router-link to="/product/virtualscreen">虚拟筛选</router-link></li>
								<li><router-link to="/product/md">动力学模拟</router-link></li>
								<li><router-link to="/product/dock">分子对接</router-link></li>
								<li><router-link to="/product/pharmacophore">药效团筛选</router-link></li>
								<li><router-link to="/product/modeling">同源建模</router-link></li>
								<li><router-link to="/product/training">定制培训</router-link></li>
								<li><router-link to="/product/platform">平台建设</router-link></li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">客户与案例<span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li><router-link to="/custom/cooperation">合作客户</router-link></li>
								<li><router-link to="/custom/case">经典案例</router-link></li>
							</ul>
						</li>
						<li><router-link to="/news">新闻资讯</router-link></li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">&nbsp;关于我们&nbsp;&nbsp;<span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li><router-link to="/abouts/company">公司简介</router-link></li>
								<li><router-link to="/abouts/culture">公司文化</router-link></li>
								<li><router-link to="/abouts/join">加入我们</router-link></li>
								<li><router-link to="/abouts/contact">联系我们</router-link></li>
								<li><router-link to="/abouts/faq">常见问题</router-link></li>
							</ul>
						</li>
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
							<img src="../assets/images/carousel02.jpg" />
							<div class="carousel-caption">
								<h2></h2>
							</div>
						</div>
						<div class="item">
							<img src="../assets/images/carousel03.jpg" />
							<div class="carousel-caption">
								<h2></h2>
							</div>
						</div>
						<div class="item">
							<img src="../assets/images/carousel04.jpg" />
							<div class="carousel-caption">
								<h2></h2>
							</div>
						</div>
					</div>
					<!-- Controls -->
					<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
						<span style="opacity:0;" class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
						<span style="opacity:0;" class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
			<div class="row-fluid">
				<img class="text-center products" src="../assets/images/products.png" />
			</div>
			<div class="container-fluid">
				<div class="row-fluid centered">
					<div class="col-md-4">
						<div class="thumbnail">
							<router-link to="/product/virtualscreen">
								<img class="vs" src="../assets/images/product01.jpg" alt="virtual screen">
								<div class="caption">
									<p>虚拟筛选</p>
								</div>
							</router-link>
						</div>
					</div>
					<div class="col-md-4">
						<div class="thumbnail">
							<router-link to="/product/md">
								<img class="md" src="../assets/images/product02.jpg" alt="molecular dynamics">
								<div class="caption">
									<p>分子动力学模拟</p>
								</div>
							</router-link>
						</div>
					</div>
					<div class="col-md-4">
						<div class="thumbnail">
							<router-link to="/product/dock">							
								<img class="dock" alt="molecular docking" src="../assets/images/product03.jpg">
								<div class="caption">
									<p>分子对接</p>
								</div>
							</router-link>
						</div>
					</div>
				</div>
				<div class="row-fluid centered">
					<div class="col-md-4">
						<div class="thumbnail">
							<router-link to="/product/modeling">														
								<img class="model" alt="Bootstrap Thumbnail Second" src="../assets/images/product04.jpg">
								<div class="caption">
									<p>同源建模</p>
								</div>
							</router-link>
						</div>
					</div>
					<div class="col-md-4">
						<div class="thumbnail">
							<router-link to="/product/pharmacophore">
								<img class="pharm" alt="Bootstrap Thumbnail Second" src="../assets/images/product05.jpg">
								<div class="caption">
									<p>药效团筛选</p>
								</div>
							</router-link>
						</div>
					</div>
					<div class="col-md-4">
						<div class="thumbnail">
							<router-link to="/product/platform">
								<img class="valid" alt="Bootstrap Thumbnail Third" src="../assets/images/product06.jpg">
								<div class="caption">
									<p>平台建设</p>
								</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<!-- 合作机构 -->
			<div class="row-fluid centered">
				<div class="col-md-12" style="padding:0;">
					<div id="cooperation" class="cooperation thumbnail" style="padding:0;">
						<img class="cop" alt="coopration" src="../assets/images/universities.jpg">
						<div class="caption">
							<ul class="items list-inline">
								<li class="peking"></li>
								<li class="tsinghua"></li>
								<li class="uestc"></li>
								<li class="btech"></li>
								<li class="sichuan"></li>
								<li class="xj"></li>
								<li class="cas"></li>
								<li class="wuhan"></li>
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
@import '../common/sass/util.scss';
// navigator
nav.navbar {
	background: #fff;
	margin-bottom: 0;
	.navbar-header .navbar-brand.precise-logo {
		display: inline-block;
		width: 300px;
		height: auto;
		padding: 0;
		img {
			display: inline-block;
			width: 100%;
		}
	}
	.navbar-collapse {
		padding: 0;
	}
	.navbar-collapse .navbar-nav {
		position: relative;
		color: #000;
		font-size: 16px;
		.tel {
			position: absolute;
			top: 10px;
			right: 20px;
			font-size: 22px;
			font-weight: bold;
			font-family: 'MicroSoft Yahei';
			color: #000;
			line-height: 60px;
			em {
				display: inline-block;
				vertical-align: -18px;
				width: 50px;
				height: 50px;
				background: url('../assets/images/tel.png') no-repeat 0 0;
				background-size: 100%;
				margin-right: 10px;
			}
		}
		& > li:hover {
			background: #e6e7e7;
			a {color: #00b7ee;}
		}
		.dropdown {
			.dropdown-menu {
				background: #e6e7e7;
				min-width: 120px;
				border: none;
				& > li{
					position: relative;
					&::before {
						position: absolute;
						content: '';
						top: 12px;
						left: 8px;
						width: 8px;
						height: 8px;
						transform: rotate(45deg);
						background: #00b7ee;
					}
					a {
						padding: 5px 10px;
						margin-left: 20px;
						font-weight: 700;
						font: 14px "Microsoft Yahei";
						line-height: 1.42857143;
						color: #333;
					}
				}
			}
		}
	}
}

.body {
	padding: 0px;
	.carousel-control {
		background: none!important;
	}
	.products {
		display:block;
		width: 400px;
		margin: 0 auto;
		margin-bottom: 80px;
		margin-top: 100px;
	}
	.thumbnail {
		margin-bottom: 95px;
		padding: 0;
		border: 3px solid #00a0e9;
		border-radius: 0;
		p {line-height:80px;font-size: 20px;}
		img {
			width: 100%;
		}
	}
	/*cooperation*/
	.cooperation {
		border: none;
		.caption {
			position: relative;
			h3 {
				font: 24px "Microsoft Yahei", Arial;
			}
			ul.items {
				margin-top: 100px;
				li {
				position: relative;
				width: 350px;
				height: 100px;
				padding: 0px;
				margin-bottom: 50px;
				overflow: hidden;
				display: inline-block;
				-webkit-transition: all .5s ease-in-out 0s;
				-moz-transition: all .5s ease-in-out 0s;
				-ms-transition: all .5s ease-in-out 0s;
				-o-transition: all .5s ease-in-out 0s;
				transition: all .5s ease-in-out 0s;
				&.peking {
					background: url('../assets/images/cop.jpg') no-repeat -1720px -57px;
				}
				&.tsinghua {
					background: url('../assets/images/cop.jpg') no-repeat -480px -57px;
				}
				&.uestc {
					background: url('../assets/images/cop.jpg') no-repeat -40px -57px;
				}
				&.btech {
					background: url('../assets/images/cop.jpg') no-repeat -2950px -57px;
				}
				&.sichuan {
					background: url('../assets/images/cop.jpg') no-repeat -2130px -52px;
				}
				&.xj {
					background: url('../assets/images/cop.jpg') no-repeat -2540px -57px;
				}
				&.cas {
					background: url('../assets/images/cop.jpg') no-repeat -870px -57px;
				}
				&.wuhan {
					background: url('../assets/images/cop.jpg') no-repeat -1290px -57px;
				}
			}
			}
		}
	}
}
@media (min-width: 768px) {
	.navbar-nav {
		float: right;
		margin: 0;
		padding-top: 68px;
	}
}
@media (max-width: 768px) {
	.navbar-nav {
		margin: 0;
		.tel {
			top: 0px!important;
		}
	}
}
</style>
