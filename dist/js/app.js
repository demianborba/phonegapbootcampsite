function adjustListMenuLeftPaddingTop(){document.getElementById("list-menu-left").style.paddingTop=window.innerHeight/2+"px"}window.onload=function(){adjustListMenuLeftPaddingTop();new Snap({element:document.getElementById("content"),disable:"right"});FastClick.attach(document.body)},window.addEventListener("orientationchange",function(){adjustListMenuLeftPaddingTop()},!1);var addEvent=function(t,n,e){return t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent?t.attachEvent("on"+n,e):void 0};addEvent(document.getElementById("open-left-button"),"click",function(){snapper.open("left")});