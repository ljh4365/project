//二级菜单

$id('list1').onmouseover = function(){
	$id('list_1').style.display = 'block';
	$id('icont1').style.backgroundPosition = '-198px -44px';
//	startMove($id('list_1'), {
//                  height:450,                   
//              });
//	$('#list_1').slideDown(1000);
}
$id('list1').onmouseout = function(){
	$id('list_1').style.display = 'none';
	$id('icont1').style.backgroundPosition = '-214px -44px';
//	startMove($id('list_1'), {
//                  height:0,                   
//              });
}
$id('list2').onmouseover = function(){
	$id('list_2').style.display = 'block';
	$id('icont2').style.backgroundPosition = '-198px -44px';
//	startMove($id('list_2'), {
//                  height:450,                   
//              });
}
$id('list2').onmouseout = function(){
	$id('list_2').style.display = 'none';
	$id('icont2').style.backgroundPosition = '-214px -44px';
//	startMove($id('list_2'), {
//                  height:0,                   
//              });
}
$id('list_1').onmouseover = function(){
	$id('list_1').style.display = 'block';
	$id('icont1').style.backgroundPosition = '-198px -44px';
//	startMove($id('list_1'), {
//                  height:450,                   
//              });
}
$id('list_1').onmouseout = function(){
	$id('list_1').style.display = 'none';
	$id('icont1').style.backgroundPosition = '-214px -44px';
//	startMove($id('list_1'), {
//                  height:0,                   
//              });
}
$id('list_2').onmouseover = function(){
	$id('list_2').style.display = 'block';
	$id('icont2').style.backgroundPosition = '-198px -44px';
//	startMove($id('list_2'), {
//                  height:450,                   
//              });
}
$id('list_2').onmouseout = function(){
	$id('list_2').style.display = 'none';
	$id('icont2').style.backgroundPosition = '-214px -44px';
//	startMove($id('list_2'), {
//                  height:0,                   
//              });
}

//二级菜单滑过
$(function(){
		function fn(ele1,ele2){
			var $tab = $(ele1);
			var $lis = $(ele2);
			$lis.addClass("hide");
			$lis.eq(0).removeClass().addClass("show");
			$tab.hover(function(){
				var $index = $(this).index();//获取下标
//				$(this).animate({opacity:1},500);
				$lis.eq($index).removeClass().addClass("show").siblings().removeClass().addClass("hide");
				$(this).find('img').attr("src","../first_img/img"+($index +1) +"_b.png");
				$(this).find('dd').css("color","#333");
				
			},function(){
//				$(this).animate({opacity:0.5},500);
				var $index = $(this).index();	
				$(this).find('img').attr("src","../first_img/img"+($index +1) +"_s.png");
				$(this).find('dd').css("color","#888");
			})
		}
		fn("#list_t dl","#list_b .ul_1");
		fn("#list_t2 dl","#list_b2 .ul_2");			
	})

//轮播图下的滑动
$(function(){
	var $ali = $('.boxborder ul li');
	$ali.hover(function(){	
		var $index = $(this).index();
		$ali.eq($index).fadeToggle(300);
		$ali.eq($index).css({"background-image":"url(../first_img/phone.jpg)",
		"border-color":"#ebebeb"});
		$ali.eq($index).find('img').attr("src","../first_img/img2.png");
		$ali.eq($index).fadeToggle(500);
		
	},function(){
		var $index = $(this).index();
		$ali.eq($index).css({"background":"white","border-color":"white"});
		$ali.eq($index).find('img').attr("src","../first_img/imgs2.png");
	})
})

//明星单品
function fn1(ele1,ele2){
	var $tab = $(ele1);
	var $lis = $(ele2);
	$lis.eq(0).css("display","block");
	$tab.hover(function(){
		var $index = $(this).index();//获取下标
		$(this).find('a').css("color","#434242");
		$lis.eq($index).css("display","block").siblings().css("display","none");
	},function(){
		$(this).find('a').css("color","#a4a3a3");
	})
}

//明星单品小图滑动
//$(function(){
//	var $Imgs = $(".oBig li");
//	$Imgs.hover(function(){
////		alert(1);
//		$(this).find('img').animate({"margin-top":-10},1000);
//	})
//})

//无缝连接图
$(function(){
	var oUl = $(".slide ul")[0];
	var olis = $(".slide ul li").get();
	var btn_L = $(".btn_L");
	var btn_R = $(".btn_R");
	
//	alert(btn_L);
//	alert(olis.length);
	var length = olis.length * olis[0].offsetWidth;
//	alert(olis[0].offsetWidth);
	oUl.innerHTML += oUl.innerHTML;
	oUl.style.width = length + "px";
//	alert(olis[0].offsetWidth);
	var timer = setInterval(function(){
		startMove(oUl,{			
			left : oUl.offsetLeft - 269
		},function(){
			if(oUl.offsetLeft <= -oUl.offsetWidth/2){
				oUl.style.left = 0;
			}
		})		
	},3000)
	btn_L.click(function(){
		clearInterval(timer);
		oUl.style.left = oUl.offsetLeft - 269 + "px";
		if(oUl.offsetLeft <= -oUl.offsetWidth/2){
				oUl.style.left = 0;
			}
	})
	btn_R.click(function(){
		clearInterval(timer);
		
		oUl.style.left = oUl.offsetLeft + 269 + "px";
		if(oUl.offsetLeft >= 0){
			oUl.style.left = -oUl.offsetWidth/2 +"px";
		}
	})	
})

function goods(){
	$(function(){
				$.getJSON("../src/json/first.json",function(data){
					for(var attr in data){
						var oDiv = $create("div");
						var Img = `<img src="../first_img/${data[attr].left}"/>`;
						$(oDiv).append(Img);
						var oUl = $create("ul");
						for(var i =0;i<data[attr].img.length;i++){
							var oli = $create("li");
							var ospan = $create('span');
							var oImg = `<img src="../first_img/${data[attr].img[i]}"/>`;
							ospan.innerHTML = data[attr].price[i];
							$(oli).append(ospan);
							$(oli).append(oImg);
							$(oUl).append(oli);											
						}
						var oBig = $create("div");
						$(oBig).append(oDiv);
						$(oBig).append(oUl);
						$(oBig).addClass("oBig");
						$(".goodslist").append(oBig);
						$(oBig).css("display","none");										
					}
//					$('img').wrap(function() {
//						 return '<a href=""></a>';
//					});
					
					fn1(".title ul li",".goodslist .oBig");
				})
			})
}











































