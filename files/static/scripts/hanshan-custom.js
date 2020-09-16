/**
 * halo-hanshan主题添加的自定义方法
 */
// ---------- 右下角悬浮按钮 begin ----------
addToolsBtns(); //直接执行
// 插入右下角按钮
function addToolsBtns() {
    var tools_btns = document.createElement("div");
    tools_btns.setAttribute("class", "tools-btns");
    tools_btns.setAttribute("title", "开启/关闭背景");
    document.getElementsByTagName("body")[0].appendChild(tools_btns);
    var innerHTMLStr = "<div onclick='toggleBg()'><i class='fa fa-cog fa-spin fa-5x' aria-hidden='true'></i> </div>";
    document.getElementsByClassName("tools-btns")[0].innerHTML = innerHTMLStr;
}
// 切换背景
function toggleBg() {
    var site_main = document.getElementById("main");
    if (site_main.className === "site-main") {
        site_main.className = "site-main no-bg";
    } else {
        site_main.className = "site-main";
    }
}
// ---------- 右下角悬浮按钮 end ----------

// ---------- 首页图片随鼠标移动视差效果 begin ----------
var background = document.getElementsByClassName("cover-bg")[0];
var range = 40;
var calcValue = function calcValue(a, b) {
	return (a / b * range - range / 2).toFixed(1);
};
var timeout = void 0;
document.addEventListener('mousemove',
function(_ref) {
	var x = _ref.x,
	y = _ref.y;
	if (timeout) {
		window.cancelAnimationFrame(timeout);
	}
	timeout = window.requestAnimationFrame(function() {
		var yValue = calcValue(y, window.innerHeight)+5;
		var xValue = calcValue(x, window.innerWidth);
		console.log(xValue, yValue);
		background.style.backgroundPosition = xValue * .45 + "px " + (-yValue * .45 - 50) + "px";
	})
},false);
// ---------- 首页图片随鼠标移动视差效果 end ----------

