<template>
	<div id="appBody" v-cloak v-bd-statistic>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
		}
	},
	components: {
	},
	created: function() {

	},
	directives: {

	}
};
</script>

<style lang="scss">
@import './common/sass/base.scss';
html,
body {
	height: auto; // set height on the main element in the body
	background: #fff;
}


/*这个指令对应的元素当Vue实例化完成前都不显示*/

[v-cloak] {
	display: none;
}

.centered {
	text-align: center;
}

.left {
	text-align: left;
}

.router-title {
	margin-bottom: 45px;
	p {
		font-family: 'MicroSoft Yahei';
		font-size: 23px;
		color: #000;
		opacity: 0.9;
		margin-bottom: 10px;
		
	}
	.bar {
		display: inline-block;
		width: 50px;
		height: 8px;
		background: #fbe795;
		font-size: 0;
		line-height: 0;
	}
}
p.left {
	text-align: left;
	font-size: 16px;
	line-height: 1.5;
}
.news_content {
	text-align: center;
	p {
		text-indent: 20px;
		text-align: left;
		font-size: 24px;
		color: #000;
		opacity: 0.6;
		font-family: 'MicroSoft Yahei';
		margin-bottom: 20px;		
	}
	img {
		display: inline-block;
		margin-bottom: 40px;
	}
}
</style>