var ret = ret();

// 添加 header 和 footer 部分
$(".navbar .navbar-collapse .navbar-nav").append(ret.nav);
$(".footer .footer-nav.flag").append(ret.footer);


$(".dropdown").hover(
	function () {
		var ws = $(this).width();
		$(this).addClass("open").addClass("topborder");
		$(this).children(".dropdown-menu").width(ws);

	},
	function () {
		$(this).removeClass("open").removeClass("topborder");
	}
);

// 百度统计

var _hmt = _hmt || [];

(function() {

  var hm = document.createElement("script");

  hm.src = "//hm.baidu.com/hm.js?70dd77fbe247aa71fd61c99fd02b6e34";

  var s = document.getElementsByTagName("script")[0];

  s.parentNode.insertBefore(hm, s);

})();


